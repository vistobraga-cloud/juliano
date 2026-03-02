import type { Translations } from './types';

export const en: Translations = {
  lang: 'en',
  htmlLang: 'en',

  nav: {
    benefits: 'Benefits',
    howItWorks: 'How It Works',
    dosages: 'Dosages',
    testimonials: 'Testimonials',
    pricing: 'Pricing',
    faq: 'FAQ',
    cta: 'Talk to a Specialist',
  },

  hero: {
    badgeSatisfaction: '98% satisfaction',
    titlePre: 'Lose up to ',
    titleHighlight: '20% of your weight',
    titlePost: ' with Tirzepatide',
    subtitle:
      'The world\'s most advanced treatment for weight loss and type 2 diabetes management. Dual GLP-1 + GIP action with ',
    subtitleBold: 'proven results over 72 weeks',
    subtitlePost: ' of clinical study.',
    btnStart: 'Get Started Now',
    btnWhatsApp: 'Chat on WhatsApp',
    chips: [
      'Dual GLP-1 + GIP action',
      'Just once a week',
      'Results in 4 weeks',
      'No commitment',
    ],
    patients: '+3,200 satisfied patients',
    floatWeight: 'weight loss',
    floatWeeks: 'weeks of study',
    floatWeekly: 'per week',
    scrollLabel: 'Scroll down',
    imgAlt: 'Mounjaro Tirzepatide — injectable pen',
  },

  stats: {
    patientsLabel: 'Patients Treated',
    weightLabel: 'Weight Loss',
    weeksLabel: 'Weeks of Clinical Study',
    satisfactionLabel: 'Patient Satisfaction',
    prefix: 'Up to ',
  },

  benefits: {
    badge: 'Proven Benefits',
    title: 'Why is Tirzepatide different?',
    subtitle:
      'The only medication with dual GLP-1 + GIP action — combining two satiety hormones for results no other treatment can achieve.',
    highlightTag: '⭐ Key Result',
    items: [
      {
        title: 'Up to 20.9% Weight Loss',
        description:
          'Superior results to any other approved weight-loss medication. Proven in the SURMOUNT-1 study with 2,539 participants.',
      },
      {
        title: 'Complete Diabetes Control',
        description:
          'Up to 2.1% reduction in HbA1c. Tirzepatide normalizes glucose levels with superior efficacy to basal insulin.',
      },
      {
        title: 'Controls Hunger in the Brain',
        description:
          'Acts directly on the hypothalamic satiety centers, eliminating compulsive cravings between meals.',
      },
      {
        title: 'Just 1 Injection per Week',
        description:
          'Pre-filled disposable pen, easy and discreet to use. Can be injected at any time of day, with or without food.',
      },
      {
        title: 'Cardiovascular Improvement',
        description:
          'Reduces blood pressure, LDL cholesterol, and triglycerides. The SURMOUNT-MMO study showed a 16% reduction in cardiac events.',
      },
      {
        title: 'Safe & Regulated',
        description:
          'Approved by the FDA, EMA, and Anvisa. Manufactured by Eli Lilly with decades of diabetes and metabolism research.',
      },
    ],
  },

  howItWorks: {
    badge: 'How It Works',
    title: 'The science behind Tirzepatide',
    subtitle: 'Mounjaro is the ',
    subtitleBold: 'first and only approved dual GLP-1/GIP agonist',
    subtitlePost:
      ' in the world — an Eli Lilly innovation combining two mechanisms of action for results no previous treatment has achieved.',
    steps: [
      {
        title: 'Innovative Dual Action',
        description:
          'Tirzepatide simultaneously activates GLP-1 and GIP receptors — two natural gut hormones responsible for satiety and metabolic control.',
      },
      {
        title: 'Powerful Appetite Reduction',
        description:
          'Acts directly on the hypothalamus, reducing ghrelin (hunger hormone) production and increasing leptin (satiety hormone) for hours after meals.',
      },
      {
        title: 'Precise Glucose Regulation',
        description:
          'Stimulates glucose-dependent insulin secretion and suppresses glucagon, keeping blood sugar stable without risk of hypoglycemia.',
      },
      {
        title: 'Sustainable Results',
        description:
          'With gradual dose titration and medical follow-up, results consolidate over months and are maintained with continued treatment.',
      },
    ],
    glp1Title: 'GLP-1',
    glp1Desc: 'Reduces appetite, delays gastric emptying, and stimulates insulin release.',
    gipTitle: 'GIP',
    gipDesc: 'Improves insulin sensitivity, reduces inflammation, and aids fat metabolism.',
    synergyTitle: 'Synergistic Action',
    synergyDesc: 'The combination enhances each mechanism, multiplying treatment efficacy.',
    resultTitle: 'Result',
    resultDesc:
      'Up to 20.9% weight loss in 72 weeks. The greatest result ever recorded in a clinical study.',
  },

  comparison: {
    badge: 'Market Comparison',
    title: 'Tirzepatide vs Competitors',
    subtitle:
      'See why Mounjaro is considered the most effective medication in its class by endocrinologists worldwide.',
    headers: ['Feature', 'Tirzepatide (Mounjaro)', 'Semaglutide (Ozempic)', 'Semaglutide (Wegovy)'],
    mechanism: 'Mechanism',
    weightLoss: 'Weight Loss',
    frequency: 'Frequency',
    approval: 'Approval',
    dualAction: 'Dual Action',
    rows: [
      ['GLP-1 + GIP (dual)', 'GLP-1 only', 'GLP-1 only'],
      ['Up to 20.9%', 'Up to 15%', 'Up to 16%'],
      ['Once a week', 'Once a week', 'Once a week'],
      ['FDA / EMA / Anvisa', 'FDA / Anvisa', 'FDA / EMA'],
      ['✅ Yes', '❌ No', '❌ No'],
    ],
    footnote:
      '* Data based on SURMOUNT-1 (tirzepatide) and STEP-1 (semaglutide) studies. Individual results may vary.',
  },

  dosages: {
    badge: 'Available Dosages',
    title: 'Titration Protocol',
    subtitle:
      'Treatment starts with a low dose and gradually increases every 4 weeks, under medical guidance.',
    initial: 'Starting',
    maintenance: 'Maintenance',
    maximum: 'Maximum',
    items: [
      { dose: '2.5 mg', type: 'Starting', description: 'Treatment initiation — 4 weeks of adaptation' },
      { dose: '5 mg', type: 'Maintenance', description: 'First effective therapeutic dose' },
      { dose: '7.5 mg', type: 'Maintenance', description: 'For those needing greater control' },
      { dose: '10 mg', type: 'Maintenance', description: 'Intermediate maintenance dose' },
      { dose: '12.5 mg', type: 'Maximum', description: 'Higher dose for greater efficacy' },
      { dose: '15 mg', type: 'Maximum', description: 'Maximum available dose' },
    ],
    protocolTitle: 'Recommended Protocol',
    protocolSteps: [
      'Start with 2.5 mg for the first 4 weeks',
      'Increase to 5 mg — first therapeutic dose',
      'Adjust in 2.5 mg increments every 4 weeks',
      'Maximum dose: 15 mg/week under medical guidance',
    ],
    disclaimer: '* Dose titration must be done exclusively under medical guidance',
    btnConsult: 'Consult a Specialist',
    btnWhatsApp: 'Ask Questions on WhatsApp',
  },

  testimonials: {
    badge: 'Real Testimonials',
    title: 'Lives transformed by Tirzepatide',
    subtitle:
      'Discover real stories from patients who achieved extraordinary results with medical follow-up.',
    items: [
      {
        name: 'Ana Carolina M.',
        text: 'In 6 months I lost 50 lbs with Mounjaro. My diabetes is completely controlled and my energy is back. My life has changed completely.',
        result: '-50 lbs',
        time: '6 months',
      },
      {
        name: 'Roberto Silva',
        text: 'I tried everything to lose weight. With Tirzepatide, I finally found something that truly works. 40 lbs down and counting!',
        result: '-40 lbs',
        time: '5 months',
      },
      {
        name: 'Mariana Costa',
        text: 'My endocrinologist recommended Mounjaro and it was the best decision. I lost 33 lbs, my blood pressure normalized, and my cholesterol dropped.',
        result: '-33 lbs',
        time: '4 months',
      },
    ],
    patientLabel: 'Patient in treatment',
  },

  pricing: {
    badge: 'Investment',
    title: 'Invest in your health',
    subtitle:
      'Choose the ideal plan for your needs. All plans include WhatsApp support and pharmaceutical guidance.',
    countdownTitle: 'Limited time offer',
    days: 'days',
    hours: 'hours',
    minutes: 'min',
    seconds: 'sec',
    popular: 'Most Popular',
  },

  guarantee: {
    badge: 'Guarantee & Trust',
    title: 'Your safety is our priority',
    subtitle:
      'We work exclusively with original Eli Lilly products, ensuring authenticity and efficacy in every dose.',
  },

  whereToBuy: {
    badge: 'How to Buy',
    title: 'Start your treatment in 3 steps',
    subtitle:
      'The process is simple, safe, and supported by our team from start to finish.',
    steps: [
      {
        title: 'Medical Consultation',
        description:
          'Tirzepatide requires a prescription. Consult an endocrinologist or your trusted physician for evaluation.',
      },
      {
        title: 'Send Your Prescription',
        description:
          'Send a photo of your prescription via WhatsApp. Our team verifies and prepares your order immediately.',
      },
      {
        title: 'Receive at Home',
        description:
          'Refrigerated delivery with tracking nationwide. Pay by card, wire transfer, or bank slip.',
      },
    ],
    noDoctor: "Don't have a doctor?",
    noDoctorDesc:
      'Our team can recommend partner endocrinologists in your area to help you get started.',
    btnDoctor: 'Request Doctor Referral',
    btnWhatsApp: 'Chat on WhatsApp',
  },

  faq: {
    badge: 'Frequently Asked Questions',
    title: 'Common questions',
    subtitle:
      "We answer the most common questions about Tirzepatide treatment. Didn't find what you're looking for? Talk directly to our team.",
    items: [
      {
        question: 'What is Tirzepatide (Mounjaro)?',
        answer:
          "Mounjaro is an injectable medication based on tirzepatide, developed by Eli Lilly. It is the world's first dual GLP-1 and GIP receptor agonist, indicated for type 2 diabetes and obesity. Its dual-receptor action results in weight loss superior to any other approved medication — up to 20.9% in 72 weeks of clinical study.",
      },
      {
        question: 'How much weight can I lose with Tirzepatide?',
        answer:
          'The SURMOUNT-1 study (2,539 participants) showed average weight loss of 15% with the 5mg dose, 19.5% with 10mg, and 20.9% with 15mg over 72 weeks. Individual results vary based on clinical history, diet, and physical activity.',
      },
      {
        question: 'How is the medication administered?',
        answer:
          'Mounjaro is administered by subcutaneous injection once a week. The injectable pen is pre-filled, disposable, and easy to use. It can be injected in the abdomen, thigh, or back of the arm, at any time of day, with or without food.',
      },
      {
        question: 'What are the side effects?',
        answer:
          'The most common side effects are gastrointestinal: nausea (especially in the first weeks), constipation, diarrhea, and decreased appetite. They are generally mild to moderate and decrease with gradual dose titration.',
      },
      {
        question: 'Do I need a prescription to buy?',
        answer:
          'Yes, Tirzepatide is a prescription medication. A valid medical prescription (valid for 90 days) is required for purchase.',
      },
      {
        question: 'How long before I see results?',
        answer:
          'Most patients notice reduced appetite within the first few weeks. Visible weight loss usually occurs from the 1st month. More significant results appear between the 3rd and 6th month.',
      },
      {
        question: 'Does Tirzepatide interact with other medications?',
        answer:
          'Tirzepatide may reduce the absorption of oral medications by delaying gastric emptying. Inform your doctor about all medications you are taking.',
      },
      {
        question: 'What is the treatment cost and payment options?',
        answer:
          'Prices range from $350 (2.5mg dose) to $800 (maximum doses) per box with 4 pens. We accept credit cards up to 12 installments, wire transfer with discount, and bank slip.',
      },
    ],
    stillQuestions: 'Still have questions?',
    stillQuestionsDesc:
      'Our team of specialists is ready to answer any questions about the treatment.',
    btnWhatsApp: 'Talk to a Specialist on WhatsApp',
  },

  cta: {
    available: 'Specialists available now',
    title: 'Start your transformation ',
    titleHighlight: 'today',
    subtitle:
      "Don't wait any longer to take care of your health. Talk to one of our specialists now and discover how Tirzepatide can transform your life.",
    chips: ['Personalized guidance', 'No commitment', '{shipping}', 'Ongoing support'],
    btnSpecialist: 'Talk to a Specialist',
    btnWhatsApp: 'WhatsApp Now',
    schedule: 'Available Monday to Friday, 8am to 6pm. We respond within 30 minutes.',
  },

  footer: {
    description:
      'Innovative Tirzepatide treatment for type 2 diabetes and obesity. Proven results with specialized medical follow-up.',
    quickLinks: 'Quick Links',
    treatment: 'Treatment',
    contact: 'Contact',
    copyright: 'All rights reserved.',
    disclaimer: '',
  },

  contactDialog: {
    title: 'Talk to a Specialist',
    description:
      "Fill in your details and we'll redirect you to the specialist's WhatsApp with your message ready.",
    nameLabel: 'Full name *',
    namePlaceholder: 'Your full name',
    nameError: 'Name must be at least 3 characters',
    objectiveLabel: 'Treatment objective *',
    objectivePlaceholder: 'Select an option',
    objectiveError: 'Please select an objective',
    objectives: [
      'Weight Loss',
      'Type 2 Diabetes Control',
      'Weight Loss + Diabetes Control',
      'I have questions and want more information',
    ],
    btnSubmit: 'Chat on WhatsApp',
    privacy: 'Your data is used only for contact purposes. We do not share with third parties.',
  },

  quiz: {
    badge: 'Find Your Plan',
    title: 'What is the ideal treatment for you?',
    subtitle: 'Answer a few quick questions and discover the best personalized option.',
    steps: [
      {
        question: 'What is your weight loss goal?',
        options: [
          'Lose 1-20 lbs for good',
          'Lose 21-50 lbs for good',
          'Lose over 50 lbs for good',
          'Maintain my weight and get fit',
          "Haven't decided",
        ],
      },
      {
        question: 'Have you tried weight loss medication before?',
        options: [
          'Yes, with positive results',
          'Yes, but without results',
          'No, never tried',
        ],
      },
      {
        question: 'Do you have any medical conditions?',
        options: [
          'Type 2 diabetes',
          'Pre-diabetes',
          'High cholesterol or hypertension',
          'No diagnosed conditions',
        ],
      },
      {
        question: 'What is your age range?',
        options: [
          '18 to 30 years',
          '31 to 45 years',
          '46 to 60 years',
          'Over 60 years',
        ],
      },
    ],
    back: 'Back',
    next: 'Next',
    stepOf: 'Step {current} of {total}',
    resultTitle: 'Your personalized plan is ready!',
    resultSubtitle: 'Based on your answers, Tirzepatide is an excellent option for you.',
    resultBmi: 'Your BMI',
    resultGoal: 'Goal',
    resultPlan: 'Recommended plan',
    resultDose: 'Recommended dosage',
    resultCta: 'Talk to a Specialist',
    resultWhatsApp: 'I want to know more about personalized treatment',
  },

  bmi: {
    badge: 'BMI Calculator',
    title: 'Check your BMI',
    subtitle: 'Discover your Body Mass Index and find out if Tirzepatide may be right for you.',
    heightLabel: 'Height',
    weightLabel: 'Weight',
    calculate: 'Calculate BMI',
    yourBmi: 'Your BMI',
    underweight: 'Underweight',
    normal: 'Normal weight',
    overweight: 'Overweight',
    obese: 'Obese',
    recommendation: 'Tirzepatide can help you reach and maintain a healthy weight. Talk to a specialist.',
    cta: 'Talk to a Specialist',
  },

  beforeAfter: {
    badge: 'Real Results',
    title: 'Transformations with Tirzepatide',
    subtitle: 'See real results from patients who started treatment with Tirzepatide.',
    before: 'Before',
    after: 'After',
    lost: 'Lost',
    inTime: 'in',
    disclaimer: 'Individual results may vary. Illustrative photos. Treatment should be supervised by a healthcare professional.',
  },

  floatingWhatsApp: 'Chat on WhatsApp',
  stickyBtn: 'Specialist',
  stickyWhatsApp: 'WhatsApp',

  whatsapp: {
    defaultMessage:
      "Hi! I'm interested in Tirzepatide (Mounjaro) treatment. Can you help me?",
    leadMessage: (name, objective, brand) =>
      `Hi! My name is *${name}*.\n\nI'm interested in: *${objective}*\n\nI'd like information about *Tirzepatide* treatment with *${brand}*. What dosage would be right for my case?`,
  },
};
