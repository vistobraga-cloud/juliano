export type Language = 'pt' | 'en' | 'es';
export type Region = 'br' | 'us';

export interface Translations {
  lang: Language;
  htmlLang: string;

  // Navbar
  nav: {
    benefits: string;
    howItWorks: string;
    dosages: string;
    testimonials: string;
    pricing: string;
    faq: string;
    cta: string;
  };

  // Hero
  hero: {
    badgeSatisfaction: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    subtitle: string;
    subtitleBold: string;
    subtitlePost: string;
    btnStart: string;
    btnWhatsApp: string;
    chips: string[];
    patients: string;
    floatWeight: string;
    floatWeeks: string;
    floatWeekly: string;
    scrollLabel: string;
    imgAlt: string;
  };

  // Stats
  stats: {
    patientsLabel: string;
    weightLabel: string;
    weeksLabel: string;
    satisfactionLabel: string;
    prefix: string;
  };

  // Benefits
  benefits: {
    badge: string;
    title: string;
    subtitle: string;
    highlightTag: string;
    items: {
      title: string;
      description: string;
    }[];
  };

  // How It Works
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    subtitleBold: string;
    subtitlePost: string;
    steps: { title: string; description: string }[];
    glp1Title: string;
    glp1Desc: string;
    gipTitle: string;
    gipDesc: string;
    synergyTitle: string;
    synergyDesc: string;
    resultTitle: string;
    resultDesc: string;
  };

  // Comparison
  comparison: {
    badge: string;
    title: string;
    subtitle: string;
    headers: string[];
    mechanism: string;
    weightLoss: string;
    frequency: string;
    approval: string;
    dualAction: string;
    rows: string[][];
    footnote: string;
  };

  // Dosages
  dosages: {
    badge: string;
    title: string;
    subtitle: string;
    initial: string;
    maintenance: string;
    maximum: string;
    items: { dose: string; type: string; description: string }[];
    protocolTitle: string;
    protocolSteps: string[];
    disclaimer: string;
    btnConsult: string;
    btnWhatsApp: string;
  };

  // Testimonials
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      name: string;
      text: string;
      result: string;
      time: string;
    }[];
    patientLabel: string;
  };

  // Pricing
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    countdownTitle: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    popular: string;
  };

  // Guarantee
  guarantee: {
    badge: string;
    title: string;
    subtitle: string;
  };

  // Where to Buy
  whereToBuy: {
    badge: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
    noDoctor: string;
    noDoctorDesc: string;
    btnDoctor: string;
    btnWhatsApp: string;
  };

  // FAQ
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
    stillQuestions: string;
    stillQuestionsDesc: string;
    btnWhatsApp: string;
  };

  // CTA
  cta: {
    available: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    chips: string[];
    btnSpecialist: string;
    btnWhatsApp: string;
    schedule: string;
  };

  // Footer
  footer: {
    description: string;
    quickLinks: string;
    treatment: string;
    contact: string;
    copyright: string;
    disclaimer: string;
  };

  // Contact Dialog
  contactDialog: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    nameError: string;
    phoneLabel: string;
    phonePlaceholder: string;
    phoneError: string;
    objectiveLabel: string;
    objectivePlaceholder: string;
    objectiveError: string;
    objectives: string[];
    btnSubmit: string;
    privacy: string;
  };

  // Floating / Sticky
  floatingWhatsApp: string;
  stickyBtn: string;
  stickyWhatsApp: string;

  // WhatsApp messages
  whatsapp: {
    defaultMessage: string;
    leadMessage: (name: string, phone: string, objective: string) => string;
  };
}
