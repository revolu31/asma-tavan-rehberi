const SERVICE_AREAS = [
  "Antakya",
  "Defne",
  "İskenderun",
  "Arsuz",
  "Dörtyol",
  "Kırıkhan",
  "Reyhanlı",
  "Samandağ",
  "Belen",
  "Payas",
  "Altınözü",
  "Yayladağı",
  "Hassa",
];

export default function ServiceAreasSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12">
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
              HİZMET BÖLGELERİ
            </span>
          </div>

          <h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.93 0.01 220)",
            }}
          >
            Hatay ve Çevresinde
            <em
              style={{
                color: "oklch(0.72 0.12 75)",
                fontStyle: "italic",
              }}
            >
              {" "}
              Hizmet Veriyoruz
            </em>
          </h2>

          <p style={{ color: "oklch(0.60 0.03 230)" }}>
            Antakya başta olmak üzere Hatay'ın birçok ilçesinde keşif,
            uygulama ve bakım hizmeti sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="rounded-xl p-4 text-center"
              style={{
                background: "oklch(0.20 0.055 240)",
                border: "1px solid oklch(0.30 0.04 240)",
              }}
            >
              <div className="mb-2 text-xl">📍</div>

              <div
                className="font-semibold"
                style={{ color: "oklch(0.93 0.01 220)" }}
              >
                {area}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}