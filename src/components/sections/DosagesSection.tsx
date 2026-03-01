import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { openWhatsApp } from '@/lib/whatsapp';
import { useTranslation } from '@/lib/i18n';

interface DosagesSectionProps {
  onOpenDialog: () => void;
}

export function DosagesSection({ onOpenDialog }: DosagesSectionProps) {
  const { t } = useTranslation();
  const { ref, isVisible } = useIntersectionObserver();

  const typeColor = (type: string) => {
    if (type === t.dosages.initial) return 'bg-green-500';
    if (type === t.dosages.maintenance) return 'bg-blue-500';
    return 'bg-purple-500';
  };

  return (
    <section id="dosagens" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="bg-white/10 text-white border-white/20 mb-4">{t.dosages.badge}</Badge>
          <h2 className="text-4xl font-extrabold text-white mb-5">{t.dosages.title}</h2>
          <p className="text-white/70">{t.dosages.subtitle}</p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {t.dosages.items.map((d, i) => (
            <Card key={i} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-extrabold text-white">{d.dose}</span>
                  <Badge className={`${typeColor(d.type)} text-white border-0`}>{d.type}</Badge>
                </div>
                <p className="text-white/60 text-sm">{d.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto mb-10">
          <h3 className="text-white font-bold text-lg mb-4">{t.dosages.protocolTitle}</h3>
          <div className="space-y-3">
            {t.dosages.protocolSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/50 text-xs mb-5">{t.dosages.disclaimer}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={onOpenDialog} className="bg-white text-blue-900 hover:bg-gray-100 font-bold">
              {t.dosages.btnConsult}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              onClick={() => openWhatsApp(t.whatsapp.defaultMessage)}
              className="border-green-400/50 text-green-300 hover:bg-green-500/10"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t.dosages.btnWhatsApp}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
