import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/types/content";
import { dictionary, routeFor } from "@/lib/i18n";
import { site } from "@/lib/content";
import { DockNav } from "@/components/dock-nav";
import { HeaderControls } from "@/components/header-controls";
import { LocaleProvider } from "@/components/locale-provider";
import { Spotlight } from "@/components/spotlight";

type AppShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function AppShell({ locale, children }: AppShellProps) {
  const copy = dictionary[locale];

  return (
    <LocaleProvider locale={locale}>
      <Spotlight />
      <div className="relative z-10 min-h-screen pb-28">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-5 sm:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Link href={routeFor(locale, "/")} className="group inline-flex min-w-0 items-center gap-3">
              <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm transition group-hover:border-blue-300 dark:border-white/10 dark:bg-slate-950">
                <Image
                  src={site.profileImage}
                  alt={site.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <span className="block max-w-[128px] truncate text-sm font-black text-slate-900 sm:max-w-none dark:text-white">{site.name}</span>
            </Link>
            <HeaderControls locale={locale} />
          </div>
          <div className="hidden items-center gap-3 text-sm font-semibold text-slate-600 md:flex dark:text-slate-300">
            <Link className="hover:text-blue-600 dark:hover:text-cyan-200" href={routeFor(locale, "/projects")}>
              {copy.nav.projects}
            </Link>
            <Link className="hover:text-blue-600 dark:hover:text-cyan-200" href={routeFor(locale, "/contact")}>
              {copy.nav.contact}
            </Link>
          </div>
        </header>
        {children}
        <footer className="mx-auto mt-20 flex w-full max-w-7xl flex-col gap-4 px-5 pb-8 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between dark:text-slate-400">
          <p>© {new Date().getFullYear()} Hasan Kaşıkcı</p>
          <div className="flex flex-wrap gap-4">
            <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-cyan-200">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-cyan-200">
              LinkedIn
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-cyan-200">
              Instagram
            </a>
            <a href={site.x} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-cyan-200">
              X
            </a>
            <a href={site.telegram} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-cyan-200">
              Telegram
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-blue-600 dark:hover:text-cyan-200">
              Email
            </a>
          </div>
        </footer>
      </div>
      <DockNav locale={locale} />
    </LocaleProvider>
  );
}
