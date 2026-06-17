"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fieldStyle: React.CSSProperties = {
  background: "#141312",
  border: "1px solid rgba(237,232,224,0.06)",
  color: "#EDE8E0",
  padding: "15px 18px",
  fontFamily: "var(--font-raleway), Inter, sans-serif",
  fontSize: 14,
  width: "100%",
  display: "block",
  marginBottom: 12,
  outline: "none",
  transition: "border-color 0.3s",
  boxSizing: "border-box",
};

function focusIn(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "#B8955A";
}
function focusOut(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "rgba(237,232,224,0.06)";
}

function WhatsApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8955A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function Contact() {
  const lRef = useRef<HTMLDivElement>(null);
  const rRef = useRef<HTMLDivElement>(null);
  const lIn = useInView(lRef, { once: true, amount: 0.2 });
  const rIn = useInView(rRef, { once: true, amount: 0.2 });
  const [submitting, setSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState("SEND INQUIRY →");
  const [buttonColor, setButtonColor] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "371d537c-7ee6-4127-84a6-80cec526f946");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setButtonText("Sent — We'll be in touch!");
      setButtonColor("green");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        setButtonText("SEND INQUIRY →");
        setButtonColor("");
      }, 4000);
    } else {
      setButtonText("Failed — Please Try Again");
      setTimeout(() => setButtonText("SEND INQUIRY →"), 3000);
    }
    setSubmitting(false);
  };

  return (
    <section id="contact" style={{ background: "#0A0908", borderTop: "1px solid rgba(237,232,224,0.06)", padding: "clamp(80px,10vw,140px) clamp(24px,5vw,80px)" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ maxWidth: 1200, margin: "0 auto", gap: "clamp(48px,6vw,100px)" }}>
        <motion.div
          ref={lRef}
          initial={{ opacity: 0, y: 30 }}
          animate={lIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="flex items-center" style={{ gap: 14, marginBottom: 20 }}>
            <div style={{ width: 36, height: 1, background: "#B8955A" }} />
            <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 13, letterSpacing: "0.25em", color: "#B8955A", textTransform: "uppercase" }}>Start Here</span>
          </div>

          <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(38px,5vw,64px)", color: "#EDE8E0", lineHeight: 1.1, marginBottom: 20 }}>
            Your Next Collection Starts Here
          </h2>
          <p style={{ fontFamily: "var(--font-raleway)", fontWeight: 600, fontStyle: "italic", fontSize: 15, color: "#8A8681", lineHeight: 1.9, marginBottom: 44, maxWidth: 420 }}>
            Tell us what you&apos;re building. We&apos;ll tell you exactly what it costs, how long it takes, and send you a sample before you commit to a unit.
          </p>

          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: "var(--font-space-mono)", fontSize: 12, letterSpacing: "0.4em", color: "#B8955A", textTransform: "uppercase", marginBottom: 4 }}>Address</div>
            <div style={{ fontFamily: "var(--font-raleway)", fontWeight: 400, fontStyle: "italic", fontSize: 13, color: "#EDE8E0", lineHeight: 1.7 }}>
              Plot No. F-317, S.I.T.E,<br />Near Fire Brigade Station,<br />Karachi, 74600, Pakistan
            </div>
          </div>

          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: "var(--font-space-mono)", fontSize: 12, letterSpacing: "0.4em", color: "#B8955A", textTransform: "uppercase", marginBottom: 4 }}>Email</div>
            <a href="mailto:fatimafabrics100@gmail.com" style={{ fontFamily: "var(--font-raleway)", fontWeight: 400, fontStyle: "italic", fontSize: 13, color: "#EDE8E0", textDecoration: "none" }}>fatimafabrics100@gmail.com</a>
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-space-mono)", fontSize: 12, letterSpacing: "0.4em", color: "#B8955A", textTransform: "uppercase", marginBottom: 4 }}>Phone</div>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <a href="tel:+923361022756" className="flex items-center" style={{ gap: 10, fontFamily: "var(--font-raleway)", fontWeight: 400, fontSize: 13, color: "#EDE8E0", textDecoration: "none" }}><WhatsApp />+92-336-1022756</a>
              <a href="tel:+923353949115" className="flex items-center" style={{ gap: 10, fontFamily: "var(--font-raleway)", fontWeight: 400, fontSize: 13, color: "#EDE8E0", textDecoration: "none" }}><WhatsApp />+92-335-3949115</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={rRef}
          initial={{ opacity: 0, y: 30 }}
          animate={rIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          <form onSubmit={onSubmit}>
            <input name="name" placeholder="Full Name" required style={fieldStyle} onFocus={focusIn} onBlur={focusOut} />
            <input name="company" placeholder="Company / Brand Name" style={fieldStyle} onFocus={focusIn} onBlur={focusOut} />
            <input name="email" type="email" placeholder="Email Address" required style={fieldStyle} onFocus={focusIn} onBlur={focusOut} />
            <input name="country" placeholder="Country" style={fieldStyle} onFocus={focusIn} onBlur={focusOut} />

            <select
              name="category"
              defaultValue=""
              style={{ ...fieldStyle, appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237A7671' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 18px center", paddingRight: 44 }}
              onFocus={focusIn}
              onBlur={focusOut}
            >
              <option value="" disabled>— Select Category —</option>
              <option>Knitwear (Hoodies, Sweatshirts, Fleece)</option>
              <option>Home Textiles (Bedsheets, Towels, Fitted Sheets)</option>
              <option>Trousers &amp; Bottoms</option>
              <option>Socks &amp; Accessories</option>
              <option>Multiple Categories</option>
              <option>Other</option>
            </select>

            <input name="quantity" placeholder="Estimated Quantity" style={fieldStyle} onFocus={focusIn} onBlur={focusOut} />
            <textarea name="message" placeholder="Message / Project Details" rows={5} style={{ ...fieldStyle, resize: "vertical" }} onFocus={focusIn} onBlur={focusOut} />

            <button
              type="submit"
              disabled={submitting}
              style={{ fontFamily: "var(--font-raleway)", fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", background: buttonColor === "green" ? "#16a34a" : "#B8955A", color: buttonColor === "green" ? "#fff" : "#0A0908", border: `1px solid ${buttonColor === "green" ? "#16a34a" : "#B8955A"}`, padding: "16px 44px", cursor: submitting ? "wait" : "pointer", opacity: submitting ? 0.7 : 1, transition: "all 0.3s", marginTop: 4, width: "100%", boxSizing: "border-box" }}
              onMouseEnter={(e) => { if (!buttonColor) { e.currentTarget.style.background = "#CCB074"; e.currentTarget.style.borderColor = "#CCB074"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
              onMouseLeave={(e) => { if (!buttonColor) { e.currentTarget.style.background = "#B8955A"; e.currentTarget.style.borderColor = "#B8955A"; e.currentTarget.style.transform = "translateY(0)"; } }}
            >
              {buttonText}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
