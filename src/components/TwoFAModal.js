// components/Enable2FAModal.tsx
import { useState } from "react";

export default function Enable2FAModal({ isOpen, onClose }) {
    const [password, setPassword] = useState("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>


            <div className="bg-white rounded-md  text-center shadow-lg w-full max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-1 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold p-2 rounded-full hover:bg-gray-200"
                >
                    &times;
                </button>

                <h2 className="text-neutral-600 text-xl mb-4  font-bold">Enable Two-Factor Authentication</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Before we start, please enter your password.
                </p>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black/5 text-black placeholder-neutral-500 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />

                <button
                    onClick={() => alert(`Password entered: ${password}`)}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-full"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
