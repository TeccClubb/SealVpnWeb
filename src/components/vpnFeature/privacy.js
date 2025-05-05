"use client"


import Image from "next/image";
import { useEffect } from 'react';

export default function PrivacySection() {
   
    return  (
        <div className="bg-white text-black px-6 py-12 md:py-20">
            <div className="w-[85%] m-auto">
                <h2
                    className="text-center text-2xl md:text-3xl font-semibold mb-10"
                    
                >
                    Privacy
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Column (3 stacked boxes) */}
                    <div className="flex flex-col gap-8">
                        <div className="text-center"  >
                            <h3 className="font-semibold text-lg">VigilantSeal</h3>
                            <p className="mt-2 text-neutral-500 text-lg font-normal font-['Montserrat'] leading-relaxed">
                                If your connection gets disrupted for any reason, SeelVpn will block all unsecured traffic until it’s safely reconnected.{" "}
                                <span className="text-blue-500 cursor-pointer">Learn More</span>
                            </p>
                        </div>

                        <div className="text-center"  >
                            <h3 className="font-semibold text-lg">Always on</h3>
                            <p className="mt-2 text-neutral-500 text-lg font-normal font-['Montserrat'] leading-relaxed">
                                Set to launch at startup. Stay connected and don’t worry about re-connecting on restart.
                            </p>
                        </div>

                        <div className="text-center"  >
                            <h3 className="font-semibold text-lg">No logging</h3>
                            <p className="mt-2 text-neutral-500 text-lg font-normal font-['Montserrat'] leading-relaxed">
                                SeelVpn does NOT log any activity of customers connected to our service.{" "}
                                <span className="text-blue-500 cursor-pointer">privacy policy</span>.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid grid-rows-3 gap-8">
                        <div className="text-center"  >
                            <h3 className="font-semibold text-lg">SplitVPN</h3>
                            <p className="mt-2 text-neutral-500 text-lg font-normal font-['Montserrat'] leading-relaxed">
                                Control which apps and websites are tunnelled through SeelVpn’s secure and encrypted connection.{" "}
                                <span className="text-blue-500 cursor-pointer">Learn More</span>
                            </p>
                        </div>

                        <div
                            className="row-span-2 flex items-center justify-center"
                            
                            
                        >
                            <Image
                                src="/vpnfeatureImg/pirvacyImg.png"
                                alt="Privacy Illustration"
                                width={300}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
