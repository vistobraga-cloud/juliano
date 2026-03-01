import type { Translations } from './types';

export const es: Translations = {
  lang: 'es',
  htmlLang: 'es',

  nav: {
    benefits: 'Beneficios',
    howItWorks: 'Cómo Funciona',
    dosages: 'Dosis',
    testimonials: 'Testimonios',
    pricing: 'Precios',
    faq: 'FAQ',
    cta: 'Hablar con Especialista',
  },

  hero: {
    badgeSatisfaction: '98% de satisfacción',
    titlePre: 'Pierde hasta ',
    titleHighlight: '20% de tu peso',
    titlePost: ' con Tirzepatide',
    subtitle:
      'El tratamiento más avanzado del mundo para adelgazar y controlar la diabetes tipo 2. Acción dual GLP-1 + GIP con ',
    subtitleBold: 'resultados comprobados en 72 semanas',
    subtitlePost: ' de estudio clínico.',
    btnStart: 'Quiero Empezar Ahora',
    btnWhatsApp: 'Hablar por WhatsApp',
    chips: [
      'Acción Dual GLP-1 + GIP',
      'Solo 1 vez por semana',
      'Resultados en 4 semanas',
      'Sin compromiso',
    ],
    patients: '+3.200 pacientes satisfechos',
    floatWeight: 'de pérdida de peso',
    floatWeeks: 'semanas de estudio',
    floatWeekly: 'por semana',
    scrollLabel: 'Desplazar hacia abajo',
    imgAlt: 'Mounjaro Tirzepatide — pluma inyectable',
  },

  stats: {
    patientsLabel: 'Pacientes Atendidos',
    weightLabel: 'de Pérdida de Peso',
    weeksLabel: 'Semanas de Estudio Clínico',
    satisfactionLabel: 'de Satisfacción de Pacientes',
    prefix: 'Hasta ',
  },

  benefits: {
    badge: 'Beneficios Comprobados',
    title: '¿Por qué Tirzepatide es diferente?',
    subtitle:
      'El único medicamento con acción dual GLP-1 + GIP — combinando dos hormonas de saciedad para resultados que ningún otro tratamiento logra.',
    highlightTag: '⭐ Resultado Principal',
    items: [
      {
        title: 'Hasta 20,9% de Pérdida de Peso',
        description:
          'Resultado superior a cualquier otro medicamento aprobado para adelgazar. Comprobado en el estudio SURMOUNT-1 con 2.539 participantes.',
      },
      {
        title: 'Control Total de la Diabetes',
        description:
          'Reducción de hasta 2,1% en HbA1c. Tirzepatide normaliza los niveles de glucosa con eficacia superior a la insulina basal.',
      },
      {
        title: 'Controla el Hambre en el Cerebro',
        description:
          'Actúa directamente en los centros de saciedad del hipotálamo, eliminando los antojos compulsivos entre comidas.',
      },
      {
        title: 'Solo 1 Inyección por Semana',
        description:
          'Pluma prellenada y desechable, fácil y discreta de usar. Se puede inyectar a cualquier hora del día, con o sin alimentos.',
      },
      {
        title: 'Mejora Cardiovascular',
        description:
          'Reduce la presión arterial, el colesterol LDL y los triglicéridos. El estudio SURMOUNT-MMO mostró una reducción del 16% en eventos cardíacos.',
      },
      {
        title: 'Seguro y Regulado',
        description:
          'Aprobado por la FDA, EMA y Anvisa. Fabricado por Eli Lilly con décadas de investigación en diabetes y metabolismo.',
      },
    ],
  },

  howItWorks: {
    badge: 'Cómo Funciona',
    title: 'La ciencia detrás del Tirzepatide',
    subtitle: 'Mounjaro es el ',
    subtitleBold: 'primer y único agonista dual GLP-1/GIP aprobado',
    subtitlePost:
      ' en el mundo — una innovación de Eli Lilly que combina dos mecanismos de acción para resultados que ningún tratamiento anterior ha logrado.',
    steps: [
      {
        title: 'Acción Dual Innovadora',
        description:
          'Tirzepatide activa simultáneamente los receptores GLP-1 y GIP — dos hormonas naturales del intestino responsables de la saciedad y el control del metabolismo.',
      },
      {
        title: 'Reducción Potente del Apetito',
        description:
          'Actúa directamente en el hipotálamo, reduciendo la producción de grelina (hormona del hambre) y aumentando la leptina (hormona de la saciedad) por horas después de las comidas.',
      },
      {
        title: 'Regulación Precisa de la Glucosa',
        description:
          'Estimula la secreción de insulina de forma dependiente de glucosa y suprime el glucagón, manteniendo el azúcar en sangre estable sin riesgo de hipoglucemia.',
      },
      {
        title: 'Resultados Sostenibles',
        description:
          'Con la titulación gradual de las dosis y seguimiento médico, los resultados se consolidan a lo largo de los meses y se mantienen con el tratamiento continuo.',
      },
    ],
    glp1Title: 'GLP-1',
    glp1Desc: 'Reduce el apetito, retrasa el vaciamiento gástrico y estimula la liberación de insulina.',
    gipTitle: 'GIP',
    gipDesc: 'Mejora la sensibilidad a la insulina, reduce la inflamación y ayuda en el metabolismo de grasas.',
    synergyTitle: 'Acción Sinérgica',
    synergyDesc: 'La combinación potencia cada mecanismo, multiplicando la eficacia del tratamiento.',
    resultTitle: 'Resultado',
    resultDesc:
      'Hasta 20,9% de pérdida de peso en 72 semanas. El mayor resultado jamás registrado en un estudio clínico.',
  },

  comparison: {
    badge: 'Comparativa de Mercado',
    title: 'Tirzepatide vs Competidores',
    subtitle:
      'Descubra por qué Mounjaro es considerado el medicamento más eficaz de su categoría por endocrinólogos de todo el mundo.',
    headers: ['Característica', 'Tirzepatide (Mounjaro)', 'Semaglutida (Ozempic)', 'Semaglutida (Wegovy)'],
    mechanism: 'Mecanismo',
    weightLoss: 'Pérdida de Peso',
    frequency: 'Frecuencia',
    approval: 'Aprobación',
    dualAction: 'Acción Dual',
    rows: [
      ['GLP-1 + GIP (dual)', 'Solo GLP-1', 'Solo GLP-1'],
      ['Hasta 20,9%', 'Hasta 15%', 'Hasta 16%'],
      ['1 vez por semana', '1 vez por semana', '1 vez por semana'],
      ['FDA / EMA / Anvisa', 'FDA / Anvisa', 'FDA / EMA'],
      ['✅ Sí', '❌ No', '❌ No'],
    ],
    footnote:
      '* Datos basados en los estudios SURMOUNT-1 (tirzepatide) y STEP-1 (semaglutida). Los resultados individuales pueden variar.',
  },

  dosages: {
    badge: 'Dosis Disponibles',
    title: 'Protocolo de titulación',
    subtitle:
      'El tratamiento inicia con dosis baja y aumenta gradualmente cada 4 semanas, bajo orientación médica.',
    initial: 'Inicial',
    maintenance: 'Mantenimiento',
    maximum: 'Máxima',
    items: [
      { dose: '2,5 mg', type: 'Inicial', description: 'Inicio del tratamiento — 4 semanas de adaptación' },
      { dose: '5 mg', type: 'Mantenimiento', description: 'Primera dosis terapéutica eficaz' },
      { dose: '7,5 mg', type: 'Mantenimiento', description: 'Para quienes necesitan mayor control' },
      { dose: '10 mg', type: 'Mantenimiento', description: 'Dosis intermedia de mantenimiento' },
      { dose: '12,5 mg', type: 'Máxima', description: 'Dosis elevada para mayor eficacia' },
      { dose: '15 mg', type: 'Máxima', description: 'Dosis máxima disponible' },
    ],
    protocolTitle: 'Protocolo Recomendado',
    protocolSteps: [
      'Iniciar con 2,5 mg en las primeras 4 semanas',
      'Aumentar a 5 mg — primera dosis terapéutica',
      'Ajustar en incrementos de 2,5 mg cada 4 semanas',
      'Dosis máxima: 15 mg/semana bajo orientación médica',
    ],
    disclaimer: '* La titulación de las dosis debe hacerse exclusivamente bajo orientación médica',
    btnConsult: 'Consultar Especialista',
    btnWhatsApp: 'Resolver Dudas por WhatsApp',
  },

  testimonials: {
    badge: 'Testimonios Reales',
    title: 'Vidas transformadas por Tirzepatide',
    subtitle:
      'Conozca historias reales de pacientes que lograron resultados extraordinarios con seguimiento médico.',
    items: [
      {
        name: 'Ana Carolina M.',
        text: 'En 6 meses perdí 23 kg con Mounjaro. Mi diabetes está totalmente controlada y mi energía volvió. Mi vida cambió por completo.',
        result: '-23 kg',
        time: '6 meses',
      },
      {
        name: 'Roberto Silva',
        text: 'Probé de todo para adelgazar. Con Tirzepatide, finalmente encontré algo que funciona de verdad. ¡Son 18 kg menos y contando!',
        result: '-18 kg',
        time: '5 meses',
      },
      {
        name: 'Mariana Costa',
        text: 'Mi endocrinóloga me indicó Mounjaro y fue la mejor decisión. Adelgacé 15 kg, mi presión se normalizó y el colesterol bajó.',
        result: '-15 kg',
        time: '4 meses',
      },
    ],
    patientLabel: 'Paciente en tratamiento',
  },

  pricing: {
    badge: 'Inversión',
    title: 'Invierte en tu salud',
    subtitle:
      'Elige el plan ideal para tu momento. Todos incluyen soporte por WhatsApp y orientación farmacéutica.',
    countdownTitle: 'Oferta por tiempo limitado',
    days: 'días',
    hours: 'horas',
    minutes: 'min',
    seconds: 'seg',
    popular: 'Más Popular',
  },

  guarantee: {
    badge: 'Garantía y Confianza',
    title: 'Tu seguridad es nuestra prioridad',
    subtitle:
      'Trabajamos exclusivamente con productos originales Eli Lilly, garantizando autenticidad y eficacia en cada dosis.',
  },

  whereToBuy: {
    badge: 'Cómo Comprar',
    title: 'Comienza tu tratamiento en 3 pasos',
    subtitle:
      'El proceso es simple, seguro y con soporte de nuestro equipo de principio a fin.',
    steps: [
      {
        title: 'Consulta Médica',
        description:
          'Tirzepatide requiere prescripción médica. Consulta un endocrinólogo o médico de confianza para evaluación.',
      },
      {
        title: 'Envía la Receta',
        description:
          'Envía la foto de la receta por WhatsApp. Nuestro equipo verifica y prepara tu pedido inmediatamente.',
      },
      {
        title: 'Recibe en Casa',
        description:
          'Entrega refrigerada con seguimiento a todo el país. Paga con tarjeta, transferencia o boleta.',
      },
    ],
    noDoctor: '¿No tienes médico?',
    noDoctorDesc:
      'Nuestro equipo puede indicarte endocrinólogos asociados en tu zona para facilitar el inicio del tratamiento.',
    btnDoctor: 'Solicitar Indicación Médica',
    btnWhatsApp: 'Hablar por WhatsApp',
  },

  faq: {
    badge: 'Preguntas Frecuentes',
    title: 'Preguntas más comunes',
    subtitle:
      'Respondemos las principales dudas sobre el tratamiento con Tirzepatide. ¿No encontraste lo que buscas? Habla directamente con nuestro equipo.',
    items: [
      {
        question: '¿Qué es el Tirzepatide (Mounjaro)?',
        answer:
          'Mounjaro es un medicamento inyectable a base de tirzepatida, desarrollado por Eli Lilly. Es el primer agonista dual de los receptores GLP-1 y GIP del mundo, indicado para diabetes tipo 2 y obesidad. Su acción en dos receptores simultáneamente resulta en una pérdida de peso superior a cualquier otro medicamento aprobado — hasta 20,9% en 72 semanas de estudio clínico.',
      },
      {
        question: '¿Cuánto peso se puede perder con Tirzepatide?',
        answer:
          'El estudio SURMOUNT-1 (2.539 participantes) demostró una pérdida promedio de 15% del peso con la dosis de 5mg, 19,5% con 10mg y 20,9% con 15mg a lo largo de 72 semanas. Los resultados individuales varían según el historial clínico, alimentación y actividad física.',
      },
      {
        question: '¿Cómo se aplica el medicamento?',
        answer:
          'Mounjaro se aplica por inyección subcutánea una vez por semana. La pluma inyectable es prellenada, desechable y fácil de usar. Se puede aplicar en el abdomen, muslo o parte posterior del brazo, a cualquier hora del día, con o sin alimentos.',
      },
      {
        question: '¿Cuáles son los efectos secundarios?',
        answer:
          'Los efectos más comunes son gastrointestinales: náuseas (especialmente en las primeras semanas), estreñimiento, diarrea y disminución del apetito. Son generalmente leves a moderados y disminuyen con la titulación gradual de las dosis.',
      },
      {
        question: '¿Necesito receta médica para comprar?',
        answer:
          'Sí, Tirzepatide es un medicamento de venta bajo prescripción médica. Es necesario presentar una receta médica válida (vigencia de 90 días) para la compra.',
      },
      {
        question: '¿Cuánto tarda en verse resultados?',
        answer:
          'La mayoría de los pacientes nota reducción del apetito ya en las primeras semanas. La pérdida de peso visible suele ocurrir a partir del 1er mes. Resultados más significativos aparecen entre el 3er y 6to mes.',
      },
      {
        question: '¿Tirzepatide interactúa con otros medicamentos?',
        answer:
          'Tirzepatide puede reducir la absorción de medicamentos orales al retrasar el vaciamiento gástrico. Informe a su médico sobre todos los medicamentos en uso.',
      },
      {
        question: '¿Cuál es el precio del tratamiento y cómo puedo pagarlo?',
        answer:
          'Los valores varían de US$ 350 (dosis 2,5mg) a US$ 800 (dosis máximas) por caja con 4 plumas. Aceptamos tarjeta hasta 12 cuotas, transferencia con descuento y boleta.',
      },
    ],
    stillQuestions: '¿Aún tienes dudas?',
    stillQuestionsDesc:
      'Nuestro equipo de especialistas está listo para responder cualquier pregunta sobre el tratamiento.',
    btnWhatsApp: 'Hablar con Especialista por WhatsApp',
  },

  cta: {
    available: 'Especialistas disponibles ahora',
    title: 'Comienza tu transformación ',
    titleHighlight: 'hoy mismo',
    subtitle:
      'No esperes más para cuidar tu salud. Habla ahora con uno de nuestros especialistas y descubre cómo Tirzepatide puede transformar tu vida.',
    chips: ['Orientación personalizada', 'Sin compromiso', '{shipping}', 'Soporte continuo'],
    btnSpecialist: 'Hablar con Especialista',
    btnWhatsApp: 'WhatsApp Ahora',
    schedule: 'Atención de lunes a viernes, de 8h a 18h. Respondemos en hasta 30 minutos.',
  },

  footer: {
    description:
      'Tratamiento innovador con Tirzepatide para diabetes tipo 2 y obesidad. Resultados comprobados con seguimiento médico especializado.',
    quickLinks: 'Enlaces Rápidos',
    treatment: 'Tratamiento',
    contact: 'Contacto',
    copyright: 'Todos los derechos reservados.',
    disclaimer: '',
  },

  contactDialog: {
    title: 'Hablar con Especialista',
    description:
      'Complete sus datos y lo redirigiremos al WhatsApp del especialista con su mensaje listo.',
    nameLabel: 'Nombre completo *',
    namePlaceholder: 'Su nombre completo',
    nameError: 'Ingrese su nombre completo',
    phoneLabel: 'Teléfono / WhatsApp *',
    phonePlaceholder: '+1 (555) 123-4567',
    phoneError: 'Teléfono inválido',
    objectiveLabel: 'Objetivo del tratamiento *',
    objectivePlaceholder: 'Seleccione una opción',
    objectiveError: 'Seleccione un objetivo',
    objectives: [
      'Adelgazamiento / Pérdida de Peso',
      'Control de Diabetes Tipo 2',
      'Adelgazamiento + Control de Diabetes',
      'Tengo dudas y quiero más información',
    ],
    btnSubmit: 'Hablar por WhatsApp',
    privacy: 'Sus datos se usan solo para contacto. No compartimos con terceros.',
  },

  quiz: {
    badge: 'Descubre tu Plan',
    title: '¿Cuál es el tratamiento ideal para ti?',
    subtitle: 'Responde algunas preguntas rápidas y descubre la mejor opción personalizada.',
    steps: [
      {
        question: '¿Cuál es tu objetivo de pérdida de peso?',
        options: [
          'Perder de 1 a 10 kg',
          'Perder de 10 a 25 kg',
          'Perder más de 25 kg',
          'Mantener mi peso y mejorar la salud',
          'Aún no he decidido',
        ],
      },
      {
        question: '¿Has usado medicamentos para adelgazar antes?',
        options: [
          'Sí, con resultados positivos',
          'Sí, pero sin resultados',
          'No, nunca he usado',
        ],
      },
      {
        question: '¿Tienes alguna condición médica?',
        options: [
          'Diabetes tipo 2',
          'Pre-diabetes',
          'Colesterol alto o hipertensión',
          'Ninguna condición diagnosticada',
        ],
      },
      {
        question: '¿Cuál es tu rango de edad?',
        options: [
          '18 a 30 años',
          '31 a 45 años',
          '46 a 60 años',
          'Mayor de 60 años',
        ],
      },
    ],
    back: 'Volver',
    next: 'Siguiente',
    stepOf: 'Paso {current} de {total}',
    resultTitle: '¡Tu plan personalizado está listo!',
    resultSubtitle: 'Según tus respuestas, Tirzepatide es una excelente opción para ti.',
    resultBmi: 'Tu IMC',
    resultGoal: 'Objetivo',
    resultPlan: 'Plan recomendado',
    resultCta: 'Hablar con Especialista',
    resultWhatsApp: 'Quiero saber más sobre el tratamiento personalizado',
  },

  bmi: {
    badge: 'Calculadora de IMC',
    title: 'Calcula tu IMC',
    subtitle: 'Descubre tu Índice de Masa Corporal y si Tirzepatide puede ser indicado para ti.',
    heightLabel: 'Altura',
    weightLabel: 'Peso',
    calculate: 'Calcular IMC',
    yourBmi: 'Tu IMC',
    underweight: 'Bajo peso',
    normal: 'Peso normal',
    overweight: 'Sobrepeso',
    obese: 'Obesidad',
    recommendation: 'Tirzepatide puede ayudarte a alcanzar y mantener un peso saludable. Habla con un especialista.',
    cta: 'Hablar con Especialista',
  },

  beforeAfter: {
    badge: 'Resultados Reales',
    title: 'Transformaciones con Tirzepatide',
    subtitle: 'Mira los resultados reales de pacientes que iniciaron tratamiento con Tirzepatide.',
    before: 'Antes',
    after: 'Después',
    lost: 'Perdió',
    inTime: 'en',
    disclaimer: 'Los resultados individuales pueden variar. Fotos ilustrativas. El tratamiento debe ser supervisado por un profesional de la salud.',
  },

  floatingWhatsApp: 'Hablar por WhatsApp',
  stickyBtn: 'Especialista',
  stickyWhatsApp: 'WhatsApp',

  whatsapp: {
    defaultMessage:
      '¡Hola! Estoy interesado en el tratamiento con Tirzepatide (Mounjaro). ¿Pueden ayudarme?',
    leadMessage: (name, phone, objective) =>
      `¡Hola! Me llamo *${name}*, mi teléfono es *${phone}*.\n\nEstoy interesado en: *${objective}*\n\n¿Podrían ayudarme con información sobre el tratamiento con Tirzepatide (Mounjaro)?`,
  },
};
