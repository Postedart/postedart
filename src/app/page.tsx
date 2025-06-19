// src/app/page.tsx
import { headers } from "next/headers";
import { mapCountryToRegion } from "@/lib/country-to-region";
import HeroSection from "@/components/HeroSection";

export default async function Page() {
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country") || "US";
  const region = mapCountryToRegion(country);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top header */}
      <header className="w-full flex justify-between items-center px-6 py-4">
        <a href="/" className="block w-40 h-auto">
          <img
            src="/logos/postedart_logo_bg-black_wide.svg"
            alt="Posted.art logo"
            className="w-full h-auto"
          />
        </a>
        <button className="text-sm border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">
          Get Posted
        </button>
      </header>

      {/* Hero Section */}
      <HeroSection region={region} />
    </div>
  );
}
