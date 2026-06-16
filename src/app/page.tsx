import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import IdentityStatement from "@/components/IdentityStatement";
import VideoSection from "@/components/VideoSection";
import ProductChapters from "@/components/ProductChapters";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Certifications from "@/components/Certifications";
import GlobalReach from "@/components/GlobalReach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <IdentityStatement />
      <VideoSection />
      <ProductChapters />
      <Process />
      <Stats />
      <Certifications />
      <GlobalReach />
      <Contact />
      <Footer />
      <GrainOverlay />
    </>
  );
}
