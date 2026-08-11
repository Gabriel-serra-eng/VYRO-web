export type Service = {
  id: string;
  icon: "code" | "ads" | "content" | "automation";
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    id: "sites-web-apps",
    icon: "code",
    title: "Criacao de Sites e Web Apps de Alta Conversao",
    description:
      "Experiencias digitais rapidas e sofisticadas, construidas para transformar visitantes em agendamentos reais.",
  },
  {
    id: "trafego-pago",
    icon: "ads",
    title: "Gestao de Trafego Pago (Meta e Google Ads)",
    description:
      "Campanhas orientadas a performance que atraem o publico certo, no momento certo, com custo por lead sob controle.",
  },
  {
    id: "conteudo-posicionamento",
    icon: "content",
    title: "Estrategia de Conteudo e Posicionamento",
    description:
      "Autoridade de marca construida com consistencia, elevando a percepcao de valor da sua clinica no mercado.",
  },
  {
    id: "automacao-whatsapp",
    icon: "automation",
    title: "Automacao de WhatsApp e Ferramentas Digitais",
    description:
      "Fluxos automatizados que qualificam e respondem leads instantaneamente, sem perder oportunidades de agendamento.",
  },
];
