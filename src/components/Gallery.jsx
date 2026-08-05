import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { gallery } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { Col } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { SectionWrapper } from '../hoc';
import { Carousel } from 'react-bootstrap';
import ImageSlider from './ImageSlider.jsx';
import Fireflies from './Fireflies';

const GalleryCard = ({ img, index, expandedIndex, handleImageClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
      <motion.div
        className={`gallery-col border border-black/10 dark:border-[#a2dbb8] p-5 rounded-2xl mb-6 transition-transform duration-300 hover:scale-105 ${expandedIndex === index ? 'expanded' : ''}`}
        onClick={() => imageLoaded && handleImageClick(index)}
        initial={{ opacity: 0 }}
        animate={imageLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: imageLoaded ? index * 0.1 : 0,
          ease: "easeOut"
        }}
        style={{ cursor: imageLoaded ? 'pointer' : 'default' }}
      >
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className='w-full h-64 bg-gray-800 rounded-xl animate-pulse' />
        )}
        
        <img 
          src={img.image} 
          alt={img.name} 
          className={`gallery-image ${!imageLoaded ? 'hidden' : ''}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {imageLoaded && (
          <>
            <p> </p>
            <p className="font-serif mt-2 flex flex-wrap gap-2 text-black dark:text-white">{img.name}</p>
            <div className="image-description">
              <p className="font-serif mt-0 text-black/70 dark:text-secondary text-[17px] max-w-3xl leading-[30px]">
                {img.description}
                {img.link && (
  <>
    {" "}
    <a
      href={img.link}
      target="_blank"
      rel="noopener noreferrer"
      className="font-serif text-black dark:text-white hover:underline text-[13px]"
    >
      [View publication →]
    </a>
  </>
)}

              </p>
            </div>

            <div className="mt-0 flex flex-wrap gap-2">
              {img.tags &&
                img.tags.map((tag) => (
                  <p key={`${tag.name}`} className={`font-serif text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
            </div>
          </>
        )}
      </motion.div>
    </Col>
  );
};

const Gallery = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandedImageLoaded, setExpandedImageLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);  // Add this

  const handleImageClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
    setExpandedImageLoaded(false);
    setCurrentSlide(0);  // Reset to first slide
  };

  const handleBackgroundClick = () => {
    setExpandedIndex(null);
    setExpandedImageLoaded(false);
    setCurrentSlide(0);  // Reset
  };

  const goToPrevSlide = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
  };

  const goToNextSlide = () => {
    if (expandedIndex !== null && gallery[expandedIndex].isCarousel) {
      setCurrentSlide(prev => 
        Math.min(gallery[expandedIndex].carouselImages.length - 1, prev + 1)
      );
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Header — full-bleed green bar with fireflies, matching Publications. */}
      <div className='relative left-1/2 -translate-x-1/2 w-screen -mt-6 pt-16 pb-10 min-h-[170px] flex items-center justify-center bg-[#001005]'>
        <Fireflies />
        <h2 className={`${styles.sectionHeadText} text-center relative z-10`}>Art Gallery</h2>
      </div>

      {/* White band: white in light mode, transparent (page green) in dark. */}
      <div className='relative left-1/2 -translate-x-1/2 w-screen bg-white dark:bg-transparent text-black dark:text-white-100 mt-0 -mb-10 sm:-mb-16 py-12 flex-1 flex flex-col'>
        <div className='max-w-7xl mx-auto px-6 sm:px-16 w-full'>
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} gutter="16px">
            <p
              variants={fadeIn('', '', 0.1, 1)}
              className="font-serif mt-0 text-black/70 dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              As an art enthusiast, I enjoy exploring form, light, and space through a variety of media. These pieces reflect the same curiosity about perception and geometry that drives my research in 3D reconstruction. Click on each piece to see the creative process behind the scenes!
            </p>

            <Masonry className="gallery-row mt-5 ">
              {gallery.map((img, index) => (
                <GalleryCard
                  key={index}
                  img={img}
                  index={index}
                  expandedIndex={expandedIndex}
                  handleImageClick={handleImageClick}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>

      {expandedIndex !== null && createPortal(
        <motion.div
          className="expanded-image-overlay"
          onClick={handleBackgroundClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <button
            className="lightbox-close"
            onClick={handleBackgroundClick}
            aria-label="Close"
          >
            &times;
          </button>
          <motion.div
            className="expanded-image"
            onClick={stopPropagation}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            {/* Loading placeholder for expanded view */}
            {!expandedImageLoaded && (
              <div className='w-full h-96 bg-gray-800 rounded-xl animate-pulse' />
            )}

            {gallery[expandedIndex].isCarousel ? (
  <div className="carousel-container-with-controls">
    {/* Carousel */}
    <Carousel
      interval={null}
      indicators={false}  // Disable default indicators, we'll make custom ones
      controls={false}
      fade={true}
      activeIndex={currentSlide}
      onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
      className={`custom-carousel ${!expandedImageLoaded ? 'hidden' : ''}`}
    >
      {gallery[expandedIndex].carouselImages.map((image, i) => (
        <Carousel.Item key={i}>
          <div className="carousel-image-container">
            <img
              src={image}
              alt={`Slide ${i + 1}`}
              className="carousel-centered-image"
              onLoad={() => i === 0 && setExpandedImageLoaded(true)}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>

    {/* Custom controls: Arrow + Dots + Arrow */}
    <div className="custom-carousel-controls">
      {/* Previous Arrow */}
      <button 
        className={`carousel-arrow ${currentSlide === 0 ? 'disabled' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          if (currentSlide > 0) goToPrevSlide();
        }}
        disabled={currentSlide === 0}
        aria-label="Previous image"
      >
        ‹
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {gallery[expandedIndex].carouselImages.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Next Arrow */}
      <button 
        className={`carousel-arrow ${currentSlide === gallery[expandedIndex].carouselImages.length - 1 ? 'disabled' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          if (currentSlide < gallery[expandedIndex].carouselImages.length - 1) {
            goToNextSlide();
          }
        }}
        disabled={currentSlide === gallery[expandedIndex].carouselImages.length - 1}
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  </div>
) : (
  <motion.img
    src={gallery[expandedIndex].image}
    alt={gallery[expandedIndex].name}
    className={`lightbox-img ${!expandedImageLoaded ? 'hidden' : ''}`}
    onLoad={() => setExpandedImageLoaded(true)}
  />
)}

            {/* Caption */}
            {expandedImageLoaded && (
              <div className="lightbox-caption">
                <h3 className="font-serif lightbox-title">{gallery[expandedIndex].name}</h3>
                {gallery[expandedIndex].description && (
                  <p className="font-serif lightbox-desc">{gallery[expandedIndex].description}</p>
                )}
                {gallery[expandedIndex].link && (
                  <a
                    href={gallery[expandedIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif lightbox-link"
                  >
                    View publication →
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>,
        document.body
      )}

    </>
  );
};

export default SectionWrapper(Gallery, 'gallery', 'flex-1 flex flex-col');