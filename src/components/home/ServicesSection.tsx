"use client";

import { motion } from "framer-motion";
import { Palette, Package, Globe, Share2, Rocket } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    number: "01",
    title: "Brand Identity",
    description:
      "Logo, color system, typography, and brand guidelines that communicate your story clearly — and consistently across every touchpoint.",
    tags: ["Logo Design", "Color System", "Brand Guidelines"],
  },
  {
    icon: Package,
    number: "02",
    title: "Packaging Design",
    description:
      "Print-ready packaging that stands out on shelves and reflects your brand values from the moment a customer picks it up.",
    tags: ["Label Design", "Box Design", "Print Files"],
  },
  {
    icon: Globe,
    number: "03",
    title: "Website Development",
    description:
      "Fast, clean, brand-aligned websites and landing pages — built to convert and grow with your business.",
    tags: ["Landing Pages", "Brand Sites", "Mobile-First"],
  },
  {
    icon: Share2,
    number: "04",
    title: "Social Media Design",
    description:
      "Launch-ready creatives and reusable templates that keep your brand consistent across every platform.",
    tags: ["Instagram", "Templates", "Launch Posts"],
  },
  {
    icon: Rocket,
    number: "05",
    title: "Brand Launch Planning",
    description:
      "A coordinated launch roadmap — so every piece of your brand comes together at the right moment, without chaos.",
    tags: ["Roadmap", "Go-to-Market", "Coordination"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-py section-px bg-[#E3DAC8]">
      <div className="container-kanvas">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-3 font-sans">
              Our Services
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1C1916] leading-tight">
              Everything your brand needs.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium text-[#2A5C3A] hover:text-[#1E4429] underline underline-offset-4 shrink-0 transition-colors"
          >
            All services →
          </Link>
        </motion.div>

        {/* Service rows */}
        <div className="divide-y divide-[#C8BFA8] border-y border-[#C8BFA8]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 hover:bg-[#EDE6D6]/50 px-2 -mx-2 rounded-lg transition-colors duration-200 cursor-default"
              >
                <span className="text-xs font-mono text-[#A89E92] w-8 shrink-0">
                  {service.number}
                </span>
                <div className="w-9 h-9 rounded-lg bg-[#2A5C3A]/8 flex items-center justify-center shrink-0 group-hover:bg-[#2A5C3A]/15 transition-colors duration-200">
                  <Icon size={17} className="text-[#2A5C3A]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold text-[#1C1916] mb-0.5">
                    {service.title}
                  </h3>
                  <p className="text-[#7A7264] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="hidden lg:flex flex-wrap gap-1.5 max-w-[180px]">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
