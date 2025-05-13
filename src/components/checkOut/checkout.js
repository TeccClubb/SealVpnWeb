'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
// import { useEffect } from 'react';
import axios from 'axios';

import { useRouter } from 'next/navigation';
import CheckOutForm from '../checkoutForm';
export default function CheckoutPage() {

    const searchParams = useSearchParams();
    const planId = searchParams.get("planId");
    const [plans, setPlans] = useState();
    const [billingAddress, setbillingAddress] = useState();

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        if (!planId) {
            notFound();
            return;
        }

        // Fetch plans
        axios.get(`${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/plans`, {
            headers: { Accept: "application/json" },
        })
            .then((response) => {
                setPlans(response.data.plans);
            })
            .catch((error) => {
                console.error("Error fetching plans:", error);
            });

        // Fetch billing address
        axios.get(`${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/billing-address`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                // console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
                // console.log(response.data.user.billing_address);
                setbillingAddress(response);
            })
            .catch((error) => {
                console.error("Error fetching billing address:", error.response?.data || error.message);
            });

    }, [planId]);


    const [selectedPlan, setSelectedPlan] = useState(null);

    useEffect(() => {
        if (plans && planId) {
            const plan = plans.find((p) => p.id === +planId);
            console.log("Selected Plan:", plan);
            setSelectedPlan(plan);
        }
    }, [plans, planId]);








    return (
        <section className="py-16 px-4 bg-white text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
                Get SeelVpn at the lowest price of the year
            </h2>
            <p className="text-center text-gray-600 mb-10">
                Includes all SeelVpn apps, priority customer support, and unlimited data.
            </p>
            <div className="flex flex-wrap  gap-3 mb-8 max-w-4xl mx-auto px-4">
                <div className="border rounded-lg p-6  relative   cursor-pointer hover:border-green-500 w-70 h-32">
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
                <div className="relative border-2 border-green-400 rounded-lg p-4 w-70 max-w-sm bg-[#f9fff6] shadow-md overflow-visible">
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



                <div className="border rounded-lg p-6  cursor-pointer hover:border-green-500 w-70 h-32">
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
                    {selectedPlan && (
                        <CheckOutForm
                            billingAddress={billingAddress}
                            amount={Math.round(Number(selectedPlan.price) * 100)}
                        />
                    )}

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
                    <ul className="text-gray-700 text-left mb-6 space-y-2">
                        <li className='flex gap-2'>
                            <Image
                                src="/tickIcon.svg"
                                alt="Teams Plan"
                                width={20}
                                height={20}


                            />

                            Unlimited data</li>
                        <li className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  Unlimited device</li>
                        <li className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  Access to over 8000 VPN servers</li>
                        <li className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  The best and latest VPN tech</li>
                        <li className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  Core VPN features</li>
                        <li className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  City-level server selection</li>
                        <li className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  47 countries worldwide</li>
                        <li className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  Publicly audited apps</li>
                        <li className='flex gap-2'> <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        />  Best-in-class 256-bit AES encryption</li>
                        <li className='flex gap-2'>  <Image
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
