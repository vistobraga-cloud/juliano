import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Syringe, Globe } from 'lucide-react';
import { useTranslation, type Language } from '@/lib/i18n';

interface NavbarProps {
  onOpenDialog: () => void;
}

const LANGS: { code: Language; flag: string }[] = [
  { code: 'pt', flag: 'PT' },
  { code: 'en', flag: 'EN' },
  { code: 'es', flag: 'ES' },
];

const REGIONS = [
  { code: 'br' as const, flag: '🇧🇷' },
  { code: 'us' as const, flag: '🇺🇸' },
];

export function Navbar({ onOpenDialog }: NavbarProps) {
  const { t, r, language, region, setLanguage, setRegion } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const NAV_LINKS = [
    { label: t.nav.benefits, id: 'beneficios' },
    { label: t.nav.howItWorks, id: 'como-funciona' },
    { label: t.nav.dosages, id: 'dosagens' },
    { label: t.nav.testimonials, id: 'depoimentos' },
    { label: t.nav.pricing, id: 'precos' },
    { label: t.nav.faq, id: 'faq' },
  ];

  return (
    <nav
      className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Syringe className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              {r.brandName}
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center rounded-lg overflow-hidden border border-white/20">
              {REGIONS.map(({ code, flag }) => (
                <button
                  key={code}
                  onClick={() => setRegion(code)}
                  className={`px-2 py-1.5 text-sm transition-colors ${
                    region === code
                      ? 'bg-white/20 font-semibold'
                      : isScrolled ? 'text-gray-400 hover:bg-gray-100' : 'text-white/50 hover:bg-white/10'
                  } ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {flag}
                </button>
              ))}
            </div>
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-600 hover:bg-gray-100'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                <Globe className="w-4 h-4" />
                {language.toUpperCase()}
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-xl border py-1 min-w-[80px] z-50">
                  {LANGS.map(({ code, flag }) => (
                    <button
                      key={code}
                      onClick={() => { setLanguage(code); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        language === code ? 'text-blue-600 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {flag}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button
              onClick={onOpenDialog}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6"
            >
              {t.nav.cta}
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-1">
            <div className="flex items-center rounded-md overflow-hidden">
              {REGIONS.map(({ code, flag }) => (
                <button
                  key={code}
                  onClick={() => setRegion(code)}
                  className={`px-1.5 py-1 text-xs ${
                    region === code ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  {flag}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <Globe className="w-5 h-5" />
            </button>
            {langOpen && (
              <div className="absolute top-16 right-14 bg-white rounded-lg shadow-xl border py-1 min-w-[80px] z-50">
                {LANGS.map(({ code, flag }) => (
                  <button
                    key={code}
                    onClick={() => { setLanguage(code); setLangOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                      language === code ? 'text-blue-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {flag}
                  </button>
                ))}
              </div>
            )}
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left text-gray-700 font-medium py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {label}
              </button>
            ))}
            <Button
              onClick={() => { onOpenDialog(); setMobileOpen(false); }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-2"
            >
              {t.nav.cta}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
