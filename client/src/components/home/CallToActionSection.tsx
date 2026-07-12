import { motion } from "framer-motion";

const PHONE_NUMBER = "905444265407";

export default function CallToActionSection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          className="rounded-2xl p-10 text-center"
          style={{
            background: "oklch(0.20 0.055 240)",
            border: "1px solid oklch(0.30 0.04 240)",
            borderLeft: "5px solid oklch(0.72 0.12 75)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.93 0.01 220)",
            }}
          >
            Ücretsiz Keşif Talep Edin
          </h2>

          <p
            className="mx-auto mb-8 max-w-2xl text-base"
            style={{ color: "oklch(0.70 0.03 230)" }}
          >
            Ekibimiz adresinize gelerek ücretsiz keşif yapar, ihtiyacınıza
            uygun yapı ve dekorasyon çözümünü belirler ve net fiyat teklifini
            sunar.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {[
              "✅ Ücretsiz Keşif",
              "✅ Hızlı Geri Dönüş",
              "✅ Garantili İşçilik",
              "✅ Anahtar Teslim Çözüm",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg px-4 py-2"
                style={{
                  background: "oklch(0.26 0.05 240)",
                  color: "oklch(0.80 0.02 220)",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                "Merhaba, ücretsiz keşif ve fiyat teklifi almak istiyorum."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105"
              style={{ background: "#25D366" }}
            >
              💬 WhatsApp'tan Yaz
            </a>

            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="rounded-xl px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105"
              style={{ background: "#2563EB" }}
            >
              📞 Hemen Ara
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}