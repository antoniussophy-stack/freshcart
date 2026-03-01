import { faBox, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getUserOrders } from "../server/order.server";
import OrderCard from "../components/OrderCard";

export default async function OrdersScreen() {
    const response = await getUserOrders();
    const orders = response.data;

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <Link href="/" className="hover:text-green-600 transition">
                            Home
                        </Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-900 font-medium">My Orders</span>
                    </nav>
                    {/* Title Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-green-500 to-green-600 flex items-center justify-center">
                                <FontAwesomeIcon icon={faBox} className="text-2xl text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                    My Orders
                                </h1>
                                <p className="text-gray-500 text-sm mt-0.5">
                                    Track and mange your orders
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link
                        href="/"
                        className="self-start sm:self-auto text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2">
                        <FontAwesomeIcon icon={faShoppingBag} className="text-xs" />
                        Continue Shopping
                    </Link>
                </div>
                {/* Orders List */}
                <div className="space-y-4">
                    {orders.map((order) => <OrderCard key={order._id} orderInfo={order} />)}
                </div>
            </div >
        </>
    )
}