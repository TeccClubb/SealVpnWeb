'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';  // Import AOS library for animations
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
export default function CheckoutPage() {


    useEffect(() => {
        const AOS = require('aos');  // // Import AOS library for animations
        AOS.init({ duration: 1200, once: true });
    }, []);
    return (
        <section className="py-16 px-4 bg-white text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
                Get SeelVpn at the lowest price of the year
            </h2>
            <p className="text-center text-gray-600 mb-10">
                Includes all SeelVpn apps, priority customer support, and unlimited data.
            </p>
            <div className="flex flex-wrap  gap-3 mb-8 max-w-4xl mx-auto px-4">
                <div data-aos="zoom-in-up" className="border rounded-lg p-6  relative   cursor-pointer hover:border-green-500 w-70 h-32">
                    <div className="flex items-center space-x-3">
                        <div className="text-green-500 text-xl">
                            <Image
                                src="/tickIcon.svg"
                                alt="Teams Plan"
                                width={20}
                                height={20}


                            />
                        </div>
                        <h3 className="text-xl font-semibold">1 Month</h3>
                    </div>
                    <b>
                        <p className="text-lg">$9.99<span className="text-sm">/month</span></p>

                    </b>
                    <p className="text-sm text-gray-600 absolute bottom-3 mt-1 ">$39.99 billed for the first year</p>

                </div>
                <div data-aos="zoom-in-down" className="relative border-2 border-green-400 rounded-lg p-4 w-70 max-w-sm bg-[#f9fff6] shadow-md overflow-visible">
                    {/* Top-right Ribbon */}
                    <div className="absolute top-2 -right-[36px] transform rotate-45 bg-teal-500 text-white text-xs font-bold px-6 py-1 rounded-sm shadow-md">
                        <div className="text-[10px] leading-none">SPRING SALE!</div>
                        <div className="text-sm leading-tight">SAVE 67%</div>
                    </div>

                    {/* Plan content */}
                    <div className="flex items-center space-x-3">
                        <div className="text-green-500 text-xl">
                            <Image
                                src="/tickIcon.svg"
                                alt="Teams Plan"
                                width={20}
                                height={20}


                            />
                        </div>
                        <h3 className="text-xl font-semibold">1 Year</h3>
                    </div>

                    <div className="mt-2 text-2xl font-bold text-green-600">
                        $3.33<span className="text-gray-500 text-base font-medium">/month</span>
                    </div>

                    <p className="text-sm text-gray-600 mt-1">$39.99 billed for the first year</p>

                    {/* Plant pot image - half in, half out */}
                    <div className="absolute -bottom-8 right-10">
                        <img src="/account/checkout/plantImg.png" alt="Plant Pot" className="w-20" />

                    </div>
                </div>



                <div data-aos="zoom-in-up" className="border rounded-lg p-6  cursor-pointer hover:border-green-500 w-70 h-32">
                    <div className="flex items-center space-x-3">
                        <div className="text-green-500 text-xl">
                            <Image
                                src="/tickIcon.svg"
                                alt="Teams Plan"
                                width={20}
                                height={20}


                            />
                        </div>
                        <h3 className="text-xl font-semibold">3 Year</h3>
                    </div>
                    <b>

                        <p className="text-lg">$3.33<span className="text-sm">/month</span></p>
                    </b>
                    <p className="text-sm text-gray-600 mt-1">$39.99 billed for the first year</p>

                </div>
            </div>



            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                <div>
                    {/* Plan selection */}


                    {/* Payment form */}
                    <b>

                    </b>
                    <h1>Payment Details</h1>
                    <div className="space-y-4 mb-2">
                        <input type="text" placeholder="Name on Card" className="w-full bg-black/5 border rounded p-3" />
                        <input type="text" placeholder="Card number" className="w-full bg-black/5 border rounded p-3" />
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Street" className="w-full border bg-black/5 rounded p-3" />
                            <input type="text" placeholder="City" className="w-full bg-black/5 border rounded p-3" />
                        </div>
                        <select className="w-full bg-black/5 border rounded p-3">
                            <option value="">Country</option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                        </select>
                    </div>
                    <div className='pb-3'>
                        Your payment data is encrypted and secure
                    </div>

                    {/* Pricing summary */}
                    <div className="text-sm text-gray-600 mb-5">
                        Subscription renews automatically. Enter promo SEELVPN10 to save an extra 10% on your first year.
                    </div>
                    <div className="flex justify-between text-xl pb-4">
                        <span>SeelVpn (12 months)</span>
                        <span className="line-through text-gray-400">$119.88</span>
                    </div>
                    <div className="flex justify-between  text-xl mb-4">
                        <span>Yearly Plan (67% discount)</span>
                        <span className="text-red-600">$39.99</span>
                    </div>
                    <div className="w-[540px] h-0.5 relative bg-neutral-300 " />
                    <div className="flex justify-between font-bold text-lg mb-4">
                        <span>Total Order</span>
                        <span className="-600">$39.99</span>
                    </div>
                    <div>
                        <p className="text-md text-gray-600">
                            By clicking <strong>Buy Now</strong>, you accept the{' '}
                            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>,{' '}
                            <a href="#" className="text-blue-600 hover:underline">Auto-renew Policy</a>, and{' '}
                            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                        </p>
                    </div>

                    <button className="w-full mt-3 bg-emerald-400 text-white py-3 rounded-3xl hover:bg-emerald-600 transition text-lg font-semibold">
                        Buy Now
                    </button>
                </div>

                {/* Left: Plan & Payment */}

                {/* Right: Plan details */}
                <div className="flex mt-10 flex-col bg-black/5 items-center text-center p-6 relative  rounded-2xl  ">
                    <Image
                        src="/imageofHero.png"
                        alt="Teams Plan"
                        width={200}
                        height={200}
                        className="absolute top-[-50px] left-1/2 transform -translate-x-1/2"
                    />
                    <h3 className="text-xl font-semibold my-4 pt-27">What you get with your SeelVpn plan</h3>
                    <ul  className="text-gray-700 text-left mb-6 space-y-2">
                        <li data-aos="zoom-in-up" className='flex gap-2'>
                            <Image
                                src="/tickIcon.svg"
                                alt="Teams Plan"
                                width={20}
                                height={20}


                            />

                            Unlimited data</li>
                        <li data-aos="zoom-in-up" className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  Unlimited device</li>
                        <li data-aos="zoom-in-up" className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  Access to over 8000 VPN servers</li>
                        <li data-aos="zoom-in-up" className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  The best and latest VPN tech</li>
                        <li data-aos="zoom-in-up" className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  Core VPN features</li>
                        <li data-aos="zoom-in-up" className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  City-level server selection</li>
                        <li data-aos="zoom-in-up" className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  47 countries worldwide</li>
                        <li data-aos="zoom-in-up" className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  Publicly audited apps</li>
                        <li data-aos="zoom-in-up" className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  Best-in-class 256-bit AES encryption</li>
                        <li data-aos="zoom-in-down" className='flex gap-2'>  <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        /> Apps for
                            <div className='ms-2'>

                                <Image
                                    src="/andriodimg.svg"
                                    alt="Teams Plan"
                                    width={20}
                                    height={20}
                                    className='text-black invert'

                                />
                            </div>
                            <div className='ms-2'>

                                <Image
                                    src="/appleImg.svg"
                                    alt="Teams Plan"
                                    width={20}
                                    height={20}
                                    className='text-black invert'

                                />
                            </div>
                            <div className='ms-2'>

                                <Image
                                    src="/mobileLogo.svg"
                                    alt="Teams Plan"
                                    width={20}
                                    height={20}
                                    className='text-black invert'

                                />
                            </div>
                            <div className='ms-2'>
                                <Image
                                    src="/window.svg"
                                    alt="Teams Plan"
                                    width={20}
                                    height={20}
                                    className='text-black   invert'

                                />
                            </div>

                        </li>
                    </ul>

                </div>
            </div>
        </section>
    );
}
