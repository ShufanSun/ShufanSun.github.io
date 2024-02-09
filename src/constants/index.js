import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    matlab,
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
    greenbird,
    venus,
    venus1,
    venus2,
    venus3,
    venus4,
    corn,
    d1,
    puddle,
    birdy,
    forest2,
    fox,
    parrot,
    vanita,
    wall,
    deer,
    forest,
    crane,
    man1,
    man2,
    man3,
    man4,
    man5,
    man6,man7,
    man,
    haunted,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    
    {
        id: "work",
        title: "Experience",
    },
    {
        id:"experience",
        title:"Coding Projects",
    },
    {
        id:"gallery",
        title:"Art Gallery",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Animator",
        icon: web,
    },
   
    {
        title: "Frontend",
        icon: mobile,
    },
    {
        title: "VR",
        icon: backend,
    },
    {
        title: "Painter",
        icon: creator,
    },
];


const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "Matlab",
        icon: matlab,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Photoshop",
        icon: ps,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        title: "Maya",
        icon: maya,
    },
    
    {
        name: "Node JS",
        icon: nodejs,
    },

    {
        name: "Python",
        icon:python,
    },
    {
        name: "git",
        icon: git,
    },
    
    
];

const experiences = [
    {
        title: "Website creation and design assistant",
        company_name: "Part-Time Student Job",
        icon: SSEC,
        iconBg: "#ffffff",
        date: "December 2023 - Present",
        points: [
            "Used SquareSpace to help an Anthropology professor with her website for UX UI and marketing",
        ],
    },

    {
        title: "Virtual Environment Group",
        company_name: "Under the Guidance of Professor Kevin Ponto and Bryce Sprecher",
        icon: SSEC,
        iconBg: "#ffffff",
        date: "August 2023 - Present",
        points: [
            "Optimized the game asset models and created the workflow for rendering and retopology",
            "Worked with Zbrush and Maya to decimate the size of the models down while maintaining similar looks",
            "3D normal map generations",
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
        company_name: "Wentai Technology - Shanghai",
        icon: wentai,
        iconBg: "#ffffff",
        date: "May 2023 - August 2023",
        points: [
            "Developing and maintaining web applications using java for Springboot API server and postman for testing.",
            "Collaborating with cross-functional teams including frontends, OAs, and verification to provide high-quality to-B IT service.",
            "Participating in code reviews and providing constructive feedback to other developers.",

        ],
    },
    {
        title: "Undergraduate Research Scholar",
        company_name: "Space Science and Engineering Center, UW-Madison",
        icon: SSEC,
        iconBg: "#FFFFFF",
        date: "Sep 2022 - May 2023",
        points: [
            "Performed data analysis using Jupyter Notebook to read and process local files.",
            "Interpolated Venus occultation data in different dimensions and generated graphs.",
            "Did independent research activities under Dr. Sanjay Limaye's mentoring.",
            "Presented the poster at 2023 Undergraduate Symposium.",
        ],
    },
    {
        title: "Journal Contributer",
        company_name: "Illumination Journal",
        icon: illumination,
        iconBg: "#000000",
        date: "May 2023",
        points: [
            "Selected as one of finalists to be published in the Visual Art category for Illumination Journal 2023 edition.",
            "Contributed oil painting 'Autumn in Leaves' and watercolor painting'Green Bird in Cherry Blossom'",
            "Attended distribution party and received a first print copy",

        ],
    },
    // {
    //     title: "Wall painter",
    //     company_name: "My dad's office",
    //     icon: creator,
    //     iconBg: "#ffffff",
    //     date: "August 2022",
    //     points: [
    //         "This is something interesting that I've done for fun",
    //         "There was a big blank wall there and I just painted it using a little brush",
    //         "Here's the working process if you're curious: https://www.instagram.com/p/CnROC5jBhPZ/",

    //     ],
    // },
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
        image: venus,
       name: "Astrobiology Magazine Front Cover - Life on Venus?",
       description:"Original artwork by Shufan Sun, with concept guided by Dr. Sanjay Limaye.",
       isCarousel: true,
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
   ],
      },
{
      image: greenbird,
     name: "Green Bird in Cherry Blossoms",
     description:"This is a painting selected to be published on Illumination Magazine for visual art genre.",
     isCarousel: false,
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
    image: crane,
    name:"Egrets",
    isCarousel: false,
    description:"I like birds.",
   tags: [
    {
        name: "Oil Painting",
        color: "blue-text-gradient",
    },
    {
        name: "Birds",
        color: "green-text-gradient",
    },
    {
        name: "March 2023",
        color: "pink-text-gradient",
    },
],
},
{
    image: wall,
    isCarousel: false,
    name:"My dad's office wall",
    description:"25h work in total, finished within 4 days",
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
    image: parrot,
    isCarousel: false,
    name:"Mango",
    description:"He's my pet lovebird Mango, as the name indicates.",
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
    description:"Concept of a forest scene.",
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
    image: forest,
    isCarousel: false,
    name:"Forest Mural",
    description:"My dad's office again, free labor",
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
            name: "Summer 2022",
            color: "pink-text-gradient",
        },
    ],
},
{
    image: fox,
    isCarousel: false,
    name:"Autumn in Leaves",
    description:"Published on Illumination Art Journel May 2023",
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
    image: deer,
    isCarousel: false,
    name:"Deer in Forest",
    description:"Concept work",
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
// {
//     image: birdy,
//     isCarousel: false,
//     // name:"",
//     description:"CG concept",
//     tags: [
//         {
//             name: "Gouache",
//             color: "blue-text-gradient",
//         },
//         {
//             name: "Dec 2022",
//             color: "pink-text-gradient",
//         },
//     ],
// },
];

const projects = [
    {
        name: "3D Game Asset Model Optimization",
        description:
            'THis project showcases a workflow to reduce the size of the model from 30M polygons to 100 polygons.',
            
        tags: [
            {
                name: "Maya",
                color: "blue-text-gradient",
            },
            {
                name: "baking",
                color: "green-text-gradient",
            },
            {
                name: "Dec 2023",
                color: "pink-text-gradient",
            },
            {
                name: "VR",
                color: "blue-text-gradient",
            },
        ],
        image: baking2,
        // source_code_link: "https://github.com/ShufanSun/TrafficDetection",
    },
    {
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
                name: "MadHacks 2023",
                color: "pink-text-gradient",
            },
            {
                name: "Yolo v8",
                color: "blue-text-gradient",
            },
        ],
        image: lane,
        source_code_link: "https://github.com/ShufanSun/TrafficDetection",
    },

    
    {
        name: "My Personal Website",
        description:
            "My github personal website that lists my coding projects and artworks, it's like a resume but better looking:)",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "html/css",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        // source_code_link: "https://github.com/ShufanSun/ShufanSun.github.io",
    },
    {
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
                color: "pink-text-gradient",
            },
        ],
        image: corn,
        source_code_link: "https://github.com/ShufanSun/Corn-Processing",
    },
    {
        name: "Finding Maggie",
        description:
            "This is an adventure game that mixes 2D and 3D levels for the user to interact with the self-designed virtual environments.",
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
        // source_code_link: "https://www.youtube.com/watch?v=UtZiMp_eG90",
    },
    {
        name: "Haunted Housekeeping",
        description:
            "This is a 2D top-down game that make you the house that helps the builder clean without getting killed by the monsters.",
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
        // source_code_link: "https://savagebananas7405.itch.io/haunted-housekeeping",
    },
    {
        name: "Alpaca Run!",
        description:
            'This is a 2d shooter unity game in c#, the player is able to control the alpaca to spit at different enemies. You can download or play the game online here: https://sofine.itch.io/alpaca-run',
            
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
        source_code_link: "https://github.com/ShufanSun/alpaca_run_2d_game",
    },
];

export { services, technologies, experiences, testimonials, projects, gallery };