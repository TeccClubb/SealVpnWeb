import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form"; // Import react-hook-form
import { toast } from "react-toastify";
import axios from "axios";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function PaymentForm({ billingAddress, amount, planId, seletedPlane }) {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [user, setUser] = useState();


  const stripe = useStripe();
  const elements = useElements();
  //     useEffect(() => {
  //     if (errorMessage) {
  //       toast.error("payment failed")
  //     }
  //   }, [errorMessage]);

  // Initialize React Hook Form
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    setUser(user)
    console.log("/////////////////////////////")
    console.log(billingAddress)
    if (billingAddress) {
      // Set default values for the form using react-hook-form's `setValue`
      // setValue("name", billingAddress.data.user.billing_address.name || '');
      // setValue("address", billingAddress.data.user.billing_address.address || '');
      // setValue("city", billingAddress.data.user.billing_address.city || '');
      // setValue("state", billingAddress.data.user.billing_address.state || '');
      // setValue("country", billingAddress.data.user.billing_address.country || '');
      // setValue("postal_code", billingAddress.data.user.billing_address.postal_code || '');

    }
  }, [billingAddress, setValue]);

  // Handle form submission
  const onSubmit = async (values) => {
    console.log(",,,,,,,,,,,,,,,,,,,,,,,")
    console.log(values)
    if (!stripe || !elements) {
      console.log("//////////////////////////")
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
      console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
      setLoading(true);
      setErrorMessage(undefined);

      const res = await axios
        .post("/api/create-payment-intent", {
          amount,
        })
        .then((res) => res.data);
      console.log(".............................")
      console.log(res)

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

  const calculateDiscount = (originalPrice, discountedPrice) => {
    if (!originalPrice || !discountedPrice) return 0;
    const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return Math.round(discount); // Rounds to nearest whole number
  };
  const getDiscountAmount = (originalPrice, discountPrice) => {
  if (!originalPrice || !discountPrice) return "0.00";
  const discount = originalPrice - discountPrice;
  return discount.toFixed(2);
};



  return (
    <div>
      <h1>Payment Details</h1>
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
        {errors.address && <p className="text-red-600">{errors.address.message}</p>}
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
            {...register("postal_code", { required: "postal code is required" })}
            placeholder="Postal Code"
            className="w-full bg-black/5 border rounded p-3"
          />
          {errors.state && <p className="text-red-600">{errors.postal_code.message}</p>}
        </div>


        {/* Country Select */}

        {/* Stripe Payment Element */}
        <PaymentElement />
        {/* Pricing summary */}
        <div className="text-sm text-gray-600 mb-5">
          Subscription renews automatically. Enter promo SEELVPN10 to save an extra 10% on your first year.
        </div>
        <div className="flex justify-between text-xl pb-4">
          <span>{`SeelVpn  (${seletedPlane.duration_unit})`}</span>
          <span className="line-through text-gray-400">{seletedPlane.original_price}</span>
        </div>
        <div className="flex justify-between  text-xl mb-4">
          <span>{`${seletedPlane.duration_unit} Plan (${calculateDiscount(seletedPlane.original_price, seletedPlane.discount_price)}% discount)`}</span>

          <span className="text-red-600">$39.99</span>
        </div>
        <div className="w-[540px] h-0.5 relative bg-neutral-300 " />
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total Order</span>
          <span className="text-red-600">
           ${getDiscountAmount(seletedPlane.original_price, seletedPlane.discount_price)}
          </span>

        </div>
        <div>
          <p className="text-md text-gray-600">
            By clicking <strong>Buy Now</strong>, you accept the{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>,{' '}
            <a href="#" className="text-blue-600 hover:underline">Auto-renew Policy</a>, and{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </p>
        </div>

        {/* Pay Button */}
        <button
          type="submit"
          disabled={!stripe || !elements || isLoading}
          className={`w-full bg-[#4DB8AC] rounded-full text-white py-3 mt-auto ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isLoading ? "Processing..." : "Pay"}
        </button>

        {/* Display error message */}
        {errorMessage && (
          <div className="mt-2 text-red-600">
            <p>{errorMessage}</p>
          </div>
        )}

      </form>
    </div>
  );
}

export default function CheckOutForm({ billingAddress, amount, planId, seletedPlane }) {
  console.log("Checkout amount:", amount); // should log something like 3999
  console.log("seleted plane:", seletedPlane); // should log something like 3999

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
    <div>
      <Elements stripe={stripePromise} options={options}>
        <PaymentForm billingAddress={billingAddress} amount={amount} planId={planId} seletedPlane={seletedPlane} />
      </Elements>
    </div>
  );
}
