import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serene Roots Yoga",
  description: "Find your ground with mindful, grounded yoga practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#FAF8F5] text-stone-900 font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <footer className="px-8 py-12 border-t border-stone-200 mt-24 text-center text-sm text-stone-400 tracking-wide">
          &copy; {new Date().getFullYear()} Serene Roots Yoga. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
