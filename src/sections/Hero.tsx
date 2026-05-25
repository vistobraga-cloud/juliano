import { motion } from 'framer-motion';
import { MessageCircle, Phone, Clock, Shield, Sparkles } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/34951000000?text=Olá!%20Quero%20um%20orçamento%20gratuito%20em%20Málaga';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Vista aérea de Málaga"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E26]/50 via-[#0A0E26]/60 to-[#0A0E26]/80" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center pt-[72px]"
      >
        {/* Location Tag */}
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-medium tracking-wide">
            <span className="text-sm">📍</span>
            Málaga · Costa del Sol
          </span>
        </motion.div>

        {/* H1 Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-tight max-w-[800px] mx-auto"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          Manutenção Residencial e Climatização em Málaga
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="mt-5 text-lg sm:text-xl text-white/85 font-normal max-w-[560px] mx-auto leading-relaxed"
        >
          Rápido, Limpo e Confiável. Atendimento em até 24h na capital e arredores.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-8">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 h-14 sm:h-[56px] rounded-full bg-electric-blue text-white font-semibold text-base shadow-blue hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Quero um Orçamento Gratuito
          </a>
        </motion.div>

        {/* Phone Line */}
        <motion.div variants={itemVariants} className="mt-4">
          <a
            href="tel:+34951000000"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5" />
            Ou ligue: +34 951 000 000
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
        >
          {[
            { icon: Clock, text: 'Atendimento 24h' },
            { icon: Shield, text: 'Garantia de 1 Ano' },
            { icon: Sparkles, text: 'Limpo e Organizado' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/80">
              <Icon className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium">{text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
