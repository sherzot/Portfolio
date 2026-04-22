"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Lang } from "@/lib/i18n";

type TranslationValues = (typeof translations)[Lang];

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TranslationValues;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ja");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Lang | null;
    if (saved && ["ja", "en", "uz"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  const t = translations[lang] as TranslationValues;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
