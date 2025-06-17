import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display, Dancing_Script } from "next/font/google";

const playfair = Playfair_Display({
  weight: "600", // semi-bold
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dancing = Dancing_Script({
  weight: "400", // normal
  subsets: ["latin"],
  variable: "--font-dancing",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Posted.art",
  description: "Send a gift. Wrap it in art. A forever card, only on Posted.art.",
  metadataBase: new URL("https://posted.art"),
  openGraph: {
    title: "Posted.art",
    description: "Send a gift. Wrap it in art. A forever card, only on Posted.art.",
    url: "https://posted.art",
    siteName: "Posted.art",
    images: [
      {
        url: "/opengraph-postedart.jpg",
        width: 1200,
        height: 630,
        alt: "Send a gift. Wrap it in art. A forever card, only on Posted.art.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Posted.art",
    description: "Send a gift. Wrap it in art. A forever card, only on Posted.art.",
    images: ["/opengraph-postedart.jpg"],
    creator: "@postedart",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dancing.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
