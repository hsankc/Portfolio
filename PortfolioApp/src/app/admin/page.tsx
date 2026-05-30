import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "tr",
  title: "Admin",
  description: "Hasan Kaşıkcı portfolio admin alanı.",
  path: "/admin",
  noIndex: true
});

export default function Page() {
  return (
    <AppShell locale="tr">
      <main className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-200">V2</p>
        <h1 className="mt-4 text-5xl font-black text-slate-950 dark:text-white">Admin Panel</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Supabase Auth, Postgres ve Storage ile tek admin hesabına bağlı içerik yönetimi burada devreye alınacak.
        </p>
      </main>
    </AppShell>
  );
}
