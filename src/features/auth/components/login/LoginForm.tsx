"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSignInAlt, faEye, faLock, faEnvelope, faUsers, faStar, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormValues, loginschema } from "../../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import loginAction from "../../server/loginForm.action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setToken } from "../../server/auth.actions";
import { setAuthInfo } from "../../store/auth.slice";
import { useDispatch } from "react-redux";

export default function LoginForm() {
    const router = useRouter();
    const dispatch = useDispatch(); //? to implement action

    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<loginFormValues>({
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false
        },

        resolver: zodResolver(loginschema),
        mode: "onSubmit",
        reValidateMode: "onChange",
    })

    const onSubmit: SubmitHandler<loginFormValues> = async (values) => {
        try {
            const response = await loginAction(values); // & {success , message , data}

            if (response?.success) {
                await setToken(response.data.token, values.rememberMe) // & set token => cookies
                // ? without dispatch its ==> action creator 
                dispatch(
                    setAuthInfo({ isAuthenticated: true, userInfo: { ...response.data.user } })// & isAuthenticated ==> true & Send userInfo
                )

                toast.success(response.message)
                setTimeout(() => {
                    router.push('/')
                }, 3000);

            } else {
                if (response?.errors) {
                    Object.keys(response.errors).forEach((key) => {
                        setError(key as keyof loginFormValues, { message: response.errors[key] })
                    })
                }
            }
        } catch (error) { }
    }

    return (
        <>
            <main className="flex justify-center items-center">
                <div className="p-10 space-y-7 bg-white rounded-xl lg:w-lg">
                    <h2 className='font-black text-4xl text-center border-b-2 border-gray-300/35 pb-3'>Fresh <span className="text-green-500">Cart</span></h2>
                    <div className="text-center -mt-3">
                        <h3 className="text-xl font-semibold">Welcome Back!</h3>
                        <p className="text-gray-600 text-sm mt-1">Sign in to continue your fresh shopping experience</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <button type="button" className=" px-4 py-2 w-full rounded-lg bg-white hover:bg-gray-50 text-gray-800 font-semibold cursor-pointer border border-gray-200 flex items-center justify-center gap-3">
                            <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                            <span className="hidden sm:inline">Continue with Google</span>
                        </button>
                        <button type="button" className=" px-4 py-2 w-full rounded-lg bg-white hover:bg-gray-50 text-gray-800 font-semibold cursor-pointer border border-gray-200 flex items-center justify-center gap-3">
                            <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" />
                            <span className="hidden sm:inline">Continue with Facebook</span>
                        </button>
                    </div>

                    <div className="relative w-full bg-gray-300/30 h-0.5">
                        <span className="absolute top-1/2 left-1/2 -translate-1/2 px-2 bg-white text-sm text-gray-400">Or Continue With Email</span>
                    </div>

                    <div className="space-y-4">
                        {/* Email */}
                        <div className="email flex flex-col gap-1">
                            <label htmlFor="email" className="font-semibold text-gray-800">Email Address</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <input type="email" id="email" placeholder="Enter your email"
                                    className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-green-600"
                                    {...register("email")} />
                                {errors.email && <p className="text-sm text-red-500">*{errors.email.message} </p>}
                            </div>
                        </div>
                        {/* password */}
                        <div className="password flex flex-col gap-1">
                            <div className="flex justify-between items-center">
                                <label htmlFor="password" className="font-semibold text-gray-800">Password</label>
                                <Link href={"/forget-password"} className="text-sm text-green-600 hover:underline">Forgot Password?</Link>
                            </div>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                                <input type="password" id="password" placeholder="Enter your password"
                                    className="w-full pl-10 pr-10 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-green-600"
                                    {...register("password")} />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <FontAwesomeIcon icon={faEye} />
                                </span>
                            </div>
                            {errors.password && <p className="text-sm text-red-500">*{errors.password.message}</p>}
                        </div>
                        {/* rememberMe */}
                        <div className="remember flex items-center gap-2">
                            <input type="checkbox" id="remember"
                                className="accent-green-600 size-4"
                                {...register("rememberMe")} />
                            <label htmlFor="remember" className="text-sm text-gray-700">Keep me signed in</label>
                        </div>
                        {/* buttonSubmit */}
                        <button type="button" onClick={handleSubmit(onSubmit)}
                            disabled={isSubmitting}
                            className="w-full rounded-lg bg-green-600 text-white font-semibold flex items-center justify-center gap-2 py-2 cursor-pointer disabled:cursor-not-allowed hover:bg-green-700 transition-colors duration-200">
                            {isSubmitting ? <>
                                <FontAwesomeIcon icon={faSpinner} spin />
                                <span>signing IN ...</span></>
                                :
                                <><FontAwesomeIcon icon={faSignInAlt} />
                                    <span>Sign In</span></>}
                        </button>
                    </div>

                    <p className="text-center pt-4 border-t border-gray-200 text-sm">New to FreshCart? <Link href={"/signup"} className="text-green-600 font-semibold hover:underline">Create an account</Link></p>
                    <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-600 ">
                        <div className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faLock} className="text-gray-500" />
                            <span>SSL Secured</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faUsers} className="text-gray-500" />
                            <span>50K+ Users</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faStar} className="text-gray-500" />
                            <span>4.9 Rating</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
