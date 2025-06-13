import Link from "next/link";

export default function DawnloadSection() {
  return (
    <div className="bg-gray-700 text-white px-6 py-12 md:py-20 flex flex-col items-center gap-6">
      <h1 className="lg:w-1/2 text-4xl font-bold text-center">
        Download SeelVpn to start browsing privately today!
      </h1>
      <Link
        href="/download-device"
        className="bg-teal-400 hover:bg-teal-500 active:opacity-70 text-white text-[22px] px-8 py-4 rounded-full t"
      >
        Get SeelVpn now
      </Link>
    </div>
  );
}
