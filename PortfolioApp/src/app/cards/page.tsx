import type { Metadata } from "next";
import { CardsPage } from "@/components/cards-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "tr",
  title: "Kartlarım",
  description: "Hasan Kaşıkcı katıldığı etkinliklerin yaka kartları ve passes sergisi.",
  path: "/cards"
});

export default function Page() {
  return <CardsPage locale="tr" />;
}
