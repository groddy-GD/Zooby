import React, { useState, useEffect } from "react";
import { Eye, ThumbsUp, MessageCircle, Share } from "lucide-react";
import { Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

const YoutubeInsights = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/youtubeInsights")
      .then((res) => {
        console.log("YouTube API Response:", res.data);
        setData(res.data);
      })
      .catch((error) => console.error("Error fetching YouTube data:", error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={<Eye />} value={data.subscribers} label="Subscribers" />
        <StatCard icon={<Eye />} value={data.averageViews} label="Avg Views" />
        <StatCard icon={<ThumbsUp />} value={data.averageLikes} label="Avg Likes" />
        <StatCard icon={<MessageCircle />} value={data.averageComments} label="Avg Comments" />
      </div>

      {/* Audience Insights */}
      {/* <div className="mt-6">
        <h2 className="text-lg font-bold">Audience Insights</h2>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="font-medium">Gender Distribution</p>
          <Doughnut data={generateGenderChartData(data.demographics.gender)} />
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <p className="font-medium">Age Distribution</p>
          <Bar data={generateAgeChartData(data.demographics.ageDistribution)} />
        </div>
      </div> */}
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

      {/* Geography Section */}
      {/* <div className="mt-6">
        <h2 className="text-lg font-bold">Geography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="font-medium">Top Performing Cities</p>
            <ul className="text-sm mt-2">
              {data.geography.topCities.map((city, index) => (
                <li key={index} className="flex justify-between border-b py-1">
                  <span>{city.name}</span>
                  <span>{city.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium">Top Performing Countries</p>
            <ul className="text-sm mt-2">
              {data.geography.topCountries.map((country, index) => (
                <li key={index} className="flex justify-between border-b py-1">
                  <span>{country.name}</span>
                  <span>{country.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}

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
     

      {/* Trending Videos */}
      <div className="mt-6">
        <h2 className="text-lg font-bold">Trending Videos</h2>
        <div className="flex overflow-x-auto space-x-4 mt-4 scrollbar-hide">
          
          {data?.trendingVideos?.length > 0 ? (
            data.trendingVideos.map((video, index) => (
              <TopVideoCard key={index} video={video} />
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
    <div className="text-red-500">{icon}</div>
    <p className="text-lg font-bold">{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

// Top Video Card Component
const TopVideoCard = ({ video }) => (
  <div className="bg-gray-100 rounded-lg p-3 min-w-[200px]">
    <p className="text-sm font-semibold">{video.title}</p>
    <img src={video.image} alt="Post" className="w-full h-32 object-cover mt-2 rounded" />
    <div className="flex justify-between text-xs mt-2">
      <span className="flex items-center"><Eye className="h-4 w-4 mr-1" /> {video.views}</span>
      <span className="flex items-center"><ThumbsUp className="h-4 w-4 mr-1" /> {video.likes}</span>
      <span className="flex items-center"><MessageCircle className="h-4 w-4 mr-1" /> {video.comments}</span>
      <span className="flex items-center"><Share className="h-4 w-4 mr-1" /> {video.shares}</span>
    </div>
    <p className="text-gray-500 text-xs mt-1">{video.timeAgo}</p>
  </div>
);

// Gender Chart Data
const generateGenderChartData = (genderData) => ({
  labels: ["Male", "Female"],
  datasets: [
    {
      data: [genderData.male, genderData.female],
      backgroundColor: ["#FF0000", "#36A2EB"],
    },
  ],
});

// Age Chart Data
const generateAgeChartData = (ageData) => ({
  labels: Object.keys(ageData),
  datasets: [
    {
      label: "Age Distribution",
      data: Object.values(ageData),
      backgroundColor: "#FF0000",
    },
  ],
});

export default YoutubeInsights;