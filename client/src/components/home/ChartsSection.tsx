import type { ReactNode } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PIE_DATA = [
  { name: "Alçıpan", value: 42 },
  { name: "POP/Alçı", value: 22 },
  { name: "PVC", value: 15 },
  { name: "Ahşap", value: 12 },
  { name: "Metal", value: 6 },
  { name: "Diğer", value: 3 },
];

const RADAR_DATA = [
  { subject: "Dayanıklılık", Alçıpan: 80, POP: 65, Ahşap: 95, PVC: 60 },
  { subject: "Ses Yalıtımı", Alçıpan: 85, POP: 60, Ahşap: 80, PVC: 40 },
  { subject: "Isı Yalıtımı", Alçıpan: 80, POP: 65, Ahşap: 70, PVC: 40 },
  { subject: "Yangın Direnci", Alçıpan: 90, POP: 70, Ahşap: 40, PVC: 65 },
  { subject: "LED Uyumu", Alçıpan: 95, POP: 80, Ahşap: 60, PVC: 60 },
  { subject: "Bakım Kolaylığı", Alçıpan: 85, POP: 65, Ahşap: 45, PVC: 95 },
];

const BAR_DATA = [
  { name: "PVC", fiyat: 180 },
  { name: "Alçıpan", fiyat: 320 },
  { name: "POP/Alçı", fiyat: 420 },
  { name: "Ahşap", fiyat: 750 },
];

const ROOM_DATA = [
  { name: "Salon", Alçıpan: 88, PVC: 20 },
  { name: "Yatak Odası", Alçıpan: 82, PVC: 30 },
  { name: "Mutfak", Alçıpan: 55, PVC: 70 },
  { name: "Ofis", Alçıpan: 75, PVC: 40 },
  { name: "Banyo", Alçıpan: 30, PVC: 90 },
  { name: "Koridor", Alçıpan: 65, PVC: 45 },
];

const CHART_COLORS = [
  "#c9a84c",
  "#4a90d9",
  "#10b981",
  "#ef4444",
  "#8b5cf6",
  "#f59e0b",
];

const chartBoxStyle = {
  background: "oklch(0.20 0.055 240)",
  border: "1px solid oklch(0.30 0.04 240)",
};

const tooltipStyle = {
  background: "oklch(0.20 0.055 240)",
  border: "1px solid oklch(0.30 0.04 240)",
  borderRadius: 8,
  color: "oklch(0.93 0.01 220)",
};

export default function ChartsSection() {
  return (
    <section
      id="grafikler"
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
                  ANALİTİK PANEL
                </span>
              </div>

              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.93 0.01 220)",
                }}
              >
                Veri
                <em
                  style={{
                    color: "oklch(0.72 0.12 75)",
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  Görselleştirme
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
              Malzeme karşılaştırmaları
              <br />
              ve kullanım eğilimleri
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="📊 Malzeme Popülerlik Oranları">
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={PIE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  paddingAngle={3}
                >
                  {PIE_DATA.map((item, index) => (
                    <Cell
                      key={item.name}
                      fill={CHART_COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value: number) => `%${value}`}
                  contentStyle={tooltipStyle}
                />

                <Legend
                  wrapperStyle={{
                    color: "oklch(0.80 0.02 220)",
                    fontSize: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="📈 Malzeme Performans Karşılaştırması">
            <ResponsiveContainer width="100%" height={260}>
              <RadarChart data={RADAR_DATA}>
                <PolarGrid stroke="oklch(0.30 0.04 240)" />

                <PolarAngleAxis
                  dataKey="subject"
                  tick={{
                    fill: "oklch(0.70 0.03 230)",
                    fontSize: 11,
                  }}
                />

                {["Alçıpan", "POP", "Ahşap", "PVC"].map((key, index) => (
                  <Radar
                    key={key}
                    name={key}
                    dataKey={key}
                    stroke={CHART_COLORS[index]}
                    fill={CHART_COLORS[index]}
                    fillOpacity={0.12}
                  />
                ))}

                <Legend
                  wrapperStyle={{
                    color: "oklch(0.80 0.02 220)",
                    fontSize: 12,
                  }}
                />

                <Tooltip contentStyle={tooltipStyle} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="💰 Maliyet Karşılaştırması (₺/m²)">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={BAR_DATA} barSize={40}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.28 0.04 240)"
                />

                <XAxis
                  dataKey="name"
                  tick={{
                    fill: "oklch(0.70 0.03 230)",
                    fontSize: 12,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{
                    fill: "oklch(0.70 0.03 230)",
                    fontSize: 11,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  formatter={(value: number) => `₺${value}/m²`}
                  contentStyle={tooltipStyle}
                />

                <Bar
                  dataKey="fiyat"
                  name="Fiyat"
                  radius={[6, 6, 0, 0]}
                >
                  {BAR_DATA.map((item, index) => (
                    <Cell
                      key={item.name}
                      fill={CHART_COLORS[index]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="🏠 Oda Tipine Göre Tercih (%)">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={ROOM_DATA} layout="vertical" barSize={12}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.28 0.04 240)"
                  horizontal={false}
                />

                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{
                    fill: "oklch(0.70 0.03 230)",
                    fontSize: 11,
                  }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${value}%`}
                />

                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{
                    fill: "oklch(0.70 0.03 230)",
                    fontSize: 12,
                  }}
                  axisLine={false}
                  tickLine={false}
                  width={80}
                />

                <Tooltip
                  formatter={(value: number) => `%${value}`}
                  contentStyle={tooltipStyle}
                />

                <Legend
                  wrapperStyle={{
                    color: "oklch(0.80 0.02 220)",
                    fontSize: 12,
                  }}
                />

                <Bar
                  dataKey="Alçıpan"
                  fill="#c9a84c"
                  radius={[0, 4, 4, 0]}
                />

                <Bar
                  dataKey="PVC"
                  fill="#4a90d9"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </section>
  );
}

function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl p-6" style={chartBoxStyle}>
      <h3
        className="mb-5 text-base font-bold"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "oklch(0.93 0.01 220)",
        }}
      >
        {title}
      </h3>

      {children}
    </div>
  );
}