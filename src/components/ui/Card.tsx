import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-sm border border-border bg-card p-6 transition-colors duration-200 hover:border-gold-muted ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
