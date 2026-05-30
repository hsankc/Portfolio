import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">404</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950 dark:text-white">Sayfa bulunamadı</h1>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-600 dark:bg-white dark:text-slate-950"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </main>
  );
}
