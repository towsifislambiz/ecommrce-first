import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Container from "../Components/Container";
import Button from "../Components/Button";
import Image from "../Components/Image";
import Subnav from "../layouts/Subnav";
import Wnavber from "../Layout2/Wnavber";
import Footer from "../layouts/Footer";
import { useNavigate } from "react-router-dom";

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
  FaChevronRight,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaRegCalendarAlt,
  FaRegCreditCard,
  FaCrown,
} from "react-icons/fa";
import {
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineTag,
} from "react-icons/hi";
import { useSelector } from "react-redux";


const Account = () => {
  const cartItems = useSelector((state) => state.Cart.value);
const wishlistItems = useSelector((state) => state.Wish.value);
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // ---- Firebase Auth logic (unchanged) ----
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
};

  const sidebarItems = [
    { label: "Dashboard", icon: <FaHome />, active: true },
    { label: "My Orders", icon: <FaShoppingBag /> },
    { label: "Wishlist", icon: <FaHeart /> },
    { label: "Address Book", icon: <FaMapMarkerAlt /> },
    { label: "Payment Methods", icon: <FaCreditCard /> },
    { label: "Account Settings", icon: <FaCog /> },
    { label: "Notifications", icon: <FaBell /> },
    { label: "Help Center", icon: <FaQuestionCircle /> },
  ];

  const stats = [
    {
      title: "Total Orders",
      value: 12,
      icon: <HiOutlineShoppingBag className="text-white text-2xl" />,
      gradient: "from-purple-600 to-indigo-600",
      line: "stroke-purple-400",
    },
    {
      title: "Wishlist",
      value: wishlistItems.length,
      icon: <HiOutlineHeart className="text-white text-2xl" />,
      gradient: "from-pink-600 to-rose-600",
      line: "stroke-pink-400",
    },
    {
      title: "Cart Items",
      value: cartItems.length,
      icon: <HiOutlineShoppingCart className="text-white text-2xl" />,
      gradient: "from-blue-600 to-indigo-600",
      line: "stroke-blue-400",
    },
    {
      title: "Coupons",
      value: 5,
      icon: <HiOutlineTag className="text-white text-2xl" />,
      gradient: "from-orange-500 to-amber-500",
      line: "stroke-orange-400",
    },
  ];

  const recentOrders = [
    {
      id: "#12054",
      date: "16 July 2026",
      status: "Delivered",
      price: "$120.00",
      statusColor:
        "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=100&h=100&fit=crop",
    },
    {
      id: "#12055",
      date: "15 July 2026",
      status: "Pending",
      price: "$85.00",
      statusColor:
        "bg-amber-500/15 text-amber-400 border border-amber-500/30",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
    },
    {
      id: "#12056",
      date: "14 July 2026",
      status: "Shipped",
      price: "$60.00",
      statusColor: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop",
    },
  ];

  const accountDetails = [
    { label: "Email", value: user?.email || "N/A", icon: <FaEnvelope /> },
    { label: "Phone", value: "+880 1712 345 678", icon: <FaPhoneAlt /> },
    { label: "Country", value: "Bangladesh", icon: <FaGlobe /> },
    { label: "Member Since", value: "16 July 2026", icon: <FaRegCalendarAlt /> },
    { label: "Payment Method", value: "Visa **** 4242", icon: <FaRegCreditCard /> },
  ];

  return (
    <>
      <Subnav />
      <Wnavber />

      {/* activeuser breadcrumb (unchanged logic, restyled) */}
      <div className="bg-[#0b0b17] pt-20 pb-10 ">
        <Container>
          <div className="text-sm text-gray-400">
            Home <span className="mx-1">/</span>{" "}
            <span className="text-purple-400">
              {user?.displayName || "My Account"}
            </span>
          </div>
        </Container>
      </div>

      <div className="min-h-screen bg-[#0b0b17] text-white py-8">
        <Container>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* ================= LEFT SIDEBAR ================= */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl shadow-purple-900/20 sticky top-6">
                <div className="flex items-center gap-3 px-3 py-3 mb-2 border-b border-white/10">
                  <div className="w-9 h-9 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 border border-purple-500/30">
                    <FaHome className="text-sm" />
                  </div>
                  <span className="font-semibold text-gray-200">My Account</span>
                </div>

                <nav className="mt-2 flex flex-col gap-1">
                  {sidebarItems.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 group ${
                        item.active
                          ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40"
                          : "text-gray-300 hover:bg-white/10 hover:translate-x-1"
                      }`}
                    >
                      <span
                        className={`text-base ${
                          item.active
                            ? "text-white"
                            : "text-gray-400 group-hover:text-purple-400"
                        }`}
                      >
                        {item.icon}
                      </span>
                      {item.label}
                    </button>
                  ))}

                  <div className="border-t border-white/10 my-2" />

                  <button
                    type="button"
                     onClick={() => setShowLogoutModal(true)}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all duration-300"
                  >
                    <FaSignOutAlt className="text-base" />
                    Logout
                  </button>
                </nav>
              </div>
            </aside>

            {/* ================= RIGHT CONTENT ================= */}
            <main className="flex-1 flex flex-col gap-6">
              {/* ---- Header ---- */}
              <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 via-indigo-900/20 to-transparent border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="text-purple-400 font-medium mb-1">Welcome back,</p>
                    <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
                      {user?.displayName || "Guest"}
                      <span className="inline-block">👋</span>
                    </h1>
                  </div>

                  <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 shadow-xl">
                    <Image
                      src={
                        user?.photoURL ||
                        "https://ui-avatars.com/api/?name=" +
                          encodeURIComponent(user?.displayName || "Guest") +
                          "&background=7c3aed&color=fff"
                      }
                      alt="profile"
                      className="w-14 h-14 rounded-full object-cover border-2 border-purple-500/40"
                    />
                    <div>
                      <p className="font-semibold text-white">
                        {user?.displayName || "Guest"}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1 rounded-full mt-1 font-medium">
                        Premium Member <FaCrown className="text-yellow-300 text-xs" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---- Stats Cards ---- */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg mb-4`}
                    >
                      {stat.icon}
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold mb-3">{stat.value}</p>
                    <svg viewBox="0 0 120 30" className="w-full h-6">
                      <path
                        d="M0 15 Q10 5, 20 15 T40 15 T60 15 T80 15 T100 15 T120 15"
                        fill="none"
                        className={stat.line}
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              {/* ---- Recent Orders + Account Details ---- */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Recent Orders */}
                <div className="xl:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg font-semibold">Recent Orders</h2>
                    <Button className="!bg-transparent !shadow-none !p-0 text-purple-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300">
                      View All <FaChevronRight className="text-xs" />
                    </Button>
                  </div>

                  <div className="flex flex-col gap-3">
                    {recentOrders.map((order, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-center gap-4">
                          <Image
                            src={order.image}
                            alt={order.id}
                            className="w-14 h-14 rounded-xl object-cover border border-white/10"
                          />
                          <div>
                            <p className="font-semibold text-white">
                              Order {order.id}
                            </p>
                            <p className="text-gray-400 text-sm">{order.date}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <span
                            className={`text-xs font-medium px-3 py-1 rounded-full ${order.statusColor}`}
                          >
                            {order.status}
                          </span>
                          <span className="font-bold text-white w-16 text-right">
                            {order.price}
                          </span>
                          <FaChevronRight className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Account Details */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
                  <h2 className="text-lg font-semibold mb-5">Account Details</h2>
                  <div className="flex flex-col divide-y divide-white/10">
                    {accountDetails.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-purple-400">
                            {detail.icon}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {detail.label}
                          </span>
                        </div>
                        <span className="font-medium text-white text-sm text-right">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>

          {showLogoutModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
    <div className="w-[90%] max-w-md rounded-3xl border border-white/10 bg-[#161622] p-8 shadow-2xl">

      <div className="flex justify-center mb-5">
        <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center">
          <FaSignOutAlt className="text-red-500 text-4xl" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center text-white">
        Confirm Logout
      </h2>

      <p className="text-center text-gray-400 mt-3">
        Are you sure you want to logout from your account?
      </p>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setShowLogoutModal(false)}
          className="flex-1 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
        >
          No
        </button>

        <button
          onClick={handleLogout}
          className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold"
        >
          Yes, Logout
        </button>
      </div>
    </div>
  </div>
)}
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Account;