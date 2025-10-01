import React from "react";
import axios, { AxiosError } from "axios";

export const metadata = {
  title: "Invoice",
};

const Invoice = async ({ searchParams }) => {
  const { purchaseId, token, userId } = await searchParams;

  if (!purchaseId || !token || !userId) {
    return <div>No data provided</div>;
  }

  try {
    const Api_Url = process.env.NEXT_PUBLIC_REST_API_BASE_URL;

    const billingAddress = await axios
      .get(`${Api_Url}/billing-address`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data.user.billing_address);

    const purchasedPlan = await axios
      .get(`${Api_Url}/subscription/view/${purchaseId}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data.subscription);

    return (
      <div className="w-[49.625rem] text-black h-[70.1875rem]  bg-[#ecedee]  p-6 space-y-8 relative">
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
                <tr className="text-center">
                  <td>{purchasedPlan.id}</td>
                  <td>
                    {new Date(purchasedPlan.starts_at).toLocaleDateString()}
                  </td>
                </tr>
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
                  <td className="w-full">{billingAddress?.name}</td>
                </tr>
                <tr>
                  <td className="w-fit">Address:</td>
                  <td className="w-full">
                    {billingAddress?.address}, {billingAddress?.state},{" "}
                    {billingAddress?.city}
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
              <tr className="text-center">
                <th>{purchasedPlan.plan?.name}</th>
                <td>
                  {purchasedPlan.plan?.trial_period
                    ? `${purchasedPlan.plan?.trial_period} ${purchasedPlan.plan?.trial_interval}`
                    : `${purchasedPlan.plan?.invoice_period} ${purchasedPlan.plan?.invoice_interval}`}
                </td>
                <td>${purchasedPlan.amount_paid}</td>
                <td>
                  {new Date(purchasedPlan.starts_at).toLocaleDateString()}
                </td>
                <td>{new Date(purchasedPlan.ends_at).toLocaleDateString()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h6 className="text-[#1a1a78] text-sm font-semibold">Sale by:</h6>
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
      </div>
    );
  } catch (error) {
    const errorMessage =
      error instanceof AxiosError
        ? error.response
          ? error.response.data.message
          : error.message
        : error instanceof Error
        ? error.message
        : "Failed to load data";
    return <div className="text-red-500">{errorMessage}</div>;
  }
};

export default Invoice;
