export default function CompanyProfileSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div
          className="rounded-2xl p-8"
          style={{
            background: "oklch(0.20 0.055 240)",
            border: "1px solid oklch(0.30 0.04 240)",
          }}
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div
                className="mb-3 text-sm tracking-[0.2em]"
                style={{
                  color: "oklch(0.72 0.12 75)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                FİRMA PROFİLİ
              </div>

              <h2
                className="mb-4 text-3xl font-bold md:text-4xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.93 0.01 220)",
                }}
              >
                ORNİTORENK YAPI
              </h2>

              <p
                className="leading-8"
                style={{
                  color: "oklch(0.60 0.03 230)",
                }}
              >
                Hatay ve çevresinde asma tavan, alçıpan sistemleri,
                anahtar teslim prefabrik yapılar ve dekorasyon
                uygulamaları alanında hizmet vermekteyiz.
              </p>
            </div>

            <div className="space-y-3">
              <div style={{ color: "oklch(0.80 0.02 220)" }}>
                📍 Hatay
              </div>

              <div style={{ color: "oklch(0.80 0.02 220)" }}>
                📞 0544 426 54 07
              </div>

              <div style={{ color: "oklch(0.80 0.02 220)" }}>
                💬 WhatsApp Destek
              </div>

              <div style={{ color: "oklch(0.80 0.02 220)" }}>
                🏠 Asma Tavan Sistemleri
              </div>

              <div style={{ color: "oklch(0.80 0.02 220)" }}>
                🧱 Alçıpan Uygulamaları
              </div>

              <div style={{ color: "oklch(0.80 0.02 220)" }}>
                🏗️ Prefabrik Yapılar
              </div>

              <div style={{ color: "oklch(0.80 0.02 220)" }}>
                🔨 Tadilat & Dekorasyon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
