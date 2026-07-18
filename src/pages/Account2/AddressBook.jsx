import React, { useState } from "react";
import AccountLayout from "../../Components/Account/AccountLayout";
import { FaMapMarkerAlt, FaPlus } from "react-icons/fa";

const INITIAL_ADDRESSES = [
  { id: 1, label: "Home", line1: "House 12, Road 5, Dhanmondi", line2: "Dhaka, Bangladesh - 1205", phone: "01712-345678", isDefault: true },
  { id: 2, label: "Office", line1: "House 45, Road 10, Banani", line2: "Dhaka, Bangladesh - 1213", phone: "01876-543210", isDefault: false },
  { id: 3, label: "Family Home", line1: "Village: Barishal, P.S. Agailjhara", line2: "Barishal, Bangladesh - 8200", phone: "01700-000000", isDefault: false },
];

const AddressBook = () => {
  const [addresses, setAddresses] = useState(INITIAL_ADDRESSES);

  const makeDefault = (id) => {
    setAddresses((prev) => prev.map((a) => ({ ...a, isDefault: a.id === id })));
  };

  const removeAddress = (id) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <AccountLayout active="address" breadcrumb="Address Book">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-semibold">Address Book</h1>
          <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg shadow-purple-900/40 hover:opacity-90 transition-all duration-300">
            <FaPlus className="text-xs" /> Add New Address
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {addresses.map((addr) => (
            <div key={addr.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.07] transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </span>
                  <p className="font-semibold text-white">{addr.label}</p>
                </div>
                {addr.isDefault && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Default
                  </span>
                )}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">{addr.line1}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{addr.line2}</p>
              <p className="text-gray-400 text-sm mt-1">{addr.phone}</p>

              <div className="flex items-center gap-3 mt-5">
                {!addr.isDefault && (
                  <button
                    onClick={() => makeDefault(addr.id)}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all duration-300"
                  >
                    Set as Default
                  </button>
                )}
                <button className="text-xs font-medium px-3 py-1.5 rounded-lg bg-purple-600/15 border border-purple-500/30 text-purple-400 hover:bg-purple-600/25 transition-all duration-300">
                  Edit
                </button>
                <button
                  onClick={() => removeAddress(addr.id)}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-red-600/15 border border-red-500/30 text-red-400 hover:bg-red-600/25 transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AccountLayout>
  );
};

export default AddressBook;