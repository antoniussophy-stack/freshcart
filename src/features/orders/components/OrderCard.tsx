import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Order } from "../types/orders.types";
import { faBox, faCalendarDays, faChevronDown, faCircleCheck, faClock, faCreditCard, faHashtag, faMapMarkerAlt, faMoneyBill, faReceipt, faTruck } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

interface OrderCardProps {
    orderInfo: Order;
}

export default function OrderCard({ orderInfo }: OrderCardProps) {
    function getStatus() {
        if (orderInfo.isDelivered) {
            return {
                label: "Delivered",
                icon: faCircleCheck,
                colors: {
                    background: "bg-green-100",
                    text: "text-green-600",
                    border: "border-green-300"
                }
            }
        }
        if (orderInfo.isPaid) {
            return {
                label: "on The way",
                icon: faTruck,
                colors: {
                    background: "bg-blue-100",
                    text: "text-blue-600",
                    border: "border-blue-300"
                }
            }
        }
        return {
            label: "processimg",
            icon: faClock,
            colors: {
                background: "bg-orange-100",
                text: "text-orange-600",
                border: "border-orange-300"
            }
        }
    }
    const status = getStatus()
    return (
        <>
            {/* Orders List */}
            <div className="space-y-4">
                <div className="bg-white rounded-2xl border transition-all duration-300 overflow-hidden border-gray-100 shadow-sm hover:shadow-md">
                    {/* Main Content */}
                    <div className="p-5 sm:p-6">
                        <div className="flex gap-5">
                            {/* Product Images Stack */}
                            <div className="relative shrink-0">
                                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-linear-to-br from-gray-50 to-white border border-gray-100 flex items-center justify-center overflow-hidden">
                                    {orderInfo.cartItems[0] && (
                                        <img
                                            src={orderInfo.cartItems[0].product.imageCover}
                                            alt=""
                                            className="w-full h-full object-contain"
                                        />
                                    )}
                                </div>
                                {/* Multi-item indicator */}
                                {orderInfo.cartItems.length > 1 && (
                                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                                        +{orderInfo.cartItems.length - 1}
                                    </div>
                                )}
                            </div>
                            {/* Order Info */}
                            <div className="flex-1 min-w-0">
                                {/* Status & Order Number Row */}
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div>
                                        <div>
                                            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${status.colors.background} rounded-lg mb-2`}>
                                                <FontAwesomeIcon
                                                    icon={status.icon}
                                                    className={`text-xs ${status.colors.text}`}
                                                />
                                                <span className={`text-xs font-semibold ${status.colors.text}`}>
                                                    {status.label}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                            <FontAwesomeIcon
                                                icon={faHashtag}
                                                className="text-xs text-gray-400"
                                            />
                                            {orderInfo.id}
                                        </h3>
                                    </div>
                                </div>
                                {/* Payment Method */}
                                <div>
                                    <div
                                        className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${orderInfo.paymentMethodType == "card" ? "bg-purple-100" : "bg-gray-100"}`}>
                                        <FontAwesomeIcon
                                            icon={orderInfo.paymentMethodType == "card" ? faCreditCard : faMoneyBill}
                                            className={orderInfo.paymentMethodType == "card" ? "text-purple-600" : "text-gray-600"}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Date & Items */}
                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                                <span className="flex items-center gap-1.5">
                                    <FontAwesomeIcon
                                        icon={faCalendarDays}
                                        className="text-xs text-gray-400"
                                    />
                                    {/* {new Date (orderInfo.createdAt).toLocaleDateString("en-us"),{
                                        day: "numetic",
                                        month: "short",
                                        year: "numetic"
                                    }} */}

                                </span>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <span className="flex items-center gap-1.5">
                                    <FontAwesomeIcon
                                        icon={faBox}
                                        className="text-xs text-gray-400"
                                    />
                                    {orderInfo.cartItems.reduce((acc, el) => acc += el.count, 0)} items
                                </span>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <span className="flex items-center gap-1.5">
                                    <FontAwesomeIcon
                                        icon={faMapMarkerAlt}
                                        className="text-xs text-gray-400"
                                    />

                                </span>
                                {/* Price & Action Row */}
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-900">
                                            {orderInfo.totalOrderPrice}
                                        </span>
                                        <span className="text-sm font-medium text-gray-400 ml-1">
                                            EGP
                                        </span>
                                    </div>
                                    <button
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all bg-gray-100`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faChevronDown}
                                            className={`text-xs transition-transform duration-300 `}
                                        />
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
