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
    jobit,
    tripguide,
    greenbird,
    vanita,
    wall,
    deer,
    forest,
    crane,
    haunted,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Java Developer",
        icon: web,
    },
   
    {
        title: "Research",
        icon: mobile,
    },
    {
        title: "VR Creator",
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
        title: "VR research",
        company_name: "Under the Guidance of Professor Kevin Ponto",
        icon: SSEC,
        iconBg: "#ffffff",
        date: "June-Auguest 2023",
        points: [
            "Developed 3D and 2D games on my own for fun",
            "Got extremely interested in user experience design for virtual environments",
            "Gained a lot of insights in VR development",

        ],
    },
    {
        title: "Finding Maggie (an experiment of 2d and 3d game development)",
        company_name: "DS/CS 579 summer 2023",
        icon: SSEC,
        iconBg: "#ffffff",
        date: "June-Auguest 2023",
        points: [
            "Developed 3D and 2D games on my own for fun",
            "Got extremely interested in user experience design for virtual environments",
            "Gained a lot of insights in VR development",

        ],
    },

    {
        title: "Java Developing Engineer",
        company_name: "Wentai Technology - Shanghai",
        icon: wentai,
        iconBg: "#ffffff",
        date: "May 2023 - August 2023",
        points: [
            "Developing and maintaining web applications using java and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
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
            "Links to the artworks:",
            "Fox: https://www.instagram.com/p/CnZul86uQbx/?img_index=1",
            "Bird: https://www.instagram.com/p/Cmt3BRXuGB8/",

        ],
    },
    {
        title: "Wall painter",
        company_name: "My dad's office",
        icon: creator,
        iconBg: "#ffffff",
        date: "August 2022",
        points: [
            "This is something interesting that I've done for fun",
            "There was a big blank wall there and I just painted it using a little brush",
            "Here's the working process if you're curious: https://www.instagram.com/p/CnROC5jBhPZ/",

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
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const gallery = [
{
      image: greenbird,
     name: "Green Bird in Cherry Blossoms",
},
{
    image: vanita,
   name: "Green Bird in Cherry Blossoms",
},
{
    image: crane,
    name:"Egrets",
},
{
    image: wall,
    name:"My dad's office wall",
},
{
    image: forest,
    name:"Forest Mural (My dad's office)",
},
{
    image: deer,
    name:"Deer in Forest",
},
];

const projects = [
    {
        name: "Alpaca Run!",
        description:
            'This is my first 2d shooter unity game in c#, the player is able to control the alpaca to spit at different enemies. You can download or play the game online here: https://sofine.itch.io/alpaca-run',
            
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
        source_code_link: "https://github.com/ShufanSun/ShufanSun.github.io",
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
        source_code_link: "https://www.youtube.com/watch?v=UtZiMp_eG90",
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
        source_code_link: "https://savagebananas7405.itch.io/haunted-housekeeping",
    },
];

export { services, technologies, experiences, testimonials, projects, gallery };