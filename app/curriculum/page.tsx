import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import CurriculumContent from '@/components/curriculum/CurriculumContent';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Ontario Curriculum & Resources for Families in Brampton',
  description:
    'Explore and download official Ontario Curriculum policy documents, grade expectations, parent guides, and subject resources — used by Altius Education tutoring in Brampton, Ontario.',
  keywords: [
    'Ontario curriculum',
    'Elementary curriculum',
    'Secondary curriculum',
    'Ontario math curriculum',
    'Ontario science curriculum',
    'Ontario language curriculum 2023',
    'curriculum resources Brampton',
    'Altius Education',
  ],
  alternates: {
    canonical: '/curriculum',
  },
  openGraph: {
    title: 'Ontario Curriculum & Resources for Families in Brampton',
    description:
      'Official Ontario Curriculum documents, grade expectations, and parent guides for K–12 learners in Brampton, Ontario.',
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${SITE_URL}/curriculum#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Curriculum', item: `${SITE_URL}/curriculum` },
  ],
};

export default function CurriculumPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-slate-50 text-altiusNavy">
      <JsonLd data={breadcrumbLd} />
      <div>
        <Navbar />
        <Suspense fallback={<div className="py-24 text-center text-sm font-bold text-gray-500">Loading Ontario Curriculum...</div>}>
          <CurriculumContent />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
