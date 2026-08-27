'use client';

export default function AnnouncementBar() {
  return (
    <div className="bg-altiusNavy text-white text-xs font-bold uppercase tracking-wider py-2 overflow-hidden relative z-50 shadow-sm">
      <div className="flex w-max" style={{ animation: 'marquee 30s linear infinite' }}>

        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0 px-6">
            <span className="flex items-center gap-2">
              🧭 Altius FutureReady™ — the 8-year journey from Grade 5 to career readiness
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              📍 Brampton, Ontario, Canada
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              📞 +1 (905) 781-5450
            </span>
            <span>•</span>
            <span className="flex items-center gap-2 text-altiusNavy bg-altiusGold px-3 py-0.5 rounded-full">
              🚀 2026–27 Admissions Open — Reserve Your Child&apos;s Journey Today!
            </span>
            <span>•</span>
          </div>
        ))}

      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}