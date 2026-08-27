import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Preloader from "@/components/preloader";

const siteUrl = new URL("https://situalabs.vercel.app");
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Situa",
  url: siteUrl.origin,
  logo: `${siteUrl.origin}/brand/situa-mark.svg`,
  sameAs: ["https://www.instagram.com/situalabs/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919398840252",
    contactType: "sales",
  },
};

/* Display carries the attitude; body carries the reading. */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Situa | Customer experience design for growing businesses",
  description:
    "Situa designs and builds the websites, follow-up, and service systems that help businesses be understood, chosen, and easier to trust.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Situa",
    title: "Situa | Customer experience design for growing businesses",
    description:
      "We build how customers experience your business — from first discovery to follow-through.",
    images: [
      {
        url: "/social/situa-social-card.jpg",
        width: 1200,
        height: 630,
        alt: "Situa — We build how customers experience your business.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Situa | Customer experience design for growing businesses",
    description:
      "We build how customers experience your business — from first discovery to follow-through.",
    images: ["/social/situa-social-card.jpg"],
  },
  verification: {
    google: "HFNQxApqKap9mBydpQcdj59i7Q1NeqA37ZlTCURLtr8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <Preloader />
        <a href="#main" className="skip-link">Skip to main content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
