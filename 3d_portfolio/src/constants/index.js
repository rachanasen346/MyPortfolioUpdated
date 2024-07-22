import { mindcoder, techsaga, codebetter, ciss } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
   
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

    {
        imageUrl: tailwindcss,
        name: "Java",
        type: "Programming Language",
    },

    {
        imageUrl: tailwindcss,
        name: "DSA",
        type: "Data Structure & Algorithems",
    },
    
];

export const experiences = [

    {
        title: "MERN Stack",
        company_name: "Mind Coders",
        icon: mindcoder,
        iconBg: "#a2d2ff",
        date: "May 2024 - Present",
        points: [
            "Engaged in training sessions for MERN Development, gaining valuable skills."
        ],
    },

    {
        title: "iOS Developer",
        company_name: "Tech Saga Corporeations",
        icon: techsaga,
        iconBg: "#b7e4c7",
        date: "August 2023 - Jan 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

    {
        title: "iOS Developer",
        company_name: "Ciber Impuls Software Solutions",
        icon: ciss,
        iconBg: "#fbc3bc",
        date: "May 2022 -  March 2022",
        points: [
            "Developing and maintaining iOS applications using Swift programming and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design.",
        ],
    },
    {
        title: "iOS Intern",
        company_name: "Code Better Institute",
        icon: codebetter,
        iconBg: "#accbe1",
        date: "jan 2022 - April 2022",
        points: [
            "Engaged in training sessions for iOS development, gaining valuable skills",
            "Learning Swift Programming Language for developing iOS Apps",
            "Learn iOS Design And Develpoment",
            "Implimenting Gmail Authontication , phone Authontication by using Firebase",
            "Learn Json Parshing Technique.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    // {
    //     name: 'GitHub',
    //     iconUrl: github,
    //     link: 'https://github.com/YourGitHubUsername',
    // },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rachana-sen/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Speedow User',
        description: 'Developed a iOS application which is a ecomerce-app for online shoping purpose',
        // link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];