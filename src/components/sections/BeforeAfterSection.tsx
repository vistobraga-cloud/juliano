import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface TransformationItem {
  name: string;
  age: number;
  before: string;
  after: string;
  lost: string;
  duration: string;
}

export function BeforeAfterSection() {
  const { t, r } = useTranslation();
  const [current, setCurrent] = useState(0);

  const items: TransformationItem[] = r.beforeAfterResults ?? [];
  if (items.length === 0) return null;

  const goNext = () => setCurrent((c) => (c + 1) % items.length);
  const goPrev = () => setCurrent((c) => (c - 1 + items.length) % items.length);

  const item = items[current];

  return (
    <section id="resultados" className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="bg-pink-100 text-pink-700 border-0 mb-4">{t.beforeAfter.badge}</Badge>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-5">{t.beforeAfter.title}</h2>
          <p className="text-gray-600">{t.beforeAfter.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-[3/4] flex items-center justify-center">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {t.beforeAfter.before}
                  </span>
                </div>
                <div className="text-center p-8">
                  <p className="text-6xl font-extrabold text-gray-400 mb-2">{item.before}</p>
                  <div className="w-32 h-32 bg-gray-300/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 aspect-[3/4] flex items-center justify-center">
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {t.beforeAfter.after}
                  </span>
                </div>
                <div className="text-center p-8">
                  <p className="text-6xl font-extrabold text-green-600 mb-2">{item.after}</p>
                  <div className="w-32 h-32 bg-green-200/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Info bar */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <button
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-center flex-1 px-4">
                  <p className="font-bold text-lg">{item.name}, {item.age}</p>
                  <p className="text-white/80 text-sm">
                    {t.beforeAfter.lost} <strong className="text-yellow-300">{item.lost}</strong>{' '}
                    {t.beforeAfter.inTime} <strong>{item.duration}</strong>
                  </p>
                </div>

                <button
                  onClick={goNext}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === current ? 'bg-white w-6' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">{t.beforeAfter.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
