import React from "react";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import {SectionWrapper} from '../hoc'
import Hero from "./Hero";

const ServiceCard = ({ index,title,icon}) => {
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'

            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className='green rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <img
                        src={icon}
                        alt='web-development'
                        className='w-16 h-16 object-contain'
                    />

                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
       
        )
}
const About = () => {
    return (
        <>
            <Hero />

            <motion.div>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={ styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'

            >
                Applying multimedia to create contents is one of my greatest interests. I enjoy art crafting, coding, and the cross-section of both.
                I'm on my way getting more expertise in more visualization tools such as Maya, python, js, etc. Let's work together to bring ideas to life:D
            </motion.p>
            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                    ))}
            </div>

        </>
    );
};

export default SectionWrapper(About,"about");