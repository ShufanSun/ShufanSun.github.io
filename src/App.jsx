import { BrowserRouter, Route, Routes,HashRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works,Gallery ,StarsCanvas } from './components';
import ParticlesBackground from './components/ParticlesBackground';

const App=()=> {
{/* <ParticlesBackground/> */}
    return (
        <HashRouter>
             <ParticlesBackground/>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-np-repeat bg-center" />
                <Navbar />
                <Hero />

                
            <About />
            <Experience />
            <Tech />
            <Works />
            <Gallery/>

            
            {/* <Feedbacks /> */}
            <Contact />
            
            </div>
        </HashRouter>
  )
}

export default App
// import { BrowserRouter, Route, Routes,HashRouter } from 'react-router-dom';
// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works,Gallery ,StarsCanvas } from './components';
// const App=()=> {

//     return (
//         <BrowserRouter>
//             <div className="relative z-0 bg-primary">
//                 <div className="bg-hero-pattern bg-cover bg-np-repeat bg-center" />
//                 <Navbar />
//                 {/* <Hero /> */}

//             <Routes>
//             <Route
//                         index
//                         element={
//                             <>
//                                 <Hero />
//                                 <About/>
//                             </>
//                         }
//                     />
//                     {/* <Route path='/#work' element={ <Experience />}/> */}

//             </Routes>
//             {/* <About />
//             <Experience />
//             <Tech />
//             <Works />
//             <Gallery/> */}

            
//             {/* <Feedbacks /> */}
//             {/* <Contact /> */}
//             <div className="relative z-0 text-center">
//                 {/* <Contact /> */}
//                 Contact
//                 {/* <StarsCanvas/> */}
//             </div>
//             <div className="relative z-0 text-center">
//                 {/* <Contact /> */}
//                 ssun329@wisc.edu
//                 {/* <StarsCanvas/> */}
//             </div>
//             </div>
//         </BrowserRouter>
//   )
// }

// export default App