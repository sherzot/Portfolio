import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Sherzod Musurmonov | Full Stack Engineer in Japan",
  description:
    "Laravel + React + AWS で日本企業のシステム近代化を担当するフルスタックエンジニア。3年の実務経験、PL/PM志向。",
  keywords: [
    "Full Stack Engineer",
    "Laravel",
    "React",
    "Next.js",
    "TypeScript",
    "AWS",
    "Docker",
    "Japan",
    "フルスタックエンジニア",
    "東京",
  ],
  authors: [{ name: "Sherzod Musurmonov" }],
  creator: "Sherzod Musurmonov",
  openGraph: {
    type: "profile",
    locale: "ja_JP",
    url: "https://sherdev.netlify.app",
    siteName: "Sherzod Musurmonov Portfolio",
    title: "Sherzod Musurmonov | Full Stack Engineer in Japan",
    description:
      "Laravel + React + AWS で日本企業のシステム近代化を担当するフルスタックエンジニア",
    images: [
      {
        url: "https://sherdev.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sherzod Musurmonov Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sherzod Musurmonov | Full Stack Engineer in Japan",
    description:
      "Laravel + React + AWS で日本企業のシステム近代化を担当するフルスタックエンジニア",
    images: ["https://sherdev.netlify.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sherzod Musurmonov",
              alternateName: "シェルゾド・ムスルモノフ",
              jobTitle: "Full Stack Engineer",
              url: "https://sherdev.netlify.app",
              email: "sherzodmusurmonov81@gmail.com",
              knowsAbout: [
                "Laravel",
                "React",
                "Next.js",
                "TypeScript",
                "AWS",
                "Docker",
                "PostgreSQL",
                "OpenAI API",
              ],
              knowsLanguage: [
                { "@type": "Language", name: "Japanese", alternateName: "ja" },
                { "@type": "Language", name: "English", alternateName: "en" },
                { "@type": "Language", name: "Uzbek", alternateName: "uz" },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tokyo",
                addressCountry: "JP",
              },
              sameAs: ["https://github.com/sherzot"],
            }),
          }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
