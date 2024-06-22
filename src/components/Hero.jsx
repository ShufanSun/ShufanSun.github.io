import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import myPortrait from "../assets/mygreenhead.png";
import { ComputersCanvas } from './canvas';
import github from "../assets/github.png";
import email from "../assets/email.png";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-0 pt-16"> {/* Added padding top to create space */}
      <motion.div 
        className={`${styles.paddingX} absolute inset-0 top-[60px] max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Image on the top for small screens */}
        <motion.div 
          className="sm:hidden w-full flex  mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="relative w-36 h-36 rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-300 to-blue-100 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src={myPortrait} alt="My Portrait" className="w-full h-full object-cover rounded-full" />

              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
          {/* Image and bar on the left for wide screens */}
          <motion.div 
            className="hidden sm:flex flex-row items-start gap-5" // Changed items-center to items-start
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative w-36 h-36 rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-300 to-blue-100 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src={myPortrait} alt="My Portrait" className="w-full h-full object-cover rounded-full" />
                  
                </div>
              </div>
              
            </div>
            
        
            <motion.div 
              className="w-1 h-96 green-gradient" // Increased height to 96px
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <div className="flex sm:hidden flex-col items-start gap-4 w-full"> {/* Increased gap between lines */}
            <div className="flex flex-col items-start gap-4 w-full"> {/* Increased gap between lines */}
              <motion.h1 
                className={`${styles.heroHeadText} text-green text-3xl tracking-wider sm:text-sm`} // Responsive text size
                initial={{ y: 10, opacity: 0 }} // Adjusted initial y position
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Hi, I am <span className="text-[#77C193]">Shufan</span>,
              </motion.h1>
              <motion.p 
                className={`${styles.heroSubText} mt-2 text-white-100 text-sm tracking-wide sm:text-xs`} // Responsive text size
                initial={{ y: 10, opacity: 0 }} // Adjusted initial y position
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                A current Computer Sciences & 4D Art Studio sophomore at UW-Madison.
                <br className="sm:block hidden" />
                My academic interests lay in
                <br className="sm:block hidden" /> <span className="text-[#77C193]">computer vision</span>, <span className="text-[#77C193]">machine learning</span>, <span className="text-[#77C193]">computer graphics</span>, <span className="text-[#77C193]">VR</span>, and <span className="text-[#77C193]">animation</span>.
              </motion.p>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-start gap-5">
            <motion.h1 
              className={`${styles.heroHeadText} text-green text-2xl tracking-wider sm:text-xxl`} // Responsive text size
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Hi, I am <span className="text-[#77C193]">Shufan</span>,
            </motion.h1>
            <motion.p 
              className={`${styles.heroSubText} mt-2 text-white-100 text-sm tracking-wide sm:text-xl `} // Responsive text size
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              A current Computer Sciences & 4D Art Studio sophomore at UW-Madison.
              <br className="sm:block hidden" />
              My academic interests lay in
              <br className="sm:block hidden" /> <span className="text-[#77C193]">computer vision</span>, <span className="text-[#77C193]">machine learning</span>, <span className="text-[#77C193]">computer graphics</span>, <span className="text-[#77C193]">VR</span>, and <span className="text-[#77C193]">animation</span>.
            </motion.p>
          </div>
        </div>
      </motion.div>
      <ComputersCanvas className="absolute inset-0 mt-[-200px]" /> {/* Adjusted margin-top to lift the canvas */}
    </section>
  );
}

export default Hero;
