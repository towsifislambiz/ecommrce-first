import React from "react";
import AccountLayout from "../../Components/Account/AccountLayout";
import { FaTicketAlt } from "react-icons/fa";

const COUPONS = [
  { code: "WELCOME20", desc: "Get 20% off on your first order. Min order $50", badge: "20% OFF", expiry: "Valid till 31 Aug, 2024" },
  { code: "SUMMER10", desc: "Get 10% off on orders above $100. Min order $100", badge: "10% OFF", expiry: "Valid till 15 Sep, 2024" },
  { code: "FREESHIP", desc: "Free shipping on any order. No minimum order", badge: "FREE SHIPPING", expiry: "Valid till 30 Aug, 2024" },
];

const Coupons = () => {
  return (
    <AccountLayout active="coupons" breadcrumb="Coupons">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
        <h1 className="text-lg font-semibold mb-6">
          My Coupons <span className="text-gray-500 font-normal">({COUPONS.length})</span>
        </h1>

        <div className="flex flex-col gap-4">
          {COUPONS.map((c) => (
            <div
              key={c.code}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/5 border border-dashed border-purple-500/30 rounded-2xl p-5 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0">
                  <FaTicketAlt />
                </span>
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="font-bold text-white tracking-wide">{c.code}</p>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {c.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{c.desc}</p>
                  <p className="text-gray-500 text-xs mt-1">{c.expiry}</p>
                </div>
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-purple-900/40 hover:opacity-90 transition-all duration-300 shrink-0">
                Use Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </AccountLayout>
  );
};

export default Coupons;