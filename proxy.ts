import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3;

const store = new Map<string, { count: number; reset: number }>();

export function proxy(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.reset) {
    store.set(ip, { count: 1, reset: now + WINDOW_MS });
    return NextResponse.next();
  }

  if (entry.count >= MAX_REQUESTS) {
    return NextResponse.json(
      { error: "Trop de demandes. Réessayez dans 10 minutes." },
      { status: 429 }
    );
  }

  entry.count++;
  return NextResponse.next();
}

export const config = {
  matcher: "/api/audit",
};
