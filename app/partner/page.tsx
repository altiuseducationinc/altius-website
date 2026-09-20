import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnerHero from '@/components/partner/PartnerHero';
import PartnerFormEmbed from '@/components/partner/PartnerFormEmbed';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Partner With Altius Education – Co-op, Mentorship & Sponsorship',
  description:
    'Build the next generation of career-ready students. Partner with Altius Education in Brampton, ON through co-op placements, mentorship, sponsorship, and curriculum development.',
  alternates: {
    canonical: '/partner',
  },
  openGraph: {
    title: 'Partner With Altius Education',
    description:
      'Co-op placements, mentorship, sponsorship, and curriculum development partnership opportunities with Altius Education.',
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${SITE_URL}/partner#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Partner With Us', item: `${SITE_URL}/partner` },
  ],
};

export default function PartnerPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
      <JsonLd data={breadcrumbLd} />
      <div>
        <Navbar />
        <PartnerHero />

        <section className="relative px-6 -mt-20 sm:-mt-24">
          <div className="max-w-6xl mx-auto">
            <PartnerFormEmbed />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
