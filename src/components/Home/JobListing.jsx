import React, { useState, useRef } from "react";
import { FaMapMarkerAlt, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { jobsData } from "../../data/data";
import { motion, useInView } from "framer-motion";

const jobs = jobsData.slice(0, 3);

const JobListing = () => {
  const [locationFilter, setLocationFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const filteredJobs = jobs.filter((job) => {
    return (
      (!locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
      (!salaryFilter || job.salary.includes(salaryFilter)) &&
      (!dateFilter || job.datePosted >= dateFilter)
    );
  });

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-transparent dark:via-transparent dark:to-transparent relative overflow-hidden transition-colors duration-500">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-highlight/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-primary">Jobs</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Discover your next career opportunity with our curated selection of top positions
          </p>
        </motion.div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={index}
              className="job-card group relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-800/50 hover:border-primary/20 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Company */}
              <div className="relative flex items-center gap-5 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-highlight/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-500" />
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                    {job.company}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {job.description}
              </p>

              {/* Details */}
              <div className="space-y-4 mb-8">
                <JobDetail icon={<FaMapMarkerAlt />} text={job.location} />
                <JobDetail icon={<FaDollarSign />} text={job.salary} />
                <JobDetail icon={<FaCalendarAlt />} text={`Posted: ${job.posted}`} />
              </div>

              {/* Button */}
              <Link
                to={`/job/${job.id}`}
                className="relative block w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-highlight p-[1px] hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
              >
                <div className="relative bg-gradient-to-r from-primary to-highlight rounded-xl">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center justify-center gap-2 py-3.5 text-white font-semibold">
                    View Details
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reusable Job Detail Component
const JobDetail = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
    <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
      {React.cloneElement(icon, { className: "text-primary dark:text-gray-50" })}
    </div>
    <span className="font-semibold">{text}</span>
  </div>
);

export default JobListing;
