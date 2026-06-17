"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const stages = [
  { n: "01", title: "Yarn & Spinning", desc: "100% cotton, organic cotton, polyester/cotton blends and linen yarns. Raw fiber processing to finished yarn on-site." },
  { n: "02", title: "Knitting & Weaving", desc: "Circular knitting for jersey, fleece and French terry. Air-jet looms for twill, poplin, sateen and percale fabrics." },
  { n: "03", title: "Dyeing & Finishing", desc: "Reactive, disperse and pigment dyeing. Bleaching, mercerising, enzyme wash, stone wash, silicone softening and anti-pilling treatments." },
  { n: "04", title: "Cutting, Printing & Embroidery", desc: "Automated precision cutting. Pigment and reactive printing. Embroidery. Sewing, washing and all finishing processes in-house." },
  { n: "05", title: "Quality Control", desc: "OEKO-TEX® compliant testing at every production stage. Pre-shipment inspection. Harmful substance and colorfastness testing." },
  { n: "06", title: "Packaging & Export", desc: "Retail-ready packaging. Full export documentation. Shipping worldwide direct from Karachi Port." },
];

function Stage({ s, i }: { s: typeof stages[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative" style={{ paddingLeft: "clamp(40px,5vw,56px)", paddingBottom: i < stages.length - 1 ? "clamp(24px,4vw,48px)" : 0 }}>
      <div className="absolute flex items-center justify-center" style={{ left: 0, top: 2, width: 32, height: 32, borderRadius: "50%", border: "1px solid #B8955A", background: "#0A0908", zIndex: 2 }}>
        <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 10, color: "#B8955A" }}>{s.n}</span>
      </div>

      <motion.div
        initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: 26, fontWeight: 500, fontStyle: "italic", color: "#EDE8E0", marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
        <p style={{ fontFamily: "var(--font-raleway)", fontSize: 14, fontWeight: 400, fontStyle: "italic", color: "#8A8681", lineHeight: 1.9, maxWidth: 520 }}>{s.desc}</p>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const processVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (processVideoRef.current) {
      processVideoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section id="process" style={{ position: "relative", overflow: "hidden", background: "#0A0908", borderTop: "1px solid rgba(237,232,224,0.06)", padding: "clamp(80px,10vw,140px) clamp(24px,5vw,80px)" }}>
      <video
        ref={processVideoRef}
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
          opacity: 0.4,
          zIndex: 0,
        }}
      >
        <source src="/Textile-Process.mp4" type="video/mp4" />
      </video>
      <div style={{ position: "absolute", inset: 0, background: "rgba(10,9,8,0.55)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div ref={ref} style={{ marginBottom: 64 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE }}>
              <div className="flex items-center" style={{ gap: 14, marginBottom: 20 }}>
                <div style={{ width: 36, height: 1, background: "#B8955A" }} />
                <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 13, letterSpacing: "0.25em", color: "#B8955A", textTransform: "uppercase" }}>Our Process</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(36px,5vw,64px)", color: "#EDE8E0", lineHeight: 1, marginBottom: 16 }}>
                How We Build It
              </h2>
              <p style={{ fontFamily: "var(--font-raleway)", fontWeight: 600, fontStyle: "italic", fontSize: 15, color: "#8A8681", lineHeight: 1.9, maxWidth: 520 }}>
                Every stage under one roof. No subcontractors, no surprises. You see exactly where your product is, every step of the way.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute" style={{ left: 15, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, #B8955A 0%, rgba(184,149,90,0.15) 100%)" }} />
            {stages.map((s, i) => <Stage key={s.n} s={s} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
