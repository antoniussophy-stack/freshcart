"use server"
import axios, { AxiosRequestConfig } from "axios"
import { cookies } from "next/headers";

import { OrdersResponse } from "../types/orders.types";

export async function getUserOrders(): Promise<OrdersResponse> {
    const cookieStote = await cookies();
    const token = cookieStote.get("token")?.value || null;
    if (!token) {
        throw new Error("Authentication Required")
    }
    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/orders/`,
            method: "GET",
        }
        const { data } = await axios.request<OrdersResponse>(options)
        return data;
    } catch (error) {
        throw error
    }
}