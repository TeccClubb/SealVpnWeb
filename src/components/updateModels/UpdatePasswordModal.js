import { useState } from "react";
import axios from "axios";

export default function UpdatePasswordModal({ open, onClose }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!open) return null;

 const handleSubmit = async () => {
  setError("");
  setSuccess("");

  if (!oldPassword || !newPassword || !confirmPassword) {
    setError("All fields are required.");
    return;
  }

  if (newPassword !== confirmPassword) {
    setError("New passwords do not match.");
    return;
  }

  setLoading(true);

  try {
    const token = localStorage.getItem("access_token");

    const response = await axios.post(
      "https://seelvpn.tecclubb.com/api/user/update-password",
      {
        old_password: oldPassword,
        new_password: newPassword,
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data);

    if (response.data?.status) {
      setSuccess("Password updated successfully!");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(onClose, 2000);
    } else {
      const message =
        response.data?.message || "Failed to update password. Please try again.";
      setError(message);
    }
  } catch (err) {
    const message =
      err.response?.data?.message || "Something went wrong. Try again.";
    setError(message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl w-96 z-60 shadow-2xl">
        <h2 className="text-black text-xl mb-4">Update Password</h2>

        <input
          type="password"
          placeholder="Old Password"
          className="w-full p-2 mb-3 rounded bg-gray-300 text-black"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 mb-3 rounded bg-gray-300 text-black"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full p-2 mb-4 rounded bg-gray-300 text-black"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <p className="text-red-600 mb-2">{error}</p>}
        {success && <p className="text-green-600 mb-2">{success}</p>}

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-600 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-teal-500 text-white rounded disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}
