"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify"; // optional for notifications
import { CodeSquare } from "lucide-react";
import { useUserCookie } from "../use-cookies";

export default function UpdatePromptModal({ open, onClose }) {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
    const { user, setUserCookie } = useUserCookie();


  const handleFormSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
       ` ${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/apply-promo-code`,
        {
          code: data.promptCode,
        },
        {
          headers: {
            Accept: "application/json",
                          Authorization: `Bearer ${user.access_token}`,

          },
        }
      );
      console.log(response.data);

      if (response.data.status) {
        toast.success("Promo code applied successfully!");
      } else {
        toast.error(response.data.message || "Failed to apply promo code.");
      }

      reset();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl w-96 shadow-2xl">
        <h2 className="text-black text-xl mb-4">Enter Prompt Code</h2>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            {...register("promptCode", { required: true })}
            type="text"
            placeholder="Enter your prompt code"
            className="w-full p-2 mb-4 rounded bg-gray-300 text-black"
          />

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-600 text-white rounded-xl"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-500 text-white rounded-xl"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
