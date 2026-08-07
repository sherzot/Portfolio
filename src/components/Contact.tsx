"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Mail, Send } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

type FormStatus = "idle" | "sending" | "sent" | "error";

const fieldClassName =
  "w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 text-base text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--faint)] focus:border-[var(--accent)] focus:ring-0";

export function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    const form = event.currentTarget;
    const payload = new URLSearchParams();

    new FormData(form).forEach((value, key) => {
      if (typeof value === "string") payload.append(key, value);
    });

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 10_000);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error(`Contact form returned ${response.status}`);

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  return (
    <section id="contact" className="section-space">
      <div className="page-shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="section-kicker">{t.contact.kicker}</p>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="section-subtitle">{t.contact.subtitle}</p>

            <div className="mt-10 border-t border-[var(--line)] pt-6">
              <a href="mailto:sherzoddeveloper@gmail.com" className="group inline-flex max-w-full items-center gap-2 text-sm font-semibold text-[var(--ink)] sm:gap-3 sm:text-base">
                <Mail size={17} className="shrink-0 text-[var(--accent)]" />
                <span className="break-all">sherzoddeveloper@gmail.com</span>
                <ArrowUpRight size={15} className="hidden shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block" />
              </a>
              <p className="mt-3 text-xs leading-5 text-[var(--faint)]">{t.contact.response_time}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {status === "sent" ? (
              <div className="flex min-h-[360px] flex-col justify-center border-y border-[var(--line)] py-12" role="status" aria-live="polite">
                <Check size={34} className="mb-6 text-[var(--accent)]" />
                <h3 className="text-3xl font-semibold tracking-[-0.035em] text-[var(--ink)]">{t.contact.sent_title}</h3>
                <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--muted)]">{t.contact.sent_body}</p>
                <button type="button" onClick={() => setStatus("idle")} className="text-link mt-8 self-start">
                  {t.contact.back}
                  <ArrowUpRight size={14} />
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="border-t border-[var(--line)]"
                aria-busy={status === "sending"}
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid gap-7 border-b border-[var(--line)] py-7 sm:grid-cols-2 sm:gap-10">
                  <div>
                    <label htmlFor="name" className="eyebrow block">{t.contact.name}</label>
                    <input id="name" name="name" type="text" required autoComplete="name" className={fieldClassName} />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow block">{t.contact.email}</label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={fieldClassName} />
                  </div>
                </div>

                <div className="border-b border-[var(--line)] py-7">
                  <label htmlFor="message" className="eyebrow block">{t.contact.message}</label>
                  <textarea id="message" name="message" required rows={6} className={`${fieldClassName} resize-none`} />
                </div>

                <div className="flex flex-col items-start justify-between gap-5 pt-7 sm:flex-row sm:items-center">
                  <div aria-live="polite" aria-atomic="true">
                    {status === "sending" && <p className="sr-only">{t.contact.sending}</p>}
                    {status === "error" && (
                      <p className="max-w-md text-sm leading-6 text-[var(--accent)]" role="alert">{t.contact.error}</p>
                    )}
                  </div>
                  <button type="submit" disabled={status === "sending"} className="btn-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-60">
                    <Send size={16} />
                    {status === "sending" ? t.contact.sending : t.contact.send}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
