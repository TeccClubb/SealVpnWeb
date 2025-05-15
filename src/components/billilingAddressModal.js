"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function BillingAddressModal({ isOpen, onClose, onAddressAdded }) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    state: "",
    postal_code: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("access_token");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/billing-address/store`,
        {
          name: form.name,
          address: form.address,
          city: form.city,
          country: form.country,
          state: form.state,
          postal_code: form.postal_code,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      onAddressAdded(response.data.user.billing_address);
      onClose();
      toast.success("Billing address added successfully!");
    } catch (err) {
      setError("Failed to add billing address. Please try again.");
      console.error("Error adding billing address", err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white text-black p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Billing Address</h2>
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full mx-auto block px-4 py-2 border border-gray-300 rounded-mdd"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="w-full mx-auto block px-4 py-2 border border-gray-300 rounded-md"
            value={form.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full mx-auto block px-4 py-2 border border-gray-300 rounded-md"
            value={form.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className=" w-full mx-auto block px-4 py-2 border border-gray-300 rounded-md"
            value={form.country}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            className="w-full mx-auto block px-4 py-2 border border-gray-300 rounded-md"
            value={form.state}
            onChange={handleChange}
          />
          <input
            type="text"
            name="postal_code"
            placeholder="Postal Code"
            className="w-full mx-auto block px-4 py-2 border border-gray-300 rounded-md"
            value={form.postal_code}
            onChange={handleChange}
          />
        </div>

        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

        <div className="mt-4 flex justify-end gap-3">
          <button
            className="inline-block mt-2 px-4 py-2 rounded-full bg-teal-400 text-white text-md hover:bg-teal-500 transition"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            className="inline-block mt-2 px-6 py-2 rounded-full bg-teal-400 text-white text-md hover:bg-teal-500 transition"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
