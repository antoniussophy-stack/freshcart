"use server";

import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { loginFormValues, loginschema } from "../schemas/login.schema";

export default async function loginAction(values: loginFormValues) {
    const validationResult = loginschema.safeParse(values);

    if (!validationResult.success) {
        const errors: Record<string, string> = {} // ^ {name:" " , passwod:" "}
        validationResult.error.issues.forEach((issue) => {
            // & issue ==> { path:['name'] , message: ""} 
            const key = issue.path[0] as string;
            const message = issue.message;

            if (!errors[key]) {
                errors[key] = message;
            }
        })
        return {
            success: false,
            message: "valdition errors",
            errors
        }
    }

    try {

        const { rememberMe, ...requestData } = values;

        const options: AxiosRequestConfig = {
            url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
            method: "POST",
            data: requestData
        }

        const { data } = await axios.request(options)

        if (data.message == "success") {
            return {
                success: true,
                message: "Welcome back",
                data
            }
        }
        return {
            success: false,
            message: "login failed",
        }

    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMessage = error.response?.data.message;
            if (errorMessage == "Incorrect email or password") {
                return {
                    success: false,
                    message: "wrong credetials",
                    errors: {
                        password: "Incorrect email or password"
                    }
                }
            }
        }
        return {
            success: false,
            message: "login failed",
        }
    }
}
