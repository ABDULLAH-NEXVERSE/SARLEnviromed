'use client';

import React, { useState } from 'react';
import { ContentTranslation } from '@/types/content';
import { Mail, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  t: ContentTranslation;
  selectedActivityIndex: number;
  onActivitySelect: (index: number) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  t,
  selectedActivityIndex,
  onActivitySelect,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const headlineLines = t.con_h.split('\n');

  const activityOptions = [
    ...t.acts.map((act, i) => ({ value: i, label: act.t })),
    { value: 5, label: t.src_k },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedActLabel =
      activityOptions.find((opt) => opt.value === selectedActivityIndex)?.label ||
      t.acts[0].t;

    const emailBody = [
      `${t.l_name}: ${formData.name}`,
      `${t.l_company}: ${formData.company || 'N/A'}`,
      `${t.l_email}: ${formData.email}`,
      `${t.l_act}: ${selectedActLabel}`,
      '',
      formData.message,
    ].join('\n');

    const mailtoUrl = `mailto:contact@enviromed-dz.com?subject=${encodeURIComponent(
      t.form_t
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden scroll-mt-24">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Info & Location */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#028698]/10 text-[#026a79] text-xs font-bold uppercase tracking-wider mb-4 border border-[#028698]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#028698]" />
            <span>Direct Inquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#012a50] leading-tight tracking-tight">
            <span className="ln">{headlineLines[0] || 'Tell us what'}</span>
            <span className="ln text-[#028698]">{headlineLines[1] || 'you need.'}</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#2a4560] leading-relaxed">
            {t.con_p}
          </p>

          <ul className="mt-8 sm:mt-10 grid gap-5">
            {/* Direct Email */}
            <li className="flex items-start gap-4 p-4 rounded-2xl bg-[#eef7f8] border border-[rgba(2,134,152,0.2)] text-[#012a50] transition-colors hover:border-[#028698]">
              <div className="w-10 h-10 rounded-full bg-white border border-[#012a50]/20 flex items-center justify-center flex-none">
                <Mail className="w-5 h-5 text-[#028698]" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider font-semibold text-[#026a79]">
                  Email Us Directly
                </span>
                <a
                  href="mailto:contact@enviromed-dz.com"
                  className="font-bold text-base sm:text-lg text-[#012a50] hover:text-[#028698] transition-colors"
                >
                  contact@enviromed-dz.com
                </a>
              </div>
            </li>

            {/* Physical Office Address */}
            <li className="flex items-start gap-4 p-4 rounded-2xl bg-[#eef7f8] border border-[rgba(2,134,152,0.2)] text-[#012a50] transition-colors hover:border-[#028698]">
              <div className="w-10 h-10 rounded-full bg-white border border-[#012a50]/20 flex items-center justify-center flex-none">
                <MapPin className="w-5 h-5 text-[#34841b]" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider font-semibold text-[#34841b]">
                  Office Location
                </span>
                <address className="not-italic font-medium text-sm sm:text-base text-[#012a50] leading-relaxed mt-0.5">
                  Cité des travailleurs, lot 01, N° 07
                  <br />
                  Dar El Beida, Alger
                  <span className="block font-bold text-[#026a79] tracking-wider mt-1">
                    {t.country}
                  </span>
                </address>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column: Modern 3D Quotation Form */}
        <div className="bg-[#eef7f8] border-2 border-[#012a50] rounded-2xl md:rounded-3xl p-6 sm:p-9 lg:p-11 shadow-xl shadow-[#012a50]/10 card-3d">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#012a50] tracking-tight mb-6">
            {t.form_t}
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Name */}
            <div>
              <label htmlFor="f-name" className="block text-xs sm:text-sm font-bold text-[#012a50] mb-1.5">
                {t.l_name} *
              </label>
              <input
                id="f-name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[rgba(1,42,80,0.3)] bg-white text-[#012a50] focus:outline-none focus:ring-2 focus:ring-[#028698] transition-all text-sm sm:text-base"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="f-company" className="block text-xs sm:text-sm font-bold text-[#012a50] mb-1.5">
                {t.l_company}
              </label>
              <input
                id="f-company"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[rgba(1,42,80,0.3)] bg-white text-[#012a50] focus:outline-none focus:ring-2 focus:ring-[#028698] transition-all text-sm sm:text-base"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="f-email" className="block text-xs sm:text-sm font-bold text-[#012a50] mb-1.5">
                {t.l_email} *
              </label>
              <input
                id="f-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[rgba(1,42,80,0.3)] bg-white text-[#012a50] focus:outline-none focus:ring-2 focus:ring-[#028698] transition-all text-sm sm:text-base"
              />
            </div>

            {/* Activity Select */}
            <div>
              <label htmlFor="f-act" className="block text-xs sm:text-sm font-bold text-[#012a50] mb-1.5">
                {t.l_act}
              </label>
              <select
                id="f-act"
                name="activity"
                value={selectedActivityIndex}
                onChange={(e) => onActivitySelect(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-[rgba(1,42,80,0.3)] bg-white text-[#012a50] focus:outline-none focus:ring-2 focus:ring-[#028698] transition-all text-sm sm:text-base font-medium"
              >
                {activityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="f-msg" className="block text-xs sm:text-sm font-bold text-[#012a50] mb-1.5">
                {t.l_msg} *
              </label>
              <textarea
                id="f-msg"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[rgba(1,42,80,0.3)] bg-white text-[#012a50] focus:outline-none focus:ring-2 focus:ring-[#028698] transition-all text-sm sm:text-base resize-y"
              />
            </div>

            {/* Submit & Help Text */}
            <div className="sm:col-span-2 pt-2">
              <p className="text-xs text-[#2a4560] leading-relaxed mb-4">
                {t.form_help}
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#012a50] text-white font-bold text-base shadow-lg hover:bg-[#012b53] hover:shadow-xl hover:scale-102 transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                <span>{t.form_btn}</span>
                <Send className="w-4 h-4 text-[#8fd3dd]" />
              </button>

              {submitted && (
                <div className="mt-4 p-4 rounded-xl bg-white border-s-4 border-[#34841b] text-sm text-[#012a50] flex items-start gap-3 shadow-sm animate-in fade-in duration-300">
                  <CheckCircle className="w-5 h-5 text-[#34841b] flex-none mt-0.5" />
                  <p>{t.form_ok}</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
