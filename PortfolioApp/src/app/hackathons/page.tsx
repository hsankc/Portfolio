import type { Metadata } from "next";
import { HackathonsPage } from "@/components/hackathons-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "tr",
  title: "Hackathon Timeline",
  description: "Monad Blitz, Frontier, Sui ve BTK AI hackathon projeleri.",
  path: "/hackathons"
});

export default function Page() {
  return <HackathonsPage locale="tr" />;
}
