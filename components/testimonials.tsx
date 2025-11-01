"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Kayla P.",
    company: "Tesla",
    content: "A creative revolution — we finish projects twice as fast now.",
  },
  {
    name: "Andrew K.",
    company: "Samsung",
    content: "This AI feels human. It’s like working with a digital partner.",
  },
  {
    name: "John J.",
    company: "Meta",
    content: "Every idea turns real in minutes. It’s truly magical tech.",
  },
  {
    name: "Apple",
    company: "Google",
    content: "Seamless, fast, and smart — it powers our whole workflow.",
  },
  {
    name: "Miriam E.",
    company: "Google",
    content: "It’s reliable, intuitive, and simply makes work enjoyable again.",
  },
  {
    name: "Eloise V.",
    company: "Microsoft",
    content: "Our team’s productivity doubled. The results speak for themselves.",
  },
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ top: string; left: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Safe client-side effects
  useEffect(() => {
    setMounted(true);
    const randomParticles = Array.from({ length: 14 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setParticles(randomParticles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length));
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] text-yellow-200 py-28">
      {/* ✨ Floating Particles */}
      {mounted && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-40 blur-[1px]"
              animate={{ y: ["0%", "25%", "0%"], opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              style={{ top: p.top, left: p.left }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_20px_rgba(255,255,150,0.2)]"
        >
          Voices of Innovation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-yellow-100/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          From visionaries to builders — see how leaders are shaping the
          future, one idea at a time.
        </motion.p>
      </div>

      {/* Testimonials */}
      {mounted && (
        <div className="relative flex flex-wrap justify-center gap-10 px-8 min-h-[200px]">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: i * 0.15 }}
                className="relative bg-[#111111]/80 backdrop-blur-xl border border-yellow-500/10 rounded-2xl p-6 w-72 md:w-80 hover:border-yellow-400/30 hover:shadow-[0_0_30px_rgba(255,230,120,0.15)] transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-300/10 via-transparent to-transparent opacity-20" />
                <div className="mb-3">
                  <div className="text-yellow-100 font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-yellow-400/60">{t.company}</div>
                </div>
                <p className="italic text-sm leading-snug bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,240,150,0.5)] before:content-['“'] after:content-['”']">
                  {t.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-20 text-center text-yellow-400/60 text-sm tracking-wider uppercase"
      >
        Real stories from engineers redefining innovation.
      </motion.p>
    </section>
  );
}
