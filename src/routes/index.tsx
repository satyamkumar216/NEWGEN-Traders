import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import InquirySection from "@/components/InquirySection";
import ContactFooter from "@/components/ContactFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEWGEN TRADERS | Integrated Construction, PEB & Material Solutions" },
      {
        name: "description",
        content:
          "NEWGEN TRADERS delivers integrated construction, pre-engineered buildings (PEB), structural steel fabrication, civil works and building material supply in Dhulagori, Howrah.",
      },
      { property: "og:title", content: "NEWGEN TRADERS | Building the Future of Industry" },
      {
        property: "og:description",
        content:
          "Integrated construction, PEB, fabrication and building material solutions for warehouses, factories, RCC works, and industrial projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-white text-[#111111] antialiased selection:bg-[#C0143C] selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <ProcessSection />
        <WhyUsSection />
        <InquirySection />
      </main>
      <ContactFooter />
    </div>
  );
}
