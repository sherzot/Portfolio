"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { useLang } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { RESUME_FOLDER_URL } from "@/lib/resume";
import type { Lang } from "@/lib/i18n";

const languages: Lang[] = ["ja", "en", "uz"];

export function Navigation() {
  const { t, lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav
      aria-label={t.nav.primary}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[var(--line)] bg-[var(--canvas-glass)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="page-shell flex h-[68px] items-center justify-between">
        <a
          href="#hero"
          className="group inline-flex items-center gap-2.5"
          aria-label={t.nav.home}
        >
          <BrandMark className="h-9 w-9 text-[var(--ink)] transition-transform duration-300 group-hover:-rotate-3" />
          <span className="text-xs font-bold tracking-[0.2em] text-[var(--ink)]">
            SHER<span className="text-[var(--accent)]">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center sm:flex" role="group" aria-label={t.nav.language}>
            {languages.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLang(item)}
                aria-pressed={lang === item}
                className={`min-w-9 px-2 py-2 text-[11px] font-bold uppercase tracking-[0.08em] transition-colors ${
                  lang === item ? "text-[var(--accent)]" : "text-[var(--faint)] hover:text-[var(--ink)]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <a
            href={RESUME_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 text-xs font-semibold text-[var(--ink)] transition-colors hover:text-[var(--accent)] md:inline-flex"
          >
            {t.nav.resume}
            <ArrowUpRight size={13} />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full p-2.5 text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--ink)]"
            aria-label={t.nav.theme}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-full p-2.5 text-[var(--ink)] lg:hidden"
            aria-label={isOpen ? t.nav.menu_close : t.nav.menu_open}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-[var(--line)] bg-[var(--canvas)] px-5 pb-6 pt-3 lg:hidden">
          <div className="mx-auto max-w-[1280px]">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-between border-b border-[var(--line)] py-4 text-left text-lg font-semibold text-[var(--ink)]"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[var(--faint)]">0{index + 1}</span>
              </a>
            ))}
            <div className="mt-5 flex items-center gap-2 sm:hidden" role="group" aria-label={t.nav.language}>
              {languages.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLang(item)}
                  aria-pressed={lang === item}
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase ${
                    lang === item
                      ? "border-[var(--accent)] text-[var(--accent)]"
                      : "border-[var(--line)] text-[var(--muted)]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
