import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import ProgramSteps from '@/components/about/ProgramSteps';
import VisionSection from '@/components/about/VisionSection';
import LeadershipTeam from '@/components/about/LeadershipTeam';
import FutureReadyPassport from '@/components/about/FutureReadyPassport';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Altius Education Inc. — an 8-year Grades 5–12 career readiness system built around the Altius FutureReady™ journey and Passport.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
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