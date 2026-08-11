import { z } from "zod";

const PHONE_DIGITS_REGEX = /^\d{10,11}$/;

export const leadFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo")
    .max(120, "Nome muito longo"),
  clinicName: z
    .string()
    .trim()
    .min(2, "Informe o nome da clinica ou negocio")
    .max(120, "Nome muito longo"),
  revenueRange: z.enum(["ate-10k", "10k-30k", "30k-80k", "acima-80k"], {
    errorMap: () => ({ message: "Selecione a faixa de faturamento" }),
  }),
  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/\D/g, ""))
    .pipe(z.string().regex(PHONE_DIGITS_REGEX, "Informe um telefone valido com DDD")),
  diagnosticProjection: z.number().optional(),
  honeypot: z.string().max(0, "Falha na validacao").optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const REVENUE_RANGE_LABELS: Record<LeadFormValues["revenueRange"], string> = {
  "ate-10k": "Ate R$ 10 mil",
  "10k-30k": "R$ 10 mil a R$ 30 mil",
  "30k-80k": "R$ 30 mil a R$ 80 mil",
  "acima-80k": "Acima de R$ 80 mil",
};
