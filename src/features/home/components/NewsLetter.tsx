// ! --------------------------- Ai ---------------------------
"use client";

import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (email) {
            alert(`Subscribed with: ${email}`);
            setEmail("");
        }
    };

    return (
        <>
            <section className="py-10 px-4">
                <div className="container  bg-linear-to-r from-emerald-100 via-green-50 to-white rounded-xl p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Section: Newsletter */}
                        <div className="flex flex-col">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className=" bg-linear-to-b from-emerald-500 to-emerald-700 rounded-lg w-12 h-12 flex items-center justify-center shadow-md">
                                    <span className="text-2xl">✉️</span>
                                </div>
                                <div>
                                    <div className="text-xs font-bold letter-spacing uppercase text-emerald-700">
                                        NEWS LETTER
                                    </div>
                                    <div className="text-sm text-gray-500">50,000+ subscribers</div>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                                Get the Freshest Updates <span className="text-emerald-600">Delivered Free</span>
                            </h2>

                            {/* Subtitle */}
                            <p className="text-gray-600 text-sm mb-6">
                                Weekly recipes, seasonal offers & exclusive member perks.
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                {[
                                    { icon: "🌿", label: "Fresh Picks Weekly" },
                                    { icon: "🚚", label: "Free Delivery Codes" },
                                    { icon: "🏷️", label: "Members-Only Deals" },
                                ].map((chip) => (
                                    <div
                                        key={chip.label}
                                        className="border border-gray-300 rounded-full px-4 py-2 text-sm font-medium text-gray-700 bg-white flex items-center gap-2 hover:shadow-sm transition"
                                    >
                                        <span>{chip.icon}</span>
                                        {chip.label}
                                    </div>
                                ))}
                            </div>

                            {/* Input + Button */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 px-5 py-3 rounded-full border border-gray-300 text-sm focus:border-emerald-500 focus:outline-none bg-white shadow-sm"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    className=" bg-linear-to-r from-emerald-500 to-emerald-700 text-white border-none rounded-full px-8 py-3 text-base font-bold cursor-pointer shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
                                >
                                    Subscribe →
                                </button>
                            </div>

                            {/* Note */}
                            <p className="text-xs text-gray-400 mt-3">🌟 Unsubscribe anytime. No spam, ever.</p>
                        </div>

                        {/* Right Section: Mobile App */}
                        <div className=" bg-linear-to-b from-slate-800 via-slate-800 to-slate-900 rounded-2xl p-7 shadow-lg relative overflow-hidden">
                            {/* Decorative blur */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

                            {/* Badge */}
                            <div className="mb-4">
                                <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1 text-xs font-bold text-emerald-500 uppercase">
                                    📱 Mobile App
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-2">Shop Faster on Our App</h3>

                            {/* Subtitle */}
                            <p className="text-gray-400 text-sm mb-6">
                                Get app-exclusive deals & 15% off your first order.
                            </p>

                            {/* App Store Button */}
                            <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 mb-3 flex items-center gap-3 cursor-pointer hover:bg-white/15 transition">
                                <FontAwesomeIcon icon={faApple} className="text-2xl text-white" />
                                <div>
                                    <div className="text-xs text-gray-400 uppercase">Download on</div>
                                    <div className="text-white font-bold text-base">App Store</div>
                                </div>
                            </div>

                            {/* Google Play Button */}
                            <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 mb-5 flex items-center gap-3 cursor-pointer hover:bg-white/15 transition">
                                <FontAwesomeIcon icon={faGooglePlay} className="text-2xl text-white" />
                                <div>
                                    <div className="text-xs text-gray-400 uppercase">Get it on</div>
                                    <div className="text-white font-bold text-base">Google Play</div>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400 text-lg">★★★★★</span>
                                <span className="text-gray-400 text-sm">4.9 · 100K+ downloads</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

