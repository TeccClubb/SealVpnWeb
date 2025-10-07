import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { fetchClientSecret } from "@/app/actions/stripe";
import { useState, useEffect } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Checkout({priceId}) {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when priceId changes
  useEffect(() => {
    setIsLoading(true);
    // Small delay to show loading state
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [priceId]);

  return (
    <div id="checkout" className="w-full">
      {isLoading && (
        <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Updating checkout form...</p>
          </div>
        </div>
      )}
      
      <div className={isLoading ? "hidden" : "block"}>
        <EmbeddedCheckoutProvider
          key={priceId} // This forces re-initialization when priceId changes
          stripe={stripePromise}
          options={{ fetchClientSecret: () => fetchClientSecret(priceId) }}
        >
          <EmbeddedCheckout className="w-full" />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  )
}

