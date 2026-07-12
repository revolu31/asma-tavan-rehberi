import { useState } from "react";

const FAQS = [
  {
    question: "Asma tavan kaç günde tamamlanır?",
    answer:
      "Projenin büyüklüğüne göre değişmekle birlikte konut uygulamaları genellikle 1-3 gün içerisinde tamamlanmaktadır.",
  },
  {
    question: "Ücretsiz keşif yapıyor musunuz?",
    answer:
      "Evet. Uygulama öncesinde ücretsiz keşif yaparak en uygun çözümü ve fiyat teklifini sunuyoruz.",
  },
  {
    question: "LED aydınlatma sonradan eklenebilir mi?",
    answer:
      "Çoğu asma tavan sisteminde sonradan LED aydınlatma entegrasyonu mümkündür.",
  },
  {
    question: "Garanti veriyor musunuz?",
    answer:
      "Kullanılan malzemeye ve uygulama kapsamına göre garanti desteği sunulmaktadır.",
  },
  {
    question: "Fiyatlar nasıl hesaplanıyor?",
    answer:
      "Metrekare, malzeme seçimi, işçilik ve aydınlatma tercihine göre hesaplanmaktadır.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Hatay ve çevre ilçelerde hizmet vermekteyiz.",
  },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            Sık Sorulan Sorular
          </h2>

          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.72 0.12 75), transparent)",
            }}
          />
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <button
              type="button"
              key={faq.question}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full rounded-xl p-5 text-left"
              style={{
                background: "oklch(0.20 0.055 240)",
                border: "1px solid oklch(0.30 0.04 240)",
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <h3
                  className="font-semibold"
                  style={{ color: "oklch(0.93 0.01 220)" }}
                >
                  {faq.question}
                </h3>

                <span style={{ color: "oklch(0.72 0.12 75)" }}>
                  {openFaq === index ? "−" : "+"}
                </span>
              </div>

              {openFaq === index && (
                <p
                  className="mt-4 text-sm leading-7"
                  style={{ color: "oklch(0.60 0.03 230)" }}
                >
                  {faq.answer}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}