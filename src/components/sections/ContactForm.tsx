"use client";

import { Loader2 } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import {
  initialContactFormData,
  type ContactFormData,
  type ContactFormErrors,
  validateContactForm,
} from "@/lib/contact-validation";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialContactFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccessMessage("");
    setSubmitError("");

    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitError(
          result.error ??
            "Došlo je do greške pri slanju poruke. Pokušajte ponovno.",
        );
        return;
      }

      setSuccessMessage(
        "Hvala! Vaša poruka je uspješno poslana. Javit ćemo vam se uskoro.",
      );
      setFormData(initialContactFormData);
      setErrors({});
    } catch {
      setSubmitError(
        "Došlo je do greške pri slanju poruke. Pokušajte ponovno.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const selectStyles =
    "w-full border border-border bg-background px-4 py-3 text-sm text-primary rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-busy={isSubmitting}>
      <p className="text-xs text-muted">
        Polja označena s <span className="text-gold">*</span> su obavezna.
      </p>

      <Input
        name="name"
        label="Ime i prezime"
        required
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        error={errors.name}
        autoComplete="name"
      />

      <Input
        name="email"
        type="email"
        label="Email adresa"
        required
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={errors.email}
        autoComplete="email"
      />

      <Input
        name="phone"
        type="tel"
        label="Telefon"
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        autoComplete="tel"
      />

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-xs font-medium tracking-widest uppercase text-secondary"
        >
          Predmet
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={selectStyles}
        >
          <option value="">Odaberite predmet</option>
          <option value="Rezervacija stola">Rezervacija stola</option>
          <option value="Opći upit">Opći upit</option>
          <option value="Privatni događaj">Privatni događaj</option>
        </select>
      </div>

      <Textarea
        name="message"
        label="Poruka"
        required
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        error={errors.message}
      />

      {successMessage ? (
        <p className="text-sm text-green-400" role="status" aria-live="polite">
          {successMessage}
        </p>
      ) : null}

      {submitError ? (
        <p className="text-sm text-red-400" role="alert" aria-live="assertive">
          {submitError}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            <span>Slanje...</span>
          </>
        ) : (
          "Pošalji poruku"
        )}
      </Button>
    </form>
  );
}
