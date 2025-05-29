"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLegalNotes } from "@/components/useLegalNotes";
import ArticleSection from "@/components/ArticleSection";

const HelpPage = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/feedback/store`,
        {
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        {
          headers: {
            Accept: "application/json",
          },
          maxBodyLength: Infinity,
        }
      );

      setSuccessMessage("Feedback sent successfully!");
      setErrorMessage("");
      reset();
    } catch (error) {
      console.error(error);
      setSuccessMessage("");
      setErrorMessage("Failed to submit feedback. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 bg-gray-50">
      {/* Left Article Section */}
      <div className="md:w-1/2 w-full">
        <ArticleSection
          heading="Help Us Keep the Internet Free and Secure – Support SEEL VPN"
          errorMessage={errorMessage}
        >
          <p>
            At <strong>SEEL VPN</strong>, our mission is simple: to empower
            users around the world with privacy, freedom, and security online.
            In a digital age where data is currency and surveillance is
            everywhere, we believe everyone has the right to a private and
            unrestricted internet.
          </p>

          <h2>Why SEEL VPN Needs Your Support</h2>
          <p>
            Unlike many companies, SEEL VPN puts{" "}
            <strong>user privacy first</strong> — we don’t sell your data, track
            your activity, or bombard you with ads. But providing a fast,
            secure, and reliable VPN service isn’t free. Your support helps us:
          </p>

          <ul className="list-disc pl-5">
            <li>🌐 <strong>Maintain high-speed servers</strong> in multiple countries</li>
            <li>🔐 <strong>Strengthen encryption</strong> and enhance security features</li>
            <li>📱 <strong>Develop new apps and updates</strong> for all devices</li>
            <li>💬 <strong>Provide 24/7 customer support</strong> to our global community</li>
            <li>💡 <strong>Advocate for digital freedom</strong> and fight censorship</li>
          </ul>

          <h2>Ways You Can Help</h2>
          <ol className="list-decimal pl-5">
            <li>
              <strong>Subscribe to a Premium Plan:</strong> Our paid plans help
              cover operating costs and offer additional benefits like faster
              speeds, unlimited usage, and priority support.
            </li>
            <li>
              <strong>Spread the Word:</strong> Tell friends and family about
              SEEL VPN and how it protects their privacy online.
            </li>
            <li>
              <strong>Give Feedback:</strong> Help us improve by sharing your
              experience and suggestions.
            </li>
            <li>
              <strong>Follow Us on Social Media:</strong> Join our community to
              stay updated and participate in digital freedom campaigns.
            </li>
          </ol>

          <p className="mt-4">
            Thank you for helping us keep the internet free and secure for
            everyone. Your support means the world to us.
          </p>
          <p>
            <em>— The SEEL VPN Team</em>
          </p>
        </ArticleSection>
      </div>

      {/* Feedback Form Section */}
      <div className="md:w-1/2 w-full bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Send Us Your Feedback</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block font-semibold mb-1">
              Subject:
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
            {errors.subject && (
              <p className="text-red-600 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-semibold mb-1">
              Message:
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your message"
              {...register("message", { required: "Message is required" })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Feedback"}
          </button>

          {/* ✅ Message display below button */}
          {successMessage && (
            <p className="text-green-600 mt-2">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-600 mt-2">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default HelpPage;
