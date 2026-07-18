import React from "react";
import AccountLayout from "../../Components/Account/AccountLayout";
import { FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";

const FAQS = [
  { q: "How do I track my order?", a: "Go to Track Order in the sidebar and enter your order number to see live status." },
  { q: "What is your return policy?", a: "Items can be returned within 14 days of delivery. Start a request from Returns & Refunds." },
  { q: "How do I change my payment method?", a: "Visit Payment Methods to add, edit, or set a default payment option." },
];

const HelpCenter = () => {
  return (
    <AccountLayout active="help" breadcrumb="Help Center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
          <h1 className="text-lg font-semibold mb-5">Frequently Asked Questions</h1>
          <div className="flex flex-col divide-y divide-white/10">
            {FAQS.map((f, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0">
                <p className="font-medium text-white mb-1">{f.q}</p>
                <p className="text-gray-400 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl h-fit">
          <h2 className="text-lg font-semibold mb-5">Contact Support</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
                <FaEnvelope />
              </span>
              <div>
                <p className="text-sm text-gray-400">Email us</p>
                <p className="font-medium text-white text-sm">support@yourstore.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
                <FaPhoneAlt />
              </span>
              <div>
                <p className="text-sm text-gray-400">Call us</p>
                <p className="font-medium text-white text-sm">+880 1712-345678</p>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold py-3 rounded-xl shadow-lg shadow-purple-900/40 hover:opacity-90 transition-all duration-300">
              <FaComments /> Start Live Chat
            </button>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default HelpCenter;