import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';
import AboutHero from '@/components/about/AboutHero';
import ProgramSteps from '@/components/about/ProgramSteps';
import VisionSection from '@/components/about/VisionSection';
import LeadershipTeam from '@/components/about/LeadershipTeam';
import FutureReadyPassport from '@/components/about/FutureReadyPassport';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Our Brampton Tutoring & Career Centre',
  description:
    'Altius Education Inc. is an 8-year Grades 5–12 career-readiness centre in Brampton, Ontario — tutoring, TCF/TEF prep, and FutureReady™ programs that build confident, career-ready graduates.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Our Brampton Tutoring & Career Centre',
    description:
      'Altius Education Inc. is an 8-year Grades 5–12 career-readiness centre in Brampton, Ontario.',
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${SITE_URL}/about#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}/about` },
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
      <JsonLd data={breadcrumbLd} />
      <div>
        <Navbar />
        <AboutHero />
        <ProgramSteps />
        <FutureReadyPassport />
        <VisionSection />
        <LeadershipTeam />
      </div>
      <Footer />
    </main>
  );
}