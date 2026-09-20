import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfoCard from '@/components/contact/ContactInfoCard';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';
import { SITE, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us – Book Tutoring Classes in Brampton, ON',
  description:
    'Book a free consultation with Altius Education in Brampton, Ontario. Call (905) 781-5450, WhatsApp us, or send a message to enrol in tutoring, TCF/TEF, FutureReady™, and specialty programs.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Altius Education – Brampton, ON',
    description:
      'Call (905) 781-5450 or message us to book tutoring classes, TCF/TEF prep, and FutureReady™ programs in Brampton, Ontario.',
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${SITE_URL}/contact#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${SITE_URL}/contact` },
  ],
};

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${SITE_URL}/#localbusiness`,
  name: SITE.name,
  alternateName: SITE.legalName,
  url: SITE_URL,
  logo: SITE.logo,
  image: SITE.logo,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: '$$',
  currenciesAccepted: 'CAD',
  address: {
    '@type': 'PostalAddress',
    ...SITE.address,
  },
  areaServed: ['Brampton', 'Mississauga', 'Greater Toronto Area', 'Ontario', 'Canada'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Altius Education Programs',
    itemListElement: SITE.services.map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.phone,
    contactType: 'customer service',
    email: SITE.email,
    areaServed: 'CA',
    availableLanguage: ['English', 'French', 'Punjabi'],
  },
};

const contactPageLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Altius Education',
  url: `${SITE_URL}/contact`,
  mainEntity: localBusinessLd,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={localBusinessLd} />
      <JsonLd data={contactPageLd} />
      <div>
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