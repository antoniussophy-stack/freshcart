// Order-related type definitions

export interface ShippingAddress {
    details: string;
    phone: string;
    city: string;
}

export interface UserSummary {
    _id: string;
    name: string;
    email: string;
    phone: string;
}

export interface CategoryInfo {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface BrandInfo {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface SubcategoryInfo {
    _id: string;
    name: string;
    slug: string;
    category: string;
}

export interface ProductInfo {
    _id: string;
    title: string;
    imageCover: string;
    category: CategoryInfo;
    brand: BrandInfo;
    ratingsAverage: number;
    ratingsQuantity: number;
    subcategory: SubcategoryInfo[];
    id?: string;
}

export interface CartItem {
    _id: string;
    count: number;
    product: ProductInfo;
    price: number;
}

export interface Order {
    _id: string;
    shippingAddress: ShippingAddress;
    taxPrice: number;
    shippingPrice: number;
    totalOrderPrice: number;
    paymentMethodType: string;
    isPaid: boolean;
    isDelivered: boolean;
    user: UserSummary;
    cartItems: CartItem[];
    paidAt?: string;
    createdAt: string;
    updatedAt: string;
    id?: number;
}

export interface OrdersResponse {
    results: number;
    metadata: {
        currentPage: number;
        numberOfPages: number;
        limit: number;
        nextPage?: number;
    };
    data: Order[];
}