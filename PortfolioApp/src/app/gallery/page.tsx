import type { Metadata } from "next";
import { GalleryPage } from "@/components/gallery-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  locale: "tr",
  title: "Galeri",
  description: "Hasan Kaşıkcı'nın hackathon ve etkinlik fotoğrafları.",
  path: "/gallery"
});

export default function Page() {
  return <GalleryPage locale="tr" />;
}
