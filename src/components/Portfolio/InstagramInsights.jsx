import React, { useState, useEffect } from "react";
import { Heart, MessageCircle, Handshake, User, Share } from "lucide-react";
import { Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

const InstagramInsights = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/instagramInsights")
      .then((res) => {
        console.log("API Response:", res.data); // Debugging
        setData(res.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Ensure data is available before rendering
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
      {/* First Section: Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={<User />} value={data?.followers || 0} label="Followers" />
        <StatCard icon={<Handshake />} value={`${data?.engagementRate || 0}`} label="Average Engagement" />
        <StatCard icon={<Heart />} value={data?.averageLikes || 0} label="Average Likes" />
        <StatCard icon={<MessageCircle />} value={data?.averageComments || 0} label="Average Comments" />
      </div>

      {/* Second Section: Audience Insights */}
      <div className="mt-6">
        <h2 className="text-lg font-bold">Audience Insights</h2>
        <p className="text-sm text-gray-500">Data of last 90 days</p>

        {/* Demographics */}
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold">Demographics</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {data?.demographics?.gender && (
              <div className="text-center">
                <p className="font-medium">Gender Distribution</p>
                <Doughnut data={generateGenderChartData(data.demographics.gender)} />
              </div>
            )}
            {data?.demographics?.ageDistribution && (
              <div className="text-center">
                <p className="font-medium">Age Distribution</p>
                <Bar data={generateAgeChartData(data.demographics.ageDistribution)} />
              </div>
            )}
          </div>
        </div>

        {/* Geography */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold">Geography</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="font-medium text-center">Top Locations</p>
              <img src="/map-placeholder.png" alt="Top locations map" className="rounded-lg w-full h-40" />
            </div>
            <div>
              <p className="font-medium">Top Performing Cities</p>
              <ul className="text-sm mt-2">
                {data?.geography?.topCities?.map((city, index) => (
                  <li key={index} className="flex justify-between border-b py-1">
                    <span>{city.name}</span>
                    <span>{city.percentage}%</span>
                  </li>
                ))}
              </ul>

              <p className="font-medium mt-4">Top Performing Countries</p>
              <ul className="text-sm mt-2">
                {data?.geography?.topCountries?.map((country, index) => (
                  <li key={index} className="flex justify-between border-b py-1">
                    <span>{country.name}</span>
                    <span>{country.percentage}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Posts */}
      <div className="mt-6">
        <h2 className="text-lg font-bold">Trending Posts</h2>
        <div className="flex overflow-x-auto space-x-4 mt-4 scrollbar-hide">
          {data?.trendingPosts?.length > 0 ? (
            data.trendingPosts.map((post, index) => (
              <TrendingPostCard key={index} post={post} />
            ))
          ) : (
            <p>No trending posts available</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, value, label }) => (
  <div className="p-4 bg-gray-200 rounded-lg flex flex-col items-center">
    <div className="text-blue-500">{icon}</div>
    <p className="text-lg font-bold">{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

// Trending Post Card Component
const TrendingPostCard = ({ post }) => (
  <div className="bg-gray-100 rounded-lg p-3 min-w-[200px]">
    <p className="text-sm font-semibold">{post.likes} Most liked post</p>
    <img src={post.image} alt="Post" className="w-full h-32 object-cover mt-2 rounded" />
    <div className="flex justify-between text-xs mt-2">
      <span className="flex items-center"><Heart className="h-4 w-4 mr-1" /> {post.likes}</span>
      <span className="flex items-center"><MessageCircle className="h-4 w-4 mr-1" /> {post.comments}</span>
      <span className="flex items-center"><Share className="h-4 w-4 mr-1" /> {post.shares}</span>
      <span className="flex items-center"><Handshake className="h-4 w-4 mr-1" /> {post.engagement}%</span>
    </div>
    <p className="text-gray-500 text-xs mt-1">{post.timeAgo}</p>
  </div>
);

// Gender Chart Data
const generateGenderChartData = (genderData) => ({
  labels: ["Male", "Female"],
  datasets: [
    {
      data: [genderData?.male || 0, genderData?.female || 0],
      backgroundColor: ["#36A2EB", "#FF6384"],
    },
  ],
});

// Age Chart Data
const generateAgeChartData = (ageData) => ({
  labels: Object.keys(ageData || {}),
  datasets: [
    {
      label: "Age Distribution",
      data: Object.values(ageData || {}),
      backgroundColor: "#FF6384",
    },
  ],
});

export default InstagramInsights;
