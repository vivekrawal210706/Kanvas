"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function WorkPageContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="section-py section-px bg-[#EDE6D6] border-b border-[#C8BFA8]">
        <div className="container-kanvas">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-4 font-sans">
              Selected Work
            </p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#1C1916] leading-tight mb-6">
              Brands we&apos;ve helped bring to life.
            </h1>
            <p className="text-[#7A7264] text-lg leading-relaxed">
              A selection of concept and client projects across brand identity, packaging, websites, and social media — representing the range and depth of what we do at Kanvas.
            </p>
            <p className="text-xs text-[#A89E92] mt-4 italic">
              Projects marked as concept work are illustrative case studies developed to demonstrate our approach and capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="section-py section-px bg-[#EDE6D6]">
        <div className="container-kanvas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-[#C8BFA8] hover:border-[#2A5C3A]/40 hover:shadow-sm transition-all duration-300 bg-[#FDFBF6]"
                >
                  {/* Color hero block */}
                  <div
                    className="h-64 w-full relative flex flex-col justify-end p-7"
                    style={{ backgroundColor: project.heroColor }}
                  >
                    <div
                      className="absolute inset-0 opacity-25"
                      style={{
                        backgroundImage: `radial-gradient(circle at 75% 25%, ${project.accentColor} 0%, transparent 55%)`,
                      }}
                    />
                    <div className="relative z-10">
                      <span
                        className="text-xs font-medium uppercase tracking-widest font-sans block mb-1 opacity-60"
                        style={{ color: project.textColor }}
                      >
                        {project.location} · {project.year}
                      </span>
                      <span
                        className="text-xs font-medium uppercase tracking-widest font-sans block mb-3 opacity-80"
                        style={{ color: project.accentColor }}
                      >
                        {project.category}
                      </span>
                      <h2
                        className="font-heading text-3xl font-bold leading-tight"
                        style={{ color: project.textColor }}
                      >
                        {project.name}
                      </h2>
                      <p
                        className="text-sm mt-1 opacity-70"
                        style={{ color: project.textColor }}
                      >
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <p className="text-[#7A7264] text-sm leading-relaxed mb-5">
                      {project.cardDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm font-medium text-[#2A5C3A] flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                        View case study
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-[#E3DAC8] rounded-2xl px-10 py-10 border border-[#C8BFA8]">
              <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-3 font-sans">
                Your brand next?
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1C1916] mb-4">
                Let&apos;s build something you&apos;re proud of.
              </h3>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A5C3A] text-[#EDE6D6] text-sm font-medium hover:bg-[#1E4429] transition-all duration-200"
              >
                Start a project
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
