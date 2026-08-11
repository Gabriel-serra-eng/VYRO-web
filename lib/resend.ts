import { Resend } from "resend";
import { CONTACT } from "@/lib/constants/contact";
import type { LeadFormValues } from "@/lib/schemas";
import { REVENUE_RANGE_LABELS } from "@/lib/schemas";

let resendClient: Resend | null = null;

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY nao configurada no ambiente do servidor.");
  }
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendLeadNotification(lead: LeadFormValues): Promise<void> {
  const client = getResendClient();
  const notifyTo = process.env.LEAD_NOTIFICATION_EMAIL ?? CONTACT.email;
  const fromAddress = process.env.RESEND_FROM_EMAIL ?? "VYRO <leads@vyro.com.br>";

  const projectionLine = lead.diagnosticProjection
    ? `<p><strong>Projecao do diagnostico:</strong> ${escapeHtml(String(lead.diagnosticProjection))}x</p>`
    : "";

  await client.emails.send({
    from: fromAddress,
    to: notifyTo,
    replyTo: notifyTo,
    subject: `Novo diagnostico VYRO — ${lead.clinicName}`,
    html: `
      <h1>Novo lead qualificado</h1>
      <p><strong>Nome:</strong> ${escapeHtml(lead.name)}</p>
      <p><strong>Clinica/Negocio:</strong> ${escapeHtml(lead.clinicName)}</p>
      <p><strong>Faturamento:</strong> ${escapeHtml(REVENUE_RANGE_LABELS[lead.revenueRange])}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(lead.phone)}</p>
      ${projectionLine}
    `,
  });
}
