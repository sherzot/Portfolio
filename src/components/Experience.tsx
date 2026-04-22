"use client";

import { Briefcase, CheckCircle2, Calendar } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { experienceData } from "@/lib/data";
import type { Lang } from "@/lib/i18n";

const companyColors = [
  "from-violet-500/10 to-purple-500/10 border-violet-500/20 dark:from-violet-500/10 dark:to-purple-500/10 dark:border-violet-500/20",
  "from-blue-500/10 to-cyan-500/10 border-blue-500/20 dark:from-blue-500/10 dark:to-cyan-500/10 dark:border-blue-500/20",
  "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 dark:from-emerald-500/10 dark:to-teal-500/10 dark:border-emerald-500/20",
];

const iconColors = [
  "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20",
  "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20",
  "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20",
];

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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <div key={exp.company.en} className="relative sm:pl-16">
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-white dark:border-[#060b18] shadow-sm hidden sm:flex items-center justify-center ${
                  idx === 0 ? "bg-violet-500" : idx === 1 ? "bg-blue-500" : "bg-emerald-500"
                }`}>
                  <div className="w-2 h-2 rounded-full bg-white/80" />
                </div>

                <div className="card overflow-hidden">
                  {/* Gradient header strip */}
                  <div className={`h-1 w-full bg-gradient-to-r ${companyColors[idx]}`} />

                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${iconColors[idx]}`}>
                        <Briefcase size={20} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                              {exp.role[l]}
                            </h3>
                            <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm mt-0.5">
                              {exp.company[l]}
                            </p>
                            <p className="text-slate-400 text-xs mt-0.5 flex items-center gap-1">
                              ●
                              {exp.companyInfo[l]}
                            </p>
                          </div>
                          <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 dark:bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700/50 shrink-0">
                            <Calendar size={12} />
                            {exp.period[l]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3 mb-6">
                      {exp.achievements[l].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            size={15}
                            className="text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0"
                          />
                          <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
