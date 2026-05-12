import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import FeatureSection from "@/components/FeatureSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#F8FAFC] text-slate-950">
      <Navbar />
      <HomeHero />
      <FeatureSection />
      <HowItWorksSection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
