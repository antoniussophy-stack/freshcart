'use server'

import { newSignupFormValues, signupSchema } from "../schemas/signup.schema";
import axios, { AxiosError, AxiosRequestConfig } from "axios"

export default async function signupActions(values: newSignupFormValues) {
    // ~ second valdation to confirm account at server 
    const validationResult = signupSchema.safeParse(values);

    // ! valdation error
    if (!validationResult.success) {
        // TODO : get validations errors
        const errors: Record<string, string> = {} // ^ {name: "...." , password: "..."}
        if (validationResult.error) {
            validationResult.error.issues.forEach((issues) => {
                const field = issues.path[0] as string; // "password"
                const message = issues.message; // "password should at least one number"

                if (!errors[field]) {
                    errors[field] = message;
                }
            })
        }
        return {
            success: false,
            message: "validation errors",
            errors
        }
    }

    // * valdation error
    const { terms, ...requestBody } = values

    try {
        const options: AxiosRequestConfig = {
            url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
            method: "POSt",
            data: requestBody
        }

        const { data } = await axios.request(options);

        if (data.message == 'success') {
            return {
                success: true,
                message: "account created successfully",
                data
            }
        }
        return {
            success: false,
            message: data.message || "signup failed",
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorMessage = error.response?.data.message;
            if (errorMessage == 'Account Already Exists') {
                return {
                    success: false,
                    message: "account exists",
                    errors: {
                        email: "an account with this email already exists"
                    }
                }
            }
        }
        return {
            success: false,
            message: "an error occurred during signup",
        }
    }
}

// console.log(validationResult) // ❌ ==> because it at server

// ! ValidationResult ERROR ===> server
// const validationResult = {
//     success: false,
//     error: [
//         {
//             origin: "string",
//             code: "too_small",
//             minimum: 3,
//             inclusive: true,
//             path: ["name"],
//             message: "name must be at least 3 characters long",
//         },
//         {
//             code: "custom",
//             path: ["terms"],
//             message: "you must accept the terms and conditions",
//         },
//     ]
// }

// * ValidationResult success ===> server
// const validationResult = {
//     success: true,
//     data: {
//         name: "Usama",
//         email: "usama.route@gmail.com",
//         password: "Usama2025?",
//         rePassword: "Usama2025?",
//         phone: "01097514862",
//         terms: true
//     }
// }
