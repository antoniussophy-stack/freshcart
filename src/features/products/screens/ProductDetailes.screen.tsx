import ProductInfo from "../components/ProductDetails/ProductInfo"
import { getProductById } from "../server/product.action"

export default async function ProductDetailesScreen({ productId }: { productId: string }) {
    const response = await getProductById({ id: productId })
    return (
        <>
            <ProductInfo product={response.data}/>
        </>
    )
}
