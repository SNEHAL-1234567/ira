import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/lenis-provider";
import { ToastProvider } from "@/components/ui/toast";
import Preloader from "@/components/preloader";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IRA Luxury Farmstay — Weddings, Celebrations & Farm Stays in Chevella",
  description:
    "Unrestrained, unforgettable, unhurried — IRA Luxury Farmstay in Chevella offers thoughtfully designed spaces for weddings, family gatherings and celebrations of every kind, with room for up to 400 guests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} font-body antialiased bg-bg-primary text-text-primary`}
      >
        <ToastProvider>
          <Preloader>
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
          </Preloader>
        </ToastProvider>
      </body>
    </html>
  );
}
