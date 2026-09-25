// 'use client';

// const GOOGLE_FORM_URL =
//   'https://docs.google.com/forms/d/e/1FAIpQLSfY1YSAZZ3ZQHK1dLFqhrCX_RcOzJ0kDmcifst84J0w85OXuQ/viewform?usp=header';

// const GOOGLE_FORM_EMBED_URL =
//   'https://docs.google.com/forms/d/e/1FAIpQLSfY1YSAZZ3ZQHK1dLFqhrCX_RcOzJ0kDmcifst84J0w85OXuQ/viewform?embedded=true';

// export default function PartnerFormEmbed() {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-altiusLight">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
//           <div className="inline-flex items-center gap-2 bg-altiusNavy text-altiusGold border border-altiusGold/30 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm">
//             <span className="w-1.5 h-1.5 rounded-full bg-altiusGold animate-pulse"></span>
//             Partnership Enquiry
//           </div>

//           <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-altiusNavy tracking-tight">
//             Partner With Altius
//           </h2>

//           <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
//             Complete the partnership form below to tell us how you&apos;d like to
//             collaborate with Altius FutureReady™.
//           </p>
//         </div>

//         <div className="bg-white rounded-2xl sm:rounded-[14px] border border-gray-200/90 shadow-xl overflow-hidden">
//           <div className="h-2 bg-gradient-to-r from-altiusNavy via-blue-700 to-altiusGold w-full"></div>

//           <div className="p-2 sm:p-4">
//             <iframe
//               src={GOOGLE_FORM_EMBED_URL}
//               title="Partner With Altius - Google Form"
//               className="w-full border-0 rounded-xl"
//               style={{ minHeight: 900, height: '82vh' }}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             >
//               Loading form&hellip;
//             </iframe>
//           </div>
//         </div>

//         <div className="mt-6 text-center space-y-2">
//           <p className="text-xs text-gray-500">
//             Having trouble viewing the form? Open it directly in a new tab.
//           </p>
//           <a
//             href={GOOGLE_FORM_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-950 via-altiusNavy to-altiusBlue text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md hover:opacity-95 transition tracking-wider uppercase"
//           >
//             Open Form in New Tab
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

const GOOGLE_FORM_URL = 'https://forms.gle/uci25MSsR3NLqSkH6';

export default function PartnerFormRedirect() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-altiusNavy text-altiusGold border border-altiusGold/30 px-3.5 py-1 rounded-[8px] text-[11px] font-bold uppercase tracking-widest shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-altiusGold animate-pulse"></span>
            Partnership Enquiry
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-altiusNavy tracking-tight">
            Partner With Altius
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Complete our partnership form to tell us how you&apos;d like to
            collaborate with Altius FutureReady™. Click below to open the official form.
          </p>
        </div>

        {/* Redirect Box Card with Gradient Background */}
        <div className="bg-gradient-to-br from-white via-blue-50/30 to-amber-50/30 rounded-[8px] border border-gray-200/90 shadow-xl overflow-hidden p-8 sm:p-12 text-center space-y-6 relative isolate">
          <div className="h-2 bg-gradient-to-r from-altiusNavy via-blue-700 to-altiusGold w-full -mt-8 sm:-mt-12 -mx-8 sm:-mx-12 mb-6" style={{ width: 'calc(100% + 4rem)', marginLeft: '-2rem' }}></div>

          <div className="max-w-md mx-auto space-y-4">
            <h3 className="text-xl font-bold text-altiusNavy font-serif">
              Ready to collaborate?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The form will open in a new secure tab where you can fill out your partnership details comfortably.
            </p>
            
            <div className="pt-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-950 via-altiusNavy to-altiusBlue text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-[8px] shadow-lg hover:opacity-95 transition tracking-wider uppercase w-full sm:w-auto"
              >
                <span>Fill Out Partnership Form</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}