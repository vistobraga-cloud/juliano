import { motion } from 'framer-motion';
import { MessageCircle, Check } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/34951000000?text=Olá!%20Quero%20um%20orçamento%20gratuito%20em%20Málaga';

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-b from-[#0A0E1A] to-[#1E293B] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-tight tracking-tight"
        >
          Pronto para Transformar sua Casa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="mt-4 text-lg sm:text-xl text-white/70 leading-relaxed"
        >
          Orçamento gratuito em minutos pelo WhatsApp. Atendemos Málaga e toda a Costa del Sol com rapidez e garantia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mt-8"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 h-[60px] rounded-full bg-electric-blue text-white font-semibold text-base shadow-blue hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Quero um Orçamento Gratuito em Málaga
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/50"
        >
          <span className="inline-flex items-center gap-1">
            <Check className="w-3 h-3 text-malaga-success" />
            Resposta em até 30 minutos
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Check className="w-3 h-3 text-malaga-success" />
            Sem compromisso
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Check className="w-3 h-3 text-malaga-success" />
            Garantia de 1 ano
          </span>
        </motion.div>
      </div>
    </section>
  );
}
