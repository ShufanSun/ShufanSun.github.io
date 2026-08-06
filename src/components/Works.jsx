import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { youtube } from "../assets";
import { itch } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ComputersCanvas } from './canvas';
import Meteors from './Meteors';
import '../index.css';

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    category,
    source_code_link,
    youtube_link,
    itch_link,
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const openYouTubeLink = () => {
        if (youtube_link) {
            window.open(youtube_link, "_blank");
        }
    };

    return (
        <motion.div
            className='border border-black/10 dark:border-[#a2dbb8] p-5 rounded-2xl sm:w-[360px] w-full transition-transform duration-300 hover:scale-105'
            initial={{ opacity: 0,}}
            animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, }}
            transition={{ 
                duration: 0.6, 
                delay: imageLoaded ? index * 0.15 : 0,
                ease: "easeOut"
            }}
        >
            <div className='relative w-full h-[230px]'>
                {/* Loading placeholder */}
                {!imageLoaded && (
                    <div className='w-full h-full bg-gray-800 rounded-2xl animate-pulse' />
                )}
                
                <img
                    src={image}
                    alt='project_image'
                    className={`w-full h-full object-cover rounded-2xl ${!imageLoaded ? 'hidden' : ''}`}
                    onLoad={() => setImageLoaded(true)}
                />
                
                {imageLoaded && (
                    <>
                        <div className='absolute top-0 left-0 m-3'>
                            <span className='font-serif bg-primary text-white px-2 py-1 rounded-md'>{category}</span>
                        </div>
                        
                        {/* YouTube link */}
                        {youtube_link && (
                            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                                <div
                                    onClick={openYouTubeLink}
                                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                                >
                                    <img
                                        src={youtube}
                                        alt='YouTube'
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div>
                            </div>
                        )}
                        
                        {/* Itch link */}
                        {itch_link && (
                            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                                <div
                                    onClick={() => window.open(itch_link, "_blank")}
                                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                                >
                                    <img
                                        src={itch}
                                        alt='Itch'
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div>
                            </div>
                        )}
                        
                        {/* GitHub link */}
                        {source_code_link && (
                            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                                <div
                                    onClick={() => window.open(source_code_link, "_blank")}
                                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                                >
                                    <img
                                        src={github}
                                        alt='source code'
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {imageLoaded && (
                <>
                    <div className='mt-2'>
                        <h3 className='font-serif text-black dark:text-white font-bold text-[20px]'>{name}</h3>
                        <p className='font-serif mt-0 text-black/70 dark:text-secondary text-[14px]'>{description}</p>
                    </div>

                    <div className='mt-1 flex flex-wrap gap-2'>
                        {tags.map((tag) => (
                            <p
                                key={`${name}-${tag.name}`}
                                className={`font-serif text-[14px] ${tag.color}`}
                            >
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </>
            )}
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            {/* Title + 3D model share one dark green band (both themes): the
                glowing particle model needs a dark backdrop, so this stays dark
                with white title text even though the rest of the page is white
                in light mode. */}
            <div className='relative left-1/2 -translate-x-1/2 w-screen -mt-6 bg-[#001005] overflow-hidden'>
                {/* Occasional meteor shower behind the title and model. */}
                <Meteors />

                <div className='pt-16 pb-0 flex items-center justify-center'>
                    <h2 className={`${styles.sectionHeadText} text-center relative z-10`}>Projects</h2>
                </div>

                {/* Negative top margin pulls the model up toward the title; the
                    canvas's empty upper region simply tucks behind the title text. */}
                <div className='relative z-0 -mt-[130px] h-[340px] sm:h-[420px]'>
                    <ComputersCanvas />
                </div>
            </div>

            {/* White band: white in light mode, transparent (page green) in dark. */}
            <div className='relative left-1/2 -translate-x-1/2 w-screen bg-white dark:bg-transparent text-black dark:text-white-100 mt-0 -mb-10 sm:-mb-16 py-12 flex-1 flex flex-col'>
                <div className='max-w-7xl mx-auto px-6 sm:px-16 w-full'>
                    <div className='w-full flex'>
                        <p
                            variants={fadeIn("", "", 0.1, 1)}
                            className='font-serif mt-0 text-black/70 dark:text-secondary text-[17px] max-w-3xl leading-[30px]'
                        >
                            Recently, I've been exploring how modern graphics pipelines can be enhanced with emerging technologies. I enjoy experimenting with the fundamentals behind these systems and understanding how they behave. Here are a few personal projects where I tested ideas and created some visually interesting results.

                        </p>
                    </div>

                    <div className='mt-5 flex flex-wrap gap-7 justify-center'>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={`project-${index}`}
                                index={index}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Works, "experience", "flex-1 flex flex-col");