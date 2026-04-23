import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contacto@huxleylegal.com";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    if (!RESEND_API_KEY) {
      // Graceful fallback: log and return success so UX doesn't break
      console.warn("RESEND_API_KEY not configured — email not sent.");
      return NextResponse.json({ success: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Huxley Partners <noreply@boltdevlabs.com>",
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `[Contacto Web] ${subject || "Nuevo mensaje"}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a2e4a;">Nuevo mensaje desde el formulario de contacto</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #555; width: 120px;"><strong>Nombre:</strong></td><td style="padding: 8px 0;">${firstName} ${lastName || ""}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Asunto:</strong></td><td style="padding: 8px 0;">${subject || "—"}</td></tr>
            </table>
            <h3 style="color: #1a2e4a; margin-top: 20px;">Mensaje:</h3>
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap; color: #333;">${message}</div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Error al enviar el mensaje." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error del servidor.", details: String(error) },
      { status: 500 }
    );
  }
}
