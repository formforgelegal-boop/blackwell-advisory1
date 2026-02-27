import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blackwelladvisory.co.uk"),
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "Blackwell Advisory | Employment Contract Risk Review",
    template: "%s | Blackwell Advisory",
  },
  description:
    "Fixed-fee employment contract risk reviews for UK SMEs. £1,500. 14-day delivery. Guaranteed or you don't pay.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.blackwelladvisory.co.uk",
    siteName: "Blackwell Advisory",
    title: "Blackwell Advisory | Employment Contract Risk Review",
    description:
      "Fixed-fee employment contract risk reviews for UK SMEs. £1,500. 14-day delivery. Guaranteed or you don't pay.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackwell Advisory | Employment Contract Risk Review",
    description:
      "Fixed-fee employment contract risk reviews for UK SMEs. £1,500. 14-day delivery. Guaranteed or you don't pay.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en-GB">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <Navbar />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileCTA />

        {/* Google Analytics 4 — add NEXT_PUBLIC_GA_ID to .env.local */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        {/*
          Plausible alternative — uncomment and add NEXT_PUBLIC_PLAUSIBLE_DOMAIN to .env.local:
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        */}
      </body>
    </html>
  );
}
