import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { navLinks } from "../../data/navLinks";

const MobileSideMenu = ({ isOpen, onClose, getNavIcon }) => {
  const location = useLocation();
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999999]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-[20rem] bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-2xl overflow-y-auto border-r border-white/20 dark:border-gray-700/20">
                  <div className="flex h-full flex-col">
                    <div className="sticky top-0 z-10 bg-white/95 dark:bg-gray-800/95 px-4 py-6 border-b border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <Link
                          to="/"
                          className="flex items-center space-x-3 group"
                          onClick={onClose}
                        >
                          <div className="relative w-9 h-9">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500 animate-pulse-slow" />
                            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-1.5 shadow-lg border border-white/20 dark:border-gray-700/20 group-hover:scale-105 group-hover:shadow-primary/25 transition-all duration-500">
                              <img
                                src="/logo.svg"
                                alt="HireUpp Logo"
                                className="w-full h-full object-contain drop-shadow-lg group-hover:rotate-[-8deg] transition-all duration-500"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-lg font-bold bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent group-hover:scale-105 transition-all duration-500">
                              HireUpp
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider group-hover:text-primary/80 transition-colors duration-300">
                              Find Your Dream Job
                            </span>
                          </div>
                        </Link>
                        <button
                          onClick={onClose}
                          className="relative p-2 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
                        >
                          <FaTimes className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                          <span className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col h-full">
                      <div className="flex-1 px-4 py-6 overflow-y-auto overscroll-contain">
                        {/* Nav Links */}
                        <div className="space-y-1.5">
                        {navLinks.map((link) => {
                          const isActive = location.pathname === link.path;
                          return (
                            <Link
                              key={link.path}
                              to={link.path}
                              onClick={onClose}
                              className={`relative flex items-center gap-3 px-4 py-3 text-sm font-medium group rounded-xl ${isActive ? "text-primary" : "text-gray-600 dark:text-gray-300"}`}
                            >
                              <span className="relative z-10 flex items-center gap-3 group-hover:text-primary transition-all duration-300">
                                <div className={`${isActive ? "text-primary" : "text-gray-400 dark:text-gray-500 group-hover:text-primary/60"} transition-colors duration-300`}>
                                  {getNavIcon(link.path)}
                                </div>
                                {link.label}
                              </span>
                              {/* Gradient background effect */}
                              <span className={`absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 via-primary/5 to-primary/5 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                              {/* Glowing border */}
                              <span className={`absolute inset-0 rounded-xl border transition-all duration-300 ${isActive ? 'border-primary/30 shadow-[0_2px_8px_rgba(59,130,246,0.15)] scale-105' : 'border-transparent group-hover:border-primary/20 group-hover:scale-105'}`} />
                            </Link>
                          );
                        })}
                        </div>
                      </div>

                      {/* User Profile */}
                      <div className="px-4 py-4 border-t border-gray-100 dark:border-gray-700 mt-auto bg-gradient-to-b from-transparent to-white/50 dark:to-gray-800/50">
                        <div className="flex items-center gap-3 p-2 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                              <FaUserCircle className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                              John Doe
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                              john.doe@example.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileSideMenu;
