// sherriannelcock.com — Personal Brand Site
// Built and hosted by Caribbean HomeHub LLC
// Ownership transfers to Sherriann Elcock after 12 months per Founding Advisor agreement
// This site has NO dependencies on Portal HomeHub infrastructure — transfer must remain clean

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Sherriann Elcock | Guyana Real Estate Professional | Founding Advisor, Guyana HomeHub",
  description:
    "Sherriann Elcock is a Guyanese real estate professional, founder of Prestigious Services & Realty 1262, and Founding Advisor to Guyana HomeHub — the platform connecting diaspora buyers with trusted Guyanese agents.",
  alternates: {
    canonical: "https://sherriannelcock.com",
  },
  openGraph: {
    title:
      "Sherriann Elcock | Guyana Real Estate Professional | Founding Advisor, Guyana HomeHub",
    description:
      "Sherriann Elcock is a Guyanese real estate professional, founder of Prestigious Services & Realty 1262, and Founding Advisor to Guyana HomeHub.",
    url: "https://sherriannelcock.com",
    siteName: "Sherriann Elcock",
    images: [{ url: "/og-image.jpg" }],
    locale: "en_US",
    type: "website",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sherriann Elcock",
  jobTitle: "Real Estate Professional & Founding Advisor, Guyana HomeHub",
  url: "https://sherriannelcock.com",
  sameAs: [
    "https://www.youtube.com/@SherriannElcock",
    "https://www.linkedin.com/in/sherriannelcock",
    "https://guyanahomehub.com/agents/sherriann-elcock-martin",
    "https://sherriannelcock.com",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Prestigious Services & Realty 1262",
    url: "https://sherriannelcock.com",
  },
  affiliation: [
    {
      "@type": "Organization",
      name: "Guyana HomeHub",
      url: "https://guyanahomehub.com",
    },
    {
      "@type": "Organization",
      name: "Portal HomeHub",
      url: "https://portalhomehub.com",
    },
  ],
  knowsAbout: [
    "Guyana real estate",
    "property rentals Guyana",
    "land sales Georgetown",
    "corporate relocation Guyana",
    "diaspora property investment",
    "East Bank Demerara properties",
    "Linden real estate",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Guyana HomeHub",
  url: "https://guyanahomehub.com",
  founder: {
    "@type": "Person",
    name: "Darren L. Buckner",
    url: "https://darrenlbuckner.com",
  },
  advisor: {
    "@type": "Person",
    name: "Sherriann Elcock",
    url: "https://sherriannelcock.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
