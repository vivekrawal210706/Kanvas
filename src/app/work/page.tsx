import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WorkPageContent from "@/components/work/WorkPageContent";

export const metadata: Metadata = {
  title: "Our Work — Kanvas Brand Launch Studio",
  description:
    "Selected brand projects from Kanvas — brand identity, packaging, websites, and social media for consumer brands and startups.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <WorkPageContent />
      </main>
      <Footer />
    </>
  );
}
