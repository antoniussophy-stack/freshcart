import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faStar, faTruckFast, faUser } from '@fortawesome/free-solid-svg-icons';

export default function signupHero() {
    return (
        <>
            <div className="space-y-7 py-10 max-w-xl mx-auto lg:ps-18">
                <header>
                    <h2 className='font-bold text-3xl'>Welcome to <span className="text-green-500">FrechCart</span></h2>
                    <p className='text-gray-600 text-lg mt-1'>join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep</p>
                </header>
                <ul className="padges space-y-3">
                    <li className="flex items-center gap-2.5">
                        <div className="rounded-full size-10 bg-green-300 flex justify-center items-center">
                            <FontAwesomeIcon icon={faStar} className='text-green-800' />
                        </div>
                        <div>
                            <h3 className='font-semibold'>Premium Quality</h3>
                            <p className='text-gray-600 text-sm'>Premium quality products sourced from thusted suppliers</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-2.5">
                        <div className="rounded-full size-10 bg-green-300 flex justify-center items-center">
                            <FontAwesomeIcon icon={faTruckFast} className='text-green-800' />
                        </div>
                        <div>
                            <h3 className='font-semibold'>Fast Delivery</h3>
                            <p className='text-gray-600 text-sm'>same-day delivery avilable in most areas</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-2.5">
                        <div className="rounded-full size-10 bg-green-300 flex justify-center items-center">
                            <FontAwesomeIcon icon={faShieldHalved} className='text-green-800' />
                        </div>
                        <div>
                            <h3 className='font-semibold'>Secure shopping</h3>
                            <p className='text-gray-600 text-sm'>Your data and payment are completly secure</p>
                        </div>
                    </li>
                </ul>
                <div className="p-4 bg-white shadow rounded-xl space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full size-10 flex items-center gap-2.5">
                            <div className="rounded-full size-10 bg-red-300 flex justify-center items-center">
                                <FontAwesomeIcon icon={faUser} className='text-red-800' />
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold'>sarah johnson</h3>
                            <div className='*:text-yellow-400'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>
                    <blockquote className='text-gray-700 italic'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, ut.
                    </blockquote>   
                </div>
            </div>
        </>
    )
}
