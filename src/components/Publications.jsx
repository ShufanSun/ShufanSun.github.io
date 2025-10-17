import React, { useState } from 'react';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// Sample publication data - replace with your actual data
const publicationsData = {
  "All": [
    {
      id: 1,
      title: "DogWeave",
      authors: [
        { name: "Shufan Sun", bold: true, firstAuthor: true },
        { name: "Chenchen Wang", highlight: true },
        { name: "Zongfu Yu", highlight: true,bold: true }
      ],
      venue: "CVPR 2026 Under Preparation",
      description: "Generating hierarchical 3D part decomposition for open-world 3D shapes.",
      image: "https://via.placeholder.com/300x200",
      links: {
        project: "https://example.com/project",
        // pdf: "https://example.com/paper.pdf",
        // arxiv: "https://arxiv.org/abs/example",
        // code: "https://github.com/example"
      }
    },
  ],
  "Conference": [
    // {
    //   id: 1,
    //   title: "PartField: Learning 3D Feature Fields for Part Segmentation and Beyond",
    //   authors: [
    //     { name: "Minghua Liu", highlight: true },
    //     { name: "Mikaela Angelina Uy", highlight: true },
    //     { name: "Donglai Xiang" },
    //     { name: "Hao Su" },
    //     { name: "Sanja Fidler" },
    //     { name: "Nicholas Sharp" },
    //     { name: "Jun Gao", bold: true }
    //   ],
    //   venue: "ICCV 2025",
    //   description: "Generating hierarchical 3D part decomposition for open-world 3D shapes.",
    //   image: "https://via.placeholder.com/300x200",
    //   links: {
    //     project: "https://example.com/project",
    //     pdf: "https://example.com/paper.pdf",
    //     arxiv: "https://arxiv.org/abs/example",
    //     code: "https://github.com/example"
    //   }
    // }
  ],
  "Journal": [],
  "Preprint": []
};

const Publications = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Conference"
    // , "Journal"
    ,"Preprint"
  ];

  return (
    <>
      {/* Header */}
      <div className='pt-20'>
        <p className={`${styles.sectionSubText} text-center`}>
          My Research Contributions
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Publications.
        </h2>
      </div>

      {/* Tabs */}
      <div className='mt-10 flex flex-wrap justify-center gap-4 mb-10'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
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
      <div className='mt-10 flex flex-col items-center'>
        {publicationsData[activeTab].length > 0 ? (
          publicationsData[activeTab].map((publication) => (
            <div 
              key={publication.id}
              className='rounded-2xl p-6 transition-all duration-300 w-full max-w-5xl mb-6'
              style={{ background: 'rgba(1, 60, 2, 0.5)' }}
            >
              <div className='flex flex-col md:flex-row gap-6'>
                {/* Thumbnail */}
                <div className='flex-shrink-0'>
                  <img 
                    src={publication.image} 
                    alt={publication.title}
                    className='w-full md:w-64 h-48 object-cover rounded-xl'
                  />
                </div>

                {/* Content */}
                <div className='flex-1 flex flex-col'>
                  {/* Title */}
                  <h3 className='text-white text-[24px] font-bold mb-3'>
                    {publication.title}
                  </h3>

                  {/* Authors */}
                  <div className='text-white-100 mb-2 leading-relaxed text-[14px]'>
                    
                    {publication.authors.map((author, index) => (
                      <span key={index}>
                        <span className={`${author.highlight ? 'text-secondary' : ''} ${author.bold ? 'font-semibold' : ''}`}>
                          {author.name}
                          {author.firstAuthor && <span className='text-secondary'>†</span>}
                        </span>
                        {index < publication.authors.length - 1 && ", "}
                      </span>
                    ))}

                  </div>

                  {/* Venue */}
                  <div className='text-secondary italic mb-4 text-[16px] font-semibold'>
                    {publication.venue}
                  </div>

                  {/* Links */}
                  <div className='flex flex-wrap gap-3 mb-4'>
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
                  <p className='text-white-100 leading-relaxed text-[14px] tracking-wider'>
                    {publication.description}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='text-center py-16 rounded-2xl w-full max-w-5xl' style={{ background: 'rgba(1, 60, 2, 0.5)' }}>
            <p className='text-secondary text-[16px]'>No publications in this category yet.</p>
          </div>
        )}
      </div>

      {/* Footer Note */}
      <div className='mt-12 p-6 rounded-2xl max-w-5xl mx-auto' style={{ background: 'rgba(1, 60, 2, 0.5)' }}>
        <p className='text-white-100 text-[14px]'>
          <span className='text-secondary'>*</span> indicates equal contribution
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Publications, "publications");