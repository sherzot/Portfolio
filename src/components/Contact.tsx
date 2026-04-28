"use client";

import { useState } from "react";
import { Mail, Send, Github, CheckCircle } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        {status === "sent" ? (
          <div className="card p-8 text-center">
            <CheckCircle size={48} className="text-emerald-500 dark:text-emerald-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {t.contact.send}!
            </h3>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              ← Back
            </button>
          </div>
        ) : (
          <div className="card p-6 sm:p-8">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-2.5 rounded-xl text-sm transition-all
                             bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400
                             dark:bg-slate-800/60 dark:border-slate-700/60 dark:text-slate-100 dark:placeholder-slate-500
                             dark:focus:ring-blue-500/40 dark:focus:border-blue-500/40"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-2.5 rounded-xl text-sm transition-all
                             bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400
                             dark:bg-slate-800/60 dark:border-slate-700/60 dark:text-slate-100 dark:placeholder-slate-500
                             dark:focus:ring-blue-500/40 dark:focus:border-blue-500/40"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl text-sm resize-none transition-all
                             bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400
                             dark:bg-slate-800/60 dark:border-slate-700/60 dark:text-slate-100 dark:placeholder-slate-500
                             dark:focus:ring-blue-500/40 dark:focus:border-blue-500/40"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={16} />
                    {t.contact.send}
                  </>
                )}
              </button>
            </form>

            {/* Direct contact alternatives */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              <p className="text-center text-xs text-slate-400 dark:text-slate-500 mb-4">
                {t.contact.or}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:sherzodmusurmonov81@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <Mail size={14} />
                  {t.contact.direct_email}
                </a>
                <a
                  href="https://github.com/sherzot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
