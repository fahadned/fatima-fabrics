import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Space_Mono, Playfair_Display, Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-raleway",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fatima Fabrics — Textile Manufacturer & Exporter | Karachi, Pakistan",
  description:
    "Full-package textile manufacturer and exporter supplying Europe's leading fashion and retail brands. Knitwear, home textiles, denim and performance fabrics from Karachi, Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${spaceMono.variable} ${playfair.variable} ${montserrat.variable} ${raleway.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
