import type { Metadata } from "next";
import { CardsPage } from "@/components/cards-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "en",
  title: "My Cards",
  description: "Hasan Kaşıkcı's collection of event badges and passes.",
  path: "/cards"
});

export default function Page() {
  return <CardsPage locale="en" />;
}
