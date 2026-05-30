import type { ProjectStatus } from "@/types/content";

const statusStyles: Record<ProjectStatus, string> = {
  Featured: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200",
  Live: "border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-200",
  Awarded: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-200",
  "Hackathon Build":
    "border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200",
  "Client Work":
    "border-coral/20 bg-coral/10 text-coral dark:border-coral/30 dark:bg-coral/10 dark:text-red-200",
  MVP: "border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200",
  WIP: "border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200",
  Academic: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-200",
  "Team Project": "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200",
  Competition: "border-coral/20 bg-coral/10 text-coral dark:border-coral/30 dark:bg-coral/10 dark:text-red-200"
};

export function StatusPill({ status }: { status: ProjectStatus }) {
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold ${statusStyles[status]}`}>
      {status}
    </span>
  );
}
