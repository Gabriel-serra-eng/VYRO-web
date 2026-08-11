export type DiagnosticOption = {
  id: string;
  label: string;
  score: number;
};

export type DiagnosticQuestion = {
  id: string;
  question: string;
  options: DiagnosticOption[];
};

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: "faturamento",
    question: "Qual o faturamento medio mensal da sua clinica hoje?",
    options: [
      { id: "ate-10k", label: "Ate R$ 10 mil", score: 1 },
      { id: "10k-30k", label: "R$ 10 mil a R$ 30 mil", score: 2 },
      { id: "30k-80k", label: "R$ 30 mil a R$ 80 mil", score: 3 },
      { id: "acima-80k", label: "Acima de R$ 80 mil", score: 4 },
    ],
  },
  {
    id: "leads-mensais",
    question: "Quantos agendamentos novos voce recebe por mes atualmente?",
    options: [
      { id: "ate-10", label: "Ate 10 agendamentos", score: 1 },
      { id: "10-30", label: "10 a 30 agendamentos", score: 2 },
      { id: "30-60", label: "30 a 60 agendamentos", score: 3 },
      { id: "acima-60", label: "Acima de 60 agendamentos", score: 4 },
    ],
  },
  {
    id: "trafego-pago",
    question: "Voce ja investe em trafego pago (Meta ou Google Ads)?",
    options: [
      { id: "nao-invisto", label: "Nao invisto ainda", score: 1 },
      { id: "invisto-pouco", label: "Invisto pouco, sem estrategia clara", score: 2 },
      { id: "invisto-organizado", label: "Invisto com alguma organizacao", score: 3 },
      { id: "invisto-otimizado", label: "Invisto de forma otimizada e escalada", score: 4 },
    ],
  },
];

export const DIAGNOSTIC_GROWTH_MULTIPLIER = {
  min: 1.4,
  max: 3.2,
} as const;

export function calculateDiagnosticProjection(totalScore: number, maxScore: number): number {
  const minScore = DIAGNOSTIC_QUESTIONS.length;
  const inverseRatio = 1 - (totalScore - minScore) / (maxScore - minScore);
  const multiplier =
    DIAGNOSTIC_GROWTH_MULTIPLIER.min +
    inverseRatio * (DIAGNOSTIC_GROWTH_MULTIPLIER.max - DIAGNOSTIC_GROWTH_MULTIPLIER.min);
  return Math.round(multiplier * 100) / 100;
}
