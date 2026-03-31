import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://blackwell-advisory.org"),
  alternates: {
    canonical: "https://blackwell-advisory.org",
  },
  verification: {
    google: "YuMKYaa4N4gcL7lovc2uIop6JEC3nKunGYEDTSyUr9o",
  },
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
    title: "Blackwell Advisory | Employment Contract Risk Review",
    description:
      "Fixed-fee employment contract risk reviews for UK SMEs. £1,500. 14-day delivery. Guaranteed or you don't pay.",
    url: "https://blackwell-advisory.org",
    type: "website",
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
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Blackwell Advisory",
    url: "https://blackwell-advisory.org",
    description: "Employment law and HR advisory for UK SMEs",
    areaServed: "West Midlands, Staffordshire, UK",
    serviceType: "Employment Law Advisory",
  };

  return (
    <html lang="en-GB">
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
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
