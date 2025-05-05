import React, { useState } from "react";
import { Instagram, Youtube } from "lucide-react";
import InstagramInsights from "./InstagramInsights";
import YoutubeInsights from "./YoutubeInsights";

const Switcher = () => {
  const [activeTab, setActiveTab] = useState("instagram");

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* Switcher Buttons */}
      <div className="flex space-x-4 border-b pb-2">
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
            activeTab === "instagram" ? "bg-gray-200 font-bold" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("instagram")}
        >
          <Instagram className="h-5 w-5" /> <span>Instagram</span>
        </button>
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
            activeTab === "youtube" ? "bg-gray-200 font-bold" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("youtube")}
        >
          <Youtube className="h-5 w-5" /> <span>YouTube</span>
        </button>
      </div>

      {/* Insights Section */}
      <div className="mt-4">
        {activeTab === "instagram" ? <InstagramInsights /> : <YoutubeInsights />}
      </div>
    </div>
  );
};

export default Switcher;
