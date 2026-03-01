"use client"
import Link from "next/link";
import { Brand } from "../types/brand.types";

interface BrandCardsProps {
    brandInfo: Brand;
}

export default function BrandCards({ brandInfo }: BrandCardsProps) {
    const { _id, name, image } = brandInfo;

    return (
        <>
            <section>
                <div className="card">
                    <Link href={`/brands/specificbrand`}>
                        <div
                            className="bg-white border border-gray-200 hover:text-purple-600 rounded-lg overflow-hidden hover:shadow-xl hover:scale-103 transition duration-200 px-3 pb-3 cursor-pointer">
                            <img src={image} alt={name} className="bg-white w-full h-50 object-contain" />
                            <h3 className="text-center font-bold transition-colors duration-200 ">{name}</h3>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}
