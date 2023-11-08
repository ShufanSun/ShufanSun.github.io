import React from 'react';
import { gallery } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

import {SectionWrapper} from '../hoc'
const Gallery = () => {
  return (
    <>
    <motion.div>
            <p className={styles.sectionSubText}>Artworks</p>
            <h2 className={ styles.sectionHeadText}>Gallery</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'

            >
                As an art enthusiast, I created a lot of artworks in different media.
            </motion.p>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {gallery.map((img) => (
        <div className='w-28 h-28' key={img.name}>
          <img src={img.image} alt={img.name} 
          />
        </div>
      ))}
    </div>
    </>
  );
}

export default SectionWrapper(Gallery,"about");
