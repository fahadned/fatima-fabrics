"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function IdentityStatement() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      style={{
        background: "#0A0908",
        padding: "clamp(100px,14vw,180px) clamp(24px,8vw,120px)",
        borderBottom: "1px solid rgba(237,232,224,0.06)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.3, ease: EASE }}
        style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}
      >
        <div className="flex items-center justify-center" style={{ gap: 16, marginBottom: 36 }}>
          <div style={{ width: 32, height: 1, background: "#B8955A" }} />
          <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 12, letterSpacing: "0.4em", color: "#B8955A", textTransform: "uppercase" }}>
            Our Philosophy
          </span>
          <div style={{ width: 32, height: 1, background: "#B8955A" }} />
        </div>

        <blockquote
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(15px,2.5vw,25px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#EDE8E0",
            lineHeight: 1.4,
            margin: "28px auto",
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          &ldquo;Built on over thirty years of textile expertise, our approach is rooted in precision, craftsmanship, and continuous refinement. From the first fiber to the final finish, every detail is carefully engineered to meet the expectations of brands that demand exceptional quality and lasting value.&rdquo;
        </blockquote>

        <div className="flex items-center justify-center" style={{ gap: 16, marginTop: 36 }}>
          <div style={{ width: 32, height: 1, background: "#B8955A" }} />
          <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 13, letterSpacing: "0.3em", color: "#B8955A", textTransform: "uppercase" }}>
            — Established 1994 &middot; Karachi, Pakistan
          </span>
          <div style={{ width: 32, height: 1, background: "#B8955A" }} />
        </div>
      </motion.div>
    </section>
  );
}
