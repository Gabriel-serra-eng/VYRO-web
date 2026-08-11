"use server";

import { redirect } from "next/navigation";
import { leadFormSchema } from "@/lib/schemas";
import { REVENUE_RANGE_LABELS } from "@/lib/schemas";
import { sendLeadNotification } from "@/lib/resend";
import { buildWhatsappUrl } from "@/lib/constants/contact";
import type { SubmitLeadState } from "@/lib/lead-form-state";

export async function submitLead(
  _prevState: SubmitLeadState,
  formData: FormData,
): Promise<SubmitLeadState> {
  const rawProjection = formData.get("diagnosticProjection");

  const parsed = leadFormSchema.safeParse({
    name: formData.get("name"),
    clinicName: formData.get("clinicName"),
    revenueRange: formData.get("revenueRange"),
    phone: formData.get("phone"),
    honeypot: formData.get("company"),
    diagnosticProjection:
      typeof rawProjection === "string" && rawProjection.length > 0
        ? Number(rawProjection)
        : undefined,
  });

  if (!parsed.success) {
    const fieldErrors: SubmitLeadState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (
        key === "name" ||
        key === "clinicName" ||
        key === "revenueRange" ||
        key === "phone"
      ) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Verifique os campos destacados e tente novamente.",
      fieldErrors,
    };
  }

  const lead = parsed.data;

  try {
    await sendLeadNotification(lead);
  } catch (error) {
    console.error("[submit-lead] Falha ao notificar via Resend, aplicando fallback WhatsApp.", error);
  }

  const whatsappMessage = [
    "Ola! Quero solicitar meu diagnostico de presenca digital gratuito com a VYRO.",
    `Nome: ${lead.name}`,
    `Clinica/Negocio: ${lead.clinicName}`,
    `Faturamento: ${REVENUE_RANGE_LABELS[lead.revenueRange]}`,
  ].join("\n");

  redirect(buildWhatsappUrl(whatsappMessage));
}
