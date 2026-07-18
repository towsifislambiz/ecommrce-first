import React, { useState } from "react";
import Image from "../../Components/Image";
import AccountLayout from "../../Components/Account/AccountLayout";

const TABS = ["Profile Information", "Change Password", "Email Preferences", "Privacy Settings"];

const AccountSettings = () => {
  const [tab, setTab] = useState("Profile Information");

  return (
    <AccountLayout active="settings" breadcrumb="Account Settings">
      {(user) => (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
          <h1 className="text-lg font-semibold mb-6">Account Settings</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Settings sub-nav */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    tab === t
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40"
                      : "text-gray-400 hover:bg-white/10"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {tab === "Profile Information" && (
                <ProfileForm user={user} />
              )}
              {tab === "Change Password" && <ChangePasswordForm />}
              {tab !== "Profile Information" && tab !== "Change Password" && (
                <div className="text-gray-500 text-sm py-10 text-center">
                  {tab} settings coming soon.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </AccountLayout>
  );
};

const Field = ({ label, ...props }) => (
  <div>
    <label className="block text-xs text-gray-400 mb-2">{label}</label>
    <input
      {...props}
      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
    />
  </div>
);

const ProfileForm = ({ user }) => {
  const [form, setForm] = useState({
    fullName: user?.displayName || "",
    email: user?.email || "",
    phone: "+880 1712-345678",
    dob: "",
  });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center gap-5">
        <Image
          src={
            user?.photoURL ||
            "https://ui-avatars.com/api/?name=" +
              encodeURIComponent(user?.displayName || "Guest") +
              "&background=7c3aed&color=fff"
          }
          alt="profile"
          className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/40"
        />
        <div>
          <p className="text-sm text-gray-400 mb-2">Profile Photo</p>
          <button
            type="button"
            className="text-xs font-medium px-4 py-2 rounded-lg bg-purple-600/15 border border-purple-500/30 text-purple-400 hover:bg-purple-600/25 transition-all duration-300"
          >
            Change Photo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Full Name"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
        <Field
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Field
          label="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <Field
          label="Date of Birth"
          type="date"
          value={form.dob}
          onChange={(e) => setForm({ ...form, dob: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="self-start bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-purple-900/40 hover:opacity-90 transition-all duration-300"
      >
        Save Changes
      </button>
    </form>
  );
};

const ChangePasswordForm = () => (
  <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5 max-w-md">
    <Field label="Current Password" type="password" placeholder="••••••••" />
    <Field label="New Password" type="password" placeholder="••••••••" />
    <Field label="Confirm New Password" type="password" placeholder="••••••••" />
    <button
      type="submit"
      className="self-start bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-purple-900/40 hover:opacity-90 transition-all duration-300"
    >
      Update Password
    </button>
  </form>
);

export default AccountSettings;