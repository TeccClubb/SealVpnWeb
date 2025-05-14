'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function PricingPlans() {
  const router = useRouter();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/plans`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log("Get plans response:", response.data);
        setPlans(response.data.plans);
      });
  }, []);

  const handleClick = (planId) => {
    const token = localStorage.getItem("access_token")

    if (!token) {
      router.push("/login")
    } else {

      router.push(`/account/checkout?planId=${planId}`);
    }
  };

  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl mb-20 font-bold text-center ">
        Pick the plan that's right for you
      </h2>

      <div className="flex justify-center py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl w-full">
          {/* Free Plan */}
          {plans[0] && (
            <div
              className="flex flex-col items-center text-center p-6 relative rounded-l-2xl bg-white h-full"
              style={{
                boxShadow: "5px 8px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image src="/pricing/freeOfferImg.svg" alt="Free Plan" width={100} height={100} />
              <h3 className="text-2xl font-semibold my-4 text-neutral-800">{plans[0].name}</h3>
              <p className="mb-6 text-neutral-500">{plans[0].description.split(",")[0]}</p>

              <ul className="text-left mb-6 space-y-2 w-full text-neutral-500">
                {plans[0].description.split(",").map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Image src="/tickIcon.svg" alt="" width={20} height={20} />
                    <span>{item.trim()}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg font-bold mb-4">${plans[0].original_price
              }/month</p>

              <button
                onClick={() => handleClick(plans[0].id || "free")}
                className="w-full bg-[#4DB8AC] rounded-full text-white py-3 mt-auto"
              >
                Try for free
              </button>
            </div>
          )}



          {/* API Plan 1 (Assuming it's Unlimited) */}
          {plans[1] && (
            <div
              style={{
                boxShadow: "5px 8px 15px rgba(0, 0, 0, 0.1)",
              }}
              className="flex flex-col items-center text-center p-6 relative sm:rounded-lg lg:rounded-r-2xl bg-white h-full"
            >
              <Image src="/pricing/heroCardImg.svg" alt="Plan" width={170} height={180} className="mb-4 lg:-mt-30" />
              <span className="absolute top-20 w-18 h-18 right-4 bg-zinc-500 rounded-[100px] text-white text-sm font-bold px-2 py-2">
                <div className="w-12 h-12 absolute justify-center text-white text-lg font-black font-['Montserrat'] leading-snug">
                  67% OFF
                </div>
              </span>
              <h3 className="text-2xl font-semibold my-4 text-neutral-800">{plans[1].name}</h3>
              <p className="mb-6 text-neutral-500">{plans[1].description.split(",")[0]}</p>
              <ul className="text-left mb-6 space-y-2 w-full text-neutral-500">
                {plans[1].description.split(",").map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Image src="/tickIcon.svg" alt="" width={20} height={20} />
                    <span>{item.trim()}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xl font-normal mb-3">from ${plans[1].original_price
              }/month</p>
              <div className="flex-grow"></div>
              <button onClick={() => handleClick(plans[1].id)} className="w-full bg-[#4DB8AC] rounded-full text-white py-3 mt-auto">
                Get Started
              </button>
            </div>
          )}

          {/* API Plan 2 (Assuming it's Teams) */}
          {plans[2] && (
            <div className="flex lg:ml-4 flex-col items-center text-center p-6 relative rounded-2xl shadow-2xl bg-white h-full">
              <Image src="/pricing/teamImage.svg" alt="Plan" width={200} height={200} className="mb-4 lg:-mt-30" />
              <h3 className="text-2xl font-semibold my-4 text-neutral-800">{plans[2].name}</h3>
              <p className="mb-6 text-neutral-500">{plans[2].description.split(",")[0]}</p>
              <ul className="text-left mb-6 space-y-2 w-full text-neutral-500">
                {plans[2].description.split(",").map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Image src="/tickIcon.svg" alt="" width={20} height={20} />
                    <span>{item.trim()}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-bold mb-4">${plans[2].original_price
              }/mo per user</p>
              <button onClick={() => handleClick(plans[2].id)} className="w-full bg-[#4DB8AC] rounded-full text-white py-3 mt-auto">
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
