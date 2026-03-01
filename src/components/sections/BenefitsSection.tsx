import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown, Activity, Clock, Shield, Brain, Droplets } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useTranslation } from '@/lib/i18n';

const icons = [
  <TrendingDown className="w-7 h-7" />,
  <Activity className="w-7 h-7" />,
  <Brain className="w-7 h-7" />,
  <Clock className="w-7 h-7" />,
  <Droplets className="w-7 h-7" />,
  <Shield className="w-7 h-7" />,
];

const colors = [
  'from-green-500 to-emerald-600',
  'from-blue-500 to-blue-600',
  'from-purple-500 to-purple-600',
  'from-orange-500 to-amber-600',
  'from-red-500 to-rose-600',
  'from-teal-500 to-cyan-600',
];

export function BenefitsSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <section id="beneficios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-blue-100 text-blue-700 border-0 mb-4">{t.benefits.badge}</Badge>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-5">{t.benefits.title}</h2>
          <p className="text-lg text-gray-600">{t.benefits.subtitle}</p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {t.benefits.items.map((benefit, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white overflow-hidden ${
                index === 0 ? 'ring-2 ring-green-400 ring-offset-2' : ''
              }`}
            >
              <CardContent className="p-7">
                {index === 0 && (
                  <div className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block mb-4">
                    {t.benefits.highlightTag}
                  </div>
                )}
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  {icons[index]}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
