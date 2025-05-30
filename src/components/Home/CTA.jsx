import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaRocket,
  FaChartLine,
  FaUserTie,
  FaHandshake,
  FaLightbulb,
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaApple,
} from "react-icons/fa";

const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const leftContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1 }
    })
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const successIconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, delay: 0.8 } }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 }
    })
  };

  const trustBadgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 }
    })
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-transparent dark:via-transparent dark:to-transparent transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10  via-white to-highlight/10 dark:hidden" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-highlight/5 dark:bg-highlight/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={leftContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center lg:text-left"
          >
            {/* Decorative Elements */}

            <span className="cta-badge inline-block px-3 sm:px-4 py-1.5 dark:text-white rounded-full bg-primary/10 dark:bg-primary/10 text-primary font-medium text-xs sm:text-sm mb-3 sm:mb-4">
              Get Started Today
            </span>
            <h2 className="cta-title text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Ready to Find Your <span className="text-primary">Dream Job</span>?
            </h2>
            <p className="cta-description text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
              Join thousands of professionals who have already discovered their
              perfect career match. Start your journey today!
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              {[
                { icon: <FaChartLine />, text: "AI-powered job matching" },
                { icon: <FaUserTie />, text: "Instant application process" },
                { icon: <FaHandshake />, text: "Career growth opportunities" },
                { icon: <FaLightbulb />, text: "Expert career guidance" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="group flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/50 dark:border-gray-700/50 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-100/50 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 dark:bg-gray-700 dark:text-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 text-sm sm:text-base">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors duration-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-highlight text-white text-sm sm:text-base font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 w-full sm:w-auto justify-center">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Now
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Button Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-highlight to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 text-primary rounded-xl text-sm sm:text-base font-semibold border-2 border-primary/20 hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            variants={rightContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Decorative Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-highlight rounded-2xl blur-sm opacity-20" />

            <div className="relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100/50 dark:border-gray-700/50">
              {/* Success Rate Header */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-highlight rounded-full blur-lg opacity-20 animate-pulse" />
                  <motion.div
                    variants={successIconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="success-icon relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-highlight rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  >
                    <FaRocket className="text-white text-2xl transform group-hover:scale-110 transition-transform duration-500" />
                  </motion.div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Success Rate
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Our platform's success metrics</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    number: "95%",
                    label: "Job Match Rate",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    number: "85%",
                    label: "Interview Success",
                    color: "from-blue-500 to-indigo-500",
                  },
                  {
                    number: "90%",
                    label: "User Satisfaction",
                    color: "from-purple-500 to-violet-500",
                  },
                  {
                    number: "80%",
                    label: "Career Growth",
                    color: "from-pink-500 to-rose-500",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={statVariants}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-highlight/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-4 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-100/50 dark:border-gray-700/50 group-hover:border-primary/20 transition-all duration-300">
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-gray-100/50 dark:border-gray-700/50">
                <div className="text-center space-y-2 mb-8">
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">
                    Trusted by leading companies
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Join the ranks of industry leaders who trust our platform
                  </p>
                </div>
                <div className="trust-badges flex flex-wrap justify-center gap-3 sm:gap-6">
                  {[
                    { icon: <FaGoogle />, name: "Google", color: "text-[#4285F4]" },
                    { icon: <FaAmazon />, name: "Amazon", color: "text-[#FF9900]" },
                    { icon: <FaMicrosoft />, name: "Microsoft", color: "text-[#00A4EF]" },
                    { icon: <FaApple />, name: "Apple", color: "text-gray-800 dark:text-gray-200" },
                  ].map((company, index) => (
                    <motion.div
                      key={index}
                      variants={trustBadgeVariants}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      className="trust-badge group"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800/90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100/20 dark:border-gray-700/30">
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        
                        {/* Content */}
                        <div className="relative h-full flex flex-col items-center justify-center gap-2 p-3">
                          <div className={`text-2xl sm:text-3xl ${company.color} group-hover:scale-110 transition-all duration-300`}>
                            {company.icon}
                          </div>
                          <div className="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors duration-300">
                            {company.name}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;
