"use client";

export default function VideoSection() {
  return (
    <section className="relative overflow-hidden" style={{ height: "70vh", background: "#0A0908" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.45) contrast(1.1) saturate(0.9)" }}
      >
        <source
          src="/Textile-gallery.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        style={{ zIndex: 2, padding: "0 clamp(24px,5vw,80px)" }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: 12,
            letterSpacing: "0.4em",
            color: "#B8955A",
            textTransform: "uppercase",
          }}
        >
          Manufactured in Karachi &middot; Exported Worldwide
        </span>

        <div style={{ width: 56, height: 1, background: "#B8955A", margin: "24px auto" }} />

        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(15px,2.5vw,25px)",
            color: "#EDE8E0",
            lineHeight: 1.2,
            maxWidth: 800,
          }}
        >
          Every stitch. Every thread.
          <br />
          Built for the world&rsquo;s best brands.
          <br /><br />
          Precision in every process. Excellence in every product.
          <br />
          Trusted by the brands shaping tomorrow.
        </h2>

        <div style={{ width: 56, height: 1, background: "#B8955A", margin: "24px auto" }} />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 120, background: "linear-gradient(to top, #0A0908, transparent)", zIndex: 3 }}
      />
    </section>
  );
}
