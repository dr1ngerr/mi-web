import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

const DEFAULT_CONTACT_TO = "contacto@andreibenedec.com";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendWithSmtp(options: {
  smtpUser: string;
  smtpPass: string;
  contactTo: string;
  name: string;
  email: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: true,
    auth: {
      user: options.smtpUser,
      pass: options.smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"Web Andrei Benedec" <${options.smtpUser}>`,
    to: options.contactTo,
    replyTo: options.email,
    subject: `Consulta web de ${options.name}`,
    text: `Nombre: ${options.name}\nEmail: ${options.email}\n\n${options.message}`,
    html: `
      <p><strong>Nombre:</strong> ${escapeHtml(options.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(options.email)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(options.message).replace(/\n/g, "<br>")}</p>
    `,
  });
}

async function sendWithFormSubmit(options: {
  contactTo: string;
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(options.contactTo)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: options.name,
        email: options.email,
        message: options.message,
        _replyto: options.email,
        _subject: `Consulta web de ${options.name}`,
        _template: "table",
        _captcha: "false",
      }),
    },
  );

  const data = (await response.json().catch(() => null)) as {
    success?: string | boolean;
    message?: string;
  } | null;

  if (!response.ok) {
    const msg = data?.message?.toLowerCase() ?? "";
    if (msg.includes("activate") || msg.includes("confirm")) {
      throw new Error(
        "Revisa el buzón de contacto@andreibenedec.com, confirma el enlace de FormSubmit y vuelve a enviar el formulario.",
      );
    }
    throw new Error(data?.message ?? "No se pudo enviar el mensaje.");
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Email no válido." }, { status: 400 });
    }

    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: "Mensaje demasiado largo." }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER ?? DEFAULT_CONTACT_TO;
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO ?? smtpUser ?? DEFAULT_CONTACT_TO;

    if (smtpPass) {
      await sendWithSmtp({ smtpUser, smtpPass, contactTo, name, email, message });
    } else {
      await sendWithFormSubmit({ contactTo, name, email, message });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando formulario de contacto:", error);
    const message =
      error instanceof Error && error.message
        ? error.message
        : "No se pudo enviar el mensaje. Inténtalo de nuevo.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
