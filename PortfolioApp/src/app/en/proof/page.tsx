import type { Metadata } from "next";
import { ProofPage } from "@/components/proof-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "en",
  title: "Certificates",
  description: "Hasan Kaşıkcı certificate and participation document gallery.",
  path: "/proof"
});

export default function Page() {
  return <ProofPage locale="en" />;
}
