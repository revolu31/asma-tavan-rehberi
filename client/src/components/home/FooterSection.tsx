export default function FooterSection() {
  return (
    <footer
      className="py-12"
      style={{
        background: "oklch(0.12 0.05 240)",
        borderTop: "1px solid oklch(0.30 0.04 240)",
      }}
    >
      <div className="container">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3
              className="mb-4 text-2xl font-bold"
              style={{
                color: "oklch(0.72 0.12 75)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              ORNİTORENK YAPI
            </h3>

            <p
              className="text-sm leading-7"
              style={{ color: "oklch(0.60 0.03 230)" }}
            >
              Ev, ofis, mağaza ve ticari alanlar için asma tavan,
              alçıpan, prefabrik yapı ve dekorasyon çözümleri sunuyoruz.
              Ücretsiz keşif, kaliteli malzeme ve garantili işçilikle
              hizmet veriyoruz.
            </p>
          </div>

          <div>
            <h4
              className="mb-4 font-bold"
              style={{ color: "oklch(0.93 0.01 220)" }}
            >
              Hizmetlerimiz
            </h4>

            <ul
              className="space-y-2 text-sm"
              style={{ color: "oklch(0.60 0.03 230)" }}
            >
              <li>• Asma Tavan Sistemleri</li>
              <li>• Alçıpan Uygulamaları</li>
              <li>• Anahtar Teslim Prefabrik</li>
              <li>• Tadilat ve Dekorasyon</li>
              <li>• Bakım ve Onarım</li>
            </ul>
          </div>

          <div>
            <h4
              className="mb-4 font-bold"
              style={{ color: "oklch(0.93 0.01 220)" }}
            >
              İletişim
            </h4>

            <a
              href="tel:+905444265407"
              className="block"
              style={{ color: "oklch(0.60 0.03 230)" }}
            >
              📞 0544 426 54 07
            </a>

            <a
              href="https://wa.me/905444265407"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block"
              style={{ color: "oklch(0.60 0.03 230)" }}
            >
              💬 WhatsApp Destek
            </a>

            <p
              className="mt-2"
              style={{ color: "oklch(0.60 0.03 230)" }}
            >
              📍 Hatay
            </p>

            <p
              className="mt-2"
              style={{ color: "oklch(0.60 0.03 230)" }}
            >
              🕒 Haftanın 7 Günü Hizmet
            </p>
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-center text-sm"
          style={{
            borderTop: "1px solid oklch(0.30 0.04 240)",
            color: "oklch(0.50 0.03 230)",
          }}
        >
          © 2026 ORNİTORENK YAPI • Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
}