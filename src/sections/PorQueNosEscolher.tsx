import { motion } from 'framer-motion';
import { Clock, UserCheck, BadgeEuro, Shield } from 'lucide-react';

const features = [
  {
    icon: Clock,
    iconColor: '#007AFF',
    bgColor: 'rgba(0,122,255,0.08)',
    title: 'Atendimento em 24h',
    description:
      'Agendamos sua visita no mesmo dia ou no máximo em 24 horas. Sabemos que problemas em casa não podem esperar.',
  },
  {
    icon: UserCheck,
    iconColor: '#007AFF',
    bgColor: 'rgba(0,122,255,0.08)',
    title: 'Técnicos Certificados',
    description:
      'Equipe qualificada e com experiência comprovada. Trabalhamos com segurança, respeito ao seu espaço e cleanup completo.',
  },
  {
    icon: BadgeEuro,
    iconColor: '#FF9500',
    bgColor: 'rgba(255,149,0,0.08)',
    title: 'Preço Transparente',
    description:
      'Orçamento detalhado antes de qualquer trabalho. Sem taxas ocultas, sem surpresas. Você aprova, nós executamos.',
  },
  {
    icon: Shield,
    iconColor: '#34C759',
    bgColor: 'rgba(52,199,89,0.08)',
    title: '1 Ano de Garantia',
    description:
      'Todos os serviços incluem garantia de 1 ano. Se algo não ficar perfeito, voltamos para corrigir sem custo adicional.',
  },
];

export default function PorQueNosEscolher() {
  return (
    <section className="bg-[#F5F7FA] py-20 sm:py-28 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-[640px] mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-electric-blue">
            Por Que Nos Escolher
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0A0E1A] leading-tight tracking-tight">
            A Diferença que Você Merece
          </h2>
          <p className="mt-4 text-base sm:text-lg sm:text-xl text-[#6B7280] leading-relaxed">
            Mais de 500 famílias em Málaga confiam em nossos serviços. Descubra por que somos a escolha certa para sua casa.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E7EB] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-350"
              >
                <div
                  className="w-20 h-20 rounded-[20px] flex items-center justify-center mb-5"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <Icon className="w-10 h-10" style={{ color: feature.iconColor }} />
                </div>
                <h3 className="text-xl font-semibold text-[#0A0E1A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
