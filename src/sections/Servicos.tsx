import { motion } from 'framer-motion';
import type { ElementType } from 'react';
import { Wind, Fan, Lightbulb, Zap, Sun, ShieldCheck } from 'lucide-react';

interface ServiceCardProps {
  icon: ElementType;
  iconColor: string;
  bgColor: string;
  title: string;
  badge: string;
  description: string;
  price: string;
  image?: string;
  wide?: boolean;
  special?: boolean;
  index: number;
}

function ServiceCard({
  icon: Icon,
  iconColor,
  bgColor,
  title,
  badge,
  description,
  price,
  image,
  wide = false,
  special = false,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className={`group relative rounded-2xl border transition-all duration-350 hover:-translate-y-1 hover:shadow-card-hover ${
        special
          ? 'bg-gradient-to-br from-electric-blue/[0.04] to-warm-orange/[0.04] border-electric-blue/15'
          : 'bg-white border-[#E5E7EB] hover:border-electric-blue/20'
      } ${wide ? 'md:col-span-2' : 'col-span-1'} shadow-card`}
    >
      <div className={`p-6 sm:p-8 ${wide ? 'md:flex md:gap-6 md:items-start' : ''} h-full`}>
        <div className="flex-1">
          {/* Icon + Title Row */}
          <div className={`flex items-start gap-4 ${wide ? 'md:flex-row md:items-center' : 'flex-row items-center'} mb-3`}>
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: bgColor }}
            >
              <Icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: iconColor }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-lg sm:text-xl font-semibold text-[#0A0E1A] leading-tight">
                  {title}
                </h3>
              </div>
              {!special && (
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#F5F7FA] text-[#6B7280] text-xs font-medium">
                  {badge}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[#6B7280] leading-relaxed mt-3 line-clamp-3">
            {description}
          </p>

          {/* Price or Guarantee */}
          <div className="mt-4">
            {special ? (
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-malaga-success">
                <ShieldCheck className="w-4 h-4" />
                Garantia Incluída
              </span>
            ) : (
              <span className="text-sm font-medium text-electric-blue">{price}</span>
            )}
          </div>
        </div>

        {/* Image for wide cards */}
        {wide && image && (
          <div className="hidden md:block flex-shrink-0 mt-4 md:mt-0">
            <img
              src={image}
              alt={title}
              className="w-[140px] h-[100px] object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

const services = [
  {
    icon: Wind,
    iconColor: '#007AFF',
    bgColor: 'rgba(0,122,255,0.08)',
    title: 'Higienização de Ar Condicionado',
    badge: 'Climatização',
    description:
      'Limpeza completa de filtros, serpentina e bandeja. Eliminação de bactérias, fungos e maus odores. Seu ar condicionado como novo, com ar puro e eficiência energética recuperada.',
    price: 'A partir de €49/unidade',
    image: '/service-ac.jpg',
    wide: true,
  },
  {
    icon: Fan,
    iconColor: '#007AFF',
    bgColor: 'rgba(0,122,255,0.08)',
    title: 'Instalação de Ventilador de Teto',
    badge: 'Climatização',
    description:
      'Instalação segura com suporte adequado ao peso e conexão elétrica profissional. Ideal para o verão andaluz.',
    price: 'A partir de €89',
    wide: false,
  },
  {
    icon: Lightbulb,
    iconColor: '#FF9500',
    bgColor: 'rgba(255,149,0,0.08)',
    title: 'Instalação de Luminárias',
    badge: 'Eletricidade',
    description:
      'Montagem e ligação de pendentes, plafons, spots e sistemas de iluminação. Cabeamento organizado e seguro.',
    price: 'A partir de €35',
    wide: false,
  },
  {
    icon: Zap,
    iconColor: '#FF9500',
    bgColor: 'rgba(255,149,0,0.08)',
    title: 'Troca de Tomadas e Interruptores',
    badge: 'Eletricidade',
    description:
      'Substituição de tomadas antigas, instalação de interruptores modernos e tomadas USB. Conforme normativa elétrica espanhola.',
    price: 'A partir de €25',
    wide: false,
  },
  {
    icon: Lightbulb,
    iconColor: '#FF9500',
    bgColor: 'rgba(255,149,0,0.08)',
    title: 'Lâmpadas de Difícil Acesso',
    badge: 'Eletricidade',
    description:
      'Troca de lâmpadas em pé-direito alto, escadas e locais de difícil acesso com equipamento de segurança.',
    price: 'A partir de €20',
    wide: false,
  },
  {
    icon: Sun,
    iconColor: '#007AFF',
    bgColor: 'rgba(0,122,255,0.08)',
    title: 'Cortinas, Persianas e Estores Blackout',
    badge: 'Decoração',
    description:
      'Instalação profissional de cortinas, persianas e estores blackout para bloquear o sol intenso da Costa del Sol. Medição, corte e montagem perfeita. Dormir de dia nunca foi tão fácil.',
    price: 'A partir de €59',
    image: '/service-cortinas.jpg',
    wide: true,
  },
  {
    icon: ShieldCheck,
    iconColor: '#34C759',
    bgColor: 'rgba(52,199,89,0.08)',
    title: 'Garantia em Todos os Serviços',
    badge: '',
    description:
      '1 ano de garantia em todos os trabalhos. Suporte pós-serviço via WhatsApp. Satisfação garantida ou reembolso.',
    price: '',
    wide: false,
    special: true,
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-28 lg:py-32">
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
            Nossos Serviços
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0A0E1A] leading-tight tracking-tight">
            Tudo para sua Casa Funcionar Perfeitamente
          </h2>
          <p className="mt-4 text-base sm:text-lg sm:text-xl text-[#6B7280] leading-relaxed">
            Serviços residenciais profissionais em Málaga. Orçamento sem compromisso, atendimento rápido e garantia em todos os trabalhos.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
