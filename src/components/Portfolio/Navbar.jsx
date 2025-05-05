import React from 'react';
import { useState, useEffect } from "react";
import ShareProfile from "./NavbarComponents/ShareProfile";
import Notifications from './NavbarComponents/Notifications';
const Navbar = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    

  return (
    <nav className="bg-gray-300 w-full fixed top-0 z-10">
    <div className="flex justify-between items-center p-3 max-w-4xl mx-auto md:px-8 lg:px-16">
      {/* Left Side - Logo and Title */}
      <div className="flex items-center gap-2">
        <img src="/profile.jpg" alt="Logo" className="h-8 w-8 lg:w-10" />
        <span className="text-lg font-semibold relative ">
      <span className="hidden sm:inline ">My Portfolio</span>
      <span className="sm:hidden">Portfolio</span>
      <span
        className={`absolute left-0 bottom-0 h-[2px] bg-black transition-all duration-700 ${
          animate ? "w-full" : "w-0"
        }`}
      />
    </span>
      </div>
      
      {/* Right Side - Buttons and Icons */}
      <div className="flex items-center gap-4">
      <div className="relative">
      {/* Button */}
       <ShareProfile />
    </div>
        <div className="relative">
          <Notifications />
        </div>
        <img src="/user.jpg" alt="User" className="h-8 w-8 rounded-full" />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
