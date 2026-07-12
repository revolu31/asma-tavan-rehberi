import { useState } from "react";

const PHONE_NUMBER = "905444265407";

export default function OfferFormSection() {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formArea, setFormArea] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const sendOfferForm = () => {
    const message = `Merhaba.

Teklif formundan geldim.

Ad Soyad: ${formName}
Telefon: ${formPhone}
Metrekare: ${formArea} m²
Mesaj: ${formMessage}

Detaylı teklif almak istiyorum.`;

    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      className="py-20"
      style={{ background: "oklch(0.17 0.055 240)" }}
    >
      <div className="container">
        <div className="mb-12">
          <h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.93 0.01 220)",
            }}
          >
            Teklif Formu
          </h2>

          <p style={{ color: "oklch(0.60 0.03 230)" }}>
            Bilgilerinizi bırakın, size en kısa sürede dönüş yapalım.
          </p>
        </div>

        <div
          className="max-w-3xl rounded-2xl p-8"
          style={{
            background: "oklch(0.20 0.055 240)",
            border: "1px solid oklch(0.30 0.04 240)",
          }}
        >
          <div className="mb-4 grid gap-4 md:grid-cols-2">
            <input
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              placeholder="Ad Soyad"
              className="rounded-lg p-4 outline-none"
            />

            <input
              value={formPhone}
              onChange={(e) => setFormPhone(e.target.value)}
              placeholder="Telefon"
              className="rounded-lg p-4 outline-none"
            />
          </div>

          <input
            value={formArea}
            onChange={(e) => setFormArea(e.target.value)}
            placeholder="Yaklaşık metrekare"
            className="mb-4 w-full rounded-lg p-4 outline-none"
          />

          <textarea
            value={formMessage}
            onChange={(e) => setFormMessage(e.target.value)}
            placeholder="Kısa mesajınız"
            rows={5}
            className="mb-6 w-full rounded-lg p-4 outline-none"
          />

          <button
            type="button"
            onClick={sendOfferForm}
            className="w-full rounded-xl py-4 font-bold text-white transition-all duration-300 hover:scale-105"
            style={{ background: "#25D366" }}
          >
            💬 WhatsApp ile Teklif Gönder
          </button>
        </div>
      </div>
    </section>
  );
}