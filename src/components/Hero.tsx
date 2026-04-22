"use client";

import { ArrowDown, Github, Mail, MapPin, Sparkles } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLang();

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full pt-24 pb-16">
        {/* Status badge */}
        <div className="animate-fade-in mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t.hero.available}
          </span>
        </div>

        {/* Main heading */}
        <div className="animate-slide-up animate-delay-100">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4">
            {t.hero.greeting}
          </h1>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xl sm:text-2xl md:text-3xl font-medium gradient-text">
              {t.hero.title}
            </span>
          </div>
        </div>

        {/* Subtitle — the differentiated pitch */}
        <div className="animate-slide-up animate-delay-200 max-w-2xl">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 border-l-2 border-blue-500/50 pl-4">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Meta info */}
        <div className="animate-slide-up animate-delay-300 flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-10">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-blue-400" />
            {t.hero.location}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-600" />
          <span className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-blue-400" />
            {t.hero.languages}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="animate-slide-up animate-delay-400 flex flex-wrap gap-3">
          <button onClick={scrollToProjects} className="btn-primary">
            <ArrowDown size={16} />
            {t.hero.cta_projects}
          </button>
          <button onClick={scrollToContact} className="btn-secondary">
            <Mail size={16} />
            {t.hero.cta_contact}
          </button>
          <a
            href="https://github.com/sherzot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ArrowDown size={20} className="text-slate-400" />
      </div>
    </section>
  );
}
