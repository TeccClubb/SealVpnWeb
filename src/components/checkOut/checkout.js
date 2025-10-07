"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

import CheckOutForm from "../checkoutForm";
import CheckedIcon from "../CheckedIcon";
import LogInModal from "../loginModal"
import { calculateDiscountPercentage } from "../pricingSection/pricingPlans";
import { useSession } from "next-auth/react";
const CheckoutPage = () => {
  const router = useRouter();
  const {data: session, status: authStatus} = useSession();
  const searchParams = useSearchParams();
  const planId = searchParams.get("planId");
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState();
  const [isPlansLoading, setIsPlansLoading] = useState(true);
  const [loginModal, setLoginModal] = useState(authStatus === "unauthenticated");
  const [isPlanChanging, setIsPlanChanging] = useState(false);
  
  // Promo code state
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoLoading, setPromoLoading] = useState(false);
  const [promoError, setPromoError] = useState("");

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

  // Handle plan change with loading state
  const handlePlanChange = (newPlanId) => {
    if (newPlanId !== +planId) {
      setIsPlanChanging(true);
      router.replace(`/account/checkout?planId=${newPlanId}`);
      // Reset the changing state after a short delay
      setTimeout(() => setIsPlanChanging(false), 1000);
    }
  };

  const validatePromoCode = async (code) => {
    try {
      if (!session?.user?.access_token) {
        return { valid: false, message: 'Authentication required' };
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/validate-promo-code`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.user.access_token}`,
        },
        body: JSON.stringify({ code }),
      });

      const result = await response.json();
  
      if (result.status && result.valid && result.promo_code) {
        return {
          valid: true,
          promoCode: result.promo_code,
          discountInfo: result.discount_info,
          stripeCouponId: result.promo_code.stripe_coupon_id,
          stripePromotionCodeId: result.promo_code.stripe_promotion_code_id,
          message: result.message,
        };
      }
  
      return { 
        valid: false, 
        message: result.message || 'Invalid promo code' 
      };
    } catch (error) {
      console.error('Error validating promo code:', error);
      return { 
        valid: false, 
        message: 'Error validating promo code. Please try again.' 
      };
    }
  }

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) return;
    
    setPromoLoading(true);
    setPromoError("");
    
    try {
      const result = await validatePromoCode(promoCode.trim());
      
      if (result.valid) {
        setAppliedPromo(result);
        setPromoError("");
      } else {
        setPromoError(result.message || "Invalid promo code");
        setAppliedPromo(null);
      }
    } catch (error) {
      setPromoError("Error validating promo code");
      setAppliedPromo(null);
    } finally {
      setPromoLoading(false);
    }
  };

  // Handle remove promo code
  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoCode("");
    setPromoError("");
  };

  // Calculate discounted price
  const getDiscountedPrice = () => {
    if (!appliedPromo || !selectedPlan) return selectedPlan?.discount_price;
    
    const discountPercent = appliedPromo.promoCode.discount_percent;
    return (selectedPlan.discount_price * (1 - discountPercent / 100)).toFixed(2);
  };


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
              handlePlanChange(plan.id)
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
        <div className="relative space-y-6">
          {isPlanChanging && (
            <div className="absolute inset-0 bg-white/80 z-10 flex items-center justify-center rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                <p className="text-gray-600 font-medium">Updating checkout...</p>
              </div>
            </div>
          )}

          {/* Promo Code Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Have a promo code?</h3>
            
            {!appliedPromo ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleApplyPromo()}
                />
                <button
                  onClick={handleApplyPromo}
                  disabled={promoLoading || !promoCode.trim()}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {promoLoading ? "Applying..." : "Apply"}
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-md p-3">
                <div className="flex items-center gap-2">
                  <CheckedIcon />
                  <span className="text-green-700 font-medium">
                    Promo code "{appliedPromo.promoCode.code}" applied
                  </span>
                  <span className="text-green-600 text-sm">
                    ({appliedPromo.promoCode.discount_percent}% off)
                  </span>
                </div>
                <button
                  onClick={handleRemovePromo}
                  className="text-red-600 hover:text-red-700 text-sm underline"
                >
                  Remove
                </button>
              </div>
            )}
            
            {promoError && (
              <p className="text-red-600 text-sm mt-2">{promoError}</p>
            )}
          </div>

          {/* Price Summary */}
          {selectedPlan && appliedPromo && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Price Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Original Price:</span>
                  <span>${selectedPlan.discount_price}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Promo Discount:</span>
                  <span>-{appliedPromo.promoCode.discount_percent}%</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span>${getDiscountedPrice()}</span>
                </div>
              </div>
            </div>
          )}
          
          {selectedPlan && 
          <CheckOutForm 
            priceId={selectedPlan.stripe_price_id}
            couponId={appliedPromo?.stripeCouponId || null}
          />
          }
        </div>

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
        // onClose={() => setLoginModal(false)}
        onSuccess={() => setLoginModal(false)}
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
