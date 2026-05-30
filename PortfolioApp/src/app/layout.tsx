import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hasan Kaşıkcı | Portfolio",
    template: "%s | Hasan Kaşıkcı"
  },
  description:
    "Hasan Kaşıkcı'nın software, AI/Web3, UAV ve community leadership odaklı kişisel portfolio sitesi.",
  applicationName: "Hasan Kaşıkcı Portfolio",
  authors: [{ name: "Hasan Kaşıkcı" }]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#050816" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
