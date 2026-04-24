import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK = process.env.N8N_WEBHOOK_URL;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_FIELDS = ["prenom", "nom", "email", "site_url", "youtube", "tiktok", "instagram", "facebook"];

export async function POST(req: NextRequest) {
  if (!N8N_WEBHOOK) {
    return NextResponse.json({ error: "Webhook non configuré" }, { status: 500 });
  }

  if (Number(req.headers.get("content-length") ?? 0) > 10_000) {
    return NextResponse.json({ error: "Payload trop volumineux" }, { status: 413 });
  }

  try {
    const body = await req.json();

    if (!body.email || !EMAIL_RE.test(body.email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const safe = Object.fromEntries(
      ALLOWED_FIELDS.map((k) => [k, typeof body[k] === "string" ? body[k].slice(0, 300) : ""])
    );

    const res = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(safe),
    });

    if (!res.ok) {
      return NextResponse.json({ error: `n8n error ${res.status}` }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[audit/route]", err);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
