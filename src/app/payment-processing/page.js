"use client";

import React, { Suspense, useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
// import { useUserCookie } from "@/hooks/use-cookies";
// import { ADD_PURCHASE_PLAN_ROUTE } from "@/lib/constants";
import axios, { AxiosError } from "axios";
// import { HOME_PAGE_PATH } from "@/lib/pathnames";
// import { ErrorIcon, VerifiedIcon } from "@/icons";
import ErrorIcon from "@/components/icon/ErrorIcon";
import VerifiedIcon from "@/components/icon/VerifiedIcon";
 
// import { useDispatch } from "react-redux";
// import { setActivePlan } from "@/store/plans.slice";
// import { useNotifications } from "@toolpad/core/useNotifications";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { toast } from "react-toastify";

const PaymentProcessingPage = () => {
//   const dispatch = useDispatch();
//   const notify = useNotifications();
  const searchParams = useSearchParams();
//   const { user } = useUserCookie();
const [user,setUser]=useState();
  const [isPaymentSuccessful, setPaymentStatus] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const myuser=JSON.parse(localStorage.getItem("user"))
    setUser(myuser);
    const verifyPayment = async (planId, paymentIntent) => {
      try {
        const res = await axios
          .post("/api/verify-payment", { paymentIntent })
          .then((res) => res.data);

        if (res.paymentStatus) {
          setPaymentStatus(true);
    let Api_Url = process.env.NEXT_PUBLIC_REST_API_BASE_URL;

    console.log(" payment intedt///////////////////////////dddddddddddddd")
    console.log(res)

    const token= localStorage.getItem("access_token")

          const response = await axios
            .post(
              `${Api_Url}/purchase/add`,
              {
                plan_id: planId,
                payment_intent: paymentIntent,
              },
              {
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${ token}`,
                },
              }
            )
            .then((response) => response.data);
            console.log("00000000000000000000000")
            console.log(response)

          if (response.status) {
            setSuccessMessage(res.message);
            // dispatch(setActivePlan(res.purchase));
          }
        } else {
          setPaymentStatus(false);
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "An error occurred";
            toast.error(error.message)
        // notify.show(errorMessage, {
        //   severity: "error",
        //   autoHideDuration: 3000,
        // });
      } finally {
        setLoading(false);
      }
    };

    const paymentIntent = searchParams.get("payment_intent");
    const planId = searchParams.get("planId");
    if (!paymentIntent) {
      notFound();
    } else {
      verifyPayment(+planId, paymentIntent);
    }
  }, []);

  return (
    <section className="bg-white w-full flex flex-col items-center justify-center pt-4">
      <div className="min-h-[calc(100vh-4rem)] w-full max-w-7xl flex flex-col flex-wrap items-center justify-center gap-y-4 p-4">
        {isLoading && (
          <div className="flex flex-col items-center gap-y-6">
            <CircularProgress size={128} color="success" />
            <Typography variant="h4" component="h4" className="text-black">
              Processing Payment...
            </Typography>
          </div>
        )}

        {!isLoading && !isPaymentSuccessful && (
          <>
            <ErrorIcon className="size-48 text-red-500" />
            <h1 className="text-3xl font-semibold text-gray-900">
              Payment Failed
            </h1>

            <Alert severity="error" className="max-w-3xl flex-grow-0">
              Unfortunately, we were unable to process your payment. Please try
              again or contact support if the issue persists.
            </Alert>
          </>
        )}

        {!isLoading && isPaymentSuccessful && (
          <>
            <VerifiedIcon className="size-48 text-green-500" />
            <h1 className="text-3xl font-semibold text-gray-900">
              Payment Successful
            </h1>
            <Alert severity="success" className="max-w-3xl flex-grow-0">
              {successMessage}
            </Alert>
            <Button
              component={Link}
              href={"/"}
              color="success"
              variant="contained"
            >
              Back to Home
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

const Page = () => (
  <Suspense>
    <PaymentProcessingPage />
  </Suspense>
);

export default Page;
