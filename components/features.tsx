"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

import Feature1 from "@/public/images/feature-1.svg";
import Feature2 from "@/public/images/feature-2.svg";
import Feature3 from "@/public/images/feature-3.svg";
import Icon1 from "@/public/images/icon-1.svg";
import Icon2 from "@/public/images/icon-2.svg";
import Icon3 from "@/public/images/icon-3.svg";

function FloatingParticles() {
  const [particles, setParticles] = useState<
    { top: string; left: string; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 14 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 6,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-70 blur-[1px]"
          animate={{
            y: ["0%", "100%"],
            x: ["0%", "10%"],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{ top: p.top, left: p.left }}
        />
      ))}
    </div>
  );
}

export default function Features() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const features = [
    {
      title: "Modular Architecture",
      desc: "Adapt effortlessly with a system built to evolve. Plug, extend, and optimize as your product grows.",
      img: Feature1,
      icon: Icon1,
    },
    {
      title: "Predictive Insights",
      desc: "Gain instant visibility into performance and user behavior with AI-driven analytics.",
      img: Feature2,
      icon: Icon2,
    },
    {
      title: "Real-time Collaboration",
      desc: "Empower teams with synchronized updates, no matter the distance or time zone.",
      img: Feature3,
      icon: Icon3,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#141414] via-[#1a1a1a] to-[#0f0f0f] text-yellow-100 py-28">
      {/* ✨ Floating Particles */}
      <FloatingParticles />

      {/* Background Blurs */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 opacity-25 blur-2xl">
        <Image src={BlurredShapeGray} width={760} height={668} alt="" />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-1/2 -z-10 translate-x-[60%] opacity-30 blur-3xl">
        <Image src={BlurredShape} width={760} height={668} alt="" />
      </div>

      {/* 🌟 Content */}
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-yellow-400/60 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-yellow-400/60"
          >
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent text-sm uppercase tracking-wider">
              Intelligent Infrastructure
            </span>
          </motion.div>

          {/* Modern Cinematic Title */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative text-5xl md:text-6xl font-extrabold tracking-tight mt-4"
          >
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,240,150,0.2)]">
              Features Designed for Scale
            </span>
            {/* Glowing underline accent */}
            <span className="absolute left-1/2 -bottom-3 h-[3px] w-32 -translate-x-1/2 bg-gradient-to-r from-yellow-400/20 via-yellow-300/60 to-yellow-400/20 rounded-full blur-sm"></span>
          </motion.h2>

          <p className="mt-8 text-yellow-100/70 text-lg leading-relaxed max-w-2xl mx-auto">
            From seamless integrations to intelligent automation — build,
            deploy, and innovate with a platform engineered for visionaries.
          </p>
        </motion.div>

        {/* Feature Sections */}
        <div className="space-y-28">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Feature Text */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-[0_0_25px_rgba(255,230,100,0.3)] flex items-center justify-center">
                    <Image src={f.icon} alt="icon" width={32} height={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-yellow-200 mb-3">
                  {f.title}
                </h3>
                <p className="text-yellow-100/80 text-base leading-relaxed max-w-md mx-auto md:mx-0">
                  {f.desc}
                </p>
              </div>

              {/* Feature Image */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,230,120,0.15)]"
                >
                  <Image
                    src={f.img}
                    alt={f.title}
                    className="w-full h-auto object-contain rounded-2xl"
                    priority
                  />
                  {/* Soft gradient overlay for cinematic look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 via-transparent to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
