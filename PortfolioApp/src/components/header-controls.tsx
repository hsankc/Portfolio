"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import type { Locale } from "@/types/content";
import { alternateLocale, dictionary } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme-toggle";

export function HeaderControls({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const copy = dictionary[locale];
  const otherLocale = alternateLocale(locale);
  const localeHref = pathname?.startsWith("/en")
    ? pathname.replace(/^\/en/, "") || "/"
    : `/en${pathname === "/" ? "" : pathname}`;

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/82 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/78">
      <Link
        href={localeHref}
        hrefLang={otherLocale}
        aria-label={copy.actions.switchLanguage}
        title={copy.actions.switchLanguage}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-cyan-200"
      >
        <Languages className="h-4 w-4" />
      </Link>
      <ThemeToggle label={copy.actions.theme} compact />
    </div>
  );
}
