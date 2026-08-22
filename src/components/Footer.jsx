import { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { stagger, fadeUp } from '../motion/variants';
import logo from '../assets/logo.png';
import './Footer.css';

const cols = {
  Services: ['Web Development','Digital Marketing','WordPress','UX/UI Design','SaaS Development','E-Commerce','Data Analytics'],
  Company:  ['About Us','Portfolio','Careers','Blog','Contact'],
  Contact:  ['5 BRAYFORD SQUARE, UNIT 6252, LONDON, UK E1 0SG','hello@softnexsol.com','+447882507703'],
};

export default function Footer() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <footer className="footer" ref={ref}>
      <motion.div className="footer-top" variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      <motion.div className="footer-brand" variants={fadeUp}>
      <div className="footer-logo">
        <img src={logo} alt="softnexsol" className="footer-logo-img" />
        <span className="footer-name">SOFTNEXSOL</span>
      </div>
      <p className="footer-tagline">Leading Innovation in the Next Era</p>
      <p className="footer-desc">Building world-class digital products for startups and enterprises globally.</p>
      </motion.div>
        {Object.entries(cols).map(([col, links]) => (
          <motion.div key={col} className="footer-col" variants={fadeUp}>
            <h4>{col}</h4>
            {links.map(l => (
              <motion.a key={l} href="#" whileHover={{ x: 4, color: 'var(--teal)' }} transition={{ duration: 0.15 }}>{l}</motion.a>
            ))}
          </motion.div>
        ))}
      </motion.div>
      <div className="footer-bottom">
        <p>© 2026 Softnexsol. All rights reserved.</p>
        <p>Privacy Policy · Terms of Service</p>
      </div>
    </footer>
  );
}
