'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations, translations } from '../data/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang] = useState<Language>('en');

  useEffect(() => {
    try {
      localStorage.removeItem('singathurai_lang');
    } catch {
      // Ignore storage errors
    }
    document.documentElement.lang = 'en';
  }, []);

  const setLang = (_newLang: Language) => {
    // English only
  };

  const toggleLang = () => {
    // English only
  };

  const t = translations['en'];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

