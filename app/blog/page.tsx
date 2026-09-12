// import type { Metadata } from 'next';
// import BlogHero from '@/components/blog/BlogHero';
// import BlogLayout from '@/components/blog/BlogLayout';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import AnnouncementBar from '@/components/AnnouncementBar';

// export const metadata: Metadata = {
//   title: 'FutureReady Insights & Blog',
//   description:
//     'Career readiness, leadership, technology, and parenting insights for families on the Altius FutureReady™ Grades 5–12 journey.',
// };

// export default function BlogPage() {
//   return (
//     <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
//       <div>
//               <AnnouncementBar /> 
//         <Navbar />
//         <BlogHero />
//         <BlogLayout />
//       </div>
//       <Footer />
//     </main>
//   );
// }



import type { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import BlogLayout from '@/components/blog/BlogLayout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';

export const metadata: Metadata = {
  title: 'FutureReady Insights & Blog',
  description:
    'Career readiness, leadership, technology, and parenting insights for families on the Altius FutureReady™ Grades 5–12 journey.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
      <div>
        <AnnouncementBar /> 
        <Navbar />
        <BlogHero />
        <BlogLayout />
      </div>
      <Footer />
    </main>
  );
}