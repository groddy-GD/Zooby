import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold italic text-black">Zooby</div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          className="px-4 py-2 border border-gray-400 rounded-lg font-bold hover:bg-[#c4e473] active:bg-[#b7de54] transition"
          onClick={() => navigate("/signup")}
        >
          Sign In
        </button>
        <button
          className="px-4 py-2 bg-[#c4e473] rounded-lg font-bold hover:bg-[#b7de54] active:bg-[#9cbd47] transition"
          onClick={() => navigate("/signup")}
        >
          Join for Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
