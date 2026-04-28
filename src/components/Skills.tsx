"use client";

import { useLang } from "@/context/LanguageContext";
import { skillsData } from "@/lib/data";
import type { Lang } from "@/lib/i18n";

const levelColors = {
  daily:      "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20",
  production: "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/20",
  years3:     "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/20",
  learning:   "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/20",
};

export function Skills() {
  const { t, lang } = useLang();

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>

          {/* Level legend */}
          <div className="flex flex-wrap gap-3 mt-6">
            {(["daily", "production", "years3", "learning"] as const).map((level) => (
              <span
                key={level}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${levelColors[level]}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {t.skills.levels[level]}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <div key={group.category.en} className="card p-6">
              <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                {group.category[lang as Lang]}
              </h3>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${levelColors[skill.level]}`}
                      >
                        {t.skills.levels[skill.level]}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 rounded text-xs
                                     text-slate-500 bg-slate-100 border border-slate-200
                                     dark:text-slate-500 dark:bg-slate-800/60 dark:border-transparent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
