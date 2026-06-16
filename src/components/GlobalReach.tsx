"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const EASE = [0.22, 1, 0.36, 1] as const;

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const HIGHLIGHTED_IDS = new Set([
  "276", "250", "380", "724", "56", "528",
  "756", "40", "752", "208", "616", "826",
]);

const COUNTRY_NAMES: Record<string, string> = {
  "276": "Germany", "250": "France", "380": "Italy", "724": "Spain",
  "56": "Belgium", "528": "Netherlands", "756": "Switzerland", "40": "Austria",
  "752": "Sweden", "208": "Denmark", "616": "Poland", "826": "United Kingdom",
};

const PLATFORMS = [
  "Alibaba","Global Sources","TradeKey","Made-in-Pakistan",
  "Textile Source","TDAP Export Portal","Fibre2Fashion","Pakistan Textile City",
];

const MEMBERSHIPS = [
  "APTMA","PRGMEA","TDAP","SITE Association Karachi",
  "Pakistan Hosiery Manufacturers","All Pakistan Textile Mills",
  "Karachi Chamber of Commerce","SMEDA",
];

function MarqueeBar({ label, items, reverse }: { label: string; items: string[]; reverse?: boolean }) {
  const repeated = [...items, ...items, ...items];
  const content = repeated.map((item, i) => (
    <span key={i} style={{ whiteSpace: "nowrap" }}>
      {item}
      {i < repeated.length - 1 && (
        <span style={{ color: "#B8955A", margin: "0 20px" }}>&middot;</span>
      )}
    </span>
  ));

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <span style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: 11,
          letterSpacing: "0.3em",
          color: "#B8955A",
          textTransform: "uppercase",
        }}>
          {label}
        </span>
      </div>
      <div style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(184,149,90,0.2)",
        borderBottom: "1px solid rgba(184,149,90,0.2)",
        background: "rgba(184,149,90,0.06)",
        padding: "16px 0",
      }}>
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: `${reverse ? "marqueeRight" : "marqueeLeft"} 40s linear infinite`,
            fontFamily: "var(--font-space-mono)",
            fontSize: 12,
            letterSpacing: "0.2em",
            color: "#EDE8E0",
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

function EuropeMap() {
  const [hovered, setHovered] = useState("");

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 800, margin: "0 auto" }}>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{ rotate: [-10, -52, 0], scale: 800 }}
        style={{ width: "100%", height: 500 }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const id = geo.id as string;
              const isActive = HIGHLIGHTED_IDS.has(id);
              const isHovered = hovered === id;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => { if (isActive) setHovered(id); }}
                  onMouseLeave={() => setHovered("")}
                  style={{
                    default: {
                      fill: isActive ? "#B8955A" : "#1C1C1A",
                      opacity: isActive ? 0.85 : 1,
                      stroke: isActive ? "#CCB074" : "#2a2a28",
                      strokeWidth: 0.5,
                      outline: "none",
                      transition: "fill 0.25s, opacity 0.25s",
                    },
                    hover: {
                      fill: isActive ? "#CCB074" : "#1C1C1A",
                      opacity: 1,
                      stroke: isActive ? "#CCB074" : "#2a2a28",
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: isActive ? "pointer" : "default",
                    },
                    pressed: {
                      fill: isActive ? "#CCB074" : "#1C1C1A",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {hovered && COUNTRY_NAMES[hovered] && (
        <div style={{
          position: "absolute",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-space-mono)",
          fontSize: 12,
          letterSpacing: "0.2em",
          color: "#EDE8E0",
          background: "rgba(10,9,8,0.85)",
          border: "1px solid rgba(184,149,90,0.3)",
          padding: "6px 16px",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}>
          {COUNTRY_NAMES[hovered]}
        </div>
      )}
    </div>
  );
}

export default function GlobalReach() {
  const headerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const headerIn = useInView(headerRef, { once: true, amount: 0.3 });
  const mapIn = useInView(mapRef, { once: true, amount: 0.2 });

  return (
    <section style={{ background: "#0A0908", padding: "clamp(80px,10vw,120px) clamp(24px,5vw,80px)" }}>
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
        {/* HEADER */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ textAlign: "center" }}
        >
          <div className="flex items-center justify-center" style={{ gap: 14, marginBottom: 20 }}>
            <div style={{ width: 36, height: 1, background: "#B8955A" }} />
            <span style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: 14,
              letterSpacing: "0.3em",
              color: "#B8955A",
              textTransform: "uppercase",
            }}>
              Global Presence
            </span>
            <div style={{ width: 36, height: 1, background: "#B8955A" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(38px,5vw,64px)",
            color: "#EDE8E0",
            lineHeight: 1.1,
          }}>
            Shipping to Where Our Buyers Are
          </h2>
        </motion.div>

        {/* MAP */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 40 }}
          animate={mapIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}
        >
          <EuropeMap />
          <span style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: 12,
            letterSpacing: "0.2em",
            color: "#B8955A",
            textTransform: "uppercase",
            textAlign: "center",
          }}>
            12+ Active Export Markets Across Europe &amp; Beyond
          </span>
        </motion.div>

        {/* MARQUEE BARS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <MarqueeBar label="Trade Platforms & Directories" items={PLATFORMS} />
          <MarqueeBar label="Industry Memberships" items={MEMBERSHIPS} reverse />
        </div>
      </div>
    </section>
  );
}
