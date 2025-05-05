import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const optionsList = [
  "A. Collaborate with top brands",
  "B. Grow my audience and influence",
  "C. Monetize my content",
  "D. Explore new opportunities"
];

const StepFour = ({ prevStep }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleSubmit = () => {
    // Simulating API call
    const isSuccess = Math.random() > 0.3; // 70% success rate for demo

    if (isSuccess) {
      setPopupMessage("Welcome to Zooby!");
    } else {
      setPopupMessage("Try again.");
    }
  };

  return (
    <div className="w-full max-w-lg flex flex-col gap-4">
      {/* Skip & Description */}
      <div className="flex justify-between items-center my-3">
        <p className="text-black text-sm">Tell us why you're joining Zooby.</p>
        <button onClick={handleSubmit} className="flex items-center text-sm text-black">
          Skip <FaChevronRight className="ml-1 text-sm" />
        </button>
      </div>

      {/* Question Heading */}
      <h2 className="text-2xl font-bold ">Why do you want to join Zooby?</h2>
      <p className="text-black text-sm mb-4">Choose multiple suitable options.</p>

      {/* Options List */}
      <div className="flex flex-col gap-3">
        {optionsList.map((option) => (
          <button
            key={option}
            onClick={() => toggleOption(option)}
            className={`w-full px-4 py-2 border rounded-md text-left ${
              selectedOptions.includes(option) ? "bg-blue-100 border-blue-500 text-blue-700" : "bg-gray-100 border-gray-300 text-gray-700"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4">
        <button onClick={prevStep} className="flex-1 bg-gray-400 text-white py-2 rounded">Back</button>
        <button onClick={handleSubmit} className="flex-1 bg-gray-700 text-white py-2 rounded">Submit</button>
      </div>

      {/* Popup Message */}
      {popupMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold">{popupMessage}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setPopupMessage("")}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepFour;
