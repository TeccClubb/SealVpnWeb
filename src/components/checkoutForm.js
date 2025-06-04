import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement as StripePaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { calculateDiscountPercentage } from "./pricingSection/pricingPlans";
import { useUserCookie } from "./use-cookies";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function PaymentForm({ amount, planId, billingAddress }) {
  const { user } = useUserCookie();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (errorMessage) {
      toast.error("payment failed");
    }
  }, [errorMessage]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: billingAddress ? billingAddress.name : "",
      address: billingAddress ? billingAddress.address : "",
      city: billingAddress ? billingAddress.city : "",
      state: billingAddress ? billingAddress.state : "",
      country: billingAddress ? billingAddress.country : "",
      postal_code: billingAddress ? billingAddress.postal_code : "",
    },
  });

  const onSubmit = async (values) => {
    if (!stripe || !elements) {
      return;
    }

    try {
      // Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();
      if (submitError) {
        // Show error to your customer
        setErrorMessage(submitError.message);
        return;
      }
      setLoading(true);
      setErrorMessage(undefined);

      const res = await axios
        .post("/api/create-payment-intent", {
          amount,
        })
        .then((res) => res.data);

      if (!res.clientSecret) {
        setErrorMessage("Client secret is missing");
        return;
      }

      const { error } = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret: res.clientSecret,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: values.name,
              email: user.email,
              address: {
                line1: values.address,
                city: values.city,
                state: values.state,
                postal_code: values.postal_code,
                country: values.country,
              },
            },
          },
          return_url: `${window.location.origin}/payment-processing?planId=${planId}`,
        },
      });

      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-2">
      {/* Name Input */}
      <input
        type="text"
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
        className="w-full bg-black/5 border rounded p-3"
      />
      {errors.name && <p className="text-red-600">{errors.name.message}</p>}

      {/* Address Input */}
      <input
        type="text"
        {...register("address", { required: "Address is required" })}
        placeholder="Address"
        className="w-full bg-black/5 border rounded p-3"
      />
      {errors.address && (
        <p className="text-red-600">{errors.address.message}</p>
      )}
      <input
        type="text"
        {...register("city", { required: "City is required" })}
        placeholder="City"
        className="w-full border bg-black/5 rounded p-3"
      />
      {errors.city && <p className="text-red-600">{errors.city.message}</p>}

      {/* City and State Inputs */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          {...register("state", { required: "State is required" })}
          placeholder="State"
          className="w-full bg-black/5 border rounded p-3"
        />
        {errors.state && <p className="text-red-600">{errors.state.message}</p>}
        <input
          type="text"
          {...register("postal_code", {
            required: "postal code is required",
          })}
          placeholder="Postal Code"
          className="w-full bg-black/5 border rounded p-3"
        />
        {errors.state && (
          <p className="text-red-600">{errors.postal_code.message}</p>
        )}
      </div>

      <StripePaymentElement />

      <button
          type="submit"
          disabled={!stripe || !elements || isLoading}
          className={`w-full bg-[#4DB8AC] rounded-full text-white py-3 mt-auto ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Processing..." : "Pay"}
        </button>

      {errorMessage && (
        <div className="mt-2 text-red-600">
          <p>{errorMessage}</p>
        </div>
      )}
    </form>
  );
}

function PaymentElement({ amount, planId, billingAddress }) {
  const options = {
    mode: "payment",
    amount,
    currency: "usd",
    appearance: {
      variables: {
        colorPrimary: "#101418",
        colorBackground: "#ffffff00",
        borderRadius: "14px",
        colorText: "#101418",
        colorSuccess: "#2e7d32",
        colorDanger: "#d32f2f",
        colorWarning: "#ed6c02",
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm
        amount={amount}
        planId={planId}
        billingAddress={billingAddress}
      />
    </Elements>
  );
}

export default function CheckOutForm({ isPlansLoading, selectedPlan }) {
  const { user } = useUserCookie();
  const [billingAddress, setBillingAddress] = useState(null);
  const [isBillingAddressLoading, setIsBillingAddressLoading] = useState(true);

  useEffect(() => {
    const fetchBillingAddress = async () => {
      try {
        const res = await axios
          .get(`${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/billing-address`, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          })
          .then((res) => res.data);

        if (res.status) {
          setBillingAddress(res.user.billing_address);
        } else {
        }
      } catch (error) {
      } finally {
        setIsBillingAddressLoading(false);
      }
    };

    fetchBillingAddress();
  }, []);

  return (
    <div>
      <h1>Payment Details</h1>

      {isBillingAddressLoading && (
        <div className="space-y-4 mb-2">
          <div className="w-full bg-gray-200 animate-pulse h-10 rounded"></div>
          <div className="w-full bg-gray-200 animate-pulse h-10 rounded"></div>
          <div className="w-full bg-gray-200 animate-pulse h-10 rounded"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full bg-gray-200 animate-pulse h-10 rounded"></div>
            <div className="w-full bg-gray-200 animate-pulse h-10 rounded"></div>
          </div>
        </div>
      )}

      {selectedPlan && (
        <PaymentElement
          amount={selectedPlan.discount_price * 100}
          planId={selectedPlan.id}
          billingAddress={billingAddress}
        />
      )}

      <div className="text-sm text-gray-600 mb-5">
        Subscription renews automatically. Enter promo SEEL VPN to save an extra
        10% on your first year.
      </div>

      {isPlansLoading && (
        <div className="space-y-4">
          <div className="flex justify-between text-xl">
            <span className="w-1/2 bg-gray-200 animate-pulse h-6 rounded"></span>
            <span className="w-1/4 bg-gray-200 animate-pulse h-6 rounded"></span>
          </div>
          <div className="flex justify-between text-xl mb-4">
            <span className="w-1/2 bg-gray-200 animate-pulse h-6 rounded"></span>
            <span className="w-1/4 bg-gray-200 animate-pulse h-6 rounded"></span>
          </div>
          <div className="w-full h-0.5 relative bg-gray-200 animate-pulse"></div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span className="w-1/3 bg-gray-200 animate-pulse h-6 rounded"></span>
            <span className="w-1/4 bg-gray-200 animate-pulse h-6 rounded"></span>
          </div>
          <div>
            <p className="text-md text-gray-600">
              <span className="w-full bg-gray-200 animate-pulse h-4 rounded block mb-2"></span>
              <span className="w-3/4 bg-gray-200 animate-pulse h-4 rounded block"></span>
            </p>
          </div>
        </div>
      )}

      {selectedPlan && (
        <>
          <div className="flex justify-between text-xl">
            <span>
              SeelVpn ({selectedPlan.duration}{" "}
              <span className="capitalize">{selectedPlan.duration_unit}</span>)
            </span>
            <span className="line-through text-gray-400">
              ${selectedPlan.original_price}
            </span>
          </div>
          <div className="flex justify-between  text-xl mb-4">
            {selectedPlan.name} Plan (
            {calculateDiscountPercentage(
              selectedPlan.original_price,
              selectedPlan.discount_price
            )}
            % discount)
            <span className="text-red-600">
              -$
              {Math.round(
                (selectedPlan.original_price - selectedPlan.discount_price) *
                  100
              ) / 100}
            </span>
          </div>
          <div className="w-full h-0.5 relative bg-neutral-300 " />
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Order Total</span>
            <span className="text-green-600">
              ${selectedPlan.discount_price}
            </span>
          </div>
          <div>
            <p className="text-md text-gray-600">
              By clicking <strong>Buy Now</strong>, you accept the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>
              ,{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Auto-renew Policy
              </a>
              , and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </>
      )}
    </div>
  );
}
