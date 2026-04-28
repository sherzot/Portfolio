"use client";

import { BookOpen, Target } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const aboutContent = {
  ja: {
    body: "ウズベキスタン出身のフルスタックエンジニアです。サマルカンドの政府支援ITセンターでバックエンド・インフラリーダーとして自社プロダクト開発に従事（2021〜2022年）、その後来日。リス株式会社・株式会社renueにて約2年間、求人マッチングシステムや基幹システムの要件定義〜設計〜開発〜テスト〜本番運用まで一貫して担当。プライベートでもAI CRM・求人マッチング・業務自動化システムを設計・構築中です。",
    vision:
      "エンジニアとして培った技術力を基盤に、30歳までにPL/PMとしてプロダクト全体を牽引できるポジションを目指しています。現在は自社開発のSaaSプロダクトで設計・実装の両面を経験中です。",
    learning: ["Kubernetes（進捗 30%）", "RAG / MCP パターン", "Go言語（マイクロサービス）"],
    stats: [
      { label: "3+ years", sub: "総実務経験" },
      { label: "3 languages", sub: "JP / EN / UZ" },
      { label: "99.9% SLA", sub: "本番環境で達成" },
      { label: "CI/CD", sub: "GitHub Actions" },
    ],
  },
  en: {
    body: "Full Stack Engineer from Uzbekistan. Started my career as Backend & Infrastructure Lead at a government-supported IT center in Samarkand (2021–2022), building in-house products end-to-end. Then moved to Japan and spent ~2 years at Risu Co. and renue Inc., owning the full cycle — requirements, system design, development, testing, and production operations. Independently building AI systems (CRM, job matching, automation) on the side.",
    vision:
      "Building on my engineering foundation, I aim to grow into a PL/PM role by age 30 — leading product development end-to-end. Currently deepening both design and implementation experience through independent SaaS projects.",
    learning: ["Kubernetes (30% progress)", "RAG / MCP patterns", "Go (microservices)"],
    stats: [
      { label: "3+ years", sub: "Total exp." },
      { label: "3 languages", sub: "JP / EN / UZ" },
      { label: "99.9% SLA", sub: "Achieved in prod" },
      { label: "CI/CD", sub: "GitHub Actions" },
    ],
  },
  uz: {
    body: "O'zbekistondan Full Stack dasturchi. Samarqanddagi hukumat qo'llab-quvvatlagan IT markazida Backend va Infra rahbari sifatida o'z mahsulotlarini End-to-End qurdim (2021-2022). Keyin Yaponiyaga ko'chib, Risu va renue kompaniyalarida ~2 yil talablardan, tizim dizayni, ishlanma, test va ishlab chiqarishgacha to'liq javobgar bo'ldim. Shaxsiy loyihalarda AI CRM, ish qidirish va biznes avtomatizatsiya tizimlari yaratmoqdaman.",
    vision:
      "30 yoshgacha PL/PM sifatida mahsulot ishlanmasini to'liq boshqarish maqsadim bor. Hozir mustaqil SaaS loyihalarda dizayn va implementatsiya tajribasini oshirmoqdaman.",
    learning: ["Kubernetes (30% tayyorlik)", "RAG / MCP naqshlari", "Go tili (mikroservislar)"],
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
