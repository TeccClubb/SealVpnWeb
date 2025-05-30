"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useUserCookie } from "../use-cookies";
import CheckedIcon from "../CheckedIcon";
import { toast } from "react-toastify";

export const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  return (
    Math.round(((originalPrice - discountedPrice) / originalPrice) * 10000) /
    100
  );
};

export default function PricingPlans() {
  const router = useRouter();
  const { user } = useUserCookie();
  const [plans, setPlans] = useState([]);
  const [isPlansLoading, setIsPlansLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios
          .get(`${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/plans`, {
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => {
            setPlans(response.data.plans);
          });
      } catch (error) {
        toast.error("Error fetching plans. Please try again later.");
      } finally {
        setIsPlansLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleClick = (planId) => {
    if (!user) {
      router.push("/login");
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
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
          {/* Free Plan */}
          <div
            className="flex flex-col items-center text-center p-6 relative rounded-l-2xl bg-white h-full"
            style={{
              boxShadow: "5px 8px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src="/pricing/freeOfferImg.svg"
              alt="Free Plan"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
            <h3 className="text-2xl font-semibold my-4">Free</h3>
            <p className="mb-6 text-neutral-500">Testing and limited usage</p>
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/pricing/tickImg.svg"
                alt="Tick"
                width={20}
                height={20}
              />
              <span className="ps-2">2GB of secure browsing</span>
            </div>
            <button
              onClick={() => router.push("/signup")}
              className="w-full bg-[#4DB8AC] rounded-full text-white py-3 mt-auto"
            >
              Try for free
            </button>
          </div>

          {isPlansLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 relative rounded-lg bg-gray-200 animate-pulse h-full"
                style={{
                  boxShadow: "5px 8px 15px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
                <div className="w-3/4 h-6 bg-gray-300 rounded mb-4"></div>
                <div className="w-1/2 h-4 bg-gray-300 rounded mb-6"></div>
                <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-full h-4 bg-gray-300 rounded mb-6"></div>
                <div className="w-full h-10 bg-gray-300 rounded mt-auto"></div>
              </div>
            ))}

          {plans.length !== 0 &&
            plans.map((plan, index) => (
              <div
                key={plan.id}
                style={{
                  boxShadow: "5px 8px 15px rgba(0, 0, 0, 0.1)",
                }}
                className="flex flex-col items-center text-center p-6 relative sm:rounded-lg lg:rounded-r-2xl bg-white h-full"
              >
                <Image
                  src={
                    (index + 1) % 2 === 0
                      ? "/pricing/even_pricing_image.png"
                      : "/pricing/odd_pricing_image.png"
                  }
                  alt="Plan"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`mb-4 xl:-mt-30 object-contain ${(index + 1) % 2 === 0
                      ? "w-[280px] h-[225px]"
                      : "w-[280px] h-[225px]" // Slightly taller for odd images
                    }`}
                />

                <span className="absolute top-20 w-18 h-18 right-4 bg-zinc-500 rounded-[100px] text-white text-sm font-bold px-2 py-2">
                  <div className="w-14 h-14 absolute  justify-center text-white text-lg font-black font-['Montserrat'] leading-snug">
                    {Math.round(
                      calculateDiscountPercentage(
                        plan.original_price,
                        plan.discount_price
                      )
                    )}
                    % OFF
                  </div>
                </span>
                <h3 className="text-2xl font-semibold my-4 text-neutral-800">
                  {plan.name}
                </h3>
                <p className="mb-6 text-neutral-500">
                  All-day security and peace of mind
                </p>
                <ul className="text-left mb-6 space-y-2 w-full text-neutral-500">
                  {plan.description.split(",").map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckedIcon className="w-4" />
                      <span className="flex-1">{item.trim()}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xl font-medium mb-4 mt-auto">
                  ${plan.discount_price}{" "}
                  <span className="text-sm font-semibold">
                    /{plan.duration > 1 ? plan.duration : ""}
                    <span className="capitalize">{plan.duration_unit}</span>
                  </span>
                </p>
                <button
                  onClick={() => handleClick(plan.id)}
                  className="w-full bg-[#4DB8AC] rounded-full text-white py-3"
                >
                  Get Started
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
