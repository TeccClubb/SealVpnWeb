'use client';

import Link from "next/link";

export default function DeviceAppsSection() {
  return (
    <div className="w-full bg-[#2d4a4e] text-white  mb-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 pt-[60px]">
        
        {/* Text Section */}
        <div className="max-w-xl ">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Easy-to-use apps for <br className="hidden sm:block" />
            all your devices
          </h2>
          <p className="text-base sm:text-lg mb-4 text-[#6E6E6E]">
            Just open the SeelVpn app, select a country,<br />
            and flip the switch. Once you're connected,<br />
            SeelVpn will work quietly in the background<br />
            to keep your data secure.
          </p>
        </div>

        {/* Platform Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-[#6E6E6E]">
          <div className="flex flex-col items-center">
            <img src="/appleImg.svg" alt="Apple" className="h-6 mb-1" />
            Mac
          </div>
          <div className="flex flex-col items-center">
            <img src="/wimdowImg.svg" alt="Windows" className="h-6 mb-1" />
            Windows
          </div>
          <div className="flex flex-col items-center">
            <img src="/mobileLogo.svg" alt="iOS" className="h-6 mb-1" />
            iOS
          </div>
          <div className="flex flex-col items-center">
            <img src="/andriodimg.svg" alt="Android" className="h-6 mb-1" />
            Android
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/plans" className="bg-teal-500 hover:bg-teal-600 active:opacity-70 text-white px-10 py-4 text-[20px] rounded-full text-base mb-20 transition duration-200">
          Get SeelVpn now
        </Link>

        {/* Image Section aligned to left + moved further up */}
        <div className="w-full flex justify-start -mt-55 mr-20 lg:-mt-95 lg:mr-0 pointer-events-none">
          <img
            src="/mobileMapImg.png"
            alt="Mobile App"
            className="w-20 sm:w-52 md:w-60 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
