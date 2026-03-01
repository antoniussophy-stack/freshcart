"use client"
import Link from "next/link";
import { Product } from "../../types/product.types";
import Rating from "@/src/components/ui/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCartShopping, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { useState } from "react";

export default function ProductInfo({ product }: { product: Product }) {
    const { id, title, description, quantity = 0, price, priceAfterDiscount, ratingsAverage, ratingsQuantity, images, category, brand } = product;
    const onSale = priceAfterDiscount ? priceAfterDiscount < price : false;
    const discountPercentage = priceAfterDiscount ? Math.round((price - priceAfterDiscount) / price * 100) : 0;

    const inlowStock = quantity > 0 && quantity < 10;
    const [count, setCount] = useState(1)

    return (
        <>
            <section id="product-detail" className="py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Product Images - Wider layout */}
                        <div id="product-images" className="lg:w-1/4">
                            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
                                <ImageGallery items={images.map((image) => {
                                    return {
                                        original: image,
                                        thumbnail: image
                                    }
                                })}
                                    showFullscreenButton={false}
                                    showNav={false}
                                    showPlayButton={false}
                                />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div id="product-info" className="lg:w-3/4">
                            <div className="bg-white rounded-xl shadow-sm p-6">

                                {/* Category & Brand Badges */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Link
                                        href={""}
                                        className="bg-primary-50 text-primary-700 text-xs px-3 py-1.5 rounded-full hover:bg-primary-100 transition">
                                        {category.name}
                                    </Link>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                                        {brand?.name}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                                    {title}
                                </h1>

                                {/* Ratings */}
                                <div className="flex items-center gap-3 mb-4">
                                    <Rating rating={ratingsAverage} />
                                    <span className="text-sm text-gray-600">
                                        {ratingsAverage} ({ratingsQuantity} reviews)
                                    </span>
                                </div>

                                {/* Price Section */}
                                <div className="flex items-center flex-wrap gap-3 mb-6">
                                    <span className="text-3xl font-bold text-gray-900">
                                        {priceAfterDiscount || price} EGP
                                    </span>
                                    {onSale && (
                                        <>
                                            <span className="text-lg text-gray-400 line-through">
                                                {price}
                                            </span>
                                            <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                                                save {discountPercentage}%
                                            </span>
                                        </>
                                    )}
                                </div>

                                {/* Stock Status */}
                                <div className="flex items-center gap-2 mb-6">
                                    {quantity > 0 ? (
                                        <span className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700`}>
                                            <span className={`w-2 h-2 rounded-full ${inlowStock ? "bg-yellow-600" : "bg-green-500"}`}></span>
                                            {inlowStock ? `Only ${quantity} left - Order soon!` : "In Stock"}
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-red-50 text-red-700">
                                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                            Out of Stock
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                <div className="border-t border-gray-100 pt-5 mb-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        {description}
                                    </p>
                                </div>

                                {/* Quantity Selector */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Quantity
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                                            <button
                                                id="decrease-qty"
                                                onClick={() => { setCount(count - 1) }}
                                                className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
                                            >
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>
                                            <input
                                                type="number"
                                                min={1}
                                                value={count}
                                                onChange={(e) => { setCount(+e.target.value) }}
                                                readOnly
                                                className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
                                                id="quantity"
                                            />
                                            <button
                                                id="increase-qty"
                                                onClick={() => { setCount(count + 1) }}
                                                className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
                                            >
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                        </div>
                                        <span className="text-sm text-gray-500">{quantity} available</span>
                                    </div>
                                </div>

                                {/* Total Price */}
                                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Total Price:</span>
                                        <span className="text-2xl font-bold text-primary-600">
                                            {Math.round(count * (priceAfterDiscount || price))} EGP
                                        </span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <button
                                        id="add-to-cart"
                                        className="flex-1 bg-green-600 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-green-700 active:scale-[0.98] transition flex items-center justify-center gap-2"
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} />
                                        Add to Cart
                                    </button>
                                    <button
                                        id="buy-now"
                                        className="flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition flex items-center justify-center gap-2"
                                    >
                                        <FontAwesomeIcon icon={faBolt} />
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
