import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    cplusplus,
    matlab,
    unity,
    wildrobot,
    springboot,
    csharp,
    mathematica,
    nodejs,
    ps,
    git,
    python,
    java,
    SSEC,
    maya,
    wentai,
    illumination,
    carrent,
    lane,
    baking,
    baking2,
    jobit,
    tripguide,
    girl1,
    DogWeave,
    girl2,
    greenbird,
    gb1,
    gb2,
    mural1,
    mural2,
    mural3,
    venus,
    venus1,
    venus2,
    venus3,
    venus4,
    corn,
    dogs,
    d1,
    puddle,
    forest2,
    eyes,
    boat,
    cockatoo,
    fox,
    neurobrush,
    parrot,
    outside,
    vanita,
    wall,
    deer,
    forest,
    man1,
    man2,
    man3,
    man4,
    man5,
    coco,
    man6,man7,
    man,
    haunted,
    haigou1,
    haigou2,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
        path: "/"
    },
     {
        id: "publications",
        title: "Publications",
        path: "/publications"
    },

    {
        id: "work",
        title: "Experience",
        path: "/experience"
    },

    {
        id:"experience",
        title:"Projects",
        path: "/projects"
    },

    {
        id:"gallery",
        title:"Art Gallery",
        path: "/gallery"
    },
    
    // {
    //     id: "contact",
    //     title: "Contact",
    //     path: "/contact"
    // },
];

const services = [
    {
        title: "Animation",
        icon: web,
    },
   
    {
        title: "Graphics",
        icon: mobile,
    },
    {
        title: "Computer Vision",
        icon: backend,
    },
    {
        title: "Painter",
        icon: creator,
    },
];

const publicationsData = {
  "All": [
    {
      id: 1,
      title: "DogWeave: High-Fidelity 3D Canine Reconstruction from a Single Image via Normal Fusion and Conditional Inpainting",
      authors: [
        { name: "Shufan Sun", bold: true, firstAuthor: true },      // mark as first author
        { name: "Chenchen Wang", highlight: true },                // regular co-author
        { name: "Zongfu Yu", highlight: true, bold: true, advisor: true } // mark as advisor
      ],


      venue: "Under Review",
      for_Cover:true,
      description: "An SDF-based framework for reconstructing high-fidelity 3D quadruped models from a single RGB image using style supervision. ",
      image: DogWeave,
      links: {
        // project: "https://example.com/project",
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
const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon:python,
    },
    {
        title: "Maya",
        icon: maya,
    },
    {name: "Mathematica",
    icon: mathematica,},
    {
        name: "git",
        icon: git,
    },
    {
        name:"C++",
        icon:cplusplus,
    },
    // {
    //     name: "c#",
    //     icon: csharp,
    // },
    {
        name: "Matlab",
        icon: matlab,
    },
   
    // {
    //     name: "Photoshop",
    //     icon: ps,
    // },
    // {
    //     name: "Java",
    //     icon: java,
    // },
    // {
    //     name: "React JS",
    //     icon: reactjs,
    // },

    // {
    //     name: "Unity",
    //     icon: unity,
    // },
    // {
    //     name: "Springboot",
    //     icon:springboot,
    // },
    
    
];

const experiences = [
    {
        
        title: "Undergraduate researcher @ Yu's Group",
        company_name: "Supervised by Prof. Zongfu Yu, ECE Dept @UW-Madison",
        icon: SSEC,
        iconBg: "#ffffff",
        date: "June 2024 – December 2025",
        points: [
            // "Developed a seam-aware texturing synthesis framework using geometry-conditioned partial inpainting and adaptive weighted blending to eliminate seams and ensure texture continuity",
            // "Designed a multi-view SDF optimization pipeline that integrates silhouette, depth, normal and texture cues for surface refinement, improving geometric accuracy and ensuring watertight reconstruction under sparse view supervision.",
            // "Optimized signed distance fields via normal-based refinement, improving geometric coherence and preserving high-frequency details such as fur and wrinkles.",
            // "Designed and processed a multimodal paired dataset for training diffusion models on normals and textures derived from synthetic 3D renderings.",
            // "Implemented advanced neural network architectures, including UNet, ControlNet, and IP-Adapter, achieving high-fidelity texture generation with CUDA-based multi-GPU acceleration.",
            // "Applied PyTorch 3D for differentiable mesh processing and perceptual geometry refinement from depth and normal cues. ",
            // "Evaluated Gaussian Splatting for volumetric rendering, comparing mesh-based texture projection approaches for geometric fidelity"
        ],
    },
    {
        title: "Charles H. Holbrow Memorial Scholarship Recepient",
        company_name: "",
        icon: SSEC,
        iconBg: "#ffffff",
        date: "April 2024",
        points: [
         ],
    },

    {
        title: "Undergraduate Researcher @ Virtual Environment Group",
        company_name: "Supervised by Prof. Kevin Ponto and Bryce Sprecher, Wisconsin Institute for Discovery",
        icon: SSEC,
        iconBg: "#ffffff",
        date: "August 2023 - May 2024",
        points: [
            // "Optimized the game asset models and created the workflow for rendering and retopology",
            // "Worked with Zbrush and Maya to decimate the size of the models down while maintaining similar looks",
            // "3D normal map generations",
        ],
    },

    // {
    //     title:"2023 Game Resprawn Jam",
    //     company_name:"UW-Madison",
    //     icon:SSEC,
    //     iconBg:"#ffffff",
    //     date:"October 19th - 26th 2023",
    //     points:[
    //         "Created a 2d top down game in c# and unity called Haunted Housekeeping",
    //         "Collaborated with a group to get the project done for a 7 day game jam",
    //         "THe given topic was 'The world is the main character'",
    //     ]
    // },
    // {
    //     title: "Finding Maggie (an experiment of 2d and 3d game development)",
    //     company_name: "DS/CS 579 summer 2023",
    //     icon: SSEC,
    //     iconBg: "#ffffff",
    //     date: "June-Auguest 2023",
    //     points: [
    //         "Developed 3D and 2D games on my own for fun",
    //         "Got extremely interested in user experience design for virtual environments",
    //         "Gained a lot of insights in VR development",

    //     ],
    // },

    {
        title: "Java Developing Engineer",
        company_name: "Wingtech Inc., Shanghai",
        icon: wentai,
        iconBg: "#ffffff",
        date: "May 2023 - August 2023",
        points: [
         
        ],
    },
    {
        title: "Undergraduate Research Scholar",
        company_name: "Supervised by Prof Sanjay Limaye, Space Science and Engineering Center @ UW-Madison",
        icon: SSEC,
        iconBg: "#FFFFFF",
        date: "Sep 2022 - May 2023",
        points: [
            // "Performed data analysis using Jupyter Notebook to read and process local files.",
            // "Interpolated Venus occultation data in different dimensions and generated graphs.",
            // "Did independent research activities under Dr. Sanjay Limaye's mentoring.",
            // "Presented the poster at 2023 Undergraduate Symposium.",
        ],
    },
   
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    
];

const gallery = [
   
    {
        image: wildrobot,
       name: "Wild Robot",
       description:"Dreamwork Production - inspired, I love the layered lighting interactions.",
       isCarousel: true,
       carouselImages: [
        wildrobot
      ],
       tags: [
        {
            name: "Gouache",
            color: "blue-text-gradient",
        },
        {
            name: "Oct 2024",
            color: "pink-text-gradient",
        },
    ],
    },
     {
        image: coco,
       name: "Coco the Hamster",
       description:"Chubby and enjoys papaya.",
       isCarousel: true,
       carouselImages: [
        coco
      ],
       tags: [
        {
            name: "Gouache",
            color: "blue-text-gradient",
        },
        {
            name: "Sep 2024",
            color: "pink-text-gradient",
        },
    ],
    },
    {
        image: haigou1,
       name: "Seagull",
       description:"A betta fish that loves staring at your eyes",
       isCarousel: true,
       carouselImages: [
        haigou2,
        haigou1
      ],
       tags: [
        {
            name: "Gouache",
            color: "blue-text-gradient",
        },
        {
            name: "Aug 2024",
            color: "pink-text-gradient",
        },
    ],
    },
    {
        image: venus,
       name: "Astrobiology Magazine Front Cover - Life on Venus?",
       description:"Original artwork by Shufan Sun, with concept guided by Dr. Sanjay Limaye.",
       isCarousel: true,
       link: "https://www.liebertpub.com/toc/ast/24/4",
       carouselImages: [
        venus1,
        venus2,
        venus3,
        venus4,
      ],
       tags: [
        {
            name: "Oil Painting",
            color: "blue-text-gradient",
        },
        {
            name: "Affinity Photo 2",
            color: "green-text-gradient",
        },
        {
            name: "Feb 2024",
            color: "pink-text-gradient",
        },
    ],
    },
    {
        image: girl1,
        isCarousel: true,
   carouselImages: [
    girl2,girl1
  ],
        name:"Peaceful Sunset",
        description:"Uncertainty to Illumination",
        tags: [
            {
                name: "Gouache",
                color: "blue-text-gradient",
            },
            {
                name: "Lighting",
                color: "green-text-gradient",
            },
            {
                name: "December 2023",
                color: "pink-text-gradient",
            },
        ],
    },
    {
        image: man,
       name: "My First Game Character",
       description:"This is my attempt of modeling a whole human that matches anatomy and topology principles ground up from a square",
       isCarousel: true,
       carouselImages: [
        man1,
        // man2,
        // man3,
        man4,
        man5,
        man6,
        // man7,
        // Add more carousel images as needed
      ],
       tags: [
       {
           name: "Maya",
           color: "blue-text-gradient",
       },
       {
           name: "Human Topology & Anatomy",
           color: "green-text-gradient",
       },
       {
           name: "Cloth Simulation",
           color: "pink-text-gradient",
       },
       {
        name: "Rigging",
        color: "blue-text-gradient",
    },
    {
        name: "Dec 2023",
        color: "pink-text-gradient",
    },
   ],
      },
      {
        image: vanita,
       name: "Skull Vanita",
       description:"This is my first modeling attempt for human anatomy",
       isCarousel: false,
       tags: [
        {
            name: "Maya Modeling",
            color: "blue-text-gradient",
        },
        {
            name: "Arnold Rendering",
            color: "green-text-gradient",
        },
        {
            name: "November 2023",
            color: "pink-text-gradient",
        },
    ],
    },
    {
        image: wall,
        isCarousel: true,
   carouselImages: [
    mural1,mural3,wall,
  ],
        name:"Mural",
        description:"This is a piece of mural of approximately 3m*2m in size. It took me 25h of work in total(finished within 4 days).",
        tags: [
            {
                name: "Acrylic",
                color: "blue-text-gradient",
            },
            {
                name: "Mural",
                color: "green-text-gradient",
            },
            {
                name: "August 2023",
                color: "pink-text-gradient",
            },
        ],
    },

{
    image: fox,
    isCarousel: false,
    name:"Autumn in Leaves",
    description:"Published on Illumination Art Journel May 2023",
    link:"https://issuu.com/wisconsinunion/docs/illumination_draft_1",
    tags: [
        {
            name: "Oil Painting",
            color: "blue-text-gradient",
        },
        {
            name: "Canvas",
            color: "green-text-gradient",
        },
        {
            name: "Jan 2023",
            color: "pink-text-gradient",
        },
    ],
},
{
    image: parrot,
    isCarousel: false,
    name:"Mango the Lovebird",
    description:"As the name indicates, he looked like a mango.",
    tags: [
        {
            name: "Sketching",
            color: "blue-text-gradient",
        },
        {
            name: "Pet",
            color: "green-text-gradient",
        },
        {
            name: "Jan 2023",
            color: "pink-text-gradient",
        },
    ],
},
{
    image: forest2,
    isCarousel: false,
    name:"Sound of Forest",
    description:"Calmness",
    tags: [
        {
            name: "Gouache",
            color: "green-text-gradient",
        },
        {
            name: "Jan 2023",
            color: "pink-text-gradient",
        },
    ],
},
{
    image: greenbird,
   name: "Green Bird in Cherry Blossoms",
   description:"This is a painting selected to be published on Illumination Magazine for visual art genre.",
   isCarousel: true,
   link:"https://issuu.com/wisconsinunion/docs/illumination_draft_1",
   carouselImages: [
    gb2,gb1,
  ],
   tags: [
   {
       name: "Watercolor",
       color: "blue-text-gradient",
   },
   {
       name: "design",
       color: "green-text-gradient",
   },
   {
       name: "Dec 2022",
       color: "pink-text-gradient",
   },
],
  },
{
    image: forest,
    isCarousel: false,
    name:"Forest Mural",
    description:"That took a lot of paint.",
    tags: [
        {
            name: "Acrylic",
            color: "blue-text-gradient",
        },
        {
            name: "Summer 2022",
            color: "pink-text-gradient",
        },
    ],
},

{
    image: deer,
    isCarousel: false,
    name:"Deer in Forest",
    description:"I love water and reflections.",
    tags: [
        {
            name: "Gouache",
            color: "blue-text-gradient",
        },
        {
            name: "Jan 2023",
            color: "pink-text-gradient",
        },
    ],
},
{
    image: puddle,
    isCarousel: false,
    name:"Underneath the Roof",
    description:"A puddle that looks like ocean",
    tags: [
        {
            name: "Photography",
            color: "blue-text-gradient",
        },
        {
            name: "Photoshop",
            color: "green-text-gradient",
        },
        {
            name: "Feb 2021",
            color: "pink-text-gradient",
        },
    ],
},

];


const projects = [
    {
        name: "NeuroBrush",
        description:
            'Advancing Artistic Creation with Neural Networks through Depth Aware Painting and Color Blending',
        category:'Computer Vision',
        tags: [
            {
                name: "Transformer",
                color: "blue-text-gradient",
            },
            {
                name: "Mixbox",
                color: "green-text-gradient",
            },
            {
                name: "Image Segmentation",
                color: "blue-text-gradient",
            },
            {
                name: "May 2024",
                color: "pink-text-gradient",
            },
        ],
        image: neurobrush,
        source_code_link:"https://gefeishen.github.io/NuroBrush-web/",
    },
    {
        name: "Outside",
        category:'Animation',
        description:
            'A digital artwork that utilized dynamic simulations.',
            
        tags: [
            {
                name: "Maya Keyframe",
                color: "blue-text-gradient",
            },
            {
                name: "Arnold CPU rendering",
                color: "green-text-gradient",
            },
            {
                name: "MASH",
                color: "blue-text-gradient",
            },
            {
                name: "nParticles",
                color: "green-text-gradient",
            },
            {
                name: "nCloth",
                color: "blue-text-gradient",
            },
            {
                name: "fluids",
                color: "green-text-gradient",
            },
            {
                name: "mel script",
                color: "blue-text-gradient",
            },
            {
                name: "April 2024",
                color: "pink-text-gradient",
            },
        ],
        image: outside,
        youtube_link:"https://www.youtube.com/watch?v=ZxqKoFglJ7Y",
    },
    {
        category:'Computer Graphics',
        name: "BoatTracer",
        description:
            '2D research project for CS 559',
            
        tags: [
            {
                name: "Ray Tracing",
                color: "blue-text-gradient",
            },
            {
                name: "Fluid simulation",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "April 2024",
                color: "pink-text-gradient",
            },
        ],
        image: boat,
        source_code_link:"https://github.com/ShufanSun/BoatTracer",
    },
    {
        name: "Blooming",
        category:'Animation',
        description:
            'Parrots are beautiful and full of emotions.',
            
        tags: [
            {
                name: "Maya Keyframe",
                color: "blue-text-gradient",
            },
            {
                name: "Arnold GPU rendering",
                color: "green-text-gradient",
            },
            {
                name: "Deformer",
                color: "blue-text-gradient",
            },
            {
                name: "Normal maps",
                color: "green-text-gradient",
            },
            {
                name: "March 2024",
                color: "pink-text-gradient",
            },
        ],
        image: cockatoo,
        youtube_link:"https://www.youtube.com/watch?v=V4qVRuGTsFw",
    },
    {
        name: "Eyes",
        category:'Animation',
        description:
            'Horror movies are great.',
            
        tags: [
            {
                name: "Maya Keyframe",
                color: "blue-text-gradient",
            },
            {
                name: "Motion Paths",
                color: "green-text-gradient",
            },
            {
                name: "Fluid simulation",
                color: "blue-text-gradient",
            },
            {
                name: "Arnold CPU Rendering",
                color: "green-text-gradient",
            },
            {
                name: "Feb 2024",
                color: "pink-text-gradient",
            },
        ],
        image: eyes,
        youtube_link:"https://youtu.be/10SJ6G6IUjg",
    },
    {category:'Computer Graphics',
        name: "3D Game Asset Model Optimization",
        description:
            'This project showcases a workflow to reduce the size of the photogrammetry model from 30M polygons to 100 polygons with realistic depths.',
            
        tags: [
            {
                name: "Maya baking",
                color: "blue-text-gradient",
            },
            {
                name: "Normal & Displacement maps",
                color: "green-text-gradient",
            },
            {
                name: "Photogrammetry",
                color: "blue-text-gradient",
            },
            {
                name: "Dec 2023",
                color: "pink-text-gradient",
            },
        ],
        image: baking2,
      
    },
    {
        category:'Computer Vision',
        name: "Lane Detector",
        description:
            'The project utilizes a self-trained deep learning model trained by Roboflow to perform real-time lane detection on video feeds.',
            
        tags: [//<a href="https://sofine.itch.io/alpaca-run">here</a>
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "opencv",
                color: "green-text-gradient",
            },
            {
                name: "Yolo v8",
                color: "blue-text-gradient",
            },
            {
                name: "Roboflow",
                color: "green-text-gradient",
            },
            {
                name: "MadHacks 2023",
                color: "pink-text-gradient",
            },
        ],
        image: lane,
        youtube_link:"https://www.youtube.com/watch?v=3T2vT78VVpU",
        source_code_link: "https://github.com/ShufanSun/TrafficDetection",
    },

    
    // {
    //     category:'Web development',
    //     name: "My Personal Website",
    //     description:
    //         "My github personal website that lists my coding projects and artworks, it's like a resume but better looking:)",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "javascript",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "html/css",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "Three.js",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "Vanta.js",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "React",
    //             color: "green-text-gradient",
    //         },
    //     ],
    //     image: jobit,
    //     // source_code_link: "https://github.com/ShufanSun/ShufanSun.github.io",
    // },
    {
        category:'Image Processing',
        name: "Corn Processing",
        description:
            "A project for Image Processing ECE 533. Recognized different patterns of corns.",
        tags: [
            {
                name: "Mathematica",
                color: "blue-text-gradient",
            },
            {
                name: "Image Processing",
                color: "green-text-gradient",
            },
            {
                name: "Filters",
                color: "blue-text-gradient",
            },
            {
                name: "November 2023",
                color: "pink-text-gradient",
            },
        ],
        image: corn,
        source_code_link: "https://github.com/ShufanSun/Corn-Processing",
    },

    {
        name: "Dog Search Gallery",
        description:
            "A frontend searching engine for dog images by breeds.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Fetching",
                color: "green-text-gradient",
            },
            {
                name: "User Interface",
                color: "pink-text-gradient",
            },
        ],
        category:'Frontend',
        image: dogs,
        source_code_link: "https://github.com/ShufanSun/DogSearchGallery",
    },

    {category:'Game dev',
        name: "Finding Maggie",
        description:
            "Adventure game.",
        tags: [
            {
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "c#",
                color: "green-text-gradient",
            },
            {
                name: "2D & 3D platform game design",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        youtube_link: "https://www.youtube.com/watch?v=UtZiMp_eG90",
    },
    {category:'Game dev',
        name: "Haunted Housekeeping",
        description:
            "A 2D top-down horror game.",
        tags: [
            {
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "Photoshop",
                color: "green-text-gradient",
            },
            {
                name: "2D game design",
                color: "pink-text-gradient",
            },
        ],
        image: haunted,
        itch_link: "https://savagebananas7405.itch.io/haunted-housekeeping",
    },
    {category:'Game dev',
        name: "Alpaca Run!",
        description:
            'This is a 2d shooter unity game.',
            
        tags: [//<a href="https://sofine.itch.io/alpaca-run">here</a>
            {
                name: "c#",
                color: "blue-text-gradient",
            },
            {
                name: "unity",
                color: "green-text-gradient",
            },
            {
                name: "graphic design",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        // source_code_link: "https://github.com/ShufanSun/alpaca_run_2d_game",
        itch_link:"https://sofine.itch.io/alpaca-run"
    },
];

export { services, technologies, experiences, testimonials, projects, gallery,publicationsData };