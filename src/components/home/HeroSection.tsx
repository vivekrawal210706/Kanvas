"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-[#EDE6D6]"
    >
      {/* Top green accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#2A5C3A]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center min-h-[85vh]">

          {/* Left — main content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-6 font-sans"
            >
              Brand Launch Studio · Ahmedabad, India
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1C1916] leading-[1.08] mb-6"
            >
              Your Vision.{" "}
              <em className="italic text-[#2A5C3A]">Our Canvas.</em>
              <br />A Brand That Stands Out.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#7A7264] text-lg leading-relaxed max-w-lg mb-10"
            >
              We help emerging businesses transform ideas into distinctive brands through strategy, design, packaging, and digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/contact"
                id="hero-cta-primary"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A5C3A] text-[#EDE6D6] text-sm font-medium hover:bg-[#1E4429] transition-all duration-200"
              >
                Start a project
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/work"
                id="hero-cta-secondary"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-[#C8BFA8] text-sm text-[#1C1916] hover:border-[#2A5C3A] transition-colors duration-200"
              >
                See our work
              </Link>
            </motion.div>
          </div>

          {/* Right — decorative block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col gap-4 lg:pl-8"
          >
            {/* Feature callout card */}
            <div className="bg-[#2A5C3A] text-[#EDE6D6] rounded-2xl p-7">
              <p className="text-xs uppercase tracking-widest text-[#A8C9B4] mb-3 font-sans">What you get</p>
              <ul className="space-y-2.5 text-sm">
                {[
                  "Brand identity + logo system",
                  "Packaging & print-ready files",
                  "Website or landing page",
                  "Social media launch kit",
                  "One studio. Zero coordination chaos.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A8C9B4] shrink-0" />
                    <span className="text-[#E8F0EB]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tagline strip */}
            <div className="bg-[#E3DAC8] rounded-xl p-5 border border-[#C8BFA8]">
              <p className="font-heading text-base font-semibold text-[#1C1916] leading-snug">
                &ldquo;One studio. One vision. Your brand, launch-ready.&rdquo;
              </p>
              <p className="text-xs text-[#A89E92] mt-2 font-sans">— The Kanvas approach</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C8BFA8]" />
    </section>
  );
}
