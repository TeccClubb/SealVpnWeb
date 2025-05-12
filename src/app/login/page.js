"use client";

import { useForm } from "react-hook-form";
import Footer from "@/components/footer/footer";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();


  const onSubmit = (data) => {
    let Api_Url=process.env.NEXT_PUBLIC_REST_API_BASE_URL;

    const payload = {
      name: data.email, // Map email field to "name"
      password: data.password,
    };
  
    axios
      .post(`${Api_Url}/login`, payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log("Login successful:", response.data);
         if (response.data.status) {
          console.log("Login successful:", response.data.access_token);
          localStorage.setItem("access_token", response.data.access_token);
          console.log("ddddddddddddddddddddddccccccccc")
          console.log(response.data.user)
         localStorage.setItem("user", JSON.stringify(response.data.user));

          router.push("/Dashboard");
          toast.success("Login successful!")

          
        // Handle success (e.g., store token, redirect)
        }
      })
      .catch((error) => {
        console.error("Login failed:", error.response?.data || error.message);
        // Handle login error (e.g., show error message)
      });
  };
  

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow py-10">
        <img src="/loginicon.png" alt="Logo" className="w-16 h-16 mb-4" />
        <h1 className="text-xl font-bold mb-6">Log in to SeelVpn</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-[70%] mx-auto block px-4 mt-2 py-2 mb-1 border border-gray-300 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm text-center mb-2">{errors.email.message}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-[70%] mx-auto block mt-4 px-4 py-2 mb-1 border border-gray-300 rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm text-center mb-3">{errors.password.message}</p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-[70%] mx-auto mt-4 block bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-full"
          >
            Log In
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-2 text-sm">
            <a href="#" className="text-gray-500 underline">I forgot my password</a>
          </div>

          {/* Sign Up */}
          <div className="text-center mt-2 text-sm">
            Don’t have a SeelVpn account?{" "}
            <a href="#" className="text-teal-600 underline">Sign up</a>
          </div>
        </form>
      </main>

      {/* Uncomment if needed */}
      {/* <Footer /> */}
    </div>
  );
}
	