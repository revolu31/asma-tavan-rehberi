export default function MapSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12">
          <h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.93 0.01 220)",
            }}
          >
            Konum ve Hizmet Bölgemiz
          </h2>

          <p style={{ color: "oklch(0.60 0.03 230)" }}>
            Hatay ve çevre ilçelerde asma tavan, alçıpan, prefabrik yapı ve
            dekorasyon hizmetleri sunuyoruz.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-2xl"
          style={{
            border: "1px solid oklch(0.30 0.04 240)",
            background: "oklch(0.20 0.055 240)",
          }}
        >
          <iframe
            title="Hatay Harita"
            src="https://www.google.com/maps?q=Hatay&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="flex flex-wrap items-center justify-between gap-4 p-6">
            <div>
              <h3
                className="mb-2 text-xl font-bold"
                style={{ color: "oklch(0.93 0.01 220)" }}
              >
                Hatay Geneli Hizmet
              </h3>

              <p style={{ color: "oklch(0.60 0.03 230)" }}>
                Ücretsiz keşif ve hızlı fiyat teklifi için bizimle iletişime
                geçin.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Hatay"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-6 py-3 font-bold text-white transition-all duration-300 hover:scale-105"
              style={{ background: "#2563EB" }}
            >
              📍 Yol Tarifi Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}