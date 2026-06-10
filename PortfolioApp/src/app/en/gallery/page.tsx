import type { Metadata } from "next";
import { GalleryPage } from "@/components/gallery-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "en",
  title: "Gallery",
  description: "Hackathon and event photos from Hasan Kasikci's build archive.",
  path: "/gallery"
});

export default function Page() {
  return <GalleryPage locale="en" />;
}
