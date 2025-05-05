import { useState } from "react";
import { FaChevronRight, FaPlus, FaTimes } from "react-icons/fa";

const topicsList = [
  "Beauty", "Fashion", "Photography", "Fitness", "Travel", "Food", 
  "Lifestyle", "Gaming", "Technology", "Health", "Music", "Finance"
];

const StepThree = ({ nextStep, prevStep }) => {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else if (selectedTopics.length < 6) {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Skip & Description */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-black text-sm">About your content</p>
        <button onClick={nextStep} className="flex items-center text-black">
          Skip <FaChevronRight className="ml-1" />
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-2">Choose Your Niche Primary Contents</h2>
      <p className="text-black text-sm mb-4">Choose up to 6 topics</p>

      {/* Selected Topics */}
      <div className="min-h-[50px] border p-2 mb-4 rounded-md flex flex-wrap gap-2">
        {selectedTopics.map(topic => (
          <div key={topic} className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            {topic}
            <button className="ml-2 text-blue-700" onClick={() => toggleTopic(topic)}>
              <FaTimes />
            </button>
          </div>
        ))}
      </div>

      {/* Topics List */}
      <div className="border p-2 rounded-md h-40 overflow-y-auto flex flex-wrap gap-2">
        {topicsList.map(topic => (
          <button
            key={topic}
            onClick={() => toggleTopic(topic)}
            className={`flex items-center px-3 py-1 rounded-full text-sm ${
              selectedTopics.includes(topic)
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {topic}
            <span className="ml-2">
              {selectedTopics.includes(topic) ? <FaTimes /> : <FaPlus />}
            </span>
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4">
        <button onClick={prevStep} className="flex-1 bg-gray-400 text-white py-2 rounded">Back</button>
        <button onClick={nextStep} className="flex-1 bg-gray-700 text-white py-2 rounded">Next</button>
      </div>
    </div>
  );
};

export default StepThree;
