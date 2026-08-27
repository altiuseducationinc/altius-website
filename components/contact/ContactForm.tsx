'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = `Hello Altius Education,

*New Contact Form Submission:*
• *Name:* ${formData.name}
• *Company:* ${formData.company || 'N/A'}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}
• *Subject:* ${formData.subject}
• *Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/19057815450?text=${encodeURIComponent(
      messageText
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white">
      <h2 className="font-serif text-2xl font-bold text-altiusNavy mb-6">
        Send us a message
      </h2>

      {submitted ? (
        <div className="text-center py-12 space-y-3 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto font-bold text-lg">
            ✓
          </div>
          <h3 className="font-serif font-bold text-lg text-altiusNavy">
            Redirected to WhatsApp!
          </h3>
          <p className="text-gray-600 text-xs">
            Your message details were sent to WhatsApp chat.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-altiusBlue hover:underline mt-2"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-altiusBlue transition"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                Company / School
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company / School Name"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-altiusBlue transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-altiusBlue transition"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-altiusBlue transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Program Enquiry / Consultation"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-altiusBlue transition"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
              Message *
            </label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="How can we help your child prepare for their future?"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-altiusBlue transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#25D366] text-white text-xs font-bold py-3.5 rounded-xl shadow-md hover:bg-[#20ba59] transition tracking-wider uppercase flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Submit via WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}