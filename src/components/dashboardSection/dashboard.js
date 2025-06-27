"use client";

import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useUserCookie } from "../use-cookies";

const DashboardSection = ({ title, heading, children }) => {
  const { user } = useUserCookie();
  const [isLoading, setLoading] = useState(false);

  const handleResendEmail = async () => {
    setLoading(true);
    try {
      const res = await axios
        .post(
          `${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/email/resend-verification`,
          { email: user.email },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((res) => res.data);

      if (res.status) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response.data.errors[0]
          : error instanceof Error
          ? error.message
          : "An unknown error occurred";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-y-6 lg:px-8 px-6 pb-20 lg:pb-14">
      {user && !user.isVerified && (
        <div className="self-center text-lg font-semibold flex items-center gap-2 border border-red-500 text-red-500 bg-red-100 px-5 py-3 rounded-md">
          User not verified
          <button
            onClick={handleResendEmail}
            disabled={isLoading}
            className="mx-auto cursor-pointer bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-full transition duration-200 disabled:opacity-60"
          >
            {isLoading ? "Sending..." : "Resend Email"}
          </button>
        </div>
      )}

      {title && (
        <span className="text-accent sm:text-xl text-lg font-bold text-neutral-600">
          {title}
        </span>
      )}

      {heading && (
        <h2 className="sm:text-3xl text-2xl font-bold text-neutral-600">
          {heading}
        </h2>
      )}
      {children}
    </section>
  );
};

export default DashboardSection;
