export type Locale = "tr" | "en";

export type LocalizedText = {
  tr: string;
  en: string;
};

export type ProjectStatus =
  | "Featured"
  | "Live"
  | "Awarded"
  | "Hackathon Build"
  | "Client Work"
  | "MVP"
  | "WIP"
  | "Academic"
  | "Team Project"
  | "Competition";

export type Project = {
  title: string;
  slug: string;
  category: string;
  status: ProjectStatus[];
  featuredRank: number | null;
  role: LocalizedText;
  summary: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  impact: LocalizedText;
  repoUrl: string | null;
  liveUrl: string | null;
  extraLinks?: string[];
  versions?: Array<{
    label: string;
    url: string;
    note: LocalizedText;
  }>;
  eventName: string | null;
  award: string | null;
  techStack: string[];
  accent: "blue" | "cyan" | "teal" | "amber" | "coral";
  media?: {
    src: string;
    alt: string;
  };
};

export type Hackathon = {
  title: string;
  date: string;
  location: string;
  project: string;
  summary: LocalizedText;
  outcome?: string;
  projectSlug?: string;
  accent: "blue" | "cyan" | "teal" | "amber" | "coral";
};

export type EventCard = {
  title: LocalizedText;
  event: LocalizedText;
  role: LocalizedText;
  year: string;
  image: string;
  sourceImage: string;
  accent: "blue" | "cyan" | "teal" | "amber" | "coral";
  rotation: number;
  hanger: "single" | "double";
  orientation?: "portrait" | "landscape";
};

export type ProofItem = {
  title: LocalizedText;
  date: string;
  category: "leadership" | "certificate";
  collection: string;
  thumb?: string;
};
