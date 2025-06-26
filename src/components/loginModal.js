"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useUserCookie } from "../components/use-cookies";

export default function LogInModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const { setUserCookie } = useUserCookie();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (!isOpen) return null;

  const onSignUp = async (data) => {
    setLoading(true);
    setServerMessage("");

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_REST_API_BASE_URL+"/signup",
        {
          name: data.username,
          email: data.email,
          password: data.password,
        },
        { headers: { Accept: "application/json" } }
      );

      const message =
        response?.data?.message + "! Please verify your email" ||
        "Sign up successful!";

      if (response.status === 200 || response.status === 201) {
        toast.success(message);
        reset();
        onClose();
      } else {
        toast.error("Sign up failed.");
        setServerMessage("Please try again");
      }
    } catch (error) {
      toast.error("Sign up failed.");
      setServerMessage("Sign up failed.");
    } finally {
      setLoading(false);
    }
  };

  const onLogin = async (data) => {
    const Api_Url = process.env.NEXT_PUBLIC_REST_API_BASE_URL;
    setLoading(true);
    setServerMessage("");

    try {
      const response = await axios.post(`${Api_Url}/login`, {
        email: data.email,
        password: data.password,
      });

      if (response.data.status) {
        setUserCookie({
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          access_token: response.data.access_token,
        });

        toast.success("Login successful!");
        reset();
        onClose();
      } else {
        setServerMessage("Login failed. Please try again.");
      }
    } catch (error) {
      setServerMessage(error.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = isLogin ? onLogin : onSignUp;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:text-black hover:bg-gray-100 rounded-full p-1 transition duration-200"
        >
          ✕
        </button>

        <h3 className="text-neutral-600 text-3xl px-10 text-center my-2 font-bold font-['Montserrat'] leading-relaxed">
          {isLogin ? "Welcome Back" : "You're almost there"}
        </h3>

        <h5 className="text-neutral-600 text-xl px-10 opacity-50 text-center mb-4 font-['Montserrat'] leading-relaxed">
          {isLogin ? "Log in to continue" : "Sign up to get SeelVpn"}
        </h5>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm mx-auto space-y-3"
        >
          {!isLogin && (
            <div className="w-[90%] mx-auto">
              <input
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: !isLogin && "Username is required",
                })}
                className="w-full block px-4 py-2 border border-gray-300 rounded-md"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
              )}
            </div>
          )}

          <div className="w-[90%] mx-auto">
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
              className="w-full block px-4 py-2 border border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="w-[90%] mx-auto">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: isLogin ? undefined : {
                  value: 8,
                  message: "Minimum 8 characters",
                },
              })}
              className="w-full block px-4 py-2 border border-gray-300 rounded-md"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-[90%] mx-auto block bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-full text-xl transition duration-200 disabled:opacity-60"
          >
            {loading ? "Loading..." : isLogin ? "Log In" : "Sign Up"}
          </button>

          {serverMessage && (
            <p className="text-center text-sm mt-2 text-red-500">
              {serverMessage}
            </p>
          )}

          <div className="text-center text-sm">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <span
                  onClick={() => setIsLogin(false)}
                  className="text-teal-600 underline cursor-pointer"
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setIsLogin(true)}
                  className="text-teal-600 underline cursor-pointer"
                >
                  Log in
                </span>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
