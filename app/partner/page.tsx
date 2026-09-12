import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnerHero from '@/components/partner/PartnerHero';
import PartnerFormRedirect from '@/components/partner/PartnerFormEmbed'; // Or PartnerFormEmbed based on your file naming
import AnnouncementBar from '@/components/AnnouncementBar';

export const metadata: Metadata = {
  title: 'Partner With Altius',
  description:
    'Build the next generation of career-ready students. Partner with Altius FutureReady™ through co-op placements, mentorship, sponsorship, curriculum development, and more.',
};

export default function PartnerPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-white text-altiusNavy">
      <div>
        <AnnouncementBar />
        <Navbar />
        <PartnerHero />

        {/* Normal container flow without overlap */}
        <section className="relative px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <PartnerFormRedirect />
          </div>
        </section>      
      </div>
      <Footer />
    </main>
  );
}