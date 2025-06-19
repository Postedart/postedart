// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

import { headers } from "next/headers";
import { COUNTRY_TO_REGION, mapCountryToRegion } from "@/lib/country-to-region";

export default async function Page() {
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country") || "US";
  const region = mapCountryToRegion(country);
  const imageSrc = `/stories/birthday_${region.toLowerCase()}.webp`;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top header */}
      <header className="w-full flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="block w-40 h-auto">
          <img
            src="/logos/postedart_logo_bg-black_wide.svg"
            alt="Posted.art logo"
            className="w-full h-auto"
          />
        </Link>

        {/* Get Posted button */}
        <button className="text-sm border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">
          Get Posted
        </button>
      </header>

      {/* Hero section */}
      <div className="relative w-full h-screen">
        {/* Background image */}
        <Image
          src={imageSrc}
          alt="Birthday story"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Gradient box behind text */}
          <div className="absolute inset-0 flex items-end justify-center lg:justify-start lg:items-end">
            <div
              className="
                bg-black/10 
                p-6 lg:p-12 
                w-full lg:w-1/3 
                h-fit lg:h-full 
                flex justify-center lg:items-center
              "
            >
              <div className="text-center max-w-md w-full mx-auto lg:text-left lg:max-w-xl lg:mx-0">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                  It’s not just a card. It’s a birthday moment.
                </h2>
                <p className="text-base leading-relaxed">
                  She opens her phone and finds a digital card — not just a message, but a piece of art, wrapped in meaning. <br />
                  It’s on-chain, permanent, and unexpected. <br />
                  No wallet needed. No app to download. <br />
                  A forever card, delivered instantly from a friend who couldn’t be there in person.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
