"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const certs = [
  {
    name: "OEKO-TEX®",
    sub: "STANDARD 100 — PRODUCT CLASS II",
    cert: "Certificate 11-47891",
    scope: "Home Textiles: fitted sheets, flat sheets, bed sets, quilt sets, duvet sets, pillow covers, curtains, blackout curtains, kitchen and table linen, cushion covers, comforters. Meets human-ecological requirements for products with direct skin contact.",
    valid: "15 March 2027",
    issued: "Shirley Technologies Ltd, Manchester UK",
    pdf: "/certificates/oekotex-home.pdf",
  },
  {
    name: "OEKO-TEX®",
    sub: "STANDARD 100 — PRODUCT CLASS I",
    cert: "Certificate 11-47091",
    scope: "Woven and knitted readymade garments: T-shirts, shirts, hoodies, sweatshirts, jackets, jeans, denim garments, polo shirts, vests, dresses, pyjamas and accessories. Baby article standard — the strictest product class.",
    valid: "01 February 2024",
    issued: "Shirley Technologies Ltd, Manchester UK",
    pdf: "/certificates/oekotex-apparel.pdf",
  },
  {
    name: "OEKO-TEX®",
    sub: "STANDARD 100 — YARN CATEGORY",
    cert: "Certificate 11-24225",
    scope: "100% cotton, 100% organic cotton, polyester/cotton yarns, 100% flax (linen) yarn, linen/cotton blends, bleached, gassed and mercerised yarns for value-added textiles.",
    valid: "19 December 2025",
    issued: "Shirley Technologies Ltd, Manchester UK",
    pdf: "/certificates/oekotex-yarn.pdf",
  },
  {
    name: "GOTS",
    sub: "GLOBAL ORGANIC TEXTILE STANDARD",
    cert: "USB TEX2965-GOTS-2020-03",
    scope: "Yarns, Home Textiles, Fabrics. Certified activities: yarn dyeing, weaving, bleaching, dyeing, printing, cutting, embroidery, sewing, washing, finishing, packaging and exporting.",
    valid: "05 January 2025",
    issued: "USB Certification, Izmir, Turkey. Accredited by IOAS — Contract N° 112",
    pdf: "/certificates/gots.pdf",
  },
];

function Card({ c, i }: { c: typeof certs[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
      className="flex flex-col"
      style={{ borderTop: "2px solid transparent", transition: "border-color 0.35s ease, transform 0.35s ease", cursor: "default" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderTopColor = "#B8955A"; e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderTopColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {/* Document card */}
      <div style={{ background: "#fff", padding: "36px 28px", flex: 1 }}>
        <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: 28, fontWeight: 600, color: "#B8955A", marginBottom: 4 }}>{c.name}</h3>
        <div style={{ fontFamily: "var(--font-space-mono)", fontSize: 9, letterSpacing: "0.15em", color: "#8A8681", textTransform: "uppercase", marginBottom: 6 }}>{c.sub}</div>

        <div style={{ height: 1, background: "#0A0908", opacity: 0.08, margin: "14px 0" }} />

        <p style={{ fontFamily: "var(--font-raleway)", fontWeight: 300, fontStyle: "italic", fontSize: 12, color: "#8A8681", marginBottom: 2 }}>This certifies that</p>
        <p style={{ fontFamily: "var(--font-raleway)", fontWeight: 600, fontSize: 16, color: "#0A0908", marginBottom: 4 }}>FATIMA FABRICS</p>
        <p style={{ fontFamily: "var(--font-raleway)", fontSize: 11, color: "#8A8681", marginBottom: 12 }}>{c.cert}</p>

        <p style={{ fontFamily: "var(--font-raleway)", fontWeight: 400, fontSize: 13, color: "#3A3734", lineHeight: 1.7, marginBottom: 16 }}>{c.scope}</p>

        <div style={{ height: 1, background: "#0A0908", opacity: 0.08, margin: "0 0 14px" }} />

        <div className="flex flex-wrap justify-between" style={{ gap: 12 }}>
          <span style={{ fontFamily: "var(--font-raleway)", fontWeight: 600, fontSize: 13, color: "#0A0908" }}>Valid until {c.valid}</span>
          <span style={{ fontFamily: "var(--font-raleway)", fontWeight: 300, fontSize: 12, color: "#8A8681" }}>Issued by {c.issued}</span>
        </div>
      </div>

      {/* PDF link */}
      <a
        href={c.pdf}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          background: "#0A0908",
          color: "#B8955A",
          border: "1px solid #B8955A",
          borderTop: "none",
          padding: "12px 24px",
          fontFamily: "var(--font-raleway)",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textDecoration: "none",
          textAlign: "center",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#B8955A"; e.currentTarget.style.color = "#0A0908"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "#0A0908"; e.currentTarget.style.color = "#B8955A"; }}
      >
        View Full Certificate &rarr;
      </a>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="certifications" style={{ background: "#0A0908", padding: "clamp(80px,10vw,140px) clamp(24px,5vw,80px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} style={{ marginBottom: 48 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE }}>
            <div className="flex items-center" style={{ gap: 14, marginBottom: 20 }}>
              <div style={{ width: 36, height: 1, background: "#B8955A" }} />
              <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 13, letterSpacing: "0.25em", color: "#B8955A", textTransform: "uppercase" }}>Compliance &amp; Standards</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(38px,5vw,64px)", color: "#EDE8E0", lineHeight: 1, marginBottom: 16 }}>
              Our Certifications
            </h2>
            <p style={{ fontFamily: "var(--font-raleway)", fontWeight: 400, fontStyle: "italic", fontSize: 15, color: "#5A5654", lineHeight: 1.9, maxWidth: 500 }}>
              Click any certificate to view and verify with QR code.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 2 }}>
          {certs.map((c, i) => <Card key={c.cert} c={c} i={i} />)}
        </div>
      </div>
    </section>
  );
}
