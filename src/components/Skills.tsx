"use client";

import { useLang } from "@/context/LanguageContext";
import { skillsData } from "@/lib/data";
import type { Lang } from "@/lib/i18n";

const levelColors = {
  daily: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  production: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  years3: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  learning: "text-amber-400 bg-amber-500/10 border-amber-500/20",
};

export function Skills() {
  const { t, lang } = useLang();

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>

          {/* Level legend — replaces the misleading 100% bars */}
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
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                {group.category[lang as Lang]}
              </h3>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-slate-200">
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
                          className="px-1.5 py-0.5 rounded text-xs text-slate-500 bg-slate-800/60"
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
