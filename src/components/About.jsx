import React, { useState } from "react";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { services, publicationsData } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from '../hoc'
import Hero from "./Hero";
import Contact from "./Contact";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className='w-[250px] sm:w-[250px] xs:w-[200px]'>
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
                    className='green rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col'
                >
                    <h3 className='font-serif text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const FeaturedPublicationCard = ({ publication, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <motion.div 
            key={publication.id}
            className='rounded-xl p-4 sm:p-5 transition-all duration-300 w-full border border-[#a2dbb8] mb-6 hover:scale-[1.02]'
            initial={{ opacity: 0 }}
            animate={imageLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ 
                duration: 0.6, 
                delay: imageLoaded ? index * 0.15 : 0,
                ease: "easeOut"
            }}
        >
            <div className='flex flex-col md:flex-row gap-6'>
                {/* Thumbnail */}
                <div className='flex-shrink-0 relative'>
                    {/* Loading placeholder */}
                    {!imageLoaded && (
                        <div className='w-full md:w-80 h-48 bg-gray-800 rounded-xl animate-pulse' />
                    )}
                    
                    <img 
                        src={publication.image} 
                        alt={publication.title}
                        className={`w-full md:w-80 h-48 object-cover rounded-xl ${!imageLoaded ? 'hidden' : ''}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>

                {/* Content - only show when image loaded */}
                {imageLoaded && (
                    <div className='flex-1 flex flex-col'>
                        {/* Title */}
                        <h3 className='font-serif text-white text-[18px] sm:text-[20px] font-bold mb-2'>
                            {publication.title}
                        </h3>

                        {/* Authors */}
                        <div className='text-white-100 mb-2 leading-relaxed text-[14px] sm:text-[16px]'>
                            {publication.authors.map((author, idx) => (
                                <span key={idx} className="relative inline-block mr-1">
                                    <span className={`${author.highlight ? 'text-secondary font-serif' : 'font-serif'} ${author.bold ? 'font-semibold font-serif' : 'font-serif'}`}>
                                        {author.name}
                                    </span>
                                    <span className="font-serif absolute top-0 right-0 text-[10px] translate-y-[-0.2em] text-secondary">
                                        {author.firstAuthor ? '1' : ''}{author.advisor ? '†' : ''}
                                    </span>
                                    {idx < publication.authors.length - 1 && ", "}
                                </span>
                            ))}
                        </div>

                        {/* Venue */}
                        <div className='font-serif text-secondary italic mb-3 text-[14px] sm:text-[16px] font-semibold'>
                            {publication.venue}
                        </div>

                        {/* Links */}
                        <div className='flex flex-wrap gap-2 mb-3'>
                            {publication.links.project && (
                                <a 
                                    href={publication.links.project}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-serif text-secondary hover:text-white font-medium transition-colors text-[14px]'
                                >
                                    project page
                                </a>
                            )}
                            {publication.links.pdf && <span className='font-serif text-secondary'>/</span>}
                            {publication.links.pdf && (
                                <a 
                                    href={publication.links.pdf}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-serif text-secondary hover:text-white font-medium transition-colors text-[14px]'
                                >
                                    pdf
                                </a>
                            )}
                            {publication.links.arxiv && <span className='font-serif text-secondary'>/</span>}
                            {publication.links.arxiv && (
                                <a 
                                    href={publication.links.arxiv}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-serif text-secondary hover:text-white font-medium transition-colors text-[14px]'
                                >
                                    arXiv
                                </a>
                            )}
                            {publication.links.code && <span className='text-secondary'>/</span>}
                            {publication.links.code && (
                                <a 
                                    href={publication.links.code}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-serif text-white hover:text-secondary font-medium transition-colors text-[14px]'
                                >
                                    code
                                </a>
                            )}
                        </div>

                        {/* Description */}
                        <p className='font-serif text-white-100 leading-relaxed text-[13px] sm:text-[14px] tracking-wider'>
                            {publication.description}
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const About = () => {
    // Get featured publications
    const featuredPublications = publicationsData.All.filter(pub => pub.for_Cover === true);

    return (
        <>
            <Hero />

            <div className='mt-0 flex flex-wrap gap-10 justify-evenly'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

            {/* Featured Publications */}
            {featuredPublications.length > 0 && (
                <div className="max-w-7xl mx-auto mt-20 mb-5 px-1">
                    <h2 
                        className="text-white text-[20px] font-serif sm:text-[25px] font-bold mb-2"
                    >
                        Publications
                    </h2>
                    
                    {featuredPublications.map((publication, index) => (
                        <FeaturedPublicationCard 
                            key={publication.id}
                            publication={publication}
                            index={index}
                        />
                    ))}
                </div>
            )}

            <Contact/>
        </>
    );
};

export default SectionWrapper(About, "about");