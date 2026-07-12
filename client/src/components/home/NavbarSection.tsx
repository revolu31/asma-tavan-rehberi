import { useEffect, useState } from "react";

const NAV_LINKS = [
  ["#hizmetler", "HİZMETLER"],
  ["#istatistikler", "İSTATİSTİKLER"],
  ["#modeller", "MODELLER"],
  ["#karsilastirma", "KARŞILAŞTIRMA"],
  ["#grafikler", "GRAFİKLER"],
  ["#hesaplayici", "HESAPLAYICI"],
  ["#ipuclari", "İPUÇLARI"],
];

export default function NavbarSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(15,39,68,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "2px solid oklch(0.72 0.12 75 / 0.4)"
          : "none",
      }}
    >
      <div className="container flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect
              x="1"
              y="1"
              width="26"
              height="26"
              stroke="oklch(0.72 0.12 75)"
              strokeWidth="1.5"
            />
            <line
              x1="1"
              y1="14"
              x2="27"
              y2="14"
              stroke="oklch(0.72 0.12 75)"
              strokeWidth="0.8"
              strokeDasharray="2 2"
            />
            <line
              x1="14"
              y1="1"
              x2="14"
              y2="27"
              stroke="oklch(0.72 0.12 75)"
              strokeWidth="0.8"
              strokeDasharray="2 2"
            />
            <circle
              cx="14"
              cy="14"
              r="4"
              stroke="oklch(0.72 0.12 75)"
              strokeWidth="1.5"
            />
            <circle
              cx="14"
              cy="14"
              r="1.5"
              fill="oklch(0.72 0.12 75)"
            />
          </svg>

          <div>
            <div
              className="text-sm font-bold leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.72 0.12 75)",
              }}
            >
              ORNİTORENK YAPI
            </div>

            <div
              className="mt-0.5 text-xs leading-none tracking-[0.2em]"
              style={{
                color: "oklch(0.60 0.03 230)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              YAPI & DEKORASYON
            </div>
          </div>
        </a>

        <div
          className="hidden gap-6 text-xs tracking-wider md:flex"
          style={{
            color: "oklch(0.70 0.03 230)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {NAV_LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="transition-colors hover:text-amber-400"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}