import { ImageResponse } from "next/og";

export const alt = "Andrei Benedec — Desarrollo web y automatización con IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(145deg, #f8fafc 0%, #e0f2fe 45%, #f1f5f9 100%)",
          color: "#0f172a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 80,
            height: 8,
            borderRadius: 999,
            background: "linear-gradient(90deg, #0284c7, #0d9488)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1.5 }}>
            Andrei Benedec
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              lineHeight: 1.25,
              maxWidth: 920,
              color: "#1e293b",
            }}
          >
            Desarrollo web y automatización con IA para empresas
          </div>
          <div style={{ fontSize: 24, color: "#475569", maxWidth: 860, lineHeight: 1.4 }}>
            Webs que generan contactos. Automatización que ahorra tiempo. Software a
            medida.
          </div>
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, color: "#0369a1" }}>
          andreibenedec.com
        </div>
      </div>
    ),
    { ...size },
  );
}
