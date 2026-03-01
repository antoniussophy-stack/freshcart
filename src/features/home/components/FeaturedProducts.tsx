import ProductCard from "../../products/components/ProductCard"
import { getAllProducts } from "../../products/server/product.action"

export default async function FeaturedProducts() {
    const response = await getAllProducts()
    return (
        <>
            <section className="py-10 px-4">
                <div className="container flex flex-col gap-10">
                    <div className="flex gap-3">
                        <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            Featured <span className="text-emerald-600">Products</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 space-x-4 space-y-7 ">
                        {response.data.map((product) => <ProductCard key={product._id} info={product} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

