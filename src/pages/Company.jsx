import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaIndustry,
  FaBriefcase,
  FaBuilding,
  FaSort,
} from "react-icons/fa";
import FilterModal from "../components/Modal/FilterModal";
import { companyData } from "../data/data";
import { Link } from "react-router-dom";

const Company = () => {
  const [selectedCompanyType, setSelectedCompanyType] = useState(["all"]);
  const [selectedLocation, setSelectedLocation] = useState(["all"]);
  const [selectedIndustry, setSelectedIndustry] = useState(["all"]);
  const [selectedSize, setSelectedSize] = useState([0, 5000]);
  const [salaryRange, setSalaryRange] = useState("all");
  const [sortBy, setSortBy] = useState("a-z");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const companiesPerPage = 4;

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCompanyType(["all"]);
    setSelectedLocation(["all"]);
    setSelectedIndustry(["all"]);
    setSelectedSize([0, 5000]);
    setSalaryRange("all");
    setSortBy("a-z");
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Filter and sort companies based on selected filters
  const filteredCompanies = companyData
    .filter((company) => {
      const matchesType =
        selectedCompanyType.includes("all") ||
        selectedCompanyType.includes(company.companyType.toLowerCase());
      const matchesLocation =
        selectedLocation.includes("all") ||
        selectedLocation.includes(company.location.toLowerCase());
      const matchesIndustry =
        selectedIndustry.includes("all") ||
        selectedIndustry.includes(company.industry.toLowerCase());
      const getNumericSize = (sizeStr) => {
        if (sizeStr === "5000+") return 5000;
        const [min, max] = sizeStr.split("-").map(Number);
        return max || min;
      };
      const companyNumericSize = getNumericSize(company.companySize);
      const matchesSize =
        companyNumericSize >= selectedSize[0] &&
        companyNumericSize <= selectedSize[1];
      const matchesSalary =
        salaryRange === "all" ||
        (salaryRange === "0-30000" && company.averageSalary <= 30000) ||
        (salaryRange === "30000-60000" &&
          company.averageSalary >= 30000 &&
          company.averageSalary <= 60000) ||
        (salaryRange === "60000-100000" &&
          company.averageSalary >= 60000 &&
          company.averageSalary <= 100000) ||
        (salaryRange === "100000+" && company.averageSalary >= 100000);
      const matchesSearch =
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase());
      return (
        matchesType &&
        matchesLocation &&
        matchesIndustry &&
        matchesSize &&
        matchesSalary &&
        matchesSearch
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "z-a":
          return b.name.localeCompare(a.name);
        case "most-jobs":
          return b.openJobs - a.openJobs;
        case "newest":
          return parseInt(b.founded) - parseInt(a.founded);
        case "oldest":
          return parseInt(a.founded) - parseInt(b.founded);
        case "a-z":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  // Pagination
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );
  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900/90 dark:via-gray-900/90 dark:to-gray-900/90 backdrop-blur-sm transition-colors duration-500">
      {/* Header Section */}
      <div className="border-primary/10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 pt-lg-10 pb-lg-5">
          <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-base text-gray-900 dark:text-white">
                  /
                </span>
                <span className="text-gray-900 dark:text-white font-medium">
                  Companies
                </span>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col items-center sm:items-start max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center sm:text-left">
              Find your dream company
            </h1>
            <p className="text-gray-900 dark:text-gray-400 text-base sm:text-base text-center sm:text-left">
              Look for companies
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 max-w-3xl">
            <div className="flex-1 relative group">
              <div className="flex items-center h-12 w-full pl-4 pr-3 text-gray-600 dark:text-gray-400 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-lg focus-within:border-white dark:focus-within:border-gray-600 focus-within:ring-1 focus-within:ring-white dark:focus-within:ring-gray-600 group-hover:border-white/40 dark:group-hover:border-gray-600/40 transition-all duration-300">
                <FaSearch className="text-gray-900/60 dark:text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search company name"
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
              Find companies
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-md-16 pb-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Desktop Filters */}
          <div className="lg:w-72 flex-shrink-0 md:mb-6 lg:mb-0">
            <div className="hidden lg:block bg-white dark:bg-gray-800/90 border border-primary/10 dark:border-gray-700/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Filter
                </h2>
                <button
                  onClick={handleResetFilters}
                  className="text-rose-500 text-base hover:text-rose-600"
                >
                  Clear all
                </button>
              </div>

              <div className="p-4 space-y-6 sm:space-y-8 overflow-y-auto custom-scrollbar">
                {/* Industry Filter */}
                <div>
                  <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 whitespace-nowrap">
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
                          checked={selectedIndustry.includes(industry)}
                          onChange={() =>
                            setSelectedIndustry((prev) => {
                              if (industry === "all") return ["all"];
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
                        <span className="text-gray-900 dark:text-gray-300 capitalize group-hover:text-primary transition-colors text-base">
                          {industry}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Company Type */}
                <div>
                  <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <FaBriefcase className="text-primary" />
                      Company Type
                    </div>
                    {selectedCompanyType.length > 0 && (
                      <span className="text-sm text-primary">
                        {selectedCompanyType.length} selected
                      </span>
                    )}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {["all", "corporate", "startup", "government", "ngo"].map(
                      (type) => (
                        <label
                          key={type}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCompanyType.includes(type)}
                            onChange={() =>
                              setSelectedCompanyType((prev) => {
                                if (type === "all") return ["all"];
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
                          <span className="text-gray-900 dark:text-gray-300 capitalize group-hover:text-primary transition-colors text-base">
                            {type}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Company Size */}
                <div>
                  <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <FaBuilding className="text-primary" />
                      Company Size
                    </div>
                    <div className="text-sm text-primary font-normal">
                      {selectedSize[0]} - {selectedSize[1]}+ employees
                    </div>
                  </h3>
                  <div className="mt-4 px-2">
                    <div className="relative h-1 bg-primary/20 rounded-full">
                      <div
                        className="absolute h-full bg-primary rounded-full"
                        style={{
                          left: `${(selectedSize[0] / 5000) * 100}%`,
                          right: `${100 - (selectedSize[1] / 5000) * 100}%`,
                        }}
                      />
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="50"
                        value={selectedSize[0]}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value <= selectedSize[1]) {
                            setSelectedSize([value, selectedSize[1]]);
                          }
                        }}
                        className="absolute w-full h-1 opacity-0 cursor-pointer"
                      />
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="50"
                        value={selectedSize[1]}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= selectedSize[0]) {
                            setSelectedSize([selectedSize[0], value]);
                          }
                        }}
                        className="absolute w-full h-1 opacity-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>0</span>
                      <span>5000+</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-gray-900 dark:text-white text-lg font-medium mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <FaMapMarkerAlt className="text-primary" />
                      Location
                    </div>
                    {selectedLocation.length > 0 && (
                      <span className="text-sm text-primary">
                        {selectedLocation.length} selected
                      </span>
                    )}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "all",
                      "usa",
                      "india",
                      "uk",
                      "canada",
                      "australia",
                      "remote",
                    ].map((location) => (
                      <label
                        key={location}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedLocation.includes(location)}
                          onChange={() =>
                            setSelectedLocation((prev) => {
                              if (location === "all") return ["all"];
                              if (prev.includes(location)) {
                                const newState = prev.filter(
                                  (item) => item !== location
                                );
                                return newState.length === 0
                                  ? ["all"]
                                  : newState;
                              } else {
                                const newState = prev.filter(
                                  (item) => item !== "all"
                                );
                                return [...newState, location];
                              }
                            })
                          }
                          className="text-primary focus:ring-primary w-4 h-4"
                        />
                        <span className="text-gray-900 dark:text-gray-200 capitalize group-hover:text-primary transition-colors text-base">
                          {location}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h3 className="text-gray-700 dark:text-white text-lg font-medium mb-3 flex items-center gap-2">
                    <FaSort className="text-primary" />
                    Sort By
                  </h3>
                  <div className="space-y-3">
                    {[
                      { value: "a-z", label: "A to Z" },
                      { value: "z-a", label: "Z to A" },
                      { value: "most-jobs", label: "Most Jobs" },
                      { value: "newest", label: "Newest" },
                      { value: "oldest", label: "Oldest" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="sortBy"
                          checked={sortBy === option.value}
                          onChange={() => setSortBy(option.value)}
                          className="text-primary focus:ring-primary w-4 h-4"
                        />
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors text-base">
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
          <div className="lg:hidden">
            <FilterModal
              isOpen={showMobileFilters}
              onClose={() => setShowMobileFilters(false)}
              selectedIndustry={selectedIndustry}
              setSelectedIndustry={setSelectedIndustry}
              selectedCompanyType={selectedCompanyType}
              setSelectedCompanyType={setSelectedCompanyType}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              sortBy={sortBy}
              setSortBy={setSortBy}
              handleResetFilters={handleResetFilters}
            />
          </div>

          {/* Company Listings */}
          <div className="flex-1 lg:mt-0 mt-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-base text-gray-600 dark:text-gray-400">
                {filteredCompanies.length} Companies found
              </p>
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden px-4 py-3 bg-primary/10 dark:bg-primary/10 text-primary dark:text-white rounded-lg hover:bg-primary/20 transition-colors flex items-center gap-2 text-base font-medium"
              >
                <FaFilter className="w-4 h-4" />
                Filters
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {currentCompanies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white dark:bg-gray-800/90 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 rounded-lg border border-gray-200 dark:border-gray-700 group p-4 sm:p-6 hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="w-16 h-16 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 border border-primary/10 transform group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1.5 group-hover:text-primary">
                        {company.name}
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-gray-300 mb-3 line-clamp-2">
                        {company.description}
                      </p>
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4">
                        <span className="px-3 py-1.5 bg-highlight/20 dark:bg-highlight/30 text-primary/90 dark:text-highlight text-xs font-medium rounded-full capitalize tracking-wider whitespace-nowrap shadow-sm group-hover:bg-highlight/30 dark:group-hover:bg-highlight/40 transition-all duration-300">
                          {company.industry}
                        </span>
                        <span className="px-3 py-1.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 text-xs font-medium rounded-full capitalize tracking-wider whitespace-nowrap shadow-sm group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                          {company.companyType}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-gray-900/60 dark:text-gray-400" />
                          <span>{company.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaUsers className="text-gray-900/60 dark:text-gray-400" />
                          <span>{company.companySize}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
                        <span className="text-primary text-sm font-medium">
                          {company.openJobs} open positions
                        </span>
                        <Link to={`/company/${company.id}`}>
                          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            View Profile
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 sm:mt-8 flex flex-col items-center gap-4 pb-6 sm:pb-8">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 text-gray-400 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-gray-400 transition-colors"
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2 whitespace-nowrap">
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <button
                          key={index}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`w-10 h-10 text-sm rounded-lg ${
                            currentPage === pageNumber
                              ? "bg-primary text-white font-medium"
                              : "text-gray-600 hover:text-primary"
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
                    className="p-2 text-gray-400 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-gray-400 transition-colors"
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-base text-gray-500">
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

export default Company;
