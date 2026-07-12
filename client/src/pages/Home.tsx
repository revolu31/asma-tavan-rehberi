/**
 * Asma Tavan Alçıpan Modelleri Rehberi — Home Page
 * Design: Architectural Blueprint (Dark Navy + Gold)
 * Fonts: Playfair Display (headings) + Inter (body)
 */
import ServicesSection from "@/components/home/ServicesSection";
import CompanyProfileSection from "@/components/home/CompanyProfileSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import NavbarSection from "@/components/home/NavbarSection";
import HeroSection from "@/components/home/HeroSection";
import PriceCalculatorSection from "@/components/home/PriceCalculatorSection";
import ModelGallerySection from "@/components/home/ModelGallerySection";
import ChartsSection from "@/components/home/ChartsSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import StatsSection from "@/components/home/StatsSection";
import TipsSection from "@/components/home/TipsSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import FooterSection from "@/components/home/FooterSection";
import MapSection from "@/components/home/MapSection";
import FAQSection from "@/components/home/FAQSection";
import ServiceAreasSection from "@/components/home/ServiceAreasSection";
import OfferFormSection from "@/components/home/OfferFormSection";
import FloatingContactButtons from "@/components/home/FloatingContactButtons";


/* ─── MAIN ─────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.14 0.05 240)" }}
    >

<NavbarSection />
<HeroSection />
<ServicesSection />
<StatsSection />
<ModelGallerySection />
<ComparisonSection />
<ChartsSection />
<PriceCalculatorSection />
<CallToActionSection />
<TipsSection />
<FAQSection />
<ServiceAreasSection />
<CompanyProfileSection />
<WhyChooseUsSection />
<OfferFormSection />
<MapSection />
<FooterSection />

     <FloatingContactButtons />
   </div>
  );
} 

