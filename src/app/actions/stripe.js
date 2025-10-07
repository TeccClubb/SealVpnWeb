"use server";

import { auth } from "@/auth";
import { headers } from "next/headers";
import { cookies as nextCookies } from "next/headers";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function fetchClientSecret(priceId) {
  const origin = (await headers()).get("origin");

  const userSession = await auth();

  // if (userSession) {
  //   const customer = await stripe.customers.list({
  //     email: userSession.user.email,
  //   });

  //   if (customer.data.length < 1) {
  //     await stripe.customers.create({
  //       name: userSession.user.name,
  //       email: userSession.user.email,
  //     });
  //   }
  // }

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "required",
    ui_mode: "embedded",
    customer_creation:"always",
    customer_email:userSession.user.email,
    line_items: [
      {
        // Provide the exact Price ID (for example, price_1234) of
        // the product you want to sell
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    allow_promotion_codes: true,
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    metadata: {
      price_id: priceId,
    },
  });

  return session.client_secret;
}
