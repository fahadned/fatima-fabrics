"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";

const data = [
  { end: 30, suffix: "+", label: "Years perfecting the craft" },
  { end: 500, suffix: "K+", label: "Units shipped monthly" },
  { end: 4, suffix: "", label: "International certifications" },
  { end: 50, suffix: "+", label: "Countries we export to" },
];

function Stat({ d }: { d: typeof data[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const count = useCounter(d.end, inView);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center" style={{ paddingTop: 32, paddingBottom: 32, paddingLeft: 20, paddingRight: 20 }}>
      <div style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, fontSize: 48, color: "#EDE8E0", lineHeight: 1 }}>
        {count}{d.suffix}
      </div>
      <div style={{ fontFamily: "var(--font-space-mono)", fontSize: 13, fontWeight: 700, letterSpacing: "0.22em", color: "#7A7671", textTransform: "uppercase", marginTop: 14 }}>
        {d.label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section style={{ background: "#141312", borderTop: "1px solid rgba(237,232,224,0.06)", borderBottom: "1px solid rgba(237,232,224,0.06)" }}>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {data.map((d, i) => (
          <div
            key={d.label}
            className="relative"
            style={{ borderRight: i < data.length - 1 ? "1px solid rgba(237,232,224,0.06)" : "none" }}
          >
            <Stat d={d} />
          </div>
        ))}
      </div>
    </section>
  );
}
