import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Model = {
  id: number;
  title: string;
  category: string[];
  tag: string;
  img: string;
  desc: string;
  fullDesc: string;
  features: string[];
  price: string;
  priceColor: "gold" | "green" | "red" | "purple";
  badges: string[];
};
const MODELS: Model[] = [
  {
    id: 1,
    title: "Yatak Odası Klasik Alçıpan",
    category: ["yatak", "led"],
    tag: "Yatak Odası",
    img: "/manus-storage/img1_yatak_odasi_478d5f17.jpg",
    desc: "Romantik atmosfer için gizli LED aydınlatmalı, baş ucu nişli tasarım.",
    fullDesc:
      "Yatak odaları için tasarlanmış, gizli LED aydınlatmalı ve romantik atmosfer yaratan klasik alçıpan modeli. Baş ucu kısmında özel aydınlatma nişleri bulunur.",
    features: [
      "Gizli LED şerit",
      "Baş ucu nişi",
      "Ses yalıtımı",
      "Beyaz mat yüzey",
      "Spot entegrasyonu",
    ],
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
  { key: "yatak", label: "Yatak Odası" },
  { key: "salon", label: "Salon" },
  { key: "mutfak", label: "Mutfak" },
  { key: "ofis", label: "Ofis" },
  { key: "led", label: "LED'li" },
];
const priceStyle: Record<Model["priceColor"], string> = {
  gold: "bg-amber-900/30 text-amber-300 border border-amber-700/40",
  green: "bg-green-900/30 text-green-300 border border-green-700/40",
  red: "bg-red-900/30 text-red-300 border border-red-700/40",
  purple: "bg-purple-900/30 text-purple-300 border border-purple-700/40",
};

export default function ModelGallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  const filteredModels =
    activeFilter === "all"
      ? MODELS
      : MODELS.filter((model) => model.category.includes(activeFilter));

  return (
    <>
      <section id="modeller" className="py-20">
        <div className="container">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <div
                className="h-px w-6"
                style={{ background: "oklch(0.72 0.12 75)" }}
              />

              <span
                className="text-xs tracking-[0.2em]"
                style={{
                  color: "oklch(0.72 0.12 75)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                MODEL GALERİSİ
              </span>
            </div>

            <h2
              className="text-3xl font-bold md:text-4xl"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.93 0.01 220)",
              }}
            >
              Asma Tavan
              <em
                style={{
                  color: "oklch(0.72 0.12 75)",
                  fontStyle: "italic",
                }}
              >
                {" "}
                Modelleri
              </em>
            </h2>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                type="button"
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className="rounded-lg px-4 py-2 text-sm font-medium transition-all"
                style={{
                  background:
                    activeFilter === filter.key
                      ? "oklch(0.72 0.12 75)"
                      : "oklch(0.20 0.055 240)",
                  color:
                    activeFilter === filter.key
                      ? "oklch(0.14 0.05 240)"
                      : "oklch(0.80 0.02 220)",
                  border: "1px solid oklch(0.30 0.04 240)",
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredModels.map((model) => (
              <ModelCard
                key={model.id}
                model={model}
                onClick={() => setSelectedModel(model)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedModel && (
          <ModelModal
            model={selectedModel}
            onClose={() => setSelectedModel(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ModelCard({
  model,
  onClick,
}: {
  model: Model;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      className="overflow-hidden rounded-xl text-left"
      style={{
        background: "oklch(0.20 0.055 240)",
        border: "1px solid oklch(0.30 0.04 240)",
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 16px 40px rgba(201,168,76,0.15)",
      }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      layout
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={model.img}
          alt={model.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.20 0.055 240), transparent 50%)",
          }}
        />

        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium"
          style={{
            background: "oklch(0.14 0.05 240)",
            color: "oklch(0.72 0.12 75)",
            border: "1px solid oklch(0.35 0.06 75)",
          }}
        >
          {model.tag}
        </span>
      </div>

      <div className="p-5">
        <h3
          className="mb-2 text-base font-bold"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "oklch(0.93 0.01 220)",
          }}
        >
          {model.title}
        </h3>

        <p
          className="mb-4 text-sm"
          style={{ color: "oklch(0.60 0.03 230)" }}
        >
          {model.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-xs ${
              priceStyle[model.priceColor]
            }`}
          >
            {model.price}
          </span>

          {model.badges.slice(0, 2).map((badge) => (
            <span
              key={badge}
              className="rounded-full px-2.5 py-1 text-xs"
              style={{
                background: "oklch(0.26 0.05 240)",
                color: "oklch(0.72 0.12 75)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

function ModelModal({
  model,
  onClose,
}: {
  model: Model;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-xl overflow-hidden rounded-2xl"
        style={{
          background: "oklch(0.20 0.055 240)",
          border: "1px solid oklch(0.30 0.04 240)",
        }}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={model.img}
            alt={model.title}
            className="h-full w-full object-cover"
          />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-white"
            style={{ background: "rgba(0,0,0,0.5)" }}
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-start justify-between gap-3">
            <h2
              className="text-xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.93 0.01 220)",
              }}
            >
              {model.title}
            </h2>

            <span
              className={`whitespace-nowrap rounded-full px-2 py-1 text-xs ${
                priceStyle[model.priceColor]
              }`}
            >
              {model.price}
            </span>
          </div>

          <p
            className="mb-4 text-sm"
            style={{ color: "oklch(0.60 0.03 230)" }}
          >
            {model.fullDesc}
          </p>

          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {model.features.map((feature) => (
              <li
                key={feature}
                className="text-xs"
                style={{ color: "oklch(0.80 0.02 220)" }}
              >
                <span style={{ color: "oklch(0.72 0.12 75)" }}>◆</span>{" "}
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}