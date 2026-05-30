import type { Metadata } from "next";
import { HackathonsPage } from "@/components/hackathons-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "en",
  title: "Hackathon Timeline",
  description: "Monad Blitz, Frontier, Sui, and BTK AI hackathon projects.",
  path: "/hackathons"
});

export default function Page() {
  return <HackathonsPage locale="en" />;
}
