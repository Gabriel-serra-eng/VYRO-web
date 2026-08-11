export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "prazo-entrega",
    question: "Qual o prazo para o site ou campanha ficar no ar?",
    answer:
      "Sites de alta conversao ficam prontos em ate 15 dias uteis. Campanhas de trafego pago podem ser ativadas em ate 5 dias apos o alinhamento estrategico.",
  },
  {
    id: "resultados-tempo",
    question: "Em quanto tempo eu vejo resultados?",
    answer:
      "Os primeiros leads qualificados costumam aparecer nas primeiras semanas de campanha. Resultados consistentes de agenda cheia sao construidos entre 60 e 90 dias.",
  },
  {
    id: "tipo-clinica",
    question: "A VYRO atende qualquer tipo de clinica ou negocio local?",
    answer:
      "Somos especialistas em clinicas de estetica, saloes de alto padrao e profissionais de saude estetica, mas tambem atendemos negocios locais que buscam previsibilidade de agendamentos.",
  },
  {
    id: "investimento-minimo",
    question: "Existe um investimento minimo em trafego pago?",
    answer:
      "Recomendamos um investimento minimo de midia que e definido apos o diagnostico gratuito, de acordo com o porte e objetivo do seu negocio.",
  },
  {
    id: "contrato-fidelidade",
    question: "Existe fidelidade no contrato?",
    answer:
      "Trabalhamos com contratos mensais flexiveis. Acreditamos que os resultados devem nos manter juntos, nao a burocracia.",
  },
];
