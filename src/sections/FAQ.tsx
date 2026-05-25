import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quanto tempo leva a higienização de um ar condicionado?',
    answer:
      'A higienização completa de uma unidade split leva entre 45 minutos e 1 hora. O serviço inclui desmontagem, limpeza profunda de filtros, serpentina e bandeja, aplicação de produto bactericida e teste final. Recomendamos fazer a cada 6 meses, especialmente no clima de Málaga.',
  },
  {
    question: 'Vocês atendem em finais de semana?',
    answer:
      'Sim! Atendemos de segunda a sábado, e em casos urgentes também aos domingos. Nosso horário comercial é das 8h às 20h, mas para emergências estamos disponíveis até as 22h.',
  },
  {
    question: 'O orçamento realmente é gratuito?',
    answer:
      'Sim, o orçamento é 100% gratuito e sem compromisso. Avaliamos seu caso pelo WhatsApp com fotos ou em visita presencial se necessário. Você só paga se aprovar o serviço.',
  },
  {
    question: 'Qual a área de cobertura de atendimento?',
    answer:
      'Atendemos toda a província de Málaga, com foco na capital e cidades da Costa del Sol: Torremolinos, Benalmádena, Fuengirola, Marbella, Estepona, Rincón de la Victoria e arredores. Para localidades mais distantes, consulte-nos pelo WhatsApp.',
  },
  {
    question: 'Os técnicos levam o material necessário?',
    answer:
      'Sim, nossos técnicos chegam com todo o equipamento e material necessário para o serviço. Se houver necessidade de algum material específico (como tomadas ou lâmpadas de modelo particular), informamos no orçamento.',
  },
  {
    question: 'Como funciona a garantia de 1 ano?',
    answer:
      'Todos os nossos serviços incluem garantia de 1 ano. Se ocorrer qualquer problema relacionado ao trabalho realizado, voltamos para corrigir sem custo adicional. Basta nos contactar pelo WhatsApp com o número do seu serviço.',
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="border-b border-[#E5E7EB]"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
      >
        <span
          className={`text-base sm:text-lg font-semibold pr-4 transition-colors duration-200 ${
            isOpen ? 'text-electric-blue' : 'text-[#0A0E1A] group-hover:text-electric-blue'
          }`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors duration-200 ${
              isOpen ? 'text-electric-blue' : 'text-[#9CA3AF]'
            }`}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 sm:pb-6 text-sm sm:text-base text-[#6B7280] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#F5F7FA] py-20 sm:py-28 lg:py-32">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-electric-blue">
            Perguntas Frequentes
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0A0E1A] leading-tight tracking-tight">
            Tire suas Dúvidas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Respostas às perguntas mais comuns sobre nossos serviços em Málaga.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              index={index}
            />
          ))}
        </div>

        {/* FAQ Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          })}
        </script>
      </div>
    </section>
  );
}
