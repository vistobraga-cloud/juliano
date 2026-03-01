import type { Translations } from './types';

export const pt: Translations = {
  lang: 'pt',
  htmlLang: 'pt-BR',

  nav: {
    benefits: 'Benefícios',
    howItWorks: 'Como Funciona',
    dosages: 'Dosagens',
    testimonials: 'Depoimentos',
    pricing: 'Preços',
    faq: 'FAQ',
    cta: 'Falar com Especialista',
  },

  hero: {
    badgeSatisfaction: '98% de satisfação',
    titlePre: 'Perca até ',
    titleHighlight: '20% do peso',
    titlePost: ' com Tirzepatide',
    subtitle:
      'O tratamento mais avançado do mundo para emagrecimento e controle do diabetes tipo 2. Ação dual GLP-1 + GIP com ',
    subtitleBold: 'resultados comprovados em 72 semanas',
    subtitlePost: ' de estudo clínico.',
    btnStart: 'Quero Começar Agora',
    btnWhatsApp: 'Falar pelo WhatsApp',
    chips: [
      'Ação Dual GLP-1 + GIP',
      'Apenas 1x por semana',
      'Resultados em 4 semanas',
      'Sem fidelidade',
    ],
    patients: '+3.200 pacientes satisfeitos',
    floatWeight: 'de perda de peso',
    floatWeeks: 'semanas de estudo',
    floatWeekly: 'por semana',
    scrollLabel: 'Rolar para baixo',
    imgAlt: 'Mounjaro Tirzepatide — caneta injetável',
  },

  stats: {
    patientsLabel: 'Pacientes Atendidos',
    weightLabel: 'de Perda de Peso',
    weeksLabel: 'Semanas de Estudo Clínico',
    satisfactionLabel: 'de Satisfação dos Pacientes',
    prefix: 'Até ',
  },

  benefits: {
    badge: 'Benefícios Comprovados',
    title: 'Por que o Tirzepatide é diferente?',
    subtitle:
      'O único medicamento com ação dual GLP-1 + GIP — combinando dois hormônios da saciedade para resultados que nenhum outro tratamento consegue.',
    highlightTag: '⭐ Resultado Principal',
    items: [
      {
        title: 'Até 20,9% de Perda de Peso',
        description:
          'Resultado superior a qualquer outro medicamento aprovado para emagrecimento. Comprovado no estudo SURMOUNT-1 com 2.539 participantes.',
      },
      {
        title: 'Controle Total do Diabetes',
        description:
          'Redução de até 2,1% na HbA1c. O Tirzepatide normaliza os níveis de glicose com eficácia superior à insulina basal.',
      },
      {
        title: 'Controla a Fome no Cérebro',
        description:
          'Age diretamente nos centros de saciedade do hipotálamo, eliminando a vontade compulsiva de comer entre refeições.',
      },
      {
        title: 'Apenas 1 Aplicação por Semana',
        description:
          'Caneta pré-preenchida e descartável, de uso fácil e discreto. Pode ser aplicada em qualquer horário, com ou sem alimentos.',
      },
      {
        title: 'Melhora Cardiovascular',
        description:
          'Reduz pressão arterial, colesterol LDL e triglicerídeos. O estudo SURMOUNT-MMO mostrou redução de 16% em eventos cardíacos.',
      },
      {
        title: 'Seguro e Regulamentado',
        description:
          'Aprovado pela Anvisa, FDA e EMA. Fabricado pela Eli Lilly com décadas de pesquisa em diabetes e metabolismo.',
      },
    ],
  },

  howItWorks: {
    badge: 'Como Funciona',
    title: 'A ciência por trás do Tirzepatide',
    subtitle: 'O Mounjaro é o ',
    subtitleBold: 'primeiro e único agonista dual GLP-1/GIP aprovado',
    subtitlePost:
      ' no mundo — uma inovação da Eli Lilly que combina dois mecanismos de ação para resultados que nenhum tratamento anterior conseguiu.',
    steps: [
      {
        title: 'Ação Dual Inovadora',
        description:
          'O Tirzepatide ativa simultaneamente os receptores GLP-1 e GIP — dois hormônios naturais do intestino responsáveis pela saciedade e controle do metabolismo.',
      },
      {
        title: 'Redução Potente do Apetite',
        description:
          'Age diretamente no hipotálamo, reduzindo a produção de grelina (hormônio da fome) e aumentando a leptina (hormônio da saciedade) por horas após as refeições.',
      },
      {
        title: 'Regulação Precisa da Glicose',
        description:
          'Estimula a secreção de insulina de forma glucose-dependente e suprime o glucagon, mantendo o açúcar no sangue estável sem risco de hipoglicemia.',
      },
      {
        title: 'Resultados Sustentáveis',
        description:
          'Com a titulação gradual das doses e acompanhamento médico, os resultados se consolidam ao longo dos meses e se mantêm com o tratamento contínuo.',
      },
    ],
    glp1Title: 'GLP-1',
    glp1Desc: 'Reduz o apetite, retarda o esvaziamento gástrico e estimula a liberação de insulina.',
    gipTitle: 'GIP',
    gipDesc: 'Melhora a sensibilidade à insulina, reduz inflamação e auxilia no metabolismo de gorduras.',
    synergyTitle: 'Ação Sinérgica',
    synergyDesc: 'A combinação potencializa cada mecanismo, multiplicando a eficácia do tratamento.',
    resultTitle: 'Resultado',
    resultDesc:
      'Até 20,9% de perda de peso em 72 semanas. O maior resultado já registrado em um estudo clínico.',
  },

  comparison: {
    badge: 'Comparativo de Mercado',
    title: 'Tirzepatide vs Concorrentes',
    subtitle:
      'Veja por que o Mounjaro é considerado o medicamento mais eficaz da categoria por endocrinologistas em todo o mundo.',
    headers: ['Característica', 'Tirzepatide (Mounjaro)', 'Semaglutida (Ozempic)', 'Semaglutida (Wegovy)'],
    mechanism: 'Mecanismo',
    weightLoss: 'Perda de Peso',
    frequency: 'Frequência',
    approval: 'Aprovação',
    dualAction: 'Ação Dual',
    rows: [
      ['GLP-1 + GIP (dual)', 'GLP-1 apenas', 'GLP-1 apenas'],
      ['Até 20,9%', 'Até 15%', 'Até 16%'],
      ['1x por semana', '1x por semana', '1x por semana'],
      ['Anvisa / FDA / EMA', 'Anvisa / FDA', 'FDA / EMA'],
      ['✅ Sim', '❌ Não', '❌ Não'],
    ],
    footnote:
      '* Dados baseados nos estudos SURMOUNT-1 (tirzepatide) e STEP-1 (semaglutida). Resultados individuais podem variar.',
  },

  dosages: {
    badge: 'Dosagens Disponíveis',
    title: 'Protocolo de titulação',
    subtitle:
      'O tratamento inicia com dose baixa e aumenta gradualmente a cada 4 semanas, sob orientação médica.',
    initial: 'Inicial',
    maintenance: 'Manutenção',
    maximum: 'Máxima',
    items: [
      { dose: '2,5 mg', type: 'Inicial', description: 'Início do tratamento — 4 semanas de adaptação' },
      { dose: '5 mg', type: 'Manutenção', description: 'Primeira dose terapêutica eficaz' },
      { dose: '7,5 mg', type: 'Manutenção', description: 'Para quem precisa de maior controle' },
      { dose: '10 mg', type: 'Manutenção', description: 'Dose intermediária de manutenção' },
      { dose: '12,5 mg', type: 'Máxima', description: 'Dose elevada para maior eficácia' },
      { dose: '15 mg', type: 'Máxima', description: 'Dose máxima disponível' },
    ],
    protocolTitle: 'Protocolo Recomendado',
    protocolSteps: [
      'Iniciar com 2,5 mg nas primeiras 4 semanas',
      'Aumentar para 5 mg — primeira dose terapêutica',
      'Ajustar em incrementos de 2,5 mg a cada 4 semanas',
      'Dose máxima: 15 mg/semana sob orientação médica',
    ],
    disclaimer: '* A titulação das doses deve ser feita exclusivamente sob orientação médica',
    btnConsult: 'Consultar Especialista',
    btnWhatsApp: 'Tirar Dúvidas no WhatsApp',
  },

  testimonials: {
    badge: 'Depoimentos Reais',
    title: 'Vidas transformadas pelo Tirzepatide',
    subtitle:
      'Conheça histórias reais de pacientes que alcançaram resultados extraordinários com acompanhamento médico.',
    items: [
      {
        name: 'Ana Carolina M.',
        text: 'Em 6 meses perdi 23kg com o Mounjaro. Meu diabetes está totalmente controlado e minha energia voltou. Minha vida mudou por completo.',
        result: '-23 kg',
        time: '6 meses',
      },
      {
        name: 'Roberto Silva',
        text: 'Tentei de tudo para emagrecer. Com o Tirzepatide, finalmente encontrei algo que funciona de verdade. São 18kg a menos e contando!',
        result: '-18 kg',
        time: '5 meses',
      },
      {
        name: 'Mariana Costa',
        text: 'Minha endocrinologista indicou o Mounjaro e foi a melhor decisão. Emagreci 15kg, minha pressão normalizou e o colesterol despencou.',
        result: '-15 kg',
        time: '4 meses',
      },
    ],
    patientLabel: 'Paciente em tratamento',
  },

  pricing: {
    badge: 'Investimento',
    title: 'Invista na sua saúde',
    subtitle:
      'Escolha o plano ideal para o seu momento. Todos incluem suporte via WhatsApp e orientação farmacêutica.',
    countdownTitle: 'Oferta por tempo limitado',
    days: 'dias',
    hours: 'horas',
    minutes: 'min',
    seconds: 'seg',
    popular: 'Mais Popular',
  },

  guarantee: {
    badge: 'Garantia & Confiança',
    title: 'Sua segurança é nossa prioridade',
    subtitle:
      'Trabalhamos exclusivamente com produtos originais Eli Lilly, garantindo autenticidade e eficácia em cada dose.',
  },

  whereToBuy: {
    badge: 'Como Comprar',
    title: 'Comece seu tratamento em 3 passos',
    subtitle:
      'O processo é simples, seguro e com suporte da nossa equipe do início ao fim.',
    steps: [
      {
        title: 'Consulta Médica',
        description:
          'O Tirzepatide requer prescrição médica. Consulte um endocrinologista ou médico de confiança para avaliação.',
      },
      {
        title: 'Envie a Receita',
        description:
          'Envie a foto da receita pelo WhatsApp. Nossa equipe verifica e prepara seu pedido imediatamente.',
      },
      {
        title: 'Receba em Casa',
        description:
          'Entrega refrigerada com rastreio para todo o Brasil. Pague com cartão, PIX ou boleto.',
      },
    ],
    noDoctor: 'Não tem médico?',
    noDoctorDesc:
      'Nossa equipe pode indicar endocrinologistas parceiros em sua região para facilitar o início do tratamento.',
    btnDoctor: 'Solicitar Indicação Médica',
    btnWhatsApp: 'Falar pelo WhatsApp',
  },

  faq: {
    badge: 'Dúvidas Frequentes',
    title: 'Perguntas mais comuns',
    subtitle:
      'Respondemos as principais dúvidas sobre o tratamento com Tirzepatide. Não encontrou o que procura? Fale diretamente com nossa equipe.',
    items: [
      {
        question: 'O que é o Tirzepatide (Mounjaro)?',
        answer:
          'O Mounjaro é um medicamento injetável à base de tirzepatida, desenvolvido pela Eli Lilly. É o primeiro agonista dual dos receptores GLP-1 e GIP do mundo, indicado para diabetes tipo 2 e obesidade. Sua ação em dois receptores simultaneamente resulta em perda de peso superior a qualquer outro medicamento aprovado — até 20,9% em 72 semanas de estudo clínico.',
      },
      {
        question: 'Quanto peso é possível perder com o Tirzepatide?',
        answer:
          'O estudo SURMOUNT-1 (2.539 participantes) demonstrou perda média de 15% do peso com a dose de 5mg, 19,5% com 10mg e 20,9% com 15mg ao longo de 72 semanas. Resultados individuais variam conforme histórico clínico, alimentação e atividade física.',
      },
      {
        question: 'Como é feita a aplicação do medicamento?',
        answer:
          'O Mounjaro é aplicado por injeção subcutânea uma vez por semana. A caneta injetável é pré-preenchida, descartável e de fácil uso. Pode ser aplicada no abdômen, coxa ou parte posterior do braço, em qualquer horário do dia, com ou sem alimentação.',
      },
      {
        question: 'Quais são os efeitos colaterais?',
        answer:
          'Os efeitos mais comuns são gastrointestinais: náuseas (especialmente nas primeiras semanas), constipação, diarreia e redução do apetite. São geralmente leves a moderados e diminuem com a titulação gradual das doses.',
      },
      {
        question: 'Preciso de receita médica para comprar?',
        answer:
          'Sim, o Tirzepatide é medicamento de venda sob prescrição médica. É necessário apresentar receita médica válida (validade de 90 dias) para a compra.',
      },
      {
        question: 'Qual o prazo para ver resultados?',
        answer:
          'A maioria dos pacientes nota redução do apetite já nas primeiras semanas. Perda de peso visível costuma ocorrer a partir do 1º mês. Resultados mais expressivos aparecem entre o 3º e 6º mês.',
      },
      {
        question: 'O Tirzepatide tem interação com outros medicamentos?',
        answer:
          'O Tirzepatide pode reduzir a absorção de medicamentos orais ao retardar o esvaziamento gástrico. Informe ao médico todos os medicamentos em uso.',
      },
      {
        question: 'Qual o preço do tratamento e como posso parcelar?',
        answer:
          'Os valores variam de R$ 1.400 (dose 2,5mg) a R$ 3.200 (doses máximas) por caixa com 4 canetas. Aceitamos cartão em até 12x, PIX com desconto e boleto bancário.',
      },
    ],
    stillQuestions: 'Ainda tem dúvidas?',
    stillQuestionsDesc:
      'Nossa equipe de especialistas está pronta para responder qualquer pergunta sobre o tratamento.',
    btnWhatsApp: 'Falar com Especialista pelo WhatsApp',
  },

  cta: {
    available: 'Especialistas disponíveis agora',
    title: 'Comece sua transformação ',
    titleHighlight: 'hoje mesmo',
    subtitle:
      'Não espere mais para cuidar da sua saúde. Fale agora com um dos nossos especialistas e descubra como o Tirzepatide pode transformar sua vida.',
    chips: ['Orientação personalizada', 'Sem fidelidade', '{shipping}', 'Suporte contínuo'],
    btnSpecialist: 'Falar com Especialista',
    btnWhatsApp: 'WhatsApp Agora',
    schedule: 'Atendimento de segunda a sexta, das 8h às 18h. Retornamos em até 30 minutos.',
  },

  footer: {
    description:
      'Tratamento inovador com Tirzepatide para diabetes tipo 2 e obesidade. Resultados comprovados com acompanhamento médico especializado.',
    quickLinks: 'Links Rápidos',
    treatment: 'Tratamento',
    contact: 'Contato',
    copyright: 'Todos os direitos reservados.',
    disclaimer: '',
  },

  contactDialog: {
    title: 'Falar com Especialista',
    description:
      'Preencha seus dados e te redirecionamos para o WhatsApp do especialista com sua mensagem já pronta.',
    nameLabel: 'Nome completo *',
    namePlaceholder: 'Seu nome completo',
    nameError: 'Informe seu nome completo',
    phoneLabel: 'Telefone / WhatsApp *',
    phonePlaceholder: '(11) 99999-9999',
    phoneError: 'Telefone inválido',
    objectiveLabel: 'Objetivo do tratamento *',
    objectivePlaceholder: 'Selecione uma opção',
    objectiveError: 'Selecione um objetivo',
    objectives: [
      'Emagrecimento / Perda de Peso',
      'Controle do Diabetes Tipo 2',
      'Emagrecimento + Controle do Diabetes',
      'Tenho dúvidas e quero mais informações',
    ],
    btnSubmit: 'Falar pelo WhatsApp',
    privacy: 'Seus dados são usados apenas para entrar em contato. Não compartilhamos com terceiros.',
  },

  quiz: {
    badge: 'Descubra seu Plano',
    title: 'Qual é o tratamento ideal para você?',
    subtitle: 'Responda algumas perguntas rápidas e descubra a melhor opção personalizada.',
    steps: [
      {
        question: 'Qual é o seu objetivo de perda de peso?',
        options: [
          'Perder de 1 a 10 kg',
          'Perder de 10 a 25 kg',
          'Perder mais de 25 kg',
          'Manter meu peso e melhorar a saúde',
          'Ainda não decidi',
        ],
      },
      {
        question: 'Você já usou algum medicamento para emagrecimento antes?',
        options: [
          'Sim, com resultados positivos',
          'Sim, mas sem resultados',
          'Não, nunca usei',
        ],
      },
      {
        question: 'Você tem alguma condição médica?',
        options: [
          'Diabetes tipo 2',
          'Pré-diabetes',
          'Colesterol alto ou hipertensão',
          'Nenhuma condição diagnosticada',
        ],
      },
      {
        question: 'Qual é a sua faixa etária?',
        options: [
          '18 a 30 anos',
          '31 a 45 anos',
          '46 a 60 anos',
          'Acima de 60 anos',
        ],
      },
    ],
    back: 'Voltar',
    next: 'Próximo',
    stepOf: 'Passo {current} de {total}',
    resultTitle: 'Seu plano personalizado está pronto!',
    resultSubtitle: 'Com base nas suas respostas, o Tirzepatide é uma excelente opção para você.',
    resultBmi: 'Seu IMC',
    resultGoal: 'Objetivo',
    resultPlan: 'Plano recomendado',
    resultDose: 'Dosagem recomendada',
    resultCta: 'Falar com Especialista',
    resultWhatsApp: 'Quero saber mais sobre o tratamento personalizado',
  },

  bmi: {
    badge: 'Calculadora de IMC',
    title: 'Calcule seu IMC',
    subtitle: 'Descubra seu Índice de Massa Corporal e entenda se o Tirzepatide pode ser indicado para você.',
    heightLabel: 'Altura',
    weightLabel: 'Peso',
    calculate: 'Calcular IMC',
    yourBmi: 'Seu IMC',
    underweight: 'Abaixo do peso',
    normal: 'Peso normal',
    overweight: 'Sobrepeso',
    obese: 'Obesidade',
    recommendation: 'O Tirzepatide pode ajudar a alcançar e manter um peso saudável. Fale com um especialista.',
    cta: 'Falar com Especialista',
  },

  beforeAfter: {
    badge: 'Resultados Reais',
    title: 'Transformações com Tirzepatide',
    subtitle: 'Veja os resultados reais de pacientes que iniciaram o tratamento com Tirzepatide.',
    before: 'Antes',
    after: 'Depois',
    lost: 'Perdeu',
    inTime: 'em',
    disclaimer: 'Resultados individuais podem variar. Fotos ilustrativas. Tratamento deve ser acompanhado por profissional de saúde.',
  },

  floatingWhatsApp: 'Falar pelo WhatsApp',
  stickyBtn: 'Especialista',
  stickyWhatsApp: 'WhatsApp',

  whatsapp: {
    defaultMessage:
      'Olá! Tenho interesse no tratamento com Tirzepatide (Mounjaro). Pode me ajudar?',
    leadMessage: (name, phone, objective) =>
      `Olá! Me chamo *${name}*, meu telefone é *${phone}*.\n\nTenho interesse em: *${objective}*\n\nPoderia me ajudar com informações sobre o tratamento com Tirzepatide (Mounjaro)?`,
  },
};
