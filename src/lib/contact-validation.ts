export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export const initialContactFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Ime i prezime je obavezno.";
  }

  if (!data.email.trim()) {
    errors.email = "Email adresa je obavezna.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Unesite ispravnu email adresu.";
  }

  if (!data.message.trim()) {
    errors.message = "Poruka je obavezna.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Poruka mora imati najmanje 10 znakova.";
  }

  return errors;
}
