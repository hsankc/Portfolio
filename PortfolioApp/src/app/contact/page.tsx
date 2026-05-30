import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "tr",
  title: "İletişim",
  description: "Hasan Kaşıkcı ile GitHub, LinkedIn veya e-posta üzerinden iletişime geç.",
  path: "/contact"
});

export default function Page() {
  return <ContactPage locale="tr" />;
}
