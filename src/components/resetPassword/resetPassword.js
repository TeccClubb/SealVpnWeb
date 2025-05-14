
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { addToast } from "@heroui/react";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/reset-password`,
        {
          token,
          email,
          password: data.password,
          password_confirmation: data.confirmPassword,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
       toast.success("✅ Password reset successful!");


      } else {
        toast.error("❌ Password reset failed.");
        
      }
    } catch (error) {
      const message =
        error?.response?.data?.message || "Something went wrong.";
      toast.error(`❌ ${message}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      <main className="flex flex-col items-center justify-center flex-grow mb-18">
        <img src="/loginicon.png" alt="Logo" className="w-16 h-16 mb-4" />
        <h1 className="text-xl font-bold mb-4">Reset Your Password</h1>
        <p className="text-sm text-gray-500 mb-6 text-center max-w-xs">
          Enter your new password and confirm to reset your account access.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm mx-auto"
        >
          {/* New Password */}
          <input
            type="password"
            placeholder="New Password"
            {...register("password", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-[70%] mx-auto block px-4 py-2 mb-1 border border-gray-300 rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm text-center mb-2">
              {errors.password.message}
            </p>
          )}

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className="w-[70%] mx-auto block mt-4 px-4 py-2 mb-1 border border-gray-300 rounded-md"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm text-center mb-3">
              {errors.confirmPassword.message}
            </p>
          )}

          {/* Reset Button */}
          <button
            type="submit"
            className="w-[50%] mx-auto mt-4 block bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-full"
          >
            Reset Password
          </button>

          {/* Back to Login */}
          <div className="text-center mt-4 text-sm">
            Back to{" "}
            <a href="/login" className="text-teal-600 underline">
              Log in
            </a>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ResetPasswordPage;
