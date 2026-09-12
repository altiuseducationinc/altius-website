'use client';

export default function ContactInfoCard() {
  return (
    <div className="space-y-8 pr-0 lg:pr-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-altiusNavy mb-2">Get in touch</h2>
        <p className="text-gray-600 text-xs leading-relaxed">
          Book a FutureReady™ consultation and find out which grade stage your child should join
          this year.
        </p>
      </div>

      <div className="space-y-6">

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-[8px] bg-gradient-to-br from-blue-950 via-altiusNavy to-altiusBlue text-altiusGold flex items-center justify-center shrink-0 shadow-sm border border-altiusGold/30">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-altiusNavy">Altius Education Centre</h4>
            <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">
              6 Dewside Dr, Unit 18<br />
              Brampton, Ontario, L6R 3Y3, Canada
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-[8px] bg-gradient-to-br from-blue-950 via-altiusNavy to-altiusBlue text-altiusGold flex items-center justify-center shrink-0 shadow-sm border border-altiusGold/30">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-altiusNavy">Email Us</h4>
            <p className="text-gray-600 text-xs mt-0.5">info@altiuseducation.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-[8px] bg-gradient-to-br from-blue-950 via-altiusNavy to-altiusBlue text-altiusGold flex items-center justify-center shrink-0 shadow-sm border border-altiusGold/30">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-altiusNavy">Call / WhatsApp</h4>
            <p className="text-gray-600 text-xs mt-0.5">
              <a href="tel:+19057815450" className="hover:text-altiusBlue transition">+1 (905) 781-5450</a><br />
              Mon–Sat, 9 AM – 8 PM EST
            </p>
          </div>
        </div>

      </div>

      <div className="pt-4">
        <h4 className="font-bold text-xs text-altiusNavy mb-3">Follow our social media</h4>
        <div className="flex items-center gap-3">
          {['f', 'in', 't', 'y'].map((social, i) => (
            <div key={i} className="w-8 h-8 rounded-[8px] bg-gradient-to-br from-blue-950 via-altiusNavy to-altiusBlue text-altiusGold flex items-center justify-center text-xs font-bold hover:opacity-90 transition cursor-pointer shadow-sm border border-altiusGold/20">
              {social}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}