import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react';
import type { Language, Region, Translations } from './types';
import type { RegionalData } from './regions';
import { pt } from './pt';
import { en } from './en';
import { es } from './es';
import { getRegionalData } from './regions';

const translationsMap: Record<Language, Translations> = { pt, en, es };

function detectRegion(): Region {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const brTimezones = [
      'America/Sao_Paulo', 'America/Fortaleza', 'America/Recife',
      'America/Bahia', 'America/Belem', 'America/Manaus',
      'America/Cuiaba', 'America/Porto_Velho', 'America/Boa_Vista',
      'America/Campo_Grande', 'America/Maceio', 'America/Araguaina',
      'America/Noronha', 'America/Rio_Branco',
    ];
    if (brTimezones.some((z) => tz.startsWith(z))) return 'br';
  } catch {}
  return 'us';
}

function detectLanguage(): Language {
  try {
    const navLang = navigator.language?.toLowerCase() || '';
    if (navLang.startsWith('pt')) return 'pt';
    if (navLang.startsWith('es')) return 'es';
  } catch {}
  return 'en';
}

interface LanguageContextValue {
  language: Language;
  region: Region;
  t: Translations;
  r: RegionalData;
  setLanguage: (lang: Language) => void;
  setRegion: (region: Region) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [region, setReg] = useState<Region>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('region') as Region;
      if (saved === 'br' || saved === 'us') return saved;
      return detectRegion();
    }
    return 'us';
  });

  const [language, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lang') as Language;
      if (saved && translationsMap[saved]) return saved;
      return detectLanguage();
    }
    return 'en';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLang(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.lang = translationsMap[lang].htmlLang;
  }, []);

  const setRegion = useCallback((reg: Region) => {
    setReg(reg);
    localStorage.setItem('region', reg);
  }, []);

  const r = useMemo(() => getRegionalData(language, region), [language, region]);

  const value: LanguageContextValue = {
    language,
    region,
    t: translationsMap[language],
    r,
    setLanguage,
    setRegion,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider');
  return ctx;
}
