import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';

const cities = [
  'Málaga Centro',
  'Torremolinos',
  'Benalmádena',
  'Fuengirola',
  'Marbella',
  'Estepona',
  'Rincón de la Victoria',
  'Vélez-Málaga',
];

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: '+', label: 'Clientes Atendidos' },
  { value: 24, suffix: 'h', label: 'Tempo Médio de Resposta' },
  { value: 1, suffix: ' ano', label: 'Garantia nos Serviços', prefix: '' },
];

export default function ZonaAtendimento() {
  return (
    <section id="zona" className="bg-[#0A0E1A] py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-electric-blue">
              Zona de Atendimento
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-tight tracking-tight">
              Atendemos Málaga e Toda a Costa del Sol
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
              Desde o centro histórico de Málaga até Marbella. Onde você estiver, chegamos até você.
            </p>

            {/* Cities Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <div key={city} className="flex items-center gap-2 text-sm text-white/80">
                  <MapPin className="w-3.5 h-3.5 text-electric-blue flex-shrink-0" />
                  <span>{city}</span>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-0">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center">
                  <div className="text-center sm:text-left">
                    <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {stat.value === 1 ? (
                        <span>1<span className="text-2xl sm:text-3xl"> ano</span></span>
                      ) : (
                        <AnimatedCounter
                          target={stat.value}
                          suffix={stat.suffix}
                          prefix={stat.prefix || ''}
                        />
                      )}
                    </div>
                    <div className="mt-1 text-xs text-white/60 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="hidden sm:block w-px h-16 bg-white/15 mx-8" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <img
                src="/map-malaga.jpg"
                alt="Mapa da região de Málaga e Costa del Sol"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
