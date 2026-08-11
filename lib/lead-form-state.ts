export type SubmitLeadState = {
  status: "idle" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "clinicName" | "revenueRange" | "phone", string>>;
};

export const initialSubmitLeadState: SubmitLeadState = { status: "idle" };
