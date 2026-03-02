import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
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
      <head>
        <meta name="google-site-verification" content="Vf4fAaKv_9CPPyCjpNNW_8gUaIFyG8PC-fH_B1rcUZ0" />
      </head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-N8ZDMJ7TH5"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-N8ZDMJ7TH5');
      </script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
