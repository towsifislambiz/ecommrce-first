import React, { useMemo, useState } from "react";
import AccountLayout from "../../Components/Account/AccountLayout";
import StatusBadge from "../../Components/Account/StatusBadge";
import Image from "../../Components/Image";
import { FaSearch, FaEye } from "react-icons/fa";

const ORDERS = [
  { id: "#12345", date: "16 July, 2024", items: 3, amount: "$120.00", status: "Delivered", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=100&h=100&fit=crop" },
  { id: "#12344", date: "15 July, 2024", items: 2, amount: "$85.00", status: "Shipped", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" },
  { id: "#12343", date: "14 July, 2024", items: 1, amount: "$60.00", status: "Pending", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop" },
  { id: "#12342", date: "13 July, 2024", items: 4, amount: "$200.00", status: "Cancelled", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100&h=100&fit=crop" },
];

const TABS = ["All Orders", "Delivered", "Shipped", "Pending", "Cancelled"];

const MyOrders = () => {
  const [tab, setTab] = useState("All Orders");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return ORDERS.filter((o) => {
      const matchesTab = tab === "All Orders" || o.status === tab;
      const matchesQuery = o.id.toLowerCase().includes(query.toLowerCase());
      return matchesTab && matchesQuery;
    });
  }, [tab, query]);

  return (
    <AccountLayout active="orders" breadcrumb="My Orders">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
          <h1 className="text-lg font-semibold">My Orders</h1>
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search order..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
            />
          </div>
        </div>

        {/* Status tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                tab === t
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Table - desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 text-left border-b border-white/10">
                <th className="py-3 font-medium">Order ID</th>
                <th className="py-3 font-medium">Date</th>
                <th className="py-3 font-medium">Items</th>
                <th className="py-3 font-medium">Amount</th>
                <th className="py-3 font-medium">Status</th>
                <th className="py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <Image src={order.image} alt={order.id} className="w-10 h-10 rounded-lg object-cover border border-white/10" />
                      <span className="font-semibold text-white">{order.id}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-400">{order.date}</td>
                  <td className="py-4 text-gray-400">{order.items} Items</td>
                  <td className="py-4 font-semibold text-white">{order.amount}</td>
                  <td className="py-4">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="py-4 text-right">
                    <button className="w-9 h-9 rounded-xl bg-white/5 hover:bg-purple-600/20 text-gray-400 hover:text-purple-400 border border-white/10 inline-flex items-center justify-center transition-all duration-300">
                      <FaEye className="text-sm" />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-gray-500">
                    No orders match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Cards - mobile */}
        <div className="md:hidden flex flex-col gap-3">
          {filtered.map((order) => (
            <div key={order.id} className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Image src={order.image} alt={order.id} className="w-10 h-10 rounded-lg object-cover border border-white/10" />
                  <span className="font-semibold text-white">{order.id}</span>
                </div>
                <StatusBadge status={order.status} />
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{order.date}</span>
                <span>{order.items} Items</span>
                <span className="font-semibold text-white">{order.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AccountLayout>
  );
};

export default MyOrders;