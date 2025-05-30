import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaShieldAlt,
  FaUserShield,
  FaCookieBite,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"


const Footer = () => {
  const { darkMode } = useTheme();
  return (
    <footer className="relative bg-gradient-to-br from-white via-gray-50/50 to-gray-100/30 dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-900 text-gray-600 dark:text-gray-400 overflow-hidden backdrop-blur-sm border-t border-gray-200/30 dark:border-gray-800/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/5 to-highlight/5 dark:hidden  rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-gradient-to-tr from-highlight/5 to-primary/5 dark:bg-highlight/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-tl from-primary/5 to-highlight/5 dark:bg-primary/5  rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500 animate-pulse-slow" />
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-1.5 shadow-lg border border-white/20 dark:border-gray-700/20 group-hover:scale-105 group-hover:shadow-primary/25 transition-all duration-500">
                  <img
                    src={logo}
                    alt="HireUpp Logo"
                    className="w-full h-full object-contain drop-shadow-lg group-hover:rotate-[-8deg] transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-primary to-highlight bg-clip-text text-transparent group-hover:scale-105 transition-all duration-500">
                  HireUpp
                </span>
                <span className="hidden xs:block text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider group-hover:text-primary/80 transition-colors duration-300">
                  Find Your Dream Job
                </span>
              </div>
            </Link>
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Connecting talented professionals with their dream careers. Your
              journey to success starts here.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: FaFacebook,
                  color: "hover:text-blue-600",
                  label: "Facebook",
                },
                {
                  icon: FaTwitter,
                  color: "hover:text-sky-500",
                  label: "Twitter",
                },
                {
                  icon: FaLinkedin,
                  color: "hover:text-blue-700",
                  label: "LinkedIn",
                },
                {
                  icon: FaInstagram,
                  color: "hover:text-pink-600",
                  label: "Instagram",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`relative group ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-highlight/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <div className="relative w-10 h-10 flex items-center justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                    <social.icon className="text-xl transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-highlight rounded-full" />
            </h3>
            <ul className="space-y-4">
              {[
                "Find Jobs",
                "Search Companies",
                "Career Advice",
                "Resume Tips",
                "Interview Guide",
                "Success Stories",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-all duration-300"
                  >
                    <FaArrowRight className="text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="relative">
                      {link}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-6 relative inline-block">
              Resources
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-highlight rounded-full" />
            </h3>
            <ul className="space-y-4">
              {[
                "Help Center",
                "Community",
                "Blog",
                "Webinars",
                "Learning Resources",
                "Career Development",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-all duration-300"
                  >
                    <FaArrowRight className="text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="relative">
                      {link}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-6 relative inline-block">
                Contact Us
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-highlight rounded-full" />
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: FaMapMarkerAlt, text: "123 Job Street, Career City" },
                  { icon: FaPhone, text: "+1 (555) 123-4567" },
                  { icon: FaEnvelope, text: "support@jobportal.com" },
                ].map((item, index) => (
                  <li key={index} className="group">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur group-hover:bg-primary/20 transition-all duration-300" />
                        <div className="relative w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-primary/10 flex items-center justify-center group-hover:border-primary/20 transition-all duration-300">
                          <item.icon className="text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-4 relative inline-block">
                Newsletter
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-highlight rounded-full" />
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Subscribe to get job alerts and career tips
              </p>
              <form className="space-y-3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-highlight/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="relative w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full px-4 py-3 bg-gradient-to-r from-primary via-primary to-highlight text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-white/90 group-hover:text-white">
                    Subscribe
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-highlight via-primary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-200/30 dark:border-gray-800/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-highlight/5 dark:from-primary/10 dark:to-highlight/10" />
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} HireUpp. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { text: "Privacy Policy", icon: FaShieldAlt },
                { text: "Terms of Service", icon: FaUserShield },
                { text: "Cookie Policy", icon: FaCookieBite },
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary text-sm transition-all duration-300"
                >
                  <link.icon className="text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="relative">
                    {link.text}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
