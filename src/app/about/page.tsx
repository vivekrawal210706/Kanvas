import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us — Kanvas Brand Launch Studio",
  description:
    "Kanvas is a brand launch studio based in Ahmedabad, India. We help consumer-brand founders build cohesive, distinctive brands through strategy, design, and digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}
