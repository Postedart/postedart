// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { mapCountryToRegion } from "@/lib/country-to-region";

export function middleware(req: NextRequest) {
  const country = (req as any).geo?.country || "";
  const region = mapCountryToRegion(country); // consistent fallback logic

  const res = NextResponse.next();
  res.cookies.set("region", region);
  return res;
}

export const config = {
  matcher: ["/"], // apply only to homepage
};
