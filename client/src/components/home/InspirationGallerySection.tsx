export default function InspirationGallerySection() {
  return (
    <section
      id="ornek-modeller"
      className="py-20"
      style={{ background: "oklch(0.17 0.055 240)" }}
    >
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
              TASARIM İLHAM GALERİSİ
            </span>
          </div>

          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.93 0.01 220)",
            }}
          >
            Örnek Tavan
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

          <p
            className="mt-4 max-w-3xl text-sm leading-7"
            style={{ color: "oklch(0.60 0.03 230)" }}
          >
            Bu bölümdeki görseller tasarım fikirlerini göstermek amacıyla
            hazırlanmış örnek çalışmalardır. Uygulama ölçüleri ve detayları
            mekâna göre özel olarak planlanır.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-2xl"
          style={{
            background: "oklch(0.20 0.055 240)",
            border: "1px solid oklch(0.30 0.04 240)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          }}
        >
          <img
            src="/images/model-galerisi-ornek.png"
            alt="Örnek asma tavan ve dekoratif tavan modelleri"
            className="h-auto w-full object-contain"
            loading="lazy"
          />
        </div>

        <p
          className="mt-4 text-center text-xs"
          style={{ color: "oklch(0.50 0.03 230)" }}
        >
          Görseller örnek tasarım ve ilham amaçlıdır; tamamlanmış firma
          referansı değildir.
        </p>
      </div>
    </section>
  );
}
<img
  src="/images/model-galerisi-ornek.png"
  alt="Örnek modeller"
/>