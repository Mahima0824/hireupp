import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Job from "../pages/Job";
import Company from "../pages/Company";
import JobDetails from "../components/job/JobDetails";
import CompanyDetails from "../components/company/CompanyDetails";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import SavedJobs from "../pages/SavedJobs";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
const Routespath = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/jobs" element={<ProtectedRoute><Job /></ProtectedRoute>} />
        <Route path="/company" element={<ProtectedRoute><Company /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/saved-jobs" element={<ProtectedRoute><SavedJobs /></ProtectedRoute>} />
        <Route path="/job/:id" element={<ProtectedRoute><JobDetails /></ProtectedRoute>} />
        <Route path="/company/:id" element={<ProtectedRoute><CompanyDetails /></ProtectedRoute>} />
      </Routes>
    </>
  );
};

export default Routespath;
