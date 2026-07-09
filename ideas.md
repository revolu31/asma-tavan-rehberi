# Asma Tavan Alçıpan Modelleri Rehberi — Tasarım Fikirleri

## Üç Yaklaşım

### 1. Architectural Blueprint (Mimari Çizim)
Teknik çizim estetiği; koyu lacivert zemin üzerine altın/krem çizgiler, grid arka plan, mimari duygu. Olasılık: 0.07

### 2. Warm Editorial (Sıcak Editoryal)
Krem ve toprak tonları, serif başlıklar, büyük fotoğraflar, dergi hissi. Olasılık: 0.05

### 3. Dark Luxury Showcase (Koyu Lüks Vitrin)
Koyu kömür zemin, altın vurgular, yüksek kontrastlı fotoğraf kartları, premium showroom hissi. Olasılık: 0.08

---

## Seçilen Yaklaşım: **Architectural Blueprint**

### Design Movement
Art Deco ile modern teknik çizim estetiğinin buluşması. Mimari blueprint duygusu.

### Core Principles
1. Koyu lacivert (#0f2744) ana zemin — derinlik ve otorite
2. Altın (#c9a84c) vurgular — premium ve güven
3. Grid/nokta dokusu arka planlar — mimari referans
4. Asimetrik, sol-hizalı düzenler — dinamizm

### Color Philosophy
- **Primary:** #0f2744 (derin lacivert) — güven, uzmanlık
- **Accent:** #c9a84c (altın) — kalite, premium
- **Surface:** #1a2f4a (orta lacivert) — kart arka planları
- **Text:** #e8edf3 (açık gri-beyaz) — okunabilirlik
- **Muted:** #8fa3b8 (gri-mavi) — ikincil metin

### Layout Paradigm
Sol kenara hizalı içerik blokları, asimetrik hero bölümü, yatay scroll galeri, sticky sol navigasyon yerine üst sticky nav.

### Signature Elements
1. Noktalı/grid SVG arka plan dokusu
2. Altın çizgi ayırıcılar ve border-left vurguları
3. Kart hover'larında altın glow efekti

### Interaction Philosophy
Hover'da kartlar hafifçe yukarı kalkar ve altın glow alır. Filtre butonları smooth geçiş yapar. Grafik tooltipleri anlık görünür.

### Animation
- Kart hover: translateY(-6px) + box-shadow 200ms ease-out
- Filtre geçişi: opacity + scale 150ms
- Sayfa girişi: stagger 60ms ile kartlar aşağıdan yukarı

### Typography System
- **Başlık:** Playfair Display (serif, otoriter)
- **Gövde:** Inter (sans-serif, okunabilir)
- **Vurgu:** Playfair Display Italic

### Brand Essence
"Türkiye'nin en kapsamlı asma tavan rehberi — tasarımcılar ve ev sahipleri için."
Adjectives: Güvenilir, Uzman, Sofistike

### Brand Voice
Headlines: "Tavandan Başlar Zarafet", "Her Mekan İçin Doğru Model"
CTAs: "Modeli İncele", "Karşılaştır"

### Signature Brand Color
Altın: #c9a84c

## Style Decisions
- Noktalı SVG doku hero arka planında kullanılır
- Kart görselleri 220px yüksekliğinde, object-cover
- Tablo başlıkları lacivert zemin üzerine beyaz metin
