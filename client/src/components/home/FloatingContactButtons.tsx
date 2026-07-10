import { MessageCircle, Phone } from "lucide-react";

const PHONE_NUMBER = "905444265407";

export default function FloatingContactButtons() {
  const whatsappMessage =
    "Merhaba, yapı ve dekorasyon hizmetleri hakkında bilgi almak istiyorum.";

  return (
    <>
      <a
        href={`tel:+${PHONE_NUMBER}`}
        aria-label="Telefonla ara"
        className="fixed bottom-24 right-6 z-50 flex items-center gap-3 rounded-full px-5 py-4 shadow-2xl transition-all duration-300 hover:scale-110"
        style={{
          background: "#2563EB",
          color: "#fff",
        }}
      >
        <Phone size={26} />
        <span className="hidden font-semibold md:inline">Hemen Ara</span>
      </a>

      <a
        href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp üzerinden iletişime geç"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-5 py-4 shadow-2xl transition-all duration-300 hover:scale-110"
        style={{
          background: "#25D366",
          color: "#fff",
        }}
      >
        <MessageCircle size={26} />
        <span className="hidden font-semibold md:inline">WhatsApp</span>
      </a>
    </>
  );
}
