import type { Language, Region } from './types';

export interface RegionalData {
  brandName: string;
  approvalBadge: string;
  approvalBody: string;
  shippingNote: string;
  compoundingDisclaimer: string;
  copyrightEntity: string;
  legalDisclaimer: string;
  currency: string;
  plans: {
    name: string;
    price: string;
    desc: string;
    features: string[];
    btn: string;
  }[];
  paymentNote: string;
  guaranteeItems: { title: string; description: string }[];
  guaranteePaymentTitle: string;
  guaranteePaymentSubtitle: string;
}

// Dados regionais para cada combinação idioma × região
const data: Record<Language, Record<Region, RegionalData>> = {
  pt: {
    br: {
      brandName: 'Mounjaro',
      approvalBadge: 'Aprovado pela Anvisa',
      approvalBody: 'Anvisa / FDA / EMA',
      shippingNote: 'Entrega em todo Brasil',
      compoundingDisclaimer: '',
      copyrightEntity: 'Mounjaro Brasil',
      legalDisclaimer:
        'Este medicamento é de venda sob prescrição médica. Consulte sempre um médico antes de iniciar qualquer tratamento. As informações deste site têm caráter informativo e não substituem a consulta médica.',
      currency: 'BRL',
      plans: [
        {
          name: 'Dose Inicial',
          price: 'R$ 1.400',
          desc: '2,5 mg — caixa com 4 canetas',
          features: ['Início do tratamento', '4 semanas de uso', 'Orientação farmacêutica'],
          btn: 'Quero Este Plano',
        },
        {
          name: 'Dose Manutenção',
          price: 'R$ 2.200',
          desc: '5 mg a 10 mg — caixa com 4 canetas',
          features: ['Dose terapêutica eficaz', 'Resultados significativos', 'Suporte completo WhatsApp'],
          btn: 'Começar Agora',
        },
        {
          name: 'Dose Máxima',
          price: 'R$ 3.200',
          desc: '12,5 mg a 15 mg — caixa com 4 canetas',
          features: ['Máxima eficácia comprovada', 'Resultados acelerados', 'Acompanhamento prioritário'],
          btn: 'Quero Este Plano',
        },
      ],
      paymentNote: 'Parcelamos em até 12x. PIX com desconto. Entrega para todo o Brasil.',
      guaranteeItems: [
        { title: 'Produto 100% Original', description: 'Medicamento Eli Lilly com selo de autenticidade e nota fiscal.' },
        { title: 'Suporte 7 Dias', description: 'Equipe de especialistas disponível por WhatsApp para dúvidas e orientação.' },
        { title: 'Entrega Expressa', description: 'Embalagem refrigerada com rastreio. Entrega em até 48h para capitais.' },
        { title: 'Pagamento Seguro', description: 'Cartão em até 12x, PIX com desconto e boleto bancário.' },
        { title: 'Privacidade Total', description: 'Embalagem discreta sem identificação do conteúdo.' },
        { title: 'Nota Fiscal Garantida', description: 'Toda compra acompanha nota fiscal eletrônica para sua segurança.' },
      ],
      guaranteePaymentTitle: 'Formas de pagamento',
      guaranteePaymentSubtitle: 'Visa, Mastercard, Amex, PIX, Boleto — parcelamento em até 12x',
    },
    us: {
      brandName: 'Zampieri MedSpa',
      approvalBadge: 'Farmácia registrada FDA',
      approvalBody: 'FDA / EMA',
      shippingNote: 'Envio para todos os EUA',
      compoundingDisclaimer:
        'Você poderá receber um medicamento manipulado contendo tirzepatida. Medicamentos manipulados não são aprovados pela FDA, mas são preparados por farmácias registradas 503A/503B. Este produto não é fabricado nem afiliado à Eli Lilly™ ou aos medicamentos de marca Mounjaro® ou Zepbound®.',
      copyrightEntity: 'Zampieri MedSpa',
      legalDisclaimer:
        'Este medicamento requer prescrição médica. Consulte sempre um profissional de saúde antes de iniciar qualquer tratamento. As informações deste site têm caráter informativo e não substituem orientação médica profissional.',
      currency: 'USD',
      plans: [
        {
          name: 'Dose Inicial',
          price: '$297',
          desc: '2,5 mg — fornecimento mensal',
          features: ['Consulta telehealth inclusa', '4 semanas de uso', 'Suporte farmacêutico'],
          btn: 'Quero Este Plano',
        },
        {
          name: 'Dose Manutenção',
          price: '$399',
          desc: '5 mg a 10 mg — fornecimento mensal',
          features: ['Dose terapêutica eficaz', 'Check-ins regulares', 'Suporte completo WhatsApp'],
          btn: 'Começar Agora',
        },
        {
          name: 'Dose Máxima',
          price: '$499',
          desc: '12,5 mg a 15 mg — fornecimento mensal',
          features: ['Máxima eficácia', 'Resultados acelerados', 'Acompanhamento prioritário'],
          btn: 'Quero Este Plano',
        },
      ],
      paymentNote: 'Pagamento mensal. Sem fidelidade. Cancele a qualquer momento com 30 dias de aviso.',
      guaranteeItems: [
        { title: 'Farmácia FDA-Registered', description: 'Medicamento manipulado em farmácia 503A/503B registrada pela FDA.' },
        { title: 'Suporte 7 Dias', description: 'Equipe bilíngue disponível por WhatsApp para dúvidas e orientação.' },
        { title: 'Envio Expresso', description: 'Embalagem refrigerada com rastreio para todos os estados.' },
        { title: 'Pagamento Seguro', description: 'Cartão de crédito e débito. Processamento seguro.' },
        { title: 'Privacidade Total', description: 'Embalagem discreta sem identificação do conteúdo.' },
        { title: 'Consulta Telehealth', description: 'Consulta com médico licenciado inclusa no plano.' },
      ],
      guaranteePaymentTitle: 'Formas de pagamento',
      guaranteePaymentSubtitle: 'Visa, Mastercard, Amex — pagamento seguro online',
    },
  },
  en: {
    br: {
      brandName: 'Mounjaro',
      approvalBadge: 'Anvisa Approved',
      approvalBody: 'Anvisa / FDA / EMA',
      shippingNote: 'Delivery across Brazil',
      compoundingDisclaimer: '',
      copyrightEntity: 'Mounjaro Brasil',
      legalDisclaimer:
        'This medication requires a medical prescription. Always consult a doctor before starting any treatment. The information on this site is for informational purposes and does not replace medical consultation.',
      currency: 'BRL',
      plans: [
        {
          name: 'Starting Dose',
          price: 'R$ 1,400',
          desc: '2.5 mg — box with 4 pens',
          features: ['Treatment initiation', '4 weeks of use', 'Pharmaceutical guidance'],
          btn: 'Choose This Plan',
        },
        {
          name: 'Maintenance Dose',
          price: 'R$ 2,200',
          desc: '5 mg to 10 mg — box with 4 pens',
          features: ['Effective therapeutic dose', 'Significant results', 'Full WhatsApp support'],
          btn: 'Get Started Now',
        },
        {
          name: 'Maximum Dose',
          price: 'R$ 3,200',
          desc: '12.5 mg to 15 mg — box with 4 pens',
          features: ['Maximum proven efficacy', 'Accelerated results', 'Priority support'],
          btn: 'Choose This Plan',
        },
      ],
      paymentNote: 'Up to 12 installments. PIX discount. Delivery across Brazil.',
      guaranteeItems: [
        { title: '100% Original Product', description: 'Eli Lilly medication with authenticity seal and invoice.' },
        { title: '7-Day Support', description: 'Team of specialists available via WhatsApp for questions and guidance.' },
        { title: 'Express Delivery', description: 'Refrigerated packaging with tracking. Delivery within 48h to capitals.' },
        { title: 'Secure Payment', description: 'Credit card up to 12 installments, PIX with discount, and bank slip.' },
        { title: 'Total Privacy', description: 'Discreet packaging with no content identification.' },
        { title: 'Invoice Guaranteed', description: 'Every purchase comes with an electronic invoice for your security.' },
      ],
      guaranteePaymentTitle: 'Payment methods',
      guaranteePaymentSubtitle: 'Visa, Mastercard, Amex, PIX, Bank Slip — up to 12 installments',
    },
    us: {
      brandName: 'Zampieri MedSpa',
      approvalBadge: 'FDA-Registered Pharmacy',
      approvalBody: 'FDA / EMA',
      shippingNote: 'Nationwide shipping',
      compoundingDisclaimer:
        'You may be prescribed a compounded medication containing tirzepatide. Compounded medications are not FDA-approved but are prepared by FDA-registered 503A/503B compounding pharmacies. This product is not manufactured by or affiliated with Eli Lilly™ or the brand-name medications Mounjaro® or Zepbound®.',
      copyrightEntity: 'Zampieri MedSpa',
      legalDisclaimer:
        'This medication requires a medical prescription. Always consult a healthcare provider before starting any treatment. The information on this site is for informational purposes only and does not replace professional medical advice.',
      currency: 'USD',
      plans: [
        {
          name: 'Starting Dose',
          price: '$297',
          desc: '2.5 mg — monthly supply',
          features: ['Telehealth consultation included', '4 weeks of use', 'Pharmaceutical support'],
          btn: 'Choose This Plan',
        },
        {
          name: 'Maintenance Dose',
          price: '$399',
          desc: '5 mg to 10 mg — monthly supply',
          features: ['Effective therapeutic dose', 'Regular check-ins', 'Full WhatsApp support'],
          btn: 'Get Started Now',
        },
        {
          name: 'Maximum Dose',
          price: '$499',
          desc: '12.5 mg to 15 mg — monthly supply',
          features: ['Maximum efficacy', 'Accelerated results', 'Priority support'],
          btn: 'Choose This Plan',
        },
      ],
      paymentNote: 'Monthly payment. No commitment. Cancel anytime with 30-day notice.',
      guaranteeItems: [
        { title: 'FDA-Registered Pharmacy', description: 'Compounded medication from an FDA-registered 503A/503B pharmacy.' },
        { title: '7-Day Support', description: 'Bilingual team available via WhatsApp for questions and guidance.' },
        { title: 'Express Shipping', description: 'Refrigerated packaging with tracking to all states.' },
        { title: 'Secure Payment', description: 'Credit and debit card. Secure processing.' },
        { title: 'Total Privacy', description: 'Discreet packaging with no content identification.' },
        { title: 'Telehealth Consultation', description: 'Licensed physician consultation included in your plan.' },
      ],
      guaranteePaymentTitle: 'Payment methods',
      guaranteePaymentSubtitle: 'Visa, Mastercard, Amex — secure online payment',
    },
  },
  es: {
    br: {
      brandName: 'Mounjaro',
      approvalBadge: 'Aprobado por Anvisa',
      approvalBody: 'Anvisa / FDA / EMA',
      shippingNote: 'Entrega en todo Brasil',
      compoundingDisclaimer: '',
      copyrightEntity: 'Mounjaro Brasil',
      legalDisclaimer:
        'Este medicamento requiere prescripción médica. Consulte siempre a un médico antes de iniciar cualquier tratamiento. La información de este sitio tiene carácter informativo y no sustituye la consulta médica.',
      currency: 'BRL',
      plans: [
        {
          name: 'Dosis Inicial',
          price: 'R$ 1.400',
          desc: '2,5 mg — caja con 4 plumas',
          features: ['Inicio del tratamiento', '4 semanas de uso', 'Orientación farmacéutica'],
          btn: 'Quiero Este Plan',
        },
        {
          name: 'Dosis Mantenimiento',
          price: 'R$ 2.200',
          desc: '5 mg a 10 mg — caja con 4 plumas',
          features: ['Dosis terapéutica eficaz', 'Resultados significativos', 'Soporte completo WhatsApp'],
          btn: 'Empezar Ahora',
        },
        {
          name: 'Dosis Máxima',
          price: 'R$ 3.200',
          desc: '12,5 mg a 15 mg — caja con 4 plumas',
          features: ['Máxima eficacia comprobada', 'Resultados acelerados', 'Acompañamiento prioritario'],
          btn: 'Quiero Este Plan',
        },
      ],
      paymentNote: 'Hasta 12 cuotas. Descuento PIX. Entrega en todo Brasil.',
      guaranteeItems: [
        { title: 'Producto 100% Original', description: 'Medicamento Eli Lilly con sello de autenticidad y factura.' },
        { title: 'Soporte 7 Días', description: 'Equipo de especialistas disponible por WhatsApp.' },
        { title: 'Entrega Express', description: 'Embalaje refrigerado con seguimiento. Entrega en 48h.' },
        { title: 'Pago Seguro', description: 'Tarjeta hasta 12 cuotas, PIX con descuento y boleta.' },
        { title: 'Privacidad Total', description: 'Embalaje discreto sin identificación del contenido.' },
        { title: 'Factura Garantizada', description: 'Toda compra incluye factura electrónica.' },
      ],
      guaranteePaymentTitle: 'Formas de pago',
      guaranteePaymentSubtitle: 'Visa, Mastercard, Amex, PIX, Boleta — hasta 12 cuotas',
    },
    us: {
      brandName: 'Zampieri MedSpa',
      approvalBadge: 'Farmacia registrada FDA',
      approvalBody: 'FDA / EMA',
      shippingNote: 'Envío a todo el país',
      compoundingDisclaimer:
        'Se le puede recetar un medicamento compuesto que contiene tirzepatida. Los medicamentos compuestos no están aprobados por la FDA, pero son preparados por farmacias registradas 503A/503B. Este producto no es fabricado ni está afiliado con Eli Lilly™ ni con Mounjaro® o Zepbound®.',
      copyrightEntity: 'Zampieri MedSpa',
      legalDisclaimer:
        'Este medicamento requiere prescripción médica. Consulte siempre a un profesional de la salud antes de iniciar cualquier tratamiento.',
      currency: 'USD',
      plans: [
        {
          name: 'Dosis Inicial',
          price: 'US$ 297',
          desc: '2,5 mg — suministro mensual',
          features: ['Consulta telehealth incluida', '4 semanas de uso', 'Soporte farmacéutico'],
          btn: 'Quiero Este Plan',
        },
        {
          name: 'Dosis Mantenimiento',
          price: 'US$ 399',
          desc: '5 mg a 10 mg — suministro mensual',
          features: ['Dosis terapéutica eficaz', 'Check-ins regulares', 'Soporte completo WhatsApp'],
          btn: 'Empezar Ahora',
        },
        {
          name: 'Dosis Máxima',
          price: 'US$ 499',
          desc: '12,5 mg a 15 mg — suministro mensual',
          features: ['Máxima eficacia', 'Resultados acelerados', 'Acompañamiento prioritario'],
          btn: 'Quiero Este Plan',
        },
      ],
      paymentNote: 'Pago mensual. Sin compromiso. Cancele en cualquier momento con 30 días de aviso.',
      guaranteeItems: [
        { title: 'Farmacia FDA-Registered', description: 'Medicamento compuesto de farmacia 503A/503B registrada FDA.' },
        { title: 'Soporte 7 Días', description: 'Equipo bilingüe disponible por WhatsApp.' },
        { title: 'Envío Express', description: 'Embalaje refrigerado con seguimiento a todos los estados.' },
        { title: 'Pago Seguro', description: 'Tarjeta de crédito y débito. Procesamiento seguro.' },
        { title: 'Privacidad Total', description: 'Embalaje discreto sin identificación del contenido.' },
        { title: 'Consulta Telehealth', description: 'Consulta con médico licenciado incluida en el plan.' },
      ],
      guaranteePaymentTitle: 'Formas de pago',
      guaranteePaymentSubtitle: 'Visa, Mastercard, Amex — pago seguro online',
    },
  },
};

export function getRegionalData(lang: Language, region: Region): RegionalData {
  return data[lang][region];
}
