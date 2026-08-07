"use client";

import { ArrowDownRight, ArrowUpRight, FileText } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { RESUME_FOLDER_URL } from "@/lib/resume";

function splitMetricLabel(label: string) {
  if (label.length <= 16 || !label.includes(" ")) {
    return [label];
  }

  const words = label.split(" ");
  let splitIndex = 1;
  let smallestDifference = Number.POSITIVE_INFINITY;

  for (let index = 1; index < words.length; index += 1) {
    const firstLine = words.slice(0, index).join(" ");
    const secondLine = words.slice(index).join(" ");
    const difference = Math.abs(firstLine.length - secondLine.length);

    if (difference < smallestDifference) {
      splitIndex = index;
      smallestDifference = difference;
    }
  }

  return [words.slice(0, splitIndex).join(" "), words.slice(splitIndex).join(" ")];
}

type MetricProps = {
  label: string;
  value: string;
  x: number;
  y: number;
};

function Metric({ label, value, x, y }: MetricProps) {
  const labelLines = splitMetricLabel(label);
  const valueY = labelLines.length === 1 ? 34 : 50;

  return (
    <g transform={`translate(${x} ${y})`}>
      <text
        x="0"
        y="0"
        fill="var(--faint)"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        letterSpacing="1"
      >
        {labelLines.map((line, index) => (
          <tspan key={line} x="0" y={index * 15}>
            {line}
          </tspan>
        ))}
      </text>
      <text
        x="0"
        y={valueY}
        fill="var(--ink)"
        textAnchor="middle"
        fontSize="28"
        fontWeight="700"
        letterSpacing="-0.8"
      >
        {value}
      </text>
    </g>
  );
}

function SystemVisual() {
  const { t } = useLang();
  const centerLines = t.hero.visual_center.split("\n");

  return (
    <div
      className="depth-float relative mx-auto aspect-square w-full max-w-[620px] lg:max-w-none"
      aria-hidden="true"
    >
      <svg viewBox="0 0 680 680" className="h-full w-full overflow-hidden">
        <defs>
          <linearGradient id="system-accent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--accent)" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        <circle cx="340" cy="340" r="250" fill="none" stroke="var(--line)" strokeWidth="1" />
        <circle cx="340" cy="340" r="178" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="4 8" />
        <path
          d="M126 212C218 50 482 50 574 212"
          fill="none"
          stroke="url(#system-accent)"
          strokeWidth="5"
          pathLength="1"
          className="system-line"
        />
        <path
          d="M574 468C482 630 218 630 126 468"
          fill="none"
          stroke="url(#system-accent)"
          strokeWidth="5"
          pathLength="1"
          className="system-line"
        />

        <g fill="var(--canvas)" stroke="var(--line)">
          <circle cx="340" cy="90" r="10" />
          <circle cx="590" cy="340" r="10" />
          <circle cx="340" cy="590" r="10" />
          <circle cx="90" cy="340" r="10" />
        </g>
        <g fill="var(--accent)">
          <circle cx="340" cy="90" r="4" />
          <circle cx="590" cy="340" r="4" />
          <circle cx="340" cy="590" r="4" />
          <circle cx="90" cy="340" r="4" />
        </g>

        <g className="hidden sm:block" fill="var(--faint)" fontSize="14" fontWeight="700" letterSpacing="2">
          <text x="340" y="58" textAnchor="middle">{t.hero.visual_product}</text>
          <text x="624" y="344" textAnchor="middle" transform="rotate(90 624 344)">{t.hero.visual_cloud}</text>
          <text x="340" y="630" textAnchor="middle">{t.hero.visual_operations}</text>
          <text x="56" y="344" textAnchor="middle" transform="rotate(-90 56 344)">{t.hero.visual_security}</text>
        </g>

        <circle cx="340" cy="340" r="112" fill="var(--ink)" />
        <g className="sm:hidden">
          <text x="340" y="317" fill="var(--canvas)" textAnchor="middle" fontSize="22" fontWeight="600" letterSpacing="2">
            {centerLines[0]}
          </text>
          <text x="340" y="365" fill="var(--canvas)" textAnchor="middle" fontSize="36" fontWeight="700" letterSpacing="-0.7">
            {centerLines[1] ?? ""}
          </text>
        </g>
        <g className="hidden sm:block">
          <text x="340" y="322" fill="var(--canvas)" textAnchor="middle" fontSize="16" fontWeight="600" letterSpacing="2">
            {centerLines[0]}
          </text>
          <text x="340" y="355" fill="var(--canvas)" textAnchor="middle" fontSize="30" fontWeight="700" letterSpacing="-0.7">
            {centerLines[1] ?? ""}
          </text>
          <text
            x="340"
            y="386"
            fill="var(--accent-inverse)"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            letterSpacing="1.6"
            textLength="160"
            lengthAdjust="spacingAndGlyphs"
          >
            FULL-STACK ENGINEER
          </text>
        </g>

        <g className="hidden sm:block">
          <Metric
            x={220}
            y={170}
            label={t.hero.metric_applications}
            value={t.hero.metric_applications_value}
          />
          <Metric
            x={220}
            y={480}
            label={t.hero.metric_migration}
            value={t.hero.metric_migration_value}
          />
          <Metric
            x={470}
            y={480}
            label={t.hero.metric_uptime}
            value={t.hero.metric_uptime_value}
          />
        </g>
      </svg>
    </div>
  );
}

export function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden border-b rule">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 left-[63%] hidden w-px bg-[var(--line)] lg:block" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-[var(--line)]" />
        <div className="absolute -right-[18rem] -top-[18rem] h-[42rem] w-[42rem] rounded-full border border-[var(--line)] opacity-60" />
      </div>

      <div className="hero-layout page-shell relative grid min-h-[100svh] items-start gap-0 pb-8 pt-24 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:pb-10 lg:pt-20">
        <div className="relative z-10 max-w-[760px] lg:pr-14">
          <p className="hero-reveal eyebrow mb-7 hidden items-center gap-3 sm:flex">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            {t.hero.availability}
          </p>

          <p className="hero-reveal hero-delay-1 mb-3 text-sm font-semibold tracking-[0.08em] text-[var(--accent)] sm:mb-5">
            {t.hero.name}
          </p>
          <h1 className="hero-reveal hero-delay-1 max-w-[660px] whitespace-pre-line text-[1.875rem] font-semibold leading-[1.2] tracking-[-0.035em] text-[var(--ink)] sm:text-[clamp(2.375rem,3.8vw,3.5rem)] sm:leading-[1.17] sm:tracking-[-0.045em]">
            {t.hero.title}
          </h1>

          <p className="hero-reveal hero-delay-2 mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:mt-7 sm:text-lg sm:leading-8">
            {t.hero.subtitle}
          </p>

          <div className="hero-reveal hero-delay-3 mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
            <a href="#projects" className="btn-primary">
              {t.hero.cta_projects}
              <ArrowDownRight size={17} />
            </a>
            <a href={RESUME_FOLDER_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FileText size={16} />
              {t.hero.cta_resume}
              <ArrowUpRight size={15} />
            </a>
          </div>

          <p className="hero-reveal hero-delay-3 mt-6 text-xs font-medium uppercase tracking-[0.16em] text-[var(--faint)] sm:mt-8">
            {t.hero.location}
          </p>
        </div>

        <div className="hero-system-visual hero-reveal hero-delay-2 relative mx-auto -mb-8 mt-0 w-[72vw] max-w-[280px] sm:-mb-12 sm:w-[78%] sm:max-w-[500px] md:w-[70%] lg:-mr-24 lg:mb-0 lg:mt-0 lg:w-[115%] lg:max-w-none">
          <SystemVisual />
        </div>
      </div>
    </section>
  );
}
