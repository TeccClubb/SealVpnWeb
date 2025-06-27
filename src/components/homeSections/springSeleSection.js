
"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';

export default function SpringSaleSection() {

 
  return (
    <section className="w-full lg:w-[75%] m-auto md:py-16 py-5 px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Left Text Section */}
        <div className="text-center md:text-left max-w-xl flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-snug">
            A more secure way <br /> to{" "}
            <span className="text-black font-bold">browse the web</span>
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            SeelVpn encrypts your internet connection to keep{" "}
            <br className="hidden md:block" />
            your online activity private on any network.
          </p>

          {/* CTA Button */}
          <div className="my-8">
            <Link
              href="/pricing"
              className="bg-teal-500 hover:bg-teal-600 active:opacity-70 text-white text-[20px] px-10 py-6 rounded-full transition duration-200"
            >
              Summer Sale! Get 67% off
            </Link>

            <p className="mt-7 text-gray-500 text-xs  md:text-sm">
              Your first year of SeelVpn for $3.99/mo $10.99 $8.99 USD
            </p>
          </div>
        </div>

        {/* Right Bear Image */}
        <div className="flex-1 flex justify-center mt-5 md:mt-0">
          <Image
            src="/imageofHero.png"
            alt="Hero Image"
            width={400}
            height={0} // height will auto adjust unless specified; you can also set it based on aspect ratio
            className="w-[400px] h-auto"
          />
        </div>
      </section>
  );
}
