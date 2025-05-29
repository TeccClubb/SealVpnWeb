"use client";

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLegalNotes } from "@/components/useLegalNotes";
import ArticleSection from "@/components/ArticleSection";

const HelpPage = () => {
  const {
    isLegalNotesLoading,
    errorMessage,
    legalNotes: { privacyPolicy },
  } = useLegalNotes();

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
      alert("Thank you for your feedback!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to submit feedback. Please try again later.");
    }
  };

  return (
    <ArticleSection
      heading="Privacy Policy"
      errorMessage={errorMessage}
      isLoading={isLegalNotesLoading}
    >
      <article className="prose max-w-none">
        <h1>Help Us Keep the Internet Free and Secure – Support SEEL VPN</h1>
        <p>
          At <strong>SEEL VPN</strong>, our mission is simple: to empower users
          around the world with privacy, freedom, and security online. In a
          digital age where data is currency and surveillance is everywhere, we
          believe everyone has the right to a private and unrestricted
          internet.
        </p>

        <h2>Why SEEL VPN Needs Your Support</h2>
        <p>
          Unlike many companies, SEEL VPN puts <strong>user privacy first</strong>{" "}
          — we don’t sell your data, track your activity, or bombard you with
          ads. But providing a fast, secure, and reliable VPN service isn’t free.
          Your support helps us:
        </p>

        <ul>
          <li>🌐 <strong>Maintain high-speed servers</strong> in multiple countries</li>
          <li>🔐 <strong>Strengthen encryption</strong> and enhance security features</li>
          <li>📱 <strong>Develop new apps and updates</strong> for all devices</li>
          <li>💬 <strong>Provide 24/7 customer support</strong> to our global community</li>
          <li>💡 <strong>Advocate for digital freedom</strong> and fight censorship</li>
        </ul>

        <h2>Ways You Can Help</h2>
        <ol>
          <li>
            <strong>Subscribe to a Premium Plan</strong>
            <br />
            Our paid plans help cover operating costs and offer additional benefits
            like faster speeds, unlimited usage, and priority support.
          </li>
          <li>
            <strong>Spread the Word</strong>
            <br />
            Tell friends and family about SEEL VPN and how it protects their privacy
            online.
          </li>
          <li>
            <strong>Give Feedback</strong>
            <br />
            Help us improve by sharing your experience and suggestions.
          </li>
          <li>
            <strong>Follow Us on Social Media</strong>
            <br />
            Join our community to stay updated and participate in digital freedom
            campaigns.
          </li>
        </ol>

        <p>
          Thank you for helping us keep the internet free and secure for everyone.
          Your support means the world to us.
        </p>
        <p>
          <em>— The SEEL VPN Team</em>
        </p>

        <hr />

        <section>
          <h2>Send Us Your Feedback</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md  space-y-4">
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
                className="w-full border rounded px-3 py-2"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block font-semibold mb-1">
                Subject:
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
                className="w-full border rounded px-3 py-2"
                disabled={isSubmitting}
              />
              {errors.subject && (
                <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-1">
                Message:
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message"
                {...register("message", { required: "Message is required" })}
                className="w-full border rounded px-3 py-2"
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Feedback"}
            </button>

            {isSubmitSuccessful && (
              <p className="text-green-600 mt-2">Feedback sent successfully!</p>
            )}
          </form>
        </section>
      </article>
    </ArticleSection>
  );
};

export default HelpPage;
