import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaIndustry,
  FaUserGraduate,
  FaSort,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import FilterJobModal from "../components/Modal/FilterJobModal";
import { jobsData } from "../data/data";
import { Link } from "react-router-dom";

const Job = () => {
  const [selectedJobType, setSelectedJobType] = useState(["all"]);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState(["all"]);
  const [selectedExperience, setSelectedExperience] = useState(["all"]);
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [salaryRange, setSalaryRange] = useState([0, 150000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const jobsPerPage = 4;

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedJobType(["all"]);
    setSelectedLocation(["all"]);
    setSelectedIndustry(["all"]);
    setSelectedExperience(["all"]);
    setSalaryRange([0, 150000]);
    setSortBy("newest");
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Filter and sort jobs based on selected filters
  const filteredJobs = jobsData
    .filter((job) => {
      const matchesType =
        selectedJobType.includes("all") ||
        selectedJobType.includes(job.type.toLowerCase());
      const matchesLocation = selectedLocation === 'all' || job.location.toLowerCase() === selectedLocation.toLowerCase();
      const matchesIndustry =
        selectedIndustry.includes("all") ||
        selectedIndustry.includes(job.industry.toLowerCase());
      const matchesExperience =
        selectedExperience.includes("all") ||
        selectedExperience.includes(job.experienceLevel.toLowerCase());
      // Extract salary range from string and convert to number
      const salaryStr = job.salary.replace(/[^0-9,-]/g, "");
      const [min, max] = salaryStr
        .split("-")
        .map((num) => parseInt(num.replace(/,/g, "")));
      const matchesSalary =
        (!min && !max) || (min >= salaryRange[0] && max <= salaryRange[1]);
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase());
      return (
        matchesType &&
        matchesLocation &&
        matchesIndustry &&
        matchesExperience &&
        matchesSalary &&
        matchesSearch
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          const getDateValue = (posted) => {
            const num = parseInt(posted.split(" ")[0]);
            const unit = posted.split(" ")[1];
            const now = new Date();
            if (unit.includes("week")) {
              return now.getTime() - num * 7 * 24 * 60 * 60 * 1000;
            } else if (unit.includes("day")) {
              return now.getTime() - num * 24 * 60 * 60 * 1000;
            }
            return now.getTime();
          };
          return getDateValue(a.posted) - getDateValue(b.posted);
        case "salary-high":
          const [bMin, bMax] = b.salary
            .replace(/[^0-9,-]/g, "")
            .split("-")
            .map((num) => parseInt(num.replace(/,/g, "")));
          const [aMin, aMax] = a.salary
            .replace(/[^0-9,-]/g, "")
            .split("-")
            .map((num) => parseInt(num.replace(/,/g, "")));
          return (bMax || bMin || 0) - (aMax || aMin || 0);
        case "salary-low":
          const [bMinLow, bMaxLow] = b.salary
            .replace(/[^0-9,-]/g, "")
            .split("-")
            .map((num) => parseInt(num.replace(/,/g, "")));
          const [aMinLow, aMaxLow] = a.salary
            .replace(/[^0-9,-]/g, "")
            .split("-")
            .map((num) => parseInt(num.replace(/,/g, "")));
          return (aMin || aMax || 0) - (bMin || bMax || 0);
        case "newest":
        default:
          const getDateValueNew = (posted) => {
            const num = parseInt(posted.split(" ")[0]);
            const unit = posted.split(" ")[1];
            const now = new Date();
            if (unit.includes("week")) {
              return now.getTime() - num * 7 * 24 * 60 * 60 * 1000;
            } else if (unit.includes("day")) {
              return now.getTime() - num * 24 * 60 * 60 * 1000;
            }
            return now.getTime();
          };
          return getDateValueNew(b.posted) - getDateValueNew(a.posted);
      }
    });

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900/90 dark:via-gray-900/90 dark:to-gray-900/90 backdrop-blur-sm transition-colors duration-500">
      {/* Header Section */}
      <div className=" border-primary/10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 pt-lg-10 pb-lg-5">
          <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li>
                <Link to="/" className="text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Home
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-900 dark:text-gray-300">/</span>
                <span className="text-gray-900 dark:text-white font-medium">Jobs</span>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col items-center sm:items-start max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center sm:text-left">
              Find your dream job
            </h1>
            <p className="text-gray-900 dark:text-gray-300 text-base sm:text-base text-center sm:text-left">
              Looking for jobs? Browse our latest job openings to view & apply
              to the best jobs today!
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 max-w-3xl">
            <div className="flex-1 relative group">
              <div className="flex items-center h-12 w-full pl-4 pr-3 text-gray-600 dark:text-gray-400 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-lg focus-within:border-white dark:focus-within:border-gray-600 focus-within:ring-1 focus-within:ring-white dark:focus-within:ring-gray-600 group-hover:border-white/40 dark:group-hover:border-gray-600/40 transition-all duration-300">
                <FaSearch className="text-gray-900/60 dark:text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search job title or keyword"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-base outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="flex-1 relative group">
              <div className="flex items-center h-12 w-full pl-4 pr-3 text-gray-600 dark:text-gray-400 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-lg focus-within:border-white dark:focus-within:border-gray-600 focus-within:ring-1 focus-within:ring-white dark:focus-within:ring-gray-600 group-hover:border-white/40 dark:group-hover:border-gray-600/40 transition-all duration-300">
                <FaMapMarkerAlt className="text-gray-900/60 dark:text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Country or timezone"
                  className="flex-1 text-base outline-none bg-transparent"
                />
              </div>
            </div>
            <button className="h-12 px-8 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium w-full sm:w-auto text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Find jobs
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-md-16 pb-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-72 flex-shrink-0 md:mb-6 lg:mb-0">
    
         

            {/* Desktop Filters */}
            <div className="hidden lg:block bg-white dark:bg-gray-800/90 border border-primary/10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Filter</h2>
                <button
                  onClick={handleResetFilters}
                  className="text-rose-500 text-base hover:text-rose-600"
                >
                  Clear all
                </button>
              </div>

              <div className="p-4 space-y-6 sm:space-y-8  overflow-y-auto custom-scrollbar">
                {/* Industry Filter */}
                <div>
                  <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaIndustry className="text-primary" />
                      Industry
                    </div>
                    {selectedIndustry.length > 0 && (
                      <span className="text-sm text-primary">
                        {selectedIndustry.length} selected
                      </span>
                    )}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "all",
                      "technology",
                      "healthcare",
                      "finance",
                      "education",
                      "retail",
                      "manufacturing",
                    ].map((industry) => (
                      <label
                        key={industry}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          name="industry"
                          checked={selectedIndustry.includes(industry)}
                          onChange={() =>
                            setSelectedIndustry((prev) => {
                              if (industry === "all") {
                                return ["all"];
                              }
                              if (prev.includes(industry)) {
                                const newState = prev.filter(
                                  (item) => item !== industry
                                );
                                return newState.length === 0
                                  ? ["all"]
                                  : newState;
                              } else {
                                const newState = prev.filter(
                                  (item) => item !== "all"
                                );
                                return [...newState, industry];
                              }
                            })
                          }
                          className="text-primary focus:ring-primary w-4 h-4"
                        />
                        <span className="text-gray-900 dark:text-gray-200 capitalize group-hover:text-primary transition-colors text-base">
                          {industry}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Type Filter */}
                <div>
                  <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="text-primary" />
                      Job Type
                    </div>
                    {selectedJobType.length > 0 && (
                      <span className="text-sm text-primary">
                        {selectedJobType.length} selected
                      </span>
                    )}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "all",
                      "full-time",
                      "part-time",
                      "contract",
                      "internship",
                      "freelance",
                    ].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          name="jobType"
                          checked={selectedJobType.includes(type)}
                          onChange={() =>
                            setSelectedJobType((prev) => {
                              if (type === "all") {
                                return ["all"];
                              }
                              if (prev.includes(type)) {
                                const newState = prev.filter(
                                  (item) => item !== type
                                );
                                return newState.length === 0
                                  ? ["all"]
                                  : newState;
                              } else {
                                const newState = prev.filter(
                                  (item) => item !== "all"
                                );
                                return [...newState, type];
                              }
                            })
                          }
                          className="text-primary focus:ring-primary w-4 h-4"
                        />
                        <span className="text-gray-900 dark:text-gray-200 capitalize group-hover:text-primary transition-colors text-base">
                          {type.replace("-", " ")}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaUserGraduate className="text-primary" />
                      Experience Level
                    </div>
                    {selectedExperience.length > 0 && (
                      <span className="text-sm text-primary">
                        {selectedExperience.length} selected
                      </span>
                    )}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "all",
                      "entry",
                      "intermediate",
                      "senior",
                      "lead",
                      "executive",
                    ].map((level) => (
                      <label
                        key={level}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          name="experience"
                          checked={selectedExperience.includes(level)}
                          onChange={() =>
                            setSelectedExperience((prev) => {
                              if (level === "all") {
                                return ["all"];
                              }
                              if (prev.includes(level)) {
                                const newState = prev.filter(
                                  (item) => item !== level
                                );
                                return newState.length === 0
                                  ? ["all"]
                                  : newState;
                              } else {
                                const newState = prev.filter(
                                  (item) => item !== "all"
                                );
                                return [...newState, level];
                              }
                            })
                          }
                          className="text-primary focus:ring-primary w-4 h-4"
                        />
                        <span className="text-gray-900 dark:text-gray-200 capitalize group-hover:text-primary transition-colors text-base">
                          {level}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-3 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-primary" />
                    Location
                  </h3>
                  <div className="relative">
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full h-12 pl-4 pr-10 text-base bg-white dark:bg-gray-800 dark:text-white border border-primary/20 dark:border-gray-700 rounded-lg appearance-none cursor-pointer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="all">All Locations</option>
                      <option value="remote">Remote</option>
                      <option value="on-site">On-site</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-900/60"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Salary Range */}
                <div>
                  <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaMoneyBillWave className="text-primary" />
                      Salary Range
                    </div>
                    <div className="text-sm text-primary  font-normal">
                      ${(salaryRange[0] / 1000).toFixed(0)}k - $
                      {(salaryRange[1] / 1000).toFixed(0)}k
                    </div>
                  </h3>
                  <div className="mt-4 px-2">
                    <div className="relative h-1 bg-primary/20 rounded-full">
                      <div
                        className="absolute h-full bg-primary rounded-full"
                        style={{
                          left: `${(salaryRange[0] / 150000) * 100}%`,
                          right: `${100 - (salaryRange[1] / 150000) * 100}%`,
                        }}
                      />
                      <input
                        type="range"
                        min="0"
                        max="150000"
                        step="5000"
                        value={salaryRange[0]}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value <= salaryRange[1]) {
                            setSalaryRange([value, salaryRange[1]]);
                          }
                        }}
                        className="absolute w-full h-1 opacity-0 cursor-pointer"
                      />
                      <input
                        type="range"
                        min="0"
                        max="150000"
                        step="5000"
                        value={salaryRange[1]}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= salaryRange[0]) {
                            setSalaryRange([salaryRange[0], value]);
                          }
                        }}
                        className="absolute w-full h-1 opacity-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-900 dark:text-gray-200">
                      <span>$0</span>
                      <span>$150k</span>
                    </div>
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-3 flex items-center gap-2">
                    <FaSort className="text-primary" />
                    Sort By
                  </h3>
                  <div className="space-y-2">
                    {[
                      { value: "newest", label: "Newest First" },
                      { value: "oldest", label: "Oldest First" },
                      { value: "salary-high", label: "Highest Salary" },
                      { value: "salary-low", label: "Lowest Salary" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          name="sortBy"
                          checked={sortBy.includes(option.value)}
                          onChange={() =>
                            setSortBy((prev) => {
                              if (prev.includes(option.value)) {
                                return prev.filter(
                                  (item) => item !== option.value
                                );
                              } else {
                                return [...prev, option.value];
                              }
                            })
                          }
                          className="text-primary focus:ring-primary w-4 h-4"
                        />
                        <span className="text-gray-900 dark:text-gray-200 group-hover:text-primary transition-colors text-base">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filter Modal */}
          <FilterJobModal
            isOpen={showMobileFilters}
            onClose={() => setShowMobileFilters(false)}
            selectedJobType={selectedJobType}
            setSelectedJobType={setSelectedJobType}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
            selectedExperience={selectedExperience}
            setSelectedExperience={setSelectedExperience}
            salaryRange={salaryRange}
            setSalaryRange={setSalaryRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
            handleResetFilters={handleResetFilters}
          />

          {/* Job Listings - Scrollable */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-base text-gray-900 dark:text-gray-300">
                {filteredJobs.length} Jobs results
              </p>
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden px-4 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors flex items-center gap-2 text-base font-medium"
              >
                <FaFilter className="w-4 h-4" />
                Filters
              </button>
            </div>
            <div className="space-y-4">
              {currentJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-gray-800/90 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 rounded-lg border border-primary/20 group p-4 sm:p-6 hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="w-16 h-16 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 border border-primary/10 transform group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 w-full">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1.5 group-hover:text-primary text-center sm:text-left">
                            {job.title}
                          </h3>
                          <div className="text-sm text-gray-900 dark:text-gray-300 text-center sm:text-left">
                            {job.company}
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                          <span className="px-3 py-1.5 bg-highlight/20 dark:bg-highlight/30 text-primary/90 dark:text-highlight text-xs font-medium rounded-full capitalize tracking-wider whitespace-nowrap shadow-sm">
                            {job.type}
                          </span>
                          {job.posted === "2 days ago" && (
                            <span className="px-3 py-1.5 bg-rose-50 dark:bg-rose-400/20 text-rose-600 dark:text-rose-200 text-xs font-medium rounded-full uppercase tracking-wider whitespace-nowrap">
                              Urgently hiring
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 space-y-2 text-gray-900 dark:text-gray-300 text-sm text-center sm:text-left">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                          <FaMapMarkerAlt className="text-gray-900/60 dark:text-gray-400" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                          <FaMoneyBillWave className="text-gray-900/60 dark:text-gray-400" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                      <div className="mt-4 text-sm text-gray-900 dark:text-gray-300 line-clamp-2 text-center sm:text-left">
                        {job.description}
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between">
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                          {job.skills.slice(0, 2).map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-xs font-medium hover:bg-primary/10 transition-colors whitespace-nowrap uppercase tracking-wider"
                            >
                              {skill}
                            </span>
                          ))}
                          {job.skills.length > 2 && (
                            <span className="text-xs text-gray-900 dark:text-gray-300">
                              +{job.skills.length - 2} more
                            </span>
                          )}
                        </div>
                        <div>
                          <Link to={`/job/${job.id}`}>
                            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                              Apply Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 sm:mt-8 flex flex-col items-center gap-4 pb-6 sm:pb-8">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 text-gray-900/60 dark:text-gray-400 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-gray-900/60 dark:disabled:hover:text-gray-400 transition-colors"
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <button
                          key={index}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`w-10 h-10 text-sm rounded-lg ${
                            currentPage === pageNumber
                              ? "bg-primary text-white dark:text-white font-medium"
                              : "text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                          } transition-colors`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 text-gray-900/60 dark:text-gray-400 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-gray-900/60 dark:disabled:hover:text-gray-400 transition-colors"
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-base text-gray-900 dark:text-gray-300">
                  Showing page {currentPage} of {totalPages}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
