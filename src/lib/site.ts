export const SITE = {
  name: 'Málaga Pro',
  phoneDisplay: '+34 600 96 77 40',
  phoneRaw: '+34600967740',
  phoneTel: 'tel:+34600967740',
  email: 'info@malagapro.es',
  whatsappNumber: '34600967740',
  whatsappMessage: 'Olá! Quero um orçamento gratuito em Málaga',
  url: 'https://malagapro.es',
  address: {
    locality: 'Málaga',
    region: 'Andaluzia',
    country: 'ES',
  },
  hours: {
    weekdays: 'Seg-Sex: 8h às 20h',
    saturday: 'Sáb: 8h às 14h',
  },
} as const;

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;
