import {
    backend,
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
    upenn_logo,
    ssec_logo,
    maya,
    wentai,
    wiscECE,
    wid,
    illumination,
    carrent,
    lane,
    baking,
    baking2,

    girl1,
    DogWeave,
    Harmony,
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
    },
   
    {
        title: "Graphics",
    },
    {
        title: "Vision",
    },
    {
        title: "Physics",
    },
];

// Defined once and referenced from every tab it belongs to, so the tabs can't drift apart.
const dogWeave = {
  id: 1,
  title: "DogWeave: High-Fidelity 3D Canine Reconstruction from a Single Image via Normal Fusion and Conditional Inpainting",
  authors: [
    { name: "Shufan Sun", bold: true, marks: "*†" },
    { name: "Chenchen Wang", marks: "*" },
    { name: "Zongfu Yu", italic: true }
  ],
  venue: "Under Review",
  for_Cover: true,
  description: "An SDF-based framework for reconstructing high-fidelity 3D quadruped models from a single RGB image using style supervision. ",
  image: DogWeave,
  links: {
    // project: "https://example.com/project",
    // pdf: "https://example.com/paper.pdf",
    arxiv: "https://arxiv.org/abs/2603.07441",
    // code: "https://github.com/example"
  }
};

const harmony = {
  id: 2,
  title: "HARMONY: Hierarchical Agentic Reasoning for MONocular Image-to-Scene Synthesis",
  authors: [
    { name: "Shufan Sun", bold: true, marks: "*†" },
    { name: "Chen Wang", marks: "*" },
    { name: "Jiatao Gu", italic: true },
    { name: "Lingjie Liu", italic: true }
  ],
  venue: "Under Review",
  for_Cover: true,
  description: "A hierarchical chain-of-thought framework that leverages both agentic reasoning and visual geometry foundation. ",
  image: Harmony,
  links: {
    project: "https://cwchenwang.github.io/harmony/",
    // pdf: "https://example.com/paper.pdf",
    arxiv: "https://arxiv.org/abs/2603.07441",
    code: "https://github.com/example"
  }
};

const publicationsData = {
  "All": [
    // harmony,
    dogWeave
  ],
  "Conference": [],
  "Journal": [],
  "Preprint": [
    // harmony,
    dogWeave,
  ]
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
        
        title: "Research Intern @ SIG Lab",
        company_name: "Supervised by Prof. Lingjie Liu, UPenn CIS",
        icon: upenn_logo,
        iconBg: "#ffffff",
        date: "March 2026 – Current",
        points: [
       ],
    },
      {
        
        title: "Conferred B.S. Degree in Computer Sciences",
        company_name: "University of Wisconsin-Madison",
        icon: SSEC,
        iconBg: "#ffffff",
        date: "Aug 2022 – Dec 2025",
        points: [
                  ],
    },
    {
        
        title: "Undergraduate researcher @ Yu's Group",
        company_name: "Supervised by Prof. Zongfu Yu, ECE Dept @UW-Madison",
        icon: wiscECE,
        iconBg: "#ffffff",
        date: "Jun 2024 – Dec 2025",
        points: [
        ],
    },
    {
        title: "Charles H. Holbrow Memorial Scholarship Recepient",
        company_name: "",
        icon: SSEC,
        iconBg: "#ffffff",
        date: "Apr 2024",
        points: [
         ],
    },

    {
        title: "Java Developing Engineer",
        company_name: "Wingtech Inc., Shanghai",
        icon: wentai,
        iconBg: "#ffffff",
        date: "May 2023 - Aug 2023",
        points: [
         
        ],
    },
    {
        title: "Undergraduate Research Scholar",
        company_name: "Supervised by Prof Sanjay Limaye, Space Science and Engineering Center @ UW-Madison",
        icon: ssec_logo,
        iconBg: "#FFFFFF",
        date: "Sep 2022 - May 2023",
        points: [
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
       description:"This is my attempt of modeling a whole human that matches anatomy and topology principles ground up from a cube",
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
        description:"This is a piece of mural of approximately 3m*2m in size. It took 25h of work in total.",
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
    description:"As the name indicates, he looks like a mango.",
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
   description:"It feels spring.",
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
    description:"I love staring at reflections of trees on water surface",
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
        source_code_link:"https://github.com/GefeiSHEN/NeuroBrush",
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

];

export { services, technologies, experiences, testimonials, projects, gallery,publicationsData };