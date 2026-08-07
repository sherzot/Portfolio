"use client";

import { useLang } from "@/context/LanguageContext";
import { experienceData } from "@/lib/data";

export function Experience() {
  const { t, lang } = useLang();

  return (
    <section id="experience" className="section-space border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="page-shell">
        <header className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="section-kicker">{t.experience.kicker}</p>
            <h2 className="section-title">{t.experience.title}</h2>
          </div>
          <p className="text-sm leading-6 text-[var(--muted)] lg:col-span-4 lg:pb-1">
            {t.experience.subtitle}
          </p>
        </header>

        <ol className="border-t border-[var(--line)]">
          {experienceData.map((experience, index) => (
            <li
              key={`${experience.company.en}-${experience.period.en}`}
              className="grid gap-6 border-b border-[var(--line)] py-10 md:grid-cols-12 md:gap-8 lg:py-12"
            >
              <div className="md:col-span-3">
                <p className="eyebrow">0{index + 1}</p>
                <p className="mt-3 text-sm font-semibold text-[var(--ink)]">{experience.period[lang]}</p>
              </div>

              <div className="min-w-0 pr-2 md:col-span-4 xl:pr-0">
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-[var(--ink)]">
                  {experience.role[lang]}
                </h3>
                <p className="mt-3 text-sm font-semibold text-[var(--accent)]">{experience.company[lang]}</p>
                <p className="mt-2 max-w-sm break-all text-xs leading-5 text-[var(--faint)]">
                  {experience.companyInfo[lang]}
                </p>
                <p className="mt-5 break-words text-[11px] font-semibold uppercase leading-5 tracking-[0.1em] text-[var(--faint)]">
                  {experience.stack.join(" / ")}
                </p>
              </div>

              <div className="md:col-span-5">
                <ul className="space-y-4">
                  {experience.achievements[lang].map((achievement) => (
                    <li key={achievement} className="grid grid-cols-[12px_1fr] gap-3 text-sm leading-6 text-[var(--muted)]">
                      <span className="mt-2.5 h-px w-3 bg-[var(--accent)]" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
