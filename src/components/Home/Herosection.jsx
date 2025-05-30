import React from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import heroimg from "../../assets/heroimg.png";
import { motion } from "framer-motion";

const Herosection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const floatingAnimation = {
    y: [0, 20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
                >
                  Find <span className="text-primary">Exciting Jobs</span> Today.
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
                >
                  Discover amazing job opportunities around the world.
                  Accelerate your career and grow with leading companies.
                </motion.p>
              </div>
            </div>

            {/* Search Filters */}
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800/90 p-4 my-8 sm:p-5 rounded-2xl sm:rounded-3xl shadow-md max-w-3xl flex flex-col md:flex-row items-stretch gap-4 border border-gray-100 dark:border-gray-700"
            >
              {/* Location */}
              <div className="flex-1 relative md:border-r border-gray-200 md:pr-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full pl-10 py-2.5 text-base border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
              </div>
              {/* Job Type */}
              <div className="flex-1 relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Job Role
                </label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
                  <input
                    type="text"
                    placeholder="e.g. Web Developer"
                    className="w-full pl-10 py-2.5 text-base border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
              </div>

              {/* CTA Button */}
              <div className="md:self-end">
                <button className="w-full md:w-auto bg-gradient-to-r from-primary to-highlight hover:from-highlight hover:to-primary text-white font-semibold px-6 py-3 text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl animate-float">
                  Explore Now
                </button>
              </div>
            </motion.div>
            {/* Popular Searches */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm mt-6 text-gray-600 dark:text-gray-400"
            >
              <span className="font-medium text-primary dark:text-gray-200">
                Popular Searches:
              </span>
              {["Software Developer", "UX Designer", "Marketer"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:text-gray-300 hover:bg-primary/20 cursor-pointer transition-all duration-200 text-sm font-medium uppercase tracking-wider"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInScale}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-highlight/20 rounded-full blur-3xl animate-pulse delay-1000" />

              {/* Image Container with Dashed Border */}
              <div className="relative group p-6">
                {/* Dashed Border Container */}
                <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-[2rem]" />
                <div className="absolute inset-0 border-2 border-dashed border-highlight/30 rounded-[2rem]" />

                {/* Corner Decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg" />

                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-[2rem] bg-white p-1">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-highlight/50 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-[1.8rem]">
                    <img
                      src={heroimg}
                      alt="Professional team"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={floatingAnimation}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-xl shadow-lg transform rotate-12 border-2 border-dashed border-primary/30"
                >
                  <div className="w-full h-full flex items-center justify-center text-primary">
                    <FaSearch className="w-6 h-6" />
                  </div>
                </motion.div>
                <motion.div
                  animate={floatingAnimation}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-xl shadow-lg transform -rotate-12 border-2 border-dashed border-highlight/30"
                >
                  <div className="w-full h-full flex items-center justify-center text-highlight">
                    <FaMapMarkerAlt className="w-8 h-8" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
