"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FeatureSection() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="bg-gray-700 text-white px-6 py-12 md:py-20">
            <div className="flex justify-center text-center">
                <div className="w-full md:w-2/3" data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Features for all your privacy needs
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-gray-300">
                        Turn SeelVpn on. Enjoy all the benefits of a private connection.
                    </p>

                    {/* Feature Icons */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                        {[
                            { src: "/vpnFeatureImg/pravicy.png", alt: "Privacy" },
                            { src: "/vpnFeatureImg/preformance.png", alt: "Performance" },
                            { src: "/vpnFeatureImg/encryption.png", alt: "Encryption" },
                            { src: "/vpnFeatureImg/worldWide.png", alt: "Worldwide" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-center transition-transform duration-300 hover:scale-110"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={100}
                                    height={100}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
