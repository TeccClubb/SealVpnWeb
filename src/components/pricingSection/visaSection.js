import React from "react";
import Image from "next/image";

export default function VisaSection() {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div>
        <div className="flex items-center justify-center gap-4 mt-12">
          <Image src="/pricing/visa.png" alt="Visa" width={300} height={100} />
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          All pricing shown in USD
        </p>
      </div>
    </div>
  );
}
