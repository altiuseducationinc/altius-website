export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content?: string;
}

export const ALL_BLOGS: BlogPost[] = [
  {
    id: "1",
    title: "The 8-Year Altius FutureReady™ Journey: From Career Discovery to Career Readiness",
    category: "FutureReady Journey",
    date: "June 10, 2026",
    image: "/b5.png",
    excerpt: "How a structured Grades 5–12 system — Discover to Launch — builds a career-ready graduate with real evidence, not just a certificate.",
    content: "In the Altius FutureReady™ system, students move through eight distinct stages from Grade 5 to Grade 12. Every year builds upon the last, combining career discovery, leadership training, and hands-on technology projects to ensure graduates leave with a robust portfolio rather than just a standard completion certificate."
  },
  {
    id: "2",
    title: "Why Grade 5 Is Not Too Early to Start Thinking About a Career",
    category: "Career Readiness",
    date: "May 28, 2026",
    image: "/b4.png",
    excerpt: "Career discovery in childhood builds confidence, direction, and purpose. Here is how the journey begins in the youngest grades.",
    content: "Early career discovery isn't about locking a child into a rigid path; it is about expanding their horizons. By exploring different industries, problem-solving techniques, and collaborative environments early on, students build essential confidence and direction."
  },
  {
    id: "3",
    title: "Choosing a Grade 10 Pathway: Engineering, Business, Media, Education, or Trades",
    category: "Career Pathways",
    date: "May 15, 2026",
    image: "/b3.png",
    excerpt: "A practical guide to the five FutureReady pathways and how students decide which specialization fits them best.",
    content: "As students enter Grade 10, choosing the right specialization path becomes critical. Whether leaning toward engineering, business, media, education, or skilled trades, our framework helps them align their passions with real-world application."
  },
  {
    id: "4",
    title: "The FutureReady Passport: Building Evidence, Not Just Grades",
    category: "The Passport",
    date: "May 02, 2026",
    image: "/b2.png",
    excerpt: "Seven competency pillars, one portfolio. How students collect proof of communication, leadership, technology, business, and more each year.",
    content: "The FutureReady Passport acts as a living portfolio. Instead of just accumulating theoretical grades, students gather tangible evidence—prototypes, code repositories, presentations, and leadership records—that showcase what they can actually accomplish."
  },
  {
    id: "5",
    title: "From CAD to Capstone: How 3D Printing and CNC Prepare Students for Real Careers",
    category: "Technology & Skills",
    date: "April 20, 2026",
    image: "/b1.png",
    excerpt: "Hands-on technology is the fastest way to teach design thinking, problem solving, and manufacturing readiness.",
    content: "Hands-on engineering concepts like CAD modeling, 3D printing, and CNC programming bridge the gap between abstract textbook physics and real manufacturing careers."
  },
  {
    id: "6",
    title: "What Your Child Learns in Each Grade Stage: Discover, Explore, Create, Develop",
    category: "FutureReady Journey",
    date: "April 12, 2026",
    image: "/b6.png",
    excerpt: "A walkthrough of the first four stages and the signature projects — from 'My Future Career' to 'Build a Business' — that build momentum.",
    content: "A detailed look into the initial developmental phases of our 8-year system, outlining the transition from foundational awareness in Grade 5 to structured enterprise creation in middle school."
  },
  {
    id: "7",
    title: "Skilled Trades Are a Smart Career Path: Welding, Manufacturing, and CNC",
    category: "Career Pathways",
    date: "March 30, 2026",
    image: "/b7.png",
    excerpt: "Foundational trade skills offer real career opportunities — and the earlier students explore them, the better.",
    content: "Modern skilled trades demand high-tech literacy alongside craftsmanship. Early exposure prepares students for high-demand careers in advanced manufacturing."
  },
  {
    id: "8",
    title: "Coding, AI, and Digital Media: Essential Skills for the Next Decade",
    category: "Technology & Skills",
    date: "March 15, 2026",
    image: "/b8.png",
    excerpt: "Why every student — regardless of pathway — should build confidence with programming, responsible AI use, and digital creativity.",
    content: "Technology literacy is no longer restricted to computer science majors. Artificial intelligence, coding frameworks, and digital media competencies are core pillars for all future leaders."
  },
  {
    id: "9",
    title: "Teaching Financial Literacy: From Allowance Budgeting to Investing Basics",
    category: "Leadership & Life Skills",
    date: "February 28, 2026",
    image: "/b9.png",
    excerpt: "Financial independence is a skill, not a gift. How the journey builds money confidence year after year.",
    content: "Money management and financial intelligence are integrated into our life skills framework, ensuring students understand budgeting, compound growth, and responsible asset management early."
  },
  {
    id: "10",
    title: "Public Speaking, Teamwork, and Resilience: The Skills Tests Can't Measure",
    category: "Leadership & Life Skills",
    date: "February 12, 2026",
    image: "/b13.png",
    excerpt: "Communication and leadership are the pillars that turn subject knowledge into career success.",
    content: "Technical brilliance is multiplied when paired with strong public speaking abilities, collaborative negotiation tactics, and emotional resilience under pressure."
  },
  {
    id: "11",
    title: "Preparing for TCF & TEF: Success Strategies for French Exams",
    category: "Specialty Programs",
    date: "January 30, 2026",
    image: "/b10.png",
    excerpt: "Structured practice and test familiarity are the keys to confidence in speaking, listening, reading, and writing.",
    content: "Our specialized language coaching provides immersive frameworks designed to maximize scores on official French proficiency examinations like the TCF and TEF."
  },
  {
    id: "12",
    title: "The Cognitive Benefits of Music Education for Children and Youth",
    category: "Specialty Programs",
    date: "January 15, 2026",
    image: "/b11.png",
    excerpt: "Music education builds discipline, enhances memory, and fosters creative self-expression in a supportive environment.",
    content: "Music stimulates neural pathways associated with mathematical processing, emotional intelligence, and memory retention, complementing rigorous academic pathways."
  },
  {
    id: "13",
    title: "Altius Announces 2026–27 FutureReady™ Admissions — Reserve Your Grade Stage",
    category: "News",
    date: "June 12, 2026",
    image: "/b12.png",
    excerpt: "New batches are open across all eight grade stages, plus expanded specialty programs in tutoring, languages, music, CNC, and skilled trades.",
    content: "Enrollment for the upcoming academic year is now officially live. Secure your child's placement across our core grade stages and specialty enrichment workshops."
  },
];