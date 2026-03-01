"use client"
import { faAddressCard, faEnvelope, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBabyCarriage, faBars, faBolt, faCartShopping, faChevronDown, faEllipsis, faMagnifyingGlass, faPerson, faPersonDress, faPhone, faRightFromBracket, faSuitcaseMedical, faUserPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image"; {/* AI */ }
import freshcartLogo from "../../assets/images/freshcart-logo.svg";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState, useAppSelector } from "@/src/store/store";
import useLogout from "@/src/features/auth/hooks/useLogout";

export default function Navbar() {
    const { logout } = useLogout()

    let currentPath = usePathname();
    const [isMenuOpen, setisMenuOpen] = useState(false)

    function tooglemenu() {
        setisMenuOpen(!isMenuOpen)
    }

    const { isAuthenticated } = useSelector((appState: AppState) => appState.auth)

    const { numOfCartItems } = useAppSelector((state) => state.cart)

    return <>
        <header>
            <div className="container">
                {/* top Navbar */}
                <div className="hidden lg:flex justify-between items-center py-2 text-sm  border-b border-gray-300">
                    <ul className="flex gap-3">
                        <li className="space-x-1">
                            <FontAwesomeIcon icon={faPhone} />
                            <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
                        </li>
                        <li className="space-x-1">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a href="mailto:support@freshcart.com">support@freshcart.com</a>
                        </li>
                    </ul>
                    <ul className="flex gap-3">
                        <li>
                            <Link href={"TrackOrder"}>TrackOrder</Link>
                        </li>
                        <li>
                            <Link href={"About"}>About</Link>
                        </li>
                        <li>
                            <Link href={"Contant"}>Contant</Link>
                        </li>
                        <li>
                            <select name="" id="">
                                <option> EGP </option>
                                <option> SAR </option>
                                <option> AED </option>
                            </select>
                        </li>
                        <li>
                            <select name="" id="">
                                <option value="ar">العريبه</option>
                                <option value="en">English</option>
                            </select>
                        </li>
                    </ul>
                </div>
                {/* main Navigator */}
                <nav className="flex justify-between items-center py-4 px-6 lg:px-0">
                    <h1 className="logo">
                        <Link href={`/`}>
                            <Image src={freshcartLogo} alt="Fresh cart logo" width={150} height={50} /> {/* AI */}
                        </Link>
                    </h1>
                    {/* button */}
                    <button className="btn bg-green-600 hover:bg-green-500 text-white lg:hidden" onClick={tooglemenu}>
                        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
                    </button>
                    <search className="hidden lg:block" >
                        <div className="relative">
                            <input type="text" placeholder="search for products.." className="form-control" />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-1/2 right-0.5 -translate-1/2 text-gray-600" />
                        </div>
                    </search>
                    <ul className="hidden lg:flex  gap-2.5">
                        <li>
                            <Link href={"wishlist"} className={currentPath == "wishlist" ? "active flex flex-col items-center text-green-500 transition-colors duration-200" : "flex flex-col items-center hover:text-green-500 transition-colors duration-200"}>
                                <FontAwesomeIcon icon={faHeart} />
                                <span className="text-sm">wishlist</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"cart"} className={currentPath == "cart" ? "active flex flex-col items-center text-green-500 transition-colors duration-200" : "flex flex-col items-center hover:text-green-500 transition-colors duration-200"}>
                                <div className="relative">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <span className="absolute top-0 right-0 -translate-y-1 translate-x-1 rounded-full size-4 flex items-center justify-center bg-green-600 text-white text-sm">{numOfCartItems}</span>
                                </div>
                                <span className="text-sm -translate-y-2">cart</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"Account"} className={currentPath == "Account" ? "active flex flex-col items-center text-green-500 transition-colors duration-200" : "flex flex-col items-center hover:text-green-500 transition-colors duration-200"}>
                                <FontAwesomeIcon icon={faUser} />
                                <span className="text-sm">Account</span>
                            </Link>
                        </li>
                        {isAuthenticated ?
                            <li className="cursor-pointer flex flex-col items-center hover:text-green-500 transition-colors duration-200" onClick={logout}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                <span className="text-sm">logout</span>
                            </li>
                            : <>
                                <li>
                                    <Link href={"signup"} className={currentPath == "signup" ? "active flex flex-col items-center text-green-500 transition-colors duration-200" : "flex flex-col items-center hover:text-green-500 transition-colors duration-200"}>
                                        <FontAwesomeIcon icon={faUserPlus} />
                                        <span className="text-sm">signUp</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"login"} className={currentPath == "login" ? "active flex flex-col items-center text-green-500 transition-colors duration-200" : "flex flex-col items-center hover:text-green-500 transition-colors duration-200"}>
                                        <FontAwesomeIcon icon={faAddressCard} />
                                        <span className="text-sm">login</span>
                                    </Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
            {/* category Navigator */}
            <nav className="hidden lg:block bg-gray-200 text-gray-600 py-2">
                <div className="container flex items-center gap-5">
                    <div className="relative group">
                        <button className="space-x-3 btn px-2 bg-green-600 text-white hover:bg-green-600/90 transition-colors duration-200">
                            <FontAwesomeIcon icon={faBars} />
                            <span>All Categories</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        <menu className="hidden group-hover:block absolute *:py-2.5 *:px-3 *:hover:bg-gray-100 bg-white/95 rounded-lg shadow divide-y-2 divide-gray-300/30 z-50">
                            <li>
                                <Link href={""} className="space-x-3">
                                    <FontAwesomeIcon className="text-green-600" icon={faPerson} />
                                    <span>Men's Fashion</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={""} className="space-x-3">
                                    <FontAwesomeIcon className="text-green-600" icon={faPersonDress} />
                                    <span>Women's Fashion</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={""} className="space-x-3">
                                    <FontAwesomeIcon className="text-green-600" icon={faBabyCarriage} />
                                    <span>Baby & Toys</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={""} className="space-x-3">
                                    <FontAwesomeIcon className="text-green-600" icon={faSuitcaseMedical} />
                                    <span>Beauty & Health</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={""} className="space-x-3">
                                    <FontAwesomeIcon className="text-green-600" icon={faBolt} />
                                    <span>Electronics</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={""} className="space-x-3">
                                    <FontAwesomeIcon className="text-green-600" icon={faEllipsis} />
                                    <span className="text-sm">View all Categories</span>
                                </Link>
                            </li>
                        </menu>
                    </div>
                    <ul className="flex items-center gap-5">
                        <li>
                            <Link href={"/"} >Home</Link>
                        </li>
                        <li>
                            <Link href={"/Recently-added"} >Recently added</Link>
                        </li>
                        <li>
                            <Link href={"/Featured-products"} >Featured products</Link>
                        </li>
                        <li>
                            <Link href={"/offers"} >Offers</Link>
                        </li>
                        <li>
                            <Link href={"/brands"} >Brands</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* offCanvas */}
            {isMenuOpen ? (
                <>
                    <div className="background bg-black/50 inset-0 fixed z-30 cursor-pointer" onClick={tooglemenu}></div>
                    <div className=" offCanvas bg-white top-0 bottom-0 fixed z-40 p-5 space-y-5 animate-slide-in"> {/* faild to transform menu */}
                        <div className="flex items-center justify-between border-b border-gray-300/40 pb-3" >
                            <Image src={freshcartLogo} alt="Fresh cart logo" width={150} height={50} /> {/* AI */}
                            <button className="btn rounded-full" onClick={tooglemenu}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <search>
                            <div className="relative">
                                <input type="text" placeholder="search for products.." className="form-control" />
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-1/2 right-0.5 -translate-1/2 text-gray-600" />
                            </div>
                        </search>
                        <div className="menu">
                            <h2 className="text-lg font-bold mb-1">Main Menu</h2>
                            <ul className="space-y-1 *:py-1 *:px-2 *:hover:bg-gray-100 *:rounded-lg *:text-gray-600">
                                <li>
                                    <Link href={"wishlist"} className={currentPath == "wishlist" ? "active flex gap-2 items-center bg-green-500 transition-colors duration-200" : "flex gap-2 items-center"}>
                                        <FontAwesomeIcon icon={faHeart} />
                                        <span>wishlist</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"cart"} className={currentPath == "cart" ? "active flex gap-2 items-center bg-green-500 transition-colors duration-200" : "flex gap-2 items-center"}>
                                        <div className="relative">
                                            <FontAwesomeIcon icon={faCartShopping} />
                                            <span className="absolute top-0 right-0 -translate-y-1 translate-x-1 rounded-full size-4 flex items-center justify-center bg-green-600 text-white text-sm">{numOfCartItems}</span>
                                        </div>
                                        <span>cart</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"Account"} className={currentPath == "Account" ? "active flex gap-2 items-center bg-green-500 transition-colors duration-200" : "flex gap-2 items-center"}>
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>Account</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="Account border-t-2 border-gray-300/50 pt-5">
                            <h2 className="text-lg font-bold mb-1">Account</h2>
                            <ul className="space-y-1 *:py-1 *:px-2 *:hover:bg-gray-100 *:rounded-lg *:text-gray-600">
                                {isAuthenticated ?
                                    <li className="cursor-pointer flex gap-2 items-center hover:text-green-500 transition-colors duration-200" onClick={logout}>
                                        <FontAwesomeIcon icon={faRightFromBracket} />
                                        <span>logout</span>
                                    </li>
                                    : <>
                                        <li>
                                            <Link href={"signup"} className={currentPath == "signup" ? "active flex gap-2 items-center bg-green-500 transition-colors duration-200" : "flex gap-2 items-center"}>
                                                <FontAwesomeIcon icon={faUserPlus} />
                                                <span>signup</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"login"} className={currentPath == "login" ? "active flex gap-2 items-center bg-green-500 transition-colors duration-200" : "flex gap-2 items-center"}>
                                                <FontAwesomeIcon icon={faAddressCard} />
                                                <span>login</span>
                                            </Link>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </>) : <></>}
        </header>
    </>
}
