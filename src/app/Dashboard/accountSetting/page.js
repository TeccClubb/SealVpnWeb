"use client";
import UpdateEmailModal from "@/components/updateModels/UpdateEmailModal";
import UpdateNameModal from "@/components/updateModels/UpdateNameModal";
import UpdatePasswordModal from "@/components/updateModels/UpdatePasswordModal";
import { useState } from "react";

export default function AccountPage() {
  const [showNameModal, setShowNameModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black p-8 ">
      <h2 className="text-teal-400 text-xl font-semibold mb-6">My Account</h2>
      <h1 className="text-3xl font-bold mb-6 text-neutral-600">User Information</h1>

      {/* Name Section */}
      <div className="bg-gray-100 p-6 rounded-2xl shadow-md mb-6 flex justify-between items-center">
        <div>
          <p className="text-xl font-bold text-gray-800">Name</p>
          <p className="text-lg text-gray-600">Test</p>
        </div>
        <button
          onClick={() => setShowNameModal(true)}
          className="bg-teal-400 hover:bg-teal-400 text-white px-4 py-2 rounded-xl"
        >
          Update Name
        </button>
      </div>

      {/* Email Section */}
      <div className="bg-gray-200 p-6 rounded-2xl shadow-md mb-6 flex justify-between items-center">
        <div>
          <p className="text-xl font-bold text-gray-800">Email Address</p>
          <p className="text-lg text-gray-700">altaf804@gmail.com</p>
        </div>
        <button
          onClick={() => setShowEmailModal(true)}
          className="bg-teal-400 hover:bg-teal-400 text-white px-4 py-2 rounded-xl"
        >
          Update Email
        </button>
      </div>

      {/* Password Section */}
      <div className="bg-gray-100 p-6 rounded-2xl shadow-md mb-6 flex justify-between items-center">
        <div>
          <p className="text-xl font-bold text-gray-800">Password</p>
          <p className="text-lg text-gray-600">•••••••••••</p>
        </div>
        <button
          onClick={() => setShowPasswordModal(true)}
          className="bg-teal-400 hover:bg-teal-400 text-white px-4 py-2 rounded-xl"
        >
          Update Password
        </button>
      </div>

      {/* Modals */}
      <UpdateNameModal open={showNameModal} onClose={() => setShowNameModal(false)} />
      <UpdateEmailModal open={showEmailModal} onClose={() => setShowEmailModal(false)} />
      <UpdatePasswordModal open={showPasswordModal} onClose={() => setShowPasswordModal(false)} />
    </div>
  );
}
