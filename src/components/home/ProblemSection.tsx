"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Shuffle, DollarSign } from "lucide-react";
import { type Variants } from "framer-motion";

const problems = [
  {
    icon: Shuffle,
    title: "Fragmented teams, inconsistent brand",
    description:
      "Coordinating separate freelancers for logo, packaging, and website leads to a brand that looks disjointed — undermining trust before a product is even sold.",
  },
  {
    icon: Clock,
    title: "Launch delays kill momentum",
    description:
      "Juggling timelines across multiple vendors means endless follow-ups, missed deadlines, and a launch window that keeps slipping further away.",
  },
  {
    icon: DollarSign,
    title: "Costs balloon without clear scope",
    description:
      "Without defined deliverables, revisions and miscommunications eat into your launch budget — often significantly.",
  },
  {
    icon: AlertTriangle,
    title: "No single point of accountability",
    description:
      "When something goes wrong, everyone points elsewhere. Founders spend more time managing vendors than building their business.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProblemSection() {
  return (
    <section id="problem" className="section-py section-px bg-[#EDE6D6]">
      <div className="container-kanvas">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-4 font-sans">
              The Challenge
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1C1916] leading-tight mb-5">
              Launching a brand is harder than it looks.
            </h2>
            <p className="text-[#7A7264] leading-relaxed text-base">
              Most founders discover this only after they&apos;re already deep into it — spending more time managing people than building their brand.
            </p>
          </motion.div>

          {/* Right cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="paper-card p-6 group hover:border-[#2A5C3A]/30 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#2A5C3A]/8 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#2A5C3A]" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-[#1C1916] mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[#7A7264] text-sm leading-relaxed">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
