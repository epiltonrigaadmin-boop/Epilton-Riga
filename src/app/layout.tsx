import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { fallbackContent } from "@/data/fallbackContent";
import "./globals.css";

const siteUrl = "https://epiltonriga.lv";
const ogImage = "/images/brand/og-image.png";

const onest = Onest({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: fallbackContent.seo.ru.title,
  description: fallbackContent.seo.ru.description,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: fallbackContent.seo.ru.title,
    description: fallbackContent.seo.ru.description,
    url: siteUrl,
    siteName: "EPIL_TON",
    locale: "ru_LV",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "EPIL_TON Riga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fallbackContent.seo.ru.title,
    description: fallbackContent.seo.ru.description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={onest.variable}>{children}</body>
    </html>
  );
}
