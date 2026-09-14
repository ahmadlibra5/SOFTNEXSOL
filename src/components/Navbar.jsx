import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Services',  path: '/services'  },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About',     path: '/about'     },
  { label: 'Careers',   path: '/careers'   },
  { label: 'Contact',   path: '/contact'   },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
  {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src={logo} alt="softnexsol" className="nav-logo-img" />

          <div className="nav-logo-content">
            <span className="nav-logo-text">SOFTNEXSOL</span>
            <span className="nav-logo-tagline">
              Leading Innovation in the Next Era
            </span>
          </div>
        </Link>

      {/* Desktop links */}
      <div className="nav-links">
        {navItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
          >
            <Link
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'nav-link--active' : ''}`}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA buttons */}
      <motion.div
        className="nav-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/contact">
          <motion.button className="nav-btn-outline" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            Login
          </motion.button>
        </Link>
        <Link to="/contact">
          <motion.button className="nav-btn-grad" whileHover={{ scale: 1.04, opacity: 0.88 }} whileTap={{ scale: 0.96 }}>
            Get a Quote
          </motion.button>
        </Link>
      </motion.div>

      {/* Hamburger */}
      <motion.button
        className="nav-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
      >
        <motion.span animate={{ rotate: menuOpen ? 45  : 0, y: menuOpen ?  6 : 0 }} />
        <motion.span animate={{ opacity: menuOpen ? 0  : 1 }} />
        <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} />
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{   opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'nav-link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="nav-mobile-btns">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <button className="nav-btn-outline" style={{ width: '100%' }}>Login</button>
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <button className="nav-btn-grad" style={{ width: '100%' }}>Get a Quote</button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
