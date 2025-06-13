"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import { useUserCookie } from "@/components/use-cookies";

export default function LoginForm() {
  const { setUserCookie } = useUserCookie();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const onSubmit = async (data) => {
    const Api_Url = process.env.NEXT_PUBLIC_REST_API_BASE_URL;
    setIsLoading(true);
    setResponseMessage("");

    const payload = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(`${Api_Url}/login`, payload, {
        headers: {
          Accept: "application/json",
        },
      });

      if (response.data.status) {
        setUserCookie({
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          access_token: response.data.access_token,
        });

        setIsLoading(false);
        toast.success("Login successful!");
        router.push("/Dashboard");
      } else {
        setIsLoading(false);
        setResponseMessage("Login failed. Please try again.");
      }
    } catch (error) {
      setIsLoading(false);
      setResponseMessage(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      <main className="flex flex-col items-center justify-center flex-grow py-10">
        <img src="/loginicon.png" alt="Logo" className="w-16 h-16 mb-4" />
        <h1 className="text-xl font-bold mb-6">Log in to SeelVpn</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm mx-auto"
        >
          {/* Email */}

          <div className="w-[70%] mx-auto">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full block px-4 mt-2 py-2 mb-1 border border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm  mb-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div className="w-[70%] mx-auto">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full block mt-4 px-4 py-2 mb-1 border border-gray-300 rounded-md"
            />
            {errors.password && (
              <p className="text-red-500 text-sm  mb-3">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-[70%] mx-auto mt-4 block cursor-pointer bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-full transition duration-200 disabled:opacity-60"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>

          {/* Message below button */}
          {responseMessage && (
            <p className="text-center mt-3 text-sm text-red-500">
              {responseMessage}
            </p>
          )}

          {/* Forgot Password */}
          <div className="text-center mt-2 text-sm">
            <a href="/forgotPassword" className="text-gray-500 underline">
              I forgot my password
            </a>
          </div>

          {/* Sign Up */}
          <div className="text-center mt-2 text-sm">
            Don’t have a SeelVpn account?{" "}
            <a href="/signup" className="text-teal-600 underline">
              Sign up
            </a>
          </div>
        </form>
      </main>

      {/* Uncomment if needed */}
      {/* <Footer /> */}
    </div>
  );
}
