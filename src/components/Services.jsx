import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stagger, fadeUp, scaleUp } from '../motion/variants';
import './Services.css';

const services = [
  { num:'01', icon:'💻', title:'Web Development',   desc:'Full stack React, Node.js & cloud-native solutions built to scale.' },
  { num:'02', icon:'📣', title:'Digital Marketing', desc:'SEO, paid ads & content strategies that convert and grow your brand.' },
  { num:'03', icon:'🌐', title:'WordPress',          desc:'Custom themes, plugins & WooCommerce stores for any business.' },
  { num:'04', icon:'🎨', title:'UX/UI Design',       desc:'Interfaces that are as intuitive as they are beautiful.' },
  { num:'05', icon:'✏️', title:'Graphic Design',     desc:'Brand identity, logos & creative visuals that stand out.' },
  { num:'06', icon:'☁️', title:'SaaS Development',   desc:'Scalable multi-tenant cloud products built for growth.' },
  { num:'07', icon:'🛒', title:'E-Commerce',         desc:'Online stores built to convert, retain and scale.' },
  { num:'08', icon:'📊', title:'Data Analytics',     desc:'Dashboards & BI tools that turn data into decisions.' },
];

export default function Services() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="services-section" ref={ref}>
      <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <motion.span className="eyebrow" variants={fadeUp}>What we do</motion.span>
        <motion.h2 className="sec-title" variants={fadeUp}>Services Built for Scale</motion.h2>
        <motion.p className="sec-sub" variants={fadeUp}>
          From idea to launch — we cover every layer of your product with precision and care.
        </motion.p>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {services.map(s => (
          <motion.div
            key={s.title}
            className="svc-card"
            variants={scaleUp}
            whileHover={{ background: '#1A2235', borderColor: 'rgba(0,201,177,0.35)' }}
            transition={{ duration: 0.2 }}
          >
            <div className="svc-num">{s.num}</div>
            <div className="svc-icon">{s.icon}</div>
            <h3 className="svc-title">{s.title}</h3>
            <p className="svc-desc">{s.desc}</p>
            <span className="svc-arrow">↗</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
