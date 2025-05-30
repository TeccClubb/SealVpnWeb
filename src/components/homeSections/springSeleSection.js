
"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';

export default function SpringSaleSection() {

 
  return (
    <section className="md:py-16 py-5 px-6 sm:px-10 lg:px-20  flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 ">
        {/* Left Text Section */}
        <section className="bg-gray-50 "></section>
        <div className=" text-center md:text-left max-w-xl flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-snug">
            A more secure way <br /> to{" "}
            <span className="text-black font-bold">browse the web</span>
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            SeeVpn encrypts your internet connection to keep{" "}
            <br className="hidden md:block" />
            your online activity private on any network.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <Link
              href="/pricing"
              className="bg-teal-400 hover:bg-teal-500 active:opacity-70 text-white    text-[20px] px-6 py-4  rounded-full transition"
            >
              Spring Sale! Get 67% off
            </Link>

            <p className="mt-5 text-gray-500 text-xs  md:text-sm">
              Your first year of SeeVpn for $3.99/mo $10.99 $8.99 USD
            </p>
          </div>
        </div>

        {/* Right Bear Image */}
        <div className="flex-1 flex justify-center">
          <img className="w-[400px]" src="imageofHero.png"></img>
        </div>
      </section>
  );
}
