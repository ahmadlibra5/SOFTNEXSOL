import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideLeft, slideRight } from '../motion/variants';
import './CTA.css';

export default function CTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <div className="cta-wrapper" ref={ref}>
      <motion.div className="cta-band"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
        <div className="cta-glow" />
        <motion.div className="cta-left" variants={slideLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <h2>Ready to build the <span className="grad-text">Next Era</span>?</h2>
          <p>Let's talk about your project. Our team is ready to help you design, develop and launch faster than ever.</p>
        </motion.div>
        <motion.div className="cta-btns" variants={slideRight} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.button className="btn-primary" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>Start a Project</motion.button>
          <motion.button className="btn-ghost"   whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>Schedule a Call</motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
