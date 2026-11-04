import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesPageContent from "@/components/services/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services — Kanvas Brand Launch Studio",
  description:
    "Brand identity, packaging design, website development, and social media creatives. Full-service brand launch packages for founders and startups.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ServicesPageContent />
      </main>
      <Footer />
    </>
  );
}
