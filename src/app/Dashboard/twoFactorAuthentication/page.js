"use client";
import Link from "next/link";
import { useState } from "react";
import Enable2FAModal from "@/components/TwoFAModal";
 
import LogOutModal from "@/components/logoutModal";
export default function TwoFactorAuth() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // Logout modal

  const handleLogout = () => {
    // Handle logout logic here
    console.log("User logged out");
    setIsLogoutModalOpen(false); // Close the logout modal after logging out
  }
  return (
    <div className="max-w-xl  montserrat-page p-6 bg-white mt-2   rounded-md">
      <h2 className="text-neutral-600 text-4xl font-bold">Two-Factor Authentication</h2>
      <p className="text-neutral-500 text-base font-normal mt-6 mb-4">
        Use an additional code to protect your account when logging in.{" "}
        <Link href="#" className="text-blue-600 text-base font-normal hover:underline">
          Learn more about Two-Factor Authentication.
        </Link>
      </p>

      <div className="flex justify-between items-center border-t border-b pb-2 pt-4 mt-4">
        <div>
          <p className="text-sm font-semibold text-gray-800">Two-Factor Authentication</p>
          <p className="text-neutral-500 mt-4">Off</p>
        </div>
        <Link href="#" onClick={() => setIsModalOpen(true)} className="text-sm text-blue-600 hover:underline">
          Enable
        </Link>
        
      </div>
      <button
          onClick={() => setIsLogoutModalOpen(true)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Log Out
        </button>
      <Enable2FAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LogOutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
}
