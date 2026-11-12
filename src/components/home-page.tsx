import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ApartmentsSection } from "@/components/apartments-section";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { LocaleProvider } from "@/i18n/locale-provider";
import type { Locale } from "@/i18n/dictionaries";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <Navbar />
      <Hero />
      <ApartmentsSection />
      <About />
      <Contact />
      <Footer />
    </LocaleProvider>
  );
}
