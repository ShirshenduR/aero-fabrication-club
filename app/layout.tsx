import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aero Fabrication Club | IIITDM Jabalpur",
  description: "Where Innovation Takes Flight - Designing, building, and flying innovative unmanned aerial vehicles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/misc/logo.png" />
      </head>
      <body className={inter.className} style={{ background: '#0a0e27' }}>
        <Providers>
          <Navigation />
          <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
