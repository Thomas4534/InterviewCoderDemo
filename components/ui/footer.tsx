"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) setVisible(true);
  }, [isInView]);

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative bg-[#0f0f0f] text-yellow-300 overflow-hidden pt-20 pb-10 border-t border-yellow-400/10 shadow-[0_-20px_60px_rgba(255,255,150,0.05)]"
    >
      {/* Background glow shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 opacity-30 blur-2xl"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={FooterIllustration}
          width={1076}
          height={378}
          alt="Footer illustration"
          priority
        />
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 text-center space-y-10">
        {/* Inspirational Quote */}
        <div>
          {visible && (
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="text-sm md:text-base text-yellow-100/80 italic max-w-xl mx-auto leading-relaxed"
            >
              “The future belongs to those who dare to build it. At{" "}
              <span className="text-yellow-400 font-medium">
                Interview Coder
              </span>
              , we turn code into creativity and ideas into reality.”
            </motion.p>
          )}
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ width: 0 }}
          animate={visible ? { width: "50%" } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-px bg-yellow-400/30 mx-auto"
        />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="text-xs text-yellow-500/60"
        >
          © 2025 Interview Coder.
        </motion.p>
      </div>

      {/* Floating subtle particles */}
      <div className="absolute inset-0 -z-10">
        {[
          { t: "10%", l: "20%" },
          { t: "30%", l: "80%" },
          { t: "60%", l: "50%" },
          { t: "80%", l: "10%" },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-70 blur-sm"
            animate={{
              y: ["0%", "20%", "0%"],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{ top: p.t, left: p.l }}
          />
        ))}
      </div>
    </motion.footer>
  );
}
