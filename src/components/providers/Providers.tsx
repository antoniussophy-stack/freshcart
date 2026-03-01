"use client"
import { AppStore, createStore, preloadedState } from "@/src/store/store";
import { ReactNode, useRef } from "react"
import { Provider } from "react-redux"
import { Bounce, ToastContainer } from "react-toastify";

type ProvidersProps = {
    children: ReactNode,
    preloadedState: preloadedState,
}

export default function Providers({ children, preloadedState }: ProvidersProps) {
    const storeRef = useRef<null|AppStore>(null) // storeRef = {current:null}

    if (!storeRef.current) {
        storeRef.current = createStore(preloadedState)
    }

    return (
        <>
            <Provider store={storeRef.current}>
                {children}
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                />
            </Provider>
        </>
    )
}