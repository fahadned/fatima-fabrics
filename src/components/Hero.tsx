"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (duration: number, delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: EASE },
});

const fadeIn = (duration: number, delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration, delay, ease: EASE },
});

const stats: { end: number; suffix: string; label: string; text?: string }[] = [
  { end: 50, suffix: "+", label: "Export Markets" },
  { end: 4, suffix: "", label: "Product Lines" },
  { end: 45, suffix: " Days", label: "Minimum Lead Time" },
  { end: 1000, suffix: "", label: "Minimum MOQ", text: "1,000" },
  { end: 0, suffix: "", label: "GSM Range", text: "180–1000" },
  { end: 30, suffix: "+", label: "Years in Business" },
];

function HeroStat({ s }: { s: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const count = useCounter(s.end, inView);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, fontSize: "clamp(22px,3.5vw,48px)", color: "#B8955A", lineHeight: 1 }}>
        {s.text ? s.text : <>{count}{s.suffix}</>}
      </div>
      <div style={{ fontFamily: "var(--font-space-mono)", fontSize: 13, fontWeight: 700, letterSpacing: "0.22em", color: "#7A7671", textTransform: "uppercase", marginTop: 14 }}>
        {s.label}
      </div>
    </div>
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100vh", background: "#0A0908" }}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.45,
        }}
      >
        <source src="/Textile-gallery.mp4" type="video/mp4" />
      </video>

      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,9,8,0.55) 0%, rgba(10,9,8,0.3) 40%, rgba(10,9,8,0.6) 100%)",
        zIndex: 1,
        pointerEvents: "none"
      }} />

      {/* Content overlay */}
      <div
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          zIndex: 2,
          minHeight: "100vh",
          padding: "clamp(60px,8vw,100px) clamp(24px,5vw,80px) clamp(80px,10vw,160px)",
        }}
      >
        {/* 1. Eyebrow */}
        <motion.span
          {...fadeUp(0.7, 0.2)}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: 13,
            letterSpacing: "0.25em",
            color: "#B8955A",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          OEKO-TEX&reg; Certified &middot; Full-Package Manufacturer &middot; 50+ Export Markets
        </motion.span>

        {/* 3. Gold rule */}
        <motion.div {...fadeUp(0.7, 0.25)} style={{ width: 48, height: 1, background: "#B8955A", marginBottom: 24 }} />

        {/* 4. Main headline */}
        <motion.h1
          {...fadeUp(0.9, 0.35)}
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(32px,7vw,96px)",
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}
        >
          <span style={{ color: "#EDE8E0", display: "block" }}>Precision Built.</span>
          <span style={{ display: "block", color: "transparent", WebkitTextStroke: "1.5px rgba(237,232,224,0.7)" }}>Europe Ready.</span>
        </motion.h1>

        {/* 5. Subheading */}
        <motion.p
          {...fadeUp(1, 0.5)}
          style={{
            fontFamily: "var(--font-raleway)",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(13px,2vw,18px)",
            color: "rgba(237,232,224,0.65)",
            maxWidth: 520,
            lineHeight: 1.9,
            marginBottom: 36,
          }}
        >
          We build what your brand puts its name on.<br />
          European certified &middot; Zero subcontractors &middot; Delivered on time.
        </motion.p>

        {/* 6. CTA buttons */}
        <motion.div {...fadeUp(1, 0.65)} className="flex flex-wrap justify-center" style={{ gap: 16 }}>
          <a
            href="#contact"
            style={{
              border: "1px solid #B8955A",
              color: "#B8955A",
              background: "transparent",
              padding: "14px 40px",
              fontFamily: "var(--font-raleway)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#B8955A"; e.currentTarget.style.color = "#0A0908"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#B8955A"; }}
          >
            Request a Sample
          </a>
          <a
            href="#products"
            style={{
              border: "1px solid rgba(237,232,224,0.2)",
              color: "rgba(237,232,224,0.65)",
              background: "transparent",
              padding: "14px 40px",
              fontFamily: "var(--font-raleway)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#B8955A"; e.currentTarget.style.color = "#B8955A"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(237,232,224,0.2)"; e.currentTarget.style.color = "rgba(237,232,224,0.65)"; }}
          >
            Scroll to Discover &darr;
          </a>
        </motion.div>
      </div>

      {/* Trust bar — absolutely positioned at bottom, separate from content flow */}
      <motion.div
        {...fadeIn(1, 0.8)}
        className="absolute hidden sm:flex flex-wrap justify-between"
        style={{
          bottom: 36,
          left: "clamp(24px,5vw,80px)",
          right: "clamp(24px,5vw,80px)",
          zIndex: 2,
          borderTop: "1px solid rgba(237,232,224,0.1)",
          paddingTop: 24,
        }}
      >
        {stats.map((s) => (
          <HeroStat key={s.label} s={s} />
        ))}
      </motion.div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 200, background: "linear-gradient(to top, #0A0908, transparent)", zIndex: 1 }}
      />
    </section>
  );
}
