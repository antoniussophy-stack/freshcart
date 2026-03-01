"use client"
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowsRotate, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../types/product.types";
import Link from "next/link";
import Rating from "@/src/components/ui/Rating";
import { addProductToCart, getLoggedUserCart } from "../../cart/server/cart.actions";
import { toast } from "react-toastify";
import { setCartInfo } from "../../cart/store/cart.slice";
import { useAppDispatch } from "@/src/store/store";

export default function ProductCard({ info }: { info: Product }) {
    const { id, category, imageCover, title, ratingsAverage, ratingsQuantity, price, priceAfterDiscount } = info;
    const onSale = priceAfterDiscount ? priceAfterDiscount < price : false;
    const discountPercentage = priceAfterDiscount ? Math.round((price - priceAfterDiscount) / price * 100) : 0;
    const dispatch = useAppDispatch()

    const handleAddToCart = async () => {
        try {
            const response = await addProductToCart({ productId: id });
            if (response.status == "success") {
                toast.success(response.message);
                // update cart in store after successful addition
                const cartInfo = await getLoggedUserCart();
                dispatch(setCartInfo(cartInfo));
            } else {
                // server returned an error status but no exception was thrown
                toast.error(response.message || "Could not add product to cart");
            }
        } catch (error: any) {
            console.error("addProductToCart failed", error); // ! --- Ai ---
            const message = error?.message || "Failed to add product to cart";
            toast.error(message);
            // if not authenticated, redirect to login page (optional)
            if (message.toLowerCase().includes("authentication")) {
                window.location.href = "/login";
            }
        }
    }

    return (
        <>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:scale-103 transition duration-200 px-3 pb-3">
                <div className="relative">
                    <img src={imageCover} alt={title} className="bg-white w-full h-60 object-contain" />

                    <div className="absolute top-3 left-3">
                        {onSale && (<span className="bg-red-500 text-white px-2 py-1 rounded text-xs">-{discountPercentage}%</span>)}
                    </div>

                    <div className="absolute top-3 right-0.5 space-y-2 ">
                        <button className="size-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:border-red-500 transition-colors duration-200">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                        <button className="size-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-500 hover:border-blue-500 transition-colors duration-200">
                            <FontAwesomeIcon icon={faArrowsRotate} />
                        </button>
                        <Link href={`/products/${id}`}>
                            <button className="size-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-green-500 hover:border-green-500 transition-colors duration-200">
                                <FontAwesomeIcon icon={faEye} />
                            </button>
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="text-xs text-gray-400 mb-1">{category.name}</div>
                    <h3 className="font-medium cursor-pointer mb-1">
                        <Link href={''} className="line-clamp-1">{title}</Link>
                    </h3>
                </div>

                <div className="flex items-center mb-2">
                    <div className="text-amber-400 mr-2 flex">
                        <Rating rating={ratingsAverage} /> {/* watch video */}
                    </div>
                    <span className="text-xs text-gray-400">{ratingsAverage} ({ratingsQuantity} reviews)</span>
                </div>

                <div className="flex items-center justify-between ">
                    <div>
                        {onSale ? <>
                            <span className="font-bold text-green-500 text-lg">{priceAfterDiscount} EGP</span>
                            <span className="line-through text-gray-500 text-sm ml-2">{price} EGP</span>
                        </>
                            : <span className="font-semibold text-black text-lg">{price} EGP</span>}
                    </div>
                    <button onClick={handleAddToCart}
                        className="size-9 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </>
    )
}
