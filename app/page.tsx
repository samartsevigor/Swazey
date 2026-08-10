import { About } from "@/app/components/landing/About";
import { Contact, Footer } from "@/app/components/landing/Contact";
import { DemoBanner } from "@/app/components/landing/DemoBanner";
import { Header } from "@/app/components/landing/Header";
import { Hero } from "@/app/components/landing/Hero";
import { Portfolio } from "@/app/components/landing/Portfolio";
import { Services } from "@/app/components/landing/Services";
import { TrustBar } from "@/app/components/landing/TrustBar";

export default function Home() {
  return (
    <>
      <DemoBanner />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
