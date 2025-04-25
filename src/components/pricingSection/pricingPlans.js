'use client';

import Image from "next/image";
import { use } from "react";
import { useEffect } from "react";
import AOS from "aos"; // Import AOS library for animations
import 'aos/dist/aos.css'; // Import AOS styles
import { useRouter } from "next/navigation";


export default function PricingPlans() {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({ duration: 1200, once: true });
  }
    , []);
  const router = useRouter()
  const handleClick = () => {
    // Perform any action you want when the button is clicked
    // For example, navigate to a different page
    router.push('/account/checkout');
  }
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl mb-20 font-bold text-center ">
        Pick the plan that's right for you
      </h2>
      {/* <h2 className="text-sm  text-center mb-10">
        Includes all SeelVpn apps, priority customer support, and unlimited data.
      </h2> */}
      <div className="flex justify-center py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 g max-w-4xl w-full">

          {/* Free Plan */}
          <div
            data-aos="zoom-in-up"
            className="flex flex-col items-center text-center p-6 relative rounded-l-2xl bg-white h-full"
            style={{
              boxShadow: "5px 8px 15px rgba(0, 0, 0, 0.1)" // left + bottom
            }}
          >
            <Image src="/pricing/freeOfferImg.svg" alt="Free Plan" width={100} height={100} />
            <h3 className="text-2xl font-semibold my-4">Free</h3>
            <p className="mb-6 text-neutral-500">Testing and limited usage</p>
            <div className="flex items-center justify-center mb-6">
              <Image src="/pricing/tickImg.svg" alt="Tick" width={20} height={20} />
              <span className="ps-2">2GB of secure browsing</span>
            </div>
            <button onClick={handleClick} className="w-full bg-[#4DB8AC] rounded-full text-white py-3 mt-auto">
              Try for free
            </button>
          </div>

          {/* Unlimited Plan */}
          <div
            data-aos="zoom-in-down"
            style={{
              boxShadow: "5px 8px 15px rgba(0, 0, 0, 0.1)" // left + bottom
            }}
            className="flex flex-col items-center text-center p-6 relative sm:rounded-lg lg:rounded-r-2xl bg-white h-full"
          >
            <Image
              src="/pricing/heroCardImg.svg"
              alt="Unlimited Plan"
              width={170}
              height={180}
              className="mb-4 lg:-mt-30"  // Negative margin to pull image upwards
            />
            <span className="absolute top-20 w-18 h-18 right-4 bg-zinc-500 rounded-[100px] text-white text-sm font-bold px-2 py-2">
              <div className="w-12 h-12 left-[14.76px] top-[14.82px] absolute justify-center text-white text-lg font-black font-['Montserrat'] leading-snug">
                67% OFF
              </div>
            </span>
            <h3 className="text-2xl font-semibold my-4 text-neutral-800">Unlimited</h3>
            <p className="mb-6 text-neutral-500">All-day security and peace of mind</p>
            <ul className="text-left mb-6 space-y-2 w-full text-neutral-500">
              {[
                "Unlimited secure browsing",
                "Unlimited devices",
                "Premium VPN servers",
                "Closest server selection",
                "Priority customer support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Image src="/tickIcon.svg" alt="" width={20} height={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-normal mb-3">from $3.33/mo</p>
            <div className="flex-grow"></div> {/* This ensures the content above pushes the button down */}
            <button
              onClick={handleClick}
              className="w-full bg-[#4DB8AC] rounded-full text-white py-3 mt-auto"
            >
              Get Started
            </button>
          </div>



          {/* Teams Plan (already looked good) */}
          <div data-aos="zoom-in-up" className="flex lg:ml-4 flex-col items-center text-center p-6 relative rounded-2xl shadow-2xl bg-white h-full">
            <Image
              src="/pricing/teamImage.svg"
              alt="Teams Plan"
              width={200}
              height={200}
              className="mb-4 lg:-mt-30"
            />
            <h3 className="text-2xl font-semibold my-4 text-neutral-800">Teams</h3>
            <p className="mb-6 text-neutral-500">For businesses securing 2+ users</p>
            <ul className="text-left mb-6 space-y-2 w-full text-neutral-500">
              {[
                "Unlimited secure browsing",
                "Unlimited devices",
                "Premium VPN servers",
                "Closest server selection",
                "Priority customer support",
                "Centralized team billing",
                "Admin & manager tools"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Image src="/tickIcon.svg" alt="" width={20} height={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold mb-4">$3.75/mo per user</p>
            <button onClick={handleClick} className="w-full bg-[#4DB8AC] rounded-full text-white py-3 mt-auto">
              Get Started
            </button>
          </div>
        </div>
      </div >



      {/* Payment Icons */}


    </section >
  );
}
