"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import DownloadInvoiceButton from "@/components/handleDawnloadInvoice";
import DownloadInvoiceButton from "@/components/downloadInvoiceButton";


const BillingHistory = () => {
  const [billingAddress, setbillingAddress] = useState(null);
  const [billingData, setBillingData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      router.push("/login");
      return;
    }
    ////
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
        setbillingAddress(response.data.user.billing_address);
      })
      .catch((error) => {
        console.error("Error fetching billing address:", error.response?.data || error.message);
      });
    // Fetch billing history
    axios.get(`${Api_Url}/purchase/history`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("////////////////")
        console.log(response.data.purchases)
        setBillingData(response.data.purchases);
      })
      .catch((error) => {
        console.error("Error fetching billing history:", error.response?.data || error.message);
      });
  }, []);
  const handleInvoice =()=>{
    axox
  }

  return (
    <div className="flex min-h-screen bg-white">
      <main className="md:p-6 w-full">
        <h1 className="text-neutral-600 text-2xl font-bold font-['Montserrat'] mb-2 leading-10">Billing History</h1>

        {/* Billing History Table */}
        {billingData.length === 0 ? (
          <p className="text-sm text-gray-600 mb-6">You don’t have any billing history yet.</p>
        ) : (
          <div className="w-full border border-gray-200  rounded-lg overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-100 text-left text-sm text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border-b border-gray-200">Plan</th>
                  <th className="p-3 border-b border-gray-200">Amount Paid</th>
                  <th className="p-3 border-b border-gray-200">Start Date</th>
                  <th className="p-3 border-b border-gray-200">End Date</th>
                  <th className="p-3 border-b border-gray-200">Status</th>
                  <td className="p-3 border-b border-gray-200 capitalize">Invoice</td>

                </tr>
              </thead>
              <tbody>
                {billingData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 border-b border-gray-50">
                    <td className="p-3 border-b border-gray-200 ">{item.plan?.name || "-"}</td>
                    <td className="p-3 border-b border-gray-200">${item.amount_paid}</td>
                    <td className="p-3 border-b border-gray-200">{new Date(item.start_date).toLocaleDateString()}</td>
                    <td className="p-3 border-b border-gray-200">{new Date(item.end_date).toLocaleDateString()}</td>
                    <td className="p-3 border-b border-gray-200 capitalize">{item.status}</td>
                    <td>

                     <DownloadInvoiceButton
                      purchaseId={item.id}
                      token={localStorage.getItem("access_token")}
                    />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <h2 className="text-neutral-600 text-2xl font-bold font-['Montserrat'] leading-10 mb-2">Billing Address</h2>

        {/* Billing Address Card */}
        {billingAddress && (
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div><strong>Name:</strong> {billingAddress.name}</div>
              <div><strong>Address:</strong> {billingAddress.address}</div>
              <div><strong>City:</strong> {billingAddress.city}</div>
              <div><strong>State:</strong> {billingAddress.state}</div>
              <div><strong>Postal Code:</strong> {billingAddress.postal_code}</div>
              <div><strong>Created At:</strong> {new Date(billingAddress.created_at).toLocaleDateString()}</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BillingHistory;
