import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import BlogHero from '@/components/blog/BlogHero';
import BlogLayout from '@/components/blog/BlogLayout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog – Tutoring Tips, Careers & Education Insights',
  description:
    'Career-readiness, tutoring, leadership, technology, and parenting insights for families on the Altius Education Grades 5–12 journey in Brampton, Ontario.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog – Tutoring Tips, Careers & Education Insights',
    description:
      'Career-readiness, tutoring, and parenting insights for families on the Altius Education journey in Brampton, Ontario.',
  },
};

const collectionLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Altius Education Insights & Blog',
  url: `${SITE_URL}/blog`,
  about: 'Tutoring, career readiness, and education insights for Grades 5–12 families in Canada.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
      <JsonLd data={collectionLd} />
      <div>
        <Navbar />
        <BlogHero />
        <BlogLayout />
      </div>
      <Footer />
    </main>
  );
}