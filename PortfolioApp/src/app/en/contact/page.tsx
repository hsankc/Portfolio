import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "en",
  title: "Contact",
  description: "Contact Hasan Kaşıkcı through GitHub, LinkedIn, or email.",
  path: "/contact"
});

export default function Page() {
  return <ContactPage locale="en" />;
}
