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
  title: "Lotus Castle — Luxury Farmhouse & Weekend Retreat in Moinabad, Hyderabad",
  description:
    "A private luxury farmhouse in Moinabad, Hyderabad with a pool, bonfire deck, indoor games and 4 bedrooms — the perfect weekend retreat with friends and family.",
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
