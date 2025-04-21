
import Image from 'next/image';

export default function DownloadPage() {
  return (
    <>
      {/* Hero Download Section */}
      <section className="bg-gray-50 py-2 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Text Column */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-[#3D3D3D]">
              Downloading SeelVpn for Windows
              {/* <br />
              <span className="block">for Windows</span> */}
            </h1>
            <p className="mt-4 text-[#6E6E6E] text-sm sm:text-base text-center leading-relaxed">
              Your SeelVpn download should start automatically.
              
              If it doesn’t, <a href="#" className="text-gray-500 underline">restart the download</a>,
              <span className="block">Windows 10 and later</span>
              <span className="block">
                Or get SeelVpn for a <a href="#" className="text-gray-500 underline">different device</a>.
              </span>
            </p>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/downloadImg/Rectangle.png"
              alt="Bear in pipe"
              width={200}
              height={250}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12">
  {/* Step 1 */}
  <div className="w-60 text-center">
    <Image
      src="/downloadImg/install.png"
      alt="Install the app"
      width={128}
      height={128}
      className="mx-auto mb-4"
    />
    <p className="flex items-center justify-center gap-2 mb-1">
      <span className="w-5 h-5 rounded-full bg-[#4DB8AC] text-white text-xs flex items-center justify-center font-semibold">
        1
      </span>
      <span className="text-gray-600 font-semibold">Install the app</span>
    </p>
    <p className="text-[#6E6E6E] text-xs leading-relaxed text-center">
      Double-click the new SeelVpn icon and follow the on-screen instructions
    </p>
  </div>

  {/* Step 2 */}
  <div className="w-60 text-center">
    <Image
      src="/downloadImg/login.png"
      alt="Sign up or log in"
      width={128}
      height={128}
      className="mx-auto mb-4"
    />
    <p className="flex items-center justify-center gap-2 mb-1">
      <span className="w-5 h-5 rounded-full bg-[#4DB8AC] text-white text-xs flex items-center justify-center font-semibold">
        2
      </span>
      <span className="text-gray-600 font-semibold">Sign up or log in</span>
    </p>
    <p className="text-[#6E6E6E] text-xs leading-relaxed text-center">
      Follow the on-screen instructions to log in or create an account
    </p>
  </div>

  {/* Step 3 */}
  <div className="w-60 text-center">
    <Image
      src="/downloadImg/startTunnel.png"
      alt="Start tunneling"
      width={128}
      height={128}
      className="mx-auto mb-4"
    />
    <p className="flex items-center justify-center gap-2 mb-1">
      <span className="w-5 h-5 rounded-full bg-[#4DB8AC] text-white text-xs flex items-center justify-center font-semibold">
        3
      </span>
      <span className="text-gray-600 font-semibold">Start tunneling</span>
    </p>
    <p className="text-[#6E6E6E] text-xs text-center leading-relaxed">
      Pick a country or select Fastest for the fastest speeds, then toggle the switch ON!
    </p>
  </div>
</div>

      </section>

      {/* Footer Links Section */}
      <footer className="py-8 text-xs text-center text-[#6E6E6E]">
        <div className="max-w-2xl mx-auto flex justify-between mb-2">
          <a href="#" className=" ml-[127px]">Notice and Attribution</a>
          <a href="#" className=" mr-[127px]">Uninstall SeelVpn</a>
        </div>
        <div className="max-w-6xl mx-auto text-center mt-[20px]">
          By downloading SeelVpn, you agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
        </div>
      </footer>
    </>
  );
}
