import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
      <section className="relative w-full h-screen mx-auto">
          <div className={`${styles.paddingX} absolute inset-0 
top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
              <div className="flex flex-col justify-center items-center mt-5">
                  <div className="w-5 h-5 rounded-full bg-[#10a93d]" />
                  <div className="w-1 sm:h-80 h-40 green-gradient"/>
              </div>
              <div>
                  <h1 className={`${styles.heroHeadText}text-green`}>Hi, I'm<span className="text-[#10a93d]">Sofine</span>
                  </h1>
                  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                      I'm a current computer engineering + CS sophomore at UW-Madison.
                      <br className="sm:block hidden"/>
                      And my academic interests lay in<br className="sm:block hidden" /> developing user interface, animation, VR, graphics and machine learning.
                  </p>
              </div> 
          </div>

          <ComputersCanvas />
      </section>
  )
}

export default Hero