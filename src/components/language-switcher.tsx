"use client";

import Link from "next/link";
import { locales, localePaths } from "@/i18n/dictionaries";
import { useLocale } from "@/i18n/locale-provider";

export function LanguageSwitcher({
  className = "",
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const { locale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`flex items-center gap-2 text-xs tracking-widest uppercase ${className}`}
    >
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span className="text-muted-foreground/40">|</span>}
          <Link
            href={localePaths[l]}
            hrefLang={l}
            lang={l}
            onClick={onNavigate}
            aria-current={l === locale ? "true" : undefined}
            className={
              l === locale
                ? "text-primary"
                : "text-muted-foreground hover:text-primary transition-colors duration-300"
            }
          >
            {l === "sq" ? "SQ" : "EN"}
          </Link>
        </span>
      ))}
    </div>
  );
}
