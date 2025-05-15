"use client";

import React, { useEffect, useState } from "react";
 
import axios from "axios";
import { toast } from "react-toastify";
import DownloadIcon from "./DownloadIcon";

const DownloadInvoiceButton = ({ purchaseId, token }) => {
  const [open, setOpen] = useState(false);
  const [billingAddress, setBillingAddress] = useState();
  const [isInvoiceDownloading, setInvoiceDownloading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User from localStorage:", user);
  }, []);

  const handleDownload = async () => {
    try {
      setInvoiceDownloading(true); // show loader

      let Api_Url = process.env.NEXT_PUBLIC_REST_API_BASE_URL;
      const access_token = localStorage.getItem("access_token");

      // Fetch billing address
      const billingRes = await axios.get(`${Api_Url}/billing-address`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });

      setBillingAddress(billingRes.data.user.billing_address);

      const user = JSON.parse(localStorage.getItem("user"));

      // Download invoice
      const response = await fetch(
        `/api/dawnload-invoice?purchaseId=${purchaseId}&token=${token}&userId=${user.id}`
      );

      if (response.ok) {
        const blob = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "invoice.pdf";
        link.click();
        toast.success("Invoice downloaded successfully");
      } else {
        toast.error("Failed to download invoice");
      }
    } catch (error) {
      toast.error("Failed to download invoice");
      console.error(error);
    } finally {
      setInvoiceDownloading(false); // hide loader
    }
  };

  return (
    <>
    <button
  onClick={handleDownload}
  disabled={isInvoiceDownloading}
  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isInvoiceDownloading ? (
    <div className="h-5 w-5 animate-spin border-2 border-gray-300 border-t-transparent rounded-full" />
  ) : (
    <DownloadIcon className="h-5 w-5 text-gray-600 hover:text-blue-600" />
  )}
</button>

    </>
  );
};

export default DownloadInvoiceButton;
