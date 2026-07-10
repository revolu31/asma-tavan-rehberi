export default function WhyChooseUsSection() {
  const items = [
    {
      icon: "✅",
      title: "Ücretsiz Keşif",
      text: "İş başlamadan önce alanı inceler, ihtiyaca uygun çözüm ve fiyat teklifi sunarız.",
    },
    {
      icon: "🛠️",
      title: "Garantili İşçilik",
      text: "Uygulamalarımızda kaliteli malzeme ve düzgün işçilik prensibiyle çalışırız.",
    },
    {
      icon: "⏱️",
      title: "Zamanında Teslim",
      text: "İşi planlanan sürede bitirmek için programlı ve disiplinli çalışırız.",
    },
    {
      icon: "💰",
      title: "Uygun Fiyat",
      text: "Malzeme, metrekare ve uygulama detayına göre şeffaf fiyatlandırma yaparız.",
    },
    {
      icon: "🏗️",
      title: "Anahtar Teslim Çözüm",
      text: "Asma tavan, alçıpan, prefabrik ve dekorasyon işlerini tek elden yürütürüz.",
    },
    {
      icon: "📞",
      title: "Hızlı İletişim",
      text: "WhatsApp ve telefon üzerinden hızlı dönüş sağlayarak teklif sürecini kolaylaştırırız.",
    },
  ];

  return (
    <section
      className="py-20"
      style={{ background: "oklch(0.17 0.055 240)" }}
    >
      <div className="container">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
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
              GÜVEN VEREN HİZMET
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.93 0.01 220)",
            }}
          >
            Neden Bizi
            <em
              style={{
                color: "oklch(0.72 0.12 75)",
                fontStyle: "italic",
              }}
            >
              {" "}
              Tercih Etmelisiniz?
            </em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl p-6"
              style={{
                background: "oklch(0.20 0.055 240)",
                border: "1px solid oklch(0.30 0.04 240)",
                borderLeft: "4px solid oklch(0.72 0.12 75)",
              }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>

              <h3
                className="font-bold mb-2"
                style={{ color: "oklch(0.93 0.01 220)" }}
              >
                {item.title}
              </h3>

              <p
                className="text-sm leading-7"
                style={{ color: "oklch(0.60 0.03 230)" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}