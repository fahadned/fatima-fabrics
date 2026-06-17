"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Chapter {
  num: string;
  sub: string;
  title: string;
  body: string;
  moq: string;
  imgLeft: boolean;
  layout: "collage3" | "stack2" | "single" | "multi";
}

const chapters: Chapter[] = [
  {
    num: "01",
    sub: "Hoodies · Sweatshirts · Zip Hoodies · Jackets",
    title: "Knitwear",
    body: "From 180 to 450 GSM, every piece leaving our floor is engineered for the market that accepts no substitutes. Hoodies, sweatshirts, zip-throughs, bombers and crew necks in ring-spun cotton, CVC blends and premium French terry, built for brands that sell in Stockholm, Berlin and Amsterdam. Precision-cut patterns, consistent weight across every unit in the run, clean seam finishing throughout. OEKO-TEX® certified. Retail-ready. Built to be worn, washed and worn again.",
    moq: "MOQ 1,000 pcs · Lead time 45–60 days",
    imgLeft: false,
    layout: "collage3",
  },
  {
    num: "02",
    sub: "Fitted Sheets · Terry Towels · Bedsheets",
    title: "Home Textiles",
    body: "The European hotel industry and premium retail segment demand one thing above all: consistency. Fitted sheets, flat bedsheets and duvet sets from 200 to 1,000 thread count. Zero-twist terry towels from 300 to 800 GSM. Every batch OEKO-TEX® certified to the direct skin-contact standard, the strictest product class. Every shipment inspected to the thread. Trusted by hotel chains and retail buyers who cannot afford a single complaint from a discerning customer.",
    moq: "MOQ 3,000 pcs · Lead time 50–70 days",
    imgLeft: true,
    layout: "stack2",
  },
  {
    num: "03",
    sub: "Knitted Trousers · Chinos · Cotton Bottoms",
    title: "Trousers",
    body: "The European wardrobe doesn't forgive a poorly made bottom. Knitted trousers, cotton chinos and casual bottoms built for buyers who understand the difference between a garment that sells once and one that builds brand loyalty. Precision pattern cutting, clean inseam finishing, consistent waistband construction, the technical details that separate a good product from a great one. Designed for retail durability. Built to move.",
    moq: "MOQ 1,500 pcs · Lead time 45–65 days",
    imgLeft: false,
    layout: "multi",
  },
  {
    num: "04",
    sub: "Socks · Accessories · Trims",
    title: "Socks & Accessories",
    body: "A collection is only as strong as its weakest detail. Premium cotton and blended performance socks with reinforced heels, consistent sizing and colorfastness tested to European wash standards. Branded trims, custom woven labels, metal hardware and packaging inserts, every finishing element a brand needs to walk onto a European retail shelf with confidence. Small order. Significant impact.",
    moq: "MOQ 2,000 pcs · Lead time 30–45 days",
    imgLeft: true,
    layout: "single",
  },
];

// ─── IMAGE BLOCKS ────────────────────────────────────────────────────────────
//
// All image blocks share one structural fix:
//   minHeight was "55vw" (206px at 375px = too small for two image rows).
//   Changed to clamp(440px, 80vw, 700px) → at least 220px per row on any phone.
//   The inner absolute div fills whatever height the parent resolves to.

function KnitwearImages() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div ref={ref} className="relative overflow-hidden rounded-sm" style={{ minHeight: "clamp(440px, 80vw, 700px)" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        {/* Hero image — full width */}
        <motion.div
          initial={{ scale: 1.07 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.6, ease: EASE }}
          style={{ width: "100%", height: "50%", overflow: "hidden" }}
        >
          <img
            src="/products/zip-hoodie.png.png"
            alt="Premium zip hoodie"
            className="w-full h-full object-contain object-center"
            style={{ background: "#0A0908" }}
          />
        </motion.div>
        {/* Secondary images — side by side */}
        <div style={{ display: "flex", width: "100%", height: "50%" }}>
          <motion.div
            initial={{ scale: 1.07 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.6, delay: 0.1, ease: EASE }}
            style={{ width: "50%", overflow: "hidden" }}
          >
            <img
              src="/products/sweatshirt.jpg.jpg"
              alt="Premium sweatshirt"
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.82) contrast(1.05)" }}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1.07 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
            style={{ width: "50%", overflow: "hidden" }}
          >
            <img
              src="/products/hoodie-dark.jpg"
              alt="Premium hoodie"
              className="w-full h-full object-cover object-top"
              style={{ filter: "brightness(0.75) contrast(1.1)" }}
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, #0A0908 0%, transparent 35%)" }} />
    </div>
  );
}

function HomeTextilesImages() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div ref={ref} className="relative overflow-hidden rounded-sm" style={{ minHeight: "clamp(440px, 80vw, 700px)" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        {/* Hero image — full width */}
        <motion.div
          initial={{ scale: 1.07 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.6, ease: EASE }}
          style={{ width: "100%", height: "50%", overflow: "hidden" }}
        >
          <img
            src="/products/terry-towel.jpeg.jpeg"
            alt="Premium terry towels"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.82) contrast(1.05)" }}
          />
        </motion.div>
        {/* Secondary images — side by side */}
        <div style={{ display: "flex", width: "100%", height: "50%" }}>
          <motion.div
            initial={{ scale: 1.07 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.6, delay: 0.1, ease: EASE }}
            style={{ width: "50%", overflow: "hidden" }}
          >
            <img
              src="/products/fitted-sheet.jpeg.jpeg"
              alt="Premium fitted sheet"
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.82) contrast(1.05)" }}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1.07 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
            style={{ width: "50%", overflow: "hidden" }}
          >
            <img
              src="/products/bedsheet.jpeg.jpeg"
              alt="Premium bedsheet"
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.82) contrast(1.05)" }}
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to left, #0A0908 0%, transparent 35%)" }} />
    </div>
  );
}

function TrousersImage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-sm"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: 6,
        height: "100%",
        minHeight: "clamp(440px, 80vw, 700px)",
      }}
    >
      {[
        { src: "/products/cotton-bottoms.jpg",  alt: "Cotton bottoms",  pos: "center center", col: "auto"  },
        { src: "/products/pajama-bottoms.jpg",  alt: "Pajama bottoms",  pos: "center top",    col: "auto"  },
        { src: "/products/cotton-pajama.jpg",   alt: "Cotton pajama",   pos: "center center", col: "1 / -1"},
      ].map((img, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-sm"
          style={{ position: "relative", gridColumn: img.col }}
        >
          <motion.div
            initial={{ scale: 1.07 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.6, ease: EASE, delay: i * 0.1 }}
            style={{ position: "absolute", inset: 0 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: img.pos }}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

function SocksImage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-sm"
      style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", minHeight: "clamp(440px, 80vw, 700px)", position: "relative" }}
    >
      {/* Hero image — full width */}
      <motion.div
        initial={{ scale: 1.07 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.6, ease: EASE }}
        style={{ width: "100%", height: "50%", overflow: "hidden" }}
      >
        <img
          src="/products/workwear-socks.jpeg"
          alt="Workwear socks"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.82) contrast(1.05)" }}
        />
      </motion.div>
      {/* Secondary images — side by side */}
      <div style={{ display: "flex", width: "100%", height: "50%" }}>
        <motion.div
          initial={{ scale: 1.07 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.6, delay: 0.1, ease: EASE }}
          style={{ width: "50%", overflow: "hidden" }}
        >
          <img
            src="/products/Athletic-socks.jpeg"
            alt="Athletic socks"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.82) contrast(1.05)" }}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 1.07 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
          style={{ width: "50%", overflow: "hidden" }}
        >
          <img
            src="/products/socks-trim.jpeg"
            alt="Socks trim detail"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.82) contrast(1.05)" }}
          />
        </motion.div>
      </div>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to left, #0A0908 0%, transparent 35%)" }} />
    </div>
  );
}

function ChapterImageBlock({ ch }: { ch: Chapter }) {
  if (ch.num === "01") return <KnitwearImages />;
  if (ch.num === "02") return <HomeTextilesImages />;
  if (ch.num === "03") return <TrousersImage />;
  if (ch.num === "04") return <SocksImage />;
  return null;
}

// ─── CHAPTER TEXT ─────────────────────────────────────────────────────────────
//
// Mobile: items-center centers all flex children; text-center on h2/p/moq;
//         eyebrow row uses justify-center; link uses mx-auto block.
// Desktop (md+): items-start reverts to left-aligned; text-left on h2/p/moq.

function ChapterText({ ch }: { ch: Chapter }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 30 } as const,
    animate: inView ? { opacity: 1, y: 0 } : ({} as Record<string, never>),
    transition: { duration: 0.9, delay: i * 0.08, ease: EASE },
  });

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center md:items-start"
      style={{ padding: "clamp(24px,6vw,100px) clamp(16px,5vw,80px)", background: "#0A0908", height: "100%" }}
    >
      {/* Eyebrow — number + sub-categories */}
      <motion.div
        {...stagger(0)}
        className="flex items-center justify-center md:justify-start"
        style={{ gap: 14, marginBottom: 20 }}
      >
        <div style={{ width: 36, height: 1, background: "#B8955A" }} />
        <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 12, letterSpacing: "0.2em", color: "#B8955A", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          {ch.num} — {ch.sub}
        </span>
      </motion.div>

      {/* Product title */}
      <motion.h2
        {...stagger(1)}
        className="text-center md:text-left w-full"
        style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(36px,4.5vw,58px)", color: "#EDE8E0", lineHeight: 0.88, letterSpacing: "-0.025em", marginBottom: 24 }}
      >
        {ch.title}
      </motion.h2>

      {/* Body copy — max-w-prose on mobile keeps comfortable line length */}
      <motion.p
        {...stagger(2)}
        className="text-center md:text-left max-w-prose md:max-w-[400px] mx-auto md:mx-0"
        style={{ fontFamily: "var(--font-raleway)", fontWeight: 400, fontStyle: "italic", fontSize: "clamp(15px,1.3vw,18px)", color: "#8A8681", lineHeight: 1.9, marginBottom: 28 }}
      >
        {ch.body}
      </motion.p>

      {/* MOQ / lead time */}
      <motion.div {...stagger(3)} className="text-center md:text-left w-full">
        <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 10, letterSpacing: "0.14em", color: "#B8955A" }}>
          {ch.moq}
        </span>
      </motion.div>

      {/* CTA link — block + mx-auto on mobile so it centers like a button */}
      <motion.a
        {...stagger(4)}
        href="#contact"
        className="block mx-auto md:inline md:mx-0"
        style={{
          fontFamily: "var(--font-raleway)",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#EDE8E0",
          textDecoration: "none",
          borderBottom: "1px solid rgba(184,149,90,0.4)",
          paddingBottom: 4,
          width: "fit-content",
          marginTop: 32,
          transition: "color 0.3s, border-color 0.3s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "#B8955A"; e.currentTarget.style.borderColor = "#B8955A"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "#EDE8E0"; e.currentTarget.style.borderColor = "rgba(184,149,90,0.4)"; }}
      >
        Request Sample &rarr;
      </motion.a>
    </div>
  );
}

// ─── SECTION ──────────────────────────────────────────────────────────────────

export default function ProductChapters() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="products" style={{ background: "#0A0908" }}>
      {/* Section header */}
      <div ref={ref} style={{ padding: "clamp(60px,8vw,100px) clamp(24px,5vw,80px) clamp(16px,4vw,40px)" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto md:mx-0 text-center md:text-left"
          style={{ maxWidth: 600 }}
        >
          {/* Label row */}
          <div className="flex items-center justify-center md:justify-start" style={{ gap: 14, marginBottom: 20 }}>
            <div style={{ width: 36, height: 1, background: "#B8955A" }} />
            <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 12, letterSpacing: "0.4em", color: "#B8955A", textTransform: "uppercase" }}>
              Product Categories
            </span>
          </div>

          <h2
            className="text-center md:text-left"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(36px,5vw,68px)", color: "#EDE8E0", lineHeight: 1, marginBottom: 16 }}
          >
            What We Make
          </h2>

          <p
            className="text-center md:text-left max-w-prose md:max-w-[380px] mx-auto md:mx-0"
            style={{ fontFamily: "var(--font-raleway)", fontWeight: 600, fontStyle: "italic", fontSize: "clamp(15px,1.3vw,18px)", color: "#8A8681", lineHeight: 1.9 }}
          >
            A fully integrated manufacturing process built around precision, control, and reliability. From sourcing premium yarns to delivering retail-ready products, every stage is carefully managed by our team—ensuring exceptional quality, seamless execution, and complete confidence in every order.
          </p>
        </motion.div>
      </div>

      {/* Product chapters */}
      {chapters.map((ch) => (
        <div
          key={ch.num}
          className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-0"
          style={{ minHeight: "85vh", borderBottom: "1px solid rgba(237,232,224,0.06)" }}
        >
          {ch.imgLeft ? (
            <>
              {/* Mobile: image first (always above text) */}
              <div className="md:hidden"><ChapterImageBlock ch={ch} /></div>
              {/* Desktop: image on left */}
              <div className="hidden md:block" style={{ height: "100%" }}><ChapterImageBlock ch={ch} /></div>
              <ChapterText ch={ch} />
            </>
          ) : (
            <>
              {/* Mobile: image first */}
              <div className="md:hidden"><ChapterImageBlock ch={ch} /></div>
              {/* Desktop: text on left, image on right */}
              <div className="hidden md:block" style={{ height: "100%" }}><ChapterText ch={ch} /></div>
              <div className="hidden md:block" style={{ height: "100%" }}><ChapterImageBlock ch={ch} /></div>
              {/* Mobile: text below */}
              <div className="md:hidden"><ChapterText ch={ch} /></div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
