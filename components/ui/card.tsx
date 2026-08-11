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
