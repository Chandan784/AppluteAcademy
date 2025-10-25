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
          "CSS Variables and Units (em, rem, vh, vw)",
          "Box Model, Margins, Padding, Borders",
          "Flexbox and Grid Layouts",
          "Positioning and Display Properties",
          "Transitions, Transforms, and Animations",
          "Media Queries and Responsive Design",
          ,
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

  // ✅ React Course (Full)
  {
    id: "react",
    name: "Frontend Development with React",
    description:
      "Learn to build fast, scalable, and interactive user interfaces with React, React Router, and Redux Toolkit.",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60",
    price: "₹12,000",
    duration: "2 Months",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: JavaScript for React",
        topics: [
          "JS Fundamentals (Variables, Functions, Arrays, Objects)",
          "ES6 Features (let, const, destructuring, spread, modules)",
          "Async JS (Promises, Fetch, Async/Await)",
        ],
      },
      {
        module: "Module 2: React Basics",
        topics: [
          "JSX and Component Structure",
          "Props and State",
          "Events and Conditional Rendering",
          "Lists and Keys",
        ],
      },
      {
        module: "Module 3: React Advanced",
        topics: [
          "React Hooks (useState, useEffect, useContext, useReducer)",
          "Context API for State Management",
          "React Router DOM",
          "Form Handling and Validation",
          "Error Boundaries, Lazy Loading, and Suspense",
        ],
      },
      {
        module: "Module 4: Redux Toolkit",
        topics: [
          "Introduction to Redux Toolkit",
          "createSlice and configureStore",
          "useDispatch and useSelector Hooks",
          "Async Actions using createAsyncThunk",
          "Persisting State with Redux Persist",
        ],
      },
      {
        module: "Module 5: API Integration & Deployment",
        topics: [
          "Axios for API Calls",
          "Handling Errors and Loaders",
          "React Build and Deployment on Vercel",
        ],
      },
    ],
  },

  // ✅ Backend Course (Node.js + Express)
  {
    id: "backend",
    name: "Backend Development (Node.js + Express)",
    description:
      "Learn to design and build powerful backends and APIs using Node.js, Express, and MongoDB.",
    img: "https://wallpaperbat.com/img/818850-nodejs-hd-wallpaper-and-background.png",
    price: "₹12,000",
    duration: "2 Months",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: Node.js Fundamentals",
        topics: [
          "Introduction to Node.js",
          "npm and Modules",
          "File System, Streams, and Events",
          "Event Loop and Async Programming",
        ],
      },
      {
        module: "Module 2: Express.js",
        topics: [
          "Setting Up Express Server",
          "Routing and Middleware",
          "CRUD Operations and REST APIs",
          "Error Handling and Validation",
        ],
      },
      {
        module: "Module 3: Authentication & Security",
        topics: [
          "JWT Authentication",
          "bcrypt Password Hashing",
          "CORS, Helmet, and Security Practices",
        ],
      },
      {
        module: "Module 4: MongoDB Integration",
        topics: [
          "Connecting to MongoDB Atlas",
          "Mongoose Models and Schemas",
          "CRUD Operations",
          "Population and Relationships",
        ],
      },
      {
        module: "Module 5: Deployment",
        topics: ["Environment Variables", "Deployment on Render/Heroku"],
      },
    ],
  },

  // ✅ JavaScript Basic
  // {
  //   id: "js-basic",
  //   name: "JavaScript Basics",
  //   description:
  //     "Start your journey into programming with JavaScript — the foundation of web development.",
  //   img: "https://wallpaperbat.com/img/343227-javascript-wallpaper-javascript.jpg",
  //   price: "₹699",
  //   duration: "7 days",
  //   demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //   syllabus: [
  //     {
  //       module: "Module 1: Core Concepts",
  //       topics: [
  //         "Introduction to JS",
  //         "Variables, Data Types, Operators",
  //         "Conditionals and Loops",
  //         "Functions and Scope",
  //       ],
  //     },
  //     {
  //       module: "Module 2: DOM & Events",
  //       topics: ["Selecting Elements", "Event Listeners", "DOM Manipulation"],
  //     },
  //   ],
  // },

  // ✅ JavaScript Advanced
  {
    id: "js-complete",
    name: "JavaScript Complete Course (Basic to Advanced)",
    description:
      "Master JavaScript from the ground up — start with the basics, learn DOM manipulation, and progress to advanced ES6+, async programming, and OOP concepts.",
    img: "https://wallpaperbat.com/img/364232-graphics.png",
    price: "₹1,999",
    duration: "15days",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: JavaScript Basics",
        topics: [
          "Introduction to JavaScript and Setup",
          "Variables (var, let, const)",
          "Data Types and Type Conversion",
          "Operators and Expressions",
          "Conditional Statements (if, else, switch)",
          "Loops (for, while, do-while)",
          "Functions and Scope",
        ],
      },
      {
        module: "Module 2: DOM and Events",
        topics: [
          "The Document Object Model (DOM)",
          "Selecting and Modifying Elements",
          "Event Handling (click, input, submit)",
          "Form Validation using JS",
          "LocalStorage and SessionStorage",
          "Basic Projects: To-Do App, Calculator",
        ],
      },
      {
        module: "Module 3: Intermediate JavaScript",
        topics: [
          "Arrays and Objects Deep Dive",
          "Array Methods (map, filter, reduce, forEach)",
          "String and Date Manipulation",
          "Error Handling (try, catch, finally)",
          "JSON and Data Parsing",
          "Module Exports and Imports (intro to ES Modules)",
        ],
      },
      {
        module: "Module 4: Advanced JavaScript",
        topics: [
          "ES6+ Features (Destructuring, Spread, Rest, Template Literals)",
          "Arrow Functions and Default Parameters",
          "Closures, Callbacks, and Higher-Order Functions",
          "Promises, Async/Await, and Fetch API",
          "Event Loop and Execution Context",
          "Prototypes, Classes, and Inheritance",
        ],
      },
      {
        module: "Module 5: Real-World Applications",
        topics: [
          "API Integration (REST APIs with Fetch and Axios)",
          "Asynchronous Operations and Error Handling",
          "Building Interactive UI with Vanilla JS",
          "Debugging and Performance Optimization",
          "Project: Weather App using OpenWeather API",
        ],
      },
      {
        module: "Module 6: Final Projects & Interview Prep",
        topics: [
          "Mini Projects: Quiz App, E-commerce Cart, Notes App",
          "JavaScript Best Practices and Code Quality",
          "Common Interview Questions and Logic Building",
          "Version Control with Git & GitHub (Basics)",
          "Final Capstone Project Submission",
        ],
      },
    ],
  },
  // ✅ CSS Course
  {
    id: "css",
    name: "CSS Mastery",
    description:
      "Learn how to style and design beautiful, responsive websites with modern CSS techniques.",
    img: "https://wallpaperaccess.com/full/2987572.jpg",
    price: "₹1,999",
    duration: "15 days",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: Fundamentals",
        topics: [
          "Selectors and Specificity",
          "Box Model, Margin, Padding, Borders",
          "Display and Positioning",
        ],
      },
      {
        module: "Module 2: Layouts and Responsive Design",
        topics: [
          "Flexbox and Grid",
          "Media Queries",
          "Transitions and Animations",
        ],
      },
    ],
  },

  // ✅ Git & GitHub Course
  {
    id: "git",
    name: "Git & GitHub",
    description:
      "Master version control, collaboration, and project management using Git and GitHub.",
    img: "https://wallpaperbat.com/img/8622048-git-and-github-at-work.jpg",
    price: "₹1,999",
    duration: "7 Days",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: Git Basics",
        topics: [
          "Version Control Overview",
          "Installing and Configuring Git",
          "Common Commands (init, add, commit, status)",
        ],
      },
      {
        module: "Module 2: GitHub Workflow",
        topics: [
          "Pushing and Pulling Repos",
          "Branching and Merging",
          "Pull Requests and Issues",
          "Using .gitignore",
        ],
      },
    ],
  },

  // ✅ MongoDB Course
  {
    id: "mongodb",
    name: "MongoDB Essentials",
    description:
      "Learn to design and manage databases with MongoDB — the most popular NoSQL database.",
    img: "https://wallpapercave.com/wp/wp8724894.png",
    price: "₹2,000",
    duration: "15days",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    syllabus: [
      {
        module: "Module 1: Introduction & CRUD",
        topics: [
          "NoSQL Concepts",
          "CRUD Operations in Mongo Shell",
          "Data Modeling and Collections",
        ],
      },
      {
        module: "Module 2: Mongoose ODM",
        topics: [
          "Schemas and Models",
          "Relationships (1:1, 1:Many)",
          "Aggregation and Indexing",
        ],
      },
    ],
  },
];
