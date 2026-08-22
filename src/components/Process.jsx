import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stagger, fadeUp } from '../motion/variants';
import './Process.css';

const steps = [
  { n:'1', title:'Discovery', desc:'Goals, users & tech scope clearly defined.' },
  { n:'2', title:'Design',    desc:'Wireframes & prototypes built and tested.' },
  { n:'3', title:'Develop',   desc:'Agile sprints with full transparency.' },
  { n:'4', title:'Deploy',    desc:'CI/CD launch with complete QA coverage.' },
  { n:'5', title:'Support',   desc:'Ongoing monitoring, growth & improvements.' },
];

export default function Process() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section className="process-section" ref={ref}>
      <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <motion.span className="eyebrow" variants={fadeUp}>How we work</motion.span>
        <motion.h2 className="sec-title" variants={fadeUp}>Our Proven Process</motion.h2>
      </motion.div>
      <motion.div className="process-track" variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        {steps.map((s, i) => (
          <motion.div key={s.n} className="proc-step" variants={fadeUp} whileHover={{ y: -4 }}>
            {i < steps.length - 1 && <div className="proc-connector" />}
            <motion.div className="proc-dot" whileHover={{ scale: 1.12 }} transition={{ duration: 0.2 }}>
              {s.n}
            </motion.div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
