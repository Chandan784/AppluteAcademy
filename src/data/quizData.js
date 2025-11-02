export const quizData = [
  {
    subjectName: "C Programming",
    icon: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png",
    questions: [
      {
        id: 1,
        question: "Who is the father of C programming language?",
        options: [
          "James Gosling",
          "Dennis Ritchie",
          "Bjarne Stroustrup",
          "Ken Thompson",
        ],
        correctAnswer: "Dennis Ritchie",
        explanation: "C was developed by Dennis Ritchie at Bell Labs in 1972.",
      },
      {
        id: 2,
        question: "Which of the following is a valid C variable name?",
        options: ["int", "float_num", "num 1", "2number"],
        correctAnswer: "float_num",
        explanation:
          "C variable names cannot have spaces or start with numbers. ‘float_num’ is valid.",
      },
      {
        id: 3,
        question:
          "Which keyword is used to prevent modification of a variable?",
        options: ["const", "volatile", "static", "immutable"],
        correctAnswer: "const",
        explanation:
          "The `const` keyword makes a variable’s value unchangeable once initialized.",
      },
      {
        id: 4,
        question: "Which symbol is used to denote a preprocessor directive?",
        options: ["$", "#", "@", "&"],
        correctAnswer: "#",
        explanation:
          "All preprocessor commands in C start with a ‘#’, such as #include or #define.",
      },
      {
        id: 5,
        question: "What is the size of an int in 32-bit architecture?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
        correctAnswer: "4 bytes",
        explanation:
          "On a 32-bit system, `int` typically takes 4 bytes of memory.",
      },
      {
        id: 6,
        question: "Which function is used to output text to the screen?",
        options: ["input()", "printf()", "scanf()", "cin>>"],
        correctAnswer: "printf()",
        explanation: "`printf()` is used in C to print output to the console.",
      },
      {
        id: 7,
        question: "Which header file is required for printf() and scanf()?",
        options: ["stdlib.h", "math.h", "stdio.h", "string.h"],
        correctAnswer: "stdio.h",
        explanation:
          "The `stdio.h` header file contains declarations for standard input and output functions.",
      },
      {
        id: 8,
        question: "What is the index of the first element in an array?",
        options: ["0", "1", "-1", "Depends on compiler"],
        correctAnswer: "0",
        explanation:
          "In C, arrays are zero-indexed, meaning indexing starts at 0.",
      },
      {
        id: 9,
        question: "Which operator is used to access the value at an address?",
        options: ["&", "*", "->", "."],
        correctAnswer: "*",
        explanation:
          "The dereference operator `*` gives the value stored at a pointer’s address.",
      },
      {
        id: 10,
        question: "What will `printf('%d', 5 < 2);` output?",
        options: ["5", "2", "1", "0"],
        correctAnswer: "0",
        explanation: "Since 5 < 2 is false, the result is 0 in C.",
      },
      {
        id: 11,
        question:
          "Which loop executes at least once even if the condition is false?",
        options: ["for", "while", "do-while", "None"],
        correctAnswer: "do-while",
        explanation:
          "`do-while` loop executes the code block first and checks the condition later.",
      },
      {
        id: 12,
        question: "Which of the following is a valid pointer declaration?",
        options: ["int p;", "int *p;", "int &p;", "ptr int p;"],
        correctAnswer: "int *p;",
        explanation:
          "Pointers in C are declared using an asterisk (*) before the variable name.",
      },
      {
        id: 13,
        question: "Which operator is used to allocate memory dynamically?",
        options: ["alloc", "new", "malloc", "create"],
        correctAnswer: "malloc",
        explanation:
          "`malloc()` is used in C to allocate memory dynamically from the heap.",
      },
      {
        id: 14,
        question: "Which keyword is used to return a value from a function?",
        options: ["exit", "return", "break", "goto"],
        correctAnswer: "return",
        explanation:
          "The `return` statement sends a value back to the function caller.",
      },
      {
        id: 15,
        question: "What is the output of `printf('%c', 'A' + 1);`?",
        options: ["A", "B", "C", "Error"],
        correctAnswer: "B",
        explanation: "'A' + 1 gives the next ASCII character, which is 'B'.",
      },
    ],
  },

  {
    subjectName: "JavaScript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    questions: [
      {
        id: 1,
        question: "What is the output of '2' + 2 in JavaScript?",
        options: ["4", "'22'", "NaN", "undefined"],
        correctAnswer: "'22'",
        explanation:
          "When a string and number are added, JavaScript performs string concatenation.",
      },
      {
        id: 2,
        question: "Which keyword declares a block-scoped variable?",
        options: ["var", "let", "const", "define"],
        correctAnswer: "let",
        explanation:
          "`let` creates a block-scoped variable, unlike `var` which is function-scoped.",
      },
      {
        id: 3,
        question: "What is the result of typeof null?",
        options: ["object", "null", "undefined", "number"],
        correctAnswer: "object",
        explanation:
          "This is a known bug in JavaScript; `typeof null` returns 'object'.",
      },
      {
        id: 4,
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Sun Microsystems", "Oracle"],
        correctAnswer: "Netscape",
        explanation:
          "JavaScript was developed by Brendan Eich at Netscape in 1995.",
      },
      {
        id: 5,
        question: "What does NaN stand for?",
        options: [
          "Not a Null",
          "Not a Number",
          "No assigned Number",
          "Non available Number",
        ],
        correctAnswer: "Not a Number",
        explanation:
          "`NaN` means an operation failed to produce a valid number.",
      },
      {
        id: 6,
        question: "Which method converts JSON string to object?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.object()",
          "parse.JSON()",
        ],
        correctAnswer: "JSON.parse()",
        explanation: "`JSON.parse()` converts JSON text into an object.",
      },
      {
        id: 7,
        question: "What is 'this' keyword in JavaScript?",
        options: [
          "Refers to the current object",
          "Refers to the parent function",
          "Always refers to window",
          "Undefined",
        ],
        correctAnswer: "Refers to the current object",
        explanation: "`this` refers to the current execution context.",
      },
      {
        id: 8,
        question: "Which method removes the last element from an array?",
        options: ["pop()", "push()", "shift()", "splice()"],
        correctAnswer: "pop()",
        explanation:
          "`pop()` removes and returns the last element of an array.",
      },
      {
        id: 9,
        question: "How do you write an arrow function in JavaScript?",
        options: ["() => {}", "function => {}", "() -> {}", "() -> return {}"],
        correctAnswer: "() => {}",
        explanation: "Arrow functions use the `=>` syntax.",
      },
      {
        id: 10,
        question: "Which operator checks both value and type?",
        options: ["==", "===", "!=", "="],
        correctAnswer: "===",
        explanation: "`===` checks both value and data type for equality.",
      },
      {
        id: 11,
        question: "How do you define a constant in JavaScript?",
        options: ["var", "let", "const", "constant"],
        correctAnswer: "const",
        explanation: "`const` creates a read-only reference to a value.",
      },
      {
        id: 12,
        question: "Which event executes when a user clicks an element?",
        options: ["onmouseover", "onchange", "onclick", "onload"],
        correctAnswer: "onclick",
        explanation:
          "The `onclick` event handler triggers when an element is clicked.",
      },
      {
        id: 13,
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "unshift()", "concat()", "insert()"],
        correctAnswer: "push()",
        explanation:
          "`push()` adds one or more elements to the end of an array.",
      },
      {
        id: 14,
        question: "How do you create a JavaScript object?",
        options: [
          "var obj = ();",
          "var obj = {};",
          "var obj = [];",
          "var obj = new Array();",
        ],
        correctAnswer: "var obj = {};",
        explanation: "Objects are created using curly braces `{}`.",
      },
      {
        id: 15,
        question: "What is the default value of an uninitialized variable?",
        options: ["null", "undefined", "0", "empty string"],
        correctAnswer: "undefined",
        explanation:
          "Variables declared but not assigned are `undefined` by default.",
      },
    ],
  },

  {
    subjectName: "Tailwind CSS",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    questions: [
      {
        question: "What is Tailwind CSS?",
        options: [
          "Utility-first CSS framework",
          "Component library",
          "JavaScript library",
          "CSS preprocessor",
        ],
        answer: "Utility-first CSS framework",
        explanation:
          "Tailwind CSS provides low-level utility classes to build custom designs quickly.",
      },
      {
        question: "Which file is used to configure Tailwind?",
        options: ["tailwind.config.js", "style.css", "config.json", "theme.js"],
        answer: "tailwind.config.js",
        explanation:
          "The `tailwind.config.js` file is used to customize themes, colors, and plugins.",
      },
      {
        question: "How do you install Tailwind in a project?",
        options: [
          "npm install tailwindcss",
          "npm install bootstrap",
          "yarn add css",
          "npm install twcss",
        ],
        answer: "npm install tailwindcss",
        explanation:
          "Tailwind can be installed using `npm install tailwindcss` followed by initialization.",
      },
      {
        question: "What command initializes Tailwind config file?",
        options: [
          "npx tailwindcss init",
          "tailwind start",
          "npm run tailwind",
          "init tailwind",
        ],
        answer: "npx tailwindcss init",
        explanation:
          "Running `npx tailwindcss init` generates a config file for customization.",
      },
      {
        question: "Which class makes text bold?",
        options: ["font-bold", "text-bold", "bold", "fw-bold"],
        answer: "font-bold",
        explanation:
          "The `font-bold` class makes the text bold in Tailwind CSS.",
      },
      {
        question: "How to center text in Tailwind?",
        options: [
          "text-center",
          "align-center",
          "justify-center",
          "center-text",
        ],
        answer: "text-center",
        explanation:
          "Use `text-center` to align text horizontally in the center.",
      },
      {
        question: "Which class adds margin of 4 units?",
        options: ["m-4", "margin-4", "p-4", "gap-4"],
        answer: "m-4",
        explanation: "`m-4` applies margin on all sides with spacing unit 4.",
      },
      {
        question: "Which class applies background color blue-500?",
        options: [
          "bg-blue-500",
          "background-blue",
          "bg-500-blue",
          "blue-bg-500",
        ],
        answer: "bg-blue-500",
        explanation: "The `bg-blue-500` class sets a medium blue background.",
      },
      {
        question: "How to apply padding of 2 units?",
        options: ["p-2", "padding-2", "pd-2", "pg-2"],
        answer: "p-2",
        explanation: "The `p-2` class applies padding on all sides.",
      },
      {
        question: "Which directive adds Tailwind’s base styles?",
        options: [
          "@tailwind base;",
          "@tailwind core;",
          "@import tailwind;",
          "@base;",
        ],
        answer: "@tailwind base;",
        explanation:
          "The `@tailwind base;` directive injects Tailwind’s base styles into your CSS.",
      },
      {
        question: "How to create a flex container?",
        options: ["flex", "display-flex", "d-flex", "flexbox"],
        answer: "flex",
        explanation: "The `flex` class makes an element a flex container.",
      },
      {
        question: "Which class changes text color?",
        options: ["text-color", "text-blue-500", "color-blue", "font-color"],
        answer: "text-blue-500",
        explanation:
          "Use classes like `text-blue-500` to change the text color.",
      },
      {
        question: "Which class adds rounded corners?",
        options: ["rounded", "corner", "border-radius", "curve"],
        answer: "rounded",
        explanation:
          "The `rounded` class adds border radius to make corners round.",
      },
      {
        question: "Which class adds shadow?",
        options: [
          "shadow",
          "box-shadow",
          "shadow-md",
          "both shadow and shadow-md",
        ],
        answer: "both shadow and shadow-md",
        explanation:
          "You can use `shadow` for small and `shadow-md` for medium shadows.",
      },
      {
        question: "What is the purpose of Tailwind’s JIT mode?",
        options: [
          "Generates styles on-demand",
          "Loads all CSS",
          "Minifies JS",
          "Caches fonts",
        ],
        answer: "Generates styles on-demand",
        explanation:
          "Just-In-Time mode compiles only the classes you use, reducing CSS size and improving speed.",
      },
    ],
  },
  {
    subjectName: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    questions: [
      {
        id: 1,
        question: "What is Node.js built on?",
        options: [
          "V8 JavaScript Engine",
          "Java Virtual Machine",
          "Python",
          "C#",
        ],
        correctAnswer: "V8 JavaScript Engine",
        explanation: "Node.js runs on Chrome's V8 JavaScript engine.",
      },
      {
        id: 2,
        question: "Which module is used to create a web server in Node.js?",
        options: ["http", "fs", "net", "url"],
        correctAnswer: "http",
        explanation: "The built-in 'http' module allows creating web servers.",
      },
      {
        id: 3,
        question: "What does npm stand for?",
        options: [
          "Node Package Manager",
          "Node Program Manager",
          "New Package Module",
          "None",
        ],
        correctAnswer: "Node Package Manager",
        explanation: "npm is the default package manager for Node.js.",
      },
      {
        id: 4,
        question:
          "Which function is used to import modules in Node.js (CommonJS)?",
        options: ["import", "require()", "include()", "fetch()"],
        correctAnswer: "require()",
        explanation: "CommonJS uses 'require()' to import modules.",
      },
      {
        id: 5,
        question: "Which module handles file operations?",
        options: ["http", "fs", "os", "path"],
        correctAnswer: "fs",
        explanation:
          "'fs' (File System) module provides functions to work with files.",
      },
      {
        id: 6,
        question: "Which method is used to read a file asynchronously?",
        options: ["fs.read()", "fs.readFile()", "fs.open()", "fs.getFile()"],
        correctAnswer: "fs.readFile()",
        explanation: "'fs.readFile()' reads file data asynchronously.",
      },
      {
        id: 7,
        question: "What does 'process' object provide?",
        options: [
          "OS info",
          "Environment info",
          "Current process info",
          "All of these",
        ],
        correctAnswer: "All of these",
        explanation:
          "'process' gives access to environment variables and runtime info.",
      },
      {
        id: 8,
        question: "How can you create a package.json file?",
        options: ["npm init", "npm create", "node init", "package create"],
        correctAnswer: "npm init",
        explanation:
          "'npm init' creates a new package.json file interactively.",
      },
      {
        id: 9,
        question: "Which of the following is NOT a core module?",
        options: ["fs", "http", "events", "express"],
        correctAnswer: "express",
        explanation: "Express is a third-party module, not built into Node.js.",
      },
      {
        id: 10,
        question: "What does 'module.exports' do?",
        options: [
          "Exports a function or object to be used in another file",
          "Imports a module",
          "Starts the server",
          "Clears cache",
        ],
        correctAnswer:
          "Exports a function or object to be used in another file",
        explanation: "'module.exports' allows sharing code between files.",
      },
      {
        id: 11,
        question: "Which event is emitted when a stream is finished?",
        options: ["data", "end", "finish", "close"],
        correctAnswer: "end",
        explanation:
          "The 'end' event signifies that no more data will be provided.",
      },
      {
        id: 12,
        question: "Which command installs a package globally?",
        options: [
          "npm install package",
          "npm install -g package",
          "npm global package",
          "npm get package",
        ],
        correctAnswer: "npm install -g package",
        explanation: "Use '-g' flag to install a package globally.",
      },
      {
        id: 13,
        question: "Which module helps to work with file paths?",
        options: ["url", "os", "path", "net"],
        correctAnswer: "path",
        explanation: "'path' helps handle and transform file paths easily.",
      },
      {
        id: 14,
        question: "What does event-driven mean in Node.js?",
        options: [
          "Code executes sequentially",
          "Code reacts to events asynchronously",
          "All code runs in parallel",
          "None of the above",
        ],
        correctAnswer: "Code reacts to events asynchronously",
        explanation: "Node.js uses event-driven non-blocking architecture.",
      },
      {
        id: 15,
        question: "Which method is used to start an HTTP server?",
        options: ["listen()", "run()", "start()", "serve()"],
        correctAnswer: "listen()",
        explanation: "'server.listen(port)' starts the HTTP server.",
      },
    ],
  },
  {
    subjectName: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    questions: [
      {
        id: 1,
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Colorful Style Syntax",
          "Computer Style Sheet",
          "Creative Style System",
        ],
        correctAnswer: "Cascading Style Sheets",
        explanation:
          "CSS stands for Cascading Style Sheets, used for styling HTML elements.",
      },
      {
        id: 2,
        question: "Which property controls text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        correctAnswer: "font-size",
        explanation: "'font-size' defines the size of the text.",
      },
      {
        id: 3,
        question: "Which CSS property changes text color?",
        options: ["color", "text-color", "font-color", "background-color"],
        correctAnswer: "color",
        explanation: "The 'color' property sets the text color.",
      },
      {
        id: 4,
        question: "How do you make text bold in CSS?",
        options: [
          "text-weight: bold;",
          "font-weight: bold;",
          "bold: true;",
          "style: bold;",
        ],
        correctAnswer: "font-weight: bold;",
        explanation:
          "'font-weight' controls how thick or bold the text appears.",
      },
      {
        id: 5,
        question: "Which property sets background color?",
        options: ["background", "color", "background-color", "bg-color"],
        correctAnswer: "background-color",
        explanation:
          "'background-color' sets the background color of an element.",
      },
      {
        id: 6,
        question: "Which value of position property is default?",
        options: ["static", "relative", "fixed", "absolute"],
        correctAnswer: "static",
        explanation: "By default, all elements are positioned 'static'.",
      },
      {
        id: 7,
        question: "Which property is used for spacing inside an element?",
        options: ["margin", "border", "padding", "space"],
        correctAnswer: "padding",
        explanation: "'padding' controls spacing inside an element's border.",
      },
      {
        id: 8,
        question: "Which property is used to create rounded corners?",
        options: ["corner-radius", "border-radius", "round", "border-corner"],
        correctAnswer: "border-radius",
        explanation:
          "'border-radius' defines how round the element’s corners are.",
      },
      {
        id: 9,
        question: "Which unit is relative to the parent element's font size?",
        options: ["em", "px", "rem", "%"],
        correctAnswer: "em",
        explanation:
          "'em' units are relative to the font size of the parent element.",
      },
      {
        id: 10,
        question: "Which property controls the space outside an element?",
        options: ["padding", "margin", "spacing", "border"],
        correctAnswer: "margin",
        explanation: "'margin' adds space outside the element’s border.",
      },
      {
        id: 11,
        question: "Which property hides an element but keeps its space?",
        options: [
          "display: none;",
          "visibility: hidden;",
          "opacity: 0;",
          "none of these",
        ],
        correctAnswer: "visibility: hidden;",
        explanation:
          "'visibility: hidden' hides the element but preserves its layout space.",
      },
      {
        id: 12,
        question: "How to make a flex container?",
        options: [
          "display: flex;",
          "flex: true;",
          "container: flex;",
          "layout: flex;",
        ],
        correctAnswer: "display: flex;",
        explanation:
          "'display: flex;' enables Flexbox layout for child elements.",
      },
      {
        id: 13,
        question: "Which property changes the cursor when hovering?",
        options: ["hover", "pointer", "cursor", "mouse"],
        correctAnswer: "cursor",
        explanation:
          "'cursor' defines the mouse cursor type (e.g., pointer, move, text).",
      },
      {
        id: 14,
        question: "Which property controls text alignment?",
        options: ["align", "text-align", "justify", "position"],
        correctAnswer: "text-align",
        explanation: "'text-align' sets horizontal alignment of text.",
      },
      {
        id: 15,
        question: "Which CSS function is used to apply gradients?",
        options: [
          "gradient()",
          "linear-gradient()",
          "color-gradient()",
          "mix()",
        ],
        correctAnswer: "linear-gradient()",
        explanation:
          "'linear-gradient()' creates smooth transitions between two or more colors.",
      },
    ],
  },
  {
    subjectName: "MongoDB",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
    questions: [
      {
        question: "MongoDB is a type of?",
        options: ["Relational DB", "NoSQL DB", "Graph DB", "Key-Value Store"],
        answer: "NoSQL DB",
        explanation:
          "MongoDB is a NoSQL, document-oriented database that stores data in BSON format.",
      },
      {
        question: "Which format does MongoDB store data in?",
        options: ["JSON", "BSON", "XML", "YAML"],
        answer: "BSON",
        explanation:
          "MongoDB uses BSON (Binary JSON) for efficient storage and faster access.",
      },
      {
        question: "Which command is used to show all databases?",
        options: ["show dbs", "show databases", "db.show()", "list dbs"],
        answer: "show dbs",
        explanation:
          "In the Mongo shell, `show dbs` lists all available databases.",
      },
      {
        question: "The default port for MongoDB is?",
        options: ["27017", "8080", "3000", "5000"],
        answer: "27017",
        explanation: "MongoDB listens to port 27017 by default.",
      },
      {
        question: "Which function inserts a document in MongoDB?",
        options: ["db.insert()", "insertOne()", "insertDoc()", "add()"],
        answer: "insertOne()",
        explanation:
          "The `insertOne()` method inserts a single document into a collection.",
      },
      {
        question: "Which function is used to update documents?",
        options: ["update()", "updateOne()", "editDoc()", "modify()"],
        answer: "updateOne()",
        explanation:
          "The `updateOne()` function modifies the first document that matches the filter.",
      },
      {
        question: "To remove a collection, you use?",
        options: [
          "db.drop()",
          "db.collection.drop()",
          "dropCollection()",
          "deleteCollection()",
        ],
        answer: "db.collection.drop()",
        explanation:
          "You can delete a collection using `db.collection.drop()`.",
      },
      {
        question: "What is a collection?",
        options: ["Group of documents", "Single document", "Database", "Field"],
        answer: "Group of documents",
        explanation:
          "A collection is a group of MongoDB documents similar to a table in SQL.",
      },
      {
        question: "What is the primary key field in MongoDB?",
        options: ["_id", "id", "primary", "key"],
        answer: "_id",
        explanation:
          "Every MongoDB document has a unique `_id` field used as the primary key.",
      },
      {
        question: "Which method is used to fetch data?",
        options: ["find()", "search()", "get()", "fetch()"],
        answer: "find()",
        explanation:
          "The `find()` method retrieves documents from a collection.",
      },
      {
        question: "Aggregation in MongoDB is used for?",
        options: [
          "Summarizing data",
          "Sorting only",
          "Deleting data",
          "Importing data",
        ],
        answer: "Summarizing data",
        explanation:
          "Aggregation is used to process data and return computed results like sums or averages.",
      },
      {
        question: "Which operator is used for pattern matching?",
        options: ["$regex", "$like", "$match", "$pattern"],
        answer: "$regex",
        explanation:
          "MongoDB uses `$regex` for regular expression-based pattern matching.",
      },
      {
        question: "Which command switches to a database?",
        options: [
          "use dbname",
          "switch dbname",
          "select dbname",
          "open dbname",
        ],
        answer: "use dbname",
        explanation:
          "The `use` command switches the current context to another database.",
      },
      {
        question: "What does BSON stand for?",
        options: [
          "Binary JSON",
          "Basic JSON",
          "Binary Script Object Notation",
          "Big JSON",
        ],
        answer: "Binary JSON",
        explanation:
          "BSON means Binary JSON — it’s an efficient binary encoding of JSON-like documents.",
      },
      {
        question: "Which company developed MongoDB?",
        options: ["Google", "Facebook", "MongoDB Inc.", "Oracle"],
        answer: "MongoDB Inc.",
        explanation:
          "MongoDB Inc. (formerly 10gen) developed and maintains MongoDB.",
      },
    ],
  },
  {
    subjectName: "Java",
    icon: "https://cdn-icons-png.flaticon.com/128/226/226777.png",
    questions: [
      {
        question: "What is Java?",
        options: [
          "A high-level, object-oriented programming language",
          "A database management system",
          "A web browser",
          "An operating system",
        ],
        answer: "A high-level, object-oriented programming language",
        explanation:
          "Java is a general-purpose, object-oriented programming language used for building platform-independent applications.",
      },
      {
        question: "Who developed Java?",
        options: [
          "James Gosling",
          "Dennis Ritchie",
          "Bjarne Stroustrup",
          "Guido van Rossum",
        ],
        answer: "James Gosling",
        explanation:
          "Java was developed by James Gosling at Sun Microsystems in 1995.",
      },
      {
        question: "Which of the following is not a Java feature?",
        options: [
          "Platform dependent",
          "Object-oriented",
          "Secure",
          "Portable",
        ],
        answer: "Platform dependent",
        explanation:
          "Java is platform-independent because of the JVM (Java Virtual Machine).",
      },
      {
        question: "Which keyword is used to inherit a class in Java?",
        options: ["extends", "implements", "inherits", "instanceof"],
        answer: "extends",
        explanation:
          "The `extends` keyword is used by a subclass to inherit properties from a superclass.",
      },
      {
        question: "Which of these is used to define a constant in Java?",
        options: ["final", "const", "static", "define"],
        answer: "final",
        explanation:
          "The `final` keyword is used to declare constants, preventing modification after initialization.",
      },
      {
        question: "What is JVM in Java?",
        options: [
          "Java Virtual Machine",
          "Java Variable Manager",
          "Java Vendor Machine",
          "Java Version Module",
        ],
        answer: "Java Virtual Machine",
        explanation:
          "JVM executes Java bytecode and makes Java platform-independent.",
      },
      {
        question: "Which method is the entry point of a Java program?",
        options: ["main()", "start()", "run()", "execute()"],
        answer: "main()",
        explanation:
          "The `main()` method is the entry point for every standalone Java application.",
      },
      {
        question: "Which data type is used to store decimal values in Java?",
        options: ["float", "int", "char", "boolean"],
        answer: "float",
        explanation:
          "The `float` data type is used to store fractional numeric values.",
      },
      {
        question: "Which of these is not a primitive data type in Java?",
        options: ["String", "int", "char", "boolean"],
        answer: "String",
        explanation: "String is a class in Java, not a primitive data type.",
      },
      {
        question: "Which operator is used for comparison in Java?",
        options: ["==", "=", "===", "!="],
        answer: "==",
        explanation: "`==` is used to compare two values for equality in Java.",
      },
      {
        question: "Which package is imported by default in Java?",
        options: ["java.lang", "java.io", "java.util", "java.net"],
        answer: "java.lang",
        explanation:
          "The `java.lang` package is automatically imported in every Java program.",
      },
      {
        question: "What is the default value of a boolean variable in Java?",
        options: ["false", "true", "0", "null"],
        answer: "false",
        explanation:
          "By default, boolean variables in Java are initialized to `false`.",
      },
      {
        question: "Which keyword is used to handle exceptions?",
        options: ["try-catch", "throw", "error", "finalize"],
        answer: "try-catch",
        explanation:
          "The `try-catch` block is used to handle exceptions in Java.",
      },
      {
        question:
          "Which concept allows multiple methods with the same name but different parameters?",
        options: [
          "Method overloading",
          "Method overriding",
          "Encapsulation",
          "Abstraction",
        ],
        answer: "Method overloading",
        explanation:
          "Method overloading allows defining multiple methods with the same name but different parameter lists.",
      },
      {
        question: "Which keyword is used to create an object in Java?",
        options: ["new", "create", "init", "object"],
        answer: "new",
        explanation:
          "The `new` keyword allocates memory and creates an instance of a class.",
      },
    ],
  },
  {
    subjectName: "Git",
    icon: "https://cdn-icons-png.flaticon.com/128/15466/15466163.png",
    questions: [
      {
        question: "Git is a?",
        options: [
          "Version Control System",
          "Programming Language",
          "Database",
          "Framework",
        ],
        answer: "Version Control System",
        explanation:
          "Git is a distributed version control system used for tracking changes in source code.",
      },
      {
        question: "Who created Git?",
        options: [
          "Linus Torvalds",
          "Bill Gates",
          "Mark Zuckerberg",
          "Dennis Ritchie",
        ],
        answer: "Linus Torvalds",
        explanation:
          "Git was created by Linus Torvalds in 2005, the creator of Linux.",
      },
      {
        question: "Which command initializes a new Git repository?",
        options: ["git init", "git start", "git new", "git repo"],
        answer: "git init",
        explanation:
          "`git init` initializes a new Git repository in your project directory.",
      },
      {
        question: "Which command stages changes?",
        options: ["git add", "git stage", "git commit", "git push"],
        answer: "git add",
        explanation: "`git add` stages files for the next commit.",
      },
      {
        question: "Which command commits staged changes?",
        options: ["git commit", "git save", "git push", "git store"],
        answer: "git commit",
        explanation:
          "`git commit` records staged changes to the repository history.",
      },
      {
        question: "Which command displays commit history?",
        options: ["git log", "git history", "git list", "git commits"],
        answer: "git log",
        explanation:
          "`git log` displays the commit history in reverse chronological order.",
      },
      {
        question: "Which command creates a new branch?",
        options: [
          "git branch",
          "git new-branch",
          "git create",
          "git make-branch",
        ],
        answer: "git branch",
        explanation: "`git branch` is used to create and list branches.",
      },
      {
        question: "Which command switches branches?",
        options: ["git checkout", "git switch", "git change", "git move"],
        answer: "git checkout",
        explanation: "`git checkout` switches to another branch or commit.",
      },
      {
        question: "Which command merges two branches?",
        options: ["git merge", "git join", "git combine", "git pull"],
        answer: "git merge",
        explanation:
          "`git merge` integrates changes from another branch into the current one.",
      },
      {
        question: "Which command uploads changes to a remote repo?",
        options: ["git push", "git upload", "git send", "git merge"],
        answer: "git push",
        explanation:
          "`git push` uploads local commits to the remote repository.",
      },
      {
        question: "Which command downloads updates from remote?",
        options: ["git pull", "git fetch", "git update", "git clone"],
        answer: "git pull",
        explanation:
          "`git pull` fetches and merges changes from the remote repository.",
      },
      {
        question: "Which command clones a repository?",
        options: ["git clone", "git copy", "git download", "git import"],
        answer: "git clone",
        explanation:
          "`git clone` copies an entire repository to your local system.",
      },
      {
        question: "Which file tells Git what to ignore?",
        options: [".gitignore", ".gitconfig", "ignore.txt", "exclude.txt"],
        answer: ".gitignore",
        explanation:
          "`.gitignore` lists files and directories that Git should not track.",
      },
      {
        question: "Which command checks repo status?",
        options: ["git status", "git check", "git info", "git log"],
        answer: "git status",
        explanation:
          "`git status` shows changes, staged files, and untracked files.",
      },
      {
        question: "Which command removes a branch?",
        options: ["git branch -d", "git delete", "git remove", "git discard"],
        answer: "git branch -d",
        explanation: "`git branch -d <branch>` deletes a branch safely.",
      },
    ],
  },
  {
    subjectName: "DBMS",
    icon: "https://cdn-icons-png.flaticon.com/128/13651/13651001.png",
    questions: [
      {
        question: "DBMS stands for?",
        options: [
          "Database Management System",
          "Data Business Management System",
          "Database Manipulation Service",
          "Data Backup Management System",
        ],
        answer: "Database Management System",
        explanation: "DBMS is software that manages data in a structured form.",
      },
      {
        question: "Which of the following is not a DBMS?",
        options: ["Oracle", "MySQL", "Linux", "PostgreSQL"],
        answer: "Linux",
        explanation: "Linux is an operating system, not a database system.",
      },
      {
        question: "Primary key must be?",
        options: [
          "Unique & Not Null",
          "Nullable",
          "Duplicated",
          "Indexed only",
        ],
        answer: "Unique & Not Null",
        explanation:
          "A primary key uniquely identifies records and cannot contain NULLs.",
      },
      {
        question: "Which command removes all rows from a table?",
        options: ["TRUNCATE", "DELETE", "DROP", "REMOVE"],
        answer: "TRUNCATE",
        explanation: "`TRUNCATE` clears data but keeps the table structure.",
      },
      {
        question: "Which normal form removes partial dependency?",
        options: ["2NF", "1NF", "3NF", "BCNF"],
        answer: "2NF",
        explanation: "2NF eliminates partial dependency in composite keys.",
      },
      {
        question: "Which language is used to query data?",
        options: ["DML", "DDL", "TCL", "DCL"],
        answer: "DML",
        explanation:
          "DML (Data Manipulation Language) includes commands like SELECT, INSERT, UPDATE.",
      },
      {
        question: "What is a foreign key?",
        options: [
          "Key linking two tables",
          "Primary key",
          "Unique key",
          "Temporary key",
        ],
        answer: "Key linking two tables",
        explanation: "Foreign keys establish relationships between two tables.",
      },
      {
        question: "Which operation combines rows from two tables?",
        options: ["JOIN", "UNION", "INTERSECT", "MERGE"],
        answer: "JOIN",
        explanation: "`JOIN` combines rows based on related columns.",
      },
      {
        question: "Which level defines data structure?",
        options: ["Schema level", "Physical level", "View level", "User level"],
        answer: "Schema level",
        explanation:
          "The schema level defines logical structure and relationships.",
      },
      {
        question: "Which type of key can have NULL values?",
        options: ["Foreign key", "Primary key", "Super key", "Candidate key"],
        answer: "Foreign key",
        explanation: "Foreign keys can contain NULL if no relationship exists.",
      },
      {
        question: "Normalization is used to?",
        options: [
          "Reduce redundancy",
          "Speed up data entry",
          "Secure data",
          "Add redundancy",
        ],
        answer: "Reduce redundancy",
        explanation:
          "Normalization organizes data to minimize redundancy and improve integrity.",
      },
      {
        question: "Which command defines a new table?",
        options: ["CREATE TABLE", "ADD TABLE", "INSERT TABLE", "DEFINE TABLE"],
        answer: "CREATE TABLE",
        explanation: "`CREATE TABLE` defines a new table in the database.",
      },
      {
        question: "Which key uniquely identifies tuples?",
        options: [
          "Primary key",
          "Foreign key",
          "Composite key",
          "Alternate key",
        ],
        answer: "Primary key",
        explanation: "Primary keys uniquely identify each tuple in a table.",
      },
      {
        question: "Which constraint ensures valid data entry?",
        options: ["CHECK", "DEFAULT", "INDEX", "VIEW"],
        answer: "CHECK",
        explanation:
          "CHECK ensures that a column’s value meets specified conditions.",
      },
      {
        question: "Which normal form eliminates transitive dependency?",
        options: ["3NF", "2NF", "1NF", "4NF"],
        answer: "3NF",
        explanation:
          "3NF ensures that non-key attributes depend only on primary keys.",
      },
    ],
  },
  {
    subjectName: "React",
    icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
    questions: [
      {
        question: "What is React?",
        options: [
          "A JavaScript library for building user interfaces",
          "A JavaScript framework for backend development",
          "A CSS framework",
          "A database system",
        ],
        answer: "A JavaScript library for building user interfaces",
        explanation:
          "React is a front-end library developed by Facebook for building UI components efficiently.",
      },
      {
        question: "What is the virtual DOM in React?",
        options: [
          "A lightweight copy of the real DOM",
          "A direct representation of HTML elements",
          "A database structure",
          "A CSS rendering engine",
        ],
        answer: "A lightweight copy of the real DOM",
        explanation:
          "Virtual DOM is an in-memory representation of the real DOM that allows faster updates.",
      },
      {
        question: "Which method is used to update state in React?",
        options: ["setState()", "updateState()", "changeState()", "modify()"],
        answer: "setState()",
        explanation:
          "`setState()` is used in class components to update component state and trigger re-render.",
      },
      {
        question: "What is JSX?",
        options: [
          "A syntax extension that allows HTML in JavaScript",
          "A templating engine",
          "A new JavaScript version",
          "A CSS preprocessor",
        ],
        answer: "A syntax extension that allows HTML in JavaScript",
        explanation:
          "JSX lets developers write HTML-like syntax inside JavaScript, making UI creation easier.",
      },
      {
        question: "React is primarily used for?",
        options: [
          "Building user interfaces",
          "Handling databases",
          "Server-side rendering only",
          "Network management",
        ],
        answer: "Building user interfaces",
        explanation:
          "React focuses on creating reusable UI components for web and mobile applications.",
      },
      {
        question:
          "Which hook is used for managing state in functional components?",
        options: ["useState", "useEffect", "useContext", "useRef"],
        answer: "useState",
        explanation:
          "`useState` allows you to add and manage state variables in functional components.",
      },
      {
        question: "What is the purpose of useEffect hook?",
        options: [
          "To handle side effects like API calls or subscriptions",
          "To manage state",
          "To render components conditionally",
          "To create context",
        ],
        answer: "To handle side effects like API calls or subscriptions",
        explanation:
          "`useEffect` runs after render and is used for side effects such as fetching data or updating DOM.",
      },
      {
        question: "Keys in React are used for?",
        options: [
          "Identifying unique elements in a list",
          "Styling elements",
          "Improving performance directly",
          "Managing state",
        ],
        answer: "Identifying unique elements in a list",
        explanation:
          "Keys help React identify which items have changed, been added, or removed in lists.",
      },
      {
        question: "Which command is used to create a new React app?",
        options: [
          "npx create-react-app appname",
          "npm create react-app",
          "npm init react",
          "node create react-app",
        ],
        answer: "npx create-react-app appname",
        explanation:
          "The `npx create-react-app appname` command sets up a new React project with all configurations.",
      },
      {
        question: "Which company developed React?",
        options: ["Facebook", "Google", "Microsoft", "Twitter"],
        answer: "Facebook",
        explanation:
          "React was developed by Facebook in 2013 to simplify building dynamic UIs.",
      },
      {
        question: "What are components in React?",
        options: [
          "Reusable building blocks of UI",
          "Functions that handle routing",
          "Database connections",
          "Server-side scripts",
        ],
        answer: "Reusable building blocks of UI",
        explanation:
          "Components are independent and reusable pieces of code that define how a part of the UI should appear.",
      },
      {
        question: "Props in React are used to?",
        options: [
          "Pass data from parent to child components",
          "Change the component’s state",
          "Manage routing",
          "Connect to APIs",
        ],
        answer: "Pass data from parent to child components",
        explanation:
          "Props are used for data transfer between components in a one-way (top-down) flow.",
      },
      {
        question: "Which hook is used to access context data?",
        options: ["useContext", "useState", "useEffect", "useReducer"],
        answer: "useContext",
        explanation:
          "`useContext` allows functional components to consume context values directly.",
      },
      {
        question: "What does ReactDOM.render() do?",
        options: [
          "Renders React elements into the DOM",
          "Compiles JSX code",
          "Runs React server",
          "Updates component state",
        ],
        answer: "Renders React elements into the DOM",
        explanation:
          "`ReactDOM.render()` takes React elements and mounts them into the specified DOM container.",
      },
      {
        question: "What is the default port for React development server?",
        options: ["3000", "8080", "5000", "4000"],
        answer: "3000",
        explanation:
          "React’s development server runs on port 3000 by default when started with `npm start`.",
      },
    ],
  },
  {
    subjectName: "Computer Network",
    icon: "https://cdn-icons-png.flaticon.com/128/3598/3598209.png",
    questions: [
      {
        question: "What is the full form of LAN?",
        options: [
          "Local Access Network",
          "Local Area Network",
          "Logical Area Network",
          "Long Area Network",
        ],
        answer: "Local Area Network",
        explanation:
          "LAN connects computers within a limited area like an office or school.",
      },
      {
        question: "Which device connects multiple networks?",
        options: ["Router", "Switch", "Hub", "Repeater"],
        answer: "Router",
        explanation:
          "Routers connect and manage communication between multiple networks.",
      },
      {
        question: "What does IP stand for?",
        options: [
          "Internet Protocol",
          "Internal Program",
          "Internet Path",
          "Interface Protocol",
        ],
        answer: "Internet Protocol",
        explanation:
          "IP defines how data packets are addressed and routed across networks.",
      },
      {
        question: "Which layer in OSI handles routing?",
        options: ["Network", "Transport", "Data Link", "Session"],
        answer: "Network",
        explanation:
          "The Network layer is responsible for routing and logical addressing.",
      },
      {
        question: "Which protocol is used to send emails?",
        options: ["SMTP", "FTP", "HTTP", "SNMP"],
        answer: "SMTP",
        explanation:
          "SMTP (Simple Mail Transfer Protocol) is used for sending emails.",
      },
      {
        question: "Which device operates at the Data Link layer?",
        options: ["Switch", "Router", "Bridge", "Hub"],
        answer: "Switch",
        explanation:
          "Switches operate at Layer 2 and forward frames based on MAC addresses.",
      },
      {
        question: "What is the port number for HTTP?",
        options: ["80", "21", "25", "110"],
        answer: "80",
        explanation: "HTTP uses port 80 by default for web communication.",
      },
      {
        question: "Which layer ensures reliable transmission?",
        options: ["Transport", "Network", "Session", "Physical"],
        answer: "Transport",
        explanation:
          "The Transport layer ensures reliable delivery through TCP.",
      },
      {
        question: "Full form of IP?",
        options: [
          "Internet Protocol",
          "Internal Process",
          "Interconnected Protocol",
          "Interface Point",
        ],
        answer: "Internet Protocol",
        explanation: "IP defines rules for addressing and routing packets.",
      },
      {
        question: "What is the range of Class C IP addresses?",
        options: [
          "192.0.0.0 - 223.255.255.255",
          "128.0.0.0 - 191.255.255.255",
          "1.0.0.0 - 126.255.255.255",
          "224.0.0.0 - 239.255.255.255",
        ],
        answer: "192.0.0.0 - 223.255.255.255",
        explanation:
          "Class C IPs are used for small networks and have 24-bit network IDs.",
      },
      {
        question: "Which protocol is connection-oriented?",
        options: ["TCP", "UDP", "IP", "HTTP"],
        answer: "TCP",
        explanation: "TCP establishes a connection before transmitting data.",
      },
      {
        question: "What is DNS used for?",
        options: [
          "Resolve domain names to IP",
          "Encrypt data",
          "Cache websites",
          "Store cookies",
        ],
        answer: "Resolve domain names to IP",
        explanation:
          "DNS translates human-readable domain names into IP addresses.",
      },
      {
        question: "Which device regenerates signals?",
        options: ["Repeater", "Router", "Bridge", "Switch"],
        answer: "Repeater",
        explanation:
          "Repeaters amplify and retransmit weak signals in a network.",
      },
      {
        question: "Which topology connects all nodes to a central hub?",
        options: ["Star", "Bus", "Ring", "Mesh"],
        answer: "Star",
        explanation:
          "In star topology, each node connects to a central device like a hub.",
      },
      {
        question: "Which layer adds headers and trailers?",
        options: ["Data Link", "Network", "Application", "Session"],
        answer: "Data Link",
        explanation:
          "The Data Link layer frames packets with headers and trailers for transmission.",
      },
      {
        question: "Which protocol transfers files?",
        options: ["FTP", "SMTP", "HTTP", "SNMP"],
        answer: "FTP",
        explanation:
          "FTP (File Transfer Protocol) is used for transferring files over a network.",
      },
    ],
  },
  {
    subjectName: "Operating System",
    icon: "https://cdn-icons-png.flaticon.com/128/882/882702.png",
    questions: [
      {
        question: "An operating system acts as?",
        options: ["User interface", "Hardware", "Resource manager", "Compiler"],
        answer: "Resource manager",
        explanation:
          "The OS manages system resources like CPU, memory, and devices efficiently.",
      },
      {
        question: "Which of the following is not a function of OS?",
        options: [
          "Memory management",
          "Compiler design",
          "File management",
          "Process scheduling",
        ],
        answer: "Compiler design",
        explanation:
          "Compiler design is part of programming language implementation, not the OS.",
      },
      {
        question: "What is a process?",
        options: ["Program in execution", "Stored program", "Job", "Thread"],
        answer: "Program in execution",
        explanation:
          "A process is an instance of a program currently being executed.",
      },
      {
        question: "Which of these is not a type of OS?",
        options: ["Batch", "Time-sharing", "Real-time", "Microcode OS"],
        answer: "Microcode OS",
        explanation: "Microcode is part of CPU design, not an OS type.",
      },
      {
        question: "Context switching is related to?",
        options: [
          "Process scheduling",
          "Memory allocation",
          "File handling",
          "Device management",
        ],
        answer: "Process scheduling",
        explanation:
          "Context switching saves and restores process states during CPU scheduling.",
      },
      {
        question: "The part of OS that interacts with hardware is?",
        options: ["Kernel", "Shell", "Application", "Command interpreter"],
        answer: "Kernel",
        explanation:
          "The kernel is the core component that directly interacts with hardware.",
      },
      {
        question: "Virtual memory is used to?",
        options: [
          "Increase physical memory",
          "Provide larger memory space",
          "Speed up CPU",
          "Manage cache",
        ],
        answer: "Provide larger memory space",
        explanation: "Virtual memory extends physical memory using disk space.",
      },
      {
        question:
          "Which scheduling algorithm gives equal time to each process?",
        options: ["Round Robin", "FCFS", "SJF", "Priority"],
        answer: "Round Robin",
        explanation:
          "Round Robin scheduling gives each process a fixed time slice in cyclic order.",
      },
      {
        question: "Deadlock occurs when?",
        options: [
          "Processes wait for each other",
          "Memory is full",
          "Disk crashes",
          "Cache misses",
        ],
        answer: "Processes wait for each other",
        explanation:
          "A deadlock happens when processes hold resources and wait indefinitely for others.",
      },
      {
        question: "What is a semaphore used for?",
        options: [
          "Synchronization",
          "Memory allocation",
          "CPU scheduling",
          "I/O handling",
        ],
        answer: "Synchronization",
        explanation:
          "Semaphores are used to synchronize processes and prevent race conditions.",
      },
      {
        question: "Which OS is open-source?",
        options: ["Windows", "Linux", "MacOS", "MS-DOS"],
        answer: "Linux",
        explanation: "Linux is an open-source operating system kernel.",
      },
      {
        question: "What is thrashing?",
        options: [
          "High paging activity",
          "Memory overflow",
          "CPU failure",
          "File corruption",
        ],
        answer: "High paging activity",
        explanation:
          "Thrashing occurs when excessive paging slows system performance.",
      },
      {
        question: "What is a thread?",
        options: ["Lightweight process", "Program", "File", "Command"],
        answer: "Lightweight process",
        explanation:
          "A thread is the smallest unit of CPU scheduling and execution.",
      },
      {
        question: "Which memory is non-volatile?",
        options: ["RAM", "Cache", "ROM", "Registers"],
        answer: "ROM",
        explanation: "ROM retains its data even when power is turned off.",
      },
      {
        question: "Spooling stands for?",
        options: [
          "Simultaneous Peripheral Operation Online",
          "Simple Process Output Operation",
          "Sequential Process Online",
          "System Peripheral Output Layer",
        ],
        answer: "Simultaneous Peripheral Operation Online",
        explanation:
          "Spooling allows processes to queue I/O operations for devices like printers.",
      },
    ],
  },
];
