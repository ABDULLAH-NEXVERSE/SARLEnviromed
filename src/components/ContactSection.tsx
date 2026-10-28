'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContentTranslation } from '@/types/content';
import {
  VIEWPORT,
  RevealLines,
  fadeUp,
  stagger,
} from './motion/primitives';

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

  // Local sourcing is now one of the activities, so the list maps 1:1 to t.acts.
  const activityOptions = t.acts.map((act, i) => ({ value: i, label: act.t }));

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
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <motion.div
          className="contact-copy"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger(0.1)}
        >
          <motion.div className="kicker" variants={fadeUp}>04 / YOUR NEXT PROJECT</motion.div>
          <RevealLines
            lines={[headlineLines[0] || 'Tell us what', headlineLines[1] || 'you need.']}
          />
          <motion.p className="lede" variants={fadeUp}>{t.con_p}</motion.p>

          <motion.div className="contact-detail" variants={fadeUp}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <div><small>Email</small><a href="mailto:contact@enviromed-dz.com">contact@enviromed-dz.com</a></div>
          </motion.div>
          <motion.div className="contact-detail" variants={fadeUp}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <div><small>Address</small>Cité des travailleurs, lot 01, N° 07<br />Dar El Beida, Alger<br /><span className="country">{t.country}</span></div>
          </motion.div>
        </motion.div>

        {/* 3D Scroll-Animated Signature Lens Form */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
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
          <div className="form-bottom">
            <small>{t.form_help}</small>
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
