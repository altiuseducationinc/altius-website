// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const blogCategories = [
//   {
//     name: "All Articles",
//     blogs: [
//       {
//         id: "1",
//         title: "The 8-Year Altius FutureReady™ Journey: From Career Discovery to Career Readiness",
//         category: "FutureReady Journey",
//         date: "June 10, 2026",
//         image: "/program1.jpg",
//         excerpt:
//           "How a structured Grades 5–12 system — Discover to Launch — builds a career-ready graduate with real evidence, not just a certificate.",
//       },
//       {
//         id: "2",
//         title: "Why Grade 5 Is Not Too Early to Start Thinking About a Career",
//         category: "Career Readiness",
//         date: "May 28, 2026",
//         image: "/program2.jpg",
//         excerpt:
//           "Career discovery in childhood builds confidence, direction, and purpose. Here is how the journey begins in the youngest grades.",
//       },
//       {
//         id: "3",
//         title: "Choosing a Grade 10 Pathway: Engineering, Business, Media, Education, or Trades",
//         category: "Career Pathways",
//         date: "May 15, 2026",
//         image: "/program3.jpg",
//         excerpt:
//           "A practical guide to the five FutureReady pathways and how students decide which specialization fits them best.",
//       },
//       {
//         id: "4",
//         title: "The FutureReady Passport: Building Evidence, Not Just Grades",
//         category: "The Passport",
//         date: "May 02, 2026",
//         image: "/program4.jpg",
//         excerpt:
//           "Seven competency pillars, one portfolio. How students collect proof of communication, leadership, technology, business, and more each year.",
//       },
//       {
//         id: "5",
//         title: "From CAD to Capstone: How 3D Printing and CNC Prepare Students for Real Careers",
//         category: "Technology & Skills",
//         date: "April 20, 2026",
//         image: "/program5.jpg",
//         excerpt:
//           "Hands-on technology is the fastest way to teach design thinking, problem solving, and manufacturing readiness.",
//       },
//     ],
//   },
//   {
//     name: "The FutureReady Journey",
//     blogs: [
//       {
//         id: "1",
//         title: "The 8-Year Altius FutureReady™ Journey: From Career Discovery to Career Readiness",
//         category: "FutureReady Journey",
//         date: "June 10, 2026",
//         image: "/program1.jpg",
//         excerpt:
//           "How a structured Grades 5–12 system — Discover to Launch — builds a career-ready graduate with real evidence, not just a certificate.",
//       },
//       {
//         id: "6",
//         title: "What Your Child Learns in Each Grade Stage: Discover, Explore, Create, Develop",
//         category: "FutureReady Journey",
//         date: "April 12, 2026",
//         image: "/program2.jpg",
//         excerpt:
//           "A walkthrough of the first four stages and the signature projects — from 'My Future Career' to 'Build a Business' — that build momentum.",
//       },
//     ],
//   },
//   {
//     name: "Career Pathways",
//     blogs: [
//       {
//         id: "3",
//         title: "Choosing a Grade 10 Pathway: Engineering, Business, Media, Education, or Trades",
//         category: "Career Pathways",
//         date: "May 15, 2026",
//         image: "/program3.jpg",
//         excerpt:
//           "A practical guide to the five FutureReady pathways and how students decide which specialization fits them best.",
//       },
//       {
//         id: "7",
//         title: "Skilled Trades Are a Smart Career Path: Welding, Manufacturing, and CNC",
//         category: "Career Pathways",
//         date: "March 30, 2026",
//         image: "/program4.jpg",
//         excerpt:
//           "Foundational trade skills offer real career opportunities — and the earlier students explore them, the better.",
//       },
//     ],
//   },
//   {
//     name: "Technology & Skills",
//     blogs: [
//       {
//         id: "5",
//         title: "From CAD to Capstone: How 3D Printing and CNC Prepare Students for Real Careers",
//         category: "Technology & Skills",
//         date: "April 20, 2026",
//         image: "/program5.jpg",
//         excerpt:
//           "Hands-on technology is the fastest way to teach design thinking, problem solving, and manufacturing readiness.",
//       },
//       {
//         id: "8",
//         title: "Coding, AI, and Digital Media: Essential Skills for the Next Decade",
//         category: "Technology & Skills",
//         date: "March 15, 2026",
//         image: "/program2.jpg",
//         excerpt:
//           "Why every student — regardless of pathway — should build confidence with programming, responsible AI use, and digital creativity.",
//       },
//     ],
//   },
//   {
//     name: "Leadership & Life Skills",
//     blogs: [
//       {
//         id: "9",
//         title: "Teaching Financial Literacy: From Allowance Budgeting to Investing Basics",
//         category: "Leadership & Life Skills",
//         date: "February 28, 2026",
//         image: "/program1.jpg",
//         excerpt:
//           "Financial independence is a skill, not a gift. How the journey builds money confidence year after year.",
//       },
//       {
//         id: "10",
//         title: "Public Speaking, Teamwork, and Resilience: The Skills Tests Can't Measure",
//         category: "Leadership & Life Skills",
//         date: "February 12, 2026",
//         image: "/program3.jpg",
//         excerpt:
//           "Communication and leadership are the pillars that turn subject knowledge into career success.",
//       },
//     ],
//   },
//   {
//     name: "Specialty Programs & Languages",
//     blogs: [
//       {
//         id: "11",
//         title: "Preparing for TCF & TEF: Success Strategies for French Exams",
//         category: "Specialty Programs",
//         date: "January 30, 2026",
//         image: "/program4.jpg",
//         excerpt:
//           "Structured practice and test familiarity are the keys to confidence in speaking, listening, reading, and writing.",
//       },
//       {
//         id: "12",
//         title: "The Cognitive Benefits of Music Education for Children and Youth",
//         category: "Specialty Programs",
//         date: "January 15, 2026",
//         image: "/program5.jpg",
//         excerpt:
//           "Music education builds discipline, enhances memory, and fosters creative self-expression in a supportive environment.",
//       },
//     ],
//   },
//   {
//     name: "Center News",
//     blogs: [
//       {
//         id: "13",
//         title: "Altius Announces 2026–27 FutureReady™ Admissions — Reserve Your Grade Stage",
//         category: "News",
//         date: "June 12, 2026",
//         image: "/program3.jpg",
//         excerpt:
//           "New batches are open across all eight grade stages, plus expanded specialty programs in tutoring, languages, music, CNC, and skilled trades.",
//       },
//     ],
//   },
// ];

// export default function BlogLayout() {
//   const [activeCategory, setActiveCategory] = useState("All Articles");

//   const currentCategoryData =
//     blogCategories.find((c) => c.name === activeCategory) || blogCategories[0];

//   return (
//     <section className="py-20 px-6 bg-white text-altiusNavy">
//       <div className="max-w-7xl mx-auto">

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

//           {/* Sidebar Section */}
//           <div className="lg:col-span-3 space-y-8">
            
//             {/* Categories Box with Subtle Gradient */}
//             <div className="bg-gradient-to-br from-blue-50/80 via-white to-amber-50/30 p-6 rounded-xl border border-gray-200/80 shadow-sm">
//               <h3 className="font-serif text-lg font-bold bg-gradient-to-r from-blue-950 via-altiusBlue to-altiusGold bg-clip-text text-transparent mb-4 flex items-center gap-2">
//                 <svg className="w-4 h-4 text-altiusGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
//                 </svg>
//                 Categories
//               </h3>
//               <ul className="space-y-2">
//                 {blogCategories.map((cat, index) => (
//                   <li key={index}>
//                     <button
//                       onClick={() => setActiveCategory(cat.name)}
//                       aria-pressed={activeCategory === cat.name}
//                       className={`text-sm font-medium transition text-left w-full py-2 px-3 rounded-lg ${
//                         activeCategory === cat.name
//                           ? 'bg-gradient-to-r from-blue-950 to-altiusBlue text-white font-bold shadow-md'
//                           : 'text-gray-700 hover:bg-white/80 hover:text-altiusBlue'
//                       }`}
//                     >
//                       {cat.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Promo Card Container */}
//             <div className="relative rounded-xl overflow-hidden shadow-lg h-[340px] flex flex-col justify-end p-6 text-white">
//               <div className="absolute inset-0 z-0">
//                 <Image
//                   src="/f1.png"
//                   alt="Altius FutureReady Programs"
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-altiusNavy/80 to-transparent" />
//               </div>

//               <div className="relative z-10 space-y-2">
//                 <span className="text-[11px] font-semibold uppercase tracking-wider text-altiusGold drop-shadow">Learn Higher. Achieve Greater.</span>
//                 <h4 className="font-serif text-lg font-bold leading-snug drop-shadow-sm">
//                   Begin the 8-year journey from career discovery to career readiness.
//                 </h4>
//                 <div className="pt-2">
//                   <Link
//                     href="/programs"
//                     className="inline-block bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy text-xs font-extrabold px-4 py-2.5 rounded-lg shadow hover:opacity-95 transition tracking-wider uppercase"
//                   >
//                     Explore Programs
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content Section */}
//           <div className="lg:col-span-9">
//             <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
//               <h2 className="font-serif text-2xl font-bold bg-gradient-to-r from-blue-950 via-altiusBlue to-altiusGold bg-clip-text text-transparent">
//                 {activeCategory} <span className="text-sm font-normal text-gray-500">({currentCategoryData.blogs.length} articles)</span>
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {currentCategoryData.blogs.map((blog) => (
//                 <div key={blog.id} className="flex flex-col space-y-4 group bg-white border border-gray-200/80 rounded-xl p-5 shadow-sm hover:shadow-md transition">

//                   <div className="relative h-52 w-full rounded-lg overflow-hidden bg-gray-100">
//                     <Image
//                       src={blog.image}
//                       alt={blog.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition duration-500"
//                     />
//                   </div>

//                   <div className="space-y-2 flex-1 flex flex-col justify-between">
//                     <div className="space-y-2">
//                       <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-bold text-gray-500">
//                         <span className="text-altiusGold bg-altiusNavy px-2.5 py-1 rounded-md">{blog.category}</span>
//                         <span>{blog.date}</span>
//                       </div>

//                       <h3 className="font-serif text-lg font-bold text-altiusNavy group-hover:text-altiusBlue transition leading-snug">
//                         {blog.title}
//                       </h3>

//                       <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
//                         {blog.excerpt}
//                       </p>
//                     </div>

//                     <div className="pt-3 border-t border-gray-100">
//                       <Link
//                         href="/programs"
//                         className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-altiusNavy hover:text-altiusBlue transition"
//                       >
//                         <span className="w-2 h-0.5 bg-altiusGold inline-block" /> Read more
//                       </Link>
//                     </div>
//                   </div>

//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ALL_BLOGS } from './blogData';

const categoriesList = [
  "All Articles",
  "The FutureReady Journey",
  "Career Pathways",
  "Technology & Skills",
  "Leadership & Life Skills",
  "Specialty Programs & Languages",
  "Center News"
];

export default function BlogLayout() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);

  // Filter blogs based on active category
  const filteredBlogs = activeCategory === "All Articles" 
    ? ALL_BLOGS 
    : ALL_BLOGS.filter(blog => {
        if (activeCategory === "The FutureReady Journey") return blog.category === "FutureReady Journey";
        if (activeCategory === "Career Pathways") return blog.category === "Career Pathways";
        if (activeCategory === "Technology & Skills") return blog.category === "Technology & Skills";
        if (activeCategory === "Leadership & Life Skills") return blog.category === "Leadership & Life Skills";
        if (activeCategory === "Specialty Programs & Languages") return blog.category === "Specialty Programs";
        if (activeCategory === "Center News") return blog.category === "News";
        return true;
      });

  return (
    <section className="py-20 px-6 bg-white text-altiusNavy">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Sidebar Section */}
          <div className="lg:col-span-3 flex flex-col space-y-8">
            
            {/* Promo Card Container (Appears first on mobile using order-1) */}
            <div className="relative rounded-[8px] overflow-hidden shadow-md h-[340px] flex flex-col justify-end p-6 text-white order-1 lg:order-2">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/f1.png"
                  alt="Altius FutureReady Programs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-altiusNavy/80 to-transparent" />
              </div>

              <div className="relative z-10 space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-altiusGold drop-shadow">Learn Higher. Achieve Greater.</span>
                <h4 className="font-serif text-lg font-bold leading-snug drop-shadow-sm">
                  Begin the 8-year journey from career discovery to career readiness.
                </h4>
                <div className="pt-2">
                  <Link
                    href="/programs"
                    className="inline-block bg-gradient-to-r from-amber-500 via-altiusGold to-yellow-400 text-altiusNavy text-xs font-extrabold px-4 py-2.5 rounded-[8px] shadow hover:opacity-95 transition tracking-wider uppercase"
                  >
                    Explore Programs
                  </Link>
                </div>
              </div>
            </div>

            {/* Categories Box (Appears second on mobile using order-2) */}
            <div className="bg-gradient-to-br from-blue-50/80 via-white to-amber-50/30 p-5 sm:p-6 rounded-[8px] border border-gray-200/80 shadow-xs order-2 lg:order-1">
              
              {/* Mobile Toggle Button */}
              <button
                onClick={() => setIsMobileCategoriesOpen(!isMobileCategoriesOpen)}
                className="w-full flex items-center justify-between lg:pointer-events-none cursor-pointer"
                aria-expanded={isMobileCategoriesOpen}
              >
                <h3 className="font-serif text-lg font-bold bg-gradient-to-r from-blue-950 via-altiusBlue to-altiusGold bg-clip-text text-transparent flex items-center gap-2 m-0">
                  <svg className="w-4 h-4 text-altiusGold shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  <span>Categories: <span className="text-xs font-sans text-altiusNavy font-semibold">{activeCategory}</span></span>
                </h3>

                {/* Arrow Icon visible only on mobile */}
                <svg 
                  className={`w-5 h-5 text-altiusNavy transition-transform duration-300 lg:hidden shrink-0 ${isMobileCategoriesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Categories List */}
              <ul className={`space-y-2 mt-4 ${isMobileCategoriesOpen ? 'block animate-fade-in' : 'hidden lg:block'}`}>
                {categoriesList.map((catName, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setActiveCategory(catName);
                        setIsMobileCategoriesOpen(false); // Close dropdown on mobile selection
                      }}
                      aria-pressed={activeCategory === catName}
                      className={`text-sm font-medium transition text-left w-full py-2 px-3 rounded-[6px] cursor-pointer ${
                        activeCategory === catName
                          ? 'bg-gradient-to-r from-blue-950 to-altiusBlue text-white font-bold shadow-xs'
                          : 'text-gray-700 hover:bg-white/80 hover:text-altiusBlue'
                      }`}
                    >
                      {catName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Main Content Section */}
          <div className="lg:col-span-9">
            <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="font-serif text-2xl font-bold bg-gradient-to-r from-blue-950 via-altiusBlue to-altiusGold bg-clip-text text-transparent">
                {activeCategory} <span className="text-sm font-normal text-gray-500">({filteredBlogs.length} articles)</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBlogs.map((blog) => (
                <div key={blog.id} className="flex flex-col space-y-4 group bg-white border border-gray-200/80 rounded-[8px] p-5 shadow-xs hover:shadow-md transition">
                  <div className="relative h-52 w-full rounded-[6px] overflow-hidden bg-gray-100">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-bold text-gray-500">
                        <span className="text-altiusGold bg-altiusNavy px-2.5 py-1 rounded-[6px]">{blog.category}</span>
                        <span>{blog.date}</span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-altiusNavy group-hover:text-altiusBlue transition leading-snug">
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <Link
                        href={`/blog/${blog.id}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-altiusNavy hover:text-altiusBlue transition"
                      >
                        <span className="w-2 h-0.5 bg-altiusGold inline-block" /> Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}