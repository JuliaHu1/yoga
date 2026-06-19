import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Julia Hu Yoga",
  description: "Dynamic, intentional vinyasa yoga with Julia Hu in San Francisco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="text-[#1A1530] font-sans antialiased">
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <footer className="px-5 md:px-8 py-10 md:py-12 border-t border-[#9B8EC4]/40 mt-16 md:mt-24 text-center text-sm text-[#5B4B8A]/80 tracking-wide font-serif">
          &copy; {new Date().getFullYear()} Julia Hu Yoga. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
