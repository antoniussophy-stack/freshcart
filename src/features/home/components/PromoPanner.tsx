import { faArrowRotateLeft, faHeadset, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PromoPanner() {
    const features = [
        {
            icon: faTruck,
            title: "Free Shipping",
            description: "On orders over 500 EGP",
            color: "text-blue-600",
            bgColor: " bg-blue-100"
        }, {
            icon: faShieldHalved,
            title: "Secure Payment",
            description: "100% secure transactions",
            color: "text-green-600",
            bgColor: " bg-green-100"
        }, {
            icon: faArrowRotateLeft,
            title: "Easy Returns",
            description: "14-day return policy",
            color: "text-orange-600",
            bgColor: " bg-orange-100"
        }, {
            icon: faHeadset,
            title: "24/7 Support",
            description: "Dedicated support team",
            color: "text-purple-600",
            bgColor: " bg-purple-100"
        }
    ]

    return (
        <>
            <section className="py-8 bg-gray-50">
                <div className="container">
                    <div className="grid md:grid-cols-4 gap-4 bg-pu">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                                <div className={`size-12 rounded-full flex items-center justify-center ${feature.bgColor}`}>
                                    <FontAwesomeIcon icon={feature.icon} className={`text-xl ${feature.color}`} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 text-sm">{feature.title}</h3>
                                    <p className="text-gray-500 text-xs ">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
