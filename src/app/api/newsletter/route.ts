import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email requerido." }, { status: 400 });
    }

    if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
      // Graceful fallback: return success so UX doesn't break
      console.warn("RESEND_API_KEY or RESEND_AUDIENCE_ID not configured — subscriber not saved.");
      return NextResponse.json({ success: true });
    }

    const nameParts = (name || "").trim().split(/\s+/);
    const firstName = nameParts[0] || undefined;
    const lastName = nameParts.slice(1).join(" ") || undefined;

    const res = await fetch(
      `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_name: firstName,
          last_name: lastName,
          unsubscribed: false,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      // 409 Conflict = already subscribed → treat as success
      if (res.status === 409) {
        return NextResponse.json({ success: true, alreadySubscribed: true });
      }
      console.error("Resend audience error:", err);
      return NextResponse.json(
        { error: "Error al procesar la suscripción." },
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
