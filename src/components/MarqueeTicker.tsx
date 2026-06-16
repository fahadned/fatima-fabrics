"use client";

const items = [
  "HOODIES", "SWEATSHIRTS", "ZIP HOODIES", "FLEECE",
  "FITTED SHEETS", "TERRY TOWELS", "BEDSHEETS",
  "TROUSERS", "SOCKS", "KNITWEAR",
  "OEKO-TEX® CERTIFIED", "ORGANIC COTTON",
  "GOTS CERTIFIED", "KARACHI, PAKISTAN",
];

function Tape() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center shrink-0">
          <span
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: 9,
              letterSpacing: "0.28em",
              color: "#7A7671",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
          <span style={{ color: "#B8955A", fontSize: 8, opacity: 0.55, margin: "0 32px" }}>&#9670;</span>
        </span>
      ))}
    </div>
  );
}

export default function MarqueeTicker() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(237,232,224,0.06)",
        borderBottom: "1px solid rgba(237,232,224,0.06)",
        background: "#0A0908",
        padding: "17px 0",
        overflow: "hidden",
      }}
    >
      <div className="flex animate-marquee" style={{ width: "max-content" }}>
        <Tape />
        <Tape />
      </div>
    </div>
  );
}
