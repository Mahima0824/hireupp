import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaGlobe, 
  FaUsers, 
  FaBriefcase, 
  FaIndustry, 
  FaRegBuilding,
  FaMoneyBillWave,
  FaClock,
  FaHandshake,
  FaHeart,
  FaTrophy,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';
import { companyData, jobsData } from '../../data/data';

const CompanyDetails = () => {
  const { id } = useParams();
  console.log('Current ID:', id);
  
  // Check if jobsData is defined and has data
  if (!jobsData) {
    console.error('jobsData is undefined!');
    return <div>Loading...</div>;
  }
  console.log('Total jobs in jobsData:', jobsData.length);
  
  const company = companyData.find((c) => c.id === parseInt(id));
  if (!company) {
    console.error('Company not found for id:', id);
    return <div>Company not found</div>;
  }
  console.log('Found company:', company.name);
  
  // Get jobs for this company
  const companyJobs = jobsData.filter(job => job.company === company.name);
  console.log('Jobs for', company.name, ':', companyJobs);

  if (!company) return <div>Company not found</div>;

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
              <span className="text-gray-400 dark:text-gray-400">/</span>
              <Link to="/company" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                Companies
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-400 dark:text-gray-400">/</span>
              <span className="text-gray-900 dark:text-white">{company.name}</span>
            </li>
          </ol>
        </nav>

        {/* Company Header */}
        <div className="bg-white dark:bg-gray-800/90 rounded-xl shadow-lg p-6 sm:p-8 mb-8 border border-gray-100 dark:border-gray-700 hover:border-primary/20 transition-all duration-300">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-primary/10 shadow-xl transform hover:scale-105 transition-transform duration-300 mx-auto lg:mx-0">
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col items-center lg:items-start gap-4">
                <div className="text-center lg:text-left">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {company.name}
                  </h1>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <FaIndustry className="text-primary" />
                      <span>{company.industry}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaGlobe className="text-primary" />
                      <a
                        href={`https://${company.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {company.website}
                      </a>
                    </div>
                  </div>
                  
                  {/* Social Media Links */}
                  {company.socialMedia && (
                    <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
                      {company.socialMedia.linkedin && (
                        <a
                          href={`https://linkedin.com/company/${company.socialMedia.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <FaLinkedin className="w-6 h-6" />
                        </a>
                      )}
                      {company.socialMedia.twitter && (
                        <a
                          href={`https://twitter.com/${company.socialMedia.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <FaTwitter className="w-6 h-6" />
                        </a>
                      )}
                      {company.socialMedia.facebook && (
                        <a
                          href={`https://facebook.com/${company.socialMedia.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <FaFacebook className="w-6 h-6" />
                        </a>
                      )}
                      {company.socialMedia.instagram && (
                        <a
                          href={`https://instagram.com/${company.socialMedia.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <FaInstagram className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800/90 p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FaUsers className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Company Size</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {company.companySize}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FaBriefcase className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Open Positions</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {company.openJobs} Jobs
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FaRegBuilding className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Founded</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {company.founded}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white dark:bg-gray-800/90 rounded-xl shadow-md p-8 mb-8 border border-gray-100 dark:border-gray-700 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About {company.name}</h2>
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">{company.description}</p>
            </div>

            {/* Benefits */}
            {company.benefits && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Benefits & Perks</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {company.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-primary/5 dark:bg-gray-900/80 rounded-xl hover:bg-primary/10 dark:hover:bg-gray-900/60 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 dark:bg-primary/20 flex items-center justify-center">
                        <FaHeart className="text-primary w-4 h-4" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Culture */}
            {company.culture && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Company Culture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {company.culture.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <FaHandshake className="text-primary w-4 h-4" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            {company.technologies && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {company.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Awards */}
            {company.awards && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Awards & Recognition</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {company.awards.map((award, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <FaTrophy className="text-primary w-4 h-4" />
                      </div>
                      <span className="text-gray-700">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Office Locations */}
            {company.officeLocations && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Office Locations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {company.officeLocations.map((location, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-primary w-4 h-4" />
                      </div>
                      <span className="text-gray-700">{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-white dark:bg-gray-800/90 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Open Positions</h2>
            <span className="px-5 py-2 bg-primary/10 dark:bg-primary/10 text-primary dark:text-white rounded-full text-sm font-medium shadow-sm hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300">
              {company.openJobs} jobs
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {companyJobs.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                No jobs available at this time.
              </div>
            ) : (
              companyJobs.map((job) => (
                <div
                  key={job.id}
                  className="group p-4 sm:p-6 lg:p-8 border border-gray-100 dark:border-gray-700 rounded-xl hover:border-primary/20 hover:bg-gradient-to-r hover:from-primary/5 dark:hover:from-gray-900/80 hover:to-transparent transition-all duration-300 shadow-sm hover:shadow-md dark:bg-gray-900/50"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
                      <div className="w-full sm:w-auto">
                        <Link to={`/job/${job.id}`}>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary mb-2 sm:mb-3 transition-colors duration-300 line-clamp-2">
                            {job.title}
                          </h3>
                        </Link>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
                          <span className="flex items-center gap-1 whitespace-nowrap">
                            <FaBriefcase className="text-primary w-3 h-3 sm:w-4 sm:h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1 whitespace-nowrap">
                            <FaMapMarkerAlt className="text-primary w-3 h-3 sm:w-4 sm:h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1 whitespace-nowrap">
                            <FaMoneyBillWave className="text-primary w-3 h-3 sm:w-4 sm:h-4" />
                            {job.salary}
                          </span>
                          <span className="flex items-center gap-1 whitespace-nowrap">
                            <FaClock className="text-primary w-3 h-3 sm:w-4 sm:h-4" />
                            {job.posted}
                          </span>
                        </div>
                      </div>
                      <Link
                        to={`/job/${job.id}`}
                        className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 text-sm font-medium text-center shadow-sm hover:shadow-md hover:translate-y-[-1px]"
                      >
                        Apply Now
                      </Link>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 sm:line-clamp-none">{job.description}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-2">Required Skills:</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {job.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 sm:px-4 py-1.5 sm:py-2 bg-primary/5 text-primary rounded-lg text-xs sm:text-sm font-medium hover:bg-primary/10 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-2">Experience Level:</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">{job.experienceLevel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
