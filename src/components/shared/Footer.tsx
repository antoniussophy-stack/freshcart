import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube,
    faCcVisa,
    faCcMastercard,
    faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";

import freshcartLogo from "../../assets/images/freshcart-logo.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#0f1923] text-[#cdd6e0] font-sans px-20 pt-16 pb-0">
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 pb-14">

                {/* Brand Column */}
                <div>
                    {/* Logo Box */}
                    <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-2.5 w-fit mb-5">
                        <Link href={`/`}>
                            <Image src={freshcartLogo} alt="Fresh cart logo" width={150} height={50} />
                        </Link>
                    </div>

                    <p className="text-sm leading-7 text-[#8a9bb0] mb-6">
                        FreshCart is your one-stop destination for quality products. From
                        fashion to electronics, we bring you the best brands at competitive
                        prices with a seamless shopping experience.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-3 mb-7">
                        <div className="flex items-center gap-3 text-sm">
                            <FontAwesomeIcon icon={faPhone} className="text-green-500 w-4" />
                            <span>+1 (800) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <FontAwesomeIcon icon={faEnvelope} className="text-green-500 w-4" />
                            <span>support@freshcart.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <FontAwesomeIcon icon={faLocationDot} className="text-green-500 w-4" />
                            <span>123 Commerce Street, New York, NY 10001</span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        {[
                            { icon: faFacebookF, label: "Facebook" },
                            { icon: faTwitter, label: "Twitter" },
                            { icon: faInstagram, label: "Instagram" },
                            { icon: faYoutube, label: "YouTube" },
                        ].map(({ icon, label }) => (
                            <a
                                key={label}
                                href="#"
                                aria-label={label}
                                className="w-10 h-10 rounded-full bg-[#1e2d3d] flex items-center justify-center text-[#cdd6e0] hover:bg-green-500 transition-colors duration-200 text-sm"
                            >
                                <FontAwesomeIcon icon={icon} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Shop */}
                <FooterColumn
                    title="Shop"
                    links={["All Products", "Categories", "Brands", "Electronics", "Men's Fashion", "Women's Fashion"]}
                />

                {/* Account */}
                <FooterColumn
                    title="Account"
                    links={["My Account", "Order History", "Wishlist", "Shopping Cart", "Sign In", "Create Account"]}
                />

                {/* Support */}
                <FooterColumn
                    title="Support"
                    links={["Contact Us", "Help Center", "Shipping Info", "Returns & Refunds", "Track Order"]}
                />

                {/* Legal */}
                <FooterColumn
                    title="Legal"
                    links={["Privacy Policy", "Terms of Service", "Cookie Policy"]}
                />
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#1e2d3d] py-5 flex items-center justify-between">
                <span className="text-xs text-[#5a7a99]">
                    © 2026 FreshCart. All rights reserved.
                </span>

                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faCcVisa} className="text-3xl text-[#8a9bb0]" />
                    <FontAwesomeIcon icon={faCcMastercard} className="text-3xl text-[#8a9bb0]" />
                    <FontAwesomeIcon icon={faCcPaypal} className="text-3xl text-[#8a9bb0]" />
                </div>
            </div>
        </footer>
    );
};

const FooterColumn: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
    <div>
        <h3 className="text-white font-bold text-base mb-5">{title}</h3>
        <ul className="space-y-3">
            {links.map((link) => (
                <li key={link}>
                    <a
                        href="#"
                        className="text-[#8a9bb0] text-sm hover:text-green-500 transition-colors duration-200"
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);
