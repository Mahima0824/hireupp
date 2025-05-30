import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { Menu, Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaBars,
  FaHome,
  FaBriefcase,
  FaBuilding,
  FaInfoCircle,
  FaSignInAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { navLinks, userMenuItems } from "../data/navLinks";
import NotificationModal from "../components/Modal/Notification";
import MobileSideMenu from "../components/Modal/MobileSideMenu";
import logo from "../assets/logo.svg"

const Navbar = () => {
  const { toggleDarkMode } = useTheme();

  const hoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const { darkMode } = useTheme();
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    {
      id: 1,
      type: "view",
      company: "Google",
      position: "Frontend Developer",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "shortlist",
      company: "Microsoft",
      position: "UI/UX Designer",
      time: "5 hours ago",
      read: true,
    },
    {
      id: 3,
      type: "pending",
      company: "Apple",
      position: "React Developer",
      time: "1 day ago",
      read: false,
    },
  ]);

  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  useEffect(() => {
    let isMounted = true;
    const handleScroll = () => {
      if (isMounted) setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      isMounted = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const getNavIcon = (path) => {
    switch (path) {
      case "/":
        return <FaHome className="w-4 h-4" />;
      case "/jobs":
        return <FaBriefcase className="w-4 h-4" />;
      case "/companies":
        return <FaBuilding className="w-4 h-4" />;
      case "/about":
        return <FaInfoCircle className="w-4 h-4" />;
      default:
        return <FaSignInAlt className="w-4 h-4" />;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="w-full  bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <motion.div
                variants={hoverVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="relative w-10 h-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500 animate-pulse-slow" />
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-1.5 shadow-lg border border-white/20 dark:border-gray-700/20 group-hover:scale-105 group-hover:shadow-primary/25 transition-all duration-500">
                  <img
                    src={logo}
                    alt="HireUpp Logo"
                    className="w-full h-full object-contain drop-shadow-lg transition-transform duration-500 hover:rotate-[-8deg]"
                  />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:scale-105 transition-all duration-500">
                  HireUpp
                </span>
                <span className="hidden xs:block text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider group-hover:text-primary/80 transition-colors duration-300">
                  Find Your Dream Job
                </span>
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center space-x-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <div
                      key={link.path}
                      className="relative hover:scale-105 transition-transform duration-200"
                    >
                      <Link
                        to={link.path}
                        className={`relative px-4 py-2.5 text-sm font-medium rounded-xl flex items-center gap-2 transition-all duration-300 ${
                          isActive
                            ? "text-primary dark:text-white"
                            : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                        }`}
                      >
                        <span
                          className={`${
                            isActive
                              ? "text-primary dark:text-white"
                              : "text-gray-400 group-hover:text-primary dark:group-hover:text-white"
                          } transition-colors duration-300`}
                        >
                          {getNavIcon(link.path)}
                        </span>
                        {link.label}
                        {/* Background effect */}
                        <span
                          className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                            isActive
                              ? "bg-primary/10 dark:bg-primary/20"
                              : "hover:bg-primary/5 dark:hover:bg-primary/10"
                          }`}
                        />
                        {/* Active indicator */}
                        {isActive && (
                          <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-primary rounded-full transition-all duration-300" />
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Icons and Menu */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                {user ? (
                  <>
                    <div className="relative hidden sm:block">
                      <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30 group relative"
                        aria-label="Toggle dark mode"
                      >
                        {darkMode ? (
                          <FaMoon className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
                        ) : (
                          <FaSun className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
                        )}
                      </button>
                    </div>
                    {/* Notification */}
                    <div className="relative hidden sm:block">
                      <motion.button
                        variants={hoverVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="p-2 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30 group relative"
                      >
                        <FaBell className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
                        <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-float shadow-lg shadow-primary/20 ring-2 ring-white">
                          {notifications.filter((n) => !n.read).length}
                        </span>
                      </motion.button>

                      {/* Notification Modal */}
                      <NotificationModal
                        isOpen={showNotifications}
                        onClose={() => setShowNotifications(false)}
                        notifications={notifications}
                      />
                    </div>

                    {/* Account Dropdown */}
                    <Menu as="div" className="relative">
                      <motion.div
                        variants={hoverVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Menu.Button className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium bg-primary/5 dark:text-white dark:hover:bg-gray-800/10 text-gray-600 hover:text-primary transition-all duration-300 border border-primary/10 hover:border-primary/30 group">
                          <FaUserCircle className="w-5 h-5" />
                          <span>{user.name}</span>
                        </Menu.Button>
                      </motion.div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-[100] mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-700 focus:outline-none">
                          <div className="px-1 py-2">
                            <div className="px-2 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              Signed in as
                            </div>
                            <div className="px-2 mb-2">
                              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                {user.email}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                View Profile
                              </p>
                            </div>
                          </div>

                          <div className="py-1">
                            {userMenuItems.map((item) => (
                              <Menu.Item key={item.path}>
                                {({ active }) => (
                                  <Link
                                    to={item.path}
                                    className={`flex items-center gap-3 w-full px-4 py-2 text-sm transition-colors ${
                                      active
                                        ? "bg-primary/10 text-primary"
                                        : "text-gray-700 dark:text-gray-200"
                                    }`}
                                  >
                                    <span className="w-5 h-5 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:text-primary">
                                      {item.icon ? (
                                        <item.icon />
                                      ) : (
                                        <FaUserCircle />
                                      )}
                                    </span>
                                    <span>{item.label}</span>
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </div>

                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={logout}
                                  className={`flex items-center gap-3 w-full px-4 py-2 text-sm transition-colors ${
                                    active
                                      ? "bg-error/10 text-error"
                                      : "text-gray-700 dark:text-gray-200"
                                  }`}
                                >
                                  <span className="w-5 h-5 flex items-center justify-center text-gray-400">
                                    <FaSignInAlt />
                                  </span>
                                  <span>Sign Out</span>
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <div>
                      <Link
                        to="/login"
                        className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300 rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10"
                      >
                        Login
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/register"
                        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary via-primary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-xl transition-all duration-500 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                )}

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="md:hidden relative p-2 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  <FaBars className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                  <span className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <MobileSideMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        getNavIcon={getNavIcon}
      />
    </>
  );
};

export default Navbar;
