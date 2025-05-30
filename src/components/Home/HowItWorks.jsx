import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { steps } from "../../data/categories";

const HowItWorks = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-transparent dark:via-transparent dark:to-transparent relative overflow-hidden transition-colors duration-500">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-highlight/5 dark:bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-20 relative"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 dark:text-white rounded-full bg-primary/10 dark:bg-primary/10 text-primary font-medium text-sm mb-4"
          >
            Simple Process
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            How It <span className="text-primary">Works</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4"
          >
            Your journey to finding the perfect job in just four simple steps
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8 relative"
          >
            {/* Decorative Line */}
            <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-highlight/20 to-primary/20" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="relative group step-item"
              >
                <div className="flex gap-6">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 relative`}
                    >
                      {step.icon}
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r ${step.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-md">
                      <span className="text-primary font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-white/80 dark:bg-gray-800/90 dark:border-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:translate-x-2 border border-gray-100/50 relative overflow-hidden">
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <h3 className="text-lg sm:text-xl font-semibold dark:text-white text-gray-800 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Decorative Corner */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Image Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  className="group relative image-item"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-500">
                    {/* Image Container */}
                    <div className="relative w-full h-full">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="absolute inset-0 p-3 sm:p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div
                          className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white flex items-center justify-center mb-2 sm:mb-4 shadow-lg`}
                        >
                          {step.icon}
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}{" "}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500 border border-gray-100/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-highlight">5K+</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Companies
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Trusted Partners
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-20 text-center"
      >
        <button className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-highlight text-white text-sm sm:text-base font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
          <span className="relative z-10 flex items-center gap-2">
            Get Started Now
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          {/* Button Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
