import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, fadeUp, slideLeft, slideRight, stagger } from '../motion/variants';
import './Pages.css';

const info = [
  { icon:'📍', label:'Address', value:'5 BRAYFORD SQUARE, UNIT 6252, LONDON, UK E1 0SG' },
  { icon:'📧', label:'Email',   value:'hello@softnexsol.com' },
  { icon:'📞', label:'Phone',   value:'+447882507703' },
  { icon:'🕐', label:'Hours',   value:'Mon – Fri, 9am – 6pm PKT' },
];

export default function Contact() {
  const [form, setForm]           = useState({ name:'', email:'', service:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <motion.div className="page-hero" variants={stagger} initial="hidden" animate="visible">
        <motion.span className="eyebrow" variants={fadeUp}>Get in touch</motion.span>
        <motion.h1 variants={fadeUp}>Let's <span className="grad-text">Talk</span></motion.h1>
        <motion.p variants={fadeUp}>Have a project in mind? Fill out the form and we'll get back to you within 24 hours.</motion.p>
      </motion.div>

      <div className="contact-section">
        <motion.div className="contact-left" variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once:true }}>
          <h2>Contact Information</h2>
          <p>Reach out through any of the channels below. We're always happy to help.</p>
          {info.map((c,i) => (
            <motion.div key={c.label} className="contact-info-item" initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}>
              <div className="contact-info-icon">{c.icon}</div>
              <div><div className="contact-info-label">{c.label}</div><div className="contact-info-value">{c.value}</div></div>
            </motion.div>
          ))}
          <div className="socials">
            {['LinkedIn','Twitter','Instagram','GitHub'].map(s => (
              <motion.a key={s} href="#" className="social-pill" whileHover={{ scale:1.06, backgroundColor:'rgba(0,201,177,0.12)' }} whileTap={{ scale:0.95 }}>{s}</motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div className="contact-right" variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once:true }}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="ok" className="contact-success" initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.4 }}>
                <motion.div className="success-icon" initial={{ scale:0 }} animate={{ scale:1 }} transition={{ delay:0.2, type:'spring', stiffness:200 }}>✅</motion.div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <motion.button className="btn-primary" style={{ marginTop:20 }} onClick={() => setSubmitted(false)} whileHover={{ scale:1.04 }}>Send Another</motion.button>
              </motion.div>
            ) : (
              <motion.form key="form" className="contact-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
                <h2>Send us a Message</h2>
                <div className="form-row">
                  <div className="form-group"><label>Full Name</label><input type="text" name="name" placeholder="Ahmad Khan" value={form.name} onChange={change} required /></div>
                  <div className="form-group"><label>Email Address</label><input type="email" name="email" placeholder="ahmad@example.com" value={form.email} onChange={change} required /></div>
                </div>
                <div className="form-group">
                  <label>Service Interested In</label>
                  <select name="service" value={form.service} onChange={change} required>
                    <option value="">Select a service...</option>
                    {['Web Development (Full Stack)','Digital Marketing','WordPress','UX/UI Design','Graphic Design','SaaS Development','E-Commerce','Data Analytics'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group"><label>Message</label><textarea name="message" rows="5" placeholder="Tell us about your project..." value={form.message} onChange={change} required /></div>
                <motion.button type="submit" className="btn-primary" style={{ width:'100%', padding:'14px' }} whileHover={{ scale:1.02, y:-2 }} whileTap={{ scale:0.98 }}>Send Message →</motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
