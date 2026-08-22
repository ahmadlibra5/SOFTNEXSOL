import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stagger, fadeUp, scaleUp } from '../motion/variants';
import './Testimonials.css';

const items = [
  { i:'JM', name:'James Miller',  role:'CTO, FinTech Startup',        text:'Softnexsol delivered our platform ahead of schedule. Code quality and communication were both outstanding throughout.' },
  { i:'SR', name:'Sarah Rahman',  role:'Product Lead, HealthTech Co.', text:'The team felt like an extension of our own. They understood our vision and executed it with great precision and care.' },
  { i:'AK', name:'Ali Khan',      role:'Founder, E-commerce Platform', text:'From MVP to full product, Softnexsol was with us every step. Highly recommend for any serious tech project.' },
];

export default function Testimonials() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section className="testi-section" ref={ref}>
      <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <motion.span className="eyebrow" variants={fadeUp}>Client stories</motion.span>
        <motion.h2 className="sec-title" variants={fadeUp}>Trusted Worldwide</motion.h2>
      </motion.div>
      <motion.div className="testi-grid" variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        {items.map(t => (
          <motion.div key={t.name} className="testi-card" variants={scaleUp}
            whileHover={{ y: -6, borderColor: 'rgba(0,201,177,0.35)', boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}
            transition={{ duration: 0.22 }}>
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"{t.text}"</p>
            <div className="testi-author">
              <div className="testi-av">{t.i}</div>
              <div><div className="testi-name">{t.name}</div><div className="testi-role">{t.role}</div></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
