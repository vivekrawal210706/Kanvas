"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#EDE6D6]/95 backdrop-blur-sm border-b border-[#C8BFA8]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-heading text-xl font-bold tracking-tight text-[#1C1916]">
              Kan<span className="text-[#2A5C3A]">vas</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#7A7264] hover:text-[#1C1916] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 rounded-full bg-[#2A5C3A] text-[#EDE6D6] text-sm font-medium hover:bg-[#1E4429] transition-colors duration-200"
            >
              Work with us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-1.5 text-[#7A7264] hover:text-[#1C1916] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#EDE6D6] border-t border-[#C8BFA8] overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[#7A7264] hover:text-[#1C1916] transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-1 inline-flex justify-center px-5 py-2.5 rounded-full bg-[#2A5C3A] text-[#EDE6D6] text-sm font-medium"
              >
                Work with us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
