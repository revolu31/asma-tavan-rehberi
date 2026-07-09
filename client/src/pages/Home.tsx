/**
 * Asma Tavan Alçıpan Modelleri Rehberi — Home Page
 * Design: Architectural Blueprint (Dark Navy + Gold)
 * Fonts: Playfair Display (headings) + Inter (body)
 */

import { useState, useRef, useEffect } from "react";
import {
  BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const MODELS = [
  {
    id: 1,
    title: "Yatak Odası Klasik Alçıpan",
    category: ["yatak", "led"],
    tag: "Yatak Odası",
    img: "/manus-storage/img1_yatak_odasi_478d5f17.jpg",
    desc: "Romantik atmosfer için gizli LED aydınlatmalı, baş ucu nişli tasarım.",
    fullDesc:
      "Yatak odaları için tasarlanmış, gizli LED aydınlatmalı ve romantik atmosfer yaratan klasik alçıpan modeli. Baş ucu kısmında özel aydınlatma nişleri bulunur. Ses yalıtımı sayesinde daha huzurlu bir uyku ortamı sağlar.",
    features: ["Gizli LED şerit", "Baş ucu nişi", "Ses yalıtımı", "Beyaz mat yüzey", "Spot entegrasyonu"],
    price: "Orta Fiyat",
    priceColor: "gold",
    badges: ["Kolay Kurulum", "LED Uyumlu"],
  },
  {
    id: 2,
    title: "Modern Salon Çok Katmanlı",
    category: ["salon", "led"],
    tag: "Salon",
    img: "/manus-storage/img2_modern_salon_d8032605.jpg",
    desc: "Katlar arası LED ile dramatik derinlik etkisi yaratan premium tasarım.",
    fullDesc:
      "Salonlar için çok katmanlı, dramatik gölge efektleri yaratan premium alçıpan modeli. Katlar arasına yerleştirilen LED şeritler mekana derinlik katar. Açık plan düzenlemeler için ideal.",
    features: ["Çok katmanlı yapı", "LED şerit arası", "Dramatik gölge efekti", "Açık plan uyumu", "Yüksek tavan gereksinimi"],
    price: "Yüksek Fiyat",
    priceColor: "red",
    badges: ["LED Uyumlu", "Premium"],
  },
  {
    id: 3,
    title: "LED Şeritli Minimalist Tavan",
    category: ["yatak", "led"],
    tag: "LED'li",
    img: "/manus-storage/img3_led_yatak_c5822386.jpg",
    desc: "Sade çizgiler ve gizli LED ile modern, bütçe dostu çözüm.",
    fullDesc:
      "Küçük ve orta büyüklükteki yatak odaları için ideal, sade çizgili ve gizli LED şeritli minimalist tasarım. Yükseklik kaybını minimumda tutar, bütçe dostudur.",
    features: ["Tek katmanlı", "Gizli LED şerit", "Minimalist çizgi", "Az yükseklik kaybı", "Bütçe dostu"],
    price: "Bütçe Dostu",
    priceColor: "green",
    badges: ["LED Uyumlu", "Minimalist"],
  },
  {
    id: 4,
    title: "Klasik Alçıpan Salon Modeli",
    category: ["salon"],
    tag: "Salon",
    img: "/manus-storage/img4_alcipan_8901bf23.jpg",
    desc: "Dekoratif bordür ve spot entegrasyonlu zamansız salon tasarımı.",
    fullDesc:
      "Geniş salonlar için tasarlanmış, spot aydınlatma entegrasyonlu ve dekoratif bordürlü klasik alçıpan modeli. Zarif ve zamansız bir görünüm sunar.",
    features: ["Dekoratif bordür", "Spot entegrasyonu", "Geniş alan uyumu", "Beyaz mat yüzey", "Klasik estetik"],
    price: "Orta Fiyat",
    priceColor: "gold",
    badges: ["Klasik Stil", "Geniş Alan"],
  },
  {
    id: 5,
    title: "Geometrik Plus-Minus Tavan",
    category: ["salon", "led"],
    tag: "Geometrik",
    img: "/manus-storage/img5_geometrik_8c9e4a1c.jpg",
    desc: "Artı-eksi kademeler ve geometrik formlarla dinamik salon estetiği.",
    fullDesc:
      "Geometrik şekiller ve artı-eksi kademelerle oluşturulan dinamik salon tasarımı. Dikdörtgen, kare veya daire formlarıyla mekana özgün bir karakter katar.",
    features: ["Geometrik formlar", "Artı-eksi kademeler", "Dinamik görünüm", "LED uyumlu", "Geniş salon için"],
    price: "Yüksek Fiyat",
    priceColor: "red",
    badges: ["Geometrik", "LED Uyumlu"],
  },
  {
    id: 6,
    title: "Çift Katmanlı Ahşap-Alçıpan",
    category: ["salon", "led"],
    tag: "Premium",
    img: "/manus-storage/img6_livspace_7579e036.jpg",
    desc: "Ahşap sıcaklığı ve alçıpan serinliğini buluşturan cove aydınlatmalı premium model.",
    fullDesc:
      "Alçıpanın serin yüzeyi ile ahşabın sıcak dokusunu bir araya getiren iki katmanlı premium tasarım. Cove aydınlatma ile büyüleyici bir atmosfer yaratır.",
    features: ["Çift katman", "Ahşap-alçıpan kombinasyonu", "Cove aydınlatma", "Premium estetik", "Salon ve yatak odası"],
    price: "Premium Fiyat",
    priceColor: "purple",
    badges: ["Cove LED", "Premium"],
  },
  {
    id: 7,
    title: "Mutfak Çerçeveli Alçıpan",
    category: ["mutfak"],
    tag: "Mutfak",
    img: "/manus-storage/img7_mutfak_c2f936d4.jpg",
    desc: "Ada üstü aydınlatma nişli, dolap üstü gizlemeli mutfak çözümü.",
    fullDesc:
      "Mutfak ve yemek odaları için tasarlanmış, ada üstü aydınlatma nişli ve dolap üstü gizleme özellikli pratik alçıpan modeli.",
    features: ["Ada üstü niş", "Dolap üstü gizleme", "Spot aydınlatma", "Nem dirençli panel", "Kolay temizlik"],
    price: "Orta Fiyat",
    priceColor: "gold",
    badges: ["Pratik", "Nem Dirençli"],
  },
  {
    id: 8,
    title: "Modern Mutfak LED Tavan",
    category: ["mutfak", "led"],
    tag: "Mutfak",
    img: "/manus-storage/img8_mutfak2_862eb741.jpg",
    desc: "Açık mutfak konsepti için gizli LED ve temiz çizgili modern model.",
    fullDesc:
      "Açık mutfak konsepti için tasarlanmış, gizli LED aydınlatmalı ve temiz çizgili modern alçıpan modeli. Yemek pişirme alanını vurgular.",
    features: ["Gizli LED", "Açık mutfak uyumu", "Temiz çizgiler", "Spot entegrasyonu", "Modern estetik"],
    price: "Bütçe Dostu",
    priceColor: "green",
    badges: ["LED Uyumlu", "Modern"],
  },
  {
    id: 9,
    title: "Ofis Lineer Alçıpan Tavan",
    category: ["ofis"],
    tag: "Ofis",
    img: "/manus-storage/img9_ofis_2d18a923.jpg",
    desc: "Akustik özellikli, tekdüze aydınlatmalı ticari mekan çözümü.",
    fullDesc:
      "Ticari ve ofis mekanları için tasarlanmış, akustik özellikli ve tekdüze aydınlatma sağlayan lineer alçıpan modeli. Çalışma verimliliğini artırır.",
    features: ["Akustik panel", "Tekdüze aydınlatma", "Gizli kablo kanalı", "Modüler yapı", "Ticari kullanım"],
    price: "Orta Fiyat",
    priceColor: "gold",
    badges: ["Akustik", "Ticari"],
  },
  {
    id: 10,
    title: "Ticari Dairesel LED Tavan",
    category: ["ofis", "led"],
    tag: "Ofis",
    img: "/manus-storage/img10_ofis2_1a70dddc.jpg",
    desc: "Lobi ve toplantı odaları için dairesel formlu prestij tasarımı.",
    fullDesc:
      "Toplantı odaları ve lobi alanları için tasarlanmış, dairesel formlu ve dramatik LED aydınlatmalı prestij alçıpan modeli.",
    features: ["Dairesel form", "Dramatik LED", "Lobi uyumu", "Prestij görünüm", "Yüksek tavan gereksinimi"],
    price: "Yüksek Fiyat",
    priceColor: "red",
    badges: ["Prestij", "LED Uyumlu"],
  },
];

const FILTERS = [
  { key: "all", label: "Tümü" },
  { key: "salon", label: "Salon" },
  { key: "yatak", label: "Yatak Odası" },
  { key: "mutfak", label: "Mutfak" },
  { key: "ofis", label: "Ofis" },
  { key: "led", label: "LED'li" },
];

const COMPARISON_DATA = [
  { feature: "Maliyet", alcipan: "Orta", pop: "Orta-Yüksek", ahsap: "Yüksek", pvc: "Düşük" },
  { feature: "Dayanıklılık", alcipan: "10–15 yıl ✔", pop: "8–12 yıl", ahsap: "20+ yıl ✔", pvc: "8–10 yıl" },
  { feature: "Kurulum Süresi", alcipan: "2–3 gün ✔", pop: "5–7 gün", ahsap: "3–5 gün", pvc: "1–2 gün ✔" },
  { feature: "Nem Direnci", alcipan: "Düşük ✗", pop: "Çok Düşük ✗", ahsap: "Orta", pvc: "Mükemmel ✔" },
  { feature: "Ses Yalıtımı", alcipan: "İyi ✔", pop: "Orta", ahsap: "İyi ✔", pvc: "Zayıf" },
  { feature: "Isı Yalıtımı", alcipan: "İyi ✔", pop: "Orta", ahsap: "Orta", pvc: "Zayıf" },
  { feature: "Yangın Direnci", alcipan: "Yüksek ✔", pop: "Orta", ahsap: "Düşük ✗", pvc: "Orta" },
  { feature: "LED Uyumu", alcipan: "Mükemmel ✔", pop: "İyi ✔", ahsap: "Orta", pvc: "Orta" },
  { feature: "Bakım Kolaylığı", alcipan: "Kolay ✔", pop: "Orta", ahsap: "Zor", pvc: "Çok Kolay ✔" },
];

const PIE_DATA = [
  { name: "Alçıpan", value: 42 },
  { name: "POP/Alçı", value: 22 },
  { name: "PVC", value: 15 },
  { name: "Ahşap", value: 12 },
  { name: "Metal", value: 6 },
  { name: "Diğer", value: 3 },
];

const RADAR_DATA = [
  { subject: "Dayanıklılık", Alçıpan: 80, POP: 65, Ahşap: 95, PVC: 60 },
  { subject: "Ses Yalıtımı", Alçıpan: 85, POP: 60, Ahşap: 80, PVC: 40 },
  { subject: "Isı Yalıtımı", Alçıpan: 80, POP: 65, Ahşap: 70, PVC: 40 },
  { subject: "Yangın Direnci", Alçıpan: 90, POP: 70, Ahşap: 40, PVC: 65 },
  { subject: "LED Uyumu", Alçıpan: 95, POP: 80, Ahşap: 60, PVC: 60 },
  { subject: "Bakım Kolaylığı", Alçıpan: 85, POP: 65, Ahşap: 45, PVC: 95 },
];

const BAR_DATA = [
  { name: "PVC", fiyat: 180 },
  { name: "Alçıpan", fiyat: 320 },
  { name: "POP/Alçı", fiyat: 420 },
  { name: "Ahşap", fiyat: 750 },
];

const ROOM_DATA = [
  { name: "Salon", Alçıpan: 88, PVC: 20 },
  { name: "Yatak Odası", Alçıpan: 82, PVC: 30 },
  { name: "Mutfak", Alçıpan: 55, PVC: 70 },
  { name: "Ofis", Alçıpan: 75, PVC: 40 },
  { name: "Banyo", Alçıpan: 30, PVC: 90 },
  { name: "Koridor", Alçıpan: 65, PVC: 45 },
];

const TIPS = [
  { icon: "📏", title: "Tavan Yüksekliği", text: "Alçıpan asma tavan için minimum 2.7 m tavan yüksekliği önerilir. Çok katmanlı modeller için en az 3 m gereklidir." },
  { icon: "💧", title: "Nem Kontrolü", text: "Banyo ve mutfaklarda standart alçıpan yerine nem dirençli (yeşil) alçıpan paneller kullanılmalıdır." },
  { icon: "💡", title: "LED Aydınlatma", text: "Cove ve gizli LED şeritler için alçıpan çerçeve en az 8 cm derinliğinde tasarlanmalıdır. Sıcak beyaz (3000K) salonlar için idealdir." },
  { icon: "🔥", title: "Yangın Güvenliği", text: "Yangına dayanıklı (kırmızı) alçıpan paneller ticari mekanlarda ve mutfaklarda tercih edilmelidir." },
  { icon: "🔧", title: "Çerçeve Sistemi", text: "Galvanizli çelik profil çerçeveler, ahşap çerçevelere kıyasla daha uzun ömürlü ve nem dirençlidir." },
  { icon: "🎨", title: "Boya & Kaplama", text: "Alçıpan yüzeyler için mat veya yarı mat iç cephe boyası kullanılmalıdır. Parlak boya yüzey kusurlarını belirginleştirir." },
  { icon: "⚖️", title: "Yük Kapasitesi", text: "Standart alçıpan paneller ağır avizeler için yeterli değildir. Avize montajı için çerçeve sistemi güçlendirilmelidir." },
  { icon: "🌡️", title: "Isı Yalıtımı", text: "Asma tavan ile ana tavan arasına cam yünü veya taş yünü yerleştirilerek ısı yalıtımı önemli ölçüde artırılabilir." },
];

const CHART_COLORS = ["#c9a84c", "#4a90d9", "#10b981", "#ef4444", "#8b5cf6", "#f59e0b"];

/* ─── BADGE COLORS ─────────────────────────────────────────────────────── */
const priceStyle: Record<string, string> = {
  gold:   "bg-amber-900/40 text-amber-300 border border-amber-700/40",
  green:  "bg-emerald-900/40 text-emerald-300 border border-emerald-700/40",
  red:    "bg-red-900/30 text-red-300 border border-red-700/40",
  purple: "bg-purple-900/30 text-purple-300 border border-purple-700/40",
};

/* ─── MODAL ─────────────────────────────────────────────────────────────── */
type Model = typeof MODELS[0];

function ModelModal({ model, onClose }: { model: Model; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)" }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-xl w-full rounded-2xl overflow-hidden"
        style={{ background: "oklch(0.20 0.055 240)", border: "1px solid oklch(0.30 0.04 240)" }}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-56 overflow-hidden">
          <img src={model.img} alt={model.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.20 0.055 240) 0%, transparent 60%)" }} />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
            style={{ background: "rgba(0,0,0,0.5)" }}
          >✕</button>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h2 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)" }}>
              {model.title}
            </h2>
            <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${priceStyle[model.priceColor]}`}>
              {model.price}
            </span>
          </div>
          <p className="text-sm mb-4" style={{ color: "oklch(0.60 0.03 230)" }}>{model.fullDesc}</p>
          <div className="mb-4">
            <p className="text-xs font-semibold mb-2" style={{ color: "oklch(0.72 0.12 75)" }}>ÖZELLİKLER</p>
            <ul className="grid grid-cols-2 gap-1">
              {model.features.map(f => (
                <li key={f} className="flex items-center gap-1.5 text-xs" style={{ color: "oklch(0.80 0.02 220)" }}>
                  <span style={{ color: "oklch(0.72 0.12 75)" }}>◆</span> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 flex-wrap">
            {model.badges.map(b => (
              <span key={b} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "oklch(0.26 0.05 240)", color: "oklch(0.72 0.12 75)", border: "1px solid oklch(0.35 0.06 75)" }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── STAT CARD ─────────────────────────────────────────────────────────── */
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      className="rounded-xl p-6 text-center"
      style={{
        background: "oklch(0.20 0.055 240)",
        border: "1px solid oklch(0.30 0.04 240)",
        borderTop: "3px solid oklch(0.72 0.12 75)",
      }}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(201,168,76,0.12)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-3xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.72 0.12 75)" }}>
        {number}
      </div>
      <div className="text-sm" style={{ color: "oklch(0.60 0.03 230)" }}>{label}</div>
    </motion.div>
  );
}

/* ─── MODEL CARD ─────────────────────────────────────────────────────────── */
function ModelCard({ model, onClick }: { model: Model; onClick: () => void }) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden cursor-pointer"
      style={{
        background: "oklch(0.20 0.055 240)",
        border: "1px solid oklch(0.30 0.04 240)",
      }}
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(201,168,76,0.15)" }}
      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
      onClick={onClick}
      layout
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={model.img}
          alt={model.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.20 0.055 240) 0%, transparent 50%)" }} />
        <span
          className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full font-medium"
          style={{ background: "oklch(0.14 0.05 240)", color: "oklch(0.72 0.12 75)", border: "1px solid oklch(0.35 0.06 75)" }}
        >
          {model.tag}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)" }}>
          {model.title}
        </h3>
        <p className="text-sm mb-4" style={{ color: "oklch(0.60 0.03 230)" }}>{model.desc}</p>
        <div className="flex gap-2 flex-wrap">
          <span className={`text-xs px-2.5 py-1 rounded-full ${priceStyle[model.priceColor]}`}>{model.price}</span>
          {model.badges.slice(0, 2).map(b => (
            <span key={b} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "oklch(0.26 0.05 240)", color: "oklch(0.72 0.12 75)" }}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN ─────────────────────────────────────────────────────────────── */
export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const filtered = activeFilter === "all"
    ? MODELS
    : MODELS.filter(m => m.category.includes(activeFilter));

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
            {[["#istatistikler","İSTATİSTİKLER"],["#modeller","MODELLER"],["#karsilastirma","KARŞILAŞTIRMA"],["#grafikler","GRAFİKLER"],["#ipuclari","İPUÇLARI"]].map(([href, label]) => (
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

      {/* ── STATS ── */}
      <section id="istatistikler" className="py-20">
        <div className="container">
          <div className="mb-12">
            {/* Asymmetric left-led header */}
            <div className="flex items-end gap-6 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-6" style={{ background: "oklch(0.72 0.12 75)" }} />
                  <span className="text-xs tracking-[0.2em]" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Inter', sans-serif" }}>TEKNIK VERILER</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)" }}>
                  Alçıpan Asma Tavan <em style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>Hızlı Bakış</em>
                </h2>
              </div>
              <div className="hidden md:block text-right pb-1">
                <p className="text-xs" style={{ color: "oklch(0.50 0.03 230)", fontFamily: "'Inter', sans-serif" }}>Sektörün temel rakamları<br />ve öne çıkan özellikler</p>
              </div>
            </div>
            <div className="h-px" style={{ background: "linear-gradient(90deg, oklch(0.72 0.12 75), transparent)" }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { number: "10+", label: "Farklı Model Türü" },
              { number: "9–15mm", label: "Panel Kalınlık Aralığı" },
              { number: "10–15 yıl", label: "Ortalama Ömür" },
              { number: "2–3 gün", label: "Kurulum Süresi" },
              { number: "%40", label: "Ses Yalıtım Artışı" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <StatCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODELS ── */}
      <section id="modeller" className="py-20" style={{ background: "oklch(0.17 0.055 240)" }}>
        <div className="container">
          <div className="mb-12">
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-6" style={{ background: "oklch(0.72 0.12 75)" }} />
                  <span className="text-xs tracking-[0.2em]" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Inter', sans-serif" }}>MODEL KATALOĞu</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)" }}>
                  Popüler <em style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>Model Galerisi</em>
                </h2>
              </div>
              <p className="hidden md:block text-xs text-right pb-1" style={{ color: "oklch(0.50 0.03 230)", fontFamily: "'Inter', sans-serif" }}>Oda tipine göre filtreleyin<br />Modele tıklayarak detayları görün</p>
            </div>
            <div className="h-px mb-8" style={{ background: "linear-gradient(90deg, oklch(0.72 0.12 75), transparent)" }} />

            {/* Filter bar */}
            <div className="flex flex-wrap gap-2 justify-center">
              {FILTERS.map(f => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={
                    activeFilter === f.key
                      ? { background: "oklch(0.72 0.12 75)", color: "oklch(0.14 0.05 240)" }
                      : { background: "oklch(0.20 0.055 240)", color: "oklch(0.80 0.02 220)", border: "1px solid oklch(0.30 0.04 240)" }
                  }
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((model, i) => (
                <motion.div
                  key={model.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <ModelCard model={model} onClick={() => setSelectedModel(model)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section id="karsilastirma" className="py-20">
        <div className="container">
          <div className="mb-12">
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-6" style={{ background: "oklch(0.72 0.12 75)" }} />
                  <span className="text-xs tracking-[0.2em]" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Inter', sans-serif" }}>SPESİFİKASYON TABLOSU</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)" }}>
                  Malzeme <em style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>Karşılaştırması</em>
                </h2>
              </div>
              <p className="hidden md:block text-xs text-right pb-1" style={{ color: "oklch(0.50 0.03 230)", fontFamily: "'Inter', sans-serif" }}>Alçıpan · POP · Ahşap · PVC<br />Detaylı performans analizi</p>
            </div>
            <div className="h-px" style={{ background: "linear-gradient(90deg, oklch(0.72 0.12 75), transparent)" }} />
          </div>

          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid oklch(0.30 0.04 240)" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "oklch(0.18 0.06 240)" }}>
                    {["Özellik", "Alçıpan", "POP (Alçı)", "Ahşap", "PVC"].map(h => (
                      <th key={h} className="text-left px-5 py-4 font-semibold" style={{ color: "oklch(0.93 0.01 220)", borderBottom: "2px solid oklch(0.72 0.12 75)" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "oklch(0.20 0.055 240)" : "oklch(0.22 0.055 240)", borderBottom: "1px solid oklch(0.28 0.04 240)" }}>
                      <td className="px-5 py-3.5 font-semibold" style={{ color: "oklch(0.72 0.12 75)" }}>{row.feature}</td>
                      <td className="px-5 py-3.5" style={{ color: row.alcipan.includes("✔") ? "#6ee7b7" : row.alcipan.includes("✗") ? "#fca5a5" : "oklch(0.80 0.02 220)" }}>{row.alcipan}</td>
                      <td className="px-5 py-3.5" style={{ color: row.pop.includes("✔") ? "#6ee7b7" : row.pop.includes("✗") ? "#fca5a5" : "oklch(0.80 0.02 220)" }}>{row.pop}</td>
                      <td className="px-5 py-3.5" style={{ color: row.ahsap.includes("✔") ? "#6ee7b7" : row.ahsap.includes("✗") ? "#fca5a5" : "oklch(0.80 0.02 220)" }}>{row.ahsap}</td>
                      <td className="px-5 py-3.5" style={{ color: row.pvc.includes("✔") ? "#6ee7b7" : row.pvc.includes("✗") ? "#fca5a5" : "oklch(0.80 0.02 220)" }}>{row.pvc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHARTS ── */}
      <section id="grafikler" className="py-20" style={{ background: "oklch(0.17 0.055 240)" }}>
        <div className="container">
          <div className="mb-12">
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-6" style={{ background: "oklch(0.72 0.12 75)" }} />
                  <span className="text-xs tracking-[0.2em]" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Inter', sans-serif" }}>ANALİTİK PANEL</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)" }}>
                  Veri <em style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>Görselleştirme</em>
                </h2>
              </div>
              <p className="hidden md:block text-xs text-right pb-1" style={{ color: "oklch(0.50 0.03 230)", fontFamily: "'Inter', sans-serif" }}>Malzeme karşılaştırmaları<br />ve model popülerliği</p>
            </div>
            <div className="h-px" style={{ background: "linear-gradient(90deg, oklch(0.72 0.12 75), transparent)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pie */}
            <div className="rounded-xl p-6" style={{ background: "oklch(0.20 0.055 240)", border: "1px solid oklch(0.30 0.04 240)" }}>
              <h3 className="text-base font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)" }}>
                📊 Malzeme Popülerlik Oranları (2024)
              </h3>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie data={PIE_DATA} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" paddingAngle={3}>
                    {PIE_DATA.map((_, i) => <Cell key={i} fill={CHART_COLORS[i]} />)}
                  </Pie>
                  <Tooltip formatter={(v: number) => `%${v}`} contentStyle={{ background: "oklch(0.20 0.055 240)", border: "1px solid oklch(0.30 0.04 240)", borderRadius: 8, color: "oklch(0.93 0.01 220)" }} />
                  <Legend wrapperStyle={{ color: "oklch(0.80 0.02 220)", fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Radar */}
            <div className="rounded-xl p-6" style={{ background: "oklch(0.20 0.055 240)", border: "1px solid oklch(0.30 0.04 240)" }}>
              <h3 className="text-base font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)" }}>
                📈 Malzeme Performans Karşılaştırması
              </h3>
              <ResponsiveContainer width="100%" height={260}>
                <RadarChart data={RADAR_DATA}>
                  <PolarGrid stroke="oklch(0.30 0.04 240)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "oklch(0.70 0.03 230)", fontSize: 11 }} />
                  {["Alçıpan","POP","Ahşap","PVC"].map((k, i) => (
                    <Radar key={k} name={k} dataKey={k} stroke={CHART_COLORS[i]} fill={CHART_COLORS[i]} fillOpacity={0.12} />
                  ))}
                  <Legend wrapperStyle={{ color: "oklch(0.80 0.02 220)", fontSize: 12 }} />
                  <Tooltip contentStyle={{ background: "oklch(0.20 0.055 240)", border: "1px solid oklch(0.30 0.04 240)", borderRadius: 8, color: "oklch(0.93 0.01 220)" }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Bar - Cost */}
            <div className="rounded-xl p-6" style={{ background: "oklch(0.20 0.055 240)", border: "1px solid oklch(0.30 0.04 240)" }}>
              <h3 className="text-base font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)" }}>
                💰 Maliyet Karşılaştırması (₺/m²)
              </h3>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={BAR_DATA} barSize={40}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.04 240)" />
                  <XAxis dataKey="name" tick={{ fill: "oklch(0.70 0.03 230)", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "oklch(0.70 0.03 230)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(v: number) => `₺${v}/m²`} contentStyle={{ background: "oklch(0.20 0.055 240)", border: "1px solid oklch(0.30 0.04 240)", borderRadius: 8, color: "oklch(0.93 0.01 220)" }} />
                  <Bar dataKey="fiyat" name="Fiyat" radius={[6, 6, 0, 0]}>
                    {BAR_DATA.map((_, i) => <Cell key={i} fill={CHART_COLORS[i]} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Horizontal Bar - Room */}
            <div className="rounded-xl p-6" style={{ background: "oklch(0.20 0.055 240)", border: "1px solid oklch(0.30 0.04 240)" }}>
              <h3 className="text-base font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)" }}>
                🏠 Oda Tipine Göre Tercih (%)
              </h3>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={ROOM_DATA} layout="vertical" barSize={12}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.04 240)" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: "oklch(0.70 0.03 230)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
                  <YAxis type="category" dataKey="name" tick={{ fill: "oklch(0.70 0.03 230)", fontSize: 12 }} axisLine={false} tickLine={false} width={80} />
                  <Tooltip formatter={(v: number) => `%${v}`} contentStyle={{ background: "oklch(0.20 0.055 240)", border: "1px solid oklch(0.30 0.04 240)", borderRadius: 8, color: "oklch(0.93 0.01 220)" }} />
                  <Legend wrapperStyle={{ color: "oklch(0.80 0.02 220)", fontSize: 12 }} />
                  <Bar dataKey="Alçıpan" fill="#c9a84c" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="PVC" fill="#4a90d9" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPS ── */}
      <section id="ipuclari" className="py-20">
        <div className="container">
          <div className="mb-12">
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-6" style={{ background: "oklch(0.72 0.12 75)" }} />
                  <span className="text-xs tracking-[0.2em]" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Inter', sans-serif" }}>UYGULAMA NOTLARI</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)" }}>
                  Kurulum & Seçim <em style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>İpuçları</em>
                </h2>
              </div>
              <p className="hidden md:block text-xs text-right pb-1" style={{ color: "oklch(0.50 0.03 230)", fontFamily: "'Inter', sans-serif" }}>Uzmanlardan kritik bilgiler<br />Saha deneyiminden süzülmüş</p>
            </div>
            <div className="h-px" style={{ background: "linear-gradient(90deg, oklch(0.72 0.12 75), transparent)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIPS.map((tip, i) => (
              <motion.div
                key={i}
                className="rounded-xl p-5"
                style={{
                  background: "oklch(0.20 0.055 240)",
                  border: "1px solid oklch(0.30 0.04 240)",
                  borderLeft: "4px solid oklch(0.72 0.12 75)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3 }}
              >
                <div className="text-2xl mb-3">{tip.icon}</div>
                <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.93 0.01 220)" }}>
                  {tip.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "oklch(0.60 0.03 230)" }}>{tip.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 text-center" style={{ background: "oklch(0.12 0.05 240)", borderTop: "1px solid oklch(0.30 0.04 240)" }}>
        <div className="text-lg font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.72 0.12 75)" }}>
          ◆ Asma Tavan Rehberi
        </div>
        <p className="text-xs" style={{ color: "oklch(0.50 0.03 230)" }}>
          Kaynak: Livspace, Favori Yapı, Interior Company &nbsp;|&nbsp; Temmuz 2024
        </p>
        <p className="text-xs mt-1" style={{ color: "oklch(0.40 0.03 230)" }}>
          Bu sayfa araştırma amaçlıdır. Fiyatlar bölgeye ve uygulamaya göre değişiklik gösterebilir.
        </p>
      </footer>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {selectedModel && (
          <ModelModal model={selectedModel} onClose={() => setSelectedModel(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
