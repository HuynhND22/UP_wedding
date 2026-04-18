import type { Metadata } from "next";
import { Dancing_Script, Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import SiteShell from "@/components/SiteShell";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin", "vietnamese"], variable: "--font-serif" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
  title: "UP Wedding",
  description: "Ngày trọng đại của UP."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable} ${dancingScript.variable}`}>
      <body>
        <SmoothScroll />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
