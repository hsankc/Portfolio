import type { Metadata } from "next";
import { WritingPage } from "@/components/writing-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "en",
  title: "Writing",
  description: "A prepared space for technical notes, hackathon logs, and project essays.",
  path: "/writing"
});

export default function Page() {
  return <WritingPage locale="en" />;
}
