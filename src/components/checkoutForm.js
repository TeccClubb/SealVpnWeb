import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { fetchClientSecret } from "@/app/actions/stripe";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Checkout({priceId}) {
  return (
    <div id="checkout" className="w-full">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret: () => fetchClientSecret(priceId) }}
      >
        <EmbeddedCheckout className="w-full" />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

