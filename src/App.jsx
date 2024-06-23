import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Gallery, StarsCanvas } from './components';
// import TOPOLOGY from 'vanta/src/vanta.topology';
import { useEffect, useRef } from 'react';
import './index.css';

const App = () => {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        if (!vantaEffect.current) {
            vantaEffect.current = VANTA.TOPOLOGY({
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
        <Router>
            <Navbar />
            
            <div ref={vantaRef} className="vanta-bg"></div>
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Works />} />
                    <Route path="/gallery" element={<Gallery />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
