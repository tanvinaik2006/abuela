import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ABUELA — Every recipe has a story",
    template: "%s | ABUELA",
  },
  description:
    "A digital home for preserving family recipes, traditions, and the memories attached to the people who made them. Every recipe tells a story.",
  keywords: ["family recipes", "grandmother recipes", "heirloom recipes", "cooking memories", "recipe archive"],
  openGraph: {
    title: "ABUELA — Every recipe has a story",
    description:
      "Preserve the flavors, memories, and love of the people who made them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-beige text-dark-green antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
