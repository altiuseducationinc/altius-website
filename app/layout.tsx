import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const defaultDescription =
  "Altius Education in Brampton, Ontario offers tutoring classes in math, science, and English, French TCF/TEF prep, languages, music, 3D printing, CNC, and an 8-year Grades 5–12 FutureReady™ career-readiness program. Book a free consultation today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tutoring Classes in Brampton, ON | Altius Education",
    template: "%s | Altius Education",
  },
  description: defaultDescription,
  keywords: [
    "tutoring classes Canada",
    "tuition classes Canada",
    "tutoring classes Brampton",
    "tuition classes Brampton",
    "career readiness programs",
    "after school classes for kids",
    "Ontario tutoring centre",
    "math tutoring Brampton",
    "science tutoring Brampton",
    "English tutoring Brampton",
    "French tutoring Toronto",
    "TCF TEF preparation Canada",
    "3D printing classes for kids",
    "CNC programming training",
    "music classes for kids Brampton",
    "Altius FutureReady",
  ],
  applicationName: "Altius Education",
  authors: [{ name: "Altius Education Inc." }],
  creator: "Altius Education Inc.",
  publisher: "Altius Education Inc.",
  generator: "Next.js",
  icons: {
    icon: "/logo/2.jpeg",
    shortcut: "/logo/2.jpeg",
    apple: "/logo/2.jpeg",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Altius Education",
    title: "Tutoring Classes in Brampton, ON | Altius Education",
    description: defaultDescription,
    images: [
      {
        url: `${SITE_URL}/icon.png`,
        width: 512,
        height: 512,
        alt: "Altius Education logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutoring Classes in Brampton, ON | Altius Education",
    description: defaultDescription,
    images: [`${SITE_URL}/icon.png`],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1f3a",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE.name,
  alternateName: SITE.legalName,
  url: SITE_URL,
  logo: SITE.logo,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    ...SITE.address,
  },
  areaServed: ["Brampton", "Mississauga", "Greater Toronto Area", "Ontario", "Canada"],
  knowsAbout: SITE.services,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        <JsonLd data={organizationJsonLd} />
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans bg-altiusLight text-altiusNavy antialiased overflow-x-hidden`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}