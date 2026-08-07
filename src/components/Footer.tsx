"use client";

import { ArrowUpRight, Github, Mail } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { useLang } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-[var(--line)] py-9">
      <div className="page-shell flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <BrandMark className="h-9 w-9 text-[var(--ink)]" />
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--ink)]">SHER<span className="text-[var(--accent)]">.</span></p>
            <p className="mt-1 text-[11px] uppercase leading-5 tracking-[0.1em] text-[var(--faint)]">{t.footer.note}</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a href="mailto:sherzoddeveloper@gmail.com" className="text-link" aria-label="Email">
            <Mail size={15} />
            <ArrowUpRight size={12} />
          </a>
          <a href="https://github.com/sherzot" target="_blank" rel="noopener noreferrer" className="text-link" aria-label="GitHub">
            <Github size={15} />
            <ArrowUpRight size={12} />
          </a>
          <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--faint)]">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
