import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const JobContext = createContext();

import { jobsData } from '../data/data';

const getStoredJobs = (key) => {
  const stored = localStorage.getItem(key);
  if (!stored) return [];
  
  // Get stored job IDs
  const storedJobs = JSON.parse(stored);
  
  // Map through stored jobs and merge with current jobsData to get updated logos
  return storedJobs.map(storedJob => {
    const currentJob = jobsData.find(j => j.id === storedJob.id);
    // Merge stored job data with current job data, prioritizing stored data but keeping current logo
    return currentJob ? { ...storedJob, logo: currentJob.logo } : storedJob;
  });
};

export const JobProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState(() => getStoredJobs('savedJobs'));
  const [appliedJobs, setAppliedJobs] = useState(() => getStoredJobs('appliedJobs'));
  const [archivedJobs, setArchivedJobs] = useState(() => getStoredJobs('archivedJobs'));
  const [interviewJobs, setInterviewJobs] = useState(() => getStoredJobs('interviewJobs'));

  // Update localStorage when states change
  useEffect(() => {
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }, [savedJobs]);

  useEffect(() => {
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  useEffect(() => {
    localStorage.setItem('archivedJobs', JSON.stringify(archivedJobs));
  }, [archivedJobs]);

  useEffect(() => {
    localStorage.setItem('interviewJobs', JSON.stringify(interviewJobs));
  }, [interviewJobs]);

  const saveJob = (job) => {
    if (!savedJobs.find(j => j.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
      toast.success('Job saved successfully!');
    } else {
      toast.info('Job already saved');
    }
  };

  const removeJob = (jobId, section) => {
    switch(section) {
      case 'saved':
        setSavedJobs(savedJobs.filter(job => job.id !== jobId));
        break;
      case 'applied':
        setAppliedJobs(appliedJobs.filter(job => job.id !== jobId));
        break;
      case 'archived':
        setArchivedJobs(archivedJobs.filter(job => job.id !== jobId));
        break;
      case 'interviews':
        setInterviewJobs(interviewJobs.filter(job => job.id !== jobId));
        break;
      default:
        return;
    }
    toast.success('Job removed successfully!');
  };

  const applyToJob = (job) => {
    if (!appliedJobs.find(j => j.id === job.id)) {
      setAppliedJobs([...appliedJobs, job]);
      // Remove from saved if it was saved
      setSavedJobs(savedJobs.filter(j => j.id !== job.id));
      toast.success('Application submitted successfully!');
    } else {
      toast.info('Already applied to this job');
    }
  };

  const archiveJob = (job) => {
    setArchivedJobs([...archivedJobs, job]);
    setAppliedJobs(appliedJobs.filter(j => j.id !== job.id));
    toast.success('Job archived successfully');
  };

  const moveToInterview = (job) => {
    setInterviewJobs([...interviewJobs, job]);
    setAppliedJobs(appliedJobs.filter(j => j.id !== job.id));
    toast.success('Job moved to interviews');
  };

  const isJobSaved = (jobId) => savedJobs.some(job => job.id === jobId);
  const isJobApplied = (jobId) => appliedJobs.some(job => job.id === jobId);

  return (
    <JobContext.Provider value={{
      savedJobs,
      appliedJobs,
      archivedJobs,
      interviewJobs,
      saveJob,
      applyToJob,
      removeJob,
      archiveJob,
      moveToInterview,
      isJobSaved,
      isJobApplied
    }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJob must be used within a JobProvider');
  }
  return context;
};
