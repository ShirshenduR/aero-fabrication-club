import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aero Fabrication Club | IIITDM Jabalpur - Drone Design & Innovation",
  description: "Official Aero Fabrication Club at IIIT Design & Manufacturing Jabalpur. Leading drone design, autonomous systems, and aerial robotics innovation. Winners of SAE DDC, Aerothon, and Smart India Hackathon.",
  keywords: [
    "Aero Fabrication Club",
    "IIITDM Jabalpur",
    "drone club",
    "UAV design",
    "autonomous drones",
    "aerial robotics",
    "IIT competitions",
    "SAE DDC",
    "Aerothon",
    "drone racing",
    "CFD analysis",
    "aerospace engineering",
    "IIIT Jabalpur clubs",
    "afc iiitdmj",
    "afc club",
    "drone innovation",
    "aerial technology",
  ],
  authors: [{ name: "Aero Fabrication Club, IIITDM Jabalpur" }],
  creator: "Aero Fabrication Club",
  publisher: "IIITDM Jabalpur",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aerofabrication.iiitdmj.ac.in",
    title: "Aero Fabrication Club | IIITDM Jabalpur",
    description: "Leading drone design and innovation at IIITDM Jabalpur. Winners of national competitions in autonomous drones and aerial robotics.",
    siteName: "Aero Fabrication Club",
    images: [
      {
        url: "/images/misc/logo.png",
        width: 1200,
        height: 630,
        alt: "Aero Fabrication Club Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aero Fabrication Club | IIITDM Jabalpur",
    description: "Leading drone design and innovation at IIITDM Jabalpur",
    images: ["/images/misc/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console code
  },
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
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
