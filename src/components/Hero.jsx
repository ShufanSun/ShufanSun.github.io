import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import myPortrait from "../assets/portrait_head.jpeg";
import { ComputersCanvas } from './canvas';
import github from "../assets/github.png";
import email from "../assets/email.png";
import scholar from "../assets/google_scholar_logo.png";
import linkedin from "../assets/linkedin_logo.png";
import hoverPortrait from "../assets/portrait_hover.jpg";


const SCHOLAR_URL = "https://scholar.google.com/citations?hl=en&user=OccNUoAAAAAJ";
const LINKEDIN_URL = "https://www.linkedin.com/in/shufan-sun-071bb0211/";

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint is 640px
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full h-auto mx-auto -mt-5 pt-6">
      <motion.div
        className={`${styles.paddingX} relative max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5 z-10`}
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Image on the top for small screens - icons on the right */}
        <motion.div 
          className="sm:hidden w-full flex flex-row items-center gap-4 mb-0"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="relative w-36 h-36 rounded-full flex-shrink-0 pointer-events-auto"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="absolute inset-0 rounded-full bg-white p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={hovered ? hoverPortrait : myPortrait}
                  alt="My Portrait" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          
          {/* Social Links - Mobile (right side of portrait) */}
          <motion.div 
            className="flex flex-col gap-3"
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a 
              href="https://github.com/ShufanSun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full overflow-hidden bg-black hover:bg-black/90 flex items-center justify-center pointer-events-auto"
            >
              <img src={github} alt="GitHub" className="w-full h-full object-contain" />
            </a>
            <a
              href="mailto:shufans@engineering.upenn.edu"
              className="w-8 h-8 rounded-full overflow-hidden bg-black hover:bg-black/90 flex items-center justify-center pointer-events-auto"
            >
              <img src={email} alt="Email" className="w-full h-full object-contain scale-125" />
            </a>
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
              className="w-8 h-8 rounded-full overflow-hidden bg-black hover:bg-black/90 flex items-center justify-center pointer-events-auto"
            >
              <img src={scholar} alt="Google Scholar" className="w-full h-full object-cover rounded-full" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full overflow-hidden bg-black hover:bg-black/90 flex items-center justify-center pointer-events-auto"
            >
              <img src={linkedin} alt="LinkedIn" className="w-full h-full object-cover rounded-full" />
            </a>
          </motion.div>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
          {/* Image and bar on the left for wide screens */}
          <motion.div 
            className="hidden sm:flex flex-row items-start gap-5"
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-36 h-36 rounded-full pointer-events-auto"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="absolute inset-0 rounded-full bg-white p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={hovered ? hoverPortrait : myPortrait}
                      alt="My Portrait" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
              
              {/* Social Links - Desktop (below portrait) */}
              <motion.div 
                className="flex gap-4"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <a 
                  href="https://github.com/ShufanSun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full overflow-hidden bg-black hover:bg-black/90 flex items-center justify-center pointer-events-auto"
                >
                  <img src={github} alt="GitHub" className="w-full h-full object-contain" />
                </a>
                <a
                  href="mailto:shufans@engineering.upenn.edu"
                  className="w-8 h-8 rounded-full overflow-hidden bg-black hover:bg-black/90 flex items-center justify-center pointer-events-auto"
                >
                  <img src={email} alt="Email" className="w-full h-full object-contain scale-125" />
                </a>
                <a
                  href={SCHOLAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar"
                  className="w-8 h-8 rounded-full overflow-hidden bg-black hover:bg-black/90 flex items-center justify-center pointer-events-auto"
                >
                  <img src={scholar} alt="Google Scholar" className="w-full h-full object-cover rounded-full" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full overflow-hidden bg-black hover:bg-black/90 flex items-center justify-center pointer-events-auto"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-full h-full object-cover rounded-full" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* mobile */}
          {/* mobile */}
<div className="flex sm:hidden flex-col items-start gap-3 w-full pointer-events-auto">
  <div className="flex flex-col items-start gap-3 w-full">
    <motion.h1 
      className={`${styles.heroHeadText} text-3xl tracking-wider font-serif text-white-100`}
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      Shufan Sun
    </motion.h1>
    <motion.p 
      className={`${styles.heroSubText} mt-2 font-serif text-[#a2dbb8] text-sm tracking-wide leading-tight`}
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
    >
      I am currently a research assistant at <span className="font-serif text-white-100">University of Pennsylvania SIG Lab</span>, supervised by <a href="https://lingjie0206.github.io/" target="_blank" rel="noopener noreferrer" className="font-serif text-white-100 underline underline-offset-2 hover:text-[#a2dbb8] transition-colors">Prof. Lingjie Liu</a>. Previously I received a B.S. degree in Computer Sciences from <span className="font-serif text-white-100">University of Wisconsin-Madison</span>, advised by <a href="https://engineering.wisc.edu/directory/profile/zongfu-yu/" target="_blank" rel="noopener noreferrer" className="font-serif text-white-100 underline underline-offset-2 hover:text-[#a2dbb8] transition-colors">Prof. Zongfu Yu</a>.<span className="block mt-4 font-serif">My research interests lie in <span className="font-serif text-white-100">3D/4D reconstruction</span> at the intersection of <span className="font-serif text-white-100">computer graphics</span>, <span className="font-serif text-white-100">computer vision</span>, and <span className="font-serif text-white-100">machine learning</span>. I am particularly interested in how visual perception can guide machine intelligence toward a deeper understanding of the world and its faithful, high-fidelity simulation.</span>
    </motion.p>
  </div>
</div>

{/* large window */}
<div className="hidden sm:flex flex-col  gap-0 pointer-events-auto">
<motion.h1
  className='font-serif font-black tracking-wider text-white-100 lg:text-[36px] sm:text-[30px] text-[24px] lg:leading-[56px] mt-1'
  initial={false}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
>
  Shufan Sun
  <span className="text-[1em] ml-2 font-chinese-longcang">
    孙菽繁
  </span>
</motion.h1>
  <motion.p 
    className={`${styles.heroSubText} mt-2 font-serif text-[#a2dbb8] text-xl tracking-wide leading-tight`}
    initial={false}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 1.2, duration: 1 }}
  >
     I am currently a research assistant at <span className="font-serif text-white-100">University of Pennsylvania SIG Lab</span>, supervised by <a href="https://lingjie0206.github.io/" target="_blank" rel="noopener noreferrer" className="font-serif text-white-100 underline underline-offset-2 hover:text-[#a2dbb8] transition-colors">Prof. Lingjie Liu</a>. Previously I received a B.S. degree in Computer Sciences from <span className="font-serif text-white-100">University of Wisconsin-Madison</span>, advised by <a href="https://engineering.wisc.edu/directory/profile/zongfu-yu/" target="_blank" rel="noopener noreferrer" className="font-serif text-white-100 underline underline-offset-2 hover:text-[#a2dbb8] transition-colors">Prof. Zongfu Yu</a>.<span className="block mt-4 font-serif">My research interests lie in <span className="font-serif text-white-100">3D/4D reconstruction</span> at the intersection of <span className="font-serif text-white-100">computer graphics</span>, <span className="font-serif text-white-100">computer vision</span>, and <span className="font-serif text-white-100">machine learning</span>. I am particularly interested in how visual perception can guide machine intelligence toward a deeper understanding of the world and its faithful, high-fidelity simulation.</span>
  </motion.p>
</div>
        </div>
      </motion.div>

      {/* 3D model on the hero — same scale/framing as Projects, height trimmed
          to crop the empty space below the figure. */}
      <div className="relative z-0 w-full -mt-[130px] h-[330px] sm:h-[370px]">
        <ComputersCanvas />
      </div>

    </section>
  );
}

export default Hero;