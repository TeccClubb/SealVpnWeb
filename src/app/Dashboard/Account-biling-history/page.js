"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import DownloadInvoiceButton from "@/components/downloadInvoiceButton";
import BillingAddressModal from "@/components/billilingAddressModal";
import { useUserCookie } from "@/components/use-cookies";

const BillingHistory = () => {
  const { user } = useUserCookie();
  const [billingAddress, setBillingAddress] = useState(null);
  const [isBillingAddressLoading, setIsBillingAddressLoading] = useState(true);
  const [billingData, setBillingData] = useState([]);
  const [isBillingHistoryLoading, setIsBillingHistoryLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let Api_Url = process.env.NEXT_PUBLIC_REST_API_BASE_URL;

    const fetchBillingAddress = async () => {
      try {
        const res = await axios
          .get(`${Api_Url}/billing-address`, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          })
          .then((res) => res.data);

        if (res.status) {
          setBillingAddress(res.user.billing_address);
        }
      } catch (error) {
      } finally {
        setIsBillingAddressLoading(false);
      }
    };

    const fetchBillingHistory = async () => {
      try {
        const res = await axios
          .get(`${Api_Url}/purchase/history`, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          }).then(res => res.data);

        if (res.status) {
          setBillingData(res.purchases);
        }
      } catch (error) {
      } finally {
        setIsBillingHistoryLoading(false);
      }
    };

    fetchBillingAddress();
    fetchBillingHistory();
  }, []);

  const handleAddressAdded = (newAddress) => {
    setBillingAddress(newAddress);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <main className="md:p-6 w-full">
        <h1 className="text-neutral-600 text-2xl font-bold font-['Montserrat'] mb-2 leading-10">
          Billing History
        </h1>

        {/* Skeleton Loader for Billing History */}
        {isBillingHistoryLoading && (
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="w-full border border-gray-200 rounded-lg overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-100 text-left text-sm text-gray-700">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border-b border-gray-200">Plan</th>
                    <th className="p-3 border-b border-gray-200">Amount Paid</th>
                    <th className="p-3 border-b border-gray-200">Start Date</th>
                    <th className="p-3 border-b border-gray-200">End Date</th>
                    <th className="p-3 border-b border-gray-200">Status</th>
                    <td className="p-3 border-b border-gray-200">Invoice</td>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(2)].map((_, index) => (
                    <tr key={index} className="hover:bg-gray-50 border-b border-gray-50">
                      <td className="p-3 border-b border-gray-200">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      </td>
                      <td className="p-3 border-b border-gray-200">
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </td>
                      <td className="p-3 border-b border-gray-200">
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </td>
                      <td className="p-3 border-b border-gray-200">
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </td>
                      <td className="p-3 border-b border-gray-200">
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      </td>
                      <td className="p-3 border-b border-gray-200">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Billing History Table */}
        {!isBillingHistoryLoading && billingData.length === 0 && (
          <p className="text-sm text-gray-600 mb-6">
            You don’t have any billing history yet.
          </p>
        )}

        {!isBillingHistoryLoading && billingData.length !== 0 && (
          <div className="w-full border border-gray-200  rounded-lg overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-100 text-left text-sm text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border-b border-gray-200">Plan</th>
                  <th className="p-3 border-b border-gray-200">Amount Paid</th>
                  <th className="p-3 border-b border-gray-200">Start Date</th>
                  <th className="p-3 border-b border-gray-200">End Date</th>
                  <th className="p-3 border-b border-gray-200">Status</th>
                  <td className="p-3 border-b border-gray-200 capitalize">
                    Invoice
                  </td>
                </tr>
              </thead>
              <tbody>
                {billingData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 border-b border-gray-50"
                  >
                    <td className="p-3 border-b border-gray-200 ">
                      {item.plan?.name || "-"}
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      ${item.amount_paid}
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      {new Date(item.start_date).toLocaleDateString()}
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      {new Date(item.end_date).toLocaleDateString()}
                    </td>
                    <td className="p-3 border-b border-gray-200 capitalize">
                      {item.status}
                    </td>
                    <td>
                      <DownloadInvoiceButton
                        purchaseId={item.id}
                        userId={user.id}
                        token={user.access_token}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <h2 className="text-neutral-600 text-2xl font-bold font-['Montserrat'] leading-10 mb-2">
          Billing Address
        </h2>

        {/* Skeleton Loader for Billing Address */}
        {isBillingAddressLoading && (
          <div className="animate-pulse bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        )}

        {/* Billing Address Card */}
        {!isBillingAddressLoading && billingAddress && (
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong>Name:</strong> {billingAddress.name}
              </div>
              <div>
                <strong>Address:</strong> {billingAddress.address}
              </div>
              <div>
                <strong>City:</strong> {billingAddress.city}
              </div>
              <div>
                <strong>State:</strong> {billingAddress.state}
              </div>
              <div>
                <strong>Postal Code:</strong> {billingAddress.postal_code}
              </div>
              <div>
                <strong>Created At:</strong>{" "}
                {new Date(billingAddress.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        )}

        {!isBillingAddressLoading && !billingAddress && (
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-4">
              You don’t have a billing address yet.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-block mt-2 px-4 py-2 rounded-full bg-teal-400 text-white text-md hover:bg-teal-500 cursor-pointer"
            >
              Add Billing Address
            </button>
          </div>
        )}
      </main>
      <BillingAddressModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddressAdded={handleAddressAdded}
      />
    </div>
  );
};

export default BillingHistory;
