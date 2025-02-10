import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import PlausibleProvider from "next-plausible";
import Announcement from "@/components/Announcement";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artisanat",
  description: "Votre boutique en ligne pour les produits artisanaux algériens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="artisanat-dz.com" customDomain="https://plausible.codewithadu.de" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
        <Announcement />
        <NavBar />
        {children}
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
