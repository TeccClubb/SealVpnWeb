'use client';

import Image from "next/image";
import { use } from "react";
import { useEffect } from "react";
import AOS from "aos"; // Import AOS library for animations
import 'aos/dist/aos.css'; // Import AOS styles


export default function PricingPlans() {
  useEffect(() => { 
    const AOS = require('aos');
    AOS.init({ duration: 1200, once: true });
  }
  , []);
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl mb-20 font-bold text-center ">
        Pick the plan that's right for you
      </h2>
      {/* <h2 className="text-sm  text-center mb-10">
        Includes all SeelVpn apps, priority customer support, and unlimited data.
      </h2> */}
      <div className="flex justify-center">

        <div className="grid md:grid-cols-4   justify-center pt-15 gap-8 max-w-7xl mx-auto" style={{ display: "flex" }}  >

          {/* Free Plan */}
          <div   className="flex rounded-2xl text-neutral-500 shadow-2xl">

            <div  className="flex flex-col items-center text-center p-6  relative rounded-2xl ">
              <Image src="/pricing/freeOfferImg.svg" alt="Free Plan" width={100} height={100} />
              <h3 className="text-2xl font-semibold my-4">Free</h3>
              <p className=" mb-6 text-neutral-500">Testing and limited usage</p>
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
              <button className="w-64 h-13 absolute  bottom-3   bg-[#4DB8AC] rounded-[40px] text-white    ">Try for free</button>

              {/* <button className="bg-green-500 absolute bottom-6  text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"></button> */}
            </div>
            <div  className="flex flex-col items-center text-neutral-500 text-center p-6 relative  rounded-2xl ">
              <Image
                src="/pricing/heroCardImg.svg"
                alt="Unlimited Plan"
                width={200}
                height={200}
                className="absolute top-[-100px] left-1/2 transform -translate-x-1/2"
              />
              <span className="absolute top-8 right-4 bg-yellow-400 text-white text-sm font-bold px-2 py-1 rounded-full">67% OFF</span>
              <h3 className="text-2xl pt-22 font-semibold my-4">Unlimited</h3>
              <p className="  mb-6 text-neutral-500">All-day security and peace of mind</p>
              <ul className="text-gray-700 text-left mb-6 space-y-2">
                <li className="flex gap-2 text-neutral-500">
                  <Image
                    src="/tickIcon.svg"
                    alt="Teams Plan"
                    width={20}
                    height={20}


                  />
                  Unlimited secure browsing</li>
                <li className="flex gap-2 text-neutral-500">
                  <Image
                    src="/tickIcon.svg"
                    alt="Teams Plan"
                    width={20}
                    height={20}


                  />  Unlimited devices</li>
                <li className="flex gap-2  text-neutral-500 ">
                  <Image
                    src="/tickIcon.svg"
                    alt="Teams Plan"
                    width={20}
                    height={20}


                  />  Premium VPN servers</li>
                <li className="flex gap-2  text-neutral-500">
                  <Image
                    src="/tickIcon.svg"
                    alt="Teams Plan"
                    width={20}
                    height={20}


                  /> Closest server selection</li>
                <li className="flex gap-2  text-neutral-500">
                  <Image
                    src="/tickIcon.svg"
                    alt="Teams Plan"
                    width={20}
                    height={20}


                  /> Priority customer support</li>
              </ul>
              <div className="absolute bottom-2 text-neutral-500">
                <p className=" text-xl font-normal mb-3 leading-snug ">from $3.33/mo</p>

                <button className="w-64 h-13      bg-[#4DB8AC] rounded-[40px]   text-white  ">Get Started</button>
              </div>

            </div>
          </div>

          {/* Unlimited Plan with overlapping image */}


          {/* Teams Plan with overlapping image */}
          <div  className="flex flex-col items-center text-center p-6 relative  rounded-2xl shadow-2xl">
            <Image
              src="/pricing/teamImage.svg"
              alt="Teams Plan"
              width={200}
              height={200}
              className="absolute top-[-50px] left-1/2 transform -translate-x-1/2"
            />
            <h3 className="text-2xl font-semibold my-4 pt-22">Teams</h3>
            <p className=" mb-6 text-neutral-500">For businesses securing 2+ users</p>
            <ul className=" text-left mb-6 space-y-2 text-neutral-500">
              <li className="flex gap-2">
                <Image
                  src="/tickIcon.svg"
                  alt="Teams Plan"
                  width={20}
                  height={20}


                /> Unlimited secure browsing</li>
              <li className="flex gap-2 text-neutral-500">
                <Image
                  src="/tickIcon.svg"
                  alt="Teams Plan"
                  width={20}
                  height={20}


                /> Unlimited devices</li>
              <li className="flex gap-2 text-neutral-500">
                <Image
                  src="/tickIcon.svg"
                  alt="Teams Plan"
                  width={20}
                  height={20}


                /> Premium VPN servers</li>
              <li className="flex gap-2 text-neutral-500">
                <Image
                  src="/tickIcon.svg"
                  alt="Teams Plan"
                  width={20}
                  height={20}


                /> Closest server selection</li>
              <li className="flex gap-2 text-neutral-500">
                <Image
                  src="/tickIcon.svg"
                  alt="Teams Plan"
                  width={20}
                  height={20}


                /> Priority customer support</li>
              <li className="flex gap-2 text-neutral-500">
                <Image
                  src="/tickIcon.svg"
                  alt="Teams Plan"
                  width={20}
                  height={20}


                /> Centralized team billing</li>
              <li className="flex gap-2 text-neutral-500">
                <Image
                  src="/tickIcon.svg"
                  alt="Teams Plan"
                  width={20}
                  height={20}


                /> Admin & manager tools</li>
              <p className="text-lg text-center  font-bold mb-8   mt-4">$3.75/mo per user</p>
            </ul>
            <button className="w-64 h-13 absolute  bottom-3  text-white  bg-[#4DB8AC] rounded-[40px]    ">Get Started</button>

            {/* <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Get started</button> */}
          </div>

        </div>
      </div>


      {/* Payment Icons */}
    

    </section>
  );
}
