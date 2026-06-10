"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Award, FolderKanban, Home, IdCard, Images, Mail, Newspaper, Sparkles, Trophy } from "lucide-react";
import type { Locale } from "@/types/content";
import { dictionary, routeFor } from "@/lib/i18n";

type DockNavProps = {
  locale: Locale;
};

const icons = {
  home: Home,
  projects: FolderKanban,
  hackathons: Trophy,
  cards: IdCard,
  gallery: Images,
  proof: Award,
  writing: Newspaper,
  contact: Mail
};

export function DockNav({ locale }: DockNavProps) {
  const pathname = usePathname();
  const copy = dictionary[locale];
  const navItems = [
    { key: "home", href: routeFor(locale, "/") },
    { key: "projects", href: routeFor(locale, "/projects") },
    { key: "hackathons", href: routeFor(locale, "/hackathons") },
    { key: "cards", href: routeFor(locale, "/cards") },
    { key: "gallery", href: routeFor(locale, "/gallery") },
    { key: "proof", href: routeFor(locale, "/proof") },
    { key: "writing", href: routeFor(locale, "/writing") },
    { key: "contact", href: routeFor(locale, "/contact") }
  ] as const;

  return (
    <div className="fixed inset-x-0 z-50 flex justify-center px-4" style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}>
      <nav className="flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white/86 p-1.5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/84">
        <div className="hidden items-center gap-1 px-2 text-xs font-semibold text-slate-500 sm:flex dark:text-slate-400">
          <Sparkles className="h-4 w-4 text-amber" />
          HK
        </div>
        {navItems.map((item) => {
          const Icon = icons[item.key];
          const active = item.href === "/" ? pathname === "/" || pathname === "/en" : pathname?.startsWith(item.href);
          return (
            <motion.div key={item.key} whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href={item.href}
                aria-label={copy.nav[item.key]}
                title={copy.nav[item.key]}
                className={`relative flex h-11 w-11 items-center justify-center rounded-full transition sm:w-auto sm:px-4 ${
                  active
                    ? "bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"
                    : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-cyan-200"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="ml-2 hidden text-sm font-semibold sm:inline">{copy.nav[item.key]}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </div>
  );
}
