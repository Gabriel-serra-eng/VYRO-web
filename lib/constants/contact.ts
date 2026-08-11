export const CONTACT = {
  brandName: "VYRO",
  legalName: "VYRO Growth & Tech",
  email: "contato@vyro.com.br",
  whatsappNumber: "5511999999999",
  whatsappDefaultMessage:
    "Ola! Quero solicitar meu diagnostico de presenca digital gratuito com a VYRO.",
  instagramHandle: "@vyro.agencia",
  instagramUrl: "https://instagram.com/vyro.agencia",
  city: "Sao Paulo",
  state: "SP",
  country: "BR",
  siteUrl: "https://vyro.com.br",
} as const;

export function buildWhatsappUrl(message?: string): string {
  const text = encodeURIComponent(message ?? CONTACT.whatsappDefaultMessage);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
}
