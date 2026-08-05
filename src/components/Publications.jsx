import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { DogWeave } from "../assets";
import { publicationsData } from '../constants';
import Fireflies from './Fireflies';

// The links a publication actually has, in display order. Callers render
// separators between entries, so a missing link never leaves a stray "/".
export const presentLinks = (links = {}) =>
  [
    { key: 'project', label: 'Project Page' },
    { key: 'pdf', label: 'Pdf' },
    { key: 'arxiv', label: 'ArXiv' },
    { key: 'code', label: 'Code' },
  ]
    .filter(({ key }) => links[key])
    .map(({ key, label }) => ({ label, href: links[key] }));

const PublicationCard = ({ publication, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      key={publication.id}
      className='rounded-xl p-4 transition-all duration-300 w-full max-w-5xl bg-white border border-black/10 dark:bg-transparent dark:border-[#a2dbb8] hover:scale-[1.02]'
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
            <h3 className='font-serif text-black dark:text-white text-[20px] font-bold mb-0'>
              {publication.title}
            </h3>

            {/* Authors */}
            <div className='font-serif text-black dark:text-white-100 mb-0 leading-relaxed text-[16px]'>
              {publication.authors.map((author, index) => {
                const marks = author.marks ?? `${author.firstAuthor ? '1' : ''}${author.advisor ? '†' : ''}`;
                return (
                  <span key={index} className="font-serif mr-1">
                    <span className={`font-serif ${author.bold ? 'font-semibold dark:text-white' : 'dark:text-secondary'} ${author.italic ? 'italic' : ''}`}>
                      {author.name}
                    </span>
                    {marks && (
                      <sup className="font-serif text-[10px] text-black dark:text-secondary">{marks}</sup>
                    )}
                    {index < publication.authors.length - 1 && ","}
                  </span>
                );
              })}
            </div>

            {/* Venue */}
            <div className='font-serif text-black dark:text-secondary italic mb-1 text-[16px] font-semibold'>
              {publication.venue}
            </div>

            {/* Links — separators go between links only, never leading */}
            <div className='font-serif flex flex-wrap gap-2'>
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
            <p className='font-serif text-black dark:text-secondary leading-relaxed text-[14px] tracking-wider'>
              {publication.description}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Publications = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Conference", "Preprint"];

  return (
    <>
    <div className="flex flex-col flex-1">

      {/* Header — dark green firefly bar in both light and dark mode.
          Negative top margin tucks it under the navbar (no white stripe). */}
      <div className='relative left-1/2 -translate-x-1/2 w-screen -mt-6 pt-16 pb-10 min-h-[170px] flex items-center justify-center bg-[#001005]'>
        <Fireflies />
        <h2 className={`${styles.sectionHeadText} text-center relative z-10`}>
          Publications
        </h2>
      </div>

      {/* White band: everything from the tabs down.
          Full-bleed out of the max-w-7xl SectionWrapper. */}
      <div className='relative left-1/2 -translate-x-1/2 w-screen bg-white text-black dark:bg-transparent dark:text-white-100 mt-0 -mb-10 sm:-mb-16 flex-1'>
        <div className='max-w-7xl mx-auto px-6 sm:px-16 py-12'>
          {/* Tabs */}
          <div className='flex flex-wrap justify-center gap-4 mb-10'>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-serif px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'border border-transparent bg-black/10 text-black dark:bg-[rgba(1,60,2,0.6)] dark:text-white dark:shadow-lg'
                    : 'border border-transparent text-black/60 dark:text-secondary hover:text-black dark:hover:text-white'
                }`}
              >
                {tab}
                {publicationsData[tab].length > 0 && (
                  <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                    activeTab === tab ? 'bg-black/20 dark:bg-white/20' : 'bg-black/10 dark:bg-white/10'
                  }`}>
                    {publicationsData[tab].length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Legend */}
          <p className='font-serif text-black/70 dark:text-white-100 text-[13px] text-center mb-4'>
            <span className='font-serif'>*</span> denotes equal contribution
            <span className='mx-2 text-black/30'>|</span>
            <span className='font-serif'>†</span> Corresponding Author
          </p>

          {/* Publications List */}
          <div className='flex flex-col items-center gap-6'>
            {publicationsData[activeTab].length > 0 ? (
              publicationsData[activeTab].map((publication, index) => (
                <PublicationCard
                  key={publication.id}
                  publication={publication}
                  index={index}
                />
              ))
            ) : (
              <div className='text-center py-16 rounded-2xl w-full max-w-5xl bg-black/5 dark:bg-[rgba(1,60,2,0.5)]'>
                <p className='font-serif text-black/60 dark:text-secondary text-[16px]'>No publications in this category yet.</p>
              </div>
            )}
          </div>

        </div>
      </div>
      </div>
    </>
  );
};

export default SectionWrapper(Publications, "publications", "flex-1 flex flex-col");