"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const values = [
  {
    number: "01",
    title: "Clarity over cleverness",
    description:
      "Great design communicates clearly before it impresses visually. We start with understanding — your audience, your product, your context — and let clarity drive every decision.",
  },
  {
    number: "02",
    title: "Cohesion, not collection",
    description:
      "A brand isn't a logo. It's a system. Every element — your packaging, your website, your social posts — should feel like it comes from the same voice, the same vision.",
  },
  {
    number: "03",
    title: "Founders deserve studio-level work",
    description:
      "The best branding shouldn't be reserved for companies with large budgets. We built Kanvas to give emerging founders access to the same calibre of strategic and creative work that established brands take for granted.",
  },
  {
    number: "04",
    title: "Process is not paperwork",
    description:
      "Our process exists to protect the work. Discovery, strategy, design, review — each phase has a purpose. We don't rush it, and we don't skip it.",
  },
];

const differentiators = [
  {
    label: "One studio, not a freelancer marketplace",
    description:
      "Every project at Kanvas is handled by our core team. You're not being handed off to a rotating cast of contractors. The person you brief is the person who designs.",
  },
  {
    label: "Strategy comes before design",
    description:
      "We don't open Figma until we understand your brand positioning. That means less revision, more relevance, and a final result that actually works in market.",
  },
  {
    label: "Built for launch",
    description:
      "We scope our packages around what founders actually need to go live — not aspirational deliverables that never get used. Everything we produce is production-ready.",
  },
  {
    label: "India-rooted, globally aware",
    description:
      "We understand the Indian market, its design language, its retail environments, and its digital platforms — while drawing on global design thinking and standards.",
  },
];

export default function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="section-py section-px bg-[#EDE6D6] border-b border-[#C8BFA8]">
        <div className="container-kanvas">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-4 font-sans">
                About Kanvas
              </p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#1C1916] leading-tight mb-6">
                We exist for the builders and the brave.
              </h1>
              <p className="text-[#7A7264] text-lg leading-relaxed">
                Kanvas is a brand launch studio based in Ahmedabad, India. We work with consumer-brand founders and early-stage startups who are building something new — and who understand that how their brand looks and feels will determine whether people notice, trust, and buy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-[#2A5C3A] text-[#EDE6D6] rounded-2xl p-8">
                <p className="text-xs uppercase tracking-widest text-[#A8C9B4] mb-5 font-sans">At a glance</p>
                <div className="space-y-5">
                  {[
                    { label: "Founded", value: "2022" },
                    { label: "Based in", value: "Ahmedabad, Gujarat" },
                    { label: "Serving", value: "Founders across India" },
                    { label: "Speciality", value: "Brand launch & identity" },
                    { label: "Approach", value: "Strategy-first, always" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center border-b border-[#FFFFFF15] pb-4 last:border-0 last:pb-0">
                      <span className="text-xs text-[#A8C9B4] font-sans uppercase tracking-widest">{label}</span>
                      <span className="text-sm text-[#E8F0EB] font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-py section-px bg-[#E3DAC8]">
        <div className="container-kanvas">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-4 font-sans">
              Our Philosophy
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1C1916] leading-tight mb-6">
              A brand is a promise.<br />We help you keep it.
            </h2>
            <p className="text-[#7A7264] text-lg leading-relaxed">
              Every new brand makes an implicit promise to its audience — about quality, about values, about experience. We help founders define that promise clearly, then express it consistently across every surface a customer might encounter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="paper-card p-7"
              >
                <span className="text-xs font-mono text-[#A89E92] mb-3 block">{value.number}</span>
                <h3 className="font-heading text-xl font-bold text-[#1C1916] mb-3">{value.title}</h3>
                <p className="text-[#7A7264] text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py section-px bg-[#EDE6D6]">
        <div className="container-kanvas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-4 font-sans">Our Mission</p>
              <h2 className="font-heading text-3xl font-bold text-[#1C1916] mb-4 leading-tight">
                Make studio-quality branding accessible to every founder.
              </h2>
              <p className="text-[#7A7264] text-base leading-relaxed">
                Too many great products fail to find their audience because they look like they were designed on the cheap. We believe that shouldn&apos;t be a founder&apos;s story. Kanvas was built to give emerging brands the same quality of thinking and execution that established companies pay agencies ten times our size to deliver.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-4 font-sans">Our Vision</p>
              <h2 className="font-heading text-3xl font-bold text-[#1C1916] mb-4 leading-tight">
                A generation of Indian brands that lead with identity.
              </h2>
              <p className="text-[#7A7264] text-base leading-relaxed">
                India is in the middle of a consumer brand renaissance. New categories are being created, global audiences are being reached, and the country&apos;s next iconic brands are being built right now — often in a founder&apos;s spare room. We want to be the studio that helps the best of them look the part from day one.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-py section-px bg-[#E3DAC8]">
        <div className="container-kanvas">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-3 font-sans">
              Why Kanvas
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1C1916] leading-tight">
              What makes us different.
            </h2>
          </motion.div>

          <div className="divide-y divide-[#C8BFA8] border-y border-[#C8BFA8]">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="py-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10"
              >
                <h3 className="font-heading text-lg font-semibold text-[#1C1916]">{item.label}</h3>
                <p className="text-[#7A7264] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
              Let&apos;s work together
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#EDE6D6] mb-6">
              Curious if we&apos;re the right fit?
            </h2>
            <p className="text-[#A8C9B4] text-lg mb-8 max-w-md mx-auto">
              Tell us about your brand. We&apos;ll tell you honestly whether we think we can help.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EDE6D6] text-[#2A5C3A] text-sm font-medium hover:bg-white transition-all duration-200"
            >
              Get in touch
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
