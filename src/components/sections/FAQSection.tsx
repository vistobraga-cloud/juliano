import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { useTranslation } from '@/lib/i18n';

export function FAQSection() {
  const { t } = useTranslation();
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge className="bg-purple-100 text-purple-700 border-0 mb-4">{t.faq.badge}</Badge>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-5">{t.faq.title}</h2>
          <p className="text-gray-600">{t.faq.subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {t.faq.items.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-50 rounded-2xl border border-gray-100 px-6 hover:border-blue-200 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5 text-sm leading-snug">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <p className="text-gray-700 font-semibold mb-2">{t.faq.stillQuestions}</p>
          <p className="text-gray-500 text-sm mb-5">{t.faq.stillQuestionsDesc}</p>
          <Button
            onClick={() => openWhatsApp(t.whatsapp.defaultMessage)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            {t.faq.btnWhatsApp}
          </Button>
        </div>
      </div>
    </section>
  );
}
