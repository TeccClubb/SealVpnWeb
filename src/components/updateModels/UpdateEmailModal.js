"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useUserCookie } from "../use-cookies";

export default function UpdateEmailModal({ open, onClose }) {
  const { user, setUserCookie } = useUserCookie();
  const { register, handleSubmit, reset } = useForm({
    values: { email: user?.email || "" },
  });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError("");

    try {
      const response = await axios
        .post(
          process.env.NEXT_PUBLIC_REST_API_BASE_URL+"/user/update",
          {
            name: user.name, // Replace with dynamic value: data.name if needed
            email: data.email,
          },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((res) => res.data);

      if (response.status) {
        setUserCookie({ ...user, email: response.user.email });
        toast.success("Email update successful");
        reset();
        onClose();
      }
    } catch (error) {
      const message =
        error.response?.data?.message || error.message ||
        "Something went wrong. Please try again.";
      setApiError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl w-96 shadow-2xl">
        <h2 className="text-black text-xl mb-4">Update Email</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="New Email"
            className="w-full p-2 mb-4 rounded bg-gray-300 text-black"
          />

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 cursor-pointer px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 cursor-pointer py-2 bg-teal-400 hover:bg-teal-500 text-white rounded"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>

          {apiError && (
            <p className="text-red-600 text-sm mt-4 text-center">{apiError}</p>
          )}
        </form>
      </div>
    </div>
  );
}
