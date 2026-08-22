import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stagger, fadeUp } from '../motion/variants';
import './Stats.css';

const stats = [
  { num: '2,000+', label: 'Engineers' },
  { num: '250+',   label: 'Global Clients' },
  { num: '15+',    label: 'Years Experience' },
  { num: '98%',    label: 'Satisfaction Rate' },
  { num: '50+',    label: 'Countries Served' },
];

export default function Stats() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      className="stats-strip"
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {stats.map((s, i) => (
        <motion.div key={s.label} className="stat-item" variants={fadeUp}>
          <div className="stat-num grad-text">{s.num}</div>
          <div className="stat-label">{s.label}</div>
          {i < stats.length - 1 && <div className="stat-divider" />}
        </motion.div>
      ))}
    </motion.div>
  );
}
