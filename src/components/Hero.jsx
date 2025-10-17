import React,{useState} from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import myPortrait from "../assets/portrait_head.jpeg";
import { ComputersCanvas } from './canvas';
import github from "../assets/github.png";
import email from "../assets/email.png";
import m1 from "../assets/mango1.jpg";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative w-full h-screen mx-auto mt-0 pt-16">
      <motion.div 
        className={`${styles.paddingX} absolute inset-0 top-[60px] max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5 z-10 pointer-events-none`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Image on the top for small screens - icons on the right */}
        <motion.div 
          className="sm:hidden w-full flex flex-row items-center gap-4 mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="relative w-36 h-36 rounded-full flex-shrink-0 pointer-events-auto"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-300 to-blue-100 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={hovered ? m1 : myPortrait}
                  alt="My Portrait" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
            </div>
          </div>
          
          {/* Social Links - Mobile (right side of portrait) */}
          <motion.div 
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 pointer-events-auto"
            >
              <img src={github} alt="GitHub" className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 pointer-events-auto"
            >
              <img src={email} alt="Email" className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
          {/* Image and bar on the left for wide screens */}
          <motion.div 
            className="hidden sm:flex flex-row items-start gap-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-36 h-36 rounded-full pointer-events-auto"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-300 to-blue-100 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={hovered ? m1 : myPortrait}
                      alt="My Portrait" 
                      className="w-full h-full object-cover rounded-full" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Social Links - Desktop (below portrait) */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <a 
                  href="https://github.com/ShufanSun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 pointer-events-auto"
                >
                  <img src={github} alt="GitHub" className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:ssun329@wisc.edu"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 pointer-events-auto"
                >
                  <img src={email} alt="Email" className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              className="w-1 h-96 green-gradient"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <div className="flex sm:hidden flex-col items-start gap-4 w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <motion.h1 
                className={`${styles.heroHeadText} text-green text-3xl tracking-wider sm:text-sm`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Hi, I am <span className="text-[#77C193]">Shufan</span>,
              </motion.h1>
              <motion.p 
                className={`${styles.heroSubText} mt-2 text-white-100 text-sm tracking-wide sm:text-xs`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                a Computer Sciences & 4D Art Studio senior at UW-Madison.
                <br className="sm:block hidden" />
                My academic interests lie in
                <br className="sm:block hidden" /> <span className="text-[#77C193]">3D reconstruction</span> at the intersection of <span className="text-[#77C193]">machine learning</span>, <span className="text-[#77C193]">computer vision</span>, and <span className="text-[#77C193]">animation</span>.
              </motion.p>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-start gap-5">
            <motion.h1 
              className={`${styles.heroHeadText} text-green text-2xl tracking-wider sm:text-xxl`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Hi, I am <span className="text-[#77C193]">Shufan</span>,
            </motion.h1>
            <motion.p 
              className={`${styles.heroSubText} mt-2 text-white-100 text-sm tracking-wide sm:text-xl `}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              a Computer Sciences & 4D Art Studio senior at UW-Madison.
              <br className="sm:block hidden" />
              My academic interests lie in
              <br className="sm:block hidden" /> <span className="text-[#77C193]">3D reconstruction</span> at the intersection of <span className="text-[#77C193]">graphics</span>, <span className="text-[#77C193]">computer vision</span>, and <span className="text-[#77C193]">machine learning</span>.
            </motion.p>
          </div>
        </div>
      </motion.div>
      <ComputersCanvas className="absolute inset-0 mt-[-200px] z-0" />
    </section>
  );
}

export default Hero;