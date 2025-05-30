import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaGithub,
  FaUserPlus,
  FaSignInAlt,
  FaKey,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/logo.svg"

const Login = () => {
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("password");
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="relative max-w-lg w-full space-y-6 sm:space-y-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-4 sm:p-8 rounded-xl sm:rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_8px_32px_rgba(37,99,235,0.25)]">
        {/* Card decoration */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="relative w-24 h-24 mx-auto group">
            <div className="relative bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/20 dark:border-gray-600/20 group-hover:scale-105 group-hover:shadow-primary/25 transition-all duration-500">
              <img
                className="w-full h-full object-contain animate-float drop-shadow-xl"
                src={Logo}
                alt="HireUpp Logo"
              />
            </div>
          </div>
          <h2 className="mt-8 text-center">
            <span className="flex items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Welcome back!{" "}
              <FaSignInAlt className="w-8 h-8 text-gray-900 dark:text-white animate-bounce-subtle" />
            </span>
          </h2>
          <p className="mt-3 text-center text-sm text-gray-500 tracking-wide">
            Or{" "}
            <Link
              to="/register"
              className="relative z-10 inline-flex items-center gap-1.5 font-medium text-primary hover:text-primary/80 bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FaUserPlus className="w-4 h-4" />
              <span>create a new account</span>
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 ml-1"
              >
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none relative block w-full px-4 py-3 pl-11 bg-white/50 dark:bg-gray-900/50  border border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:border-primary hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-4 py-3 pl-11 bg-white/50 dark:bg-gray-900/50  border border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:border-primary hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mt-6">
            <label className="relative flex items-center cursor-pointer group">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-2 focus:ring-primary/20 border-gray-200 rounded transition-all duration-300 cursor-pointer hover:border-primary"
              />
              <span className="ml-2 text-sm text-gray-900 dark:text-gray-300 group-hover:text-primary/80 transition-colors duration-300">
                Remember me
              </span>
            </label>

            <button
              type="button"
              className="text-sm font-medium text-primary hover:text-primary/80 bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => alert("Forgot password clicked!")}
            >
              <span className="inline-flex items-center gap-1.5">
                <FaKey className="w-3.5 h-3.5" />
                <span>Forgot password?</span>
              </span>
            </button>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-primary via-primary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center gap-2">
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <FaSignInAlt className="w-4 h-4" />
                    Sign in
                  </>
                )}
              </span>
            </button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-500 dark:text-gray-400 rounded-full">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:border-primary/30 hover:text-primary transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <FaGoogle className="h-5 w-5 text-red-500" />
              </button>

              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:border-primary/30 hover:text-primary transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <FaGithub className="h-5 w-5 text-gray-900 dark:text-white" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
