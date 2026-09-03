import type { Metadata, Viewport } from "next";
import "./globals.css";
import RootLayout from "@/components/RootLayout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "SPECO Building Technology | South Sudan's First Building Materials Factory",
    template: "%s | SPECO Building Technology",
  },
  description:
    "SPECO Building Technology is South Sudan's first building materials factory. EPS panels, sandwich panels, and roofing solutions engineered for speed, built for durability.",
  applicationName: "SPECO Building Technology",
  robots: { index: true, follow: true },
  icons: { icon: "/assets/logo/speco-logo-orange.png" },
  metadataBase: new URL("https://specobt.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SPECO Building Technology",
    title: "SPECO Building Technology | South Sudan's First Building Materials Factory",
    description:
      "SPECO Building Technology is South Sudan's first building materials factory. EPS panels, sandwich panels, and roofing solutions engineered for speed, built for durability.",
    url: "https://specobt.com/",
    images: [
      {
        url: "/assets/images/projects/h-brothers/11-completed-desktop.webp",
        width: 2048,
        height: 1365,
        alt: "H Brothers G+6 tower, Katoor, Juba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPECO Building Technology | South Sudan's First Building Materials Factory",
    description:
      "SPECO Building Technology is South Sudan's first building materials factory. EPS panels, sandwich panels, and roofing solutions engineered for speed, built for durability.",
    images: ["/assets/images/projects/h-brothers/11-completed-desktop.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/koho-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/roboto-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="canonical" href="https://specobt.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "SPECO Building Technology",
                  url: "https://specobt.com",
                  logo: "https://specobt.com/assets/logo/speco-logo-orange.png",
                  email: "sales@specobt.com",
                  telephone: "+211****2030",
                  sameAs: [
                    "https://www.facebook.com/profile.php?id=61581429820186",
                    "https://www.instagram.com/specobt",
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  name: "SPECO Building Technology",
                  url: "https://specobt.com",
                  telephone: "+211****2030",
                  email: "sales@specobt.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Gombo Soug Block 1",
                    addressLocality: "Juba",
                    addressCountry: "SS",
                  },
                  geo: { "@type": "GeoCoordinates", latitude: 4.8594, longitude: 31.5713 },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "08:00",
                      closes: "17:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Saturday",
                      opens: "09:00",
                      closes: "13:00",
                    },
                  ],
                  hasMap: "https://maps.app.goo.gl/swHPgLqdjfdTYftUA",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}