"use client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Image from "next/image";

export default function Performance() {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
      }, []);
    return (
        <div className="bg-gray-100 text-black px-6 py-12 md:py-20">
            <div className="w-[85%] m-auto">
                <h2
                    className="text-center text-2xl md:text-3xl font-semibold mb-10"
                    data-aos="fade-up"
                >
                    Performance
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Column (3 stacked boxes) */}
                    <div className="grid grid-rows-3 gap-8">
                        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="font-semibold text-lg">Best-in-class tech</h3>
                            <p className="mt-2 text-neutral-500 text-lg font-normal font-['Montserrat'] leading-relaxed">
                                Support for protocols like WireGuard, and robust anti-censorship technologies sourced by researchers worldwide.
                            </p>
                        </div>
                        <div
                            className="row-span-2 flex items-center justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <Image
                                src="/vpnfeatureImg/performanceImg.png"
                                alt="Privacy Illustration"
                                width={300}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                            <h3 className="font-semibold text-lg">Fastest tunnel</h3>
                            <p className="mt-2 text-neutral-500 text-lg font-normal font-['Montserrat'] leading-relaxed">
                                Just want to be secure and don’t care where you connect to? Use our Fastest tunnel for easy security.
                            </p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                            <h3 className="font-semibold text-lg">P2P support</h3>
                            <p className="mt-2 text-neutral-500 text-lg font-normal font-['Montserrat'] leading-relaxed">
                                Peer-to-Peer (P2P) friendly servers that allow you to share files securely and privately.
                            </p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay="500">
                            <h3 className="font-semibold text-lg">Worldwide network</h3>
                            <p className="mt-2 text-neutral-500 text-lg font-normal font-['Montserrat'] leading-relaxed">
                                More than 8000 of the fastest VPN servers, physically located in the country you select.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
