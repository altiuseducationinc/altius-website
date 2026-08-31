'use client';

import React, { useState } from 'react';
import {
  Building2,
  Globe,
  User,
  BadgeCheck,
  Mail,
  Phone,
  Handshake,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Loader2,
  Send,
  Info,
} from 'lucide-react';

interface FormDataState {
  organizationName: string;
  organizationType: string;
  website: string;
  contactName: string;
  designation: string;
  email: string;
  phone: string;
  collaborationTypes: string[];
  proposal: string;
  additionalMessage: string;
  agreeTerms: boolean;
}

interface FormErrors {
  organizationName?: string;
  organizationType?: string;
  website?: string;
  contactName?: string;
  designation?: string;
  email?: string;
  phone?: string;
  collaborationTypes?: string;
  proposal?: string;
  agreeTerms?: string;
}

const ORGANIZATION_TYPES = [
  'School / Academy',
  'College / University',
  'Non-Profit / NGO',
  'Corporate / Employer',
  'Training Institute',
  'Community / Parent Group',
  'Government / Public Sector',
  'Other',
];

const COLLABORATION_OPTIONS = [
  'Co-op / Work Placement Host',
  'Mentorship & Guest Lectures',
  'Internship Program Partner',
  'Sponsorship / Funding',
  'Curriculum Co-Development',
  'Facility / Equipment Access',
  'Employer / Hiring Partner',
  'Research & Innovation',
];

export default function PartnerForm() {
  const [formData, setFormData] = useState<FormDataState>({
    organizationName: '',
    organizationType: '',
    website: '',
    contactName: '',
    designation: '',
    email: '',
    phone: '',
    collaborationTypes: [],
    proposal: '',
    additionalMessage: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [applicationId, setApplicationId] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const validateEmail = (email: string): string => {
    if (!email.trim()) return 'Contact email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const validateField = (
    name: keyof FormDataState,
    value: string | string[] | boolean
  ): string => {
    if (name === 'agreeTerms' && !value) {
      return 'You must agree to the partnership terms to submit.';
    }
    if (name === 'collaborationTypes' && Array.isArray(value) && value.length === 0) {
      return 'Please select at least one type of collaboration.';
    }
    if (name === 'email') {
      return validateEmail(value as string);
    }
    if (typeof value === 'string' && !value.trim()) {
      switch (name) {
        case 'organizationName':
          return 'Organization name is required.';
        case 'organizationType':
          return 'Please select your organization type.';
        case 'contactName':
          return 'Primary contact name is required.';
        case 'designation':
          return 'Contact designation is required.';
        case 'phone':
          return 'Contact phone is required.';
        default:
          return 'This field is required.';
      }
    }
    return '';
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    const checked = (e.target as HTMLInputElement).checked;
    const finalValue = isCheckbox ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: finalValue }));

    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const toggleCollaboration = (option: string) => {
    setFormData((prev) => {
      const exists = prev.collaborationTypes.includes(option);
      const collaborationTypes = exists
        ? prev.collaborationTypes.filter((c) => c !== option)
        : [...prev.collaborationTypes, option];
      if (errors.collaborationTypes && collaborationTypes.length > 0) {
        setErrors((prevErr) => ({ ...prevErr, collaborationTypes: undefined }));
      }
      return { ...prev, collaborationTypes };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return;

    const newErrors: FormErrors = {};

    (Object.keys(formData) as Array<keyof FormDataState>).forEach((field) => {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) {
        newErrors[field as keyof FormErrors] = errorMsg;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorField = document.querySelector('.has-error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const payload = {
        organizationName: formData.organizationName,
        organizationType: formData.organizationType,
        website: formData.website,
        contactName: formData.contactName,
        designation: formData.designation,
        email: formData.email,
        phone: formData.phone,
        collaborationTypes: formData.collaborationTypes.join(', '),
        proposal: formData.proposal,
        additionalMessage: formData.additionalMessage,
      };

      const response = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit your partnership request. Please try again.');
      }

      setApplicationId(data.applicationId || `ALT-${new Date().getFullYear()}-PART`);
      setSubmitStatus('success');
      setSubmitMessage(
        data.message || 'Partnership request successfully received! Our partnerships team will be in touch.'
      );
    } catch (err: unknown) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
      setSubmitMessage(
        err instanceof Error
          ? err.message
          : 'Unable to connect to the partnership server. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      organizationName: '',
      organizationType: '',
      website: '',
      contactName: '',
      designation: '',
      email: '',
      phone: '',
      collaborationTypes: [],
      proposal: '',
      additionalMessage: '',
      agreeTerms: false,
    });
    setErrors({});
    setSubmitStatus('idle');
    setSubmitMessage('');
    setApplicationId('');
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-gray-50/70 border text-xs text-gray-900 transition focus:outline-none focus:bg-white ${
      hasError
        ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
        : 'border-gray-200 focus:border-altiusBlue focus:ring-2 focus:ring-blue-100'
    }`;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-altiusLight">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-altiusNavy text-altiusGold border border-altiusGold/30 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-altiusGold animate-pulse"></span>
            Partnership Enquiry
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-altiusNavy tracking-tight">
            Partner With Altius
          </h2>

          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
            Altius FutureReadyâ„¢ partners with schools, employers, and community
            organizations to build an 8-year pathway from career discovery to career
            readiness. Tell us how you&apos;d like to collaborate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-gray-500">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-2xs">
              <Handshake className="w-3.5 h-3.5 text-altiusBlue" /> Direct Partnerships Desk
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-green-600" /> Secure Submission
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-[14px] border border-gray-200/90 shadow-xl overflow-hidden transition-all">
          <div className="h-2 bg-gradient-to-r from-altiusNavy via-blue-700 to-altiusGold w-full"></div>

          <div className="p-6 sm:p-10 lg:p-12">
            {submitStatus === 'success' ? (
              <div className="py-8 px-4 text-center space-y-6">
                <div className="w-16 h-16 bg-green-50 border-2 border-green-500 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <span className="text-xs font-bold text-altiusGold uppercase tracking-widest">
                    Partnership Request Submitted
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy">
                    Thank You, {formData.organizationName}!
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {submitMessage}
                  </p>
                </div>

                <div className="bg-gray-50/80 border border-gray-200 rounded-xl p-5 sm:p-6 text-left max-w-xl mx-auto space-y-3 shadow-inner">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                      Application ID
                    </span>
                    <span className="text-sm font-mono font-bold text-altiusNavy bg-white px-2.5 py-1 rounded-md border border-gray-200">
                      {applicationId}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div>
                      <span className="text-gray-500 block">Organization:</span>
                      <strong className="text-altiusNavy font-semibold">{formData.organizationName}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Organization Type:</span>
                      <strong className="text-altiusNavy font-semibold">{formData.organizationType}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Contact:</span>
                      <strong className="text-altiusNavy font-semibold">{formData.contactName}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Contact Email:</span>
                      <strong className="text-altiusNavy font-semibold">{formData.email}</strong>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-gray-500 block">Collaboration Types:</span>
                      <strong className="text-altiusNavy font-semibold">
                        {formData.collaborationTypes.join(', ')}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-xl max-w-xl mx-auto text-xs text-blue-900 flex items-start gap-3 text-left">
                  <Info className="w-5 h-5 text-altiusBlue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">What Happens Next?</span>
                    Our partnerships team will review your proposal and a representative
                    will contact you via email or phone to discuss next steps.
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="/"
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 text-white text-xs font-bold uppercase tracking-wider rounded-[8px] hover:opacity-95 transition shadow-sm text-center"
                  >
                    Back to Altius Education
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-[8px] hover:bg-gray-200 transition text-center"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                <input
                  type="text"
                  name="company_website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {submitStatus === 'error' && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-rose-800 text-xs">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <strong className="font-bold block mb-0.5">Submission Notice:</strong>
                      {submitMessage}
                    </div>
                  </div>
                )}

                {/* SECTION 1: ORGANIZATION DETAILS */}
                <div>
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-2.5 mb-5">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-altiusBlue flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <h3 className="font-serif text-lg font-bold text-altiusNavy">
                      Organization Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className={errors.organizationName ? 'has-error' : ''}>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Organization Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="organizationName"
                          value={formData.organizationName}
                          onChange={handleInputChange}
                          placeholder="e.g. Brampton District School Board"
                          className={`${inputClass(!!errors.organizationName)} pl-10`}
                        />
                      </div>
                      {errors.organizationName && (
                        <p className="text-[11px] font-medium text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.organizationName}
                        </p>
                      )}
                    </div>

                    <div className={errors.organizationType ? 'has-error' : ''}>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Organization Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="organizationType"
                          value={formData.organizationType}
                          onChange={handleInputChange}
                          className={`${inputClass(!!errors.organizationType)} appearance-none cursor-pointer pr-8`}
                        >
                          <option value="">Select organization type</option>
                          {ORGANIZATION_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      {errors.organizationType && (
                        <p className="text-[11px] font-medium text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.organizationType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Website <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Globe className="w-4 h-4" />
                        </div>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="e.g. https://www.example.com"
                          className={`${inputClass(false)} pl-10`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: CONTACT DETAILS */}
                <div>
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-2.5 mb-5">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-altiusBlue flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <h3 className="font-serif text-lg font-bold text-altiusNavy">
                      Contact Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className={errors.contactName ? 'has-error' : ''}>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Contact Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          placeholder="e.g. Jordan Lee"
                          className={`${inputClass(!!errors.contactName)} pl-10`}
                        />
                      </div>
                      {errors.contactName && (
                        <p className="text-[11px] font-medium text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.contactName}
                        </p>
                      )}
                    </div>

                    <div className={errors.designation ? 'has-error' : ''}>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Designation <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <BadgeCheck className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                          placeholder="e.g. Director of Partnerships"
                          className={`${inputClass(!!errors.designation)} pl-10`}
                        />
                      </div>
                      {errors.designation && (
                        <p className="text-[11px] font-medium text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.designation}
                        </p>
                      )}
                    </div>

                    <div className={errors.email ? 'has-error' : ''}>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Contact Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. jordan@example.com"
                          className={`${inputClass(!!errors.email)} pl-10`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] font-medium text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className={errors.phone ? 'has-error' : ''}>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Contact Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +1 (905) 555-0100"
                          className={`${inputClass(!!errors.phone)} pl-10`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] font-medium text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* SECTION 3: COLLABORATION */}
                <div>
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-2.5 mb-5">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-altiusBlue flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <h3 className="font-serif text-lg font-bold text-altiusNavy">
                      Collaboration
                    </h3>
                  </div>

                  <div className={errors.collaborationTypes ? 'has-error' : ''}>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2">
                      Types of Collaboration <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {COLLABORATION_OPTIONS.map((option) => {
                        const selected = formData.collaborationTypes.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleCollaboration(option)}
                            className={`flex items-center gap-2.5 text-left text-xs font-semibold px-3.5 py-3 rounded-xl border transition ${
                              selected
                                ? 'bg-altiusNavy text-altiusGold border-altiusNavy'
                                : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition ${
                                selected
                                  ? 'bg-altiusGold border-altiusGold'
                                  : 'bg-white border-gray-300'
                              }`}
                            >
                              {selected && (
                                <svg className="w-3 h-3 text-altiusNavy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </span>
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {errors.collaborationTypes && (
                      <p className="text-[11px] font-medium text-rose-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.collaborationTypes}
                      </p>
                    )}
                  </div>

                  <div className="mt-5">
                    <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Proposal Summary <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      name="proposal"
                      value={formData.proposal}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your partnership idea or program proposal..."
                      className={`${inputClass(false)} resize-none`}
                    ></textarea>
                  </div>
                </div>


                {/* SECTION 5: ADDITIONAL MESSAGE */}
                <div>
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-2.5 mb-5">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-altiusBlue flex items-center justify-center text-xs font-bold">
                      5
                    </div>
                    <h3 className="font-serif text-lg font-bold text-altiusNavy">
                      Additional Message
                    </h3>
                  </div>
                  <textarea
                    rows={4}
                    name="additionalMessage"
                    value={formData.additionalMessage}
                    onChange={handleInputChange}
                    placeholder="Anything else you'd like us to know about your organization or partnership goals?"
                    className={`${inputClass(false)} resize-none`}
                  ></textarea>
                </div>

                {/* SECTION 6: TERMS & AGREEMENT */}
                <div>
                  <div className="bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200 rounded-xl p-5 sm:p-6 space-y-4">
                    <div className="flex items-center gap-2.5 text-altiusNavy">
                      <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                      <h4 className="font-serif text-sm font-bold tracking-wide uppercase text-altiusNavy">
                        Partnership Agreement
                      </h4>
                    </div>

                    <div className="space-y-3 text-xs text-gray-700 leading-relaxed border-t border-gray-200/80 pt-3">
                      <p>
                        By submitting this request, you confirm that the information
                        provided is accurate and that you are authorized to represent
                        your organization. Altius Education Inc. will use this
                        information solely to evaluate a potential partnership and
                        will not share it with third parties.
                      </p>
                    </div>

                    <div className="border-t border-gray-200/80 pt-3">
                      <label
                        className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition select-none ${
                          formData.agreeTerms
                            ? 'bg-blue-50/80 border border-blue-200'
                            : errors.agreeTerms
                            ? 'bg-rose-50 border border-rose-200'
                            : 'bg-white border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleInputChange}
                          className="mt-0.5 h-4 w-4 rounded text-altiusBlue border-gray-300 focus:ring-altiusBlue cursor-pointer"
                        />
                        <span className="text-xs font-semibold text-altiusNavy">
                          I confirm the details provided are accurate and agree to be
                          contacted regarding this partnership enquiry.{' '}
                          <span className="text-red-500">*</span>
                        </span>
                      </label>

                      {errors.agreeTerms && (
                        <p className="text-[11px] font-medium text-rose-600 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.agreeTerms}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-gray-500 text-center sm:text-left">
                    Fields marked with <span className="text-red-500">*</span> are mandatory.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeTerms}
                    className={`w-full sm:w-auto min-w-[260px] text-xs font-bold py-4 px-8 rounded-[10px] tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md ${
                      isSubmitting || !formData.agreeTerms
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 hover:bg-blue-900 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-altiusGold" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-altiusGold" />
                        <span>Submit Partnership Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
