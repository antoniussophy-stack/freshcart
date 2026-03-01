import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartResponse } from "../types/cart.types";

export interface CartState {
    numOfCartItems: number;
    cartId: string | null;
    products: CartItem[];
    totalCartPrice: number;
    isLoading: boolean;
    error: string | null;
}

const initialState: CartState = {
    numOfCartItems: 0,
    cartId: null,
    products: [],
    totalCartPrice: 0,
    isLoading: false,
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartInfo: function (state, action: PayloadAction<CartResponse>) {
            state.cartId = action.payload.cartId;
            state.numOfCartItems = action.payload.numOfCartItems;
            state.products = action.payload.data.products;
            state.totalCartPrice = action.payload.data.totalCartPrice;
        },

        removeProduct: function (state, action: PayloadAction<{ id: string }>) {
            const productId = action.payload.id;
            const productRemoved = state.products.find((item) => item.product.id == productId)
            if (productRemoved) {
                state.products = state.products.filter((newProduct) => newProduct.product.id != productId);
                state.numOfCartItems = state.products.length;
                state.totalCartPrice -= productRemoved.price * productRemoved.count;
            }
        },

        clearCart: function(state){
            state.cartId = null;
            state.numOfCartItems = 0;
            state.products = [];
            state.totalCartPrice = 0;
        }
    }
});

export const cartReduser = cartSlice.reducer
export const { setCartInfo, removeProduct ,clearCart } = cartSlice.actions
