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
  metadataBase: new URL("https://www.mulyajayakonstruksi.com"),


  title: "Sewa Excavator Kalimantan Selatan | Mulya Jaya Konstruksi",
  description: "Sewa Excavator di Kalimantan Selatan",
  keywords: [
    "sewa excavator Kalimantan Selatan",
    "rental excavator Kalsel",
    "jasa sewa alat berat",
    "excavator long arm",
    "Mulya Jaya Konstruksi",
  ],

  icons: {
    icon: "/mjk-icon.png",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Mulya Jaya Konstruksi",
    description: "Mulya Jaya Konstruksi menawarkan sewa excavator standar dan long arm di Kalimantan Selatan. Kami menyediakan excavator berkualitas tinggi untuk proyek SDA, dengan pilihan ukuran dan panjang lengan yang sesuai dengan kebutuhan proyek Anda. Hubungi kami untuk informasi lebih lanjut.",
    url: "https://www.mulyajayakonstruksi.com/", // Gantilah dengan URL situs Anda
    siteName: "Mulya Jaya Konstruksi",
    images: [
      {
        url: "https://www.mulyajayakonstruksi.com/og.jpg", // URL gambar untuk sharing
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N8ZDMJ7TH5"></script>
        <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N8ZDMJ7TH5');
            `
        }
        </script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mulya Jaya Konstruksi",
              telephone: "+6281250094111",
              email: "cv.mulyajayakonstruksi@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Trikora KM 7",
                addressLocality: "Banjarbaru",
                addressRegion: "Kalimantan Selatan",
                addressCountry: "ID"
              },
              openingHours: "Mo-Fr 08:00-17:00 Sa 08:00-14:00"
            })
          }}
        />

        🔥 Ini efek
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
