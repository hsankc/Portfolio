"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Compass, Sparkles, AlertCircle } from "lucide-react";
import type { Locale, EventCard } from "@/types/content";
import { dictionary } from "@/lib/i18n";
import { eventCards, text } from "@/lib/content";
import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

type CardsPageProps = {
  locale: Locale;
};

// Define explicit color maps
const ambientAccents: Record<string, string> = {
  blue: "rgba(59, 130, 246, 0.15)",
  cyan: "rgba(6, 182, 212, 0.15)",
  teal: "rgba(20, 184, 166, 0.15)",
  amber: "rgba(245, 158, 11, 0.15)",
  coral: "rgba(244, 63, 94, 0.15)"
};

const cordColors: Record<string, string> = {
  blue: "#2563eb",
  cyan: "#0891b2",
  teal: "#0d9488",
  amber: "#d97706",
  coral: "#e11d48"
};

export function CardsPage({ locale }: CardsPageProps) {
  const copy = dictionary[locale];
  const [selectedCard, setSelectedCard] = useState<EventCard | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Dynamic 3D tilt state
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const rotateX = -(y - yc) / 10; // Tilt range
    const rotateY = (x - xc) / 10;

    // Glare calculations
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
    setHoveredCard(null);
  };

  return (
    <AppShell locale={locale}>
      <main className="relative min-h-screen">
        {/* Top Decorative Hanger Panel */}
        <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-slate-900/5 via-transparent to-transparent dark:from-white/[0.02]" />

        <PageHeader
          locale={locale}
          eyebrow={locale === "tr" ? "Hatıralar" : "Memories"}
          title={copy.pages.cardsTitle}
          lead={copy.pages.cardsLead}
        />

        {/* Hanging Board/Cord Anchor Line */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-800">
            <div className="absolute inset-x-0 -top-1 flex justify-around">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-slate-700 shadow-sm" />
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Cards Wall */}
        <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <div className="grid grid-cols-1 gap-y-28 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {eventCards.map((card, index) => {
              const isHovered = hoveredCard === index;
              const accentColor = cordColors[card.accent];

              return (
                <Reveal key={index} delay={(index % 4) * 0.05} className="relative flex flex-col items-center">
                  {/* Hanging Strings SVG */}
                  <div className="absolute -top-24 left-1/2 z-0 h-24 w-12 -translate-x-1/2 pointer-events-none">
                    <svg className="h-full w-full overflow-visible" viewBox="0 0 50 100" fill="none">
                      {card.hanger === "double" ? (
                        <>
                          {/* Double straps from side pins */}
                          <path
                            d="M 5 0 Q 15 65, 20 85"
                            stroke={accentColor}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            opacity="0.85"
                          />
                          <path
                            d="M 45 0 Q 35 65, 30 85"
                            stroke={accentColor}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            opacity="0.85"
                          />
                        </>
                      ) : (
                        // Single central strap
                        <path
                          d="M 25 0 Q 25 60, 25 85"
                          stroke={accentColor}
                          strokeWidth="3"
                          strokeLinecap="round"
                          opacity="0.85"
                        />
                      )}
                      {/* Safety clip / plastic connector */}
                      <rect x="18" y="80" width="14" height="12" rx="2" fill="#1e293b" />
                      <circle cx="25" cy="86" r="3" fill="#64748b" />
                      {/* Metallic Ring hook */}
                      <ellipse cx="25" cy="94" rx="4" ry="6" stroke="#94a3b8" strokeWidth="2.5" fill="none" />
                    </svg>
                  </div>

                  {/* dangling physics motion card wrapper */}
                  <motion.div
                    className="relative z-10 w-full max-w-[230px] cursor-pointer"
                    animate={
                      isHovered
                        ? { rotate: 0, y: 4, scale: 1.05 }
                        : {
                            rotate: [card.rotation, card.rotation - 1, card.rotation + 1, card.rotation],
                            transition: {
                              repeat: Infinity,
                              duration: 4.5 + (index % 3),
                              ease: "easeInOut"
                            }
                          }
                    }
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCard(card)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseMove={isHovered ? handleMouseMove : undefined}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      perspective: 800,
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {/* Shadow Ambient Glow */}
                    <div
                      className="absolute -inset-1 rounded-xl opacity-0 blur-xl transition duration-500 group-hover:opacity-100"
                      style={{
                        backgroundColor: ambientAccents[card.accent],
                        opacity: isHovered ? 0.8 : 0
                      }}
                    />

                    {/* 3D tiltable card body */}
                    <motion.div
                      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-3 shadow-xl backdrop-blur-md transition-shadow duration-300 dark:border-white/10 dark:bg-slate-900/50"
                      style={
                        isHovered
                          ? {
                              rotateX: tilt.rotateX,
                              rotateY: tilt.rotateY,
                              boxShadow: `0 20px 40px -15px ${ambientAccents[card.accent]}`
                            }
                          : { rotateX: 0, rotateY: 0 }
                      }
                    >
                      {/* Lanyard Hole details */}
                      <div className="absolute top-1 left-1/2 h-3.5 w-8 -translate-x-1/2 rounded-full bg-slate-950/20 dark:bg-white/10 flex items-center justify-center">
                        <div className="h-2 w-5 rounded-full bg-slate-100 dark:bg-slate-900" />
                      </div>

                      {/* Card Content image */}
                      <div className="relative mt-4 aspect-[2/3] w-full overflow-hidden rounded-lg bg-slate-100/50 dark:bg-slate-950/40">
                        <Image
                          src={card.image}
                          alt={text(card.title, locale)}
                          fill
                          sizes="(max-width: 768px) 50vw, 230px"
                          className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                          priority={index < 4}
                        />

                        {/* Interactive Glare overlay on hover */}
                        {isHovered && (
                          <div
                            className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay transition-opacity duration-300"
                            style={{
                              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`
                            }}
                          />
                        )}
                      </div>

                      {/* Brief text label */}
                      <div className="mt-3 text-center">
                        <span
                          className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase"
                          style={{
                            backgroundColor: `${cordColors[card.accent]}15`,
                            color: cordColors[card.accent]
                          }}
                        >
                          {card.year}
                        </span>
                        <h3 className="mt-1 line-clamp-1 text-xs font-black text-slate-900 dark:text-white">
                          {text(card.title, locale)}
                        </h3>
                        <p className="line-clamp-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                          {text(card.role, locale)}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </section>
      </main>

      {/* High-Fidelity Details Inspector Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop click dismiss */}
            <div className="absolute inset-0 bg-slate-950/60" onClick={() => setSelectedCard(null)} />

            {/* Modal Box */}
            <motion.div
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
            >
              {/* Colored top gradient glow based on accent */}
              <div
                className="absolute inset-x-0 top-0 h-40 opacity-20 dark:opacity-30 blur-2xl"
                style={{
                  background: `radial-gradient(circle at top, ${cordColors[selectedCard.accent]}, transparent)`
                }}
              />

              {/* Close Button */}
              <button
                className="absolute top-5 right-5 z-20 rounded-full bg-slate-100 p-2.5 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                onClick={() => setSelectedCard(null)}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Grid content */}
              <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-[1.1fr_1.9fr]">
                {/* Visual view area */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-white/5 dark:bg-white/[0.01]">
                  <div className="relative aspect-[3/4] w-full max-w-[280px]">
                    <Image
                      src={selectedCard.image}
                      alt={text(selectedCard.title, locale)}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <a
                    href={selectedCard.sourceImage}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-black text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-200"
                  >
                    <Compass className="h-4 w-4" />
                    {locale === "tr" ? "Orijinal Çekimi Gör" : "View Original Photo"}
                  </a>
                </div>

                {/* Details text area */}
                <div className="relative flex flex-col justify-between pt-4">
                  <div>
                    {/* Header info */}
                    <div className="flex items-center gap-3">
                      <span
                        className="rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider"
                        style={{
                          backgroundColor: `${cordColors[selectedCard.accent]}15`,
                          color: cordColors[selectedCard.accent]
                        }}
                      >
                        {selectedCard.year}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                        <Sparkles className="h-3.5 w-3.5" />
                        {selectedCard.hanger === "double" ? "Double cord" : "Single strap"}
                      </span>
                    </div>

                    <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
                      {text(selectedCard.title, locale)}
                    </h2>

                    {/* Meta parameters */}
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                        <User className="h-5 w-5 shrink-0 text-slate-400" />
                        <div>
                          <span className="font-bold text-slate-500 dark:text-slate-500">
                            {locale === "tr" ? "Rol: " : "Role: "}
                          </span>
                          <span className="font-black text-slate-950 dark:text-white">
                            {text(selectedCard.role, locale)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                        <Calendar className="h-5 w-5 shrink-0 text-slate-400" />
                        <div>
                          <span className="font-bold text-slate-500 dark:text-slate-500">
                            {locale === "tr" ? "Etkinlik: " : "Event: "}
                          </span>
                          <span className="font-semibold">{text(selectedCard.event, locale)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Descriptive card history context */}
                    <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/50 p-5 dark:border-white/5 dark:bg-white/[0.01]">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {locale === "tr" ? "Etkinlik Bağlamı ve Kanıtı" : "Event Context & Proof Receipt"}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {locale === "tr"
                          ? `Bu yaka kartı Hasan Kaşıkcı'nın ${text(selectedCard.event, locale)} katılımının ve yürüttüğü aktif liderlik/yazılım çalışmalarının fiziksel birer hatırasıdır. Askı ipinden çıkarılarak özel stüdyo koşullarında dijitalleştirilmiştir.`
                          : `This pass represents a physical receipt of Hasan Kaşıkcı's participation and contributions at ${text(selectedCard.event, locale)}. Organized, digitized directly from the physical storage collections without its cord holder.`}
                      </p>
                    </div>
                  </div>

                  {/* Informative advice footer */}
                  <div className="mt-8 flex items-center gap-3 rounded-xl bg-slate-100/50 p-3.5 text-xs text-slate-600 dark:bg-white/[0.02] dark:text-slate-400">
                    <AlertCircle className="h-4.5 w-4.5 shrink-0 text-slate-400" />
                    <p>
                      {locale === "tr"
                        ? "Kartlar listesi fiziksel arşiv dosyalarından eşleşen kimliklerle dinamik olarak beslenmektedir."
                        : "Pass lists are dynamically populated from matched storage identities in the workspace."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AppShell>
  );
}
