import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image";
import {
  FaHome,
  FaShoppingBag,
  FaHeart,
  FaMapMarkerAlt,
  FaCreditCard,
  FaCog,
  FaBell,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTags,
  FaTruck,
  FaUndoAlt,
  FaStar,
  FaHistory,
} from "react-icons/fa";

// Central menu config. `key` must match the `active` prop passed in from
// each page, and `path` should map to your router routes.
export const ACCOUNT_MENU = [
  { key: "dashboard", label: "Dashboard", icon: <FaHome />, path: "/account" },
  { key: "orders", label: "My Orders", icon: <FaShoppingBag />, path: "/account/orders" },
  { key: "wishlist", label: "Wishlist", icon: <FaHeart />, path: "/account/wishlist" },
  { key: "address", label: "Address Book", icon: <FaMapMarkerAlt />, path: "/account/address" },
  { key: "payment", label: "Payment Methods", icon: <FaCreditCard />, path: "/account/payment" },
  { key: "settings", label: "Account Settings", icon: <FaCog />, path: "/account/settings" },
  { key: "notifications", label: "Notifications", icon: <FaBell />, path: "/account/notifications" },
  { key: "coupons", label: "Coupons", icon: <FaTags />, path: "/account/coupons" },
  { key: "track", label: "Track Order", icon: <FaTruck />, path: "/account/track-order" },
  { key: "returns", label: "Returns & Refunds", icon: <FaUndoAlt />, path: "/account/returns" },
  { key: "reviews", label: "My Reviews", icon: <FaStar />, path: "/account/reviews" },
  { key: "recent", label: "Recently Viewed", icon: <FaHistory />, path: "/account/recently-viewed" },
  { key: "help", label: "Help Center", icon: <FaQuestionCircle />, path: "/account/help" },
];

/**
 * active  - string key matching ACCOUNT_MENU[].key, highlights that item
 * user    - firebase user object (or null) for the mini profile block
 * onLogout - fn called when the Logout row is clicked (open your confirm modal here)
 */
const AccountSidebar = ({ active, user, onLogout }) => {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl shadow-purple-900/20 sticky top-6">
        {/* Mini profile */}
        <div className="flex items-center gap-3 px-3 py-3 mb-2 border-b border-white/10">
          <Image
            src={
              user?.photoURL ||
              "https://ui-avatars.com/api/?name=" +
                encodeURIComponent(user?.displayName || "Guest") +
                "&background=7c3aed&color=fff"
            }
            alt="profile"
            className="w-9 h-9 rounded-full object-cover border-2 border-purple-500/40"
          />
          <div className="min-w-0">
            <p className="font-semibold text-gray-100 text-sm truncate">
              {user?.displayName || "Guest"}
            </p>
            <p className="text-xs text-purple-400 truncate">Premium Member</p>
          </div>
        </div>

        <nav className="mt-2 flex flex-col gap-1">
          {ACCOUNT_MENU.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 group ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40"
                    : "text-gray-300 hover:bg-white/10 hover:translate-x-1"
                }`}
              >
                <span
                  className={`text-base ${
                    isActive ? "text-white" : "text-gray-400 group-hover:text-purple-400"
                  }`}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}

          <div className="border-t border-white/10 my-2" />

          <button
            type="button"
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all duration-300"
          >
            <FaSignOutAlt className="text-base" />
            Logout
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default AccountSidebar;