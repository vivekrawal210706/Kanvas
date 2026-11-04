"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MapPin, Calendar } from "lucide-react";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[60vh] flex flex-col justify-end section-px pb-12 pt-20 relative overflow-hidden"
        style={{ backgroundColor: project.heroColor }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 65% 20%, ${project.accentColor} 0%, transparent 55%)`,
          }}
        />
        <div className="container-kanvas relative z-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm mb-10 transition-opacity hover:opacity-80"
            style={{ color: project.textColor, opacity: 0.6 }}
          >
            <ArrowLeft size={14} /> All projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full border"
                  style={{ color: project.textColor, borderColor: `${project.textColor}30`, backgroundColor: `${project.textColor}10` }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-4"
              style={{ color: project.textColor }}
            >
              {project.name}
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl opacity-70"
              style={{ color: project.textColor }}
            >
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm opacity-60" style={{ color: project.textColor }}>
                <Calendar size={14} />
                {project.year}
              </div>
              <div className="flex items-center gap-2 text-sm opacity-60" style={{ color: project.textColor }}>
                <MapPin size={14} />
                {project.location}
              </div>
              <div className="flex items-center gap-2 text-sm opacity-60" style={{ color: project.textColor }}>
                {project.category}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-py section-px bg-[#EDE6D6]">
        <div className="container-kanvas">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-4 font-sans">Overview</p>
              <p className="text-[#1C1916] text-lg leading-relaxed">{project.overview}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="paper-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2A5C3A] mb-4 font-sans">Services delivered</p>
                <ul className="space-y-2.5">
                  {project.services.map((s) => (
                    <li key={s} className="flex items-center gap-2.5">
                      <Check size={13} className="text-[#2A5C3A] shrink-0" />
                      <span className="text-sm text-[#1C1916]/80">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Outcome */}
      <section className="section-py section-px bg-[#E3DAC8]">
        <div className="container-kanvas">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "The Challenge", content: project.challenge },
              { label: "Our Solution", content: project.solution },
              { label: "The Outcome", content: project.outcome },
            ].map((block, i) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2A5C3A] mb-4 font-sans">{block.label}</p>
                <p className="text-[#1C1916]/75 text-sm leading-relaxed">{block.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-py section-px bg-[#EDE6D6]">
        <div className="container-kanvas">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-6 font-sans">Deliverables</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.deliverables.map((item, i) => (
                <div
                  key={i}
                  className="paper-card px-5 py-4 flex items-center gap-3"
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <span className="text-sm text-[#1C1916]/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="section-px bg-[#EDE6D6]">
        <div className="container-kanvas">
          <div className="border-t border-[#C8BFA8] pt-6 pb-2">
            <p className="text-xs text-[#A89E92] italic">
              This project is a concept case study developed by Kanvas to illustrate our approach and capabilities. Brand names, details, and outcomes are illustrative.
            </p>
          </div>
        </div>
      </div>

      {/* Next Project */}
      <section className="section-py section-px bg-[#E3DAC8] border-t border-[#C8BFA8]">
        <div className="container-kanvas">
          <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-6 font-sans">Next Project</p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-7 rounded-2xl border border-[#C8BFA8] hover:border-[#2A5C3A]/40 bg-[#FDFBF6] transition-all duration-300"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-[#1C1916] mb-1">{nextProject.name}</h3>
              <p className="text-sm text-[#7A7264]">{nextProject.tagline}</p>
            </div>
            <ArrowRight
              size={20}
              className="text-[#2A5C3A] transition-transform group-hover:translate-x-1 shrink-0"
            />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py section-px bg-[#2A5C3A]">
        <div className="container-kanvas text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-[#A8C9B4] mb-4 font-sans">
              Ready to build?
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#EDE6D6] mb-6">
              Let&apos;s create something like this for your brand.
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EDE6D6] text-[#2A5C3A] text-sm font-medium hover:bg-white transition-all duration-200"
            >
              Start a project
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
