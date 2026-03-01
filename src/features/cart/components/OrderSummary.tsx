import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLock, faShield, faTag, faTruck, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import CheckOutScreen from '../../cheekOut/screens/checkOut.screen';
import { useRouter } from 'next/navigation';

export default function OrderSummary({ numOfCartItems, totalCartPrice }: { numOfCartItems: number, totalCartPrice: number }) {
    const subtotal = totalCartPrice;
    const shipping = subtotal > 500 ? 0 : 100;
    const total = Math.round(shipping + subtotal);

    const router = useRouter()
    const CheckOut = () => {
        router.push("/checkout")
        CheckOutScreen()
    }
    return (
        <>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-4">
                {/* Header Section - Green Background */}
                <div className="bg-green-600 p-5 text-white">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                        <FontAwesomeIcon icon={faLock} className="text-sm" />
                        Order Summary
                    </h2>
                    <p className="text-sm opacity-90 mt-1">You have {numOfCartItems} {numOfCartItems == 1 ? "item" : "items"} in your cart</p>
                </div>

                <div className="p-6">
                    {/* Free Shipping Progress Section */}
                    {shipping > 0 && (
                        <div className="bg-orange-50 rounded-2xl p-4 mb-4 border border-orange-100">
                            <div className="flex items-center gap-3 mb-3">
                                <FontAwesomeIcon icon={faTruck} className="text-orange-500" />
                                <span className="text-sm font-medium text-gray-700">Add {500 - subtotal} EGP for free shipping</span>
                            </div>
                            <div className="w-full bg-orange-200 rounded-full h-2 overflow-hidden">
                                <div className="bg-orange-500 h-2 rounded-full"
                                    style={{ width: `${subtotal / 500 * 100}%` }}></div>
                            </div>
                        </div>
                    )}

                    {/* Free Shipping Success Message */}
                    {shipping == 0 && (
                        <div className="bg-emerald-50 rounded-2xl p-4 mb-6 border border-emerald-100 flex items-center gap-4">
                            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                                <FontAwesomeIcon icon={faTruck} />
                            </div>
                            <div>
                                <h4 className="text-emerald-800 font-bold text-sm">Free Shipping!</h4>
                                <p className="text-emerald-600 text-xs">You qualify for free delivery</p>
                            </div>
                        </div>
                    )}

                    {/* Pricing Details */}
                    <div className="space-y-4 mb-6">
                        <div className="flex justify-between text-gray-600">
                            {/* <span className="text-sm">Subtotal (subtotal (1) items)</span> */}
                            <span className="font-bold text-gray-900">{subtotal} EGP</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>shipping</span>
                            {shipping == 0 ? <span className="font-bold text-emerald-600">FREE</span>
                                : <span className="text-sm text-gray-600">100</span>}
                        </div>
                    </div>

                    <hr className="border-gray-100 mb-6" />

                    {/* Total Price Section */}
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-xl font-bold text-gray-900">Total</span>
                        <div className="text-right">
                            <span className="text-2xl font-black text-gray-900">{total}</span>
                            <span className="text-sm font-bold text-gray-400 ml-1 uppercase">EGP</span>
                        </div>
                    </div>

                    {/* Promo Code Section */}
                    <div className="mb-8">
                        <div className="w-full items-center gap-2 border-2 border-dashed border-gray-200 rounded-xl p-3 text-gray-500 hover:border-primary-300 transition-colors cursor-pointer">
                            <FontAwesomeIcon icon={faTag} className="text-sm ml-auto rotate-90" />
                            <span className="text-sm font-medium">Apply Promo Code</span>
                        </div>
                    </div>

                    {/* Secure Checkout Button */}
                    <button
                        onClick={CheckOut}
                        className="w-full cursor-pointer bg-green-600 text-white py-4 px-6 rounded-xl font-bold hover:bg-green-500 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-600/20 mb-6">
                        <FontAwesomeIcon icon={faLock} />
                        Secure Checkout
                    </button>

                    {/* Trust Links */}
                    <div className="flex items-center justify-center gap-6 py-4 border-t border-gray-50">
                        <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                            <FontAwesomeIcon icon={faShield} className="text-emerald-500 text-sm" />
                            Secure Payment
                        </div>
                        <div className="w-1 h-4 bg-gray-200"></div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                            <FontAwesomeIcon icon={faBolt} className="text-blue-500 text-sm" />
                            Fast Delivery
                        </div>
                    </div>

                    {/* Back to Shopping */}
                    <Link href="/" className="flex items-center justify-center gap-2 text-green-600 font-bold text-sm mt-4 hover:underline">
                        <span>←</span> Continue Shopping
                    </Link>
                </div>
            </div>
        </>
    )
}
