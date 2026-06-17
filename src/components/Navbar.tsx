"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav
      className="fixed top-0 left-0 right-0"
      style={{
        zIndex: 999,
        height: scrolled ? 68 : 88,
        backgroundColor: scrolled ? "rgba(10,9,8,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(237,232,224,0.06)" : "1px solid transparent",
        transition: "all 0.5s ease",
      }}
    >
      <div className="mx-auto flex h-full items-center justify-between" style={{ maxWidth: 1440, padding: "0 clamp(24px,5vw,80px)" }}>
        <img
          src="/logo.png"
          alt="Fatima Fabrics"
          style={{ height: "clamp(40px, 6vw, 72px)", width: "auto", display: "block" }}
        />

        <div className="hidden md:flex items-center" style={{ gap: 36 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontFamily: "var(--font-raleway)", fontSize: 13, color: "#7A7671", letterSpacing: "0.04em", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#EDE8E0"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#7A7671"; }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-raleway)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1px solid #B8955A",
              color: "#B8955A",
              background: "transparent",
              padding: "10px 28px",
              textDecoration: "none",
              transition: "all 0.3s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#B8955A"; e.currentTarget.style.color = "#0A0908"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#B8955A"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Request Sample
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{ background: "none", border: "none", color: "#EDE8E0", fontSize: 26, cursor: "pointer", lineHeight: 1 }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "rgba(10,9,8,0.98)", borderBottom: "1px solid rgba(237,232,224,0.06)" }}
          >
            <div className="flex flex-col" style={{ padding: "24px clamp(24px,5vw,80px) 32px" }}>
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontFamily: "var(--font-raleway)", fontSize: 15, color: "#7A7671", textDecoration: "none", padding: "14px 0", borderBottom: "1px solid rgba(237,232,224,0.04)" }}>
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                style={{ fontFamily: "var(--font-raleway)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid #B8955A", color: "#B8955A", background: "transparent", padding: "14px 28px", textDecoration: "none", textAlign: "center", marginTop: 20, display: "block" }}
              >
                Request Sample
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
