import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Stethoscope, FileText, PackageCheck, MessageCircle, UserSearch } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { useTranslation } from '@/lib/i18n';

const stepIcons = [
  <Stethoscope className="w-7 h-7" />,
  <FileText className="w-7 h-7" />,
  <PackageCheck className="w-7 h-7" />,
];

const stepColors = [
  'from-blue-500 to-blue-600',
  'from-purple-500 to-purple-600',
  'from-green-500 to-emerald-600',
];

export function WhereToBuySection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="bg-teal-100 text-teal-700 border-0 mb-4">{t.whereToBuy.badge}</Badge>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-5">{t.whereToBuy.title}</h2>
          <p className="text-gray-600">{t.whereToBuy.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {t.whereToBuy.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${stepColors[index]} rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg`}>
                  {stepIcons[index]}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-extrabold text-blue-600">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 text-center max-w-2xl mx-auto">
          <UserSearch className="w-10 h-10 text-blue-500 mx-auto mb-4" />
          <h3 className="font-bold text-gray-900 text-lg mb-2">{t.whereToBuy.noDoctor}</h3>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">{t.whereToBuy.noDoctorDesc}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => openWhatsApp(t.whatsapp.defaultMessage)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
            >
              {t.whereToBuy.btnDoctor}
            </Button>
            <Button
              variant="outline"
              onClick={() => openWhatsApp(t.whatsapp.defaultMessage)}
              className="border-green-400 text-green-700 hover:bg-green-50"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t.whereToBuy.btnWhatsApp}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
