"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function FeatureSection() {
  return (
    <div className="bg-gray-700 text-white px-6 py-12 md:py-20">
      <div className="flex justify-center text-center">
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold">
            Features for all your privacy needs
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300">
            Turn SeelVpn on. Enjoy all the benefits of a private connection.
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { src: "/vpnFeatureImg/privacy.svg", alt: "Privacy" },
              { src: "/vpnFeatureImg/performance.svg", alt: "Performance" },
              { src: "/vpnFeatureImg/encryption.svg", alt: "Encryption" },
              { src: "/vpnFeatureImg/worldWide.svg", alt: "Worldwide" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-16 h-auto"
                />
                <span className="text-sm md:text-base font-semibold text-gray-300">
                  {item.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
