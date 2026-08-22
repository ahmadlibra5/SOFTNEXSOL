import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, fadeUp, stagger } from '../motion/variants';
import './Pages.css';

const cats = ['All','Web Development','E-Commerce','Mobile App','SaaS','UI/UX'];
const projects = [
  { id:1, title:'FinTrack Dashboard', cat:'SaaS',            color:'#0D2035', emoji:'📊' },
  { id:2, title:'ShopEase Store',     cat:'E-Commerce',      color:'#0D2020', emoji:'🛒' },
  { id:3, title:'MediCare App',       cat:'Mobile App',      color:'#1A1A0D', emoji:'📱' },
  { id:4, title:'Nexus Portfolio',    cat:'UI/UX',           color:'#1A0D25', emoji:'🎨' },
  { id:5, title:'BuildCo Website',    cat:'Web Development', color:'#0D1535', emoji:'💻' },
  { id:6, title:'EduLearn Platform',  cat:'SaaS',            color:'#1A1500', emoji:'🎓' },
  { id:7, title:'FreshMart Grocery',  cat:'E-Commerce',      color:'#0D2015', emoji:'🛒' },
  { id:8, title:'AgencyX Landing',    cat:'Web Development', color:'#250D0D', emoji:'🌐' },
];
const descs = {
  1:'A real-time financial analytics platform with custom dashboards.',
  2:'A full-featured e-commerce platform with Stripe payments.',
  3:'A healthcare mobile app for appointment booking.',
  4:'A stunning portfolio with micro-animations.',
  5:'A corporate website with a project showcase.',
  6:'An online learning platform with video courses.',
  7:'A grocery delivery app with real-time tracking.',
  8:'A high-conversion landing page for a digital agency.',
};

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <motion.div className="page-hero" variants={stagger} initial="hidden" animate="visible">
        <motion.span className="eyebrow" variants={fadeUp}>Our Work</motion.span>
        <motion.h1 variants={fadeUp}>Our <span className="grad-text">Portfolio</span></motion.h1>
        <motion.p variants={fadeUp}>Projects we're proud of — built with care, precision and a passion for great software.</motion.p>
      </motion.div>

      <div className="port-filters">
        {cats.map(c => (
          <motion.button key={c} className={`filter-btn ${active===c?'active':''}`} onClick={() => setActive(c)} whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}>{c}</motion.button>
        ))}
      </div>

      <motion.div className="port-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map(p => (
            <motion.div key={p.id} className="port-card" layout
              initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.9 }}
              transition={{ duration:0.3 }} whileHover={{ y:-6, borderColor:'var(--border-hover)' }}>
              <div className="port-thumb" style={{ background: p.color }}>
                <motion.span whileHover={{ scale:1.2, rotate:5 }} transition={{ duration:0.2 }}>{p.emoji}</motion.span>
              </div>
              <div className="port-info">
                <span className="port-tag">{p.cat}</span>
                <h3>{p.title}</h3>
                <p>{descs[p.id]}</p>
                <span className="svc-link">View Case Study →</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="page-cta">
        <h2>Want to be our next success story?</h2>
        <p>Let's discuss your project and bring your vision to life.</p>
        <Link to="/contact"><motion.button className="btn-primary" whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}>Start a Project →</motion.button></Link>
      </div>
    </motion.div>
  );
}
