'use client';

export default function ContactMap() {
  return (
    <section className="w-full pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-gray-100">
          <iframe
            title="Altius Education Brampton Campus Map"
            src="https://maps.google.com/maps?q=6+Dewside+Dr+Unit+18+Brampton+ON+L6R+3Y3&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}