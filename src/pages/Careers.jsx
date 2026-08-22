import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, fadeUp, scaleUp, stagger } from '../motion/variants';
import './Pages.css';

const perks = [
  { icon:'💰', title:'Competitive Salary', desc:'Market-leading pay with annual reviews.' },
  { icon:'🏠', title:'Remote Friendly',    desc:'Work from home or our Lahore office.' },
  { icon:'📈', title:'Career Growth',      desc:'Clear paths and mentorship to level up.' },
  { icon:'🏥', title:'Health Coverage',    desc:'Medical insurance for you and family.' },
  { icon:'🎓', title:'Learning Budget',    desc:'Annual budget for courses & conferences.' },
  { icon:'🎉', title:'Team Events',        desc:'Monthly outings and annual retreats.' },
];

const jobs = [
  { id:1, title:'Senior React Developer',       dept:'Engineering', type:'Full-time', location:'Lahore / Remote' },
  { id:2, title:'Node.js Backend Engineer',     dept:'Engineering', type:'Full-time', location:'Lahore / Remote' },
  { id:3, title:'UI/UX Designer',               dept:'Design',      type:'Full-time', location:'Lahore' },
  { id:4, title:'Graphic Designer',             dept:'Design',      type:'Full-time', location:'Lahore' },
  { id:5, title:'Digital Marketing Specialist', dept:'Marketing',   type:'Full-time', location:'Lahore / Remote' },
  { id:6, title:'WordPress Developer',          dept:'Engineering', type:'Full-time', location:'Lahore / Remote' },
  { id:7, title:'Data Analyst',                 dept:'Analytics',   type:'Full-time', location:'Remote' },
  { id:8, title:'Project Manager',              dept:'Management',  type:'Full-time', location:'Lahore' },
];

const depts = ['All','Engineering','Design','Marketing','Analytics','Management'];

export default function Careers() {
  const [activeDept, setActiveDept] = useState('All');
  const [openJob,    setOpenJob]    = useState(null);

  const filtered = activeDept === 'All' ? jobs : jobs.filter(j => j.dept === activeDept);

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">

      {/* Hero */}
      <motion.div className="page-hero" variants={stagger} initial="hidden" animate="visible">
        <motion.span className="eyebrow" variants={fadeUp}>Join our team</motion.span>
        <motion.h1 variants={fadeUp}>
          Build Your Career at <span className="grad-text">Softnexsol</span>
        </motion.h1>
        <motion.p variants={fadeUp}>
          We're always looking for talented, passionate people to join our growing team. Come build the future with us.
        </motion.p>
      </motion.div>

      {/* Perks */}
      <motion.div
        className="perks-section"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.span className="eyebrow" variants={fadeUp}>Why join us</motion.span>
        <motion.h2 className="sec-title" variants={fadeUp}>Perks & Benefits</motion.h2>
        <div className="perks-grid">
          {perks.map(p => (
            <motion.div
              key={p.title}
              className="perk-card"
              variants={scaleUp}
              whileHover={{ y: -6, borderColor: 'var(--border-hover)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="perk-icon">{p.icon}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Jobs */}
      <div className="jobs-section">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Open positions
        </motion.span>
        <motion.h2
          className="sec-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Current Openings
        </motion.h2>

        {/* Department filter */}
        <motion.div
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {depts.map(d => (
            <motion.button
              key={d}
              className={`filter-btn ${activeDept === d ? 'active' : ''}`}
              onClick={() => setActiveDept(d)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {d}
            </motion.button>
          ))}
        </motion.div>

        {/* Job list */}
        <div className="jobs-list">
          <AnimatePresence mode="popLayout">
            {filtered.map((job, i) => (
              <motion.div
                key={job.id}
                className="job-card"
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ delay: i * 0.05, duration: 0.32 }}
                whileHover={{ borderColor: 'var(--border-hover)' }}
              >
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-tag">{job.dept}</span>
                    <span className="job-tag">{job.type}</span>
                    <span className="job-tag">📍 {job.location}</span>
                  </div>
                </div>

                <motion.button
                  className="btn-primary"
                  style={{ whiteSpace: 'nowrap' }}
                  onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {openJob === job.id ? 'Close ✕' : 'Apply Now →'}
                </motion.button>

                {/* Inline apply form */}
                <AnimatePresence>
                  {openJob === job.id && (
                    <motion.div
                      className="apply-form"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <h4>Apply for {job.title}</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Full Name</label>
                          <input type="text" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" placeholder="your@email.com" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Portfolio / LinkedIn URL</label>
                        <input type="url" placeholder="https://..." />
                      </div>
                      <div className="form-group">
                        <label>Cover Letter</label>
                        <textarea rows="4" placeholder="Why do you want to join Softnexsol?" />
                      </div>
                      <motion.button
                        className="btn-primary"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Submit Application →
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

    </motion.div>
  );
}
