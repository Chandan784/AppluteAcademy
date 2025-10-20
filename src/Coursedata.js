// src/coursesData.js
export const courses = [
  {
    id: "mern",
    name: "Fullstack Development (MERN)",
    description:
      "Master MongoDB, Express, React, and Node.js with hands-on projects to become an industry-ready fullstack developer.",
    img: "https://wallpapercave.com/wp/wp8903890.jpg",
    price: "₹20,000",
    duration: "6 Months",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: HTML",
        topics: [
          "HTML Document Structure",
          "Headings, Paragraphs, Lists, Links, Images",
          "Forms & Input Elements",
          "Semantic Tags (header, section, footer, article)",
          "Tables and Multimedia (video, audio, iframe)",
          "HTML5 Features (localStorage, data attributes)",
        ],
      },
      {
        module: "Module 2: CSS",
        topics: [
          "Selectors and Specificity",
          "Box Model, Margins, Padding, Borders",
          "Flexbox and Grid Layouts",
          "Positioning and Display Properties",
          "Transitions, Transforms, and Animations",
          "Media Queries and Responsive Design",
          "CSS Variables and Units (em, rem, vh, vw)",
        ],
      },
      {
        module: "Module 3: Git & GitHub",
        topics: [
          "Version Control Basics",
          "Common Git Commands (init, add, commit, push, pull, clone)",
          "Branching and Merging",
          "Working with Remote Repositories",
          "GitHub Workflow (forks, pull requests, issues)",
          "Using .gitignore and Managing Commits",
        ],
      },
      {
        module: "Module 4: JavaScript",
        topics: [
          "Variables and Data Types",
          "Functions and Arrow Functions",
          "Conditionals and Loops",
          "Arrays and Objects",
          "DOM Manipulation and Event Handling",
          "ES6+ Features (let, const, spread, rest, modules)",
          "Promises and Async/Await",
          "Fetch API and Working with JSON",
          "Object-Oriented Programming (Classes, Prototypes)",
          "Functional Programming (map, filter, reduce)",
        ],
      },
      {
        module: "Module 5: React.js",
        topics: [
          "JSX and Component Structure",
          "Props and State Management",
          "React Hooks (useState, useEffect, useRef, useContext, useReducer)",
          "Context API for Global State",
          "Routing with React Router DOM",
          "Axios for API Integration",
          "Conditional Rendering and Forms",
          "Error Boundaries and Lazy Loading",
          "Performance Optimization (React.memo, useCallback, useMemo)",
        ],
      },
      {
        module: "Module 6: Redux Toolkit",
        topics: [
          "Why Redux Toolkit",
          "Setting Up Redux Toolkit (@reduxjs/toolkit)",
          "Store, Slice, and Reducer Concepts",
          "Using configureStore() and createSlice()",
          "Dispatching Actions and Selecting State",
          "useDispatch and useSelector Hooks",
          "Async Actions with createAsyncThunk",
          "State Persistence with Redux Persist",
        ],
      },
      {
        module: "Module 7: Node.js",
        topics: [
          "Introduction to Node.js Architecture",
          "npm and Package Management",
          "Modules (Built-in, Custom, Third-party)",
          "File System and Streams",
          "Asynchronous Programming and Event Loop",
          "Environment Variables and Error Handling",
        ],
      },
      {
        module: "Module 8: Express.js",
        topics: [
          "Setting Up an Express Server",
          "Routing and Middleware",
          "Handling HTTP Requests and Responses",
          "CRUD Operations and REST APIs",
          "Authentication (JWT, bcrypt)",
          "Error Handling Middleware",
          "CORS and Security",
        ],
      },
      {
        module: "Module 9: MongoDB",
        topics: [
          "Introduction to NoSQL Databases",
          "CRUD Operations (Create, Read, Update, Delete)",
          "Mongoose ODM (Schemas, Models, Queries)",
          "Relationships (1:1, 1:Many, Many:Many)",
          "Validation and Indexing",
          "Aggregation Pipelines and Virtuals",
          "Connecting MongoDB Atlas with Node.js",
        ],
      },
      {
        module: "Module 10: Full Stack Integration & Deployment",
        topics: [
          "Connecting React with Express and MongoDB",
          "JWT Authentication and Protected Routes",
          "Axios Integration and Error Handling",
          "File Uploads with Multer",
          "Environment Variables (dotenv)",
          "Deployment on Render, Vercel, or Netlify",
        ],
      },
    ],
  },
  {
    id: "react",
    name: "Frontend Development (React)",
    description:
      "Build dynamic and responsive UIs using React, Tailwind CSS, and JavaScript — crafted for real-world web apps.",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60",
    price: "₹12,000",
    duration: "4 Months",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: HTML, CSS & JS",
        topics: ["HTML Basics", "CSS Basics", "JS Fundamentals"],
      },
      {
        module: "Module 2: React Basics",
        topics: ["JSX", "Components", "Props & State"],
      },
      {
        module: "Module 3: React Advanced",
        topics: ["Hooks", "Context API", "Routing", "Forms"],
      },
      {
        module: "Module 4: Projects",
        topics: ["Build Portfolio Site", "Mini React Apps"],
      },
    ],
  },
  {
    id: "node",
    name: "Backend Development (Node.js)",
    description:
      "Learn backend architecture, API development, and database management with Node.js and Express.",
    img: "https://wallpaperbat.com/img/818850-nodejs-hd-wallpaper-and-background.png",
    price: "₹12,000",
    duration: "3 Months",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: Node.js Basics",
        topics: ["Node Environment Setup", "Modules & NPM", "Event Loop"],
      },
      {
        module: "Module 2: Express.js",
        topics: ["Routing", "Middleware", "REST APIs"],
      },
      {
        module: "Module 3: Database",
        topics: ["MongoDB Basics", "CRUD Operations", "Mongoose ODM"],
      },
      {
        module: "Module 4: Projects & Deployment",
        topics: ["API Project", "Deployment on Heroku/Vercel"],
      },
    ],
  },
];
