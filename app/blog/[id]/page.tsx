import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_BLOGS } from '@/components/blog/blogData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';

export async function generateStaticParams() {
  return ALL_BLOGS.map((blog) => ({
    id: blog.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const blog = ALL_BLOGS.find((b) => b.id === resolvedParams.id);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col justify-between bg-white text-altiusNavy">
      <div>
        <AnnouncementBar />
        <Navbar />

        {/* Editorial Article Container */}
        <article className="max-w-4xl mx-auto px-6 py-16 space-y-10">
          
          {/* Back Navigation Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-altiusBlue hover:underline"
          >
            &larr; Back to All Articles
          </Link>

          {/* Centered Editorial Title & Subtitle Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-altiusGold bg-altiusNavy px-3 py-1 rounded-[6px] inline-block">
              {blog.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-altiusNavy leading-tight tracking-tight">
              {blog.title}
            </h1>
            <p className="font-serif italic text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed pt-1">
              &ldquo;{blog.excerpt}&rdquo;
            </p>
          </div>

          {/* Metadata Row: Date / Author (Lines removed as requested) */}
          <div className="flex items-center justify-between text-xs text-gray-500 font-medium max-w-3xl mx-auto">
            <span>Published: {blog.date}</span>
            <span className="uppercase tracking-widest text-[10px] text-altiusNavy font-bold">Altius Editorial Desk</span>
          </div>

          {/* Featured Proper Size Image Box (Video overlay removed) */}
          <div className="relative w-full h-[280px] sm:h-[420px] rounded-[8px] overflow-hidden bg-gray-100 shadow-sm max-w-3xl mx-auto">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Body Content Column */}
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed font-sans pt-2 pb-6">
            <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-altiusNavy first-letter:mr-3 first-letter:float-left">
              {blog.content}
            </p>
            <p>
              In the Altius FutureReady™ system, our framework emphasizes experiential learning over theoretical memorization. Every module, workshop, and portfolio milestone is curated to instill critical thinking, technical capability, and lifelong leadership confidence.
            </p>
            <p>
              Whether exploring early career tracks in Grade 5 or finalizing capstone projects in Grade 12, students are encouraged to immerse themselves fully in the process, turning every challenge into a tangible achievement for their FutureReady Passport.
            </p>
          </div>

          {/* Bottom Action / CTA Card */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 text-white rounded-[8px] p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="bg-gradient-to-r from-amber-400 via-altiusGold to-yellow-300 bg-clip-text text-transparent font-bold uppercase tracking-widest text-xs">
                Learn Higher. Achieve Greater.
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Ready to start your FutureReady™ journey?
              </h3>
            </div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy text-xs font-extrabold px-6 py-3 rounded-[8px] shadow-lg hover:opacity-95 transition uppercase tracking-wider whitespace-nowrap"
            >
              Contact Us Today
            </Link>
          </div>

        </article>
      </div>

      <Footer />
    </main>
  );
}