"use client";

export default function VpnFeature() {

 
  return (
    <section className="bg-gray-50 md:py-15 py-5 px-6 sm:px-10 lg:px-40">
      {/* Heading */}
      <div  className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Everything a VPN should have (and more)
        </h2>
      </div>

      {/* Top Grid Section */}
      <div  className="max-w-6xl mx-auto grid  md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Features */}
        <div  className="space-y-6">
          {/* Feature 1 */}
          <div className="flex items-center space-x-4">
            <img src="/vpnFeature/Engi.svg" alt="Speed Icon" style={{width: '64px', height: '64px'}} />
            <div>
              <p className="font-semibold text-gray-800 text-lg">Engineered for speed</p>
              <p className="text-[#6E6E6E] font-[Montserrat] text-[17.868px] font-normal leading-[27px] tracking-[-0.2px]">
                Our global server network is optimized to let you surf and stream quickly.
                No throttling, no buffering, no fuss.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center space-x-4">
            <img src="/vpnFeature/Sequrity.svg" alt="Audited Icon" style={{width: '100px', height: '64px'}} />
            <div>
              <p className="font-semibold text-gray-800 text-lg">Security you can rely on</p>
              <p className="text-[#6E6E6E] font-[Montserrat] text-[17.868px] font-normal leading-[27px] tracking-[-0.2px]">
                SeelVpn is the only VPN in the world to publish regular,
                independent security audits of our apps.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center space-x-4">
            <img src="/vpnFeature/Strong.svg" alt="Encryption Icon" style={{width: '100px', height: '64px'}} />
            <div>
              <p className="font-semibold text-gray-800 text-lg">Strong Encryption</p>
              <p className="text-[#6E6E6E] font-[Montserrat] text-[17.868px] font-normal leading-[27px] tracking-[-0.2px]">
                SeelVpn uses strong AES 256-bit encryption by default.
                Weaker encryption isn’t even an option.
              </p>
            </div>
          </div>
        </div>


        {/* Right Column - Image */}
        <div   className="flex justify-center">
          <img src="/vpnFeature/vpn.svg" alt="Bear and Woman" className="max-w-full h-auto" />
        </div>
      </div>

      {/* Bottom Section */}
      <div  className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div  className="text-center md:text-left space-y-6">
          <h3 className="text-xl sm:text-2xl text-center font-bold text-gray-800 mb-3">
            Why millions of people trust SeelVpn
          </h3>
          <p className="text-[#6E6E6E] text-center font-[Montserrat] text-[18.155px] font-normal leading-[27px] tracking-[-0.2px]">
            SeelVpn respects your privacy. We will never monitor, log, or sell any of your browsing activity.
            As the only VPN in the industry to perform annual, independent
            <a href="#" className="text-teal-700 hover:underline ml-1">security audits</a>, you can trust us to keep your connection secure.
          </p>

        </div>

        {/* Right Image */}
        <div  className="flex justify-center">
          <img src="/vpnFeature/Audit.png" alt="Xray Bear" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
