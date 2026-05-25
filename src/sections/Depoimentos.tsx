import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Instalaram o ar condicionado na minha casa em Torremolinos em menos de 2 horas. Trabalho impecável, deixaram tudo limpo e o preço foi justo. Recomendo sem dúvida!',
    author: 'María García',
    location: 'Torremolinos, Málaga',
    avatar: '/avatar-1.jpg',
  },
  {
    quote:
      'Precisava trocar todas as tomadas do apartamento antes de alugar. Fizeram um orçamento claro no WhatsApp e executaram no dia seguinte. Profissionais de verdade.',
    author: 'Carlos Rodríguez',
    location: 'Málaga Centro',
    avatar: '/avatar-2.jpg',
  },
  {
    quote:
      'As cortinas blackout mudaram minha vida — o sol da Costa del Sol não entra mais no quarto às 6h da manhã. Medição perfeita, instalação rápida. Vale cada euro!',
    author: 'Laura Martínez',
    location: 'Benalmádena',
    avatar: '/avatar-3.jpg',
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-28 lg:py-32">
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
            Depoimentos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0A0E1A] leading-tight tracking-tight">
            O que Dizem Nossos Clientes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            A opinião de quem já confiou em nossos serviços em Málaga.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="bg-white rounded-2xl border border-[#E5E7EB] shadow-card p-6 sm:p-8 flex flex-col hover:shadow-card-hover hover:-translate-y-1 transition-all duration-350"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-electric-blue/20 mb-4" />

              {/* Quote Text */}
              <p className="text-[#0A0E1A] leading-relaxed flex-1 text-[15px]">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-4 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#FFB84D] text-[#FFB84D]"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-semibold text-[#0A0E1A]">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-[#9CA3AF]">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
