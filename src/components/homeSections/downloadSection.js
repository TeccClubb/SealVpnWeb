import Link from "next/link";

export default function DownloadSection() {
  return (
    <div className="bg-[#2d4a4e] text-white px-6 py-12 md:py-20 flex flex-col items-center gap-6">
      <h1 className="lg:w-1/2 text-4xl font-bold text-center">
        Download SeelVpn to start browsing privately today!
      </h1>
      <Link
        href="/download-device"
        className="bg-teal-500 hover:bg-teal-600 active:opacity-70 text-white text-[22px] px-8 py-4 rounded-full transition duration-200"
      >
        Get SeelVpn now
      </Link>
    </div>
  );
}
