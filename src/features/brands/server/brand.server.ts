"use server"

import axios, { AxiosRequestConfig } from "axios"
import type { BrandsResponse } from "../types/brand.types"

export async function GetAllBrands(): Promise<BrandsResponse> {
    try {
        const options: AxiosRequestConfig = {
            url: "https://ecommerce.routemisr.com/api/v1/brands",
            method: "GET",
        }
        const { data } = await axios.request(options)
        return data;
    } catch (error) {
        throw error
    }
}

export async function GetSpecificBrands(brandId: string): Promise<BrandsResponse> {
    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/brands/${brandId}`,
            method: "GET",
        }
        const { data } = await axios.request(options)
        return data;
    } catch (error) {
        throw error
    }
}

