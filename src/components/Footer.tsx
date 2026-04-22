"use client";

import { Github, Mail } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-slate-800/60 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white mb-1">
              Sherzod Musurmonov
            </p>
            <p className="text-xs text-slate-500">{t.footer.built_with}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:sherzodmusurmonov81@gmail.com"
              className="p-2.5 rounded-xl border border-slate-800 text-slate-500 hover:text-white hover:border-slate-700 transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://github.com/sherzot"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 text-slate-500 hover:text-white hover:border-slate-700 transition-all"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/40 text-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Sherzod Musurmonov. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
