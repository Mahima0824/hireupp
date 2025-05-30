import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaTimes, FaIndustry, FaBriefcase, FaUserGraduate, FaMapMarkerAlt, FaMoneyBillWave, FaSort, FaUndo } from 'react-icons/fa';

const FilterJobModal = ({
  isOpen,
  onClose,
  selectedJobType,
  setSelectedJobType,
  selectedLocation,
  setSelectedLocation,
  selectedIndustry,
  setSelectedIndustry,
  selectedExperience,
  setSelectedExperience,
  salaryRange,
  setSalaryRange,
  sortBy,
  setSortBy,
  handleResetFilters
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
           <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                <div className='flex h-full flex-col bg-white dark:bg-gray-800 shadow-xl'>

                {/* Header */}
                <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between p-4">
                    <Dialog.Title as="h3" className="text-lg font-medium text-gray-900 dark:text-white">
                      Filters
                    </Dialog.Title>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={handleResetFilters}
                        className="text-rose-500 hover:text-rose-600 flex items-center gap-2"
                      >
                        <FaUndo />
                        Reset
                      </button>
                      <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <FaTimes className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Filters */}
                <div className="flex-1 overflow-y-auto py-6 px-4">
                  {/* Industry Filter */}
                  <div>
                    <h3 className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaIndustry className="text-primary" />
                        Industry
                      </div>
                      {selectedIndustry.length > 0 && (
                        <span className="text-sm text-primary">{selectedIndustry.length} selected</span>
                      )}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {['all', 'technology', 'healthcare', 'finance', 'education', 'retail', 'manufacturing'].map(
                        (industry) => (
                          <label key={industry} className="flex items-center gap-2 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={selectedIndustry.includes(industry)}
                              onChange={() =>
                                setSelectedIndustry((prev) => {
                                  if (industry === 'all') return ['all'];
                                  if (prev.includes(industry)) {
                                    const newState = prev.filter(
                                      (item) => item !== industry
                                    );
                                    return newState.length === 0
                                      ? ['all']
                                      : newState;
                                  } else {
                                    const newState = prev.filter(
                                      (item) => item !== 'all'
                                    );
                                    return [...newState, industry];
                                  }
                                })
                              }
                              className="text-primary focus:ring-primary rounded w-4 h-4"
                            />
                            <span className="text-gray-600 dark:text-gray-400 capitalize group-hover:text-primary transition-colors text-base">
                              {industry}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <h3 className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaBriefcase className="text-primary" />
                        Job Type
                      </div>
                      {selectedJobType.length > 0 && (
                        <span className="text-sm text-primary">{selectedJobType.length} selected</span>
                      )}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {['all', 'full-time', 'part-time', 'contract', 'internship', 'freelance'].map(
                        (type) => (
                          <label key={type} className="flex items-center gap-2 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={selectedJobType.includes(type)}
                              onChange={() =>
                                setSelectedJobType((prev) => {
                                  if (type === 'all') return ['all'];
                                  if (prev.includes(type)) {
                                    const newState = prev.filter(
                                      (item) => item !== type
                                    );
                                    return newState.length === 0
                                      ? ['all']
                                      : newState;
                                  } else {
                                    const newState = prev.filter(
                                      (item) => item !== 'all'
                                    );
                                    return [...newState, type];
                                  }
                                })
                              }
                              className="text-primary focus:ring-primary rounded w-4 h-4"
                            />
                            <span className="text-gray-600 dark:text-gray-400 capitalize group-hover:text-primary transition-colors text-base">
                              {type.replace('-', ' ')}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <h3 className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaUserGraduate className="text-primary" />
                        Experience Level
                      </div>
                      {selectedExperience.length > 0 && (
                        <span className="text-sm text-primary">{selectedExperience.length} selected</span>
                      )}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {['all', 'entry', 'intermediate', 'senior', 'lead', 'executive'].map(
                        (level) => (
                          <label key={level} className="flex items-center gap-2 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={selectedExperience.includes(level)}
                              onChange={() =>
                                setSelectedExperience((prev) => {
                                  if (level === 'all') return ['all'];
                                  if (prev.includes(level)) {
                                    const newState = prev.filter(
                                      (item) => item !== level
                                    );
                                    return newState.length === 0
                                      ? ['all']
                                      : newState;
                                  } else {
                                    const newState = prev.filter(
                                      (item) => item !== 'all'
                                    );
                                    return [...newState, level];
                                  }
                                })
                              }
                              className="text-primary focus:ring-primary rounded w-4 h-4"
                            />
                            <span className="text-gray-600 dark:text-gray-400 capitalize group-hover:text-primary transition-colors text-base">
                              {level}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-primary" />
                        Location
                      </div>
                      {selectedLocation.length > 0 && (
                        <span className="text-sm text-primary">{selectedLocation.length} selected</span>
                      )}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {['all', 'remote', 'on-site', 'hybrid'].map(
                        (location) => (
                          <label key={location} className="flex items-center gap-2 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={selectedLocation.includes(location)}
                              onChange={() =>
                                setSelectedLocation((prev) => {
                                  if (location === 'all') return ['all'];
                                  if (prev.includes(location)) {
                                    const newState = prev.filter(
                                      (item) => item !== location
                                    );
                                    return newState.length === 0
                                      ? ['all']
                                      : newState;
                                  } else {
                                    const newState = prev.filter(
                                      (item) => item !== 'all'
                                    );
                                    return [...newState, location];
                                  }
                                })
                              }
                              className="text-primary focus:ring-primary rounded w-4 h-4"
                            />
                            <span className="text-gray-600 dark:text-gray-400 capitalize group-hover:text-primary transition-colors text-base">
                              {location.replace('-', ' ')}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  {/* Salary Range */}
                  <div>
                    <h3 className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaMoneyBillWave className="text-primary" />
                        Salary Range
                      </div>
                      <div className="text-sm text-primary font-normal">
                        ${(salaryRange[0] / 1000).toFixed(0)}k - ${(salaryRange[1] / 1000).toFixed(0)}k
                      </div>
                    </h3>
                    <div className="mt-4 px-2">
                      <div className="relative h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
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
                      <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>$0</span>
                        <span>$150k</span>
                      </div>
                    </div>
                  </div>

                  {/* Sort By */}
                  <div>
                    <h3 className="text-gray-700 text-lg font-medium mb-3 flex items-center gap-2">
                      <FaSort className="text-primary" />
                      Sort By
                    </h3>
                    <div className="space-y-3">
                      {[
                        { value: 'newest', label: 'Newest First' },
                        { value: 'oldest', label: 'Oldest First' },
                        { value: 'salary-high', label: 'Highest Salary' },
                        { value: 'salary-low', label: 'Lowest Salary' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="sortBy"
                            checked={sortBy === option.value}
                            onChange={() => setSortBy(option.value)}
                            className="text-primary focus:ring-primary w-4 h-4"
                          />
                          <span className="text-gray-600 group-hover:text-primary transition-colors text-base">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 p-4">
                  <button
                    onClick={onClose}
                    className="w-full bg-primary text-white rounded-lg py-3 font-medium hover:bg-primary/90 transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
            </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FilterJobModal;
