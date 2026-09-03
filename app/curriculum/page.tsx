import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CurriculumContent from '@/components/curriculum/CurriculumContent';

export const metadata: Metadata = {
  title: 'Ontario Curriculum & Resources | Altius Education',
  description:
    'Explore and download official Ontario Curriculum policy documents, grade expectations, parent guides, and subject resources for Elementary (K–8) and Secondary (9–12) education.',
  keywords: [
    'Ontario curriculum',
    'Elementary curriculum',
    'Secondary curriculum',
    'French as a second language curriculum',
    'Ontario math curriculum',
    'Ontario science curriculum',
    'Language curriculum 2023',
    'Curriculum downloads',
    'Altius Education',
  ],
};

export default function CurriculumPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-slate-50 text-altiusNavy">
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
