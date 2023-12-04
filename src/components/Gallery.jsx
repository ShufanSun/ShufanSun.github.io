import React, { useState } from 'react';
import { gallery } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { Col } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { SectionWrapper } from '../hoc';
import { Carousel } from 'react-bootstrap';
import ImageSlider from './ImageSlider.jsx';
const Gallery = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleImageClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleBackgroundClick = () => {
    setExpandedIndex(null);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} gutter="16px">
        <motion.div>
          <p className={styles.sectionSubText}>Artworks</p>
          <h2 className={styles.sectionHeadText}>Gallery</h2>
        </motion.div>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As an art enthusiast, I created a lot of artworks in different media.
        </motion.p>

        <Masonry className="gallery-row">
          {gallery.map((img, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
              <div
                className={`gallery-col ${expandedIndex === index ? 'expanded' : ''}`}
                onClick={() => handleImageClick(index)}
              >
                <img src={img.image} alt={img.name} className="gallery-image" />
                <p> </p>
                <p className="mt-4 flex flex-wrap gap-2">{img.name}</p>
                <div className="image-description">
                  <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    {img.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 mb-5">
                  {img.tags &&
                    img.tags.map((tag) => (
                      <p key={`${tag.name}`} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                      </p>
                    ))}
                </div>
              </div>
            </Col>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {expandedIndex !== null && (
  <motion.div className="expanded-image-overlay" onClick={handleBackgroundClick}>
    <div className="expanded-image" onClick={stopPropagation}>
      {gallery[expandedIndex].isCarousel ? (
        <Carousel controls={false}> {/* Set controls prop to false to hide prev/next buttons */}
          {gallery[expandedIndex].carouselImages.map((image, index) => (
            <Carousel.Item key={index} full>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="d-block w-100 h-100" // Set width and height to 100%
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        // Render a single image
        <motion.img
          src={gallery[expandedIndex].image}
          alt={gallery[expandedIndex].name}
          layoutId={`image-${expandedIndex}`}
        />
      )}
      <div className="expanded-details">
        <p className="mt-4">{gallery[expandedIndex].name}</p>
        <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
          {gallery[expandedIndex].description}
        </p>
        <div className="flex flex-wrap gap-2">
          {/* {gallery[expandedIndex].tags &&
            gallery[expandedIndex].tags.map((tag) => (
              <p key={`${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))} */}
        </div>
      </div>
    </div>
  </motion.div>
)}

    </>
  );
};

export default SectionWrapper(Gallery, 'about');
