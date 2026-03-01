import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export function TestimonialsSection() {
  const { t } = useTranslation();
  return (
    <section id="depoimentos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="bg-green-100 text-green-700 border-0 mb-4">{t.testimonials.badge}</Badge>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-5">{t.testimonials.title}</h2>
          <p className="text-gray-600">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={`/testimonial-${index + 1}.jpg`}
                      alt={item.name}
                      loading="lazy"
                      className="w-11 h-11 rounded-full object-cover border-2 border-blue-100"
                    />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{t.testimonials.patientLabel}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-green-600">{item.result}</p>
                    <p className="text-xs text-gray-400">{item.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
