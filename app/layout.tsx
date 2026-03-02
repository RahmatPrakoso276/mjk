import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Head from 'next/head'; // Import Head component dari next/head

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mulya Jaya Konstruksi",
  description: "Sewa Excavator di Kalimantan Selatan",
  keywords: "sewa excavator, excavator Kalimantan Selatan, jasa konstruksi, sewa alat berat, Mulya Jaya Konstruksi",
  openGraph: {
    title: "Mulya Jaya Konstruksi",
    description: "Sewa Excavator di Kalimantan Selatan",
    url: "https://mjk-pi.vercel.app/", // Gantilah dengan URL situs Anda
    siteName: "Mulya Jaya Konstruksi",
    images: [
      {
        url: "/og.png", // URL gambar untuk sharing
        width: 1200,
        height: 630,
        alt: "Mulya Jaya Konstruksi",
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
