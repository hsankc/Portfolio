"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle({ label, compact = false }: { label: string; compact?: boolean }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = stored ? stored === "dark" : prefersDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-slate-950/85 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-200 ${
        compact ? "h-9 w-9" : "h-11 w-11"
      }`}
    >
      {isDark ? <Sun className={compact ? "h-4 w-4" : "h-5 w-5"} /> : <Moon className={compact ? "h-4 w-4" : "h-5 w-5"} />}
    </button>
  );
}
