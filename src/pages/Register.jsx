import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaGoogle,
  FaGithub,
  FaSignInAlt,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/logo.svg"

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@gmail.com",
    password: "password",
    phone: "1234567890",
    skills: ["React", "Node.js", "JavaScript"],
    experience: "2 years",
    education: "Bachelor's in Computer Science",
    resume: null,
  });

  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    const success = await register(formData);
    if (success) {
      navigate("/");
    }
  };

  const renderStep1 = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Full Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaUser className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="appearance-none relative block w-full px-4 py-3 pl-11 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:border-primary hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 sm:text-sm"
            placeholder="Enter your full name"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaEnvelope className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="appearance-none relative block w-full px-4 py-3 pl-11 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:border-primary hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 sm:text-sm"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaLock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="appearance-none relative block w-full px-4 py-3 pl-11 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:border-primary hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 sm:text-sm"
            placeholder="Create a password"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaPhone className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="appearance-none relative block w-full px-4 py-3 pl-11 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:border-primary hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 sm:text-sm"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="skills"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 ml-1"
        >
          Skills (comma separated)
        </label>
        <input
          id="skills"
          name="skills"
          type="text"
          value={formData.skills}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              skills: e.target.value.split(",").map((skill) => skill.trim()),
            }))
          }
          className="appearance-none relative block w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:border-primary hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 sm:text-sm"
          placeholder="e.g. React, JavaScript, Node.js"
        />
      </div>

      <div>
        <label
          htmlFor="experience"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 ml-1"
        >
          Work Experience
        </label>
        <textarea
          id="experience"
          name="experience"
          rows={3}
          value={formData.experience}
          onChange={handleChange}
          className="appearance-none relative block w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:border-primary hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 sm:text-sm"
          placeholder="Brief description of your work experience"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="education"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 ml-1"
        >
          Education
        </label>
        <textarea
          id="education"
          name="education"
          rows={3}
          value={formData.education}
          onChange={handleChange}
          className="appearance-none relative block w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:border-primary hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 sm:text-sm"
          placeholder="Your educational background"
        />
      </div>

      <div>
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 ml-1"
        >
          Upload Resume
        </label>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              resume: e.target.files[0],
            }))
          }
          className="appearance-none relative block w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:border-primary hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 sm:text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 dark:file:bg-gray-700 file:text-primary dark:file:text-gray-300 hover:file:bg-primary/20 dark:hover:file:bg-gray-600 file:cursor-pointer"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="relative max-w-lg w-full space-y-6 sm:space-y-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-4 sm:p-8 rounded-xl sm:rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_8px_32px_rgba(37,99,235,0.25)]">
        {/* Card decoration */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="relative w-24 h-24 mx-auto group">
            <div className="relative bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/20 dark:border-gray-600/20 group-hover:scale-105 group-hover:shadow-primary/25 transition-all duration-500">
              <img
                className="w-full h-full object-contain animate-float drop-shadow-xl"
                src={Logo}
                alt="HireUpp Logo"
              />
            </div>
          </div>
          <h2 className="mt-8 text-center">
            <span className="flex items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Create Account{" "}
              <FaUser className="w-8 h-8 text-gray-900 dark:text-white animate-bounce-subtle" />
            </span>
          </h2>
          <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400 tracking-wide">
            Already have an account?{" "}
            <Link
              to="/login"
              className="relative z-10 inline-flex items-center gap-1.5 font-medium text-primary hover:text-primary/80 bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FaSignInAlt className="w-4 h-4" />
              <span>Sign in</span>
            </Link>
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                s === step
                  ? "bg-primary scale-125 shadow-lg shadow-primary/30 dark:shadow-primary/50"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-primary via-primary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              {loading
                ? "Processing..."
                : step === 3
                ? "Create Account"
                : "Next"}
            </button>
          </div>

          {step === 1 && (
            <>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-500 dark:text-gray-300 rounded-full">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-3 px-4 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-white hover:border-primary/30 hover:text-primary transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <FaGoogle className="h-5 w-5 text-red-500" />
                  </button>

                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-3 px-4 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-white hover:border-primary/30 hover:text-primary transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <FaGithub className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                  </button>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
