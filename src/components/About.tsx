"use client";

import { useLang } from "@/context/LanguageContext";

const aboutContent = {
  ja: {
    body:
      "良いプロダクトは、コードだけで完成しないと考えています。利用者の業務、変更しやすい設計、安全な運用までを一つのシステムとして捉え、複雑さを整理して実装へつなげることを大切にしています。",
    vision:
      "hands-onの技術力を保ちながら、要件・設計・開発・運用を横断してチームをリードできるProject Leader / Project Managerを目指しています。",
    learning: ["AI agent / MCP patterns", "Multi-tenant SaaS design", "Go / cloud architecture"],
    facts: [
      { value: "3+", label: "プロフェッショナル開発経験" },
      { value: "3", label: "日本語・英語・ウズベク語" },
      { value: "E2E", label: "要件定義から運用まで" },
    ],
  },
  en: {
    body:
      "I believe a good product is more than its code. I treat user workflows, adaptable architecture, secure delivery, and long-term operations as one system—then turn that complexity into clear engineering decisions.",
    vision:
      "My next step is leading teams across requirements, design, delivery, and operations as a Project Leader / Project Manager while remaining a strong hands-on engineer.",
    learning: ["AI agent / MCP patterns", "Multi-tenant SaaS design", "Go / cloud architecture"],
    facts: [
      { value: "3+", label: "Years in professional engineering" },
      { value: "3", label: "Japanese / English / Uzbek" },
      { value: "E2E", label: "Requirements through operations" },
    ],
  },
  uz: {
    body:
      "Yaxshi mahsulot faqat koddan iborat emas. Foydalanuvchi jarayonlari, o‘zgarishga mos arxitektura, xavfsiz yetkazib berish va uzoq muddatli ekspluatatsiyani yagona tizim sifatida ko‘rib, murakkablikni aniq texnik qarorlarga aylantiraman.",
    vision:
      "Amaliy texnik ko‘nikmalarimni saqlagan holda, talablar, dizayn, ishlab chiqish va ekspluatatsiya bo‘ylab jamoani boshqara oladigan Project Leader / Project Manager bo‘lish — keyingi maqsadim.",
    learning: ["AI agent / MCP patterns", "Multi-tenant SaaS design", "Go / cloud architecture"],
    facts: [
      { value: "3+", label: "Professional muhandislik tajribasi" },
      { value: "3", label: "Yapon, ingliz va o‘zbek tillari" },
      { value: "E2E", label: "Talabdan ekspluatatsiyagacha" },
    ],
  },
} as const;

export function About() {
  const { t, lang } = useLang();
  const content = aboutContent[lang];

  return (
    <section id="about" className="section-space border-y border-[var(--line)] bg-[var(--ink)] text-[var(--canvas)]">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="section-kicker !text-[var(--accent-inverse)]">{t.about.kicker}</p>
            <h2 className="section-title !text-[var(--canvas)]">
              {t.about.title}
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--inverse-text-soft)] sm:text-lg">
              {content.body}
            </p>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5">
            <div className="border-t border-[var(--inverse-line)] pt-6">
              <p className="eyebrow !text-[var(--inverse-text-faint)]">{t.about.vision_title}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--inverse-text-soft)]">{content.vision}</p>
            </div>
            <div className="mt-8 border-t border-[var(--inverse-line)] pt-6">
              <p className="eyebrow !text-[var(--inverse-text-faint)]">{t.about.learning_title}</p>
              <ul className="mt-4 space-y-3">
                {content.learning.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--inverse-text-soft)]">
                    <span className="h-px w-5 bg-[var(--accent-inverse)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid border-t border-[var(--inverse-line)] sm:grid-cols-3 lg:mt-24">
          {content.facts.map((fact) => (
            <div key={fact.label} className="border-b border-[var(--inverse-line)] py-7 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0">
              <dt className="text-4xl font-semibold tracking-[-0.04em] text-[var(--canvas)]">{fact.value}</dt>
              <dd className="mt-2 text-xs uppercase leading-5 tracking-[0.12em] text-[var(--inverse-text-faint)]">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
