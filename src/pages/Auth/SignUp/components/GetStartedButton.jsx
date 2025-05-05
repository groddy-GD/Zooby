import React from "react";

const GetStartedButton = ({ handleClick, inputValue, isChecked }) => {
  const validateInput = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const isDisabled = !validateInput(inputValue) || !isChecked;

  return (
    <button 
      className={`w-full max-w-xs mt-4 px-6 py-2 text-white text-lg font-semibold rounded-lg transition 
        ${isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#9cbd47] hover:bg-[#829E3C]"}`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      Get Started
    </button>
  );
};

export default GetStartedButton;
