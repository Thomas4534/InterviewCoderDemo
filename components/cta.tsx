"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] text-white py-28 border-t border-yellow-400/10">
      {/* Background Accent Shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-32 ml-20 -translate-x-1/2 opacity-25"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      {/* CTA Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Heading matches Testimonials style */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_20px_rgba(255,255,150,0.2)] mb-8"
        >
          Join the Code Revolution
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Step into the future of development. Build smarter, faster, and bolder
          with{" "}
          <span className="text-yellow-400 underline underline-offset-4 decoration-yellow-400">
            Interview Coder
          </span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
        >
          <a
            className="btn w-full sm:w-auto bg-yellow-400 text-black font-semibold py-3.5 px-9 rounded-2xl shadow-md hover:bg-yellow-300 transition-all duration-300"
            href="#0"
          >
            Start Building →
          </a>
          <a
            className="btn w-full sm:w-auto border border-yellow-400 text-yellow-300 py-3.5 px-9 rounded-2xl hover:bg-yellow-400/10 hover:border-yellow-300 transition-all duration-300"
            href="#0"
          >
            Schedule Demo
          </a>
        </motion.div>
      </div>

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-t from-yellow-100/[0.02] via-transparent to-transparent"
        aria-hidden="true"
      ></div>
    </section>
  );
}
