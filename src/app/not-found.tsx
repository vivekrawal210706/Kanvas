import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#EDE6D6] flex flex-col items-center justify-center px-6 text-center">
      {/* Top accent line */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#2A5C3A]" />

      <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-4 font-sans">
        404 — Page Not Found
      </p>
      <h1 className="font-heading text-6xl md:text-8xl font-bold text-[#1C1916] leading-none mb-4">
        Lost?
      </h1>
      <p className="text-[#7A7264] text-lg max-w-sm leading-relaxed mb-10">
        This page doesn&apos;t exist. Maybe it was moved, or maybe you followed an old link. Either way, let&apos;s get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A5C3A] text-[#EDE6D6] text-sm font-medium hover:bg-[#1E4429] transition-colors duration-200"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-full border border-[#C8BFA8] text-sm text-[#1C1916] hover:border-[#2A5C3A] transition-colors duration-200"
        >
          Contact us
        </Link>
      </div>

      {/* Wordmark */}
      <div className="mt-16">
        <span className="font-heading text-2xl font-bold text-[#1C1916]">
          Kan<span className="text-[#2A5C3A]">vas</span>
        </span>
      </div>
    </div>
  );
}
