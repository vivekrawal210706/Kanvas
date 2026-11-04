"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Palette, Package, Globe, Share2, Check, ArrowRight } from "lucide-react";

const services = [
  {
    id: "identity",
    icon: Palette,
    number: "01",
    title: "Brand Strategy & Visual Identity",
    summary:
      "The foundation of everything. We define who you are, who you're for, and how you show up — then translate that into a complete visual language.",
    description:
      "Great brands aren't just pretty logos. They're built on a clear understanding of your audience, your positioning, and your competitive landscape. We start every engagement with a strategy session before a single pixel is designed. From there, we develop a logo system, colour palette, typography hierarchy, and brand guidelines that hold up at every touchpoint — from a business card to a billboard.",
    includes: [
      "Brand discovery & positioning workshop",
      "Competitive landscape review",
      "Logo + wordmark system (primary, secondary, icon)",
      "Colour palette with usage rules",
      "Typography system (heading, body, accent)",
      "Full brand guidelines document (PDF + Figma)",
      "Business stationery design (card, letterhead)",
      "2 rounds of revisions included",
    ],
    cta: "Enquire about Brand Identity",
    bgClass: "bg-[#EDE6D6]",
  },
  {
    id: "packaging",
    icon: Package,
    number: "02",
    title: "Packaging Design & Print Files",
    summary:
      "Packaging is the first physical impression your brand makes. We design for the shelf, the unboxing moment, and the lasting memory.",
    description:
      "Whether you're launching a single hero product or a full range, your packaging needs to work at a glance — in a retail environment, in a photo, and in someone's hand. We design print-ready packaging that reflects your brand identity, communicates product information clearly, and stands out without screaming. Every file we deliver is production-ready and accompanied by a printing specification sheet.",
    includes: [
      "Packaging strategy & dieline selection",
      "Design for primary packaging (label, box, pouch, etc.)",
      "Front, back, and side panel design",
      "Ingredient/specification panel layout",
      "Print-ready files (CMYK, bleed, crop marks)",
      "Printing specification sheet",
      "Up to 3 SKU variants (Ignite & Orbit packages)",
      "Supplier introduction on request",
    ],
    cta: "Enquire about Packaging",
    bgClass: "bg-[#E3DAC8]",
  },
  {
    id: "website",
    icon: Globe,
    number: "03",
    title: "Website Design & Development",
    summary:
      "Fast, beautiful, brand-aligned websites built to convert. We design and develop — no handoffs between designers and developers.",
    description:
      "We build websites that feel like an extension of your brand — not a template that's been reluctantly customised. Our sites are fast, mobile-first, and built with clean code that you can hand to any developer for future updates. We handle everything from information architecture and wireframes to design and development. If you need a landing page for launch or a full multi-page website with a blog and product catalogue, we scope accordingly.",
    includes: [
      "Information architecture & sitemap",
      "Wireframes for all pages",
      "Full responsive design (mobile, tablet, desktop)",
      "Development (Next.js / standard HTML depending on scope)",
      "SEO setup (meta, structured data, sitemap)",
      "Contact or inquiry form",
      "Google Analytics integration",
      "1-month post-launch support",
    ],
    cta: "Enquire about Website",
    bgClass: "bg-[#EDE6D6]",
  },
  {
    id: "social",
    icon: Share2,
    number: "04",
    title: "Social Media & Digital Creatives",
    summary:
      "Launch-ready social assets and reusable templates that keep your brand consistent on every platform, every week.",
    description:
      "Your social media presence is often the first place potential customers discover you. We design a visual system for Instagram, LinkedIn, or any platform you use — combining brand-consistent templates with launch creative that makes your debut impossible to ignore. We also design WhatsApp broadcast graphics, email headers, and digital ads as needed. Everything is delivered as editable Canva or Figma templates so your team can create new content independently.",
    includes: [
      "Social media visual strategy",
      "Profile setup (bio, highlights, cover images)",
      "Reusable post templates (up to 20)",
      "Stories & Reels cover templates",
      "Launch campaign creative (10–30 posts)",
      "Hashtag & caption guide",
      "Canva or Figma template library handover",
      "WhatsApp broadcast design (optional)",
    ],
    cta: "Enquire about Social Media",
    bgClass: "bg-[#E3DAC8]",
  },
];

const packages = [
  {
    name: "Spark",
    tagline: "For founders just getting started.",
    highlight: false,
    description:
      "Establish a credible brand presence before your first launch — without the complexity of a full agency.",
    deliverables: [
      "Brand strategy session",
      "Logo + visual identity",
      "Brand guidelines document",
      "Business card design",
      "3 social media templates",
    ],
  },
  {
    name: "Ignite",
    tagline: "The complete launch package.",
    highlight: true,
    description:
      "Identity, packaging, website, and social assets — all from one coordinated studio, delivered as a complete launch experience.",
    deliverables: [
      "Everything in Spark",
      "Product packaging design (1 SKU)",
      "5-page brand website",
      "10 social media creatives",
      "Brand launch roadmap",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Orbit",
    tagline: "For brands ready to grow.",
    highlight: false,
    description:
      "Extended scope for founders with multiple products, a growing team, or more complex brand requirements.",
    deliverables: [
      "Everything in Ignite",
      "Up to 3 SKU packaging designs",
      "E-commerce website",
      "Monthly social media retainer",
      "Brand audit + positioning",
      "Priority turnaround",
    ],
  },
];

export default function ServicesPageContent() {
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
              What We Do
            </p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#1C1916] leading-tight mb-6">
              Everything your brand needs to launch.
            </h1>
            <p className="text-[#7A7264] text-lg leading-relaxed">
              Four core services. One coordinated studio. We handle brand identity, packaging, website, and social media — so your brand launches cohesively, not in pieces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`section-py section-px ${service.bgClass}`}
          >
            <div className="container-kanvas">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-5"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#2A5C3A]/10 flex items-center justify-center">
                      <Icon size={19} className="text-[#2A5C3A]" />
                    </div>
                    <span className="text-xs font-mono text-[#A89E92]">{service.number}</span>
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1C1916] leading-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[#7A7264] text-lg leading-relaxed mb-6">
                    {service.summary}
                  </p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2A5C3A] text-[#EDE6D6] text-sm font-medium hover:bg-[#1E4429] transition-all duration-200"
                  >
                    {service.cta}
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>

                {/* Right */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="lg:col-span-7"
                >
                  <p className="text-[#1C1916]/70 text-base leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="paper-card p-7">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#2A5C3A] mb-5 font-sans">
                      What&apos;s included
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check size={13} className="text-[#2A5C3A] mt-0.5 shrink-0" />
                          <span className="text-sm text-[#1C1916]/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Divider */}
      <div className="bg-[#EDE6D6] h-px border-t border-[#C8BFA8]" />

      {/* Packages Section */}
      <section id="packages" className="section-py section-px bg-[#EDE6D6]">
        <div className="container-kanvas">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-3 font-sans">
              Packages
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1C1916] leading-tight">
                Clear scope. Cohesive output.
              </h2>
              <p className="text-[#7A7264] text-sm max-w-xs md:text-right leading-relaxed">
                Fixed-scope packages built around real founder journeys. No surprises, no scope creep.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative rounded-2xl p-7 flex flex-col gap-5 ${
                  pkg.highlight
                    ? "bg-[#2A5C3A] text-[#EDE6D6]"
                    : "paper-card hover:border-[#2A5C3A]/30 transition-colors duration-200"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-medium bg-[#EDE6D6] text-[#2A5C3A]">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className={`font-heading text-2xl font-bold mb-1 ${pkg.highlight ? "text-[#EDE6D6]" : "text-[#1C1916]"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs ${pkg.highlight ? "text-[#A8C9B4]" : "text-[#A89E92]"}`}>
                    {pkg.tagline}
                  </p>
                </div>
                <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-[#C8DDD0]" : "text-[#7A7264]"}`}>
                  {pkg.description}
                </p>
                <ul className="flex-1 space-y-2">
                  {pkg.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check size={13} className={`mt-0.5 shrink-0 ${pkg.highlight ? "text-[#A8C9B4]" : "text-[#2A5C3A]"}`} />
                      <span className={`text-sm ${pkg.highlight ? "text-[#E8F0EB]" : "text-[#1C1916]/80"}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`group inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    pkg.highlight
                      ? "bg-[#EDE6D6] text-[#2A5C3A] hover:bg-white"
                      : "border border-[#C8BFA8] text-[#1C1916] hover:border-[#2A5C3A] hover:bg-[#2A5C3A]/4"
                  }`}
                >
                  Enquire about {pkg.name}
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-[#A89E92] mt-8">
            Pricing is discussed after an initial call. Every package is scoped to your specific requirements.
          </p>
        </div>
      </section>
    </>
  );
}
