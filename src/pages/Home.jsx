import React from "react";
import JobCategories from "../components/Home/JobCategories";
import JobListing from "../components/Home/JobListing";
import HowItWorks from "../components/Home/HowItWorks";
import Testimonials from "../components/Home/Testimonials";
import CTA from "../components/Home/CTA";
import Herosection from "../components/Home/Herosection";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900/90 dark:via-gray-900/90 dark:to-gray-900/90 backdrop-blur-sm relative overflow-hidden min-h-screen transition-colors duration-500">
     
      <div className="relative z-10">

      {/* Hero Section */}
      <Herosection />
      <JobCategories />
      <JobListing />
      <HowItWorks />
      <Testimonials />
      <CTA />
      </div>
    </div>
  );
};

export default Home;
