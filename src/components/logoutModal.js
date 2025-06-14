import React from "react";

export default function LogOutModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:text-black hover:bg-gray-100 rounded-full p-1 transition duration-200"
        >
          ✕
        </button>
        <h3 className="text-neutral-600 text-xl px-10 text-center mb-4 font-bold font-['Montserrat'] leading-relaxed">
          Are you sure you want to log out?     
        </h3>
        <div className="flex gap-4">
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="bg-teal-400 cursor-pointer text-white px-4 py-2 rounded-full w-full hover:bg-teal-500 transition duration-200"
          >
            Log Out
          </button>
          <button
            onClick={onClose}
            className="border cursor-pointer border-teal-500 text-teal-500 px-4 py-2 rounded-full w-full hover:bg-teal-400 hover:text-white transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
