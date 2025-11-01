"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Workflows() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ top: string; left: string; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    const randomParticles = Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 4,
      duration: 8 + Math.random() * 6,
      size: 1 + Math.random() * 2,
    }));
    setParticles(randomParticles);
  }, []);

  return (
    <section
      className="relative py-28 md:py-36 text-yellow-200 overflow-hidden"
      style={{ backgroundColor: "#121212" }} // same dark gray SF-style background
    >
      {/* 🌟 Ambient radial glow */}
      <div className="absolute inset-0 -z-30">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px]
          -translate-x-1/2 -translate-y-1/2
          bg-[radial-gradient(circle,rgba(255,215,100,0.07)_0%,rgba(18,18,18,0)_75%)] blur-3xl"
        />
      </div>

      {/* ✨ Floating glow particles */}
      {mounted && (
        <div className="absolute inset-0 -z-10">
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
      )}

      {/* 📦 Content container */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,220,120,0.25)]">
            Seamless Workflows
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-yellow-100/80 leading-relaxed md:leading-loose text-lg">
            Streamline your engineering pipeline with intelligent automation, effortless scaling, and adaptive systems built for modern teams.
          </p>
        </motion.div>

        {/* 🌐 Workflow cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Adaptive Systems",
              desc: "Workflows that evolve with your team — flexible, intelligent, and built to learn as you grow.",
            },
            {
              title: "Instant Scaling",
              desc: "Deploy updates or entire architectures in seconds with dynamic infrastructure built for agility.",
            },
            {
              title: "AI-Driven Automation",
              desc: "Leverage context-aware AI to handle the busywork, from testing to deployment and beyond.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-zinc-950 border border-yellow-500/10 rounded-2xl p-10 text-left hover:border-yellow-300/40 hover:shadow-[0_0_40px_rgba(255,220,100,0.15)] transition-all duration-500"
            >
              {/* Subtle internal gradient glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              <h3 className="text-xl font-semibold text-yellow-300 mb-4 tracking-wide">
                {item.title}
              </h3>
              <p className="text-yellow-100/70 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-20 text-yellow-400/60 text-sm tracking-widest uppercase"
        >
          Built for the Future. Crafted for Developers.
        </motion.p>
      </div>
    </section>
  );
}
