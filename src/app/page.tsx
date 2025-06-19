// src/app/page.tsx
import { headers } from "next/headers";
import { mapCountryToRegion } from "@/lib/country-to-region";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";

export default async function Page() {
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country") || "US";
  const region = mapCountryToRegion(country);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <HeroSection region={region} />
    </div>
  );
}
