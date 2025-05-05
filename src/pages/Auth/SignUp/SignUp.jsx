import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import GetStartedButton from "./components/GetStartedButton";
import EmailOtp from "./components/EmailOtp";
import MobileOtp from "./components/MobileOtp";
// Replace with your actual image path

const Signup = () => {
  const [step, setStep] = useState("signup");
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const validateInput = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!value) return "Please enter your email or phone number.";
    if (!emailRegex.test(value) && !phoneRegex.test(value)) return "Enter a valid email or 10-digit mobile number.";
    return "";
  };

  const handleSubmit = () => {
    const validationError = validateInput(inputValue);
    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      setStep(inputValue.includes("@") ? "emailOtp" : "mobileOtp");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#EEF7D6] to-[#D2EA93] px-6">
      {/* Left Side - Image (Hidden on Mobile) */}
      <div className="hidden md:flex md:w-1/2 h-screen items-center justify-center">
        <img 
          src="https://via.placeholder.com/500" 
          alt="Sign Up" 
          className="w-3/4 max-w-md rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center bg-white p-8 md:p-12">
        {step === "signup" ? (
          <>
            <h2 className="text-3xl font-bold text-black">Create your account as Influencer</h2>

            <button className="flex items-center gap-3 px-6 py-2 mt-4 w-full max-w-xs border border-gray-300 rounded-lg text-lg font-semibold bg-white shadow hover:bg-gray-100 transition">
              <FcGoogle className="text-2xl" />
              Sign up with Google
            </button>

            <div className="relative my-4 w-full max-w-xs flex items-center">
  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
  <span className="px-4 text-gray-500 bg-white">or</span>
  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>
</div>


            <h3 className="text-lg font-semibold text-gray-700">Sign Up with your Email / Mobile Number</h3>
            <input
              type="text"
              placeholder="Enter your Email / Mobile Number"
              className="w-full max-w-xs mt-4 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#9cbd47]"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <div className="flex items-center gap-2 mt-4 text-gray-600 text-xs">
              <input type="checkbox" className="w-4 h-4 accent-[#829E3C]" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
              <label className="cursor-pointer">Yes, I agree to <span className="underline">Terms & Conditions</span> & <span className="underline">Privacy Statement</span>.</label>
            </div>

            <GetStartedButton handleClick={handleSubmit} inputValue={inputValue} isChecked={isChecked} />

            <button className="w-full max-w-xs mt-3 px-6 py-2 border border-gray-400 rounded-lg text-lg font-semibold bg-transparent hover:bg-gray-100 transition">
              Enter as Guest
            </button>

            <p className="mt-4 text-gray-600">
              Already have an account? <a href="/signin" className="text-[#526426] font-semibold">Sign In</a>
            </p>
          </>
        ) : step === "emailOtp" ? (
          <EmailOtp email={inputValue} setStep={setStep} />
        ) : (
          <MobileOtp phone={inputValue} setStep={setStep} />
        )}
      </div>
    </div>
  );
};

export default Signup;
