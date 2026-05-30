import type { Metadata } from "next";
import { WritingPage } from "@/components/writing-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "tr",
  title: "Yazılar",
  description: "Teknik notlar, hackathon günlükleri ve proje yazıları için hazırlanan alan.",
  path: "/writing"
});

export default function Page() {
  return <WritingPage locale="tr" />;
}
