"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="section-py section-px bg-[#EDE6D6]">
      <div className="container-kanvas">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#2A5C3A] rounded-2xl px-8 py-14 md:px-14 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="max-w-lg">
            <p className="text-xs font-medium uppercase tracking-widest text-[#A8C9B4] mb-3 font-sans">
              Ready to launch?
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EDE6D6] leading-tight mb-3">
              Let&apos;s build your brand — the right way.
            </h2>
            <p className="text-[#A8C9B4] text-base leading-relaxed">
              Book a free discovery call. No commitments, no pressure — just an honest conversation about your brand.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/contact"
              id="cta-book-call"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EDE6D6] text-[#2A5C3A] text-sm font-semibold hover:bg-white transition-colors duration-200 whitespace-nowrap"
            >
              Book a free call
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/packages"
              className="text-sm text-center text-[#A8C9B4] hover:text-[#EDE6D6] underline underline-offset-4 transition-colors"
            >
              Explore packages first
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
