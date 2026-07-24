"use client";

import { BookOpen, Target } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const aboutContent = {
  ja: {
    body: "株式会社Trabox（Visional Group）のFinto金融サービス事業でFull-Stack Engineerとして働いています。フロントエンドからバックエンド、クラウドインフラ、セキュリティ、production operationまで、プロダクトを長く運用できる形にすることを重視しています。",
    vision:
      "フルスタック開発とシステム設計の経験を基盤に、技術とプロダクトの両面からチームをリードできるProject Leader / Project Managerを目指しています。hands-onの技術力を保ちながら、要件・設計・運用をつなぐ力を伸ばしています。",
    learning: ["AI agent / MCP patterns", "Multi-tenant SaaS design", "Go and cloud architecture"],
    stats: [
      { label: "3+ years", sub: "総実務経験" },
      { label: "3 languages", sub: "JP / EN / UZ" },
      { label: "99.9% SLA", sub: "本番環境で達成" },
      { label: "CI/CD", sub: "GitHub Actions" },
    ],
  },
  en: {
    body: "I work as a Full-Stack Engineer in the Finto financial services business at Trabox Co., Ltd. (Visional Group). My scope spans frontend, backend, cloud infrastructure, security, and production operations, with a focus on systems that remain maintainable after launch.",
    vision:
      "Building on full-stack development and system design experience, I aim to grow into a Project Leader / Project Manager who can lead from both the technical and product sides while keeping strong hands-on engineering ability.",
    learning: ["AI agent / MCP patterns", "Multi-tenant SaaS design", "Go and cloud architecture"],
    stats: [
      { label: "3+ years", sub: "Total exp." },
      { label: "3 languages", sub: "JP / EN / UZ" },
      { label: "99.9% SLA", sub: "Achieved in prod" },
      { label: "CI/CD", sub: "GitHub Actions" },
    ],
  },
  uz: {
    body: "Trabox Co., Ltd. (Visional Group) tarkibidagi Finto moliyaviy xizmatlar biznesida Full-Stack Engineer bo‘lib ishlayman. Frontend, backend, cloud infrastructure, security va production operation yo‘nalishlarini birlashtirib, maintainable va ishonchli tizimlar ustida ishlayman.",
    vision:
      "Full-stack development va system design tajribamga tayangan holda, texnik va product tomonlarini birlashtirib jamoani boshqara oladigan Project Leader / Project Manager bo‘lishni maqsad qilganman. Shu bilan birga hands-on texnik kompetensiyani saqlayman.",
    learning: ["AI agent / MCP patterns", "Multi-tenant SaaS design", "Go va cloud architecture"],
    stats: [
      { label: "3+ yil", sub: "Jami tajriba" },
      { label: "3 til", sub: "JP / EN / UZ" },
      { label: "99.9% SLA", sub: "Ishlab chiqarishda" },
      { label: "CI/CD", sub: "GitHub Actions" },
    ],
  },
};

export function About() {
  const { t, lang } = useLang();
  const content = aboutContent[lang as keyof typeof aboutContent];

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="section-title mb-4">{t.about.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base mb-8">
              {content.body}
            </p>

            {/* Career Vision */}
            <div className="card p-6 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center">
                  <Target size={16} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                  {t.about.vision_title}
                </h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {content.vision}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {/* Learning */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center">
                  <BookOpen size={16} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                  {t.about.learning_title}
                </h3>
              </div>
              <ul className="space-y-3">
                {content.learning.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {content.stats.map((stat, i) => (
                <div key={i} className="card p-4 text-center">
                  <div className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
