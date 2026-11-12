"use client";

import { createContext, useContext, useEffect } from "react";
import {
  defaultLocale,
  dictionaries,
  type Dictionary,
  type Locale,
} from "./dictionaries";

const LocaleContext = createContext<{ locale: Locale; t: Dictionary }>({
  locale: defaultLocale,
  t: dictionaries[defaultLocale],
});

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  // The root layout renders <html lang="en">; keep the attribute in sync
  // when the Albanian page is shown.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
