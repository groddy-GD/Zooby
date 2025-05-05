import React from "react";
import { motion } from "framer-motion";
import Navbar from "../constants/Navbar";
import { useNavigate } from "react-router-dom";

const images = [
  "/images/green-galaxy1.jpg",
  "/images/green-galaxy2.jpg",
  "/images/green-galaxy3.jpg",
  "/images/green-galaxy4.jpg",
];

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#0D1108]  overflow-hidden">
      <Navbar />

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#829E3C] rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ duration: Math.random() * 8 + 5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative text-center py-36 px-6">
        <motion.h1
          className="text-6xl font-extrabold tracking-wide text-[#C4E473] drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Elevate Your Influence
        </motion.h1>
        <motion.p
          className="text-lg mt-6 text-[#A3A79E] max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Join the most exclusive influencer-brand network, designed for effortless collaborations and premium experiences.
        </motion.p>
        <div className="mt-8 flex justify-center gap-4">
          <motion.button
            className="px-8 py-4 bg-[#9CBD47] text-black rounded-full text-lg font-semibold shadow-md hover:bg-[#B7DE54] active:bg-[#829E3C] transition"
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/signup")}
          >
            Get Early Access
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6 text-center bg-[#171B12]">
        <h2 className="text-4xl font-semibold text-[#C4E473]">Why Zooby?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {[
            { title: "AI-Driven Matches", desc: "Seamlessly connect with ideal brand partners." },
            { title: "Luxury Collaborations", desc: "Only premium influencers & high-end brands." },
            { title: "Blockchain Security", desc: "Protected, transparent, and trust-driven deals." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="w-80 p-6 backdrop-blur-md bg-[#3F433A]/30 border border-[#9CBD47] rounded-2xl shadow-lg transform hover:scale-105 transition"
              animate={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-xl font-medium text-[#B7DE54]">{feature.title}</h3>
              <p className="text-[#A3A79E] mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-6 text-center bg-[#0D1108]">
        <h2 className="text-4xl font-semibold text-[#C4E473]">About Zooby</h2>
        <p className="mt-6 text-[#A3A79E] max-w-3xl mx-auto">
          Zooby is more than just a platform—it's a movement. We bring together elite influencers and luxury brands for seamless, secure, and profitable partnerships.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="relative py-20 px-6 bg-[#171B12] text-center">
        <h2 className="text-4xl font-semibold text-[#C4E473]">Discover the Experience</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="w-64 h-64 bg-cover bg-center rounded-lg shadow-lg border border-[#9CBD47] hover:scale-105 transition"
              style={{ backgroundImage: `url(${src})` }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-[#A3A79E] bg-[#0D1108]">
        © 2025 Zooby. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
