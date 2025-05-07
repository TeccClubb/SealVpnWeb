"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardSection from "@/components/DashboardSection";

const DashboardPage = () => {
  const [activePlan, setActivePlan] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    // if (!token) {
    //   router.push("/login");
    //   return;
    // }
  
    axios
      .get("https://rockyvpn.tecclubb.com/api/purchase/active", {
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
        <div className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-gray-300 rounded-xl">
          <button className="w-full max-w-64 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-full transition">
            Connect
          </button>
          <p className="text-default-500 text-2xl font-normal text-center">
            Your Online activity is protected.
          </p>
        </div>

        {/* Subscription Box */}
        <div className="flex flex-col justify-center gap-4 p-6 border-2 border-gray-300 rounded-xl">
          <h3 className="text-2xl font-bold text-neutral-600">Subscription</h3>
          {activePlan ? (
            <>
              <div className="flex items-center justify-between text-xl text-default-500 font-normal">
                <p>Plan: {activePlan.plan?.name || "N/A"}</p>
                <p className="text-base">
                  {activePlan.plan?.duration || "N/A"}{" "}
                  {activePlan.plan?.duration_unit || ""}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 text-xl text-default-500 font-normal">
                <p>
                  Renewal Date:{" "}
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

        {/* Recent Activity Box */}

        <div className="flex flex-col justify-center gap-4 p-6 border-2 border-gray-300 rounded-xl">
          <h3 className="text-2xl font-bold text-neutral-600">Recent Activity</h3>
          {activePlan ? (
            <>
              <p className="text-default-500 text-xl font-normal">
                Plan Name: <span className="font-semibold text-neutral-700">{activePlan.plan.name}</span>
              </p>
              <p className="text-default-500 text-xl font-normal">
                Price: <span className="font-semibold text-neutral-700">${activePlan.amount_paid}</span>
              </p>
              <p className="text-default-500 text-xl font-normal">
                Slug: <span className="font-semibold text-neutral-700">{activePlan.plan?.slug}</span>
              </p>
            </>
          ) : (
            <p className="text-default-500 text-xl font-normal">Loading recent activity...</p>
          )}
        </div>


        {/* Support Box */}
        <div className="flex flex-col justify-center gap-4 p-6 border-2 border-gray-300 rounded-xl">
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
