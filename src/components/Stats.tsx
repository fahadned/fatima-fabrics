"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";

const stats = [
  { end: 50,   suffix: "+",     label: "Export Markets",    text: undefined     },
  { end: 4,    suffix: "",      label: "Product Lines",     text: undefined     },
  { end: 45,   suffix: "",      label: "Min Lead Time",     text: "45 Days"     },
  { end: 1000, suffix: "",      label: "Minimum MOQ",       text: "1,000 pcs"   },
  { end: 0,    suffix: "",      label: "GSM Range",         text: "180–1000"    },
  { end: 30,   suffix: "+",     label: "Years in Business", text: undefined     },
];

function StatCard({ s }: { s: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const count = useCounter(s.end, inView);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center py-8 px-4"
    >
      <div
        style={{
          fontFamily: "var(--font-playfair)",
          fontWeight: 300,
          fontSize: "clamp(28px,4vw,48px)",
          color: "#EDE8E0",
          lineHeight: 1,
        }}
      >
        {s.text ? s.text : <>{count}{s.suffix}</>}
      </div>
      <div
        className="text-xs tracking-widest"
        style={{
          fontFamily: "var(--font-space-mono)",
          color: "#7A7671",
          textTransform: "uppercase",
          marginTop: 12,
          letterSpacing: "0.2em",
        }}
      >
        {s.label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      style={{
        background: "#0A0908",
        borderTop: "1px solid rgba(184,149,90,0.2)",
        borderBottom: "1px solid rgba(184,149,90,0.2)",
        overflow: "hidden",
      }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={[
              "relative",
              i < stats.length - 1
                ? "border-r border-r-[rgba(184,149,90,0.15)]"
                : "",
            ].join(" ")}
          >
            <StatCard s={s} />
          </div>
        ))}
      </div>
    </section>
  );
}
