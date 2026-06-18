import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

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
      <body className="bg-[#F3F0F8] text-[#2C2638] font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <footer className="px-8 py-12 border-t border-[#C4B5D9]/40 mt-24 text-center text-sm text-[#7C5FA0]/70 tracking-wide">
          &copy; {new Date().getFullYear()} Julia Hu Yoga. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
