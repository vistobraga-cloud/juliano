import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { useTranslation } from '@/lib/i18n';

export function FloatingWhatsApp() {
  const { t } = useTranslation();
  return (
    <button
      onClick={() => openWhatsApp(t.whatsapp.defaultMessage)}
      className="fixed bottom-24 right-5 md:bottom-8 md:right-8 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
      aria-label={t.floatingWhatsApp}
    >
      <MessageCircle className="w-6 h-6 fill-white flex-shrink-0" />
      <span className="text-sm font-semibold hidden sm:inline whitespace-nowrap">{t.floatingWhatsApp}</span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full" />
    </button>
  );
}
