// app/api/cart/route.ts
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";

export async function GET() {
  let sessionCartId = (await cookies()).get("sessionCartId")?.value;

  if (!sessionCartId) {
    sessionCartId = randomUUID();
  }

  const res = NextResponse.json({ sessionCartId });
  res.cookies.set("sessionCartId", sessionCartId, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: 60 * 60 * 24 * 30,
  });

  return res;
}
