import {HashRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works,Gallery ,StarsCanvas } from './components';
const App=()=> {

    return (
        <HashRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-np-repeat bg-center" />
                <Navbar />
                <Hero />

            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Gallery/>
            {/* <Feedbacks /> */}
            {/* <Contact /> */}
            <div className="relative z-0 text-center">
                {/* <Contact /> */}
                Contact
                {/* <StarsCanvas/> */}
            </div>
            <div className="relative z-0 text-center">
                {/* <Contact /> */}
                ssun329@wisc.edu
                {/* <StarsCanvas/> */}
            </div>
        </HashRouter>
  )
}

export default App
