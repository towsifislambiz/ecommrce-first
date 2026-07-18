import React, { useState } from "react";
import AccountLayout from "../../Components/Account/AccountLayout";
import { FaCheckCircle, FaTag, FaTruck, FaGift, FaBolt } from "react-icons/fa";

const INITIAL_NOTIFS = [
  { id: 1, icon: <FaCheckCircle className="text-emerald-400" />, text: "Your order #12345 has been delivered.", time: "2 hours ago", read: false },
  { id: 2, icon: <FaTag className="text-purple-400" />, text: "Special offer! Get 20% off on all items.", time: "5 hours ago", read: false },
  { id: 3, icon: <FaTruck className="text-blue-400" />, text: "Your order #12344 has been shipped.", time: "1 day ago", read: false },
  { id: 4, icon: <FaGift className="text-pink-400" />, text: "New coupon added to your account.", time: "2 days ago", read: true },
  { id: 5, icon: <FaBolt className="text-amber-400" />, text: "Weekend sale is live now!", time: "3 days ago", read: true },
];

const Notifications = () => {
  const [notifs, setNotifs] = useState(INITIAL_NOTIFS);

  const markAllRead = () => setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));

  return (
    <AccountLayout active="notifications" breadcrumb="Notifications">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-semibold">Notifications</h1>
          <button
            onClick={markAllRead}
            className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors"
          >
            Mark all as read
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {notifs.map((n) => (
            <div
              key={n.id}
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all duration-300 cursor-pointer"
            >
              <span className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-lg border border-white/10 shrink-0">
                {n.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${n.read ? "text-gray-400" : "text-white font-medium"}`}>{n.text}</p>
                <p className="text-xs text-gray-500 mt-1">{n.time}</p>
              </div>
              {!n.read && <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0" />}
            </div>
          ))}
        </div>
      </div>
    </AccountLayout>
  );
};

export default Notifications;