import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, error, id, className, ...props },
  ref,
) {
  const fieldId = id ?? props.name;
  const errorId = error ? `${fieldId}-error` : undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-sm font-medium text-neutral-200">
        {label}
      </label>
      <input
        ref={ref}
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={cn(
          "min-h-12 rounded-xl border border-white/10 bg-obsidian-800/80 px-4 py-3 text-neutral-050 placeholder:text-neutral-600 transition-colors focus:border-indigo-400",
          error && "border-magenta-500 focus:border-magenta-500",
          className,
        )}
        {...props}
      />
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-magenta-400">
          {error}
        </p>
      ) : null}
    </div>
  );
});
