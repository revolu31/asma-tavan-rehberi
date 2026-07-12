/**
 * Asma Tavan Alçıpan Modelleri Rehberi — Home Page
 * Design: Architectural Blueprint (Dark Navy + Gold)
 * Fonts: Playfair Display (headings) + Inter (body)
 */
import ServicesSection from "@/components/home/ServicesSection";
import CompanyProfileSection from "@/components/home/CompanyProfileSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
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
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


/* ─── MAIN ─────────────────────────────────────────────────────────────── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navBg = scrolled
    ? "rgba(15,39,68,0.97)"
    : "transparent";

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.14 0.05 240)" }}>

      {/* ── STICKY NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: navBg,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "2px solid oklch(0.72 0.12 75 / 0.4)" : "none",
        }}
      >
        <div className="container flex items-center justify-between py-3">
          {/* Brand mark */}
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="1" y="1" width="26" height="26" stroke="oklch(0.72 0.12 75)" strokeWidth="1.5" fill="none"/>
              <line x1="1" y1="14" x2="27" y2="14" stroke="oklch(0.72 0.12 75)" strokeWidth="0.8" strokeDasharray="2 2"/>
              <line x1="14" y1="1" x2="14" y2="27" stroke="oklch(0.72 0.12 75)" strokeWidth="0.8" strokeDasharray="2 2"/>
              <circle cx="14" cy="14" r="4" stroke="oklch(0.72 0.12 75)" strokeWidth="1.5" fill="none"/>
              <circle cx="14" cy="14" r="1.5" fill="oklch(0.72 0.12 75)"/>
            </svg>
            <div>
              <div className="text-sm font-bold leading-none" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.72 0.12 75)" }}>ASMA TAVAN</div>
              <div className="text-xs tracking-[0.2em] leading-none mt-0.5" style={{ color: "oklch(0.60 0.03 230)", fontFamily: "'Inter', sans-serif" }}>REHBERİ</div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-xs tracking-wider" style={{ color: "oklch(0.70 0.03 230)", fontFamily: "'Inter', sans-serif" }}>
            {[["#hizmetler","HİZMETLER"],["#istatistikler","İSTATİSTİKLER"],["#modeller","MODELLER"],["#karsilastirma","KARŞILAŞTIRMA"],["#grafikler","GRAFİKLER"],["#hesaplayici","HESAPLAYICI"],["#ipuclari","İPUÇLARI"]].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-amber-400 transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Fine grid background */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(oklch(0.72 0.12 75 / 0.05) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.12 75 / 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        {/* Dot accent */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, oklch(0.72 0.12 75 / 0.18) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          backgroundPosition: "20px 20px",
        }} />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 20% 50%, oklch(0.22 0.08 240 / 0.7) 0%, oklch(0.14 0.05 240) 65%)"
        }} />

        {/* Blueprint ceiling plan SVG — right side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block" style={{ opacity: 0.13 }}>
          <svg viewBox="0 0 500 700" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="80" width="380" height="540" stroke="#c9a84c" strokeWidth="1.5"/>
            <rect x="100" y="120" width="300" height="460" stroke="#c9a84c" strokeWidth="0.8" strokeDasharray="4 4"/>
            <rect x="140" y="160" width="220" height="380" stroke="#c9a84c" strokeWidth="1"/>
            <circle cx="250" cy="350" r="80" stroke="#c9a84c" strokeWidth="1.2"/>
            <circle cx="250" cy="350" r="50" stroke="#c9a84c" strokeWidth="0.7" strokeDasharray="3 3"/>
            <circle cx="250" cy="350" r="20" stroke="#c9a84c" strokeWidth="1"/>
            <line x1="60" y1="350" x2="440" y2="350" stroke="#c9a84c" strokeWidth="0.6" strokeDasharray="6 3"/>
            <line x1="250" y1="80" x2="250" y2="620" stroke="#c9a84c" strokeWidth="0.6" strokeDasharray="6 3"/>
            <line x1="60" y1="80" x2="440" y2="620" stroke="#c9a84c" strokeWidth="0.4" strokeDasharray="2 6"/>
            <line x1="440" y1="80" x2="60" y2="620" stroke="#c9a84c" strokeWidth="0.4" strokeDasharray="2 6"/>
            {/* Corner ticks */}
            <line x1="60" y1="80" x2="80" y2="80" stroke="#c9a84c" strokeWidth="1.5"/>
            <line x1="60" y1="80" x2="60" y2="100" stroke="#c9a84c" strokeWidth="1.5"/>
            <line x1="440" y1="80" x2="420" y2="80" stroke="#c9a84c" strokeWidth="1.5"/>
            <line x1="440" y1="80" x2="440" y2="100" stroke="#c9a84c" strokeWidth="1.5"/>
            <line x1="60" y1="620" x2="80" y2="620" stroke="#c9a84c" strokeWidth="1.5"/>
            <line x1="60" y1="620" x2="60" y2="600" stroke="#c9a84c" strokeWidth="1.5"/>
            <line x1="440" y1="620" x2="420" y2="620" stroke="#c9a84c" strokeWidth="1.5"/>
            <line x1="440" y1="620" x2="440" y2="600" stroke="#c9a84c" strokeWidth="1.5"/>
            {/* Dimension lines */}
            <line x1="60" y1="660" x2="440" y2="660" stroke="#c9a84c" strokeWidth="0.8"/>
            <line x1="60" y1="655" x2="60" y2="665" stroke="#c9a84c" strokeWidth="0.8"/>
            <line x1="440" y1="655" x2="440" y2="665" stroke="#c9a84c" strokeWidth="0.8"/>
            <text x="250" y="675" textAnchor="middle" fill="#c9a84c" fontSize="10" fontFamily="monospace">PLAN GÖRÜNÜŞÜ — 1:50</text>
            <text x="250" y="350" textAnchor="middle" fill="#c9a84c" fontSize="8" fontFamily="monospace" dy="-90">Ø 160cm</text>
          </svg>
        </div>

        <div className="container relative z-10 pt-28 pb-16">
          <div className="max-w-2xl">
            {/* Technical label */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
            >
              <div className="h-px w-8" style={{ background: "oklch(0.72 0.12 75)" }} />
              <span className="text-xs tracking-[0.25em] font-medium" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Inter', sans-serif" }}>SPEC. REF. 2024–2026</span>
              <div className="h-px flex-1" style={{ background: "oklch(0.72 0.12 75 / 0.3)" }} />
            </motion.div>

            <motion.h1
              className="font-bold leading-[1.05] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              Asma Tavan<br />
              <em style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>Alçıpan</em><br />
              Modelleri
            </motion.h1>

            <motion.p
              className="text-base mb-10 max-w-lg leading-relaxed"
              style={{ color: "oklch(0.65 0.03 230)", fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            >
              10'dan fazla model tipi, malzeme karşılaştırmaları ve saha deneyiminden süzülmüş kurulum kriterleriyle mekanınız için doğru spesifikasyonu belirleyin.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            >
              {["Konut","Ticari","LED Entegre","Geometrik","Akustik"].map(b => (
                <span key={b} className="text-xs px-3 py-1.5 tracking-wider" style={{ background: "oklch(0.20 0.055 240)", color: "oklch(0.72 0.12 75)", border: "1px solid oklch(0.72 0.12 75 / 0.3)", fontFamily: "'Inter', sans-serif" }}>
                  {b}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.14 0.05 240))" }} />
      </section>
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

      {/* ── MODAL ── */}
     
      <FloatingContactButtons />
    </div>
  );
}
