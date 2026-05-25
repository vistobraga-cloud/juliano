import { motion } from 'framer-motion';
import { MessageSquare, FileText, CalendarCheck, Wrench, ShieldCheck } from 'lucide-react';
import type { ElementType } from 'react';
import { WHATSAPP_LINK } from '@/lib/site';

interface Step {
  icon: ElementType;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Você nos chama',
    description:
      'Mande uma mensagem pelo WhatsApp com fotos ou descrição do que precisa. Sem formulários longos, sem espera.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Orçamento em 30 minutos',
    description:
      'Analisamos seu caso e enviamos um orçamento claro e detalhado pelo WhatsApp. Sem taxas ocultas.',
  },
  {
    icon: CalendarCheck,
    number: '03',
    title: 'Agendamos no seu horário',
    description:
      'Atendimento em até 24h. Combinamos dia e hora que funcionem pra você, inclusive no fim de semana.',
  },
  {
    icon: Wrench,
    number: '04',
    title: 'Executamos com cuidado',
    description:
      'Técnicos certificados, equipamento próprio e local limpo ao final. Você acompanha cada passo.',
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-[640px] mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-electric-blue">
            Como Funciona
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0A0E1A] leading-tight tracking-tight">
            Simples, Rápido e Sem Surpresas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Do primeiro contato à execução com garantia, em quatro passos transparentes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* connector line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative w-24 h-24 rounded-full bg-white border-2 border-electric-blue/15 flex items-center justify-center shadow-card mb-5">
                    <Icon className="w-9 h-9 text-electric-blue" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-electric-blue text-white text-xs font-bold flex items-center justify-center shadow-blue">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0A0E1A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed max-w-[260px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust strip + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8"
        >
          <span className="inline-flex items-center gap-2 text-sm text-[#6B7280]">
            <ShieldCheck className="w-4 h-4 text-malaga-success" />
            1 ano de garantia em todos os serviços
          </span>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-electric-blue text-white font-semibold text-sm shadow-blue hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Começar agora pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
