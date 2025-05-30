import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaRegBookmark,
  FaRegClock,
  FaMapMarkerAlt,
  FaRegMoneyBillAlt,
  FaBriefcase,
  FaArchive,
  FaCalendarCheck,
  FaRegComments,
  FaTrash,
} from "react-icons/fa";
import MessageModal from "../components/Modal/MessageModal";
import { useJob } from "../context/JobContext";

const getTabIcon = (tabId) => {
  switch (tabId) {
    case "saved":
      return <FaRegBookmark className="w-4 h-4" />;
    case "applied":
      return <FaBriefcase className="w-4 h-4" />;
    case "archived":
      return <FaArchive className="w-4 h-4" />;
    case "interviews":
      return <FaCalendarCheck className="w-4 h-4" />;
    default:
      return null;
  }
};

const SavedJobs = () => {
  const [activeTab, setActiveTab] = useState("saved");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const {
    savedJobs,
    appliedJobs,
    archivedJobs,
    interviewJobs,
    removeJob,
    archiveJob,
    moveToInterview,
  } = useJob();

  const getActiveJobs = () => {
    switch (activeTab) {
      case "saved":
        return savedJobs;
      case "applied":
        return appliedJobs;
      case "archived":
        return archivedJobs;
      case "interviews":
        return interviewJobs;
      default:
        return [];
    }
  };

  const tabs = [
    { id: "saved", label: "Saved Jobs", count: savedJobs.length },
    { id: "applied", label: "Applied", count: appliedJobs.length },
    { id: "archived", label: "Archived", count: archivedJobs.length },
    { id: "interviews", label: "Interviews", count: interviewJobs.length },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 py-20 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white/90 dark:bg-gray-900/80 rounded-2xl sm:rounded-3xl shadow-xl shadow-primary/5 dark:shadow-primary/10 p-3 sm:p-6 lg:p-8 backdrop-blur-lg border border-primary/10 hover:border-primary/20 transition-all duration-500">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                My Jobs
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Track and manage your job applications
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary animate-pulse"></div>
                <span>
                  Total Jobs:{" "}
                  {savedJobs.length +
                    appliedJobs.length +
                    archivedJobs.length +
                    interviewJobs.length}
                </span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-1 mt-3 mb-6 justify-center sm:justify-start border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                px-6 py-3 text-sm font-medium transition-all w-full sm:w-auto duration-200 relative flex items-center gap-3
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5
                before:transition-all before:duration-200
                ${
                  activeTab === tab.id
                    ? "text-primary before:bg-primary before:h-0.5 bg-white dark:bg-gray-900/80 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white dark:after:bg-gray-800"
                    : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 before:bg-gray-200 dark:before:bg-gray-600 before:h-0 hover:before:h-0.5"
                }
              `}
              >
                <span
                  className={`transition-transform duration-200 ${
                    activeTab === tab.id ? "scale-110" : "group-hover:scale-105"
                  }`}
                >
                  {getTabIcon(tab.id)}
                </span>
                <span className="relative">
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/20 rounded-full"></div>
                  )}
                </span>
                <span
                  className={`
                  px-2 py-0.5 text-xs rounded-full transition-all duration-200 flex items-center justify-center min-w-[1.5rem]
                  ${
                    activeTab === tab.id
                      ? "bg-primary text-white transform scale-110"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-600"
                  }
                `}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid gap-4 sm:gap-6">
            {getActiveJobs().map((job) => (
              <div
                key={job.id}
                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all hover:border-primary/20 dark:hover:border-primary/40 border border-primary/10 dark:border-gray-700/50 p-4 sm:p-6 hover:-translate-y-1 duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-16 h-16 rounded-lg border-2 border-primary/10 group-hover:border-primary overflow-hidden flex-shrink-0 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        <Link
                          to={`/job/${job.id}`}
                          className="hover:text-primary transition-colors"
                        >
                          {job.title}
                        </Link>
                      </h2>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedJob(job);
                            setIsMessageModalOpen(true);
                          }}
                          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg hover:scale-110 duration-300"
                          title="Send message"
                        >
                          <FaRegComments className="w-5 h-5" />
                        </button>
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <Menu.Button className="p-2 text-gray-400 hover:text-gray-600 transition-all hover:bg-gray-50 rounded-lg hover:scale-110 duration-300">
                            <FaEllipsisV className="w-5 h-5" />
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                              <div className="px-1 py-1">
                                {activeTab === "applied" && (
                                  <>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          onClick={() => archiveJob(job)}
                                          className={`${
                                            active
                                              ? "bg-primary text-white"
                                              : "text-gray-900 dark:text-gray-100"
                                          } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                                        >
                                          <FaArchive className="w-4 h-4" />
                                          Archive Application
                                        </button>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          onClick={() => moveToInterview(job)}
                                          className={`${
                                            active
                                              ? "bg-primary text-white"
                                              : "text-gray-900 dark:text-gray-100"
                                          } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                                        >
                                          <FaCalendarCheck className="w-4 h-4" />
                                          Move to Interviews
                                        </button>
                                      )}
                                    </Menu.Item>
                                  </>
                                )}
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={() =>
                                        removeJob(job.id, activeTab)
                                      }
                                      className={`${
                                        active
                                          ? "bg-red-500 text-white"
                                          : "text-red-500"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                                    >
                                      <FaTrash className="w-4 h-4" />
                                      Delete{" "}
                                      {activeTab === "applied"
                                        ? "Application"
                                        : activeTab === "interviews"
                                        ? "from Interviews"
                                        : activeTab === "archived"
                                        ? "from Archived"
                                        : "Job"}
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-2">
                        <FaBriefcase className="text-gray-400 dark:text-gray-500" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-400 dark:text-gray-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaRegMoneyBillAlt className="text-gray-400 dark:text-gray-500" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaRegClock className="text-gray-400 dark:text-gray-500" />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 4).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-gradient-to-r from-primary/10 to-primary/10 text-primary rounded-lg text-xs font-medium hover:from-primary/20 hover:to-primary/20 transition-all duration-300 cursor-default transform hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getActiveJobs().length === 0 && (
            <div className="text-center py-12 px-4 rounded-2xl border-2 border-dashed border-primary/20 dark:border-primary/30 bg-gradient-to-br from-primary/5 to-primary/5 dark:from-primary/10 dark:to-primary/10 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <FaRegBookmark className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No jobs found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                You haven't {activeTab} any jobs yet
              </p>
            </div>
          )}
        </div>
        {/* Message Modal */}
        <MessageModal
          isOpen={isMessageModalOpen}
          onClose={() => setIsMessageModalOpen(false)}
          jobTitle={selectedJob?.title}
          companyName={selectedJob?.company}
        />
      </div>
    </div>
  );
};

export default SavedJobs;
