import React, { useState } from "react";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { services, publicationsData } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from '../hoc'
import Hero from "./Hero";
import { presentLinks } from "./Publications";
import { useIsDark } from "./ThemeToggle";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <div className='w-[250px] sm:w-[250px] xs:w-[200px]'>
            <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
                <div className='green rounded-[20px] py-3 px-12 min-h-[72px] flex justify-evenly items-center flex-col'>
                    <h3 className='font-serif text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    )
}

// Academic service — distinct from the `services` constant, which drives the interest tabs above.
const academicServices = [
    { role: "Reviewer", subLines: ["Journal: ToG"] },
    { role: "Teaching Assistant", subLines: ["CIS 5800 Machine Perception (Spring 2026)"] },
];

const FeaturedPublicationCard = ({ publication, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <motion.div 
            key={publication.id}
            className='rounded-xl p-4 sm:p-5 transition-all duration-300 w-full bg-white border border-black/10 dark:bg-transparent dark:border-[#a2dbb8] mb-6 hover:scale-[1.02]'
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
                        <h3 className='font-serif text-black dark:text-white text-[18px] sm:text-[20px] font-bold mb-0'>
                            {publication.title}
                        </h3>

                        {/* Authors */}
                        <div className='text-black dark:text-white-100 mb-0 leading-relaxed text-[14px] sm:text-[16px]'>
                            {publication.authors.map((author, idx) => {
                                const marks = author.marks ?? `${author.firstAuthor ? '1' : ''}${author.advisor ? '†' : ''}`;
                                return (
                                    <span key={idx} className="mr-1">
                                        <span className={`font-serif ${author.bold ? 'font-semibold dark:text-white' : 'dark:text-secondary'} ${author.italic ? 'italic' : ''}`}>
                                            {author.name}
                                        </span>
                                        {marks && (
                                            <sup className="font-serif text-[10px] text-black dark:text-secondary">{marks}</sup>
                                        )}
                                        {idx < publication.authors.length - 1 && ","}
                                    </span>
                                );
                            })}
                        </div>

                        {/* Venue */}
                        <div className='font-serif text-black dark:text-secondary italic mb-1 text-[14px] sm:text-[16px] font-semibold'>
                            {publication.venue}
                        </div>

                        {/* Links — separators go between links only, never leading */}
                        <div className='flex flex-wrap gap-2'>
                            {presentLinks(publication.links).map((link, i) => (
                                <React.Fragment key={link.label}>
                                    {i > 0 && (
                                        <span className='font-serif text-black dark:text-secondary'>/</span>
                                    )}
                                    <a
                                        href={link.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='font-serif text-black dark:text-secondary hover:text-black/60 dark:hover:text-white font-medium transition-colors text-[14px]'
                                    >
                                        {link.label}
                                    </a>
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Description */}
                        <p className='font-serif text-black dark:text-secondary leading-relaxed text-[13px] sm:text-[14px] tracking-wider'>
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
            {/* Hero + interest cards — always dark green (no light mode). */}
            <div className='relative left-1/2 -translate-x-1/2 w-screen bg-[#001005] text-white-100'>
                <Hero />

                <div className='max-w-7xl mx-auto px-6 sm:px-16 pb-3'>
                    <div className='relative z-10 -mt-2 flex flex-wrap gap-10 justify-evenly'>
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} index={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Publications + Services — light-mode switchable. */}
            <div className='relative left-1/2 -translate-x-1/2 w-screen bg-white text-black dark:bg-transparent dark:text-white-100 -mb-10 sm:-mb-16'>
                <div className='max-w-7xl mx-auto px-6 sm:px-16 pt-12 pb-12'>
                    {/* Featured Publications */}
                    {featuredPublications.length > 0 && (
                        <div className="mb-10 px-1">
                            <h2
                                className="text-black dark:text-white text-[20px] font-serif sm:text-[25px] font-bold mb-1"
                            >
                                Publications
                            </h2>

                            <p className='font-serif text-black/70 dark:text-white-100 text-[13px] mb-4'>
                                <span className='font-serif'>*</span> denotes equal contribution
                                <span className='mx-2 text-black/30'>|</span>
                                <span className='font-serif'>†</span> corresponding author
                            </p>

                            {featuredPublications.map((publication, index) => (
                                <FeaturedPublicationCard
                                    key={publication.id}
                                    publication={publication}
                                    index={index}
                                />
                            ))}
                        </div>
                    )}

                    {/* Services */}
                    <div className='mb-5 px-1'>
                        <h2 className='text-black dark:text-white text-[20px] font-serif sm:text-[25px] font-bold mb-2'>
                            Services
                        </h2>

                        {academicServices.map((item) => (
                            <div key={item.role} className='mb-2'>
                                <p className='font-serif text-black dark:text-white-100 text-[14px] sm:text-[16px] leading-relaxed pl-5'>
                                    <span className='font-serif font-bold'>{item.role}</span>
                                    {item.detail}
                                </p>
                                {item.subLines?.map((line) => (
                                    <p
                                        key={line}
                                        className='font-serif text-black dark:text-white-100 text-[14px] sm:text-[16px] leading-relaxed pl-10'
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");