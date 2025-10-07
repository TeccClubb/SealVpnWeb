"use server";

import { auth } from "@/auth";
import { headers } from "next/headers";
import { cookies as nextCookies } from "next/headers";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function fetchClientSecret(priceId) {
  const origin = (await headers()).get("origin");

  const userSession = await auth();

  let customerId = null;

  if (userSession) {
    // Check if customer already exists
    const existingCustomers = await stripe.customers.list({
      email: userSession.user.email,
      limit: 1,
    });

    if (existingCustomers.data.length > 0) {
      // Use existing customer
      customerId = existingCustomers.data[0].id;
    } else {
      // Create new customer
      const newCustomer = await stripe.customers.create({
        name: userSession.user.name,
        email: userSession.user.email,
      });
      customerId = newCustomer.id;
    }
  }

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "required",
    ui_mode: "embedded",
    customer: customerId,
    line_items: [
      {
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
    saved_payment_method_options: {
      payment_method_save: 'enabled',
      payment_method_remove: 'enabled',
    },
  });

  return session.client_secret;
}
