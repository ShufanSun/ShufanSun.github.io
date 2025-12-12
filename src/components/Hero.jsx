import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import myPortrait from "../assets/portrait_head.jpeg";
import { ComputersCanvas } from './canvas';
import github from "../assets/github.png";
import email from "../assets/email.png";
import m1 from "../assets/mango1.jpg";


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
    <section className="relative w-full h-auto mx-auto mt-0 pt-16">
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

          {/* mobile */}
          {/* mobile */}
<div className="flex sm:hidden flex-col items-start gap-3 w-full">
  <div className="flex flex-col items-start gap-3 w-full">
    <motion.h1 
      className={`${styles.heroHeadText} text-green text-3xl tracking-wider font-serif text-[#a2dbb8]`}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      Shufan Sun
    </motion.h1>
    <motion.p 
      className={`${styles.heroSubText} mt-2 font-serif text-white-100 text-sm tracking-wide leading-tight`}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
    >
      I am currently a fourth-year Computer Sciences major at <span className="font-serif text-[#a2dbb8]">University of Wisconsin-Madison</span>, advised by <span className="font-serif text-[#a2dbb8]">Prof. Zongfu Yu</span>. My research interests lie in <span className="font-serif text-[#a2dbb8]">3D reconstruction</span> at the intersection of <span className="font-serif text-[#a2dbb8]">graphics</span>, <span className="font-serif text-[#a2dbb8]">computer vision</span>, and <span className="font-serif text-[#a2dbb8]">machine learning</span>, creating tools that make realistic digital content more accessible and support production animation and modeling workflows.
    </motion.p>
  </div>
</div>

{/* large window */}
<div className="hidden sm:flex flex-col  gap-0">
<motion.h1 
  className={`${styles.heroHeadText} tracking-wider font-serif text-[#a2dbb8]`}
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
>
  Shufan Sun
  <span className="text-[0.6em] ml-2 font-chinese-longcang">
    孙菽繁
  </span>
</motion.h1>
  <motion.p 
    className={`${styles.heroSubText} mt-2 font-serif text-white-100 text-xl tracking-wide leading-tight`}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 1.2, duration: 1 }}
  >
    I am currently a fourth-year Computer Sciences major at <span className="font-serif text-[#a2dbb8]">University of Wisconsin-Madison</span>, advised by <span className="font-serif text-[#a2dbb8]">Prof. Zongfu Yu</span>. My research interests lie in <span className="font-serif text-[#a2dbb8]">3D reconstruction</span> at the intersection of <span className="font-serif text-[#a2dbb8]">graphics</span>, <span className="font-serif text-[#a2dbb8]">computer vision</span>, and <span className="font-serif text-[#a2dbb8]">machine learning</span>, creating tools that make realistic digital content more accessible and support production animation and modeling workflows.
  </motion.p>
</div>
        </div>
      </motion.div>

      {/* ComputersCanvas with conditional positioning */}
      {/* <div className={`relative w-full ${
        isMobile 
          ? 'bottom-[-100px] h-[700px] '  // Mobile: push down below text
          : 'bottom-[50px] lg:bottom-[-0px] h-[500px] '  // Desktop: original settings
      }`}> */}
      <div
  className={`w-full ${
    isMobile 
      ? "mt-60 bottom-[-100px] h-[600px]"   // ↓ adjust mobile spacing here
      : "mt-0 h-[600px]"   // ↓ adjust desktop spacing here
  }`}
>
        <ComputersCanvas />
      </div>
    </section>
  );
}

export default Hero;