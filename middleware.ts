// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { COUNTRY_TO_REGION } from "@/lib/country-to-region";

export function middleware(req: NextRequest) {
  const country = (req as any).geo?.country || "";
  const region = COUNTRY_TO_REGION[country] || "EU"; // fallback to EU

  const res = NextResponse.next();
  res.cookies.set("region", region);
  return res;
}

export const config = {
  matcher: ["/"], // apply only to homepage
};
