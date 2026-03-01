import { Syringe, Phone, MessageCircle, Instagram, Facebook, Mail } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { useTranslation } from '@/lib/i18n';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export function Footer() {
  const { t, r } = useTranslation();
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Syringe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">{r.brandName}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{t.footer.description}</p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/zampieri.medspa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-pink-500/80 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584703852129"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 hover:bg-blue-600/80 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { label: t.nav.benefits, id: 'beneficios' },
                { label: t.nav.howItWorks, id: 'como-funciona' },
                { label: t.nav.dosages, id: 'dosagens' },
                { label: t.nav.testimonials, id: 'depoimentos' },
                { label: t.nav.pricing, id: 'precos' },
                { label: t.nav.faq, id: 'faq' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button onClick={() => scrollTo(id)} className="hover:text-white transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{t.footer.treatment}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Tirzepatide 2,5 mg</li>
              <li>Tirzepatide 5 mg</li>
              <li>Tirzepatide 7,5 mg</li>
              <li>Tirzepatide 10 mg</li>
              <li>Tirzepatide 12,5 mg</li>
              <li>Tirzepatide 15 mg</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                +1 (508) 816-7813
              </li>
              <li>
                <button
                  onClick={() => openWhatsApp(t.whatsapp.defaultMessage)}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  WhatsApp
                </button>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zampieri.medspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  @izampieri.medspa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 space-y-3 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} {r.copyrightEntity}. {t.footer.copyright}</p>
          <p className="max-w-2xl mx-auto leading-relaxed">{r.legalDisclaimer}</p>
          {r.compoundingDisclaimer && (
            <p className="max-w-2xl mx-auto leading-relaxed text-gray-600 bg-gray-800/50 rounded-lg px-4 py-3 mt-3">
              {r.compoundingDisclaimer}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
