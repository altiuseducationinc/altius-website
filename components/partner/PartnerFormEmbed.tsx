'use client';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfY1YSAZZ3ZQHK1dLFqhrCX_RcOzJ0kDmcifst84J0w85OXuQ/viewform?usp=header';

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfY1YSAZZ3ZQHK1dLFqhrCX_RcOzJ0kDmcifst84J0w85OXuQ/viewform?embedded=true';

export default function PartnerFormEmbed() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-altiusLight">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-altiusNavy text-altiusGold border border-altiusGold/30 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-altiusGold animate-pulse"></span>
            Partnership Enquiry
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-altiusNavy tracking-tight">
            Partner With Altius
          </h2>

          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
            Complete the partnership form below to tell us how you&apos;d like to
            collaborate with Altius FutureReady™.
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-[14px] border border-gray-200/90 shadow-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-altiusNavy via-blue-700 to-altiusGold w-full"></div>

          <div className="p-2 sm:p-4">
            <iframe
              src={GOOGLE_FORM_EMBED_URL}
              title="Partner With Altius - Google Form"
              className="w-full border-0 rounded-xl"
              style={{ minHeight: 900, height: '82vh' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
              Loading form&hellip;
            </iframe>
          </div>
        </div>

        <div className="mt-6 text-center space-y-2">
          <p className="text-xs text-gray-500">
            Having trouble viewing the form? Open it directly in a new tab.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-950 via-altiusNavy to-altiusBlue text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md hover:opacity-95 transition tracking-wider uppercase"
          >
            Open Form in New Tab
          </a>
        </div>
      </div>
    </section>
  );
}
