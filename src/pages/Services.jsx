import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition, fadeUp, scaleUp, stagger } from '../motion/variants';
import './Pages.css';

const services = [
  { icon:'💻', title:'Web Development (Full Stack)', desc:'End-to-end web solutions with React, Node.js & modern architecture.', features:['React / Next.js','Node.js / Express','REST & GraphQL APIs','Database Design'] },
  { icon:'📣', title:'Digital Marketing',            desc:'SEO, paid ads & content strategies that convert and grow your brand.',  features:['SEO Optimization','Social Media Ads','Google Ads','Content Strategy'] },
  { icon:'🌐', title:'WordPress',                    desc:'Custom themes, plugins & WooCommerce stores for any business size.',   features:['Custom Themes','Plugin Development','WooCommerce','Speed Optimization'] },
  { icon:'🎨', title:'UX/UI Design',                 desc:'Interfaces that are as intuitive and beautiful as they are functional.', features:['Wireframing','Prototyping','Design Systems','User Testing'] },
  { icon:'✏️', title:'Graphic Design',               desc:'Brand identity, logos & creative visuals that make you stand out.',    features:['Logo Design','Brand Identity','Social Media Kits','Print Materials'] },
  { icon:'☁️', title:'SaaS Development',             desc:'Scalable multi-tenant cloud products built for performance & growth.',  features:['Multi-tenancy','Subscription Billing','Cloud Hosting','API Integrations'] },
  { icon:'🛒', title:'E-Commerce',                   desc:'Online stores with seamless checkout and payment integrations.',        features:['Shopify / WooCommerce','Payment Gateways','Inventory Mgmt','Mobile Commerce'] },
  { icon:'📊', title:'Data Analytics',               desc:'Dashboards & BI tools that turn raw data into business decisions.',    features:['Custom Dashboards','Data Pipelines','Business Intelligence','Reporting'] },
];

export default function ServicesPage() {
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      <motion.div className="page-hero" variants={stagger} initial="hidden" animate="visible">
        <motion.span className="eyebrow" variants={fadeUp}>What we offer</motion.span>
        <motion.h1 variants={fadeUp}>Our <span className="grad-text">Services</span></motion.h1>
        <motion.p variants={fadeUp}>Comprehensive digital solutions tailored to help your business grow, compete and succeed.</motion.p>
      </motion.div>
      <motion.div className="svc-page-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-80px' }}>
        {services.map(s => (
          <motion.div key={s.title} className="svc-page-card" variants={scaleUp} whileHover={{ y:-6 }} transition={{ duration:0.22 }}>
            <div className="svc-page-icon">{s.icon}</div>
            <h3>{s.title}</h3><p>{s.desc}</p>
            <ul className="svc-features">{s.features.map(f => <li key={f}><span className="feature-dot"/>{f}</li>)}</ul>
            <Link to="/contact"><span className="svc-link">Get a Quote →</span></Link>
          </motion.div>
        ))}
      </motion.div>
      <div className="page-cta">
        <h2>Not sure which service you need?</h2>
        <p>Talk to our team and we'll help you find the right solution.</p>
        <Link to="/contact"><motion.button className="btn-primary" whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}>Contact Us →</motion.button></Link>
      </div>
    </motion.div>
  );
}
