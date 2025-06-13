"use client";

import React, { useState } from "react";
 
import axios from "axios";
import { toast } from "react-toastify";
import DownloadIcon from "./DownloadIcon";

const DownloadInvoiceButton = ({ purchaseId, userId, token }) => {
  const [isInvoiceDownloading, setInvoiceDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setInvoiceDownloading(true);

      // Download invoice
      const response = await fetch(
        `/api/dawnload-invoice?purchaseId=${purchaseId}&token=${token}&userId=${userId}`
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
    } finally {
      setInvoiceDownloading(false);
    }
  };

  return (
    <>
    <button
  onClick={handleDownload}
  disabled={isInvoiceDownloading}
  className="p-2 rounded-full hover:bg-gray-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
