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

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };