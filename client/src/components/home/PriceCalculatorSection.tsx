import { useState } from "react";
import { motion } from "framer-motion";

const PHONE_NUMBER = "905444265407";

const MATERIAL_PRICES: Record<
  string,
  { min: number; max: number; label: string }
> = {
  alcipan: { min: 280, max: 380, label: "Alçıpan" },
  pop: { min: 350, max: 450, label: "POP (Alçı)" },
  pvc: { min: 150, max: 220, label: "PVC" },
  ahsap: { min: 600, max: 900, label: "Ahşap" },
};

const INSTALLATION_COSTS: Record<
  string,
  { min: number; max: number; label: string }
> = {
  simple: { min: 50, max: 100, label: "Basit (tek katman)" },
  medium: { min: 100, max: 180, label: "Orta (çok katman)" },
  complex: { min: 180, max: 300, label: "Karmaşık (geometrik)" },
};

export default function PriceCalculatorSection() {
  const [squareMeters, setSquareMeters] = useState(30);
  const [material, setMaterial] = useState("alcipan");
  const [installation, setInstallation] = useState("medium");
  const [hasLED, setHasLED] = useState(true);

  const materialPrice = MATERIAL_PRICES[material];
  const installationPrice = INSTALLATION_COSTS[installation];

  const baseCost =
    ((materialPrice.min + materialPrice.max) / 2) * squareMeters;

  const installCost =
    ((installationPrice.min + installationPrice.max) / 2) * squareMeters;

  const ledCost = hasLED ? squareMeters * 120 : 0;
  const totalCost = baseCost + installCost + ledCost;

  const minCost =
    (materialPrice.min + installationPrice.min) * squareMeters +
    (hasLED ? squareMeters * 100 : 0);

  const maxCost =
    (materialPrice.max + installationPrice.max) * squareMeters +
    (hasLED ? squareMeters * 150 : 0);

  const sendWhatsApp = () => {
    const message = `Merhaba.

Yapı ve dekorasyon hizmetleri için teklif almak istiyorum.

Alan: ${squareMeters} m²
Malzeme: ${materialPrice.label}
Kurulum: ${installationPrice.label}
LED: ${hasLED ? "Evet" : "Hayır"}
Yaklaşık Fiyat: ${totalCost.toLocaleString("tr-TR", {
      maximumFractionDigits: 0,
    })} TL

Detaylı bilgi alabilir miyim?`;

    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="hesaplayici"
      className="py-20"
      style={{ background: "oklch(0.17 0.055 240)" }}
    >
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
                  MALİYET TAHMİNİ
                </span>
              </div>

              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.93 0.01 220)",
                }}
              >
                Fiyat
                <em
                  style={{
                    color: "oklch(0.72 0.12 75)",
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  Hesaplayıcı
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
              Alanınıza göre
              <br />
              tahmini maliyet hesaplayın
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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            className="rounded-xl p-8"
            style={{
              background: "oklch(0.20 0.055 240)",
              border: "1px solid oklch(0.30 0.04 240)",
              borderLeft: "4px solid oklch(0.72 0.12 75)",
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="mb-6 text-lg font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.93 0.01 220)",
              }}
            >
              Parametrelerinizi Girin
            </h3>

            <div className="mb-8">
              <label
                className="mb-3 block text-sm font-semibold"
                style={{ color: "oklch(0.80 0.02 220)" }}
              >
                Alan:
                <span style={{ color: "oklch(0.72 0.12 75)" }}>
                  {" "}
                  {squareMeters} m²
                </span>
              </label>

              <input
                type="range"
                min="10"
                max="200"
                value={squareMeters}
                onChange={(event) =>
                  setSquareMeters(Number(event.target.value))
                }
                className="h-2 w-full cursor-pointer appearance-none rounded-lg"
              />

              <div
                className="mt-2 flex justify-between text-xs"
                style={{ color: "oklch(0.50 0.03 230)" }}
              >
                <span>10 m²</span>
                <span>200 m²</span>
              </div>
            </div>

            <div className="mb-8">
              <label
                className="mb-3 block text-sm font-semibold"
                style={{ color: "oklch(0.80 0.02 220)" }}
              >
                Malzeme Seçimi
              </label>

              <div className="grid grid-cols-2 gap-2">
                {Object.entries(MATERIAL_PRICES).map(([key, value]) => (
                  <button
                    type="button"
                    key={key}
                    onClick={() => setMaterial(key)}
                    className="rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200"
                    style={{
                      background:
                        material === key
                          ? "oklch(0.72 0.12 75)"
                          : "oklch(0.26 0.05 240)",
                      color:
                        material === key
                          ? "oklch(0.14 0.05 240)"
                          : "oklch(0.80 0.02 220)",
                      border:
                        material === key
                          ? "none"
                          : "1px solid oklch(0.30 0.04 240)",
                    }}
                  >
                    {value.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label
                className="mb-3 block text-sm font-semibold"
                style={{ color: "oklch(0.80 0.02 220)" }}
              >
                Kurulum Tipi
              </label>

              <div className="space-y-2">
                {Object.entries(INSTALLATION_COSTS).map(([key, value]) => (
                  <button
                    type="button"
                    key={key}
                    onClick={() => setInstallation(key)}
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-left text-xs font-medium transition-all duration-200"
                    style={{
                      background:
                        installation === key
                          ? "oklch(0.72 0.12 75)"
                          : "oklch(0.26 0.05 240)",
                      color:
                        installation === key
                          ? "oklch(0.14 0.05 240)"
                          : "oklch(0.80 0.02 220)",
                      border:
                        installation === key
                          ? "none"
                          : "1px solid oklch(0.30 0.04 240)",
                    }}
                  >
                    {value.label}
                  </button>
                ))}
              </div>
            </div>

            <label
              className="flex cursor-pointer items-center gap-3 rounded-lg p-3"
              style={{ background: "oklch(0.26 0.05 240)" }}
            >
              <input
                type="checkbox"
                checked={hasLED}
                onChange={(event) => setHasLED(event.target.checked)}
                className="h-4 w-4"
              />

              <span
                className="flex-1 text-sm"
                style={{ color: "oklch(0.80 0.02 220)" }}
              >
                Gizli LED Aydınlatma Ekle
                <span
                  className="block text-xs"
                  style={{ color: "oklch(0.60 0.03 230)" }}
                >
                  +120 TL/m² tahmini
                </span>
              </span>
            </label>
          </motion.div>

          <motion.div
            className="rounded-xl p-8"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.20 0.055 240), oklch(0.22 0.06 240))",
              border: "2px solid oklch(0.72 0.12 75 / 0.4)",
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="mb-8 text-lg font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.93 0.01 220)",
              }}
            >
              Tahmini Maliyet Analizi
            </h3>

            <div className="mb-8 space-y-4">
              <CostRow label="Malzeme Maliyeti" value={baseCost} />
              <CostRow label="Kurulum Ücreti" value={installCost} />

              {hasLED && (
                <CostRow
                  label="LED Aydınlatma"
                  value={ledCost}
                  highlighted
                />
              )}
            </div>

            <div
              className="mb-6 rounded-lg p-4"
              style={{
                background: "oklch(0.72 0.12 75 / 0.15)",
                border: "1px solid oklch(0.72 0.12 75 / 0.3)",
              }}
            >
              <p
                className="mb-1 text-xs"
                style={{ color: "oklch(0.70 0.03 230)" }}
              >
                Toplam Tahmini Maliyet
              </p>

              <p
                className="text-3xl font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.72 0.12 75)",
                }}
              >
                ₺
                {totalCost.toLocaleString("tr-TR", {
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>

            <div
              className="rounded-lg p-4"
              style={{ background: "oklch(0.26 0.05 240)" }}
            >
              <p
                className="mb-2 text-xs"
                style={{ color: "oklch(0.70 0.03 230)" }}
              >
                Fiyat Aralığı
              </p>

              <p
                className="text-sm font-semibold"
                style={{ color: "oklch(0.80 0.02 220)" }}
              >
                ₺
                {minCost.toLocaleString("tr-TR", {
                  maximumFractionDigits: 0,
                })}
                {" — "}₺
                {maxCost.toLocaleString("tr-TR", {
                  maximumFractionDigits: 0,
                })}
              </p>

              <p
                className="mt-3 text-xs"
                style={{ color: "oklch(0.50 0.03 230)" }}
              >
                Fiyatlar uygulama detaylarına, bölgeye ve malzeme seçimine göre
                değişebilir. Kesin fiyat için keşif yapılmalıdır.
              </p>
            </div>

            <button
              type="button"
              onClick={sendWhatsApp}
              className="mt-6 w-full rounded-lg py-4 font-bold text-white transition-all duration-300 hover:scale-105"
              style={{ background: "#25D366" }}
            >
              📲 WhatsApp'tan Teklif Al
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CostRow({
  label,
  value,
  highlighted = false,
}: {
  label: string;
  value: number;
  highlighted?: boolean;
}) {
  return (
    <div
      className="flex items-center justify-between border-b pb-3"
      style={{ borderColor: "oklch(0.30 0.04 240)" }}
    >
      <span
        className="text-sm"
        style={{ color: "oklch(0.70 0.03 230)" }}
      >
        {label}
      </span>

      <span
        className="font-semibold"
        style={{
          color: highlighted
            ? "oklch(0.72 0.12 75)"
            : "oklch(0.93 0.01 220)",
        }}
      >
        ₺
        {value.toLocaleString("tr-TR", {
          maximumFractionDigits: 0,
        })}
      </span>
    </div>
  );
}