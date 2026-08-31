'use client';

import React, { useState, useRef } from 'react';
import {
  User,
  GraduationCap,
  Compass,
  Calendar,
  Building2,
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
  X,
  ShieldCheck,
  Loader2,
  Send,
  FileCheck,
  ArrowRight,
  Info,
} from 'lucide-react';

interface FormDataState {
  fullName: string;
  currentGrade: string;
  targetField: string;
  durationTimeframe: string;
  facultyName: string;
  agreeTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  currentGrade?: string;
  targetField?: string;
  durationTimeframe?: string;
  facultyName?: string;
  letterOfConfirmation?: string;
  agreeTerms?: string;
}

const GRADE_OPTIONS = [
  'Grade 5 (Discovery Stage)',
  'Grade 6 (Discovery Stage)',
  'Grade 7 (Discovery Stage)',
  'Grade 8 (Discovery Stage)',
  'Grade 9 (Development Stage)',
  'Grade 10 (Development Stage)',
  'Grade 11 (Specialization Stage)',
  'Grade 12 (Launch & Co-op Stage)',
  'Undergraduate / College Student',
  'Adult Learner / Specialty Track',
];

const SUGGESTED_FIELDS = [
  'CNC & Manufacturing',
  '3D Printing & Robotics',
  'Academic Tutoring',
  'TCF / TEF French Prep',
  'Music & Performance',
  'Skilled Trades & Welding',
  'Career Co-op & Leadership',
];

const DURATION_PRESETS = [
  'Summer Intensive (8–10 Weeks)',
  'Fall Semester (Sep – Dec)',
  'Winter / Spring Semester (Jan – May)',
  'Full Academic Year (10 Months)',
  '3-Month Specialty Cohort',
  '6-Month Co-op Placement',
];

export default function ProgramApplicationForm() {
  const [formData, setFormData] = useState<FormDataState>({
    fullName: '',
    currentGrade: '',
    targetField: '',
    durationTimeframe: '',
    facultyName: '',
    agreeTerms: false,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Validate single field
  const validateField = (name: keyof FormDataState, value: string | boolean): string => {
    if (name === 'agreeTerms' && !value) {
      return 'You must accept the Terms & Conditions and liability waiver to submit.';
    }
    if (typeof value === 'string' && !value.trim()) {
      switch (name) {
        case 'fullName':
          return 'Full name is required.';
        case 'currentGrade':
          return 'Please select or enter your current grade / year.';
        case 'targetField':
          return 'Please specify your target field or domain of interest.';
        case 'durationTimeframe':
          return 'Please provide your expected timeframe or duration.';
        case 'facultyName':
          return 'Faculty supervisor / approval name is required.';
        default:
          return 'This field is required.';
      }
    }
    return '';
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    const checked = (e.target as HTMLInputElement).checked;
    const finalValue = isCheckbox ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // File handling
  const handleFileSelection = (file: File | null) => {
    if (!file) {
      setSelectedFile(null);
      return;
    }

    const validExtensions = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png'];
    const fileExt = file.name.split('.').pop()?.toLowerCase() || '';
    const maxSizeInBytes = 10 * 1024 * 1024; // 10MB

    if (!validExtensions.includes(fileExt)) {
      setErrors((prev) => ({
        ...prev,
        letterOfConfirmation: 'Invalid file format. Please upload a PDF, DOC, DOCX, or Image file.',
      }));
      return;
    }

    if (file.size > maxSizeInBytes) {
      setErrors((prev) => ({
        ...prev,
        letterOfConfirmation: 'File size exceeds 10MB limit. Please upload a smaller document.',
      }));
      return;
    }

    setSelectedFile(file);
    setErrors((prev) => ({
      ...prev,
      letterOfConfirmation: undefined,
    }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Run full validation
    const newErrors: FormErrors = {};

    (Object.keys(formData) as Array<keyof FormDataState>).forEach((field) => {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) {
        newErrors[field] = errorMsg;
      }
    });

    if (!selectedFile) {
      newErrors.letterOfConfirmation = 'Please upload your official Letter of Confirmation.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to the first error
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
      const payload = new FormData();
      payload.append('fullName', formData.fullName);
      payload.append('currentGrade', formData.currentGrade);
      payload.append('targetField', formData.targetField);
      payload.append('durationTimeframe', formData.durationTimeframe);
      payload.append('facultyName', formData.facultyName);
      payload.append('agreeTerms', formData.agreeTerms ? 'true' : 'false');
      if (selectedFile) {
        payload.append('confirmationLetter', selectedFile);
      }

      const response = await fetch('/api/apply', {
        method: 'POST',
        body: payload,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit your application. Please try again.');
      }

      setReferenceId(data.referenceId || `ALT-${new Date().getFullYear()}-APP`);
      setSubmitStatus('success');
      setSubmitMessage(data.message || 'Application successfully received! An email notification has been dispatched to admissions.');
    } catch (err: unknown) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
      setSubmitMessage(
        err instanceof Error
          ? err.message
          : 'Unable to connect to the admissions server. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      currentGrade: '',
      targetField: '',
      durationTimeframe: '',
      facultyName: '',
      agreeTerms: false,
    });
    setSelectedFile(null);
    setErrors({});
    setSubmitStatus('idle');
    setSubmitMessage('');
    setReferenceId('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <section id="apply-now" className="py-20 px-4 sm:px-6 lg:px-8 bg-altiusLight scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header Title Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-altiusNavy text-altiusGold border border-altiusGold/30 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-altiusGold animate-pulse"></span>
            Official Program Application
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-altiusNavy tracking-tight">
            Apply for Your Program
          </h2>

          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
            Complete the official candidate registration below. Your application and faculty approval letter
            will be reviewed directly by the Altius Education admissions board.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-gray-500">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-altiusBlue" /> Verified Admissions Desk
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-2xs">
              <FileCheck className="w-3.5 h-3.5 text-amber-600" /> Faculty Confirmation Required
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> Serverless Direct Dispatch
            </span>
          </div>
        </div>

        {/* Main Application Container */}
        <div className="bg-white rounded-2xl sm:rounded-[14px] border border-gray-200/90 shadow-xl overflow-hidden transition-all">
          {/* Top Decorative Brand Bar */}
          <div className="h-2 bg-gradient-to-r from-altiusNavy via-blue-700 to-altiusGold w-full"></div>

          <div className="p-6 sm:p-10 lg:p-12">
            {/* SUCCESS STATE */}
            {submitStatus === 'success' ? (
              <div className="py-8 px-4 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-green-50 border-2 border-green-500 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <span className="text-xs font-bold text-altiusGold uppercase tracking-widest">
                    Application Submitted Successfully
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-altiusNavy">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {submitMessage}
                  </p>
                </div>

                {/* Application Receipt Details */}
                <div className="bg-gray-50/80 border border-gray-200 rounded-xl p-5 sm:p-6 text-left max-w-xl mx-auto space-y-3 shadow-inner">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                      Reference Number
                    </span>
                    <span className="text-sm font-mono font-bold text-altiusNavy bg-white px-2.5 py-1 rounded-md border border-gray-200">
                      {referenceId}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div>
                      <span className="text-gray-500 block">Candidate Name:</span>
                      <strong className="text-altiusNavy font-semibold">{formData.fullName}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Grade / Year:</span>
                      <strong className="text-altiusNavy font-semibold">{formData.currentGrade}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Target Field:</span>
                      <strong className="text-altiusNavy font-semibold">{formData.targetField}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Timeframe:</span>
                      <strong className="text-altiusNavy font-semibold">{formData.durationTimeframe}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Approving Faculty:</span>
                      <strong className="text-altiusNavy font-semibold">{formData.facultyName}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Confirmation Document:</span>
                      <strong className="text-altiusNavy font-semibold truncate block">
                        {selectedFile ? selectedFile.name : 'Uploaded Document'}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Next Steps Notification */}
                <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-xl max-w-xl mx-auto text-xs text-blue-900 flex items-start gap-3 text-left">
                  <Info className="w-5 h-5 text-altiusBlue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">What Happens Next?</span>
                    Our academic coordinators will verify the faculty endorsement and review your domain preference.
                    A representative will contact you via email or WhatsApp regarding scheduling and orientation.
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 text-white text-xs font-bold uppercase tracking-wider rounded-[8px] hover:opacity-95 transition shadow-sm"
                  >
                    Submit Another Application
                  </button>
                  <a
                    href="#specialty-programs"
                    className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-[8px] hover:bg-gray-200 transition text-center"
                  >
                    Explore Other Programs
                  </a>
                </div>
              </div>
            ) : (
              /* FORM STATE */
              <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                {/* Global Error Banner */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-rose-800 text-xs animate-shake">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <strong className="font-bold block mb-0.5">Submission Notice:</strong>
                      {submitMessage}
                    </div>
                  </div>
                )}

                {/* SECTION 1: APPLICANT & ACADEMIC INFORMATION */}
                <div>
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-2.5 mb-5">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-altiusBlue flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <h3 className="font-serif text-lg font-bold text-altiusNavy">
                      Applicant & Academic Profile
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className={errors.fullName ? 'has-error' : ''}>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Alex Morgan"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50/70 border text-xs text-gray-900 transition focus:outline-none focus:bg-white ${
                            errors.fullName
                              ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                              : 'border-gray-200 focus:border-altiusBlue focus:ring-2 focus:ring-blue-100'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] font-medium text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Current Grade / Year */}
                    <div className={errors.currentGrade ? 'has-error' : ''}>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Current Grade / Year <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <select
                          name="currentGrade"
                          value={formData.currentGrade}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-8 py-3 rounded-xl bg-gray-50/70 border text-xs text-gray-900 transition appearance-none focus:outline-none focus:bg-white cursor-pointer ${
                            errors.currentGrade
                              ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                              : 'border-gray-200 focus:border-altiusBlue focus:ring-2 focus:ring-blue-100'
                          }`}
                        >
                          <option value="">Select your current grade or academic year</option>
                          {GRADE_OPTIONS.map((grade) => (
                            <option key={grade} value={grade}>
                              {grade}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      {errors.currentGrade && (
                        <p className="text-[11px] font-medium text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.currentGrade}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* SECTION 2: PROGRAM PREFERENCES & SUPERVISION */}
                <div>
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-2.5 mb-5">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-altiusBlue flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <h3 className="font-serif text-lg font-bold text-altiusNavy">
                      Program & Institutional Details
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {/* Target Field / Domain */}
                    <div className={errors.targetField ? 'has-error' : ''}>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                        Target Field / Domain <span className="text-red-500">*</span>
                        <span className="text-gray-400 lowercase font-normal ml-1.5">
                          (In which fields you are going)
                        </span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Compass className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="targetField"
                          value={formData.targetField}
                          onChange={handleInputChange}
                          placeholder="e.g. CNC Programming & Manufacturing, 3D Tech, Academic Tutoring..."
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50/70 border text-xs text-gray-900 transition focus:outline-none focus:bg-white ${
                            errors.targetField
                              ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                              : 'border-gray-200 focus:border-altiusBlue focus:ring-2 focus:ring-blue-100'
                          }`}
                        />
                      </div>
                      {errors.targetField && (
                        <p className="text-[11px] font-medium text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.targetField}
                        </p>
                      )}

                      {/* Quick Suggestions Chips */}
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold text-gray-400 mr-1">
                          Suggestions:
                        </span>
                        {SUGGESTED_FIELDS.map((field) => (
                          <button
                            key={field}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, targetField: field }));
                              setErrors((prev) => ({ ...prev, targetField: undefined }));
                            }}
                            className={`text-[10px] px-2.5 py-1 rounded-full border transition font-medium ${
                              formData.targetField === field
                                ? 'bg-altiusNavy text-altiusGold border-altiusNavy'
                                : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200'
                            }`}
                          >
                            {field}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Expected Timeframe / Duration */}
                      <div className={errors.durationTimeframe ? 'has-error' : ''}>
                        <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                          Expected Duration / Timeframe <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            name="durationTimeframe"
                            value={formData.durationTimeframe}
                            onChange={handleInputChange}
                            placeholder="e.g. Summer 2026 (8 Weeks), Fall Semester, 3 Months..."
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50/70 border text-xs text-gray-900 transition focus:outline-none focus:bg-white ${
                              errors.durationTimeframe
                                ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                              : 'border-gray-200 focus:border-altiusBlue focus:ring-2 focus:ring-blue-100'
                            }`}
                          />
                        </div>
                        {errors.durationTimeframe && (
                          <p className="text-[11px] font-medium text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            {errors.durationTimeframe}
                          </p>
                        )}
                        {/* Duration Presets */}
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {DURATION_PRESETS.slice(0, 3).map((preset) => (
                            <button
                              key={preset}
                              type="button"
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, durationTimeframe: preset }));
                                setErrors((prev) => ({ ...prev, durationTimeframe: undefined }));
                              }}
                              className="text-[9px] text-gray-500 bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded transition"
                            >
                              + {preset.split(' ')[0]}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Approving Faculty Name */}
                      <div className={errors.facultyName ? 'has-error' : ''}>
                        <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                          Assigned / Approving Faculty <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            name="facultyName"
                            value={formData.facultyName}
                            onChange={handleInputChange}
                            placeholder="e.g. Dr. Eleanor Vance (Department Head)"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50/70 border text-xs text-gray-900 transition focus:outline-none focus:bg-white ${
                              errors.facultyName
                                ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                                : 'border-gray-200 focus:border-altiusBlue focus:ring-2 focus:ring-blue-100'
                            }`}
                          />
                        </div>
                        {errors.facultyName && (
                          <p className="text-[11px] font-medium text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            {errors.facultyName}
                          </p>
                        )}
                        <p className="text-[10px] text-gray-400 mt-1">
                          Faculty member or teacher who approved your application participation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 3: LETTER OF CONFIRMATION FILE UPLOAD */}
                <div className={errors.letterOfConfirmation ? 'has-error' : ''}>
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-2.5 mb-4">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-altiusBlue flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <h3 className="font-serif text-lg font-bold text-altiusNavy">
                      Letter of Confirmation (Document Upload)
                    </h3>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    id="confirmationLetter"
                    name="confirmationLetter"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {!selectedFile ? (
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center cursor-pointer transition-all duration-200 ${
                        isDragging
                          ? 'border-altiusBlue bg-blue-50/50 scale-[1.005]'
                          : errors.letterOfConfirmation
                          ? 'border-rose-300 bg-rose-50/30 hover:bg-rose-50/50'
                          : 'border-gray-300 bg-gray-50/50 hover:bg-gray-50 hover:border-gray-400'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-100/70 text-altiusBlue flex items-center justify-center mx-auto mb-3">
                        <UploadCloud className="w-6 h-6" />
                      </div>
                      <p className="text-xs font-bold text-altiusNavy mb-1">
                        Click to browse or drag & drop your Confirmation Letter
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Accepted formats: <strong>PDF, DOC, DOCX, PNG, JPG</strong> (Max: 10MB)
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-altiusBlue hover:underline">
                        <span>Browse file from device</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  ) : (
                    <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-altiusNavy text-altiusGold flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-altiusNavy truncate">
                            {selectedFile.name}
                          </p>
                          <div className="flex items-center gap-2 text-[10px] text-gray-500">
                            <span>{formatFileSize(selectedFile.size)}</span>
                            <span>&bull;</span>
                            <span className="text-green-600 font-semibold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Ready to Submit
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-[11px] font-semibold text-altiusBlue hover:underline px-2 py-1"
                        >
                          Change
                        </button>
                        <button
                          type="button"
                          onClick={removeSelectedFile}
                          className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-rose-600 hover:border-rose-200 flex items-center justify-center transition"
                          title="Remove file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {errors.letterOfConfirmation && (
                    <p className="text-[11px] font-medium text-rose-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.letterOfConfirmation}
                    </p>
                  )}
                </div>

                {/* SECTION 4: TERMS & CONDITIONS / DISCLAIMER BOX */}
                <div className="pt-2">
                  <div className="bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200 rounded-xl p-5 sm:p-6 space-y-4">
                    <div className="flex items-center gap-2.5 text-altiusNavy">
                      <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                      <h4 className="font-serif text-sm font-bold tracking-wide uppercase text-altiusNavy">
                        Terms & Conditions / Disclaimer
                      </h4>
                    </div>

                    <div className="space-y-3 text-xs text-gray-700 leading-relaxed border-t border-gray-200/80 pt-3">
                      {/* Point 1: Unpaid Status */}
                      <div className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span>
                        <p>
                          <strong className="text-altiusNavy font-semibold">Unpaid Status:</strong> The
                          student acknowledges this is an unpaid educational/experiential program. No
                          financial compensation, wage, or stipend will be provided by either the host
                          company/organization or the institution/school.
                        </p>
                      </div>

                      {/* Point 2: Liability Waiver */}
                      <div className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span>
                        <p>
                          <strong className="text-altiusNavy font-semibold">Liability Waiver:</strong>{' '}
                          Participation is entirely voluntary. Neither the school, institution, nor the
                          host company holds any responsibility or legal liability for any incidents,
                          damages, travel occurrences, or losses during the program duration.
                        </p>
                      </div>

                      {/* Point 3: Voluntary Participation */}
                      <div className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span>
                        <p>
                          <strong className="text-altiusNavy font-semibold">Voluntary Participation:</strong>{' '}
                          This program is purely optional and non-compulsory; it is open strictly to
                          interested students who wish to advance their practical knowledge and skills.
                        </p>
                      </div>
                    </div>

                    {/* Mandatory Agreement Checkbox */}
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
                          I have read, understood, and agree to the Terms & Conditions, Unpaid Status, and
                          Liability Waiver stated above. <span className="text-red-500">*</span>
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

                {/* SUBMIT BUTTON SECTION */}
                <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-gray-500 text-center sm:text-left">
                    Fields marked with <span className="text-red-500">*</span> are mandatory.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeTerms}
                    className={`w-full sm:w-auto min-w-[240px] text-xs font-bold py-4 px-8 rounded-[10px] tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md ${
                      isSubmitting || !formData.agreeTerms
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-950 via-altiusNavy to-blue-900 hover:bg-blue-900 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-altiusGold" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-altiusGold" />
                        <span>Submit Program Application</span>
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
