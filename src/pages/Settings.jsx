import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import DeleteAccountModal from "../components/Modal/DeleteAccountModal";
import {
  FaUser,
  FaLock,
  FaBell,
  FaShieldAlt,
  FaGlobe,
  FaSignOutAlt,
  FaChevronRight,
  FaBriefcase,
  FaPalette,
  FaDatabase,
  FaDownload,
  FaTrash,
  FaSave,
} from "react-icons/fa";

const Settings = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleDeleteAccount = () => {
    logout();
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 lg:px-8 py-24">
        <div className="relative bg-white/90 dark:bg-gray-900/80 rounded-2xl sm:rounded-3xl shadow-xl shadow-primary/5 dark:shadow-primary/10 p-3 sm:p-6 lg:p-8 backdrop-blur-lg border border-primary/10 hover:border-primary/20 transition-all duration-500">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm sm:text-base">Manage your account settings and preferences</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base bg-gradient-to-r from-primary via-primary to-primary text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]">
                <FaSave className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

          {/* Settings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Job Preferences */}
            <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-primary/10 dark:border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 sm:p-6">
                <h2 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  <FaBriefcase className="text-primary" />
                  Job Preferences
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-200">Job Alerts</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:via-primary peer-checked:to-primary hover:shadow-sm"></div>
                    </label>
                  </div>
                  <button className="w-full flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/90 hover:bg-gray-50 dark:hover:bg-gray-700/90 border border-gray-100 dark:border-gray-800 group transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-200">Salary Range</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">$50k - $100k</span>
                      <FaChevronRight className="text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/90 hover:bg-gray-50 dark:hover:bg-gray-700/90 border border-gray-100 dark:border-gray-800 group transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-200">Job Type</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Full-time</span>
                      <FaChevronRight className="text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                </div>
              </div>
            </section>
            {/* Account Settings */}
            <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-primary/10 dark:border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 sm:p-6">
                <h2 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  <FaUser className="text-primary" />
                  Account Settings
                </h2>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/90 hover:bg-gray-50 dark:hover:bg-gray-700/90 border border-gray-100 dark:border-gray-800 group transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-200">Edit Profile</div>
                    </div>
                    <FaChevronRight className="text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/90 hover:bg-gray-50 dark:hover:bg-gray-700/90 border border-gray-100 dark:border-gray-800 group transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-200">Language & Region</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">English (US)</span>
                      <FaChevronRight className="text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-primary/10 dark:border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 sm:p-6">
                <h2 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  <FaLock className="text-primary" />
                  Security
                </h2>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/90 hover:bg-gray-50 dark:hover:bg-gray-700/90 border border-gray-100 dark:border-gray-800 group transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-200">Change Password</div>
                    </div>
                    <FaChevronRight className="text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/90 hover:bg-gray-50 dark:hover:bg-gray-700/90 border border-gray-100 dark:border-gray-800 group transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-200">Two-Factor Authentication</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-primary">Enabled</span>
                      <FaChevronRight className="text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-primary/10 dark:border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 sm:p-6">
                <h2 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  <FaBell className="text-primary" />
                  Notifications
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-200">Email Notifications</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:via-primary peer-checked:to-primary hover:shadow-sm"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-200">Push Notifications</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:via-primary peer-checked:to-primary hover:shadow-sm"></div>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Privacy */}
            <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-primary/10 dark:border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-4 sm:p-6">
                <h2 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  <FaShieldAlt className="text-primary" />
                  Privacy
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-200">Profile Visibility</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Public</span>
                      <FaGlobe className="text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-200">Dark Mode</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:via-primary peer-checked:to-primary hover:shadow-sm"></div>
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Appearance */}
          <section className="col-span-1 md:col-span-2 my-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-100/50 dark:border-gray-700/50 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <h2 className="flex items-center gap-3 text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <FaPalette className="text-primary" />
                Appearance
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <div className="text-gray-700 dark:text-gray-200">Theme Color</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary cursor-pointer hover:ring-2 ring-primary/30 transition-all"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <div className="text-gray-700 dark:text-gray-200">Font Size</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Medium</span>
                    <FaChevronRight className="text-gray-400" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <div className="text-gray-700 dark:text-gray-200">Compact Mode</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Data Management */}
          <section className="col-span-1 md:col-span-2 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-100/50 dark:border-gray-700/50 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <h2 className="flex items-center gap-3 text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <FaDatabase className="text-primary" />
                Data Management
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <button className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-gray-800/90 hover:bg-gray-50 dark:hover:bg-gray-700/90 border border-gray-100 dark:border-gray-700 group transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <FaDownload className="text-gray-400 group-hover:text-primary transition-colors" />
                    <div className="text-gray-700 dark:text-gray-200">Export Data</div>
                  </div>
                  <FaChevronRight className="text-gray-400 group-hover:text-primary transition-colors" />
                </button>
                <button
                  onClick={()=>setShowDeleteModal(true)}
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-gray-800/90 hover:bg-gray-50 dark:hover:bg-gray-700/90 border border-gray-100 dark:border-gray-700 group transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <FaTrash className="text-red-400 group-hover:text-red-500 transition-colors" />
                    <div className="text-red-600">Delete Account</div>
                  </div>
                  <FaChevronRight className="text-red-400 group-hover:text-red-500 transition-colors" />
                </button>
              </div>
            </div>
          </section>

          {/* Logout Button */}
          <div className="mt-6 sm:mt-8 flex justify-end">
            <button className="flex items-center gap-2 w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 rounded-lg sm:rounded-xl transition-all duration-300 justify-center sm:justify-start hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/10">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
          <DeleteAccountModal  isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} onConfirm={handleDeleteAccount} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
