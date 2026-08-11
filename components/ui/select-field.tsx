import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Option = { value: string; label: string };

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: Option[];
  placeholder?: string;
};

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(function SelectField(
  { label, error, id, options, placeholder, className, ...props },
  ref,
) {
  const fieldId = id ?? props.name;
  const errorId = error ? `${fieldId}-error` : undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-sm font-medium text-neutral-200">
        {label}
      </label>
      <select
        ref={ref}
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        defaultValue=""
        className={cn(
          "min-h-12 rounded-xl border border-white/10 bg-obsidian-800/80 px-4 py-3 text-neutral-050 transition-colors focus:border-indigo-400",
          error && "border-magenta-500 focus:border-magenta-500",
          className,
        )}
        {...props}
      >
        <option value="" disabled>
          {placeholder ?? "Selecione"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-magenta-400">
          {error}
        </p>
      ) : null}
    </div>
  );
});
