"use client";

import { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp, Clock, FlaskConical } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { commercialProjectsData, personalProjectsData } from "@/lib/data";
import type { Lang } from "@/lib/i18n";

function StarCard({
  project,
  lang,
  t,
}: {
  project: (typeof commercialProjectsData)[0];
  lang: Lang;
  t: {
    situation: string;
    task: string;
    action: string;
    result: string;
    github: string;
    demo: string;
  };
}) {
  const [expanded, setExpanded] = useState(false);
  const star = project.star[lang];
  const title =
    lang === "ja"
      ? project.title
      : lang === "en"
      ? project.titleEn
      : project.titleUz;

  return (
    <div className="card p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">{title}</h3>
        </div>
        <div className="flex gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-1.5 px-3 text-xs"
            >
              <Github size={14} />
              {t.github}
            </a>
          )}
        </div>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map((tech) => (
          <span key={tech} className="badge">{tech}</span>
        ))}
      </div>

      {/* STAR — collapsible */}
      <div>
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Situation */}
          <div className="subcard">
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
              {t.situation}
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{star.situation}</p>
          </div>

          {/* Role */}
          <div className="subcard">
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
              {t.task}
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{star.task}</p>
          </div>
        </div>

        {/* Action + Result — expandable */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-2 text-xs text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? "Collapse" : `${t.action} / ${t.result}`}
        </button>

        {expanded && (
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {/* Action */}
            <div className="subcard">
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                {t.action}
              </div>
              <ul className="space-y-1.5">
                {star.action.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0">→</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Result */}
            <div className="subcard">
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                {t.result}
              </div>
              <ul className="space-y-1.5">
                {star.result.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-emerald-700 dark:text-emerald-300">
                    <span className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PersonalCard({
  project,
  lang,
  t,
}: {
  project: (typeof personalProjectsData)[0];
  lang: Lang;
  t: {
    status_wip: string;
    status_design: string;
    github: string;
    demo: string;
  };
}) {
  return (
    <div className="card p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{project.title}</h3>
          <div className="flex items-center gap-2">
            {project.status === "wip" ? (
              <span className="inline-flex items-center gap-1.5 text-xs
                               text-amber-700 bg-amber-50 border border-amber-200
                               dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/20
                               px-2.5 py-1 rounded-full font-medium">
                <Clock size={10} />
                {t.status_wip}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs
                               text-slate-500 bg-slate-100 border border-slate-200
                               dark:text-slate-400 dark:bg-slate-700/40 dark:border-slate-700
                               px-2.5 py-1 rounded-full font-medium">
                <FlaskConical size={10} />
                {t.status_design}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border
                         border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300
                         dark:border-slate-700/60 dark:text-slate-400 dark:hover:text-white dark:hover:border-slate-600
                         transition-all"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border
                         border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300
                         dark:border-slate-700/60 dark:text-slate-400 dark:hover:text-white dark:hover:border-slate-600
                         transition-all"
              aria-label="Demo"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 whitespace-pre-line">
        {project.description[lang]}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span key={tech} className="badge">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const { t, lang } = useLang();
  const l = lang as Lang;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title">{t.projects.title}</h2>
        </div>

        {/* Commercial projects */}
        <div className="mb-14">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
            {t.projects.commercial_title}
            <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </h3>
          <div className="space-y-6">
            {commercialProjectsData.map((project) => (
              <StarCard
                key={project.id}
                project={project}
                lang={l}
                t={{
                  situation: t.projects.situation,
                  task: t.projects.task,
                  action: t.projects.action,
                  result: t.projects.result,
                  github: t.projects.github,
                  demo: t.projects.demo,
                }}
              />
            ))}
          </div>
        </div>

        {/* Personal projects */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
            {t.projects.personal_title}
            <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {personalProjectsData.map((project) => (
              <PersonalCard
                key={project.id}
                project={project}
                lang={l}
                t={{
                  status_wip: t.projects.status_wip,
                  status_design: t.projects.status_design,
                  github: t.projects.github,
                  demo: t.projects.demo,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
