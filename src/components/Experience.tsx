"use client";

import { Briefcase, CheckCircle2, Calendar } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { experienceData } from "@/lib/data";
import type { Lang } from "@/lib/i18n";

export function Experience() {
  const { t, lang } = useLang();
  const l = lang as Lang;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
        </div>

        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div key={exp.company.en} className="card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Briefcase size={20} className="text-blue-400" />
                </div>

                {/* Header info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {exp.role[l]}
                      </h3>
                      <p className="text-slate-400 text-sm mt-0.5">
                        {exp.company[l]}
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-700/50 shrink-0">
                      <Calendar size={12} />
                      {exp.period[l]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-3 mb-6">
                {exp.achievements[l].map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 mt-0.5 shrink-0"
                    />
                    <span className="text-slate-300 text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
