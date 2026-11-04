"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";

const featured = getFeaturedProjects();

export default function WorkSection() {
  return (
    <section id="work" className="section-py section-px bg-[#EDE6D6]">
      <div className="container-kanvas">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-3 font-sans">
              Selected Work
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1C1916] leading-tight">
              Brands we&apos;ve helped launch.
            </h2>
          </div>
          <Link
            href="/work"
            className="text-sm font-medium text-[#2A5C3A] hover:text-[#1E4429] underline underline-offset-4 shrink-0 transition-colors"
          >
            All projects →
          </Link>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group block rounded-2xl overflow-hidden border border-[#C8BFA8] hover:border-[#2A5C3A]/40 transition-all duration-300 bg-[#FDFBF6]"
              >
                {/* Color block */}
                <div
                  className="h-52 w-full relative flex items-end p-6"
                  style={{ backgroundColor: project.heroColor }}
                >
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 70% 30%, ${project.accentColor} 0%, transparent 60%)`,
                    }}
                  />
<div className="project-artwork" aria-hidden="true">
                    <div className="project-artwork-orbit" />
                    <div className="project-artwork-pack">
                      <span className="project-artwork-kicker">KANVAS / BRAND STUDY</span>
                      <span className="project-artwork-name">{project.name}</span>
                      <span className="project-artwork-line" />
                      <span className="project-artwork-sub">{project.category}</span>
                    </div>
                    <div className="project-artwork-swatch" />
                  </div>
                  <div className="relative z-10">
                    <span
                      className="text-xs font-medium uppercase tracking-widest font-sans mb-2 block opacity-70"
                      style={{ color: project.textColor }}
                    >
                      {project.category}
                    </span>
                    <h3
                      className="font-heading text-2xl font-bold leading-tight"
                      style={{ color: project.textColor }}
                    >
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <p className="text-[#7A7264] text-sm leading-relaxed mb-4">
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
                    <ArrowRight
                      size={15}
                      className="text-[#2A5C3A] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
