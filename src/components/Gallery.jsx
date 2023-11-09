import React from 'react';
import { gallery } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { Container,Col,Row } from 'react-bootstrap';

import { SectionWrapper } from '../hoc';
// Import your custom CSS file

const Gallery = () => {
  return (
    <>
    <Container className='gallery-container'>
      <motion.div>
        <p className={styles.sectionSubText}>Artworks</p>
        <h2 className={styles.sectionHeadText}>Gallery</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As an art enthusiast, I created a lot of artworks in different media.
      </motion.p>
      
        <div className='gallery-row'>
          {gallery.map((img, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3} >
            <div className='gallery-col' >
              <img src={img.image} alt={img.name} className='gallery-image' />
            </div></Col>
          ))}
        </div>
      </Container>
    </>
  );
}
{/* <Row>
        {filteredBuddies.map((cat) => (
          <Col key={cat.id} xs={12} sm={6} md={6} lg={4} xl={4}>
             <div className="cat-summary-container"> 
              <BadgerBudSummary  cat={cat} onSave={handleSaveBuddy}/>
              {/* <BadgerBasketSummary cat={cat} onSave={handleSaveBuddy} savedBuddyIds={savedBuddyIds} /> */}
      //       </div>
      //     </Col>
      //   ))}
      // </Row>)} */}

export default SectionWrapper(Gallery, "about");
