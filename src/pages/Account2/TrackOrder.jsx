import React, { useState } from "react";
import AccountLayout from "../../Components/Account/AccountLayout";
import StatusBadge from "../../Components/Account/StatusBadge";
import { FaBox, FaCheck, FaShippingFast, FaHome, FaSearch } from "react-icons/fa";

const STEPS = [
  { key: "placed", label: "Order Placed", time: "16 July, 10:00 AM", icon: <FaBox /> },
  { key: "confirmed", label: "Confirmed", time: "16 July, 11:00 AM", icon: <FaCheck /> },
  { key: "shipped", label: "Shipped", time: "17 July, 08:00 AM", icon: <FaShippingFast /> },
  { key: "delivered", label: "Delivered", time: "18 July, 02:00 PM", icon: <FaHome /> },
];

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [tracked, setTracked] = useState({ id: "#12345", placedOn: "16 July, 2024", status: "Delivered", completedSteps: 4 });

  const handleTrack = (e) => {
    e.preventDefault();
    // Wire this up to your real order lookup API/action.
    setTracked((prev) => ({ ...prev, id: orderNumber || prev.id }));
  };

  return (
    <AccountLayout active="track" breadcrumb="Track Order">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
        <h1 className="text-lg font-semibold mb-6">Track Your Order</h1>

        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
            <input
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Enter your order number"
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-lg shadow-purple-900/40 hover:opacity-90 transition-all duration-300"
          >
            Track Order
          </button>
        </form>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="font-semibold text-white">Order {tracked.id}</p>
              <p className="text-gray-400 text-sm">Placed on {tracked.placedOn}</p>
            </div>
            <StatusBadge status={tracked.status} />
          </div>

          {/* Timeline */}
          <div className="relative flex items-start justify-between">
            <div className="absolute top-5 left-5 right-5 h-0.5 bg-white/10">
              <div
                className="h-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${((tracked.completedSteps - 1) / (STEPS.length - 1)) * 100}%` }}
              />
            </div>
            {STEPS.map((step, idx) => {
              const done = idx < tracked.completedSteps;
              return (
                <div key={step.key} className="relative flex flex-col items-center gap-3 flex-1 text-center">
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm z-10 border-2 transition-all duration-300 ${
                      done
                        ? "bg-emerald-500 border-emerald-500 text-white"
                        : "bg-[#0b0b17] border-white/20 text-gray-500"
                    }`}
                  >
                    {step.icon}
                  </span>
                  <div>
                    <p className={`text-sm font-medium ${done ? "text-white" : "text-gray-500"}`}>{step.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{step.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default TrackOrder;