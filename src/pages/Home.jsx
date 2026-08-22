import { motion } from 'framer-motion';
import { pageTransition } from '../motion/variants';
import Hero         from '../components/Hero';
import Stats        from '../components/Stats';
import Services     from '../components/Services';
import Process      from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA          from '../components/CTA';

export default function Home() {
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <Hero /><Stats /><Services /><Process /><Testimonials /><CTA />
    </motion.div>
  );
}
