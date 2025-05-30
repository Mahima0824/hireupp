import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
      <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md"></div>
      <div className="relative">
        {/* Outer circle with gradient */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-36 h-36"
        >
          <div className="absolute w-full h-full rounded-full border-4 border-t-primary border-r-secondary border-b-primary border-l-accent opacity-90 dark:opacity-75 shadow-lg dark:shadow-primary/20" />
        </motion.div>

        {/* Middle rotating icons */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Career icons positioned in a circle */}
          {[
            "M12 0L4 8l8 8 8-8-8-8zm0 2.828L6.828 8 12 13.172 17.172 8 12 2.828zm-1 9.172V8H9l3-3 3 3h-2v4h-2z", // Upward arrow (growth)
            "M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4z", // Briefcase
            "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z", // Money sign
          ].map((path, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                transform: `rotate(${index * 120}deg) translateY(-30px)`,
              }}
            >
              <svg
                className="w-6 h-6 text-primary/90 dark:text-accent drop-shadow dark:drop-shadow-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={path} />
              </svg>
            </motion.div>
          ))}
        </motion.div>

        {/* Center logo with pulse effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative bg-white/50 dark:bg-gray-900/50 rounded-full p-5">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 dark:from-primary/20 dark:to-accent/20 blur-xl rounded-full animate-pulse" />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="bg-white dark:bg-gray-900 rounded-full p-1.5 shadow-xl dark:shadow-primary/10"
            >
              <img
                src={logo}
                alt="HireUpp Logo"
                className="w-12 h-12 object-contain drop-shadow-lg relative z-10"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Loading text with job-related messages */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="absolute mt-12 text-center w-full"
        >
          <motion.div
            animate={{
              opacity: [1, 0.7, 1],
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-accent dark:to-primary">
              Connecting to Opportunities
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              Your dream job awaits
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
