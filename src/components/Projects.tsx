"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { commercialProjectsData, personalProjectsData } from "@/lib/data";
import type { Lang } from "@/lib/i18n";

const visualMetrics: Record<
  string,
  { primary: string; primaryLabel: Record<Lang, string>; secondary: string; secondaryLabel: Record<Lang, string> }
> = {
  "shigoto-navi": {
    primary: "+300%",
    primaryLabel: { ja: "応募数", en: "Applications", uz: "Arizalar" },
    secondary: "99.9%",
    secondaryLabel: { ja: "稼働率", en: "Uptime", uz: "Barqarorlik" },
  },
  "legacy-modernization": {
    primary: "−30%",
    primaryLabel: { ja: "操作時間", en: "Operation time", uz: "Operatsion vaqt" },
    secondary: "100%",
    secondaryLabel: { ja: "データ整合性", en: "Data integrity", uz: "Data yaxlitligi" },
  },
  "vocational-skills-center": {
    primary: "5,000",
    primaryLabel: { ja: "月間アクセス", en: "Monthly visits", uz: "Oylik tashrif" },
    secondary: "×2",
    secondaryLabel: { ja: "問い合わせ", en: "Inquiries", uz: "So‘rovlar" },
  },
};

function CaseStudyVisual({ projectId, lang }: { projectId: string; lang: Lang }) {
  const { t } = useLang();
  const metric = visualMetrics[projectId];
  const isMigration = projectId === "legacy-modernization";
  const isPlatform = projectId === "vocational-skills-center";
  const caseLabel = isPlatform ? "skills center" : projectId.replaceAll("-", " ");

  return (
    <div className="group/visual relative aspect-[4/3] overflow-hidden bg-[var(--ink)] text-[var(--canvas)]">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(var(--canvas) 1px, transparent 1px), linear-gradient(90deg, var(--canvas) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-[var(--inverse-line)] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] sm:px-7">
        <span>Case / {caseLabel}</span>
        <span className="shrink-0 text-[var(--accent-inverse)]">{t.projects.production}</span>
      </div>

      <div className="absolute inset-x-5 bottom-5 top-16 sm:inset-x-7 sm:bottom-7 sm:top-20">
        <svg viewBox="0 0 520 300" className="h-full w-full" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--inverse-structure)]">
            {isMigration ? (
              <>
                <rect x="26" y="92" width="150" height="112" rx="3" />
                <rect x="344" y="92" width="150" height="112" rx="3" />
                <path d="M176 148H344" stroke="var(--accent-inverse)" strokeWidth="3" />
                <path d="M318 134L344 148L318 162" stroke="var(--accent-inverse)" strokeWidth="3" />
                <path d="M64 124H138M64 148H122M64 172H145M382 124H456M382 148H438M382 172H462" />
              </>
            ) : isPlatform ? (
              <>
                <circle cx="260" cy="148" r="48" stroke="var(--accent-inverse)" strokeWidth="3" />
                <circle cx="90" cy="70" r="28" />
                <circle cx="430" cy="70" r="28" />
                <circle cx="90" cy="226" r="28" />
                <circle cx="430" cy="226" r="28" />
                <path d="M114 84L218 128M406 84L302 128M114 212L218 168M406 212L302 168" />
              </>
            ) : (
              <>
                <path d="M28 228C110 220 112 180 188 178S272 106 348 112S424 58 492 52" stroke="var(--accent-inverse)" strokeWidth="4" />
                <path d="M28 248H492M28 248V44" />
                <circle cx="188" cy="178" r="7" fill="var(--accent-inverse)" stroke="none" />
                <circle cx="348" cy="112" r="7" fill="var(--accent-inverse)" stroke="none" />
                <circle cx="492" cy="52" r="7" fill="var(--accent-inverse)" stroke="none" />
              </>
            )}
          </g>
        </svg>
      </div>

      <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--inverse-text-faint)]">
          {metric.primaryLabel[lang]}
        </p>
        <p className="mt-1 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{metric.primary}</p>
      </div>
      <div className="absolute bottom-5 right-5 text-right sm:bottom-7 sm:right-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--inverse-text-faint)]">
          {metric.secondaryLabel[lang]}
        </p>
        <p className="mt-1 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{metric.secondary}</p>
      </div>
    </div>
  );
}

function CaseStudy({
  project,
  lang,
  index,
}: {
  project: (typeof commercialProjectsData)[number];
  lang: Lang;
  index: number;
}) {
  const { t } = useLang();
  const star = project.star[lang];
  const title = lang === "ja" ? project.title : lang === "en" ? project.titleEn : project.titleUz;

  return (
    <article className="grid gap-8 border-t border-[var(--line)] py-12 lg:grid-cols-12 lg:gap-12 lg:py-20">
      <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <CaseStudyVisual projectId={project.id} lang={lang} />
      </div>

      <div className={`flex flex-col justify-center lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <div className="mb-7 flex items-center justify-between">
          <span className="eyebrow">0{index + 1} / {t.projects.commercial_title}</span>
        </div>
        <h3 className="max-w-xl text-2xl font-semibold leading-[1.28] tracking-[-0.025em] text-[var(--ink)] sm:text-[1.875rem] sm:leading-[1.24]">
          {title}
        </h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">{t.projects.problem}</p>
            <p className="text-sm leading-6 text-[var(--muted)]">{star.situation}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">{t.projects.role}</p>
            <p className="text-sm leading-6 text-[var(--muted)]">{star.task}</p>
          </div>
        </div>

        <details className="group mt-8 border-y border-[var(--line)]">
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-semibold text-[var(--ink)] marker:content-none">
            <span className="group-open:hidden">{t.projects.details}</span>
            <span className="hidden group-open:inline">{t.projects.close}</span>
            <span className="text-xl font-light text-[var(--accent)] transition-transform group-open:rotate-45">+</span>
          </summary>
          <div className="grid gap-7 pb-7 pt-2 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">{t.projects.approach}</p>
              <ul className="space-y-2.5">
                {star.action.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">{t.projects.result}</p>
              <ul className="space-y-2.5">
                {star.result.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-medium leading-6 text-[var(--ink)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </details>

        <p className="mt-5 text-[11px] font-medium uppercase leading-5 tracking-[0.12em] text-[var(--faint)]">
          {project.stack.join("  /  ")}
        </p>
      </div>
    </article>
  );
}

export function Projects() {
  const { t, lang } = useLang();
  const labOrder = ["ai-concierge", "jobmatcher", "trustflow-crm"];
  const selectedLabs = labOrder.flatMap((id) => {
    const project = personalProjectsData.find((item) => item.id === id);
    return project ? [project] : [];
  });

  return (
    <section id="projects" className="section-space">
      <div className="page-shell">
        <header className="mb-8 lg:mb-12">
          <p className="section-kicker">{t.projects.kicker}</p>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </header>

        <div>
          {commercialProjectsData.map((project, index) => (
            <CaseStudy key={project.id} project={project} lang={lang} index={index} />
          ))}
        </div>

        <div className="border-t border-[var(--line)] pt-14 lg:pt-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="section-kicker">Labs</p>
              <h3 className="text-[1.625rem] font-semibold leading-[1.24] tracking-[-0.03em] text-[var(--ink)]">
                {t.projects.labs_title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
                {t.projects.labs_subtitle}
              </p>
            </div>
            <div className="lg:col-span-8">
              {selectedLabs.map((project) => {
                const isFlagship = project.id === "ai-concierge";
                const showFullStack = isFlagship || project.id === "jobmatcher";

                return (
                  <article
                    key={project.id}
                    className={`group border-b border-[var(--line)] py-7 ${
                      isFlagship ? "border-t-2 border-t-[var(--ink)] py-8" : ""
                    }`}
                  >
                    <div className="relative">
                      <div className="min-w-0">
                        <div className="mb-3 flex flex-wrap items-center gap-3 pr-20 sm:pr-32">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                          <span className="eyebrow">
                            {isFlagship ? t.projects.flagship : t.projects.active}
                          </span>
                        </div>
                        <h4
                          className={`pr-20 font-semibold tracking-[-0.02em] text-[var(--ink)] sm:pr-32 ${
                            isFlagship
                              ? "text-[1.375rem] leading-[1.3] sm:text-[1.625rem] sm:leading-[1.25]"
                              : "text-xl leading-[1.3] sm:text-[1.375rem]"
                          }`}
                        >
                          {project.title}
                        </h4>
                        <p className="mt-3 max-w-2xl whitespace-pre-line text-sm leading-6 text-[var(--muted)] sm:text-[0.9375rem] sm:leading-7">
                          {project.description[lang]}
                        </p>
                        <p className="mt-4 break-words text-[11px] font-semibold uppercase leading-5 tracking-[0.1em] text-[var(--faint)]">
                          {project.stack.slice(0, showFullStack ? 8 : 6).join(" / ")}
                        </p>
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`absolute right-0 top-1 inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--line)] text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] ${
                            isFlagship ? "px-3 py-2.5 sm:px-4" : "p-3"
                          }`}
                          aria-label={`${project.title} — ${t.projects.source}`}
                        >
                          <Github size={16} />
                          {isFlagship && (
                            <span className="hidden text-xs font-semibold sm:inline">GitHub</span>
                          )}
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
