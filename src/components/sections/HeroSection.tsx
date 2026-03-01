import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  Activity,
  Star,
  Syringe,
  ShieldCheck,
} from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { useTranslation } from '@/lib/i18n';

interface HeroSectionProps {
  onOpenDialog: () => void;
}

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export function HeroSection({ onOpenDialog }: HeroSectionProps) {
  const { t, r } = useTranslation();
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 backdrop-blur-sm px-3 py-1.5">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                {r.approvalBadge}
              </Badge>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 backdrop-blur-sm px-3 py-1.5">
                <Star className="w-3.5 h-3.5 mr-1.5 fill-yellow-400" />
                {t.hero.badgeSatisfaction}
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                {t.hero.titlePre}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {t.hero.titleHighlight}
                </span>
                {t.hero.titlePost}
              </h1>
              <p className="text-lg text-white/75 leading-relaxed max-w-xl">
                {t.hero.subtitle}
                <strong className="text-white">{t.hero.subtitleBold}</strong>
                {t.hero.subtitlePost}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={onOpenDialog}
                className="bg-white text-blue-900 hover:bg-gray-100 font-bold px-8 py-6 text-base shadow-xl"
              >
                {t.hero.btnStart}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => openWhatsApp(t.whatsapp.defaultMessage)}
                className="border-green-400/50 bg-green-500/10 text-green-300 hover:bg-green-500/20 px-8 py-6 text-base"
              >
                {t.hero.btnWhatsApp}
              </Button>
            </div>

            <div className="flex flex-wrap gap-5 text-white/70 text-sm">
              {t.hero.chips.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`/testimonial-${i}.jpg`}
                    alt={`Patient ${i}`}
                    loading="lazy"
                    className="w-9 h-9 rounded-full border-2 border-blue-900 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/60 text-xs mt-0.5">{t.hero.patients}</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img src="/hero-product.jpg" alt={t.hero.imgAlt} loading="eager" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" />
            </div>

            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-gray-900 leading-none">-20,9%</p>
                  <p className="text-xs text-gray-500">{t.hero.floatWeight}</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-blue-100 rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-gray-900 leading-none">72</p>
                  <p className="text-xs text-gray-500">{t.hero.floatWeeks}</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-purple-100 rounded-full flex items-center justify-center">
                  <Syringe className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-gray-900 leading-none">1x</p>
                  <p className="text-xs text-gray-500">{t.hero.floatWeekly}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollTo('stats')}
          className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center pt-2"
          aria-label={t.hero.scrollLabel}
        >
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
        </button>
      </div>
    </section>
  );
}
