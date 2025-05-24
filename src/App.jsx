import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Gallery, StarsCanvas } from './components';
import { useEffect, useRef, useLayoutEffect } from 'react';
import './index.css';

// Updated ScrollToTop component - uses useLayoutEffect for immediate scroll
// Scroll restoration component
const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      // Instant scroll to top (no smooth behavior)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // 'auto' also works for instant scrolling
      });
      
      // Optional: Reset focus for accessibility
      document.body.focus();
    }, [pathname]);
  
    return null;
  };

const App = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && window.VANTA) {
      vantaEffect.current = window.VANTA.TOPOLOGY({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <Router scrollRestoration="manual">
      <ScrollToTop />
      <Navbar />
      
      <div ref={vantaRef} className="vanta-bg"></div>
      <div className="main-content">
        <Routes>
          <Route key="about" path="/" element={<About />} />
          <Route key="experience" path="/experience" element={<Experience />} />
          <Route key="projects" path="/projects" element={<Works />} />
          <Route key="gallery" path="/gallery" element={<Gallery />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;