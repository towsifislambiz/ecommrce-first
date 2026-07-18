import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

const LogoutModal = ({ open, onCancel, onConfirm }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[90%] max-w-md rounded-3xl border border-white/10 bg-[#161622] p-8 shadow-2xl">
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center">
            <FaSignOutAlt className="text-red-500 text-4xl" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-white">Confirm Logout</h2>

        <p className="text-center text-gray-400 mt-3">
          Are you sure you want to logout from your account?
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
          >
            No
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold"
          >
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;