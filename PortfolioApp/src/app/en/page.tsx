import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "en",
  title: "Hasan Kaşıkcı | Software, AI/Web3 and UAV Leadership",
  description:
    "Projects, hackathons, certificates, and COMU Aviation leadership proof from Hasan Kaşıkcı.",
  path: "/"
});

export default function Page() {
  return <HomePage locale="en" />;
}
