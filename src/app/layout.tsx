import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kanvas — Brand Launch Studio",
  description:
    "Kanvas helps consumer-brand founders launch cohesive, professional brands — from identity and packaging to website and social creatives — all in one coordinated package.",
  keywords: ["branding", "packaging design", "brand identity", "startup branding", "India"],
  openGraph: {
    title: "Kanvas — Brand Launch Studio",
    description: "Cohesive brand launch packages for founders and startups.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#EDE6D6] text-[#1C1916]">
        {children}
      </body>
    </html>
  );
}
