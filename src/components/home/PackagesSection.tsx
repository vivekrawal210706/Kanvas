"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    cta: "Inquire about Spark",
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
    cta: "Inquire about Ignite",
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
    cta: "Inquire about Orbit",
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="section-py section-px bg-[#E3DAC8]">
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
                    <Check
                      size={13}
                      className={`mt-0.5 shrink-0 ${pkg.highlight ? "text-[#A8C9B4]" : "text-[#2A5C3A]"}`}
                    />
                    <span className={`text-sm ${pkg.highlight ? "text-[#E8F0EB]" : "text-[#1C1916]/80"}`}>
                      {item}
                    </span>
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
                {pkg.cta}
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-[#A89E92] mt-8">
          Pricing is shared after an initial call. Packages are scoped to your specific requirements.
        </p>
      </div>
    </section>
  );
}
