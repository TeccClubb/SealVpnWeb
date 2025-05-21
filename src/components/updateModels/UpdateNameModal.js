"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useUserCookie } from "../use-cookies";

export default function UpdateNameModal({ open, onClose }) {
  const { user, setUserCookie } = useUserCookie();
  const { register, handleSubmit, reset } = useForm({
    values: { name: user?.name || "" },
  });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError("");

    try {
      const response = await axios.post(
        "https://seelvpn.tecclubb.com/api/user/update",
        {
          name: data.name,
          email: user.email, // replace with dynamic value if needed
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      ).then((res) => res.data);


      if (response.status) {
        setUserCookie({ ...user, name: response.user.name });
        toast.success("Name update successful");
        reset();
        onClose();
      }

    } catch (error) {
      const message =
        error.response?.data?.message ||
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
        <h2 className="text-black text-xl mb-4">Update Name</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="New Name"
            className="w-full p-2 mb-4 rounded bg-gray-300 text-black"
          />

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-600 text-white rounded"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-500 text-white rounded"
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
