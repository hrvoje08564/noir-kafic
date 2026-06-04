import type { HTMLAttributes, ReactNode } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ children, className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-block border border-border bg-gold-muted px-3 py-1 text-xs font-medium tracking-widest uppercase text-gold ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
