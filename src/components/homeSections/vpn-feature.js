
"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library for animations 
  import 'aos/dist/aos.css'; // Import AOS styles

export default function VpnFeature() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
      {/* Heading */}
      <div data-aos="fade-right" className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Everything a VPN should have (and more)
        </h2>
      </div>

      {/* Top Grid Section */}
      <div  className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Features */}
        <div data-aos="fade-right" className="space-y-6">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <img src="/vpnFeature/Engi.svg" alt="Speed Icon" className="w-9 h-9 sm:w-10 sm:h-10" />
            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Engineered for speed</p>
              <p className="text-[#6E6E6E] font-[Montserrat] text-[17.868px] font-normal leading-[27px] tracking-[-0.2px]">
                Our global server network is optimized to let you surf and stream quickly.
                No throttling, no buffering, no fuss.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <img src="/vpnFeature/Sequrity.svg" alt="Audited Icon" className="w-9 h-9 sm:w-10 sm:h-10" />
            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Security you can rely on</p>
              <p className="text-[#6E6E6E] font-[Montserrat] text-[17.868px] font-normal leading-[27px] tracking-[-0.2px]">
                SeelVpn is the only VPN in the world to publish regular,
                independent security audits of our apps.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <img src="/vpnFeature/Strong.svg" alt="Encryption Icon" className="w-9 h-9 sm:w-10 sm:h-10" />
            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Strong Encryption</p>
              <p className="text-[#6E6E6E] font-[Montserrat] text-[17.868px] font-normal leading-[27px] tracking-[-0.2px]">
                SeelVpn uses strong AES 256-bit encryption by default.
                Weaker encryption isn’t even an option.
              </p>
            </div>
          </div>
        </div>


        {/* Right Column - Image */}
        <div  data-aos="fade-left" className="flex justify-center">
          <img src="/vpnFeature/vpn.svg" alt="Bear and Woman" className="max-w-full h-auto" />
        </div>
      </div>

      {/* Bottom Section */}
      <div data-aos="fade-left" className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div data-aos="fade-left" className="text-center md:text-left space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
            Why millions of people trust SeelVpn
          </h3>
          <p className="text-[#6E6E6E] text-center font-[Montserrat] text-[18.155px] font-normal leading-[27px] tracking-[-0.2px]">
            SeelVpn respects your privacy. We will never monitor, log, or sell any of your browsing activity.
            As the only VPN in the industry to perform annual, independent
            <a href="#" className="text-blue-500 underline ml-1">security audits</a>, you can trust us to keep your connection secure.
          </p>

        </div>

        {/* Right Image */}
        <div data-aos="fade-right" className="flex justify-center">
          <img src="/vpnFeature/Audit.png" alt="Xray Bear" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
