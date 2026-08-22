import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { pageTransition, fadeUp, slideLeft, slideRight, stagger, scaleUp } from '../motion/variants';
import './Pages.css';

const values = [
  { icon:'🎯', title:'Client First',  desc:'Every decision starts with what is best for our clients and their users.' },
  { icon:'💡', title:'Innovation',    desc:'We embrace new technologies and approaches to stay ahead of the curve.' },
  { icon:'🤝', title:'Transparency',  desc:'Open communication and honest updates at every stage of the project.' },
  { icon:'⚡', title:'Delivery',      desc:'We ship on time, every time — without ever compromising on quality.' },
];
const team = [
  { i:'AK', name:'Ahmad Khan',   role:'CEO & Founder' },
  { i:'SR', name:'Sara Raza',    role:'CTO' },
  { i:'OM', name:'Omar Malik',   role:'Head of Design' },
  { i:'FA', name:'Fatima Aslam', role:'Lead Developer' },
];

export default function About() {
  const mRef = useRef(null); const mInView = useInView(mRef, { once: true, margin: '-80px' });
  const vRef = useRef(null); const vInView = useInView(vRef, { once: true, margin: '-80px' });
  const tRef = useRef(null); const tInView = useInView(tRef, { once: true, margin: '-80px' });

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <motion.div className="page-hero" variants={stagger} initial="hidden" animate="visible">
        <motion.span className="eyebrow" variants={fadeUp}>Who we are</motion.span>
        <motion.h1 variants={fadeUp}>We are <span className="grad-text">Softnexsol</span></motion.h1>
        <motion.p variants={fadeUp}>A passionate team of engineers, designers and strategists building world-class digital products since 2010.</motion.p>
      </motion.div>

      <div className="about-mission" ref={mRef}>
        <motion.div className="about-mission-left" variants={slideLeft} initial="hidden" animate={mInView ? 'visible' : 'hidden'}>
          <span className="eyebrow">Our Mission</span>
          <h2>Empowering businesses through technology</h2>
          <p>We believe the right technology, built the right way, can transform any business. Our mission is to make that transformation accessible — for startups, enterprises, and everyone in between.</p>
          <p>Based in Lahore, Pakistan, we serve clients across 50+ countries with a team of 2,000+ engineers passionate about what they build.</p>
          <Link to="/contact"><motion.button className="btn-primary" style={{ marginTop: 28 }} whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>Work With Us →</motion.button></Link>
        </motion.div>
        <motion.div className="about-stat-grid" variants={slideRight} initial="hidden" animate={mInView ? 'visible' : 'hidden'}>
          {[{num:'2010',label:'Founded'},{num:'2,000+',label:'Engineers'},{num:'250+',label:'Clients'},{num:'50+',label:'Countries'}].map((s,i) => (
            <motion.div key={s.label} className="about-stat-card" initial={{ opacity:0, y:24 }} animate={mInView ? { opacity:1, y:0 } : {}} transition={{ delay: 0.2 + i*0.1 }} whileHover={{ y:-4, borderColor:'var(--border-hover)' }}>
              <div className="about-stat-num grad-text">{s.num}</div>
              <div className="about-stat-label">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div className="about-values" ref={vRef} variants={stagger} initial="hidden" animate={vInView ? 'visible' : 'hidden'}>
        <motion.span className="eyebrow" variants={fadeUp}>Our Values</motion.span>
        <motion.h2 className="sec-title" variants={fadeUp}>What drives us every day</motion.h2>
        <div className="values-grid">
          {values.map(v => (
            <motion.div key={v.title} className="value-card" variants={scaleUp} whileHover={{ y:-6, borderColor:'var(--border-hover)' }}>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3><p>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="about-team" ref={tRef} variants={stagger} initial="hidden" animate={tInView ? 'visible' : 'hidden'}>
        <motion.span className="eyebrow" variants={fadeUp}>The Team</motion.span>
        <motion.h2 className="sec-title" variants={fadeUp}>Meet our leadership</motion.h2>
        <div className="team-grid">
          {team.map(t => (
            <motion.div key={t.name} className="team-card" variants={scaleUp} whileHover={{ y:-6, borderColor:'var(--border-hover)' }}>
              <div className="team-av">{t.i}</div>
              <div className="team-name">{t.name}</div>
              <div className="team-role">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="page-cta">
        <h2>Ready to start your project?</h2>
        <p>Let's build something great together.</p>
        <Link to="/contact"><motion.button className="btn-primary" whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}>Get in Touch →</motion.button></Link>
      </div>
    </motion.div>
  );
}
