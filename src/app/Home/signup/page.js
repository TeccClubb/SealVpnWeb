"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [serverMessage, setServerMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://fabvpn.tecclubb.com/api/signup",
        {
          name: data.username,
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log("Response:", response.data); 

      if (response.status === 200 || response.status === 201) {
        setServerMessage("✅ Sign up successful!");
        reset(); // Clear form fields
      } else {
        setServerMessage("❌ Signup failed.");
      }
    } catch (error) {
      const message =
        error?.response?.data?.message || "Something went wrong.";
      setServerMessage(`❌ ${message}`);
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      <main className="flex flex-col items-center justify-center flex-grow mb-10">
        <img src="/loginicon.png" alt="Logo" className="w-16 h-16 mb-4" />
        <h1 className="text-xl font-bold mb-6">Sign up to SeelVpn</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto space-y-2">
          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
              className="w-[70%] mx-auto block px-4 py-2 border border-gray-300 rounded-md"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1 text-center">{errors.username.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
              className="w-[70%] mx-auto block px-4 py-2 border border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 text-center">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="w-[70%] mx-auto block px-4 py-2 border border-gray-300 rounded-md"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 text-center">{errors.password.message}</p>
            )}
          </div>

          {/* Server message */}
          {serverMessage && (
            <p className="text-center text-sm mt-2 text-green-500">{serverMessage}</p>
          )}

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-[70%] mx-auto block bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-full mt-2"
          >
            Sign Up
          </button>

          {/* Already have an account */}
          <div className="text-center mt-2 text-sm">
            Already have a SeelVpn account?{" "}
            <a href="#" className="text-teal-600 underline">
              Log in
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}
