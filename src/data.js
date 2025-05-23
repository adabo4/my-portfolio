const data = [

    {
        name: "Learn English Website",
        img: "./img/english.png",
        link: "https://www.anglictinawelsan.com",
        gitLink: "https://github.com/adabo4/welsan-nginx",
        text: "Welsan is a platform dedicated to English education services. I crafted its frontend using React, ensuring client-side rendering and interaction. For the backend infrastructure, I utilised Express.js to manage API requests, implementing functionalities like newsletter distribution. Deployment was executed on a Virtual Private Server, with Nginx configured as a reverse proxy server. This setup efficiently directs incoming requests to their respective frontend or backend components.",
        skills: {
            react: "React.js",
            express: "Express.js",
            nginx: "Nginx",
            github: "Github Actions"
        },
        info: "info",
        white: true,
        turn: 'left'
    },

    {
        name: "VITALIS",
        img: "./img/lekaren.png",
        link: "https://www.lekarenvitalis.sk",
        gitLink: "https://github.com/adabo4/vitalis-web.git",
        skills: {
            react: "React.js",
            github: "Github Actions"
        },
        info: "info",
        text: `I participated in designing and developing a pharmacy website. It is a single page application where I learnt the basics 
              of how React works. I helped to add features using React libraries such as 'Lightgallery.js' for the Leaflet Gallery component; 'react-slick' for the Logoslider and 'React-GA' for Google Analytics.
              I studied the documentation for these libraries and worked to adapt them to best fit the needs of our website. This involved experimenting with various settings and configurations to ensure they integrated seamlessly with our design. 
              I also added data validation for email communication to ensure the accuracy and security of our communication channels.
              Now I maintain the website and keep the content up do date.`,
        white: "true",
        turn: "right"
    },

    {
        name: "StudyTrackr",
        img: "./img/patientstudy.png",
        link: "https://patientstudy.onrender.com/",
        skills: {
            react: "React.js",
            express: "Express.js",
            mongodb: "MongoDb",
            githubactions: "Github Actions"
        },
        gitLink: "https://github.com/adabo4/patientstudy.git",
        info: "info",
        text: "StudyTrackr is a tool that helps me keep track of the current drug distribution to patients who are on drug trials. I used combination of React, Express and MongoDB to store the data. ",
        white: true,
        turn: 'left'
    },

    {
        name: "Library Management System",
        img: "/img/project5.png",
        link: "https://my-library-management-system.netlify.app/",
        skills: {
            javascript: "Javascript",
            typescript: "Typescript",
            tailwindcss: "Tailwindcss"
        },
        gitLink: "https://github.com/adabo4/LibraryManagementSystem",
        text: "Library Management System is a web application that I created as an assignment during Frontend Developer Bootcamp. Its purpose is managing library data - titles and members of a library. I used pure HTML, CSS and Javascript. Some parts of the application are written in Typescript in order to learn how to use this high-level language. The 'Guide' subpage is styled with Tailwindcss to practice this framework. During this assignment I gained strong foundations in Javascript while working with API using CRUD operations to add, update or delete data in the application.",
        info: "info",
        white: true,
        turn: 'right'
    },
    {
        name: "Pick your Movie App",
        img: "./img/movie.png",
        link: "https://pick-your-movie-app.vercel.app/",
        skills: {
            react: "React"
        },
        gitLink: "https://github.com/adabo4/pick-your-movie-app",
        info: "info",
        text: "Simple web app that gets the data of your favourite TV show from the movie database through the API built with React. Now you can search your favourite TV show and get inspired what else to watch.",
        white: true,
        turn: 'left'

    },
    {
        name: "Riesenia",
        img: "./img/riesenia.png",
        link: "https://riesenia-app.netlify.app/",
        gitLink: "https://github.com/adabo4/riesenia",
        skills: {
            vue: "Vue.js",
        },
        info: "info",
        text: `A simplified mock-up of a website riesenia.com that helped me to understand the basics of Vue.js.`,
        white: "true",
        turn: "right"
    },

]

export default data;