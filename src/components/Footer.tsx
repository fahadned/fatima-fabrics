"use client";

const links = [
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#141312", borderTop: "1px solid rgba(237,232,224,0.06)", padding: "clamp(16px,4vw,44px) clamp(24px,5vw,80px) clamp(16px,4vw,32px)" }}>
      <div className="flex flex-col md:flex-row items-center justify-between" style={{ maxWidth: 1200, margin: "0 auto", gap: 24 }}>
        {/* Center */}
        <div style={{ fontFamily: "var(--font-raleway)", fontSize: 11, color: "#7A7671" }}>
          &copy; 2026 Fatima Fabrics. All rights reserved.
        </div>

        {/* Right */}
        <div className="flex items-center" style={{ gap: 24 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontFamily: "var(--font-raleway)", fontSize: 11, color: "#7A7671", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#EDE8E0"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#7A7671"; }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
