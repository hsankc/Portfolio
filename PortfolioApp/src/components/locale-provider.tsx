"use client";

import { NextIntlClientProvider } from "next-intl";
import type { Locale } from "@/types/content";

type LocaleProviderProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={{}}>
      {children}
    </NextIntlClientProvider>
  );
}
