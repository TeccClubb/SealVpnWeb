'use client';

import Image from "next/image";


export default function PricingPlans() {
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center ">
        Pick the plan that's right for you
      </h2>
      <h2 className="text-sm  text-center mb-10">
        Includes all SeelVpn apps, priority customer support, and unlimited data.
      </h2>

      <div className="grid md:grid-cols-3 pt-15 gap-8 max-w-6xl mx-auto">

        {/* Free Plan */}
        <div className="flex flex-col items-center text-center p-6  relative rounded-2xl shadow-xl">
          <Image src="/pricing/freeOfferImg.svg" alt="Free Plan" width={100} height={100} />
          <h3 className="text-2xl font-semibold my-4">Free</h3>
          <p className="text-gray-600 mb-6">Testing and limited usage</p>
          <p className="text-lg font-medium mb-6">
            <div className="flex">

              <Image
                src="/pricing/tickImg.svg"
                alt="Unlimited Plan"
                width={20}
                height={20}

              />
              <div className="ps-2">
                2GB of secure browsing

              </div>
            </div>
          </p>
          <button className="bg-green-500 absolute bottom-6  text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Try for free</button>
        </div>

        {/* Unlimited Plan with overlapping image */}
        <div className="flex flex-col items-center text-center p-6 relative  rounded-2xl shadow-2xl">
          <Image
            src="/pricing/heroCardImg.svg"
            alt="Unlimited Plan"
            width={200}
            height={200}
            className="absolute top-[-100px] left-1/2 transform -translate-x-1/2"
          />
          <span className="absolute top-8 right-4 bg-yellow-400 text-white text-sm font-bold px-2 py-1 rounded-full">67% OFF</span>
          <h3 className="text-2xl pt-22 font-semibold my-4">Unlimited</h3>
          <p className="text-gray-600 mb-6">All-day security and peace of mind</p>
          <ul className="text-gray-700 text-left mb-6 space-y-2">
            <li className="flex gap-2">
              <Image
                src="/tickIcon.svg"
                alt="Teams Plan"
                width={20}
                height={20}


              />
              Unlimited secure browsing</li>
            <li className="flex gap-2">
              <Image
                src="/tickIcon.svg"
                alt="Teams Plan"
                width={20}
                height={20}


              />  Unlimited devices</li>
            <li className="flex gap-2">
              <Image
                src="/tickIcon.svg"
                alt="Teams Plan"
                width={20}
                height={20}


              />  Premium VPN servers</li>
            <li className="flex gap-2">
              <Image
                src="/tickIcon.svg"
                alt="Teams Plan"
                width={20}
                height={20}


              /> Closest server selection</li>
            <li className="flex gap-2">
              <Image
                src="/tickIcon.svg"
                alt="Teams Plan"
                width={20}
                height={20}


              /> Priority customer support</li>
          </ul>
          <p className="text-2xl font-bold mb-2">from $3.33/mo</p>
          <button className="bg-green-500 absolute bottom-6  text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Get Started</button>

        </div>

        {/* Teams Plan with overlapping image */}
        <div className="flex flex-col items-center text-center p-6 relative  rounded-2xl shadow-2xl">
          <Image
            src="/pricing/teamImage.svg"
            alt="Teams Plan"
            width={200}
            height={200}
            className="absolute top-[-50px] left-1/2 transform -translate-x-1/2"
          />
          <h3 className="text-2xl font-semibold my-4 pt-22">Teams</h3>
          <p className="text-gray-600 mb-6">For businesses securing 2+ users</p>
          <ul className="text-gray-700 text-left mb-6 space-y-2">
            <li className="flex gap-2">  
              <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        /> Unlimited secure browsing</li>
            <li className="flex gap-2">  
              <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        /> Unlimited devices</li>
            <li className="flex gap-2">  
              <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        /> Premium VPN servers</li>
            <li className="flex gap-2">  
              <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        /> Closest server selection</li>
            <li className="flex gap-2">  
              <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        /> Priority customer support</li>
            <li className="flex gap-2">  
              <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        /> Centralized team billing</li>
            <li className="flex gap-2">  
              <Image
                            src="/tickIcon.svg"
                            alt="Teams Plan"
                            width={20}
                            height={20}


                        /> Admin & manager tools</li>
          </ul>
          <p className="text-lg font-medium mb-2">$3.75/mo per user</p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Get started</button>
        </div>

      </div>

      {/* Payment Icons */}
      <div className="flex items-center justify-center gap-4 mt-12">

        <Image src="/pricing/visa.png" alt="Bitcoin" width={300} height={100} />
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        All pricing shown in USD
      </p>
    </section>
  );
}
