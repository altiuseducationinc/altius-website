'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CURRICULUM_DATA, CurriculumSubject } from './curriculumData';

export default function CurriculumContent() {
  const [activeCategory, setActiveCategory] = useState<'elementary' | 'secondary'>('elementary');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered subjects based on category and search query
  const filteredSubjects = useMemo(() => {
    return CURRICULUM_DATA.filter((subj) => {
      const matchesCategory = subj.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        subj.title.toLowerCase().includes(query) ||
        (subj.year && subj.year.includes(query)) ||
        subj.grades.toLowerCase().includes(query) ||
        subj.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Render bespoke vector SVG icons for each curriculum discipline (No emojis)
  const renderSubjectIcon = (iconType: string) => {
    switch (iconType) {
      case 'kindergarten':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        );
      case 'arts':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4 5 5 0 015-5 5 5 0 015 5 4 4 0 01-4 4zm0 0H3m14-8a4 4 0 01-4-4 5 5 0 015-5 5 5 0 015 5 4 4 0 01-4 4zm0 0h-4M9 3v2m6-2v2" />
          </svg>
        );
      case 'fsl':
        return (
          <span className="font-mono font-black text-xs tracking-wider uppercase">FSL</span>
        );
      case 'health':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'language':
      case 'english':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'math':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m-6 4h3m4 0h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'native':
      case 'fnmi':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m14 0a5 5 0 11-10 0 5 5 0 0110 0z" />
          </svg>
        );
      case 'science':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'social':
      case 'cws':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'asl':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
          </svg>
        );
      case 'business':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'classical':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 18h16M7 6v12M12 6v12M17 6v12M3 20h18" />
          </svg>
        );
      case 'computer':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'coop':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'esl':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        );
      case 'guidance':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        );
      case 'interdisciplinary':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        );
      case 'social-sciences':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'tech':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-altiusNavy pb-24 font-sans">
      {/* Hero Banner Section */}
      <section className="relative w-full">
        <div className="relative min-h-[340px] sm:min-h-[380px] w-full bg-altiusNavy flex items-end">
          <Image
            src="/bg1.webp"
            alt="Altius Education Curriculum & Resources"
            fill
            priority
            className="object-cover object-center opacity-60 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-altiusNavy via-altiusNavy/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-altiusNavy/90 via-altiusNavy/60 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-12 space-y-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 uppercase tracking-widest">
              <Link href="/" className="hover:text-altiusGold transition">
                Home
              </Link>
              <span>•</span>
              <span className="text-altiusGold">Curriculum and Resources</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-flex items-center gap-2 bg-altiusGold/15 border border-altiusGold/40 text-altiusGold px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-altiusGold animate-pulse" />
                  Academic Excellence • Ontario Standards • Grades K–12
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                  Ontario Curriculum &amp;{' '}
                  <span className="bg-gradient-to-r from-amber-400 via-altiusGold to-yellow-300 bg-clip-text text-transparent">
                    Resources
                  </span>
                </h1>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed max-w-xl font-light">
                  Official Ontario Ministry of Education curriculum policy documents, grade expectations, parent guides, and course outlines seamlessly integrated into the Altius FutureReady™ learning system.
                </p>
              </div>

              {/* Verified Ministry Status Badge */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-2xl text-white max-w-sm shrink-0 shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-altiusGold/20 border border-altiusGold/40 text-altiusGold flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white">28 Official Disciplines</h4>
                    <p className="text-[11px] text-gray-300">Direct Ontario Ministry Portal Links</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 pt-8 space-y-6">
        {/* Official Ministry Redirection Notice Banner (Inspired by Ontario DCP notification) */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border-l-4 border-altiusGold bg-white rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 border border-amber-200/60">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-altiusGold/20 text-altiusNavy flex items-center justify-center shrink-0 font-bold">
              <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                Direct Ministry Integration: All curriculum expectations, courses, and downloadable policy documents are hosted on the official Ontario Digital Curriculum Portal (DCP).
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Select any subject box below to open the dedicated curriculum portal and download official Ministry PDFs.
              </p>
            </div>
          </div>

          <a
            href={
              activeCategory === 'elementary'
                ? 'https://www.dcp.edu.gov.on.ca/en/curriculum#elementary'
                : 'https://www.dcp.edu.gov.on.ca/en/curriculum#secondary'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-altiusNavy hover:bg-altiusNavy/90 text-altiusGold font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-xs whitespace-nowrap self-start md:self-auto shrink-0"
          >
            <span>Visit Ontario DCP Directory</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Toolbar: Category Tabs + Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Toggle Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100/90 rounded-xl border border-gray-200/80 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <button
                type="button"
                onClick={() => setActiveCategory('elementary')}
                className={`py-2 px-4 sm:px-5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeCategory === 'elementary'
                    ? 'bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 text-altiusGold shadow-sm'
                    : 'text-gray-600 hover:text-altiusNavy hover:bg-white'
                }`}
              >
                <span>Elementary Curriculum (K–8)</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    activeCategory === 'elementary'
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {CURRICULUM_DATA.filter((s) => s.category === 'elementary').length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory('secondary')}
                className={`py-2 px-4 sm:px-5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeCategory === 'secondary'
                    ? 'bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 text-altiusGold shadow-sm'
                    : 'text-gray-600 hover:text-altiusNavy hover:bg-white'
                }`}
              >
                <span>Secondary Curriculum (9–12)</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    activeCategory === 'secondary'
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {CURRICULUM_DATA.filter((s) => s.category === 'secondary').length}
                </span>
              </button>
            </div>

            {/* Real-time Search Box */}
            <div className="relative w-full md:w-80 lg:w-96">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search subject, grade, year..."
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-altiusBlue/30 focus:border-altiusBlue transition shadow-2xs"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3.5 top-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center font-bold cursor-pointer"
                  aria-label="Clear search"
                >
                  &times;
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Curriculum Subjects: 3-Column Grid on Desktop, 1-Column on Mobile */}
        {filteredSubjects.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 space-y-4 shadow-sm">
            <div className="w-14 h-14 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-lg text-altiusNavy">
              No matching curriculum subjects found
            </h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              No subjects matched &quot;{searchQuery}&quot;. Clear your search query to see all subjects.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-altiusBlue hover:underline uppercase tracking-wider cursor-pointer"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredSubjects.map((subject) => (
              <a
                key={subject.id}
                href={subject.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-gray-200/90 shadow-2xs hover:shadow-xl hover:border-altiusGold/60 hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent top gradient line on card hover */}
                <div
                  style={{ backgroundColor: subject.color }}
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="space-y-4">
                  {/* Card Top: Icon Badge + External Arrow Indicator */}
                  <div className="flex items-center justify-between">
                    <div
                      style={{ backgroundColor: subject.color }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm shrink-0 select-none group-hover:scale-105 transition-transform duration-300"
                    >
                      {renderSubjectIcon(subject.iconType)}
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-altiusBlue transition-colors">
                      <span className="text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:inline">
                        Open Portal
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-50 border border-gray-200 flex items-center justify-center group-hover:bg-altiusNavy group-hover:text-altiusGold group-hover:border-altiusNavy transition-all duration-200">
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Title and Metadata */}
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-base text-altiusNavy group-hover:text-altiusBlue transition-colors leading-snug">
                      {subject.title}{' '}
                      {subject.year && (
                        <span className="text-gray-500 font-semibold text-sm">
                          ({subject.year})
                        </span>
                      )}
                    </h3>

                    <div className="inline-block bg-slate-100 text-gray-600 px-2.5 py-0.5 rounded-md text-[11px] font-medium">
                      {subject.grades}
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 pt-1">
                      {subject.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Ministry External Link Bar */}
                <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px]">
                  <span className="text-gray-400 font-medium flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ontario Ministry of Education</span>
                  </span>

                  <span className="font-bold text-altiusBlue group-hover:text-altiusGold transition-colors flex items-center gap-1">
                    <span>PDFs &amp; Strands</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Academic Alignment CTA Card (Consistent with full website branding) */}
        <div className="bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden mt-12">
          <div className="absolute right-0 top-0 w-96 h-96 bg-altiusGold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="bg-gradient-to-r from-amber-400 via-altiusGold to-yellow-300 bg-clip-text text-transparent font-bold uppercase tracking-widest text-xs">
              Complete Academic Pathways
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">
              Looking for Structured Academic Support Aligned with the Ontario Curriculum?
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
              Altius Education combines Ontario curriculum expectations with our FutureReady™ 8-year career development framework, private tutoring in Math, Science, and English, plus specialty hands-on training in 3D Printing, CNC Programming, and TCF/TEF French.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/programs"
                className="bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy text-xs font-extrabold px-6 py-3.5 rounded-xl shadow-lg hover:from-amber-400 hover:to-yellow-300 transition uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Explore Altius Programs</span>
                <span>&rarr;</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/80 text-white text-xs font-bold px-6 py-3.5 rounded-xl hover:bg-white hover:text-altiusNavy transition uppercase tracking-wider backdrop-blur-xs"
              >
                Book An Academic Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
