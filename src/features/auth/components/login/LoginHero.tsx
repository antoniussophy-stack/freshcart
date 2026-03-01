import Image from 'next/image';
import loginImage from "../../../../assets/images/loginImage.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faShieldHalved, faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function LoginHero() {
    return (
        <>
            <div className="space-y-6 py-10 flex flex-col justify-center mx-auto">
                {/* Hero Image Section */}
                <div className="relative rounded-xl overflow-hidden flex items-center justify-center">
                    <Image
                        src={loginImage}
                        alt="FreshCart Shopping"
                        width={400}
                        height={320}
                        className="object-contain rounded-2xl"
                    />
                </div>

                {/* Text Section */}
                <div className="space-y-3 text-center max-w-lg">
                    <h2 className='text-3xl font-extrabold text-gray-800'>FreshCart - Your One-Stop Shop for Fresh Products</h2>
                    <p className='text-gray-600 text-sm max-w-xl mx-auto'>Join thousands of happy customers who trust FreshCart for their daily grocery needs. Experience the convenience of fresh produce delivered right to your doorstep with our secure and fast service.</p>
                </div>

                {/* Features Section */}
                <div className="flex gap-6 text-sm text-gray-700 justify-center">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-green-50 p-2 text-green-600">
                            <FontAwesomeIcon icon={faTruckFast} />
                        </div>
                        <span>Free Delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-green-50 p-2 text-green-600">
                            <FontAwesomeIcon icon={faShieldHalved} />
                        </div>
                        <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-green-50 p-2 text-green-600">
                            <FontAwesomeIcon icon={faHeadset} />
                        </div>
                        <span>24/7 Support</span>
                    </div>
                </div>
            </div>
        </>
    )
}
