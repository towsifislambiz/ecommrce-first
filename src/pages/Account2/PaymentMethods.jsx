import React, { useState } from "react";
import AccountLayout from "../../Components/Account/AccountLayout";
import { FaCcVisa, FaCcMastercard, FaMoneyBillWave, FaPlus } from "react-icons/fa";

const INITIAL_METHODS = [
  { id: 1, type: "Visa **** 4242", detail: "Expires 12/26", icon: <FaCcVisa className="text-3xl text-blue-400" />, isDefault: true },
  { id: 2, type: "Mastercard **** 8888", detail: "Expires 11/25", icon: <FaCcMastercard className="text-3xl text-orange-400" />, isDefault: false },
  { id: 3, type: "bKash", detail: "01712-345678", icon: <FaMoneyBillWave className="text-3xl text-pink-400" />, isDefault: false },
  { id: 4, type: "Nagad", detail: "01712-345678", icon: <FaMoneyBillWave className="text-3xl text-orange-500" />, isDefault: false },
];

const PaymentMethods = () => {
  const [methods] = useState(INITIAL_METHODS);

  return (
    <AccountLayout active="payment" breadcrumb="Payment Methods">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-semibold">Payment Methods</h1>
          <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg shadow-purple-900/40 hover:opacity-90 transition-all duration-300">
            <FaPlus className="text-xs" /> Add New Method
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {methods.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  {m.icon}
                </span>
                <div>
                  <p className="font-semibold text-white">{m.type}</p>
                  <p className="text-gray-400 text-sm">{m.detail}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {m.isDefault && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Default
                  </span>
                )}
                <button className="text-xs font-medium px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all duration-300">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AccountLayout>
  );
};

export default PaymentMethods;