import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ApartmentsSection } from "@/components/apartments-section";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ApartmentsSection />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
