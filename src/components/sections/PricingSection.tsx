import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock } from 'lucide-react';
import { useCountdown } from '@/hooks/useCountdown';
import { openWhatsApp } from '@/lib/whatsapp';
import { useTranslation } from '@/lib/i18n';

interface PricingSectionProps {
  onOpenDialog: () => void;
}

export function PricingSection({ onOpenDialog }: PricingSectionProps) {
  const { t, r } = useTranslation();
  const countdown = useCountdown();

  const handlePlan = (planName: string) => {
    openWhatsApp(t.whatsapp.defaultMessage.replace('?', `? (${planName})`));
  };

  const plans = r.plans;

  return (
    <section id="precos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <Badge className="bg-blue-100 text-blue-700 border-0 mb-4">{t.pricing.badge}</Badge>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-5">{t.pricing.title}</h2>
          <p className="text-gray-600">{t.pricing.subtitle}</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-12">
          <Clock className="w-5 h-5 text-red-500" />
          <span className="text-sm font-semibold text-gray-700">{t.pricing.countdownTitle}:</span>
          <div className="flex gap-1.5">
            {[
              { val: countdown.days, label: t.pricing.days },
              { val: countdown.hours, label: t.pricing.hours },
              { val: countdown.minutes, label: t.pricing.minutes },
              { val: countdown.seconds, label: t.pricing.seconds },
            ].map(({ val, label }) => (
              <div key={label} className="bg-red-50 border border-red-100 rounded-lg px-2.5 py-1 text-center min-w-[52px]">
                <span className="text-lg font-extrabold text-red-600 block leading-tight">{String(val).padStart(2, '0')}</span>
                <span className="text-[10px] text-red-400 uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const isPopular = index === 1;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden ${
                  isPopular ? 'border-2 border-blue-500 shadow-2xl scale-105' : 'border border-gray-200 shadow-lg'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-0 left-0 right-0 bg-blue-500 text-white text-center text-xs font-bold py-1.5">
                    {t.pricing.popular}
                  </div>
                )}
                <CardContent className={`p-8 text-center ${isPopular ? 'pt-10' : ''}`}>
                  <h3 className="text-lg font-semibold text-gray-500 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-extrabold text-gray-900 mb-1">{plan.price}</div>
                  <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                  <ul className="text-left space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => (isPopular ? onOpenDialog() : handlePlan(plan.name))}
                    className={`w-full font-bold py-5 ${
                      isPopular ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''
                    }`}
                    variant={isPopular ? 'default' : 'outline'}
                  >
                    {plan.btn}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-gray-400 text-xs text-center mt-8">{r.paymentNote}</p>
      </div>
    </section>
  );
}
