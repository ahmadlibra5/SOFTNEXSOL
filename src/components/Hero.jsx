import { motion } from 'framer-motion';
import { stagger, fadeUp, scaleUp } from '../motion/variants';
import './Hero.css';

const cards = [
  { icon: '💻', title: 'Web Apps',      desc: 'Full stack solutions' },
  { icon: '📱', title: 'Mobile Apps',   desc: 'iOS & Android' },
  { icon: '☁️', title: 'Cloud & DevOps',desc: 'AWS · Azure · GCP' },
  { icon: '🤖', title: 'AI Solutions',  desc: 'ML & data analytics' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />

      <motion.div className="hero-inner" variants={stagger} initial="hidden" animate="visible">

        <motion.h1 className="hero-h1" variants={fadeUp}>
          We Build Digital<br />
          Products That{' '}
          <span className="grad-text">Drive Growth</span>
        </motion.h1>

        <motion.p className="hero-sub" variants={fadeUp}>
          Softnexsol empowers startups and enterprises with cutting-edge
          software solutions built for the next generation of business.
        </motion.p>

        <motion.div className="hero-btns" variants={fadeUp}>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.04, y: -2, boxShadow: '0 12px 32px rgba(0,201,177,0.25)' }}
            whileTap={{ scale: 0.97 }}
          >
            Start a Project →
          </motion.button>
          <motion.button
            className="btn-ghost"
            whileHover={{ scale: 1.04, borderColor: 'var(--teal)', color: 'var(--teal)' }}
            whileTap={{ scale: 0.97 }}
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Floating mini cards */}
        <motion.div
          className="hero-cards"
          variants={stagger}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.4, staggerChildren: 0.1 }}
        >
          {cards.map(c => (
            <motion.div
              key={c.title}
              className="hero-card"
              variants={scaleUp}
              whileHover={{ y: -5, borderColor: 'var(--teal)', boxShadow: '0 12px 32px rgba(0,201,177,0.1)' }}
              transition={{ duration: 0.22 }}
            >
              <span className="hero-card-icon">{c.icon}</span>
              <span className="hero-card-title">{c.title}</span>
              <span className="hero-card-desc">{c.desc}</span>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
