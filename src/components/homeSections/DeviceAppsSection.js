'use client';

export default function DeviceAppsSection() {
  return (
    // <div className="w-full bg-[#2d4a4e] text-white py-16 px-6 md:px-20">
    //     <div className="">

    //     </div>
    // </div>
    <div className="w-full bg-[#2d4a4e] text-white py-16 px-6 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      <div className="flex-1 flex justify-center  relative">
          <img
            src="/mobileMapImg.png"
            alt="Mobile App"
            className="w-56 h-96 md:static md:w-64 md:h-[28rem]"
          />
        </div>
        {/* Left Text Section */}

        <section className="flex-1 text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0 ">
            <h2 className="text-2xl sm:text-3xl text-center font-semibold mb-4">
              Easy-to-use apps for all your devices
            </h2>
            <p className="text-base sm:text-lg mb-6">
              Just open the SeelVpn app, select a country,<br />
              and flip the switch. Once you're connected,<br />
              SeelVpn will work quietly in the background<br />
              to keep your data secure
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <img src="/appleimg.svg" alt="Apple" className="h-6" />
              <img src="/wimdowImg.svg" alt="Windows" className="h-6" />
              <img src="/mobileimg.svg" alt="Mobile" className="h-6" />
              <img src="/andriodimg.svg" alt="Android" className="h-6" />
            </div>
            <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-full text-sm">
              Get SeeVpn now
            </button>
          </div>
        </section>

        {/* Right Image */}
       
      </div>
    </div>
  );
}
