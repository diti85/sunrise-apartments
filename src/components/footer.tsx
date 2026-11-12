"use client";

import { Logo } from "./logo";
import { useLocale } from "@/i18n/locale-provider";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Logo className="h-8 w-auto text-muted-foreground" />

          <div className="flex items-center gap-8">
            <a
              href="#home"
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.home}
            </a>
            <a
              href="#apartments"
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.apartments}
            </a>
            <a
              href="#about"
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60 tracking-wider">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
          <p className="text-xs text-muted-foreground/40 tracking-wider">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
