"use client";

import { motion } from "framer-motion";
import { MessageSquare, Layers, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery call",
    description:
      "A focused conversation about your product, audience, and goals. We listen first, then recommend.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Custom proposal",
    description:
      "A clear scope — deliverables, timeline, and process — defined before any work begins. No guessing.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Coordinated execution",
    description:
      "One studio handles everything — brand, packaging, website, creatives — as a single cohesive project.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Launch ready",
    description:
      "A complete brand kit with all files and guidance you need to launch confidently and grow consistently.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-py section-px bg-[#EDE6D6]">
      <div className="container-kanvas">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-3 font-sans">
            How It Works
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1C1916] leading-tight max-w-lg">
            A simple process. A complete result.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-lg bg-[#2A5C3A]/8 flex items-center justify-center">
                    <Icon size={18} className="text-[#2A5C3A]" />
                  </div>
                  <span className="text-xs font-mono text-[#A89E92]">Step {step.step}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#1C1916]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#7A7264] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
