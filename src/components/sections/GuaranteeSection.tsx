import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Headphones, Truck, CreditCard, EyeOff, FileCheck } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const icons = [
  <ShieldCheck className="w-7 h-7" />,
  <Headphones className="w-7 h-7" />,
  <Truck className="w-7 h-7" />,
  <CreditCard className="w-7 h-7" />,
  <EyeOff className="w-7 h-7" />,
  <FileCheck className="w-7 h-7" />,
];

const colors = [
  'from-green-500 to-emerald-600',
  'from-blue-500 to-blue-600',
  'from-orange-500 to-amber-600',
  'from-purple-500 to-purple-600',
  'from-gray-500 to-gray-600',
  'from-teal-500 to-cyan-600',
];

export function GuaranteeSection() {
  const { t, r } = useTranslation();
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="bg-green-100 text-green-700 border-0 mb-4">{t.guarantee.badge}</Badge>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-5">{t.guarantee.title}</h2>
          <p className="text-gray-600">{t.guarantee.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {r.guaranteeItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex gap-4 items-start hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 bg-gradient-to-br ${colors[index]} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow`}>
                {icons[index]}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm max-w-2xl mx-auto">
          <p className="font-bold text-gray-900 mb-1">{r.guaranteePaymentTitle}</p>
          <p className="text-gray-500 text-sm">{r.guaranteePaymentSubtitle}</p>
        </div>
      </div>
    </section>
  );
}
