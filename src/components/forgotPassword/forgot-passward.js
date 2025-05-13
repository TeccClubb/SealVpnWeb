"use client";
import React from "react";
import { useForm } from "react-hook-form";

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // handle email submission for password reset
    console.log("Reset link will be sent to:", data.email);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow mb-18">
        <img src="/loginicon.png" alt="Logo" className="w-16 h-16 mb-4" />
        <h1 className="text-xl font-bold mb-4">Forgot Your Password?</h1>
        <p className="text-sm text-gray-500 mb-6 text-center max-w-xs">
          Enter the email address associated with your account and we’ll send you a link to reset your password.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm mx-auto"
        >
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-[70%] mx-auto block px-4 py-2 mb-1 border border-gray-300 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm text-center mb-2">
              {errors.email.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[50%] mx-auto mt-4 block bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-full"
          >
            Send Reset Link
          </button>

          {/* Back to Login */}
          <div className="text-center mt-4 text-sm">
            Remembered your password?{" "}
            <a href="/login" className="text-teal-600 underline">
              Log in
            </a>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPasswordPage;
