"use server";

import { auth } from "@/auth";
import { headers } from "next/headers";
import { cookies as nextCookies } from "next/headers";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Function to validate promo code
export async function validatePromoCode(code) {
  try {
    const userSession = await auth();
    
    if (!userSession?.user?.accessToken) {
      return { valid: false, message: 'Authentication required' };
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/validate-promo-code`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userSession.user.accessToken}`,
      },
      body: JSON.stringify({ code }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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

export async function fetchClientSecret(priceId, couponId = null) {
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

  // Create checkout session configuration
  const sessionConfig = {
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
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    metadata: {
      price_id: priceId,
    },
    saved_payment_method_options: {
      payment_method_save: 'enabled',
      payment_method_remove: 'enabled',
    },
  };

  // Add coupon if provided
  if (couponId) {
    sessionConfig.discounts = [
      {
        coupon: couponId,
      },
    ];
    // Add coupon to metadata for webhook tracking
    sessionConfig.metadata.applied_coupon = couponId;
  }

  // Create Checkout Sessions
  const session = await stripe.checkout.sessions.create(sessionConfig);

  return session.client_secret;
}
