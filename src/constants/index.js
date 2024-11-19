import {
    // Abilities
    mobile,
    backend,
    linux,
    web,
    // Tech Stack
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    threejs,
    git,
    figma,
    docker,
    // companies
    nologo,
    sitin,
    hydrogn,
    anser,
    // testimonials
    pier,
    luis,
    eltit,
    jean,
    // projects
    amongus,
    memory,
    aliscraper,
    breakout,
    linkmee
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Linux Administrator",
        icon: linux,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Hydrogn - Freelance Group",
        icon: hydrogn,
        iconBg: "#383E56",
        date: "Mar 2016 - Current",
        points: [
            "Created customized software solutions for clients, emphasizing high-quality web applications.",
            "Participated in all stages of the software development lifecycle as a freelance developer.",
            "Designed and implemented databases using technologies like MongoDB and MySQL.",
            "Developed attractive and functional user interfaces using JavaScript and frameworks like ReactJS.",
            "Utilized version control tools like Git and collaborated on platforms like GitHub.",
            "Worked on ServiceNow projects, configuring the platform and developing custom processes using HTML5, CSS3, and JavaScript.",
            "Collaborated closely with clients to understand their needs and goals, ensuring perfect alignment of solutions.",
            "Translated business logic into effective technical solutions, delivering successful results to clients.",
            "Maintained focus on delivering efficient and high-quality solutions as a Full Stack developer.",
            "Strived to exceed expectations and deliver scalable, efficient, and easy-to-maintain software products."
        ],
    },
    {
        title: "ServiceNow Analyst/Developer",
        company_name: "Sitin SpA",
        icon: sitin,
        iconBg: "#E6DEDD",
        date: "Mar 2020 - Mar 2022",
        points: [
            "Implemented enhancements across various areas and modules of the ServiceNow platform.",
            "Developed complex logic for SLA modules to align with real service level agreements.",
            "Streamlined Service Request and Incident Management processes through JavaScript coding and ServiceNow APIs.",
            "Improved functionality and efficiency of Catalog Client Scripts and Business Rules.",
            "Facilitated communication and coordination between local and U.S. teams for platform standardization and automation.",
            "Led and trained the local ServiceNow support team.",
            "Collaborated with cross-functional teams to implement Event Management and CMDB processes.",
            "Optimized efficiency by integrating automation into the Change Management process.",
            "Translated customer requests into Service Request catalog items and record producers.",
            "Developed and automated complex reports using the Report module and Performance Analytics.",
            "Implemented customized survey logics to gather valuable feedback."
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Simobi Ltda",
        icon: nologo,
        iconBg: "#E6DEDD",
        date: "Oct 2016 - Oct 2017",
        points: [
            "Specialized in implementing biometric systems logic for enterprise management and security as a Backend Developer.",
            "Focused on using technologies like .NET and web languages to develop robust and efficient solutions.",
            "Developed the necessary logic to integrate and manage biometric systems, such as fingerprint readers or facial recognition, ensuring secure and reliable solutions for businesses.",
            "Designed and implemented identification, authentication, and verification algorithms, as well as the management of biometric user information.",
            "Managed Linux servers, including configuration, monitoring, and maintenance, to ensure optimal availability and performance."
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Anser S.A",
        icon: anser,
        iconBg: "#383E56",
        date: "Jul 2014 - Aug 2016",
        points: [
            "Played a key role as a Backend Developer in developing web-based systems, focusing on designing, maintaining, and implementing databases and query logic for efficient system operation.",
            "Developed and deployed services on servers, ensuring application availability and optimal performance.",
            "Collaborated with front-end teams to create visually appealing and user-friendly interfaces, emphasizing the importance of seamless integration between the back-end and front-end for a smooth user experience.",
            "Collaborated with cross-functional teams from various departments, gaining valuable knowledge and skills in implementing business logic into systems.",
            "Adapted software solutions to meet specific business requirements based on the needs and challenges of each department.",
            "Utilized technologies including JavaScript, HTML5, CSS3, Git & GitHub, Linux Systems (Debian-based), MySQL databases, Bootstrap, and Python."
        ],
    },
    {
        title: "I.T Support",
        company_name: "GLOK S.A",
        icon: nologo,
        iconBg: "#E6DEDD",
        date: "Mar 2012 - Jun 2014",
        points: [
            "Managed and provided support for Linux and Windows Server environments, ensuring the smooth operation of services.",
            "Developed bash and Python scripts to automate tasks, improving efficiency and productivity.",
            "Provided remote technical support to non-technical users, effectively resolving issues and delivering excellent customer service.",
            "Demonstrated autonomy in managing multiple tasks and maintaining high-quality standards in customer support.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Jonathan gave me in just a few days the best website possible. It was such a pleasure to work with him.",
        name: "Jampier Alburqueque",
        designation: "CEO",
        company: "Gasfiteria V&P",
        image: pier,
    },
    {
        testimonial:
            "Jonathan & his team created the best UX & UI for my platform. They were a key factor for this project.",
        name: "Luis Arriagada",
        designation: "CEO",
        company: "CEOSIM",
        image: luis,
    },
    {
        testimonial:
            "I'm glad I chose Jonathan and his team to create my medical platform. We started with the UX & UI. Now we're starting the development.",
        name: "Ignacio Eltit",
        designation: "Doctor",
        company: "Self-employed",
        image: eltit,
    },
    {
        testimonial:
            "Whenever I need a professional backend developer, I know Jonathan is the right guy. He always gives me the best results.",
        name: "Jean Roa",
        designation: "Frontend Dev",
        company: "Self-employed",
        image: jean,
    },
];

const projects = [
    {
        name: "AliScraper",
        description:
            "AliExpress Web Scraper built with JS technologies. It can look for any product on AliExpress and scrape its relevant information and export it to a CSV or Excel file.",
        tags: [
            {
                name: "nodejs",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "cheerio",
                color: "pink-text-gradient",
            },
            {
                name: "axios",
                color: "orange-text-gradient",
            },
        ],
        image: aliscraper,
        source_code_link: "https://github.com/jonathanbc10/AliExScraper",
    },
    {
        name: "Memory Game",
        description:
            "JavaScript based Classic Memory game with animated css background that can be played in the browser. No packages needed. Can you match them all?",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: memory,
        source_code_link: "https://github.com/jonathanbc10/MemoryGame",
    },
    {
        name: "Among Us CSS Art",
        description:
            "This code generates an Among Us character using HTML and CSS. The character consists of a body, a visor, a hat, legs, a back, and a shadow.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: amongus,
        source_code_link: "https://github.com/jonathanbc10/AmongUsArt",
    },
    {
        name: "Breakout",
        description:
            "classic arcade game where the player controls a paddle at the bottom of the screen and must use it to bounce a ball against a wall of bricks at the top of the screen, destroying them and earning points.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
        ],
        image: breakout,
        source_code_link: "https://github.com/jonathanbc10/Breakout",
    },
    {
        name: "Linkmee",
        description:
            "With linkmee, you can create a personalized page with your social media profiles, website, and any other important links you want to share.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
            {
                name: "vite-plugin-svgr",
                color: "green-text-gradient",
            },
        ],
        image: linkmee,
        source_code_link: "https://github.com/jonathanbc10/linkmee",
    },
];

export { services, technologies, experiences, testimonials, projects };