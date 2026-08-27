import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Altius FutureReady™ | Altius Education Inc.",
    template: "%s | Altius FutureReady™",
  },
  description:
    "Not another tutoring program — an 8-year Grades 5–12 system that takes students from career discovery to career readiness. Discover → Explore → Create → Develop → Experience → Specialize → Apply → Launch.",
  keywords: [
    "Altius FutureReady",
    "career readiness",
    "Grades 5-12",
    "leadership program",
    "life skills",
    "3D printing",
    "CNC",
    "TCF TEF",
    "education",
  ],
  icons: {
    icon: "/logo/2.jpeg",
    shortcut: "/logo/2.jpeg",
    apple: "/logo/2.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans bg-altiusLight text-altiusNavy antialiased`}>
        <AnnouncementBar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}