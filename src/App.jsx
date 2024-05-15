import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works,Gallery ,StarsCanvas } from './components';
import ParticlesBackground from './components/ParticlesBackground';

const App=()=> {
{/* <ParticlesBackground/> */}
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Works />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
             </Routes>
        </Router>
  )
}

export default App
