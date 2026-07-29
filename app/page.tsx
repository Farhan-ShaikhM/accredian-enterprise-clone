import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import AccredianEdge from "@/components/sections/AccredianEdge";
import CAT from "@/components/sections/CAT";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import HowItWorks from "@/components/sections/HowItWorks";
import CTA from "@/components/sections/CTA";
import * as Icons from "lucide-react";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

console.log(Icons);
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <CAT />
        <HowItWorks />
        <FAQ />
        <Testimonials />
        <CTA/>
        <Footer />
        <BackToTop/>
      </main>
    </>
  );
}