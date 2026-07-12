import { motion } from "framer-motion";

const TIPS = [
  {
    icon: "📏",
    title: "Tavan Yüksekliği",
    text: "Alçıpan asma tavan için minimum 2.7 m tavan yüksekliği önerilir. Çok katmanlı modeller için en az 3 m gereklidir.",
  },
  {
    icon: "💧",
    title: "Nem Kontrolü",
    text: "Banyo ve mutfaklarda standart alçıpan yerine nem dirençli yeşil alçıpan paneller kullanılmalıdır.",
  },
  {
    icon: "💡",
    title: "LED Aydınlatma",
    text: "Gizli LED şeritler için alçıpan çerçeve yeterli derinlikte hazırlanmalıdır. Salonlarda sıcak beyaz ışık sık tercih edilir.",
  },
  {
    icon: "🔥",
    title: "Yangın Güvenliği",
    text: "Yangına dayanıklı alçıpan paneller ticari mekanlarda ve riskli alanlarda tercih edilmelidir.",
  },
  {
    icon: "🔧",
    title: "Çerçeve Sistemi",
    text: "Galvanizli çelik profil sistemleri uzun ömürlü, sağlam ve nem karşısında daha dayanıklıdır.",
  },
  {
    icon: "🎨",
    title: "Boya ve Kaplama",
    text: "Mat veya yarı mat boyalar yüzey kusurlarını daha az belli eder ve temiz bir görünüm sağlar.",
  },
  {
    icon: "⚖️",
    title: "Yük Kapasitesi",
    text: "Ağır avize ve ekipman montajlarında taşıyıcı sistem önceden güçlendirilmelidir.",
  },
  {
    icon: "🌡️",
    title: "Isı ve Ses Yalıtımı",
    text: "Tavan boşluğuna taş yünü veya cam yünü uygulanarak ısı ve ses yalıtımı artırılabilir.",
  },
];

export default function TipsSection() {
  return (
    <section id="ipuclari" className="py-20">
      <div className="container">
        <div className="mb-12">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
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
                  UYGULAMA NOTLARI
                </span>
              </div>

              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.93 0.01 220)",
                }}
              >
                Kurulum ve Seçim
                <em
                  style={{
                    color: "oklch(0.72 0.12 75)",
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  İpuçları
                </em>
              </h2>
            </div>

            <p
              className="hidden pb-1 text-right text-xs md:block"
              style={{
                color: "oklch(0.50 0.03 230)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Saha deneyiminden süzülmüş
              <br />
              önemli uygulama notları
            </p>
          </div>

          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.72 0.12 75), transparent)",
            }}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TIPS.map((tip, index) => (
            <motion.div
              key={tip.title}
              className="rounded-xl p-5"
              style={{
                background: "oklch(0.20 0.055 240)",
                border: "1px solid oklch(0.30 0.04 240)",
                borderLeft: "4px solid oklch(0.72 0.12 75)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -3 }}
            >
              <div className="mb-3 text-2xl">{tip.icon}</div>

              <h3
                className="mb-2 text-sm font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.93 0.01 220)",
                }}
              >
                {tip.title}
              </h3>

              <p
                className="text-xs leading-relaxed"
                style={{ color: "oklch(0.60 0.03 230)" }}
              >
                {tip.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}