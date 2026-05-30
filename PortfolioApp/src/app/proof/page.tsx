import type { Metadata } from "next";
import { ProofPage } from "@/components/proof-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "tr",
  title: "Sertifikalar",
  description: "Hasan Kaşıkcı sertifika ve katılım belgeleri.",
  path: "/proof"
});

export default function Page() {
  return <ProofPage locale="tr" />;
}
