import { Phone, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { useTranslation } from '@/lib/i18n';

interface StickyMobileCTAProps {
  onOpenDialog: () => void;
}

export function StickyMobileCTA({ onOpenDialog }: StickyMobileCTAProps) {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex gap-2 px-3 py-2.5">
        <button
          onClick={onOpenDialog}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl text-sm"
        >
          <Phone className="w-4 h-4" />
          {t.stickyBtn}
        </button>
        <button
          onClick={() => openWhatsApp(t.whatsapp.defaultMessage)}
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-xl text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          {t.stickyWhatsApp}
        </button>
      </div>
    </div>
  );
}
