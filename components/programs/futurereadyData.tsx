// export interface CurriculumArea {
//   area: string;
//   items: string[];
// }

// export interface Stage {
//   grade: string;
//   stage: string;
//   question: string;
//   goal: string;
//   curriculum: CurriculumArea[];
//   majorProject: {
//     title: string;
//     detail: string;
//   };
//   emoji: string;
// }

// export const PROGRESSION: { grade: string; stage: string; question: string }[] = [
//   { grade: "Grade 5", stage: "Discover", question: "Who am I?" },
//   { grade: "Grade 6", stage: "Explore", question: "What interests me?" },
//   { grade: "Grade 7", stage: "Create", question: "What can I build?" },
//   { grade: "Grade 8", stage: "Develop", question: "What skills can I develop?" },
//   { grade: "Grade 9", stage: "Experience", question: "What does the real world look like?" },
//   { grade: "Grade 10", stage: "Specialize", question: "Which pathway fits me?" },
//   { grade: "Grade 11", stage: "Apply", question: "Can I use my skills professionally?" },
//   { grade: "Grade 12", stage: "Launch", question: "Am I ready for my next step?" },
// ];

// export const PILLARS = [
//   { title: "Communication", desc: "Speak, write and present with confidence in any room.", emoji: "🗣️" },
//   { title: "Leadership", desc: "Take responsibility, lead teams and make decisions.", emoji: "🎤" },
//   { title: "Technology", desc: "Coding, AI, CAD, 3D printing and digital tools.", emoji: "💻" },
//   { title: "Innovation", desc: "Design thinking, problem solving and prototyping.", emoji: "🔧" },
//   { title: "Business", desc: "Marketing, sales, entrepreneurship and e-commerce.", emoji: "💼" },
//   { title: "Financial Literacy", desc: "Saving, budgeting, credit and investing basics.", emoji: "💰" },
//   { title: "Career Readiness", desc: "Resumes, interviews, portfolios and workplace skills.", emoji: "🚀" },
// ];

// export const STAGES: Stage[] = [
//   {
//     grade: "Grade 5",
//     stage: "Discover",
//     question: "Who am I?",
//     emoji: "🧭",
//     goal: "Help students understand themselves, the world of work and basic life skills.",
//     curriculum: [
//       { area: "Personality", items: ["Confidence", "Strengths & weaknesses", "Growth mindset"] },
//       { area: "Communication", items: ["Speaking clearly", "Listening", "Introductions"] },
//       { area: "Social Skills", items: ["Teamwork", "Respect", "Cooperation"] },
//       { area: "Careers", items: ["What is a career?", "Different professions"] },
//       { area: "Money", items: ["Needs vs. wants", "Saving", "Budgeting"] },
//       { area: "Technology", items: ["Computer basics", "Digital safety", "AI awareness"] },
//       { area: "Innovation", items: ["Simple design/build challenges"] },
//       { area: "Creativity", items: ["Art", "Design", "Presentation"] },
//       { area: "Life Skills", items: ["Time management", "Organization"] },
//       { area: "Leadership", items: ["Taking responsibility", "Helping others"] },
//     ],
//     majorProject: {
//       title: "My Future Career",
//       detail: "Each student researches one career and presents it to the class.",
//     },
//   },
//   {
//     grade: "Grade 6",
//     stage: "Explore",
//     question: "What interests me?",
//     emoji: "🔍",
//     goal: "Students discover their interests and begin developing practical skills.",
//     curriculum: [
//       { area: "Personality", items: ["Self-awareness", "Confidence", "Resilience"] },
//       { area: "Communication", items: ["Public speaking", "Storytelling"] },
//       { area: "Leadership", items: ["Team roles", "Decision-making"] },
//       { area: "Careers", items: ["STEM", "Business", "Healthcare", "Trades", "Arts"] },
//       { area: "Finance", items: ["Saving", "Budgeting", "Basic banking"] },
//       { area: "Technology", items: ["Digital productivity", "Presentations"] },
//       { area: "Coding", items: ["Block coding", "Introductory programming"] },
//       { area: "Design", items: ["Engineering challenges"] },
//       { area: "Entrepreneurship", items: ["Idea generation"] },
//       { area: "Life Skills", items: ["Planning", "Responsibility"] },
//     ],
//     majorProject: {
//       title: "Invent Something",
//       detail: "Students identify a problem, create an idea, design it and present it.",
//     },
//   },
//   {
//     grade: "Grade 7",
//     stage: "Create",
//     question: "What can I build?",
//     emoji: "🛠️",
//     goal: "Move students from learning about careers to actually creating things.",
//     curriculum: [
//       { area: "Personality", items: ["Leadership", "Confidence", "Emotional intelligence"] },
//       { area: "Communication", items: ["Debate", "Presentations", "Persuasive speaking"] },
//       { area: "Business", items: ["Products", "Customers", "Branding"] },
//       { area: "Entrepreneurship", items: ["Business ideas"] },
//       { area: "Finance", items: ["Budgeting", "Profit and cost"] },
//       { area: "Coding", items: ["Introduction to Python"] },
//       { area: "Engineering", items: ["Design thinking"] },
//       { area: "CAD", items: ["Introduction to 3D design"] },
//       { area: "3D Printing", items: ["Design to prototype"] },
//       { area: "Marketing", items: ["Posters", "Advertising", "Social media concepts"] },
//     ],
//     majorProject: {
//       title: "Design & Build Challenge",
//       detail: "Students design a product and create a working prototype.",
//     },
//   },
//   {
//     grade: "Grade 8",
//     stage: "Develop",
//     question: "What skills can I develop?",
//     emoji: "📈",
//     goal: "Develop stronger technical, business and leadership skills before entering high school.",
//     curriculum: [
//       { area: "Leadership", items: ["Team leadership", "Conflict resolution"] },
//       { area: "Communication", items: ["Professional presentations"] },
//       { area: "Career", items: ["Career assessment", "Exploration"] },
//       { area: "Business", items: ["Marketing", "Customer research"] },
//       { area: "Entrepreneurship", items: ["Business model basics"] },
//       { area: "Finance", items: ["Profit", "Revenue", "Expenses"] },
//       { area: "Coding", items: ["Python", "Web fundamentals"] },
//       { area: "AI", items: ["Responsible use of AI"] },
//       { area: "CAD", items: ["Intermediate 3D modelling"] },
//       { area: "3D Printing", items: ["Prototyping"] },
//       { area: "Career Skills", items: ["Resumes", "Interviews"] },
//     ],
//     majorProject: {
//       title: "Build a Business",
//       detail: "Problem → Product → Prototype → Brand → Marketing → Presentation.",
//     },
//   },
//   {
//     grade: "Grade 9",
//     stage: "Experience",
//     question: "What does the real world look like?",
//     emoji: "🏢",
//     goal: "Introduce students to the actual workplace and different career pathways.",
//     curriculum: [
//       { area: "Career Exploration", items: ["Career assessment", "University", "College", "Skilled trades", "Apprenticeships", "Entrepreneurship"] },
//       { area: "Professional Communication", items: ["Professional email", "Phone etiquette", "Presentations", "Workplace behaviour"] },
//       { area: "Technology", items: ["Coding", "AI", "CAD", "3D printing", "Digital tools"] },
//       { area: "Business", items: ["Entrepreneurship", "Marketing", "Sales", "Customer service"] },
//       { area: "Financial Literacy", items: ["Banking", "Budgeting", "Credit", "Taxes intro"] },
//       { area: "Workplace Readiness", items: ["Punctuality", "Professionalism", "Teamwork", "Workplace safety"] },
//     ],
//     majorProject: {
//       title: "Career Discovery Portfolio",
//       detail: "Students participate in workplace tours, career speakers, job-shadowing, industry visits and professional interviews.",
//     },
//   },
//   {
//     grade: "Grade 10",
//     stage: "Specialize",
//     question: "Which pathway fits me?",
//     emoji: "🎯",
//     goal: "Students begin choosing a career pathway across five tracks.",
//     curriculum: [
//       { area: "Engineering & Technology", items: ["CAD", "3D modelling", "3D printing", "Mechanical design", "Robotics", "CNC concepts", "Programming", "Automation"] },
//       { area: "Business & Entrepreneurship", items: ["Business planning", "Marketing", "Sales", "Accounting basics", "E-commerce", "Digital marketing"] },
//       { area: "Education & Leadership", items: ["Communication", "Leadership", "Child development basics", "Teaching strategies", "Classroom activities", "Tutoring", "Presentation skills"] },
//       { area: "Digital Media", items: ["Graphic design", "Photography", "Video", "Digital cinematography", "AI-assisted creativity", "Branding", "Social media"] },
//       { area: "Manufacturing & Skilled Trades", items: ["Tools", "Mechanical fundamentals", "Manufacturing", "CAD", "CNC concepts", "3D printing", "Workplace safety"] },
//     ],
//     majorProject: {
//       title: "Career Portfolio",
//       detail: "Students produce a resume, cover letter, career plan, skills profile, portfolio and complete a mock interview.",
//     },
//   },
//   {
//     grade: "Grade 11",
//     stage: "Apply",
//     question: "Can I use my skills professionally?",
//     emoji: "💼",
//     goal: "Students start applying their knowledge to realistic professional situations.",
//     curriculum: [
//       { area: "Professional Development", items: ["Resume writing", "Cover letters", "Interviewing", "Networking", "Professional communication"] },
//       { area: "Leadership", items: ["Project management", "Team leadership", "Conflict resolution", "Decision-making"] },
//       { area: "Financial Independence", items: ["Paycheques", "Taxes", "Credit", "Banking", "Budgeting", "Financial planning"] },
//       { area: "Semester 2 Specialization", items: ["Engineering: design & manufacture a product", "Business: create & operate a mini-business", "Coding: develop an app or website", "Education: develop & deliver a lesson", "Media: produce a professional campaign", "Manufacturing: design a component & process"] },
//     ],
//     majorProject: {
//       title: "Workplace Learning",
//       detail: "Where Ontario requirements are satisfied, eligible students participate in a co-operative education / workplace learning arrangement.",
//     },
//   },
//   {
//     grade: "Grade 12",
//     stage: "Launch",
//     question: "Am I ready for my next step?",
//     emoji: "🚀",
//     goal: "A student finishes Grade 12 knowing: Who am I? What can I do? What career do I want? How do I get there?",
//     curriculum: [
//       { area: "Career Launch", items: ["Resume", "Cover letters", "Interviews", "Networking", "Job applications", "References", "LinkedIn profile"] },
//       { area: "Financial Independence", items: ["First job & paycheque", "Taxes", "Budgeting", "Credit scores", "Loans", "Insurance", "Investing fundamentals", "Housing costs"] },
//       { area: "Entrepreneurship", items: ["Idea → Market research → Business model → Product → Marketing → Sales → Finance"] },
//       { area: "Professional Skills", items: ["Workplace conflict", "Working with managers", "Negotiation", "Meetings", "Workplace ethics", "Problem solving"] },
//       { area: "Capstone Project", items: ["Engineering: design + prototype + technical presentation", "Business: launch a small business", "Coding: build software", "Education: create & deliver an educational program", "Media: produce a professional campaign", "Trades: design / build / manufacturing project"] },
//     ],
//     majorProject: {
//       title: "My Future Plan",
//       detail: "Each Grade 12 student presents their final capstone: career choice, education pathway, skills, resume, portfolio, financial plan and 5-year goals.",
//     },
//   },
// ];

// export const PATHWAY_LABELS = [
//   { title: "Engineering & Technology", emoji: "⚙️" },
//   { title: "Business & Entrepreneurship", emoji: "💼" },
//   { title: "Education & Leadership", emoji: "🎓" },
//   { title: "Digital Media", emoji: "🎬" },
//   { title: "Manufacturing & Skilled Trades", emoji: "🔩" },
// ];





import React from 'react';

export interface CurriculumArea {
  area: string;
  items: string[];
}

export interface Stage {
  grade: string;
  stage: string;
  question: string;
  goal: string;
  curriculum: CurriculumArea[];
  majorProject: {
    title: string;
    detail: string;
  };
  icon: React.ReactNode;
}

export const PROGRESSION: { grade: string; stage: string; question: string }[] = [
  { grade: "Grade 5", stage: "Discover", question: "Who am I?" },
  { grade: "Grade 6", stage: "Explore", question: "What interests me?" },
  { grade: "Grade 7", stage: "Create", question: "What can I build?" },
  { grade: "Grade 8", stage: "Develop", question: "What skills can I develop?" },
  { grade: "Grade 9", stage: "Experience", question: "What does the real world look like?" },
  { grade: "Grade 10", stage: "Specialize", question: "Which pathway fits me?" },
  { grade: "Grade 11", stage: "Apply", question: "Can I use my skills professionally?" },
  { grade: "Grade 12", stage: "Launch", question: "Am I ready for my next step?" },
];

export const PILLARS = [
  { title: "Communication", desc: "Speak, write and present with confidence in any room.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> },
  { title: "Leadership", desc: "Take responsibility, lead teams and make decisions.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg> },
  { title: "Technology", desc: "Coding, AI, CAD, 3D printing and digital tools.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> },
  { title: "Innovation", desc: "Design thinking, problem solving and prototyping.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> },
  { title: "Business", desc: "Marketing, sales, entrepreneurship and e-commerce.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> },
  { title: "Financial Literacy", desc: "Saving, budgeting, credit and investing basics.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
  { title: "Career Readiness", desc: "Resumes, interviews, portfolios and workplace skills.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0-2.5V19.5Z"></path></svg> },
];

export const STAGES: Stage[] = [
  {
    grade: "Grade 5",
    stage: "Discover",
    question: "Who am I?",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>,
    goal: "Help students understand themselves, the world of work and basic life skills.",
    curriculum: [
      { area: "Personality", items: ["Confidence", "Strengths & weaknesses", "Growth mindset"] },
      { area: "Communication", items: ["Speaking clearly", "Listening", "Introductions"] },
      { area: "Social Skills", items: ["Teamwork", "Respect", "Cooperation"] },
      { area: "Careers", items: ["What is a career?", "Different professions"] },
      { area: "Money", items: ["Needs vs. wants", "Saving", "Budgeting"] },
      { area: "Technology", items: ["Computer basics", "Digital safety", "AI awareness"] },
      { area: "Innovation", items: ["Simple design/build challenges"] },
      { area: "Creativity", items: ["Art", "Design", "Presentation"] },
      { area: "Life Skills", items: ["Time management", "Organization"] },
      { area: "Leadership", items: ["Taking responsibility", "Helping others"] },
    ],
    majorProject: {
      title: "My Future Career",
      detail: "Each student researches one career and presents it to the class.",
    },
  },
  {
    grade: "Grade 6",
    stage: "Explore",
    question: "What interests me?",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
    goal: "Students discover their interests and begin developing practical skills.",
    curriculum: [
      { area: "Personality", items: ["Self-awareness", "Confidence", "Resilience"] },
      { area: "Communication", items: ["Public speaking", "Storytelling"] },
      { area: "Leadership", items: ["Team roles", "Decision-making"] },
      { area: "Careers", items: ["STEM", "Business", "Healthcare", "Trades", "Arts"] },
      { area: "Finance", items: ["Saving", "Budgeting", "Basic banking"] },
      { area: "Technology", items: ["Digital productivity", "Presentations"] },
      { area: "Coding", items: ["Block coding", "Introductory programming"] },
      { area: "Design", items: ["Engineering challenges"] },
      { area: "Entrepreneurship", items: ["Idea generation"] },
      { area: "Life Skills", items: ["Planning", "Responsibility"] },
    ],
    majorProject: {
      title: "Invent Something",
      detail: "Students identify a problem, create an idea, design it and present it.",
    },
  },
  {
    grade: "Grade 7",
    stage: "Create",
    question: "What can I build?",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
    goal: "Move students from learning about careers to actually creating things.",
    curriculum: [
      { area: "Personality", items: ["Leadership", "Confidence", "Emotional intelligence"] },
      { area: "Communication", items: ["Debate", "Presentations", "Persuasive speaking"] },
      { area: "Business", items: ["Products", "Customers", "Branding"] },
      { area: "Entrepreneurship", items: ["Business ideas"] },
      { area: "Finance", items: ["Budgeting", "Profit and cost"] },
      { area: "Coding", items: ["Introduction to Python"] },
      { area: "Engineering", items: ["Design thinking"] },
      { area: "CAD", items: ["Introduction to 3D design"] },
      { area: "3D Printing", items: ["Design to prototype"] },
      { area: "Marketing", items: ["Posters", "Advertising", "Social media concepts"] },
    ],
    majorProject: {
      title: "Design & Build Challenge",
      detail: "Students design a product and create a working prototype.",
    },
  },
  {
    grade: "Grade 8",
    stage: "Develop",
    question: "What skills can I develop?",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
    goal: "Develop stronger technical, business and leadership skills before entering high school.",
    curriculum: [
      { area: "Leadership", items: ["Team leadership", "Conflict resolution"] },
      { area: "Communication", items: ["Professional presentations"] },
      { area: "Career", items: ["Career assessment", "Exploration"] },
      { area: "Business", items: ["Marketing", "Customer research"] },
      { area: "Entrepreneurship", items: ["Business model basics"] },
      { area: "Finance", items: ["Profit", "Revenue", "Expenses"] },
      { area: "Coding", items: ["Python", "Web fundamentals"] },
      { area: "AI", items: ["Responsible use of AI"] },
      { area: "CAD", items: ["Intermediate 3D modelling"] },
      { area: "3D Printing", items: ["Prototyping"] },
      { area: "Career Skills", items: ["Resumes", "Interviews"] },
    ],
    majorProject: {
      title: "Build a Business",
      detail: "Problem → Product → Prototype → Brand → Marketing → Presentation.",
    },
  },
  {
    grade: "Grade 9",
    stage: "Experience",
    question: "What does the real world look like?",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>,
    goal: "Introduce students to the actual workplace and different career pathways.",
    curriculum: [
      { area: "Career Exploration", items: ["Career assessment", "University", "College", "Skilled trades", "Apprenticeships", "Entrepreneurship"] },
      { area: "Professional Communication", items: ["Professional email", "Phone etiquette", "Presentations", "Workplace behaviour"] },
      { area: "Technology", items: ["Coding", "AI", "CAD", "3D printing", "Digital tools"] },
      { area: "Business", items: ["Entrepreneurship", "Marketing", "Sales", "Customer service"] },
      { area: "Financial Literacy", items: ["Banking", "Budgeting", "Credit", "Taxes intro"] },
      { area: "Workplace Readiness", items: ["Punctuality", "Professionalism", "Teamwork", "Workplace safety"] },
    ],
    majorProject: {
      title: "Career Discovery Portfolio",
      detail: "Students participate in workplace tours, career speakers, job-shadowing, industry visits and professional interviews.",
    },
  },
  {
    grade: "Grade 10",
    stage: "Specialize",
    question: "Which pathway fits me?",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
    goal: "Students begin choosing a career pathway across five tracks.",
    curriculum: [
      { area: "Engineering & Technology", items: ["CAD", "3D modelling", "3D printing", "Mechanical design", "Robotics", "CNC concepts", "Programming", "Automation"] },
      { area: "Business & Entrepreneurship", items: ["Business planning", "Marketing", "Sales", "Accounting basics", "E-commerce", "Digital marketing"] },
      { area: "Education & Leadership", items: ["Communication", "Leadership", "Child development basics", "Teaching strategies", "Classroom activities", "Tutoring", "Presentation skills"] },
      { area: "Digital Media", items: ["Graphic design", "Photography", "Video", "Digital cinematography", "AI-assisted creativity", "Branding", "Social media"] },
      { area: "Manufacturing & Skilled Trades", items: ["Tools", "Mechanical fundamentals", "Manufacturing", "CAD", "CNC concepts", "3D printing", "Workplace safety"] },
    ],
    majorProject: {
      title: "Career Portfolio",
      detail: "Students produce a resume, cover letter, career plan, skills profile, portfolio and complete a mock interview.",
    },
  },
  {
    grade: "Grade 11",
    stage: "Apply",
    question: "Can I use my skills professionally?",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
    goal: "Students start applying their knowledge to realistic professional situations.",
    curriculum: [
      { area: "Professional Development", items: ["Resume writing", "Cover letters", "Interviewing", "Networking", "Professional communication"] },
      { area: "Leadership", items: ["Project management", "Team leadership", "Conflict resolution", "Decision-making"] },
      { area: "Financial Independence", items: ["Paycheques", "Taxes", "Credit", "Banking", "Budgeting", "Financial planning"] },
      { area: "Semester 2 Specialization", items: ["Engineering: design & manufacture a product", "Business: create & operate a mini-business", "Coding: develop an app or website", "Education: develop & deliver a lesson", "Media: produce a professional campaign", "Manufacturing: design a component & process"] },
    ],
    majorProject: {
      title: "Workplace Learning",
      detail: "Where Ontario requirements are satisfied, eligible students participate in a co-operative education / workplace learning arrangement.",
    },
  },
  {
    grade: "Grade 12",
    stage: "Launch",
    question: "Am I ready for my next step?",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>,
    goal: "A student finishes Grade 12 knowing: Who am I? What can I do? What career do I want? How do I get there?",
    curriculum: [
      { area: "Career Launch", items: ["Resume", "Cover letters", "Interviews", "Networking", "Job applications", "References", "LinkedIn profile"] },
      { area: "Financial Independence", items: ["First job & paycheque", "Taxes", "Budgeting", "Credit scores", "Loans", "Insurance", "Investing fundamentals", "Housing costs"] },
      { area: "Entrepreneurship", items: ["Idea → Market research → Business model → Product → Marketing → Sales → Finance"] },
      { area: "Professional Skills", items: ["Workplace conflict", "Working with managers", "Negotiation", "Meetings", "Workplace ethics", "Problem solving"] },
      { area: "Capstone Project", items: ["Engineering: design + prototype + technical presentation", "Business: launch a small business", "Coding: build software", "Education: create & deliver an educational program", "Media: produce a professional campaign", "Trades: design / build / manufacturing project"] },
    ],
    majorProject: {
      title: "My Future Plan",
      detail: "Each Grade 12 student presents their final capstone: career choice, education pathway, skills, resume, portfolio, financial plan and 5-year goals.",
    },
  },
];

export const PATHWAY_LABELS = [
  { title: "Engineering & Technology", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
  { title: "Business & Entrepreneurship", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> },
  { title: "Education & Leadership", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> },
  { title: "Digital Media", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg> },
  { title: "Manufacturing & Skilled Trades", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg> },
];

