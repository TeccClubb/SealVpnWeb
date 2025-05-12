"use client";

import React, { useState } from "react";
import { CircularProgress, Divider, Skeleton } from "@mui/material";
import { useEffect } from "react";
// import { useBillingAddress } from "@/hooks/use-billing-address";
// import { useBillingAddress } from "@/hooks/useBillingHistory";
// import { usePurchasedPlan } from "@/hooks/usePlans";
// import { usePurchasedPlan } from "@/hooks/usePlane";
// import { getFormattedDate } from "@/lib/utils";
// import { getFormattedDate } from "@/hooks/usePlane";
import { notFound, useSearchParams } from "next/navigation";
import axios from "axios";

const Invoice = () => {
  const searchParams = useSearchParams();
  const purchaseId = searchParams.get("purchaseId");
  // const purchaseId = 11;
  const token = searchParams.get("token");
  const userId = searchParams.get("userId");
  //   if (!purchaseId || !token || !userId) {
  //     notFound();
  //   }

  //   const { isBillingAddressLoading, billingAddress } = useBillingAddress(token);
  //   const { isPurchasedPlanLoading, purchasedPlan } = usePurchasedPlan(
  //     +purchaseId,
  //     token
  //   );

  // const { isBillingAddressLoading, billingAddress } = useBillingAddress();
  // const { isPurchasedPlanLoading, purchasedPlan } = usePurchasedPlan(
  //   +purchaseId
  // );
  const [billingAddress, setBillingAddress] = useState();
  const [purchasedPlan, setPurchasedPlan] = useState();
  const [isBillingAddressLoading, setIsBillingAddressLoading] = useState(false);
  const [isPurchasedPlanLoading, setisPurchasedPlanLoading] = useState(false);


  // const [purchasedPlan,set]


  //   if (!isPurchasedPlanLoading && !purchasedPlan) {
  //     notFound();
  //   }
  useEffect(() => {
    // const token = localStorage.getItem("access_token");

    // if (!token) {
    //   router.push("/login");
    //   return;
    // }
    let Api_Url = process.env.NEXT_PUBLIC_REST_API_BASE_URL;
    //fatch billing address
    axios.get(`${Api_Url}/billing-address`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data)
        console.log(response.data.user.billing_address);
        setBillingAddress(response.data.user.billing_address);
      })
      .catch((error) => {
        console.error("Error fetching billing address:", error.response?.data || error.message);
      });
    // Fetch billing history
    const fetchPurchasedPlan = async () => {
      try {
        const response = await axios
          .get(`${Api_Url}/purchase/${purchaseId}`, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => res.data);
        if (response.status) {
          console.log(response.purchase);
          setPurchasedPlan(response.purchase);
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to Load Active Plan";
        notify.show(errorMessage, {
          severity: "error",
          autoHideDuration: 3000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedPlan();


  }, []);




  return (
    <div className="w-[49.625rem] text-black h-[70.1875rem]  bg-[#ecedee]  p-6 space-y-8 relative">
      {/* {isBillingAddressLoading && (
        <div className="space-y-4">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      )} */}

      {!isBillingAddressLoading && !billingAddress && (
        <>No fetch data from server</>
      )}

      {!isBillingAddressLoading && billingAddress && (
        <>
          <div className="flex justify-between items-start">
            <div className="space-y-3 w-full max-w-xs">
              <h4 className="text-[#1a1a78] text-2xl font-semibold">Invoice</h4>

              <table className="w-full text-sm prose-th:font-semibold prose-td:text-center">
                <thead className="bg-[#1a1a78] text-white">
                  <tr className="border-b-1 border-gray-300">
                    <th>Invoice #</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody className="prose-tr:border-b-1 last:prose-tr:border-b-0 prose-tr:border-gray-300">
                  {isPurchasedPlanLoading && (
                    <tr>
                      <td align="center" colSpan={2}>
                        <CircularProgress color="success" />
                      </td>
                    </tr>
                  )}

                  {!isPurchasedPlanLoading && purchasedPlan && (
                    <tr>
                      <td>{purchasedPlan.id}</td>
                      <td>
                        {new Date(
                          purchasedPlan.start_date
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <table className="w-full text-sm prose-th:font-semibold prose-td:text-center">
                <thead className="bg-[#1a1a78] text-white">
                  <tr className="border-b-1 border-gray-300">
                    <th>Customer Id</th>
                    <th>Terms</th>
                  </tr>
                </thead>
                <tbody className="prose-tr:border-b-1 last:prose-tr:border-b-0 prose-tr:border-gray-300">
                  <tr>
                    <td>{userId}</td>
                    <td>Subscription</td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full text-sm prose-th:font-semibold">
                <thead className="bg-[#1a1a78] text-white">
                  <tr className="border-b-1 border-gray-300">
                    <th colSpan={2}>Bill To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-fit">Name:</td>
                    <td className="w-full">{billingAddress.name}</td>
                  </tr>
                  <tr>
                    <td className="w-fit">Address:</td>
                    <td className="w-full">
                      {billingAddress.address}, {billingAddress.state},{" "}
                      {billingAddress.city}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-3 text-black max-w-64 w-full">
              <div className="flex items-center gap-x-2">
                <img
                  src="/loginicon.png"
                  alt="Logo"
                  className="w-10 h-auto"
                />
                <span className="text-[#1a1a78] text-2xl font-semibold">
                  GShieldVPN
                </span>
              </div>
              <p className="text-sm text-black font-normal">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
              <p className="text-sm font-normal">tecclubbx@gmail.com</p>
            </div>
          </div>

          <Divider />

          <h4 className="text-[#1a1a78] text-2xl font-semibold">Details:</h4>

          <div className="w-full max-w-5xl mx-auto border border-gray-300 rounded-lg pb-4 overflow-auto">
            <table className="w-full text-sm prose-th:font-semibold prose-th:p-4 prose-th:text-start prose-td:p-4">
              <thead className="bg-[#1a1a78] text-white">
                <tr className="border-b-1 border-gray-300">
                  <th>Plan Name</th>
                  <th>Duration</th>
                  <th>Amount Paid</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody className="prose-tr:border-b-1 last:prose-tr:border-b-0 prose-tr:border-gray-300">
                {isPurchasedPlanLoading && (
                  <tr>
                    <td align="center" colSpan={5}>
                      <CircularProgress color="success" />
                    </td>
                  </tr>
                )}

                {!isPurchasedPlanLoading && purchasedPlan && (
                  <tr>
                    <th>{purchasedPlan.plan.name}</th>
                    <td>{purchasedPlan.plan.duration}</td>
                    <td>${purchasedPlan.amount_paid}</td>
                    <td>{new Date(purchasedPlan.start_date).toLocaleDateString()}</td>
                    <td>{new Date(purchasedPlan.end_date).toLocaleDateString()}</td>

                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h6 className="text-[#1a1a78] text-sm font-semibold">Sale by:</h6>
                <span>GShieldVPN</span>
              </div>
              <span>Thanks for your business</span>
            </div>

            <table className="min-w-56 text-end text-sm prose-th:font-semibold prose-th:p-1 prose-th:text-start prose-td:p-1">
              <tbody>
                <tr>
                  <th>Sub Total:</th>
                  <td>${purchasedPlan?.amount_paid}</td>
                </tr>
                <tr>
                  <th>Discount:</th>
                  <td>$0.00</td>
                </tr>
                <tr>
                  <th>Tax:</th>
                  <td>$0.00</td>
                </tr>
              </tbody>
              <tfoot className="border-t-1 border-gray-300">
                <tr>
                  <th>Total:</th>
                  <td>${purchasedPlan?.amount_paid}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-green-600 text-sm font-semibold text-center absolute right-0 left-0 bottom-4">
            Thank you for your purchase!
          </p>
        </>
      )}
    </div>
  );
};

export default Invoice;
