import React from "react";
import AccountLayout from "../../Components/Account/AccountLayout";
import Image from "../../Components/Image";
import { FaStar } from "react-icons/fa";

const REVIEWS = [
  { id: 1, name: "Wireless Headphones", date: "18 July, 2024", rating: 5, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" },
  { id: 2, name: "Smart Watch", date: "15 July, 2024", rating: 4, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=100&h=100&fit=crop" },
  { id: 3, name: "Sneakers", date: "10 July, 2024", rating: 3, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop" },
];

const MyReviews = () => {
  return (
    <AccountLayout active="reviews" breadcrumb="My Reviews">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
        <h1 className="text-lg font-semibold mb-6">My Reviews</h1>

        <div className="flex flex-col gap-3">
          {REVIEWS.map((r) => (
            <div
              key={r.id}
              className="flex items-center justify-between flex-wrap gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <Image src={r.image} alt={r.name} className="w-14 h-14 rounded-xl object-cover border border-white/10" />
                <div>
                  <p className="font-semibold text-white">{r.name}</p>
                  <p className="text-gray-500 text-xs mt-1">Reviewed on {r.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-sm ${i < r.rating ? "text-amber-400" : "text-gray-700"}`} />
                  ))}
                </div>
                <button className="text-xs font-medium px-4 py-2 rounded-lg bg-purple-600/15 border border-purple-500/30 text-purple-400 hover:bg-purple-600/25 transition-all duration-300">
                  Edit Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AccountLayout>
  );
};

export default MyReviews;