import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnerHero from '@/components/partner/PartnerHero';
import PartnerFormEmbed from '@/components/partner/PartnerFormEmbed';

export const metadata: Metadata = {
  title: 'Partner With Altius',
  description:
    'Build the next generation of career-ready students. Partner with Altius FutureReady™ through co-op placements, mentorship, sponsorship, curriculum development, and more.',
};

export default function PartnerPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
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
