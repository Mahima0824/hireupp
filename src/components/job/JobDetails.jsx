import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaRegClock,
  FaRegMoneyBillAlt,
  FaShare,
  FaRegBookmark,
  FaBookmark,
  FaStar,
  FaBriefcase,
  FaGraduationCap,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { useJob } from "../../context/JobContext";
import { jobsData } from "../../data/data";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobsData.find((j) => j.id === parseInt(id));
  const { saveJob, applyToJob, isJobSaved, isJobApplied } = useJob();

  if (!job) return <div>Job not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900/90 dark:via-gray-900/90 dark:to-gray-900/90 backdrop-blur-sm transition-colors duration-500 py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              <Link to="/jobs" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                Jobs
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 dark:text-white font-medium">{job.title}</span>
            </li>
          </ol>
        </nav>
        <div className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <div className="w-20 h-20 sm:w-16 sm:h-16 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <img
                src={job.logo}
                alt={job.company}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-0 w-full">
                <div>
                  <h1 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 text-center sm:text-left">
                    {job.title}
                  </h1>
                  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 mb-2 sm:mb-4 text-xs">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {job.company}
                    </span>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>4.5</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-gray-400" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegMoneyBillAlt className="text-gray-400" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegClock className="text-gray-400" />
                      <span>{job.posted}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <button 
                    className="p-2.5 text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-xl transition-all duration-300"
                    title="Share job"
                  >
                    <FaShare className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => saveJob(job)}
                    className={`p-2.5 rounded-xl transition-all duration-300 ${isJobSaved(job.id) ? 'text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-500/10' : 'text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10'}`}
                    title={isJobSaved(job.id) ? 'Job saved' : 'Save job'}
                  >
                    {isJobSaved(job.id) ? <FaBookmark className="w-5 h-5" /> : <FaRegBookmark className="w-5 h-5" />}
                  </button>
                  <button 
                    onClick={() => applyToJob(job)}
                    disabled={isJobApplied(job.id)}
                    className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold shadow-lg active:scale-95 transform text-center transition-all ${isJobApplied(job.id) ? 'bg-green-500 text-white cursor-not-allowed hover:shadow-green-500/25' : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-blue-500/25'}`}
                  >
                    {isJobApplied(job.id) ? 'Applied' : 'Apply Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white dark:bg-gray-800/90 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-xl hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-blue-600/20  transition-all duration-300">
                <FaBriefcase className="text-primary dark:group-hover:text-white w-5 h-5" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">Experience Level</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 capitalize">{job.experienceLevel}</p>
          </div>
          <div className="bg-white dark:bg-gray-800/90 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-xl hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-300">
                <FaRegClock className="text-primary dark:group-hover:text-white w-5 h-5" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">Job Type</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 capitalize">{job.type}</p>
          </div>
          <div className="bg-white dark:bg-gray-800/90 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-xl hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-300">
                <FaMapMarkerAlt className="text-primary dark:group-hover:text-white w-5 h-5" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{job.location}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-xl hover:-translate-y-0.5">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                Job Description
              </h2>
              <div className="prose prose-sm max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="mb-6 text-sm leading-relaxed">
                  {job.description}
                </p>

                <div className="mb-4">
                  <h3 className="text-lg text-gray-900 dark:text-white font-medium flex items-center gap-2">
                    <FaBriefcase className="text-primary" />
                    Key Responsibilities
                  </h3>
                  <ul className="grid gap-3">
                    {job.responsibilities?.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg text-gray-900 dark:text-white font-medium flex items-center gap-2">
                    <FaGraduationCap className="text-primary" />
                    Requirements
                  </h3>
                  <ul className="grid gap-3">
                    {job.requirements?.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-xl hover:-translate-y-0.5">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {job.benefits?.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 dark:bg-primary/10 group hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center">
                      <FaRegMoneyBillAlt className="text-primary w-4 h-4" />
                    </div>
                    <span className="text-xs text-gray-700 dark:text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-xl hover:-translate-y-0.5">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                Job Overview
              </h2>
              <div className="grid gap-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl  bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-gray-900/50 dark:to-gray-900/50 group hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200/50 dark:hover:from-gray-900/50 dark:hover:to-gray-900/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                    <FaRegCalendarAlt className="text-blue-500 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">Posted Date</p>
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{job.posted}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-gray-900/50 dark:to-gray-900/50 group hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200/50 dark:hover:from-gray-900/50 dark:hover:to-gray-900/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                    <FaBriefcase className="text-blue-500 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">Job Type</p>
                    <p className="font-medium text-gray-900 dark:text-white capitalize">
                      {job.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-gray-900/50 dark:to-gray-900/50 group hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200/50 dark:hover:from-gray-900/50 dark:hover:to-gray-900/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                    <FaGraduationCap className="text-blue-500 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">Experience Level</p>
                    <p className="font-medium text-gray-900 dark:text-white capitalize">
                      {job.experienceLevel}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-gray-900/50 dark:to-gray-900/50 group hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200/50 dark:hover:from-gray-900/50 dark:hover:to-gray-900/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                    <FaRegMoneyBillAlt className="text-blue-500 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">Salary Range</p>
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{job.salary}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-xl hover:-translate-y-0.5">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-1.5 h-8 bg-gradient-to-b from-primary to-primary/80 rounded-full"></div>
                Required Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/10 dark:from-primary/20 dark:to-primary/20 text-primary dark:text-white rounded-xl text-xs font-semibold hover:from-primary/20 hover:to-primary/20 dark:hover:from-primary/30 dark:hover:to-primary/30 transition-all duration-300 uppercase tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
