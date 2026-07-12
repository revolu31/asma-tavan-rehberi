const COMPARISON_DATA = [
  {
    feature: "Maliyet",
    alcipan: "Orta",
    pop: "Orta-Yüksek",
    ahsap: "Yüksek",
    pvc: "Düşük",
  },
  {
    feature: "Dayanıklılık",
    alcipan: "10–15 yıl ✔",
    pop: "8–12 yıl",
    ahsap: "20+ yıl ✔",
    pvc: "8–10 yıl",
  },
  {
    feature: "Kurulum Süresi",
    alcipan: "2–3 gün ✔",
    pop: "5–7 gün",
    ahsap: "3–5 gün",
    pvc: "1–2 gün ✔",
  },
  {
    feature: "Nem Direnci",
    alcipan: "Düşük ✗",
    pop: "Çok Düşük ✗",
    ahsap: "Orta",
    pvc: "Mükemmel ✔",
  },
  {
    feature: "Ses Yalıtımı",
    alcipan: "İyi ✔",
    pop: "Orta",
    ahsap: "İyi ✔",
    pvc: "Zayıf",
  },
  {
    feature: "Isı Yalıtımı",
    alcipan: "İyi ✔",
    pop: "Orta",
    ahsap: "Orta",
    pvc: "Zayıf",
  },
  {
    feature: "Yangın Direnci",
    alcipan: "Yüksek ✔",
    pop: "Orta",
    ahsap: "Düşük ✗",
    pvc: "Orta",
  },
  {
    feature: "LED Uyumu",
    alcipan: "Mükemmel ✔",
    pop: "İyi ✔",
    ahsap: "Orta",
    pvc: "Orta",
  },
  {
    feature: "Bakım Kolaylığı",
    alcipan: "Kolay ✔",
    pop: "Orta",
    ahsap: "Zor",
    pvc: "Çok Kolay ✔",
  },
];

function valueColor(value: string) {
  if (value.includes("✔")) return "#6ee7b7";
  if (value.includes("✗")) return "#fca5a5";
  return "oklch(0.80 0.02 220)";
}

export default function ComparisonSection() {
  return (
    <section id="karsilastirma" className="py-20">
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
                  SPESİFİKASYON TABLOSU
                </span>
              </div>

              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.93 0.01 220)",
                }}
              >
                Malzeme
                <em
                  style={{
                    color: "oklch(0.72 0.12 75)",
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  Karşılaştırması
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
              Alçıpan · POP · Ahşap · PVC
              <br />
              Detaylı performans analizi
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

        <div
          className="overflow-hidden rounded-xl"
          style={{ border: "1px solid oklch(0.30 0.04 240)" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "oklch(0.18 0.06 240)" }}>
                  {["Özellik", "Alçıpan", "POP (Alçı)", "Ahşap", "PVC"].map(
                    (heading) => (
                      <th
                        key={heading}
                        className="px-5 py-4 text-left font-semibold"
                        style={{
                          color: "oklch(0.93 0.01 220)",
                          borderBottom:
                            "2px solid oklch(0.72 0.12 75)",
                        }}
                      >
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {COMPARISON_DATA.map((row, index) => (
                  <tr
                    key={row.feature}
                    style={{
                      background:
                        index % 2 === 0
                          ? "oklch(0.20 0.055 240)"
                          : "oklch(0.22 0.055 240)",
                      borderBottom:
                        "1px solid oklch(0.28 0.04 240)",
                    }}
                  >
                    <td
                      className="px-5 py-3.5 font-semibold"
                      style={{ color: "oklch(0.72 0.12 75)" }}
                    >
                      {row.feature}
                    </td>

                    <td
                      className="px-5 py-3.5"
                      style={{ color: valueColor(row.alcipan) }}
                    >
                      {row.alcipan}
                    </td>

                    <td
                      className="px-5 py-3.5"
                      style={{ color: valueColor(row.pop) }}
                    >
                      {row.pop}
                    </td>

                    <td
                      className="px-5 py-3.5"
                      style={{ color: valueColor(row.ahsap) }}
                    >
                      {row.ahsap}
                    </td>

                    <td
                      className="px-5 py-3.5"
                      style={{ color: valueColor(row.pvc) }}
                    >
                      {row.pvc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}