import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar    from './components/Navbar';
import Footer    from './components/Footer';
import Home      from './pages/Home';
import About     from './pages/About';
import Services  from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact   from './pages/Contact';
import Careers   from './pages/Careers';
import './index.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/services"  element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact"   element={<Contact />} />
        <Route path="/careers"   element={<Careers />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}
