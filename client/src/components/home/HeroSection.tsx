import { motion } from "framer-motion";

const PHONE_NUMBER = "905444265407";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.72 0.12 75 / 0.05) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.12 75 / 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.72 0.12 75 / 0.18) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          backgroundPosition: "20px 20px",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, oklch(0.22 0.08 240 / 0.7) 0%, oklch(0.14 0.05 240) 65%)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block"
        style={{ opacity: 0.13 }}
      >
        <svg
          viewBox="0 0 500 700"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="60"
            y="80"
            width="380"
            height="540"
            stroke="#c9a84c"
            strokeWidth="1.5"
          />
          <rect
            x="100"
            y="120"
            width="300"
            height="460"
            stroke="#c9a84c"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
          <rect
            x="140"
            y="160"
            width="220"
            height="380"
            stroke="#c9a84c"
          />
          <circle
            cx="250"
            cy="350"
            r="80"
            stroke="#c9a84c"
            strokeWidth="1.2"
          />
          <circle
            cx="250"
            cy="350"
            r="50"
            stroke="#c9a84c"
            strokeWidth="0.7"
            strokeDasharray="3 3"
          />
          <circle
            cx="250"
            cy="350"
            r="20"
            stroke="#c9a84c"
          />
          <line
            x1="60"
            y1="350"
            x2="440"
            y2="350"
            stroke="#c9a84c"
            strokeWidth="0.6"
            strokeDasharray="6 3"
          />
          <line
            x1="250"
            y1="80"
            x2="250"
            y2="620"
            stroke="#c9a84c"
            strokeWidth="0.6"
            strokeDasharray="6 3"
          />
          <line
            x1="60"
            y1="80"
            x2="440"
            y2="620"
            stroke="#c9a84c"
            strokeWidth="0.4"
            strokeDasharray="2 6"
          />
          <line
            x1="440"
            y1="80"
            x2="60"
            y2="620"
            stroke="#c9a84c"
            strokeWidth="0.4"
            strokeDasharray="2 6"
          />

          <text
            x="250"
            y="675"
            textAnchor="middle"
            fill="#c9a84c"
            fontSize="10"
            fontFamily="monospace"
          >
            PLAN GÖRÜNÜŞÜ — 1:50
          </text>
        </svg>
      </div>

      <div className="container relative z-10 pb-16 pt-28">
        <div className="max-w-2xl">
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div
              className="h-px w-8"
              style={{ background: "oklch(0.72 0.12 75)" }}
            />

            <span
              className="text-xs font-medium tracking-[0.25em]"
              style={{
                color: "oklch(0.72 0.12 75)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              YAPI · DEKORASYON · PREFABRİK
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 font-bold leading-[1.05]"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.93 0.01 220)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Profesyonel
            <br />
            <em
              style={{
                color: "oklch(0.72 0.12 75)",
                fontStyle: "italic",
              }}
            >
              Yapı ve Dekorasyon
            </em>
            <br />
            Çözümleri
          </motion.h1>

          <motion.p
            className="mb-8 max-w-xl text-base leading-relaxed"
            style={{
              color: "oklch(0.65 0.03 230)",
              fontFamily: "'Inter', sans-serif",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Asma tavan, alçıpan sistemleri, anahtar teslim prefabrik yapılar
            ve komple tadilat hizmetlerinde ücretsiz keşif ve profesyonel
            uygulama sunuyoruz.
          </motion.p>

          <motion.div
            className="mb-8 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              "✅ Ücretsiz Keşif",
              "🏗️ Anahtar Teslim",
              "🛠️ Garantili İşçilik",
              "📍 Hatay Geneli",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg px-3 py-1.5 text-xs tracking-wider"
                style={{
                  background: "oklch(0.20 0.055 240)",
                  color: "oklch(0.72 0.12 75)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                }}
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                "Merhaba, ücretsiz keşif ve fiyat teklifi almak istiyorum."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-7 py-4 font-bold text-white transition-transform hover:scale-105"
              style={{ background: "#25D366" }}
            >
              💬 Ücretsiz Teklif Al
            </a>

            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="rounded-xl px-7 py-4 font-bold text-white transition-transform hover:scale-105"
              style={{ background: "#2563EB" }}
            >
              📞 Hemen Ara
            </a>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.14 0.05 240))",
        }}
      />
    </section>
  );
}