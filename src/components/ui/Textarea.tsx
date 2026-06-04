import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

const textareaStyles =
  "w-full min-h-32 resize-y border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background";

export function Textarea({
  label,
  id,
  error,
  className = "",
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <div>
      <label
        htmlFor={textareaId}
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
      <textarea
        id={textareaId}
        className={`${textareaStyles} ${error ? "border-red-500" : ""} ${className}`.trim()}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      {error ? (
        <p
          id={`${textareaId}-error`}
          className="mt-1 text-xs text-red-400"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
