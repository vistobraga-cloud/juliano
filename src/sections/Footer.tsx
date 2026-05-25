import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SITE, WHATSAPP_LINK } from '@/lib/site';

const quickLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Zona de Atendimento', href: '#zona' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

const contactInfo = [
  { icon: Phone, text: SITE.phoneDisplay, href: SITE.phoneTel },
  { icon: Mail, text: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, text: 'Málaga, Andaluzia, Espanha', href: null as string | null },
  { icon: Clock, text: SITE.hours.weekdays, href: null as string | null },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A0E1A] pt-16 sm:pt-20 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8"
        >
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-flex items-center gap-0">
              <span className="text-xl font-extrabold tracking-tight text-white">
                Málaga
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Pro
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue ml-0.5 inline-block" />
            </a>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-[320px]">
              Serviços residenciais profissionais em Málaga e Costa del Sol. Ar condicionado, eletricidade e decoração. Orçamento gratuito.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Fale pelo WhatsApp
            </a>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-electric-blue flex-shrink-0" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-white/60">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2025 Málaga Pro. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 hover:text-white/60 cursor-pointer transition-colors">
              Privacidade
            </span>
            <span className="text-xs text-white/40 hover:text-white/60 cursor-pointer transition-colors">
              Termos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
