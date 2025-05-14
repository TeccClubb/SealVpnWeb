"use client";
import React, { useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import axios from "axios";

import { addToast } from "@heroui/react";

import {
  AlertCircle as ErrorIcon,
  CircleAlert as CircleExclamation,
  ThumbsUp,
  ShieldCheck as VerifiedIcon,
} from "lucide-react";

const EmailVerificationPage = () => {
  const searchParams = useSearchParams();
  const expires = searchParams.get("expires");
  const hash = searchParams.get("hash");
  const id = searchParams.get("id");
  const signature = searchParams.get("signature");

  if (!expires || !hash || !id || !signature) {
    notFound();
  }

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const verification = async () => {
      try {
        setLoading(true);
        const res = await axios
          .get(`/api/email/verify/${id}/${hash}?expires=${expires}&signature=${signature}`, {
            params: {
              expires,
              signature,
            },
            headers: {
              Accept: "application/json",
            },
          })
          .then((res) => res.data);

        if (res.status) {
          addToast({
            color: "success",
            description: res.message,
          });
          setSuccessMessage(res.message);
        } else {
          addToast({
            color: "danger",
            description: res.message,
          });
          setErrorMessage(res.message);
        }
      } catch (error) {
        const message =
          error?.response?.data?.message || error?.message || "An unknown error occurred";
        addToast({
          color: "danger",
          description: message,
        });
        setErrorMessage(message);
      } finally {
        setLoading(false);
      }
    };

    verification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md text-center space-y-6 bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        {isLoading && (
          <div className="flex flex-col items-center gap-6">
            {isLoading && (
              <div className="flex flex-col items-center justify-center gap-4">
                {/* Spinner Circle */}
                <div className="w-16 h-16 border-4 border-teal-400 border-t-transparent rounded-full animate-spin" />

                {/* Loading Text */}
                <p className="text-lg font-semibold text-gray-700">Verifying your email...</p>
              </div>
            )}

            <p className="text-gray-500">Please wait while we verify your request.</p>
          </div>
        )}

        {errorMessage && (
          <div className="space-y-4">
            <ErrorIcon className="size-16 mx-auto text-red-500" />
            <h3 className="text-2xl font-semibold text-red-600">Verification Failed</h3>
            <div className="flex items-center gap-3 text-red-600 bg-red-50 border border-red-200 p-4 rounded-lg">
              <CircleExclamation className="text-red-500" />
              <span className="text-sm text-left">{errorMessage}</span>
            </div>
          </div>
        )}

        {successMessage && (
          <div className="space-y-4">
            <VerifiedIcon className="size-16 mx-auto text-green-500" />
            <h3 className="text-2xl font-semibold text-green-600">Email Verified</h3>
            <div className="flex items-center gap-3 text-green-600 bg-green-50 border border-green-200 p-4 rounded-lg">
              <ThumbsUp className="text-green-500" />
              <span className="text-sm text-left">{successMessage}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailVerificationPage;
