import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Loader from "../components/Loader/Loader";
import LocomotiveScroll from 'locomotive-scroll';


const Layout = ({ children }) => {
  const locomotiveScroll = new LocomotiveScroll();

  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ScrollToTop />
          {!isAuthPage && <Navbar />}
          <main className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900/90 dark:via-gray-900/90 dark:to-gray-900/90 backdrop-blur-sm relative overflow-hidden min-h-screen transition-colors duration-500">
            {children}
          </main>
          {!isAuthPage && <Footer />}
        </>
      )}
    </div>
  );
};

export default Layout;
