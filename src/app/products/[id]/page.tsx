import ProductDetailesScreen from "@/src/features/products/screens/ProductDetailes.screen";

type ProductDetailesPageProps = {
    params: Promise<{ id: string }>
}

export default async function ProductDetailes({ params }: ProductDetailesPageProps) {
    const { id } = await params;
    return (
        <>
            <ProductDetailesScreen productId={id} />
        </>
    )
}
