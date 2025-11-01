"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function HeroHome() {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<
    { top: string; left: string; delay: number; duration: number; size: number }[]
  >([]);

  useEffect(() => {
    setIsClient(true);

    // ✨ Floating subtle yellow particles
    const newParticles = Array.from({ length: 30 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 4,
      duration: 8 + Math.random() * 6,
      size: 1 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  if (!isClient) return null;

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden text-white py-28 md:py-36 space-y-20"
      style={{ backgroundColor: "#121212" }} // 🌆 Sleek dark gray SF-style background
    >
      {/* 🌟 Ambient center glow */}
      <div className="absolute inset-0 -z-30">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 w-[750px] h-[750px]
          -translate-x-1/2 -translate-y-1/2
          bg-[radial-gradient(circle,rgba(255,215,100,0.07)_0%,rgba(18,18,18,0)_75%)] blur-3xl"
        />
      </div>

      {/* 💡 Left and right cinematic light beams */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Left beam */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4], rotate: [-2, 2, -2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-[40vw] h-full
          bg-[linear-gradient(115deg,rgba(255,230,150,0.08)_0%,rgba(255,230,150,0)_70%)]
          blur-[120px] mix-blend-screen"
        />
        {/* Right beam */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4], rotate: [2, -2, 2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-0 top-0 w-[40vw] h-full
          bg-[linear-gradient(-115deg,rgba(255,230,150,0.08)_0%,rgba(255,230,150,0)_70%)]
          blur-[120px] mix-blend-screen"
        />
      </div>

      {/* ☀️ Light ray overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,180,0.05)_0deg,transparent_60deg,rgba(255,255,180,0.05)_120deg,transparent_180deg,rgba(255,255,180,0.05)_240deg,transparent_300deg,rgba(255,255,180,0.05)_360deg)] mix-blend-soft-light blur-3xl opacity-70"
        />
      </div>

      {/* 🧠 Main content */}
      <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-yellow-300 drop-shadow-[0_0_15px_rgba(255,215,100,0.2)]"
        >
          Interview Coder
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
          className="mt-8 max-w-2xl mx-auto text-lg text-yellow-100/90 leading-relaxed md:leading-loose"
        >
          Trusted by{" "}
          <span className="text-yellow-300 font-semibold">
            100,000+ developers
          </span>{" "}
          to land six-figure offers at top tech companies.
          <br />
          Master coding interviews faster with our intelligent, AI-powered prep suite.
        </motion.p>

        {/* ✨ Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* 🚀 Download for Windows */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="relative inline-flex items-center justify-center px-10 py-4
            text-lg font-semibold text-black bg-yellow-400 rounded-full
            shadow-[0_0_25px_rgba(255,230,120,0.4)] hover:shadow-[0_0_45px_rgba(255,230,120,0.6)]
            transition-all duration-500"
          >
            Download for Windows
          </motion.a>

          {/* 🍎 Download for iOS */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="inline-flex items-center justify-center px-10 py-4
            text-lg font-semibold text-yellow-200 border border-yellow-400/70
            rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Download for iOS
          </motion.a>
        </motion.div>
      </div>

      {/* 🎥 Demo video bubble */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
        className="relative w-full max-w-6xl px-6 text-center z-10"
      >
        <p className="text-yellow-200/90 text-lg mb-6">
          A Few Words from Our CEO's Roy and Abdulla
        </p>

        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(255,230,120,0.25)] border border-yellow-400/30 backdrop-blur-md bg-white/5">
          <video
            className="w-full h-[75vh] object-cover rounded-[2.5rem]"
            autoPlay
            loop
            muted
            playsInline
            src="/videos/animation.mp4"
          />
          {/* Soft glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* 🌌 Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-300 blur-[1.5px]"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: ["0%", "100%"],
              x: ["0%", "10%"],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(HeroHome), { ssr: false });
