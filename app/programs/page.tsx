import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import ProgramsContent from '@/components/programs/ProgramsContent';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Programs – Tutoring, TCF/TEF, CNC, 3D Printing & More',
  description:
    'Explore Altius Education programs in Brampton, ON: academic tutoring (math, science, English, French), TCF/TEF exam prep, languages, music, co-op, CNC, 3D printing, welding, and the 8-year Grades 5–12 FutureReady™ system.',
  alternates: {
    canonical: '/programs',
  },
  openGraph: {
    title: 'Programs – Tutoring, TCF/TEF, CNC, 3D Printing & More | Altius Education',
    description:
      'Academic tutoring, TCF/TEF prep, languages, music, co-op, CNC, 3D printing, and skilled trades programs in Brampton, Ontario.',
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${SITE_URL}/programs#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Programs', item: `${SITE_URL}/programs` },
  ],
};

const programItemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Academic Tutoring (Math, Science, English, French)' },
    { '@type': 'ListItem', position: 2, name: 'French TCF/TEF Exam Preparation' },
    { '@type': 'ListItem', position: 3, name: 'Language Classes (English, French, Punjabi)' },
    { '@type': 'ListItem', position: 4, name: 'Music Education (Harmonium, Tabla, Vocals)' },
    { '@type': 'ListItem', position: 5, name: '3D Printing & Technology (CAD, Robotics)' },
    { '@type': 'ListItem', position: 6, name: 'CNC Programming & Advanced Manufacturing' },
    { '@type': 'ListItem', position: 7, name: 'Welding & Skilled Trades' },
    { '@type': 'ListItem', position: 8, name: 'Co-op & Career Connections' },
    { '@type': 'ListItem', position: 9, name: 'Altius FutureReady™ 8-Year Career Program' },
  ],
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={programItemListLd} />
      <div>
        <Navbar />
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <ProgramsContent />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}