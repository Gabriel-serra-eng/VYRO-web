"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@/components/ui/text-field";
import { SelectField } from "@/components/ui/select-field";
import { submitLead } from "@/app/actions/submit-lead";
import { initialSubmitLeadState } from "@/lib/lead-form-state";
import { leadFormSchema, REVENUE_RANGE_LABELS, type LeadFormValues } from "@/lib/schemas";
import { formatBrazilianPhone } from "@/lib/utils";
import { trackEvent } from "@/components/scripts/analytics";

const REVENUE_OPTIONS = Object.entries(REVENUE_RANGE_LABELS).map(([value, label]) => ({
  value,
  label,
}));

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-magenta-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-neutral-050 shadow-glow-magenta transition-transform duration-200 active:scale-[0.97] disabled:opacity-60"
    >
      {pending ? "Enviando..." : "Quero meu diagnostico completo"}
    </button>
  );
}

type LeadFormProps = {
  diagnosticProjection?: number;
};

export function LeadForm({ diagnosticProjection }: LeadFormProps) {
  const [state, formAction] = useActionState(submitLead, initialSubmitLeadState);
  const [phoneDisplay, setPhoneDisplay] = useState("");

  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    mode: "onBlur",
  });

  const phoneRegister = register("phone");

  return (
    <form
      action={(formData) => {
        trackEvent("lead_form_submitted");
        return formAction(formData);
      }}
      noValidate
      aria-describedby={state.message ? "lead-form-status" : undefined}
      className="glass flex flex-col gap-5 rounded-2xl p-6 sm:p-8"
    >
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="diagnosticProjection" value={diagnosticProjection ?? ""} />

      {state.message ? (
        <p id="lead-form-status" role="alert" className="text-sm text-magenta-400">
          {state.message}
        </p>
      ) : null}

      <TextField
        label="Nome completo"
        {...register("name")}
        onBlur={() => trigger("name")}
        error={errors.name?.message ?? state.fieldErrors?.name}
        autoComplete="name"
      />

      <TextField
        label="Nome da clinica ou negocio"
        {...register("clinicName")}
        onBlur={() => trigger("clinicName")}
        error={errors.clinicName?.message ?? state.fieldErrors?.clinicName}
        autoComplete="organization"
      />

      <SelectField
        label="Faturamento medio mensal"
        options={REVENUE_OPTIONS}
        {...register("revenueRange")}
        onBlur={() => trigger("revenueRange")}
        error={errors.revenueRange?.message ?? state.fieldErrors?.revenueRange}
      />

      <TextField
        label="Telefone (WhatsApp)"
        type="tel"
        inputMode="numeric"
        placeholder="(11) 99999-9999"
        autoComplete="tel"
        {...phoneRegister}
        value={phoneDisplay}
        onChange={(event) => {
          const formatted = formatBrazilianPhone(event.target.value);
          setPhoneDisplay(formatted);
          phoneRegister.onChange(event);
        }}
        onBlur={(event) => {
          phoneRegister.onBlur(event);
          trigger("phone");
        }}
        error={errors.phone?.message ?? state.fieldErrors?.phone}
      />

      <SubmitButton />

      <p className="text-xs text-neutral-400">
        Ao enviar, voce sera direcionado ao WhatsApp da VYRO para dar continuidade ao seu
        diagnostico completo.
      </p>
    </form>
  );
}
