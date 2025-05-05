import React, { useState } from "react";
import Navbar from "../../components/Portfolio/Navbar";
import UserDetails from "../../components/Portfolio/UserDetails";
import Switcher from "../../components/Portfolio/Switcher";
import ContentCategories from "../../components/Portfolio/ContentCategories";
import BrandsWorkedWith from "../../components/Portfolio/BrandsWorkedWith";
import Testimonials from "../../components/Portfolio/Testimonials";

const Portfolio = () => {
  const [platform, setPlatform] = useState("instagram");

  return (
    <div className="bg-white min-h-screen">
       {/* Navbar */}
      <Navbar />

      <div className="max-w-4xl mx-auto p-4">
        {/* User Details */}
        <UserDetails />

        {/* Platform Switcher */}
        <div className="mt-4">
          <Switcher setPlatform={setPlatform} platform={platform} />
        </div>

        {/* Content Categories */}
        <div className="mt-4">
          <ContentCategories />
        </div>

        {/* Brands Worked With */}
        <div className="mt-4">
          <BrandsWorkedWith />
        </div>

        {/* Testimonials */}
        <div className="mt-4">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
