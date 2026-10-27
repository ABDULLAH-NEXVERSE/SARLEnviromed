'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ContentTranslation } from '@/types/content';

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

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const formTilt = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, -4]);

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
    <section ref={sectionRef} className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <h2>
            <span className="ln">{headlineLines[0] || 'Tell us what'}</span>
            <span className="ln">{headlineLines[1] || 'you need.'}</span>
          </h2>
          <p className="lede">{t.con_p}</p>

          <ul className="cinfo">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="2.500"
                  y="5"
                  width="19"
                  height="14"
                  rx="2"
                  fill="none"
                  stroke="#012a50"
                  strokeWidth="2"
                />
                <path
                  d="M3.500 7l8.500 6.500L20.500 7"
                  fill="none"
                  stroke="#028698"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a href="mailto:contact@enviromed-dz.com">contact@enviromed-dz.com</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 22C6.500 16 4.500 12.500 4.500 9.500a7.500 7.500 0 0 1 15 0c0 3-2 6.500-7.500 12.500Z"
                  fill="#34841b"
                />
                <circle cx="12" cy="9.500" r="2.800" fill="#fff" />
              </svg>
              <address style={{ fontStyle: 'normal' }}>
                Cité des travailleurs, lot 01, N° 07
                <br />
                Dar El Beida, Alger
                <span className="country">{t.country}</span>
              </address>
            </li>
          </ul>
        </div>

        {/* 3D Scroll-Animated Signature Lens Form */}
        <motion.form
          style={{ rotateX: formTilt, transformPerspective: 1200 }}
          className="form"
          id="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <h3>{t.form_t}</h3>
          <div className="fields">
            <div className="field">
              <label htmlFor="f-name">{t.l_name}</label>
              <input
                id="f-name"
                name="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="field">
              <label htmlFor="f-company">{t.l_company}</label>
              <input
                id="f-company"
                name="company"
                autoComplete="organization"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>
            <div className="field">
              <label htmlFor="f-email">{t.l_email}</label>
              <input
                id="f-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="field">
              <label htmlFor="f-act">{t.l_act}</label>
              <select
                id="f-act"
                name="activity"
                value={selectedActivityIndex}
                onChange={(e) => onActivitySelect(Number(e.target.value))}
              >
                {activityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="field full">
              <label htmlFor="f-msg">{t.l_msg}</label>
              <textarea
                id="f-msg"
                name="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <p className="help">{t.form_help}</p>
          <div className="submit">
            <button className="btn btn-primary" type="submit">
              {t.form_btn}
            </button>
          </div>
          <p className={`confirm ${submitted ? 'show' : ''}`} id="confirm" role="status">
            {t.form_ok}
          </p>
        </motion.form>
      </div>
    </section>
  );
};
