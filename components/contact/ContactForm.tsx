'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <h2 className="font-serif text-2xl font-bold text-altiusNavy mb-6">Send us a message</h2>

      {submitted ? (
        <div className="text-center py-12 space-y-3 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto font-bold text-lg">✓</div>
          <h3 className="font-serif font-bold text-lg text-altiusNavy">Message Sent!</h3>
          <p className="text-gray-600 text-xs">We will get back to you shortly.</p>
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
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Name</label>
              <input 
                type="text" 
                required 
                placeholder="Name" 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-altiusBlue transition" 
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Company</label>
              <input 
                type="text" 
                placeholder="Company" 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-altiusBlue transition" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Phone</label>
              <input 
                type="tel" 
                required 
                placeholder="Phone" 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-altiusBlue transition" 
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Email</label>
              <input 
                type="email" 
                required 
                placeholder="Email" 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-altiusBlue transition" 
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Subject</label>
            <input 
              type="text" 
              required 
              placeholder="Subject" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-altiusBlue transition" 
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Message</label>
            <textarea 
              rows={4} 
              required 
              placeholder="Message" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-altiusBlue transition resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-950 via-altiusNavy to-altiusBlue text-white text-xs font-bold py-3.5 rounded-xl shadow-md hover:opacity-95 transition tracking-wider uppercase"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}