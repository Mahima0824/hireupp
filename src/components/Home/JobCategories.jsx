import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const JobCategories = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const buttonRef = useRef(null);
  const isButtonInView = useInView(buttonRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-transparent dark:via-transparent dark:to-transparent relative z-10 overflow-hidden transition-colors duration-500"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-highlight/5 dark:bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 relative">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            Explore{" "}
            <motion.span
              className="text-primary inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            >
              Job Categories
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-gray-500 dark:text-gray-400 mt-3 text-lg max-w-2xl mx-auto"
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } },
            }}
          >
            Choose a category and find your next opportunity. Discover roles that match your skills and aspirations.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative category-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={index}
            >
              <div
                className={`relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-${category.hoverText}/20 border border-gray-200/50 dark:border-gray-700/50 hover:${category.borderColor}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-5">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${category.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                  >
                    <div className="transform group-hover:rotate-[8deg] transition-transform duration-500">
                      {category.icon}
                    </div>
                  </div>
                  <div
                    className={`absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 ${category.borderColor} rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  />
                </div>

                {/* Title and Details */}
                <div className="relative">
                  <h3
                    className={`text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:${category.hoverText} transition-colors duration-300 line-clamp-2 mb-2`}
                  >
                    {category.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {category.jobs} Jobs
                    </p>
                    <span
                      className={`${category.hoverText} opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500`}
                    >
                      →
                    </span>
                  </div>
                </div>

                {/* Hover Border */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-dashed border-transparent group-hover:${category.borderColor} transition-all duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          ref={buttonRef}
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isButtonInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Link to="/jobs">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-highlight text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
              View All Categories
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default JobCategories;
