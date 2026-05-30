import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "tr",
  title: "Hasan Kaşıkcı | Software, AI/Web3 ve UAV Leadership",
  description:
    "Hasan Kaşıkcı'nın projeleri, hackathon deneyimleri, sertifikaları ve ÇOMÜ Havacılık liderlik kanıtları.",
  path: "/"
});

export default function Page() {
  return <HomePage locale="tr" />;
}
