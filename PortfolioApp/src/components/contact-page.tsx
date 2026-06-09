"use client";

import { AtSign, Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import type { Locale } from "@/types/content";
import { dictionary } from "@/lib/i18n";
import { site } from "@/lib/content";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export function ContactPage({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];
  const contactLinks = [
    { label: "Email", href: `mailto:${site.email}`, icon: Mail },
    { label: "GitHub", href: site.github, icon: Github },
    { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
    { label: "Instagram", href: site.instagram, icon: Instagram },
    { label: "X", href: site.x, icon: AtSign },
    { label: "Telegram", href: site.telegram, icon: Send },
    { label: "ilion7.web", href: site.instagramVenture, icon: Instagram }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const subject = encodeURIComponent(`Portfolio İletişim Formu: ${name}`);
    const body = encodeURIComponent(`Gönderen: ${name}\nEmail: ${email}\n\nMesaj:\n${message}`);

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <AppShell locale={locale}>
      <main>
        <PageHeader locale={locale} eyebrow="Contact" title={copy.pages.contactTitle} lead={copy.pages.contactLead} />
        <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 pb-32 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="grid gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white/82 p-4 font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-slate-950/70 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-200"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-100 dark:bg-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    {item.label}
                  </a>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-slate-200 bg-white/82 p-5 shadow-soft dark:border-white/10 dark:bg-slate-950/70"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                  {locale === "tr" ? "Ad" : "Name"}
                  <input
                    name="name"
                    required
                    className="h-12 rounded-md border border-slate-200 bg-white px-3 text-slate-950 outline-none transition focus:border-blue-400 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-12 rounded-md border border-slate-200 bg-white px-3 text-slate-950 outline-none transition focus:border-blue-400 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                  />
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                {locale === "tr" ? "Mesaj" : "Message"}
                <textarea
                  name="message"
                  rows={7}
                  required
                  className="rounded-md border border-slate-200 bg-white p-3 text-slate-950 outline-none transition focus:border-blue-400 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                />
              </label>
              <button
                type="submit"
                className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                {locale === "tr" ? "Mesaj Gönder" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </section>
      </main>
    </AppShell>
  );
}
