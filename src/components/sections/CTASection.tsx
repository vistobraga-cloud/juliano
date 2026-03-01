import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { useTranslation } from '@/lib/i18n';

interface CTASectionProps {
  onOpenDialog: () => void;
}

export function CTASection({ onOpenDialog }: CTASectionProps) {
  const { t, r } = useTranslation();
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          {t.cta.available}
        </div>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          {t.cta.title}
          <span className="text-yellow-300">{t.cta.titleHighlight}</span>
        </h2>

        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">{t.cta.subtitle}</p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {t.cta.chips.map((item) => {
            const text = item === '{shipping}' ? r.shippingNote : item;
            return (
              <div key={text} className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                {text}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={onOpenDialog}
            className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-10 py-6 text-lg shadow-2xl"
          >
            <Phone className="w-5 h-5 mr-2" />
            {t.cta.btnSpecialist}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            onClick={() => openWhatsApp(t.whatsapp.defaultMessage)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-6 text-lg shadow-xl border-0"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {t.cta.btnWhatsApp}
          </Button>
        </div>

        <p className="text-white/40 text-xs mt-8">{t.cta.schedule}</p>
      </div>
    </section>
  );
}
