'use server'

import axios, { AxiosRequestConfig } from "axios"
import { CategoriesResponse } from "../types/categories.types";

export async function getAllCategories(): Promise<CategoriesResponse> {
    try {
        const options: AxiosRequestConfig = {
            url: "https://ecommerce.routemisr.com/api/v1/categories",
            method: "GET"
        }
        const { data } = await axios.request(options)
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getSpecifiCategory(catgoryId: string): Promise<CategoriesResponse> {
    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/categories/${catgoryId}`,
            method: "GET"
        }
        const { data } = await axios.request(options)
        return data;
    } catch (error) {
        throw error;
    }
}


