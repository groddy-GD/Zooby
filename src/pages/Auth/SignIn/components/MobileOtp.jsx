import React, { useState } from "react";

const MobileOtp = ({ phone, setStep }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const handleChange = (index, value) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);
    if (value && index < 5) document.getElementById(`otp-${index + 1}`)?.focus();
  };

  const handleVerify = () => {
    if (otp.join("") === "123456") {
      alert("Mobile Number Verified Successfully!");
      setStep("signin");
    } else {
      setError("Your OTP is incorrect");
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-black mb-4">Verify your Mobile Number</h2>
      <p className="text-gray-600">
        OTP sent to <span className="font-semibold">{phone}</span>{" "}
        <button onClick={() => setStep("signin")} className="text-[#526426] underline">Edit</button>
      </p>

      <div className="flex justify-center gap-2 mt-6">
        {otp.map((_, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            maxLength={1}
            className="w-12 h-12 text-2xl text-center border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9cbd47]"
            value={otp[i]}
            onChange={(e) => handleChange(i, e.target.value)}
          />
        ))}
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <button className="mt-6 px-6 py-3 bg-[#9cbd47] text-white rounded-lg hover:bg-[#829E3C]" onClick={handleVerify}>
        Verify OTP
      </button>
    </div>
  );
};

export default MobileOtp;
