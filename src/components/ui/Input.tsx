import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const inputStyles =
  "w-full border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background";

export function Input({ label, id, error, className = "", ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="mb-2 block text-xs font-medium tracking-widest uppercase text-secondary"
      >
        {label}
        {props.required ? (
          <span className="text-gold" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      <input
        id={inputId}
        className={`${inputStyles} ${error ? "border-red-500" : ""} ${className}`.trim()}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error ? (
        <p id={`${inputId}-error`} className="mt-1 text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
