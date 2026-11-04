import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import WorkSection from "@/components/home/WorkSection";
import ProcessSection from "@/components/home/ProcessSection";
import PackagesSection from "@/components/home/PackagesSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <PackagesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
