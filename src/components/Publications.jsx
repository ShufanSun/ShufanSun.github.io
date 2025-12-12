import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { DogWeave } from "../assets";
import { publicationsData } from '../constants';

const PublicationCard = ({ publication, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      key={publication.id}
      className='rounded-xl p-4 transition-all duration-300 w-full max-w-5xl border border-[#a2dbb8] hover:scale-[1.02]'
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
            <h3 className='font-serif text-white text-[20px] font-bold mb-0'>
              {publication.title}
            </h3>

            {/* Authors */}
            <div className='font-serif text-white-100 mb-0 leading-relaxed text-[16px]'>
              {publication.authors.map((author, index) => (
                <span key={index} className="relative inline-block mr-1">
                  <span className={`${author.highlight ? 'text-secondary' : ''} ${author.bold ? 'font-semibold' : ''}`}>
                    {author.name}
                  </span>
                  <span className="absolute top-0 right-0 text-[10px] translate-y-[-0.2em] text-secondary">
                    {author.firstAuthor ? '1' : ''}{author.advisor ? '†' : ''}
                  </span>
                  {index < publication.authors.length - 1 && ", "}
                </span>
              ))}
            </div>

            {/* Venue */}
            <div className='font-serif text-secondary italic mb-4 text-[16px] font-semibold'>
              {publication.venue}
            </div>

            {/* Links */}
            <div className='font-serif flex flex-wrap gap-2'>
              {publication.links.project && (
                <a 
                  href={publication.links.project}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-secondary hover:text-white font-medium transition-colors text-[14px]'
                >
                  project page
                </a>
              )}
              {publication.links.pdf && <span className='text-secondary'>/</span>}
              {publication.links.pdf && (
                <a 
                  href={publication.links.pdf}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-secondary hover:text-white font-medium transition-colors text-[14px]'
                >
                  pdf
                </a>
              )}
              {publication.links.arxiv && <span className='text-secondary'>/</span>}
              {publication.links.arxiv && (
                <a 
                  href={publication.links.arxiv}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-secondary hover:text-white font-medium transition-colors text-[14px]'
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
                  className='text-white hover:text-secondary font-medium transition-colors text-[14px]'
                >
                  code
                </a>
              )}
            </div>

            {/* Description */}
            <p className='font-serif text-white-100 leading-relaxed text-[14px] tracking-wider'>
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
      {/* Header */}
      <div>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Publications
        </h2>
      </div>

      {/* Tabs */}
      <div className='mt-10 flex flex-wrap justify-center gap-4 mb-10'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-serif px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === tab
                ? 'bg-tertiary text-white shadow-lg'
                : 'text-secondary hover:text-white'
            }`}
            style={activeTab === tab ? { background: 'rgba(1, 60, 2, 0.6)' } : {}}
          >
            {tab}
            {publicationsData[tab].length > 0 && (
              <span className='ml-2 text-xs px-2 py-1 rounded-full bg-white/10'>
                {publicationsData[tab].length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Publications List */}
      <div className='mt-10 flex flex-col items-center gap-6'>
        {publicationsData[activeTab].length > 0 ? (
          publicationsData[activeTab].map((publication, index) => (
            <PublicationCard 
              key={publication.id} 
              publication={publication} 
              index={index}
            />
          ))
        ) : (
          <div className='text-center py-16 rounded-2xl w-full max-w-5xl' style={{ background: 'rgba(1, 60, 2, 0.5)' }}>
            <p className='font-serif text-secondary text-[16px]'>No publications in this category yet.</p>
          </div>
        )}
      </div>

      {/* Footer Note */}
      <div className='mt-12 p-6 rounded-2xl max-w-5xl mx-auto'>
        <p className='font-serif text-white-100 text-[14px]'>
          <span className='text-secondary'>†</span> indicates Advisor
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Publications, "publications");