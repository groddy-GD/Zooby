import React, { useState } from 'react';
import { Edit } from 'lucide-react';

const ContentCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = ["Beauty", "Lifestyle", "Fashion", "Technology", "Fitness", "Travel", "Food", "Gaming", "Education"];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold">Content Categories</span>
        <button className="text-gray-600 hover:text-black">
          <Edit className="h-5 w-5" />
        </button>
      </div>
      <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 whitespace-nowrap rounded-lg ${
              selectedCategories.includes(category) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContentCategories;
