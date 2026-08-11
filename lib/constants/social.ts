export type Metric = {
  id: string;
  value: string;
  label: string;
};

export type CaseStudy = {
  id: string;
  clientName: string;
  segment: string;
  result: string;
  quote: string;
};

export const METRICS: Metric[] = [
  { id: "crescimento-leads", value: "+300%", label: "Aumento medio em leads qualificados" },
  { id: "tempo-resposta", value: "< 5min", label: "Tempo medio de resposta ao lead" },
  { id: "clinicas-atendidas", value: "40+", label: "Clinicas e negocios atendidos" },
  { id: "satisfacao", value: "98%", label: "Taxa de satisfacao dos clientes" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "clinica-aurea",
    clientName: "Clinica Aurea Estetica",
    segment: "Estetica Avancada",
    result: "+280% em agendamentos qualificados em 90 dias",
    quote:
      "A VYRO reorganizou nossa presenca digital do zero. Hoje nossa agenda vive lotada com clientes que realmente fecham procedimento.",
  },
  {
    id: "studio-bella",
    clientName: "Studio Bella Hair",
    segment: "Salao de Alto Padrao",
    result: "Custo por lead reduzido em 45%",
    quote:
      "Profissionalismo raro no mercado de marketing. Os relatorios sao claros e os resultados aparecem no caixa, nao so no relatorio.",
  },
  {
    id: "derma-vita",
    clientName: "Derma Vita",
    segment: "Dermatologia Estetica",
    result: "Agenda cheia em 60 dias",
    quote:
      "O diagnostico interativo do site ja chegou nos mostrando o potencial. A parceria confirmou tudo o que prometeram.",
  },
];
