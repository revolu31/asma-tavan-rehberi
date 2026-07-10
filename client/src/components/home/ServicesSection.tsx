export default function ServicesSection() {
  return (
    <section
      id="hizmetler"
      className="relative z-10 py-20"
      style={{ background: "oklch(0.14 0.05 240)" }}
    >
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
              HİZMETLERİMİZ
            </span>
          </div>

          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.93 0.01 220)",
            }}
          >
            Yapı ve Dekorasyon
            <em
              style={{
                color: "oklch(0.72 0.12 75)",
                fontStyle: "italic",
              }}
            >
              {" "}
              Çözümlerimiz
            </em>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon="🏠"
            title="Asma Tavan"
            description="Alçıpan, LED, metal ve dekoratif asma tavan uygulamaları."
          />

          <ServiceCard
            icon="🧱"
            title="Alçıpan Sistemleri"
            description="Bölme duvar, niş, TV ünitesi ve dekoratif alçıpan çözümleri."
          />

          <ServiceCard
            icon="🏗️"
            title="Prefabrik Yapılar"
            description="Anahtar teslim prefabrik ev, ofis ve şantiye yapıları."
          />

          <ServiceCard
            icon="🔨"
            title="Tadilat & Dekorasyon"
            description="Ev, ofis ve iş yerleri için komple yenileme ve dekorasyon hizmetleri."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="rounded-xl p-6"
      style={{
        background: "oklch(0.20 0.055 240)",
        border: "1px solid oklch(0.30 0.04 240)",
      }}
    >
      <div className="mb-3 text-3xl">{icon}</div>

      <h3
        className="mb-2 font-bold"
        style={{ color: "oklch(0.93 0.01 220)" }}
      >
        {title}
      </h3>

      <p style={{ color: "oklch(0.60 0.03 230)" }}>
        {description}
      </p>
    </div>
  );
}
