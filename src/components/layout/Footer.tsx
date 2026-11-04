import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Brand Identity", href: "/services#identity" },
    { label: "Packaging Design", href: "/services#packaging" },
    { label: "Website Development", href: "/services#website" },
    { label: "Social Media Design", href: "/services#social" },
    { label: "Brand Packages", href: "/services#packages" },
  ],
  Company: [
    { label: "Our Work", href: "/work" },
    { label: "About Kanvas", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

const socials = [
  {
    href: "https://instagram.com/kanvas.studio",
    label: "Instagram",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/company/kanvas-studio",
    label: "LinkedIn",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "mailto:hello@kanvas.in",
    label: "Email",
    svg: <Mail size={15} strokeWidth={1.8} />,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#C8BFA8] bg-[#E3DAC8]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-3">
              <span className="font-heading text-xl font-bold text-[#1C1916]">
                Kan<span className="text-[#2A5C3A]">vas</span>
              </span>
            </Link>
            <p className="text-[#7A7264] text-sm leading-relaxed max-w-xs mb-5">
              A brand launch studio for consumer-brand founders. Identity, packaging, website, and creatives — coordinated, not cobbled together.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-2 mb-6 text-sm text-[#7A7264]">
              <a href="mailto:hello@kanvas.in" className="flex items-center gap-2 hover:text-[#2A5C3A] transition-colors">
                <Mail size={13} className="shrink-0" />
                hello@kanvas.in
              </a>
              <a href="tel:+917948952200" className="flex items-center gap-2 hover:text-[#2A5C3A] transition-colors">
                <Phone size={13} className="shrink-0" />
                +91 79 4895 2200
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={13} className="shrink-0 mt-0.5" />
                <span>204, Titanium City Centre, Anand Nagar Road,<br />Satellite, Ahmedabad — 380 015, Gujarat</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socials.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#C8BFA8] text-[#7A7264] hover:border-[#2A5C3A] hover:text-[#2A5C3A] transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#2A5C3A] mb-4 font-sans">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#7A7264] hover:text-[#1C1916] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#C8BFA8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#A89E92]">
            © 2025 Kanvas Studio. All rights reserved.
          </p>
          <p className="text-xs text-[#A89E92]">
            Designed & built for brand founders.
          </p>
        </div>
      </div>
    </footer>
  );
}
