import React from "react";
import { CheckCircle, MapPin, Globe, Edit, Eye } from "lucide-react";

const UserDetails = () => {
  const profileCompletion = 75; // Example: User profile is 75% complete

  return (
    <div className="flex flex-col md:flex-row p-4 mt-10 bg-white relative">
      {/* Right Section (Preview & Edit Buttons) - Moved to Top */}
      <div className="absolute top-2 right-4 flex gap-2">
        <button className="p-2 bg-gray-200 rounded-lg text-sm">
          <Eye className="h-5 w-5" />
        </button>
        <button className="p-2 bg-gray-200 rounded-lg text-sm">
          <Edit className="h-5 w-5" />
        </button>
      </div>

      {/* Left Section */}
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-2/3">
        {/* Profile Picture with Progress */}
        <div className="relative flex justify-start">
          <svg width="90" height="90" viewBox="0 0 100 100" className="absolute">
            {/* Background Circle */}
            <circle cx="50" cy="50" r="40" stroke="#E5E7EB" strokeWidth="5" fill="none" />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#3B82F6"
              strokeWidth="5"
              fill="none"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (251.2 * profileCompletion) / 100}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <img
            src="/profile.jpg"
            alt="User"
            className="h-20 w-20 rounded-full border-4 border-white relative"
          />
        </div>

        {/* User Details */}
        <div className="flex flex-col justify-center w-full">
          {/* Name & Verification */}
          <div className="flex items-center justify-between w-full">
            <span className="text-lg font-bold">User Name</span>
            {/* Small Screen: Show Only Icon */}
            <button className="p-2 bg-gray-300 text-white rounded-lg text-sm md:hidden">
              <CheckCircle className="h-5 w-5" />
            </button>
            {/* Large Screen: Show Button */}
            <button className="hidden md:flex items-center gap-1 px-3 py-1 bg-gray-300 text-white rounded-lg text-sm">
              <CheckCircle className="h-4 w-4" /> Get Verified
            </button>
          </div>

          {/* Location & Language (Same Row) */}
          <div className="flex gap-4 text-gray-600 text-sm mt-1">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Location
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" /> Add languages
            </div>
          </div>

          {/* Bio Edit (Max 2 Lines) */}
          <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
            <Edit className="h-4 w-4" />
            <span className="line-clamp-2">Describe about you. This text will adjust based on user input but will not exceed two lines.</span>
          </div>

          {/* Contact Button (Smaller Padding) */}
          <button className="mt-2 px-2 py-1 bg-gray-300 text-white rounded-full">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
