"use client";

import { useLang } from "@/context/LanguageContext";
import { skillsData } from "@/lib/data";

export function Skills() {
  const { t, lang } = useLang();

  return (
    <section id="skills" className="section-space">
      <div className="page-shell">
        <header className="mb-14 lg:mb-20">
          <p className="section-kicker">{t.skills.kicker}</p>
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </header>

        <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
          {skillsData.map((group, groupIndex) => (
            <section key={group.category.en} aria-labelledby={`skill-group-${groupIndex}`}>
              <div className="flex items-center justify-between border-b border-[var(--ink)] pb-4">
                <h3
                  id={`skill-group-${groupIndex}`}
                  className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink)]"
                >
                  {group.category[lang]}
                </h3>
                <span className="text-xs text-[var(--faint)]">0{groupIndex + 1}</span>
              </div>

              <dl>
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="grid gap-2 border-b border-[var(--line)] py-4 sm:grid-cols-[minmax(9rem,0.8fr)_1.2fr] sm:items-baseline"
                  >
                    <dt className="text-sm font-semibold text-[var(--ink)]">{skill.name}</dt>
                    <dd className="text-xs leading-5 text-[var(--muted)]">{skill.tags.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
