"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { RESUME_FOLDER_URL } from "@/lib/resume";
import type { Lang } from "@/lib/i18n";

const langLabels: Record<Lang, string> = {
  ja: "日本語",
  en: "English",
  uz: "O'zbek",
};

export function Navigation() {
  const { t, lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about",      label: t.nav.about },
    { href: "#skills",     label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects",   label: t.nav.projects },
    { href: "#contact",    label: t.nav.contact },
  ];

  const langs: Lang[] = ["ja", "en", "uz"];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  const resumeLabel =
    lang === "ja" ? "履歴書" : lang === "en" ? "Resume" : "Rezyume";
  const resumeLabelFull =
    lang === "ja" ? "履歴書・職務経歴書" : lang === "en" ? "Resume / CV" : "Rezyume / CV";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#060b18]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/5 shadow-sm dark:shadow-xl dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="text-sm font-bold tracking-wider text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            SM<span className="text-blue-600 dark:text-blue-400">.</span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm rounded-lg transition-all duration-200
                           text-slate-600 hover:text-slate-900 hover:bg-slate-100
                           dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Resume — view only (no download attr) */}
            <a
              href={RESUME_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                         border border-blue-200 text-blue-700 hover:bg-blue-50 transition-all
                         dark:border-blue-500/30 dark:text-blue-400 dark:hover:bg-blue-500/10"
              title={resumeLabelFull}
            >
              <FileText size={13} />
              <span className="hidden lg:inline">{resumeLabel}</span>
            </a>

            {/* Language switcher */}
            <div className="flex items-center gap-0.5 bg-slate-100 dark:bg-white/5 rounded-xl p-1">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all duration-200 ${
                    lang === l
                      ? "bg-blue-600 dark:bg-blue-500 text-white shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  aria-label={`Switch to ${langLabels[l]}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme toggle: Sun = light mode'ga o'tish, Moon = dark mode'ga o'tish */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl transition-all duration-200
                         text-slate-500 hover:text-slate-900 hover:bg-slate-100
                         dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
              aria-label="Toggle light/dark mode"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-lg transition-colors
                         text-slate-500 hover:text-slate-900 hover:bg-slate-100
                         dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-white/5 px-4 pb-4
                        bg-white/98 dark:bg-[#060b18]/98 backdrop-blur-lg">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-4 py-3 text-sm rounded-lg transition-all
                         text-slate-700 hover:text-slate-900 hover:bg-slate-100
                         dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
          {/* Resume link in mobile */}
          <a
            href={RESUME_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-sm rounded-lg transition-all
                       text-blue-600 dark:text-blue-400 hover:bg-slate-100 dark:hover:bg-white/5"
          >
            <FileText size={14} />
            {resumeLabelFull}
          </a>
        </div>
      )}
    </nav>
  );
}
