"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const BillingHistory = () => {
  const [billingData, setBillingData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    // if (!token) {
    //   router.push("/login");
    //   return;
    // }

    axios
      .get("https://rockyvpn.tecclubb.com/api/billing-address", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Billing history:", response.data);
        setBillingData(response.data.user.billing_address); // adjust if your actual response shape is different
      })
      .catch((error) => {
        console.error("Error fetching billing history:", error.response?.data || error.message);
      });
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      <main className="md:p-6 w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Billing History</h1>

        {!billingData ? (
          <p className="text-sm text-gray-600">You don’t have any billing history yet.</p>
        ) : (
          <div className="w-full overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-left text-sm text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border-b">Address</th>
                <th className="p-3 border-b">City</th>
                <th className="p-3 border-b">State</th>
                <th className="p-3 border-b">Postal Code</th>
                <th className="p-3 border-b">Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border-b">{billingData.address}</td>
                <td className="p-3 border-b">{billingData.city}</td>
                <td className="p-3 border-b">{billingData.state}</td>
                <td className="p-3 border-b">{billingData.postal_code}</td>
                <td className="p-3 border-b">{new Date(billingData.created_at).toLocaleDateString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        )}
      </main>
    </div>
  );
};

export default BillingHistory;
