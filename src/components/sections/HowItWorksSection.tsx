import { Badge } from '@/components/ui/badge';
import { Heart, Activity, Zap, TrendingDown } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useTranslation } from '@/lib/i18n';

export function HowItWorksSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <Badge className="bg-purple-100 text-purple-700 border-0 mb-4">{t.howItWorks.badge}</Badge>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-5">{t.howItWorks.title}</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              {t.howItWorks.subtitle}
              <strong>{t.howItWorks.subtitleBold}</strong>
              {t.howItWorks.subtitlePost}
            </p>
            <div className="space-y-7">
              {t.howItWorks.steps.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white shadow-xl">
                <Heart className="w-9 h-9 mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">{t.howItWorks.glp1Title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{t.howItWorks.glp1Desc}</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow">
                <Zap className="w-9 h-9 mb-4 text-purple-600" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t.howItWorks.synergyTitle}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.howItWorks.synergyDesc}</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white shadow-xl">
                <Activity className="w-9 h-9 mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">{t.howItWorks.gipTitle}</h3>
                <p className="text-purple-100 text-sm leading-relaxed">{t.howItWorks.gipDesc}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
                <TrendingDown className="w-9 h-9 mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">{t.howItWorks.resultTitle}</h3>
                <p className="text-green-100 text-sm leading-relaxed">{t.howItWorks.resultDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
