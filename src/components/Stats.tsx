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
    <div ref={ref} className="flex flex-col items-center justify-center text-center" style={{ paddingTop: "clamp(16px,4vw,32px)", paddingBottom: "clamp(16px,4vw,32px)", paddingLeft: 20, paddingRight: 20 }}>
      <div style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, fontSize: "clamp(28px,6vw,48px)", color: "#EDE8E0", lineHeight: 1 }}>
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
            className={[
              "relative",
              // left-column items always get a right divider
              i % 2 === 0 && i < data.length - 1 ? "border-r border-r-[rgba(237,232,224,0.06)]" : "",
              // right-column items only get a right divider at lg (4-col) and only if not last
              i % 2 === 1 && i < data.length - 1 ? "lg:border-r lg:border-r-[rgba(237,232,224,0.06)]" : "",
            ].join(" ")}
          >
            <Stat d={d} />
          </div>
        ))}
      </div>
    </section>
  );
}
