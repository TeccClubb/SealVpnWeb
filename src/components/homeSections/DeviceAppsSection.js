'use client';

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
        <button className="bg-teal-400 hover:bg-teal-500 text-white px-8 py-2 rounded-full text-base mb-6">
          Get SeeVpn now
        </button>

        {/* Image Section aligned to left + moved further up */}
        <div className="w-full flex justify-start -mt-55">
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
