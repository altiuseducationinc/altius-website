import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfoCard from '@/components/contact/ContactInfoCard';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';
import AnnouncementBar from '@/components/AnnouncementBar';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Book a consultation with the Altius FutureReady™ admissions desk and find the right grade stage for your child.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-white text-altiusNavy">
      <div>
        <AnnouncementBar />
        <Navbar />
        <ContactHero />

        <section className="relative px-6 -mt-20 sm:-mt-24 mb-16 z-20">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <ContactInfoCard />
              </div>
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <ContactMap />
      </div>
      <Footer />
    </main>
  );
}