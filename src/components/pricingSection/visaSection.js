import React from "react";
import Image from "next/image";

export default function VisaSection() {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <Image
        src="/pricing/visa.png"
        alt="Visa"
        width={0}
        height={0}
        sizes="100vw"
        className="w-40 h-auto mx-auto"
      />

      <p className="text-center text-sm text-gray-500 mt-4">
        All pricing shown in USD
      </p>
    </div>
  );
}
