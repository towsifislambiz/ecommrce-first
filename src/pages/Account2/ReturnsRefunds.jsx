import React, { useState } from "react";
import AccountLayout from "../../Components/Account/AccountLayout";
import StatusBadge from "../../Components/Account/StatusBadge";
import Image from "../../Components/Image";

const RETURNS = [
  { id: 1, name: "Wireless Headphones", order: "#12345", date: "18 July, 2024", status: "Approved", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" },
  { id: 2, name: "Smart Watch", order: "#12344", date: "15 July, 2024", status: "Pending", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=100&h=100&fit=crop" },
  { id: 3, name: "Backpack", order: "#12343", date: "10 July, 2024", status: "Rejected", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100&h=100&fit=crop" },
];

const TABS = ["Return Requests", "Refunds"];

const ReturnsRefunds = () => {
  const [tab, setTab] = useState("Return Requests");

  return (
    <AccountLayout active="returns" breadcrumb="Returns & Refunds">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
        <h1 className="text-lg font-semibold mb-5">Returns & Refunds</h1>

        <div className="flex items-center gap-2 mb-6">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                tab === t
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "Return Requests" ? (
          <div className="flex flex-col gap-3">
            {RETURNS.map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between flex-wrap gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <Image src={r.image} alt={r.name} className="w-14 h-14 rounded-xl object-cover border border-white/10" />
                  <div>
                    <p className="font-semibold text-white">{r.name}</p>
                    <p className="text-gray-400 text-sm">Order {r.order}</p>
                    <p className="text-gray-500 text-xs">Return requested on {r.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <StatusBadge status={r.status} />
                  <button className="text-xs font-medium px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 text-sm py-10 text-center">No refunds to show yet.</div>
        )}
      </div>
    </AccountLayout>
  );
};

export default ReturnsRefunds;