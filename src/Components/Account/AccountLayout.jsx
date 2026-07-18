import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Container from "../Container";
import Subnav from "../../layouts/Subnav";
import Wnavber from "../../Layout2/Wnavber";
import Footer from "../../layouts/Footer";
import AccountSidebar from "./AccountSidebar";
import LogoutModal from "./LogoutModal";

/**
 * Shared shell for every /account/* page: keeps the Firebase auth + logout
 * logic in one place instead of duplicated on every page, plus the
 * breadcrumb, sidebar, and footer.
 *
 * Usage:
 *   <AccountLayout active="orders" breadcrumb="My Orders">
 *     {(user) => ( ...page content, can use `user`... )}
 *   </AccountLayout>
 */
const AccountLayout = ({ active, breadcrumb, children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

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

  return (
    <>
      <Subnav />
      <Wnavber />

      <div className="bg-[#0b0b17] pt-20 pb-10">
        <Container>
          <div className="text-sm text-gray-400">
            Home <span className="mx-1">/</span>{" "}
            <span className="text-purple-400">{breadcrumb || "My Account"}</span>
          </div>
        </Container>
      </div>

      <div className="min-h-screen bg-[#0b0b17] text-white py-8">
        <Container>
          <div className="flex flex-col lg:flex-row gap-6">
            <AccountSidebar
              active={active}
              user={user}
              onLogout={() => setShowLogoutModal(true)}
            />
            <main className="flex-1 flex flex-col gap-6">
              {typeof children === "function" ? children(user) : children}
            </main>
          </div>

          <LogoutModal
            open={showLogoutModal}
            onCancel={() => setShowLogoutModal(false)}
            onConfirm={handleLogout}
          />
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default AccountLayout;