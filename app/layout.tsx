import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BUSINESS } from "@/lib/utils";
import { localBusinessSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: "Key 2 BHP Auto Locksmith Manchester | 24/7 Mobile Car Key Specialist",
    template: "%s | Key 2 BHP Auto Locksmith",
  },
  description:
    "24/7 mobile auto locksmith in Manchester. Car key replacement, emergency lockout, key programming & more. Fast response across Greater Manchester. Call 0161 884 0755.",
  keywords: [
    "auto locksmith Manchester",
    "car key replacement Manchester",
    "emergency locksmith Manchester",
    "mobile locksmith Manchester",
    "locked out of car Manchester",
    "key programming Manchester",
    "24 hour locksmith Manchester",
  ],
  authors: [{ name: BUSINESS.legalName }],
  creator: BUSINESS.legalName,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    title: "Key 2 BHP Auto Locksmith Manchester | 24/7 Mobile Car Key Specialist",
    description:
      "24/7 mobile auto locksmith in Manchester. Car key replacement, emergency lockout & key programming. Fast response, all makes & models.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Key 2 BHP Auto Locksmith Manchester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Key 2 BHP Auto Locksmith Manchester | 24/7",
    description: "24/7 mobile auto locksmith in Manchester. Fast response, all makes & models.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-accent text-black px-4 py-2 rounded-md font-medium"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCallButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
