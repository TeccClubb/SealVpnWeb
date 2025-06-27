"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

import CheckOutForm from "../checkoutForm";
import CheckedIcon from "../CheckedIcon";
import LogInModal from "../loginModal"
import { calculateDiscountPercentage } from "../pricingSection/pricingPlans";
const CheckoutPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planId = searchParams.get("planId");
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState();
  const [isPlansLoading, setIsPlansLoading] = useState(true);
  const [loginModal, setLoginModal] = useState(false);

  if (!planId) {
    notFound();
  }

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios
          .get(`${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/plans`, {
            headers: { Accept: "application/json" },
          })
          .then((res) => res.data);

        if (res.status) {
          setPlans(res.plans);
          setSelectedPlan(res.plans.find((plan) => plan.id === +planId));
        }
      } catch (error) {
      } finally {
        setIsPlansLoading(false);
      }
    };

    fetchPlans();
  }, [planId]);

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Get SeelVpn at the lowest price of the year
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Includes all SeelVpn apps, priority customer support, and unlimited
        data.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {isPlansLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-lg p-4 w-full animate-pulse bg-gray-200"
            >
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>
            </div>
          ))}

        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`${
              plan.id === +planId
                ? "border-2 border-green-400 bg-[#f9fff6] cursor-default shadow-md overflow-visible relative"
                : "border hover:border-green-500 cursor-pointer"
            } rounded-lg p-4 w-full`}
            onClick={() =>
              router.replace(`/account/checkout?planId=${plan.id}`)
            }
          >
            {/* Top-right Ribbon */}
            {plan.id === +planId && (
              <div className="absolute top-2 -right-[36px] transform rotate-45 bg-teal-500 text-white text-xs font-bold px-6 py-1 rounded-sm shadow-md">
                <div className="text-[10px] leading-none">SPRING SALE!</div>
                <div className="text-sm leading-tight">
                  SAVE{" "}
                  {calculateDiscountPercentage(
                    plan.original_price,
                    plan.discount_price
                  )}
                  %
                </div>
              </div>
            )}

            <div className="flex items-center space-x-3">
              <CheckedIcon checked={plan.id === +planId} />
              <h3 className="text-xl font-semibold capitalize">{plan.name}</h3>
            </div>
            <b>
              <p>
                <span
                  className={
                    plan.id === +planId ? "text-green-600 text-xl" : "text-lg"
                  }
                >
                  ${plan.discount_price}{" "}
                </span>
                <span className="text-sm font-semibold">
                  /{plan.duration > 1 ? plan.duration : ""}
                  <span className="capitalize">{plan.duration_unit}</span>
                </span>
              </p>
            </b>
            <p className="text-sm text-gray-600 mt-1">
              ${plan.discount_price} billed for the first{" "}
              {plan.duration > 1 ? plan.duration : ""}{" "}
              <span className="lowercase">{plan.duration_unit}</span>
            </p>

            {/* Plant pot image - half in, half out */}
            {plan.id === +planId && (
              <div className="absolute -bottom-8 right-10">
                <img
                  src="/account/checkout/plantImg.png"
                  alt="Plant Pot"
                  className="w-20"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 w-full">
        {/* Left: Plan & Payment */}
        <CheckOutForm
          isPlansLoading={isPlansLoading}
          selectedPlan={selectedPlan}
          setLoginModal={setLoginModal}
        />

        {/* Right: Plan details */}
        <div className="flex md:mt-40 flex-col bg-black/5 px-10 rounded-2xl">
          <Image
            src="/imageofHero.png"
            alt="Teams Plan"
            width={0}
            height={0}
            sizes="100vw"
            className="w-80 h-auto mx-auto mb-4 md:-mt-40 mt-10"
          />
          <h3 className="text-xl font-semibold my-4">
            What you get with your SeelVpn plan
          </h3>
          <ul className="w-full text-gray-700 text-left mb-6 space-y-2">
            {[
              "Unlimited data",
              "Unlimited device",
              "Access to over 8000 VPN servers",
              "The best and latest VPN tech",
              "Core VPN features",
              "City-level server selection",
              "47 countries worldwide",
              "Publicly audited apps",
              "Best-in-class 256-bit AES encryption",
            ].map((item, i) => (
              <li key={item + i} className="flex items-center gap-2">
                <CheckedIcon />
                <span>{item}</span>
              </li>
            ))}

            <li className="flex gap-2">
              <CheckedIcon />
              Apps for
              <div className="ms-2">
                <Image
                  src="/andriodimg.svg"
                  alt="Teams Plan"
                  width={20}
                  height={20}
                  className="text-black invert"
                />
              </div>
              <div className="ms-2">
                <Image
                  src="/appleImg.svg"
                  alt="Teams Plan"
                  width={20}
                  height={20}
                  className="text-black invert"
                />
              </div>
              <div className="ms-2">
                <Image
                  src="/mobileLogo.svg"
                  alt="Teams Plan"
                  width={20}
                  height={20}
                  className="text-black invert"
                />
              </div>
              <div className="ms-2">
                <Image
                  src="/window.svg"
                  alt="Teams Plan"
                  width={20}
                  height={20}
                  className="text-black   invert"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <LogInModal 
        isOpen={loginModal}
        onClose={() => setLoginModal(false)}
        onConfirm={() => console.log("confirmed modal")}
      />
    </section>
  );
};

const Page = () => (
  <Suspense>
    <CheckoutPage />
  </Suspense>
);

export default Page;
