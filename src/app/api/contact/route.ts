import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  type ContactFormData,
  validateContactForm,
} from "@/lib/contact-validation";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;
    const errors = validateContactForm(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Provjerite unesene podatke i pokušajte ponovno." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error(
        "Missing RESEND_API_KEY or CONTACT_EMAIL environment variables.",
      );
      return NextResponse.json(
        { error: "Slanje poruke trenutno nije dostupno. Pokušajte kasnije." },
        { status: 500 },
      );
    }

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ?? "Noir Kafić <onboarding@resend.dev>";

    const resend = new Resend(apiKey);
    const emailSubject = body.subject
      ? `${body.subject} — ${body.name}`
      : `Nova poruka od ${body.name}`;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: body.email,
      subject: emailSubject,
      html: `
        <h2>Nova poruka s web stranice</h2>
        <p><strong>Ime:</strong> ${escapeHtml(body.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
        ${body.phone ? `<p><strong>Telefon:</strong> ${escapeHtml(body.phone)}</p>` : ""}
        ${body.subject ? `<p><strong>Predmet:</strong> ${escapeHtml(body.subject)}</p>` : ""}
        <p><strong>Poruka:</strong></p>
        <p>${escapeHtml(body.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Došlo je do greške pri slanju poruke. Pokušajte ponovno." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Došlo je do greške pri slanju poruke. Pokušajte ponovno." },
      { status: 500 },
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
