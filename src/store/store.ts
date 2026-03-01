import { AuthState } from './../features/auth/store/auth.slice';
import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "../features/auth/store/auth.slice"
import { cartReduser, CartState } from '../features/cart/store/cart.slice';
import { useDispatch, useSelector } from 'react-redux';

export type preloadedState = {
    auth: AuthState;
    cart: CartState
}

export function createStore(preloadedState: preloadedState) {
    const store = configureStore({
        reducer: {
            // * write reducers => slices
            auth: authReducer,
            cart: cartReduser
        },
        preloadedState,
    })
    return store
}

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore['dispatch'];

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
