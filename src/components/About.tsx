"use client";

import { BookOpen, Target, Zap } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: About text */}
          <div>
            <h2 className="section-title mb-4">{t.about.title}</h2>
            <p className="text-slate-300 leading-relaxed text-base mb-8">
              {t.about.body}
            </p>

            {/* Career Vision */}
            <div className="card p-6 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Target size={16} className="text-blue-400" />
                </div>
                <h3 className="font-semibold text-white text-sm">
                  {t.about.vision_title}
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.about.vision_body}
              </p>
            </div>
          </div>

          {/* Right: Currently Learning */}
          <div className="space-y-4">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <BookOpen size={16} className="text-indigo-400" />
                </div>
                <h3 className="font-semibold text-white text-sm">
                  {t.about.learning_title}
                </h3>
              </div>
              <ul className="space-y-3">
                {t.about.learning.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick stats — without vanity numbers */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, label: "3+ years", sublabel: "Production exp." },
                { icon: Zap, label: "3 languages", sublabel: "JP / EN / UZ" },
                { icon: Zap, label: "99.9% SLA", sublabel: "Achieved in prod" },
                { icon: Zap, label: "CI/CD", sublabel: "GitHub Actions" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="card p-4 text-center"
                >
                  <div className="text-lg font-bold text-white mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
