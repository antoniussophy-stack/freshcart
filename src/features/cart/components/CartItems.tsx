"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { CartItem } from "../types/cart.types";
import { RemoveProductFromCart, updateProduct } from '../server/cart.actions';
import Swal from 'sweetalert2'
import { removeProduct, setCartInfo } from '../store/cart.slice';
import { useAppDispatch } from '@/src/store/store';

export default function CartItems({ info }: { info: CartItem }) {
    const { _id, price, count, product } = info
    const { id, category, imageCover, title, quantity } = product
    const dispatch = useAppDispatch()

    const RemoveProduct = async () => {
        const result = await Swal.fire({
            html: `
            <div class="text-center pt-4 px-6 bg-white rounded-xl max-w-sm mx-auto">
                <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
                    <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </div>

                <h3 class="text-2xl font-bold text-gray-900 mb-3">Remove Item?</h3>

                <p class="text-gray-500 text-base mb-8 leading-relaxed">
                    Remove <span class="font-semibold text-gray-700">${title.slice(0, 40)}${title.length > 40 ? "..." : ""}</span> from your cart?
                </p>
            </div>
            `,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Remove",
            cancelButtonText: "Cancel",
            buttonsStyling: false,
            customClass: {
                popup: "rounded-2xl shadow-2xl border-0 p-0",
                htmlContainer: "p-6 m-0",
                actions: "px-6 pb-6 pt-0 gap-3 flex-row-reverse",
                confirmButton:
                    "bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all",
                cancelButton:
                    "bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all",
            }
        })
        if (result.isConfirmed) {
            dispatch(removeProduct({ id }))
            await RemoveProductFromCart({ productId: id })
        }
    }

    const UpdateProduct = async (newCount: number) => {
        if (newCount < 1) return;
        try {
            const response = await updateProduct(id, newCount)
            dispatch(setCartInfo(response))
        } catch (error) {
            throw error
        }
    }

    return (
        <>
            <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="p-4 sm:p-5">
                    <div className="flex gap-4 sm:gap-6">
                        {/* Product Image Section */}
                        <Link href={``} className="relative shrink-0 group">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 flex items-center justify-center overflow-hidden">
                                <img
                                    src={imageCover}
                                    alt={title}
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            {/* In Stock Badge */}
                            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                                <FontAwesomeIcon icon={faCheck} className="text-[8px]" />
                                In Stock
                            </div>
                        </Link>
                        {/* Product Info Section */}
                        <div className="flex-1 min-w-0 flex flex-col">
                            {/* Top Section: Category & Title */}
                            <div className="mb-3">
                                <Link href={``} className="group/title">
                                    <h3 className="font-semibold text-gray-900 group-hover/title:text-green-600 transition-colors leading-relaxed truncate">
                                        {title}
                                    </h3>
                                </Link>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="inline-block px-2.5 py-1 bg-linear-to-r from-green-50 to-emerald-50 text-green-700 text-xs rounded-lg font-medium">
                                        {category.name}
                                    </span>
                                    <span className="text-xs text-gray-400">•</span>
                                    <span className="text-xs text-gray-500">
                                        SKU: <span className="text-gray-400">{_id.slice(-6).toUpperCase()}</span>
                                    </span>
                                </div>
                            </div>
                            {/* Price Section */}
                            <div className="mb-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-green-600 font-bold text-lg">
                                        {price} EGP
                                    </span>
                                    <span className="text-xs text-gray-400 font-normal">per unit</span>
                                </div>
                            </div>
                            {/* Bottom Section: Quantity Controls & Actions */}
                            <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                                {/* Quantity Selector */}
                                <div className="flex items-center">
                                    <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                                        <button onClick={() => UpdateProduct(count - 1)}
                                            disabled={count <= 1}
                                            className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-green-600 hover:bg-gray-50 transition-all active:scale-90"
                                            aria-label="Decrease quantity">
                                            <FontAwesomeIcon icon={faMinus} className="text-xs" />
                                        </button>
                                        <span className="w-12 text-center font-bold text-gray-900">
                                            {count}
                                        </span>
                                        <button onClick={() => UpdateProduct(count + 1)}
                                            disabled={count >= quantity}
                                            className="h-8 w-8 rounded-lg bg-green-600 shadow-sm shadow-green-600/30 flex items-center justify-center text-white hover:bg-green-700 transition-all active:scale-90"
                                            aria-label="Increase quantity">
                                            <FontAwesomeIcon icon={faPlus} className="text-xs" />
                                        </button>
                                    </div>
                                </div>
                                {/* Line Total & Remove Button */}
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400 mb-0.5 font-medium uppercase tracking-wider">Total</p>
                                        <p className="text-xl font-bold text-gray-900">
                                            {price * count}
                                            <span className="text-sm font-medium text-gray-400 ml-1">EGP</span>
                                        </p>
                                    </div>

                                    <button onClick={RemoveProduct}
                                        className="h-10 w-10 rounded-xl border border-red-100 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 flex items-center justify-center group"
                                        title="Remove item"
                                        aria-label="Remove from cart">
                                        <FontAwesomeIcon icon={faTrash} className="text-sm group-hover:shake" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



