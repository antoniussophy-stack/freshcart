import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface SpecificBrandProps {
    params: {
        id: string;
    };
}

export default function SpecificBrand({ params }: SpecificBrandProps) {

    return (
        <>
            <div>
                <div className="bg-purple-800 py-16">
                    <nav className="container flex items-center gap-2 text-sm text-white mb-4">
                        <Link href="/" className="hover:text-gray-300 transition">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-white font-medium">Shopping Cart</span>
                    </nav>
                    <div className="flex justify-baseline gap-3 items-center text-white max-w-sm ms-18">
                        <div className="rounded-xl px-4 py-5 flex items-center justify-center bg-white/20 backdrop-blur-md shadow-lg border border-white/10">
                            <FontAwesomeIcon icon={faTags} className="text-2xl" />
                        </div>
                        <div>
                            <h2 className="font-extrabold text-4xl">Top Brands</h2>
                            <p className="font-semibold text-sm">Shop from your favorite brands</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 space-x-4 space-y-7 py-7">
                        {}
                    </div>
                </div>
            </div>
        </>
    )
}
