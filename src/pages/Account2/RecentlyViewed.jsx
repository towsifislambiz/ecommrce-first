import React from "react";
import AccountLayout from "../../Components/Account/AccountLayout";
import Image from "../../Components/Image";
import { FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

const RECENT = [
  { id: 1, name: "Camera", price: 450.0, rating: 4, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&h=200&fit=crop" },
  { id: 2, name: "Laptop", price: 899.0, rating: 4, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop" },
  { id: 3, name: "Wireless Earbuds", price: 39.0, rating: 4, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop" },
  { id: 4, name: "Sunglasses", price: 19.0, rating: 4, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop" },
];

const RecentlyViewed = () => {
  return (
    <AccountLayout active="recent" breadcrumb="Recently Viewed">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
        <h1 className="text-lg font-semibold mb-6">Recently Viewed</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {RECENT.map((p) => (
            <div
              key={p.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-3 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 group"
            >
              <div className="rounded-xl overflow-hidden bg-white/5 aspect-square mb-3">
                <Image
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="font-medium text-white text-sm truncate">{p.name}</p>
              <p className="text-purple-400 font-bold mt-1">${p.price.toFixed(2)}</p>
              <div className="flex items-center gap-1 mt-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`text-xs ${i < p.rating ? "text-amber-400" : "text-gray-700"}`} />
                ))}
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold py-2.5 rounded-xl shadow-lg shadow-purple-900/30 hover:opacity-90 transition-all duration-300">
                <HiOutlineShoppingCart /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </AccountLayout>
  );
};

export default RecentlyViewed;