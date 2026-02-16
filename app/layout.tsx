import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ModalProvider } from "@/components/common/modal/ModalProvider";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Catat semua pengeluaranmu",
  description: "Catat semua pengeluaranmu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plexMono.variable} antialiased`}
      >
        <TooltipProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
