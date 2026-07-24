import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://sherdev.netlify.app"),
  title: "Sherzod Musurmonov | Full-Stack Engineer in Tokyo",
  description:
    "Sherzod Musurmonov — Tokyo-based Full-Stack Engineer working across product development, cloud architecture, and AI-enabled SaaS systems.",
  alternates: { canonical: "https://sherdev.netlify.app/" },
  keywords: [
    "Full Stack Engineer",
    "Go",
    "NestJS",
    "Laravel",
    "React",
    "Next.js",
    "TypeScript",
    "AWS",
    "Docker",
    "Kubernetes",
    "Supabase",
    "PostgreSQL",
    "AI agents",
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
    title: "Sherzod Musurmonov | Full-Stack Engineer in Tokyo",
    description:
      "Full-stack product engineering across web platforms, cloud architecture, and AI-enabled SaaS systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sherzod Musurmonov | Full-Stack Engineer in Tokyo",
    description:
      "Full-stack product engineering across web platforms, cloud architecture, and AI-enabled SaaS systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sherzod Musurmonov",
              alternateName: "シェルゾト・ムスルモノフ",
              jobTitle: "Full Stack Engineer",
              url: "https://sherdev.netlify.app",
              email: "sherzoddeveloper@gmail.com",
              knowsAbout: ["Laravel", "React", "Next.js", "TypeScript", "AWS", "Docker", "Supabase", "OpenAI API"],
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
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
