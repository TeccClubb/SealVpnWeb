"use client";

import React, { useState } from "react";
import { useEffect } from "react";

import { notFound, useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const Invoice = () => {
  const searchParams = useSearchParams();
  const purchaseId = searchParams.get("purchaseId");
  const token = searchParams.get("token");
  const userId = searchParams.get("userId");
  if (!purchaseId || !token || !userId) {
    notFound();
  }

  const Api_Url = process.env.NEXT_PUBLIC_REST_API_BASE_URL;

  const [billingAddress, setBillingAddress] = useState();
  const [purchasedPlan, setPurchasedPlan] = useState();
  const [isBillingAddressLoading, setIsBillingAddressLoading] = useState(true);
  const [isPurchasedPlanLoading, setIsPurchasedPlanLoading] = useState(true);

  useEffect(() => {
    const fetchBillingAddress = async () => {
      try {
        const response = await axios
          .get(`${Api_Url}/billing-address`, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => res.data);

        if (response.status) {
          setBillingAddress(response.user.billing_address);
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to Load Billing Address";
        toast.error(errorMessage);
      } finally {
        setIsPurchasedPlanLoading(false);
      }
    };

    fetchBillingAddress();
  }, []);

  useEffect(() => {
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
          setPurchasedPlan(response.purchase);
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to Load Active Plan";
        toast.error(errorMessage);
      } finally {
        setIsPurchasedPlanLoading(false);
      }
    };

    fetchPurchasedPlan();
  }, []);

  return (
    <div className="w-[49.625rem] text-black h-[70.1875rem]  bg-[#ecedee]  p-6 space-y-8 relative">
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
                <tbody className="prose-tr:border-b-1 text-center last:prose-tr:border-b-0 prose-tr:border-gray-300">
                  {isPurchasedPlanLoading && (
                    <tr>
                      <td colSpan={2} className="py-6 text-center">
                        <div className="h-6 w-6 mx-auto animate-spin rounded-full border-2 border-green-500 border-t-transparent" />
                      </td>
                    </tr>
                  )}

                  {!isPurchasedPlanLoading && purchasedPlan && (
                    <tr className="text-center">
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
                  <tr className="text-center">
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
                <img src="/loginicon.png" alt="Logo" className="w-10 h-auto" />
                <span className="text-[#1a1a78] text-2xl font-semibold">
                  SeelVpn
                </span>
              </div>
              <p className="text-sm text-black font-normal">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
              <p className="text-sm font-normal">tecclubbx@gmail.com</p>
            </div>
          </div>

          <div className="border-t border-gray-300 my-4" />

          <h4 className="text-[#1a1a78] text-2xl font-semibold">Details:</h4>

          <div className="w-full max-w-5xl mx-auto border border-gray-300 rounded-lg pb-4 overflow-auto">
            <table className="w-full text-sm prose-th:font-semibold prose-th:p-4 prose-th:text-start prose-td:p-4">
              <thead className="bg-[#1a1a78] text-white">
                <tr className="border-b-1 text-center border-gray-300">
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
                    <td colSpan={2} className="py-6 text-center">
                      <div className="h-6 w-6 mx-auto animate-spin rounded-full border-2 border-green-500 border-t-transparent" />
                    </td>
                  </tr>
                )}

                {!isPurchasedPlanLoading && purchasedPlan && (
                  <tr className="text-center">
                    <th>{purchasedPlan.plan.name}</th>
                    <td>{purchasedPlan.plan.duration}</td>
                    <td>${purchasedPlan.amount_paid}</td>
                    <td>
                      {new Date(purchasedPlan.start_date).toLocaleDateString()}
                    </td>
                    <td>
                      {new Date(purchasedPlan.end_date).toLocaleDateString()}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h6 className="text-[#1a1a78] text-sm font-semibold">
                  Sale by:
                </h6>
                <span>SeelVpn</span>
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
