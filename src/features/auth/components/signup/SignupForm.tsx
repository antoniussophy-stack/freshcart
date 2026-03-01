"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSpinner, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod"
// import { signupFormValues } from "../../types/signupFormValues.types";
import { newSignupFormValues, signupSchema } from "../../schemas/signup.schema";
import signupActions from "../../server/signupForm.actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function signupForm() {
    const router = useRouter()

    //^ react-hoot-form
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<newSignupFormValues>({
        defaultValues: {
            "name": "",
            "email": "",
            "password": "",
            "rePassword": "",
            "phone": "",
            terms: false
        },

        // ~ first valdation to confirm account at client
        resolver: zodResolver(signupSchema),

        mode: "onSubmit",
        reValidateMode: "onChange"
    })

    const onSubmit: SubmitHandler<newSignupFormValues> = async (values) => {
        try {
            const response = await signupActions(values)
            if (response?.success) {
                toast.success(response.message);
                setTimeout(() => {
                    router.push("./login")
                }, 3000)
            } else {
                if (response?.errors) {
                    // ^ {name: "...." , password: "..."}
                    // & {name , password } ==> keys
                    Object.keys(response.errors).forEach((key) => {
                        setError(key as keyof newSignupFormValues, { message: response.errors[key] })
                    })
                }
            }
        } catch (error) { 
            console.log(error);
            
        }
    }

    return (
        <>
            <main className="flex justify-center items-center">
                <div className="p-10 space-y-7 bg-white rounded-xl lg:w-lg">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold">Create Your Account</h2>
                        <p className="text-gray-700">Start your fresh journey with us today</p>
                    </div>
                    <div className="text-center space-x-6 flex justify-center items-center">
                        <button className="px-10 py-2 rounded-lg bg-gray-200 hover:bg-gray-100 text-gray-800 font-semibold cursor-pointer border border-gray-400/20">
                            <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                            <span>google</span>
                        </button>
                        <button className="px-8 py-2 rounded-lg bg-gray-200 hover:bg-gray-100 text-gray-800 font-semibold cursor-pointer border border-gray-400/20">
                            <FontAwesomeIcon icon={faFacebookF} className="text-blue-500" />
                            <span>facebook</span>
                        </button>
                    </div>
                    <div className="relative w-full bg-gray-300/30 h-0.5">
                        <span className="absolute top-1/2 left-1/2 -translate-1/2 px-2 bg-white">or</span>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="name  flex flex-col gap-1">
                            <label htmlFor="name">name</label>
                            <input type="text" id="name" placeholder="Ali" className="px-3 py-2 rounded-md border border-gray-400/40 focus:outline-none focus:border-primary-600" {...register("name")} />
                            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                        </div>
                        <div className="email flex flex-col gap-1">
                            <label htmlFor="email">email</label>
                            <input type="email" id="email" placeholder="email.route.gmail.com" className="px-3 py-2 rounded-md border border-gray-400/40 focus:outline-none focus:border-primary-600" {...register("email")} />
                            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="phone  flex flex-col gap-1">
                            <label htmlFor="phone">your phone</label>
                            <input type="tel" id="phone" placeholder="01077898383" className="px-3 py-2 rounded-md border border-gray-400/40 focus:outline-none focus:border-primary-600" {...register("phone")} />
                            {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                        </div>
                        <div className="password  flex flex-col gap-1">
                            <label htmlFor="password">password</label>
                            <input type="password" id="password" placeholder="create a strong password" className="px-3 py-2 rounded-md border border-gray-400/40 focus:outline-none focus:border-primary-600" {...register("password")} />
                            <div className="password-strength flex items-center gap-2 ">
                                <div className="bar w-full h-1 bg-gray-200 rounded-xl overflow-hidden">
                                    <div className="progress w-1/4 bg-red-500 h-full"></div>
                                </div>
                                <span>week</span>
                            </div>
                            {errors.password ?
                                <p className="text-sm text-red-500">{errors.password.message}</p>
                                :
                                <p className="text-sm -mt-2 text-gray-600">must be at least 8 char with numbers and symbols</p>}
                        </div>
                        <div className="repassword flex flex-col gap-1">
                            <label htmlFor="repassword flex items-center gap-2">confirm password</label>
                            <input type="password" id="repassword" placeholder="your password" className="px-3 py-2 rounded-md border border-gray-400/40 focus:outline-none focus:border-primary-600" {...register("rePassword")} />
                            {errors.rePassword && <p className="text-sm text-red-500">{errors.rePassword.message}</p>}
                        </div>

                        <div className="terms flex items-center gap-2 mb-5">
                            <input type="checkbox" id="terms" className="accent-green-400 size-4 inline-flex" {...register("terms")} />
                            <label htmlFor="terms">
                                I agree to the <Link href={"/"} className="text-green-600 underline">Terms of Service</Link> and <Link href={"/privacy-policy"} className="text-green-600 underline">Privacy Policy</Link>*
                            </label>
                        </div>
                        {errors.terms && <p className="text-sm text-red-500 -mt-5">{errors.terms.message}</p>}

                        <button type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-lg bg-green-600 text-white font-semibold flex items-center justify-center gap-2 py-2 cursor-pointer disabled:cursor-not-allowed hover:bg-green-700 transition-colors duration-200">
                            {isSubmitting ? <>
                                <FontAwesomeIcon icon={faSpinner} spin />
                                <span>Creating an Account</span></>
                                :
                                <><FontAwesomeIcon icon={faUserPlus} />
                                    <span>Create my Account</span></>}
                        </button>
                    </form>
                    <p className="text-center pt-6 border-t border-gray-400">Already have an account? <Link href={"/login"} className="text-green-600 underline">Sign In</Link></p>
                </div>
            </main>
        </>
    )
}
