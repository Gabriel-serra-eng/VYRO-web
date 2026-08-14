import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-colors duration-300 hover:border-indigo-400/40",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function PainCard({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "flex items-center rounded-2xl bg-white p-6 shadow-[0_18px_40px_-30px_rgba(29,41,55,0.35)] transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
