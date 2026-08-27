import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Preloader from "@/components/preloader";

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
  title: "Situa — We build how customers experience your business",
  description:
    "Situa finds the point where a business loses customers — in discovery, in follow-up, or in delivery — and rebuilds it.",
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
