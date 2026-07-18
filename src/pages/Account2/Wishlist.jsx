import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "../../Components/Image";
import AccountLayout from "../../Components/Account/AccountLayout";
import { FaHeart, FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.Wish.value);
  const dispatch = useDispatch();

  return (
    <AccountLayout active="wishlist" breadcrumb="Wishlist">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-semibold">
            My Wishlist <span className="text-gray-500 font-normal">({wishlistItems.length})</span>
          </h1>
          {wishlistItems.length > 0 && (
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg shadow-purple-900/40 hover:opacity-90 transition-all duration-300">
              Move All to Cart
            </button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <FaHeart className="text-4xl mx-auto mb-4 text-gray-700" />
            Your wishlist is empty. Start adding products you love.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {wishlistItems.map((item, idx) => (
              <div
                key={item.id || idx}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-3 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 group"
              >
                <button className="absolute top-5 right-5 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-pink-400 hover:text-pink-300 transition-colors">
                  <FaHeart className="text-sm" />
                </button>
                <div className="rounded-xl overflow-hidden bg-white/5 aspect-square mb-3">
                  <Image
                    src={item.image || item.img}
                    alt={item.name || item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="font-medium text-white text-sm truncate">{item.name || item.title}</p>
                <p className="text-purple-400 font-bold mt-1">${item.price}</p>
                <div className="flex items-center gap-1 mt-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xs ${i < (item.rating || 4) ? "text-amber-400" : "text-gray-700"}`}
                    />
                  ))}
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold py-2.5 rounded-xl shadow-lg shadow-purple-900/30 hover:opacity-90 transition-all duration-300">
                  <HiOutlineShoppingCart /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </AccountLayout>
  );
};

export default Wishlist;