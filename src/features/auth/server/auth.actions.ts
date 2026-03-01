"use server"

import axios, { AxiosRequestConfig } from "axios";
import { cookies, headers } from "next/headers"
import { AuthState } from "../store/auth.slice";

export async function setToken(token: string, rememberMe: boolean): Promise<void> {
    const cookieStote = await cookies();

    if (rememberMe) {
        cookieStote.set("token", token, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60,
        })
    } else {
        cookieStote.set("token", token, {
            httpOnly: true,
            maxAge: 1 * 24 * 60 * 60,
        })
    }
}

export async function getToken(): Promise<string | null> {
    const cookieStote = await cookies();
    const token = cookieStote.get("token")?.value || null;
    return token
}

export async function clearToken(): Promise<void> {
    const cookieStote = await cookies();
    cookieStote.delete("token");
}

export async function verifyToken(): Promise<AuthState> {
    const cookieStote = await cookies();
    const token = cookieStote.get("token")?.value || null;

    if (!token) {
        return {
            isAuthenticated: false,
            userInfo: null,
        }
    }

    try {
        const options: AxiosRequestConfig = {
            url: "https://ecommerce.routemisr.com/api/v1/auth/verifyToken",
            method: "GET",
            headers: {
                token
            }
        }
        const { data } = await axios.request(options)

        if (data.message == "verified") {
            const { name, id, role } = data.decoded
            return {
                isAuthenticated: true,
                userInfo: {
                    name,
                    id,
                    role
                }
            }
        }
        
        return {
            isAuthenticated: false,
            userInfo: null,
        }
    } catch (error) {
        return {
            isAuthenticated: false,
            userInfo: null,
        }
    }
}

