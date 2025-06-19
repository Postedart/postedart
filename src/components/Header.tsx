"use client";

export default function Header() {
  return (
      <header className="w-full flex justify-between items-center pl-2 pr-5 py-4">
        <div className="flex items-center">
          <img
            src="/logos/postedart_logo_bg-black_wide.svg"
            alt="Posted.art logo"
            className="h-auto max-w-[160px] w-full"
          />
        </div>

        <button className="text-sm border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">
          Get Posted
        </button>
      </header>
  );
}
