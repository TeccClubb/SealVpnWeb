"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardSection from "@/components/DashboardSection";

const DashboardPage = () => {
  const [activePlan, setActivePlan] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    axios
      .get(`${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/purchase/active`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Active plan response:", response.data);
        setActivePlan(response.data.plan); // store full response if needed
      })
      .catch((error) => {
        console.error("Error fetching active plan:", error.response?.data || error.message);
      });
  }, []);



  return (
    <DashboardSection title="Dashboard" heading="Welcome back, John Doe">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-500">
        {/* Connect Box */}
        <div className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-gray-100 rounded-xl">
          <button className="w-full max-w-64 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-full transition">
            Connect
          </button>
          <p className="text-default-500 text-2xl font-normal text-center">
            Your Online activity is protected.
          </p>
        </div>

        {/* Subscription Box */}
        <div className="flex flex-col justify-center gap-4 p-6 border-2 border-gray-100 rounded-xl">
          <h3 className="text-2xl text-center font-bold text-neutral-600">Download SeelVpn</h3>
          {activePlan ? (
            <>



              {/* OS Icon Buttons Section */}
              <div className="flex justify-around items-center mt-4">
                {[
                  { label: "Windows", src: "/buttonImg/windows.svg" },
                  { label: "Mac", src: "/buttonImg/apple.svg" },
                  { label: "Android", src: "/buttonImg/android.svg" },
                  { label: "iPhone", src: "/buttonImg/ios.svg" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full  bg-neutral-100 flex items-center justify-center hover:bg-gray-300 transition duration-200">
                      <img src={item.src} alt={item.label} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-bold text-neutral-700">{item.label}</span>
                  </div>
                ))}
              </div>


            </>
          ) : (
            <p className="text-default-500 text-base font-normal">
              Loading or no active plan found.
            </p>
          )}
        </div>



        {/* Recent Activity Box */}

        {/* Subscription Box */}
        <div className="flex flex-col justify-center gap-4 p-6 border-2 border-gray-100 rounded-xl">
          <h3 className="text-2xl font-bold text-neutral-600">Subscription</h3>
          {activePlan ? (
            <>
              <div className="flex items-center justify-between text-xl text-default-500 font-normal">
                <p> {activePlan.plan?.name || "N/A"}</p>
                <p className="text-base">
                  {activePlan.plan?.duration || "N/A"}{" "}
                  {activePlan.plan?.duration_unit || ""}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 text-xl text-default-500 font-normal">
                <p>
                  {" "}
                  {new Date(activePlan.end_date).toLocaleDateString()}
                </p>
                <p className="text-base">
                  ${activePlan.amount_paid || 0}/
                  {activePlan.plan?.duration_unit || ""}
                </p>
              </div>
            </>
          ) : (
            <p className="text-default-500 text-base font-normal">
              Loading or no active plan found.
            </p>
          )}
        </div>


        {/* Support Box */}
        <div className="flex flex-col justify-center gap-4 p-6 border-2 border-gray-100 rounded-xl">
          <h3 className="flex items-center gap-2 text-2xl font-bold text-neutral-600">
            <img
              src="/headphone.png"
              alt="Support Icon"
              className="w-7 h-7 object-contain"
            />

            Customer Contact Support
          </h3>
          <p className="text-default-500 text-xl font-normal">
            We're here to help you 24/7—get in touch anytime!
          </p>
        </div>
      </div>
    </DashboardSection>
  );
};

export default DashboardPage;
