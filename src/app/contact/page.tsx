import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Kanvas Brand Launch Studio",
  description:
    "Start a project with Kanvas. Tell us about your brand and we'll be in touch to discuss how we can help.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
