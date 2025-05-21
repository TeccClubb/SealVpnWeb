"use client";
import { useState } from "react";
import axios from "axios";
import UpdateEmailModal from "@/components/updateModels/UpdateEmailModal";
import UpdateNameModal from "@/components/updateModels/UpdateNameModal";
import UpdatePasswordModal from "@/components/updateModels/UpdatePasswordModal";
import { toast } from "react-toastify";
import { useUserCookie } from "@/components/use-cookies";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();
  const { user, removeUserCookie } = useUserCookie();
  const [showNameModal, setShowNameModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await axios
        .delete("https://seelvpn.tecclubb.com/api/user/delete", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        })
        .then((res) => res.data);
      if (response.status) {
        removeUserCookie();
        toast.success(response.message);
        router.refresh();
      }
    } catch (error) {
      toast.error("Failed to delete account. Please try again.");
    } finally {
      setShowDeleteModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h2 className="text-teal-400 text-xl font-semibold mb-6">My Account</h2>
      <h1 className="text-3xl font-bold mb-6 text-neutral-600">
        User Information
      </h1>

      {/* Name Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6 flex justify-between items-center">
        <div>
          <p className="text-xl font-bold text-gray-800">Name</p>
          {user && <p className="text-lg text-gray-600">{user.name}</p>}
          {!user && (
            <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
          )}
        </div>
        <button
          onClick={() => setShowNameModal(true)}
          className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-xl"
        >
          Update Name
        </button>
      </div>

      {/* Email Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6 flex justify-between items-center">
        <div>
          <p className="text-xl font-bold text-gray-800">Email Address</p>
          {user && (
            <p className="text-lg text-gray-700">
              {user.email}
            </p>
          )}
          {!user && (
            <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
          )}
        </div>
        <button
          onClick={() => setShowEmailModal(true)}
          className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-xl"
        >
          Update Email
        </button>
      </div>

      {/* Password Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6 flex justify-between items-center">
        <div>
          <p className="text-xl font-bold text-gray-800">Password</p>
          <p className="text-lg text-gray-600">•••••••••••</p>
        </div>
        <button
          onClick={() => setShowPasswordModal(true)}
          className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-xl"
        >
          Update Password
        </button>
      </div>

      {/* Delete Account Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6 flex justify-between items-center">
        <div>
          <p className="text-xl font-bold text-red-600 mb-2">Delete Account</p>
          <p className="text-gray-700">
            Permanently remove your account and all associated data.
          </p>
        </div>
        <button
          onClick={() => setShowDeleteModal(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl"
        >
          Delete Account
        </button>
      </div>

      {/* Modals */}
      <UpdateNameModal
        open={showNameModal}
        onClose={() => {
          setShowNameModal(false);
        }}
      />
      <UpdateEmailModal
        open={showEmailModal}
        onClose={() => {
          setShowEmailModal(false);
        }}
      />
      <UpdatePasswordModal
        open={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
      />

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-lg font-semibold text-red-600">
              Confirm Deletion
            </h2>
            <p>
              Are you sure you want to delete your account? This action cannot
              be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 rounded border border-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
