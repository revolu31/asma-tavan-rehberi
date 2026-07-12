import { motion } from "framer-motion";

const STATS = [
  { number: "10+", label: "Farklı Model Türü" },
  { number: "9–15 mm", label: "Panel Kalınlık Aralığı" },
  { number: "10–15 yıl", label: "Ortalama Kullanım Ömrü" },
  { number: "2–3 gün", label: "Ortalama Kurulum Süresi" },
  { number: "%40", label: "Ses Yalıtım Artışı" },
];

export default function StatsSection() {
  return (
    <section id="istatistikler" className="py-20">
      <div className="container">
        <div className="mb-12">
          <div className="mb-4 flex items-end gap-6">
            <div className="flex-1">
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
                  TEKNİK VERİLER
                </span>
              </div>

              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.93 0.01 220)",
                }}
              >
                Asma Tavan Sistemlerine
                <em
                  style={{
                    color: "oklch(0.72 0.12 75)",
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  Hızlı Bakış
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
              Temel uygulama verileri
              <br />
              ve öne çıkan özellikler
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

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <StatCard number={stat.number} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <motion.div
      className="rounded-xl p-6 text-center"
      style={{
        background: "oklch(0.20 0.055 240)",
        border: "1px solid oklch(0.30 0.04 240)",
        borderTop: "3px solid oklch(0.72 0.12 75)",
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 32px rgba(201,168,76,0.12)",
      }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="mb-1 text-3xl font-bold"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "oklch(0.72 0.12 75)",
        }}
      >
        {number}
      </div>

      <div
        className="text-sm"
        style={{ color: "oklch(0.60 0.03 230)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}