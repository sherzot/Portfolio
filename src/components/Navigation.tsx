"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import type { Lang } from "@/lib/i18n";

const langLabels: Record<Lang, string> = {
  ja: "日本語",
  en: "English",
  uz: "O'zbek",
};

export function Navigation() {
  const { t, lang, setLang } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  const langs: Lang[] = ["ja", "en", "uz"];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060b18]/95 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="text-sm font-bold text-white tracking-wider hover:text-blue-400 transition-colors"
          >
            SM
            <span className="text-blue-400">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Lang Switcher + Mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="flex items-center gap-0.5 bg-white/5 rounded-xl p-1">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all duration-200 ${
                    lang === l
                      ? "bg-blue-500 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                  aria-label={`Switch to ${langLabels[l]}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#060b18]/98 backdrop-blur-lg border-b border-white/5 px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
