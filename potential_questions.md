+ What is javascript
    JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.
    It is a programming language that is characterized as dynamicly typed, prototype-based, and multi-paradigm.
    Javascript is an interpreted language. It is directly interpreted by browsers for execution.
    But, modern browsers support JIT compilation which converts it to bytecodes for high performance.

+ What is ECMAScript
    ECMAScript (/ˈɛkməskrɪpt/; ES) is a standard for scripting languages, including JavaScript, JScript, and ActionScript
    It is best known as a JavaScript standard intended to ensure the interoperability of web pages across different web browsers. It is standardized by Ecma International

+ What is the difference between null and undefined
    Undefined means a variable has been declared but has not yet been assigned a value.
    On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value.
    Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.

+ What is the difference between == and ===
    The == operator checks equality only after doing necessary type conversions.
    The === operator does not do type conversion for equality.

+ What is typescript
    TypeScript is an open-source programming language developed and maintained by Microsoft.
    It is a superset of JavaScript and adds optional static typing to the language.
    It transpiles to JavaScript and is used to develop large applications. 
    (Transpiling is a specific term for taking source code written in one language and transforming into another language that has a similar level of abstraction.)

+ related to hoisting concept in javascript, closures, callbacks
    hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
    This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

    A closure is a function that can access its own scope and the scope of its outer function, even after the outer function has finished executing.
    Closure is the combination of a function bundled together with references to its surrounding state.
    In other words, closures give you access to an outer function’s scope from an inner function.
    In JavaScript, closures are created every time a function is created, at function creation time.

    Callbacks are functions that are passed as arguments to other functions. They are used to execute some procedure during or after the execution of a certain task.

+ heap memory, thread safety, Sync, MVVM, Clean architecture, Code coverage, View Model, Architecture patterns, higher order functions.
    Heap memory is a segment of memory that is used for dynamic memory allocation. It is a part of the memory where the objects are stored.
    
    Thread safety is a computer programming concept applicable in the context of multi-threaded programs. 
    A piece of code is thread-safe if it functions correctly during simultaneous execution by multiple threads.

    Synchronous programming, or blocking, means that the code will block or stop the execution until an operation is completed.

    MVVM stands for Model-View-ViewModel. It is a software architectural pattern that facilitates the separation of the development of the graphical user interface (the view)
    be it via a markup language or GUI code from the development of the business logic or back-end logic (the model) so that the view is not dependent on any specific model platform.

    Clean architecture is a software design philosophy that separates the elements of a design into ring levels.
    The main rule of clean architecture is that code dependencies can only come from the outer levels inward.
    The outermost level is the most abstract and the innermost level is the most concrete.

    Code coverage is a measure used to describe the degree to which the source code of a program is executed when a particular test suite runs.

    The ViewModel class is a business logic or screen level state holder. It exposes state to the UI and encapsulates related business logic

    Architecture patterns are general, reusable solutions to a commonly occurring problem in software architecture within a given context.

    Higher-order functions are functions that take other functions as arguments or return them as results.

+ Difference between var, let and const    
    var declarations are globally scoped or function scoped while let and const are block scoped.

    var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

    They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
    
    While var and let can be declared without being initialized, const must be initialized during declaration.

    
+ SOLID principles, ACID properties, Debugging methods.
    SOLID principles are five principles of object-oriented programming intended to make software designs more understandable, flexible, and maintainable.
    Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, Dependency Inversion Principle.
    The single responsibility principle states that a class should have only one reason to change.
    The open/closed principle states that a class should be open for extension but closed for modification.
    The Liskov substitution principle states that objects of a superclass shall be replaceable with objects of its subclasses without affecting the functionality.
    The interface segregation principle states that a client should never be forced to implement an interface that it doesn’t use 
    or clients shouldn’t be forced to depend on methods they do not use.
    The dependency inversion principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions. 
    (basically says that a module shouldn't care about the implementation details of its dependencies)

    ACID properties are a set of properties that guarantee that database transactions are processed reliably.
    Atomicity, Consistency, Isolation, Durability.
    Atomicity means that a transaction is all or nothing, meaning that if one part of the transaction fails, the entire transaction fails.
    Consistency means that a transaction takes the database from one consistent state to another.
    Isolation means that multiple transactions can occur concurrently without affecting each other.
    Durability means that once a transaction has been committed, it will remain so, even in the event of a system failure.

    Debugging is the process of finding and resolving defects or problems within a computer program that prevent correct operation of computer software or a system.
    Methods include using print statements and debugging tools commonly found in IDEs like breakpoints, stepping through code.

+ Transactions and horizontal scaling of databases
    Transactions are a set of operations that are executed as a single unit of work. 
    A transaction can be a single SQL statement or a group of statements. 
    A transaction is a unit of work that is performed against a database. 

    Horizontal scaling means that you scale by adding more machines into your pool of resources. 
    Horizontal scaling is the ability to connect multiple hardware or software entities so that they work as a single logical unit.

+ What is a relational database
    A relational database is a collection of information that organizes data in predefined relationships where data is stored in one or more tables (or "relations")
    of columns and rows, making it easy to see and understand how different data structures relate to each other.

    columns are the fields in a table, and rows are the records.

+ RDBMS properties
    A Relational Database Management System (RDBMS) is a type of database management system that stores data in a structured format using rows and columns.
    Many relational database systems are equipped with the option of using SQL (Structured Query Language) for querying and updating the database.

    Some popular RDBMS are MySQL, Oracle, SQL Server, PostgreSQL, SQLite.

    Relational Database → The actual structured data stored on disk. It doesn't "understand" SQL on its own.
    RDBMS → The software (like PostgreSQL, MySQL, SQLite) that implements the relational model and interprets SQL queries.
    SQL → A standardized language that allows developers/applications to communicate with the RDBMS to manage and query the relational database.
    
    Most RDBMSs use SQL as their query language and follow ACID properties to ensure reliable transactions.

+ Discuss the differences between SQL and NoSQL databases. 
    NoSQL (Non-SQL or Not only SQL) databases use a flexible schema model that supports a wide variety of unstructured data such as documents, key-value and more.
    Organizations choose NoSQL databases for their flexibility, high performance, horizontal scalability, and ease of development.
    you have the advantage of quick prototyping at the cost of potential later re-work: you may manage to avoid deeply thinking about your data model when you start your project,
    but eventually you will be forced to do so and it will be harder when you've already got a bunch of data.
    Usually NoSQL are great supplement to SQL databases, not a replacement.
    
    1. Data Structure
        SQL Databases: Use a structured, tabular format with predefined schemas (tables, rows, columns). They follow the ACID (Atomicity, Consistency, Isolation, Durability) principles
        NoSQL Databases: Use flexible, schema-less structures such as key-value stores, document stores, column-family stores, or graph databases.

    2. Scalability
        SQL Databases: Scale vertically (adding more power to a single server).
        NoSQL Databases: Scale horizontally (adding more servers to distribute the load).

    3. Query Language
        SQL Databases: Use Structured Query Language (SQL) for data manipulation.
        NoSQL Databases: Use different query models depending on the type

    4. Flexibility
        SQL Databases: Require a fixed schema, making changes sometimes more time consuming.
        NoSQL Databases: Offer schema-less structures, allowing dynamic changes.

    5. Consistency vs. Availability (CAP Theorem)
        SQL Databases: Prioritize Consistency and Partition Tolerance (CP).
        NoSQL Databases: Often prioritize Availability and Partition Tolerance (AP).

    6. Use Cases
        SQL Databases: Best for structured data, complex queries, and transactions (e.g., banking, inventory systems).
        NoSQL Databases: Ideal for unstructured or semi-structured data, scalability, and high availability (e.g., real-time analytics, social media upvotes).

    7. Examples
        SQL: MySQL, PostgreSQL, SQLite
        NoSQL: MongoDB (document store), Redis (key-value store), Cassandra (column-family store)

+ What is the CAP theorem
    The CAP theorem says that a distributed system can deliver only two of three desired characteristics: consistency, availability and partition tolerance

+ SQL joins, queries.
    A JOIN clause is used to combine rows from two or more tables, based on a related column between them.
    The two most common types of joins are: Inner Join and Left Join.
    Inner Join: Returns records that have matching values in both tables.
    Left Join: Returns all records from the left table, and the matched records from the right table.
    Right Join: Returns all records from the right table, and the matched records from the left table.
    Full Join: Returns all records when there is a match in either left (table1) or right (table2) table records. (Same as Union of Left Join and Right Join, but without duplicates)

+ What are some of the SQL command categories
    SQL commands are divided into several different categories:
    - DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE, RENAME
    - DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE
    - DCL (Data Control Language): GRANT, REVOKE
    - TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT
    - DQL (Data Query Language): SELECT
    https://github.com/bobbyiliev/introduction-to-sql/blob/main/ebook/en/content/012-sql-commnad-categories.md

+ Javascript Object assignment related questions
+ What are iterators
    An iterator is an object that progressively provides access to each item of a collection, in order.
    Iterators are just special objects that allow you to "walk" or "traverse" over a collection of data.
    The iterator has methods like next() that allow you to sequentially access the data, step by step.

    An object is iterable if it defines its iteration behavior, such as what values are looped over in a for...of construct.
    Some built-in types, such as Array or Map, have a default iteration behavior, while other types (such as Object) do not.
    In order to be iterable, an object must implement the [Symbol.iterator]() method.
    This means that the object (or one of the objects up its prototype chain) must have a property with a Symbol.iterator key.

+ What are generators
    Generators are functions that can be paused and resumed. They are created using a function* declaration.
    When called, generator functions do not execute their code. Instead, they return a special type of iterator called a generator.
    The generator can then be used to control the execution of the generator function.
    Generators are useful when you need to iterate over a sequence of values, but you don't want to compute all the values at once.
    Instead, you want to compute the values one at a time, on demand.

+ this, call, apply, bind
    The keyword this refers to the value of the object that is bound to the function at the time of its call,
    meaning that its value is different depending on whether a function is called as a method, as a standalone function, or as a constructor.

    Use .bind() when you want that function to later be called with a certain context, useful in events.
    Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

    Call/apply call the function immediately, whereas bind returns a function that, when later executed, will have the correct context set for calling the original function.
    This way you can maintain context in async callbacks and events.

+ What is strict mode
    JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode".
    Strict mode isn't just a subset: it intentionally has different semantics from normal code.
    Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.

    Strict mode makes several changes to normal JavaScript semantics:

    Eliminates some JavaScript silent errors by changing them to throw errors.
    Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
    Prohibits some syntax likely to be defined in future versions of ECMAScript.
    
    for example:
    x = 10 would create a global variable even if it was not defined
    but when running with strict mode it will throw an error


+ Super in js
    The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
    super is an ECMAScript6 (ES6) feature.
    ES6 (JavaScript 2015) is supported in all modern browsers since June 2017

 + Multithreading in javascript
    As we know JavaScript is a single-threaded programming language, which means it has a single thread that handles all the execution sequentially.
    Single-threaded means one line of code run at once.
    Originally, Javascript is single-threaded because it was just used in web browser scripting language for a single user but nowadays it evolve into something bigger 
    and make the computation very huge.

    Workers (Available in both the web env and node) are giving us the possibility to write multi-threaded JavaScript, which does not block the DOM.
    Even the Asynchronous operations block the DOM to some extent.
    On the other side, web workers help us to solve this problem, escaping the single-threaded environment and reaching a higher performance of our web pages.
    Basically, web workers run the script in the background thread and which avoids the interference in user interface.
    Due to the feature of a background thread, we can create or run a costly operation.

+ Event loop 
    Event loop is a component of the JavaScript runtime that handles the execution of code, collecting and processing events, and executing queued sub-tasks.
    In the runtime we also have closely related components like the Call stack, Task queue (also called Macrotask queue) and the Microtask queue.
    All of these components work together to handle the execution of code in a single-threaded, non-blocking manner.
    Calling Web apis offloads the work to the browser, and these types of apis are either callback-based or promise-based.
    On callback based apis, the callback is added to the call stack just for registering the callback and initiating the async task.
    The callback is then immediately removed from the call stack. When the async task is completed, the callback is added to the task queue. (it is also called the callback queue)
    The task queue holds the web api callbacks and event handlers to be executed sometime in the future.
    When the call stack is empty, the event loop checks the task queue and if there is a callback, it is added to the call stack for execution, one at a time.
    setTimeout is a web api that is callback-based, and it is used to schedule a task to be executed.
    So the delay we specify is just the time it takes for it to get added to the task queue and not necesseraly executed.
    When working with promises, we work with the microtask queue. 
    The microtask queue is a special queue dedicated to then, catch, finally callbacks, function body execution after await,
    the queue microtask callback and the mutation observer callback.
    The event loop will always prioritize the microtask queue over the task queue. Before the event loop checks the task queue, it will first check the microtask queue is empty.
    


+ Microstask in javascript
    A microtask is a short function which is executed after the function or program which created it exits and only if the JavaScript execution stack is empty.
    Microtasks are enqueued in the microtask queue and are executed in the same order they were added.
    Microtasks are executed before the next rendering, so they are often used to make changes before the next repaint or reflow.
    Microtasks are used in JavaScript for promises, mutation observers, and other asynchronous tasks that need to be executed.

+ What is scope
    Scope in JavaScript refers to the context or environment in which variables, functions are declared and accessible.

+ Scope chaining
    Scope chaining is the process by which JavaScript searches for variables in nested scopes when they are not found in the immediate scope.
    Each function in JavaScript has its own lexical scope.
    If a variable is not found in the current scope, JavaScript looks in the outer scope, continuing this process up to the global scope.
    The chain of nested scopes forms the scope chain.

+ Promises, observables
    A promise is an object representing the eventual completion or failure of an asynchronous operation.
    A Promise is in one of these states:
        pending: initial state, neither fulfilled nor rejected.
        fulfilled: meaning that the operation was completed successfully.
        rejected: meaning that the operation failed.

    An Observable is a data stream that emits values over time, allowing subscribers to react to new data, handle errors, and know when the stream completes.

+ Name some of the newer features of javascript, ES6 and beyond
    let & const (block-scoped variables)
    Arrow functions (() => {})
    Template literals (`Hello, ${name}!`)
    Destructuring assignment (const { x, y } = obj;)
    Default parameters (function greet(name = 'Guest') {})
    Spread/rest operators (... syntax)
    Classes (class Person {})
    Promises (new Promise((resolve, reject) => {}))

    Object.values() & Object.entries()
    Array.prototype.toSorted(), toSpliced(), with()

+ What happens to Typescript after building?
    It gets transpiled to JavaScript code that can be run in the browser or in a Node.js environment.
    During compilation, the TypeScript compiler performs static type checking. If there are any type errors, it will report them.
    You configure the target JavaScript version in the tsconfig.json file (e.g., ES5, ES6, ES2020, etc.). 
    The compiler will try to output JavaScript code compatible with the specified target.
    For example, if you use ES6 features in your TypeScript code and target ES5, the compiler will convert those ES6 features into equivalent ES5 code
    But it doesn't automatically include polyfills for missing JavaScript features.
    The compiler generates .js files corresponding to your .ts files. It can also generate declaration files (.d.ts) which contain type information about your code.
     It's important to note that TypeScript's type checking is primarily a compile-time feature.

+ What is node
    Node.js is a runtime environment that allows you to execute JavaScript code outside of a web browser.
    Traditionally, JavaScript was primarily used for front-end web development, running inside browsers to create interactive user interfaces.
    Node.js brought JavaScript to the server-side, enabling developers to use the same language for both the front-end and back-end of web applications.
    A "runtime" or "runtime environment" is a software environment that provides the necessary services and resources for a specific program or application to execute.
    It acts as an intermediary between the operating system and the application, handling tasks like memory management, input/output operations, and access to system resources.

    Node.js uses Google's V8 JavaScript engine (the same one used in Chrome) to execute JavaScript code.
    This engine JIT's JavaScript.
    Event-Driven, Non-Blocking I/O: Node.js uses an event-driven, non-blocking I/O model.
    This means that instead of waiting for an operation to complete (like reading a file or making a network request), Node.js can handle other tasks while waiting for the result.
    NPM is the package manager for Node.js. It's the largest ecosystem of open-source libraries in the world.
    Node.js runs on various operating systems, including Windows, macOS, and Linux.

+ ES module vs CommonJS module
    JavaScript modules are reusable pieces of code that can be imported and used in other JavaScript files.
    They help organize code, improve maintainability, and promote code reuse. Modules encapsulate functionality, preventing naming conflicts and making it easier to manage dependencies.

    There are two main module systems in JavaScript:
        ES Modules (ECMAScript Modules): This is the official standard module system for JavaScript, introduced in ECMAScript 2015 (ES6).
        CommonJS (CJS): This module system was originally designed for Node.js and has been widely used in server-side JavaScript development.

    Browsers and Node.js: ESM is the standard module system for modern browsers.
    Node.js has also added support for ESM, although it initially used CommonJS. 
    To use ESM in Node.js, you typically need to use the .mjs file extension or set "type": "module" in your package.json file.
    Loading is synchronous(step by step) for require on the other hand import can be asynchronous(without waiting for previous import) so it can perform a little better than require.
    Biggest difference that affects code is that exports in CommonJS modules are "computed", whereas exports in an ESM module are static (pre-defined).
    JS can determine the exports in an ESM module after only parsing the code (not yet running it).
    In a commonJS module, the exports are only known when the module actually runs and you see what is assigned to module.
    exports when the module initialization code finishes running.

+ how does node module resolution work?
    Node.js module resolution prioritizes core modules, then file paths (absolute or relative), and finally, modules in node_modules directories.
    node_modules searches start locally and ascend the directory tree. For node_modules, the package.json's main field dictates the entry point;
    otherwise, index.js is loaded. The search stops upon finding a match.
    ES modules (import/export) have slightly different resolution rules.

+ OOP Principles 
    Abstraction, encapsulation, polymorphism, and inheritance are the four main theoretical principles of object-oriented programming
    Abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation.
    Encapsulation is defined as the wrapping up of data under a single unit. It is the mechanism that binds together code and the data it manipulates.
    Inharitance is the capability of a class to derive properties and characteristics from another class is called Inheritance. For example, a child inherits the traits of his/her parents.
    Polymorphism is the ability (in programming) to present the same interface for differing underlying forms (data types).
     It is the practice of designing objects to share behaviors and to be able to override shared behaviors with specific ones.
    Polymorphism takes advantage of inheritance in order to make this happen.


+ What is clean code and its principles
    "Clean Code" is a software development philosophy emphasizing readability, simplicity, and maintainability in source code.
    It's about writing code that is easy to understand, modify, and extend, reducing the likelihood of bugs and making collaboration more efficient.
    Here are some key principles of Clean Code, often associated with Robert C. Martin's book "Clean Code: A Handbook of Agile Software Craftsmanship":

    General Principles:
    Readability: Code should be easy to read and understand, even by someone unfamiliar with the specific project. This is arguably the most important principle.
    Simplicity: Avoid unnecessary complexity. Strive for the simplest solution that meets the requirements. "Keep It Simple, Stupid" (KISS) is a relevant adage.
    Maintainability: Code should be easy to modify and extend without introducing new bugs or requiring significant rework.
    Testability: Code should be written in a way that makes it easy to write unit tests and integration tests.
    DRY (Don't Repeat Yourself): Avoid duplication of code. Extract common logic into reusable functions or classes.
    YAGNI (You Ain't Gonna Need It): Don't add functionality until you actually need it. Avoid premature optimization and over-engineering.

    In practice things like:
    Choose descriptive and unambiguous names for variables, functions, and classes.
    Write small functions that do one thing and do it well.
    Functions should not have unexpected side effects.
    Minimize the number of function arguments.
    Comments should explain why, not what. The code should be self-explanatory.
    Use consistent formatting and indentation.
    Avoid deeply nested code structures.


+ Exeptions
    An exception is an event that occurs during the execution of a program that disrupts the normal flow of instructions.
    When an error occurs, JavaScript will normally stop and generate an error message.
    The technical term for this is: JavaScript will throw an exception (throw an error). JavaScript will actually create an Error object with two properties: name and message.
    The throw statement allows you to create a custom error.
    The try statement allows you to define a block of code to be tested for errors while it is being executed
    The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
    The finally statement lets you execute code, after try and catch, regardless of the result (even if you return from a function).

+ What is prototypal inheritance?
    Prototypal inheritance is a way to create objects that inherit properties and methods from other objects.
    In JavaScript, objects can inherit from other objects through the prototype chain.
    When you access a property or method on an object, JavaScript will first look for it on the object itself.
    If it doesn't find it, it will look for it on the object's prototype, and so on up the prototype chain.
    This allows you to create objects that share common properties and methods without duplicating code.

+ What is reflection
    Reflection in programming is the ability of a program to inspect, analyze, and modify its own structure and behavior at runtime.
    It allows a program to examine its own classes, methods, properties, and metadata dynamically.
    This is particularly useful for debugging, serialization, dependency injection, and frameworks that need to interact with unknown types at runtime.

+ What is dom, differece between css and sass
    The Document Object Model (DOM) is a programming interface for web documents.
    It represents the page so that programs can change the document structure, style, and content.
    The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
    A web page is a document that can be displayed in the browser window
    The DOM is a tree-structure representation of all the elements of a Web page.

    Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML.

    SASS (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into CSS.
    Sass stands for Syntactically Awesome Stylesheet, which is a preprocessor scripting language that is interpreted or compiled into CSS.
    Sass is an extension to CSS
    Sass is a CSS pre-processor
    Sass is completely compatible with all versions of CSS
    Sass can reduce repetition of CSS saving time, and also has useful functions like color manipulation, math functions,
    and other values to help make CSS code more pleasant to work with and easier to maintain.

+ Explain the concept of virtual DOM and its advantages. 
    The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.
    This process is called reconciliation.
    This approach enables the declarative API of React: You tell React what state you want the UI to be in,
    and it makes sure the DOM matches that state. This abstracts out the attribute manipulation,
    event handling, and manual DOM updating that you would otherwise have to use to build your app.
    Is the Shadow DOM the same as the Virtual DOM?

    It is not the same as the shadow DOM. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components.
    The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.
    React Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM. Read more.

+ HTTP, URL, DNS and REST API theory questions
    The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web,
    and is used to load webpages using hypertext links.
    HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack.

    HTTP (Hypertext Transfer Protocol) is a set of rules that define how data is transferred between a client and server on the internet.

    A URL (Uniform Resource Locator) is the address of a unique resource on the internet. It is one of the key mechanisms used by browsers to retrieve published resources,
    such as HTML pages, CSS documents, images, and so on.
    It consists of a protocol/scheme, subdomain, domain, top-level domain, port, path, and optional query parameters and fragment identifier. 
    (fragment identifier is the part after # and is an internal page reference, sometimes called a named anchor.)
     
     The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like google.com
    Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
    
    REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web,
    making it easier for systems to communicate with each other.
    REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server.
    Systems that follow the REST paradigm are stateless, meaning that the server does not need to know anything about what state the client is in and vice versa.
    In this way, both the server and the client can understand any message received, even without seeing previous messages.

+ Main HTTP methods
    GET: The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
    POST: The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
    DELETE: The DELETE method deletes the specified resource.
    PUT: The PUT method replaces all current representations of the target resource with the request payload.
    PATCH: The PATCH method is used to apply partial modifications to a resource.
    OPTIONS: The OPTIONS method is used to describe the communication options for the target resource.
    HEAD: The HEAD method asks for a response identical to that of a GET request, but without the response body.

+ What is CORS and CSP
    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port)
    other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight"
    request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.
    In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

    Content Security Policy (CSP) is a feature that helps to prevent or minimize the risk of certain types of security threats.
    It consists of a series of instructions from a website to a browser, which instruct the browser to place restrictions on the things that the code comprising the site is allowed to do.
    The primary use case for CSP is to control which resources, in particular JavaScript resources, a document is allowed to load.
     This is mainly used as a defense against cross-site scripting (XSS) attacks, in which an attacker is able to inject malicious code into the victim's site.

+ What is XSS and CSRF
    Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites.
    XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.
    Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web 
    application uses input from a user within the output it generates without validating or encoding it.
    Validating and sanitizing user input can help prevent XSS attacks.

    Cross-site request forgery (also known as CSRF) is a web security vulnerability that allows an attacker to induce users to perform actions that they do not intend to perform.
    It allows an attacker to partly circumvent the same origin policy, which is designed to prevent different websites from interfering with each other.
    CSRF attacks specifically target state-changing requests, not theft of data, since the attacker has no way to see the response to the forged request.
    SameSite cookies can help prevent CSRF attacks by ensuring that cookies are sent only in requests initiated by the same site that set the cookie.
    CSRF tokens are another common defense against CSRF attacks. They are unique, unpredictable values that are generated by the server and included in each request.

+ How can hackers attack you website / app? 
    With common attack vectors like SQL injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), Distributed Denial of Service (DDoS), Brute Force and more.

+ What is an idempotent in rest api. 
    An idempotent HTTP method is an HTTP method that can be called many times without different outcomes.
    It would not matter if the method is called only once, or ten times over. The result should be the same.
    PUT and DELETE are idempotent, while POST is not.
    Common idempotent methods: GET, HEAD, PUT, DELETE, OPTIONS
    Common non-idempotent methods: POST, PATCH

+ CSS animation transition
    CSS transitions provide a way to control animation speed when changing CSS properties.
    Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time.
    For example, if you change the color of an element from white to black, usually the change is instantaneous.
    With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized.

+ Micro service architecture in your project
    Microservices architecture (often shortened to microservices) refers to an architectural style for developing applications.
    Microservices allow a large application to be separated into smaller independent parts, with each part having its own realm of responsibility.
    Each microservice can be developed, deployed, and scaled independently.
    Microservices are typically organized around business capabilities and are independently deployable.

+ Discuss the components of a microservices-based system
    Some of the components are:
    API Gateway
    A single entry point for all client requests, the API gateway routes requests to the appropriate microservices and aggregates responses.
    Service Discovery
     A mechanism that allows microservices to find and communicate with each other dynamically, especially in a cloud environment where service instances may change frequently.
     Communication Protocols
     Microservices communicate with each other using appropriate protocols. (REST apis, gRPC, Message queues like SQS, RabbitMQ)
     Data Management
     Each microservice manages its own database, ensuring loose coupling and data autonomy.
     Load Balancing
     Distributing incoming requests across multiple instances of a service to ensure high availability and reliability.
     Containerization and Orchestration
     Packaging microservices into containers and managing their deployment and scaling. (Docker, Kubernetes)

+ Can you name the benefits and disadvantages of the microservices architecture?
    It allows for independent development and deployment of services, which can speed up development and deployment if the overall development team is large enough.
    It can also allow for more flexibility in terms of technology choices, as different services can be written in different languages or use different frameworks.
    Microservices can also be more resilient to failure, as a failure in one service does not necessarily mean a failure in the entire application.
    However, microservices can also introduce complexity, as managing the interactions between services can be challenging.
    They can also introduce performance overhead, as services need to communicate over a network, which can be slower than in-process communication.

    Overall, microservices make more sence when you have a large team and a large project, otherwise might not be worth it and a monolithic architecture might be better.

+ service discovery
    Service discovery is the process by which components in a distributed system locate and communicate with each other.

+ API gateway 
    An API gateway is an application programming interface (API) management tool that serves as a single point of entry into a system,
    sitting between the application user and a collection of backend services.
     An API gateway is a piece of software that intercepts API calls from a user and routes them to the appropriate backend service.

+ monolithic and microservices
    A monolithic architecture is a traditional unified model for the design of a software program.
    Usually, a monolithic application will exist as a single codebase that is modified by multiple teams within an organization,
    and be deployed as a single unit containing all the functionality that those teams maintain.

    Microservices architecture is a design pattern in which an application is composed of small, independent services that communicate over well-defined APIs.
    Each service is self-contained and can be developed, deployed, and scaled independently of the others.

+ Fault tolerance 
    Fault tolerance refers to the ability of a system to continue operating without interruption when one or more of its components fail.

+ Which would you prefer horizontal or vertical, how do you decide which should be used? 
    Horizontal Scaling (Scaling Out)
    What it is: Adding more machines or nodes to your system to distribute the load.
    High availability and fault tolerance: If one node fails, others can handle the load.
    Elastic workloads: When traffic is unpredictable or fluctuates significantly it can help.
    Limitations of vertical scaling: When you’ve maxed out the capacity of a single machine.
    Scalable almost indefinitely.
    Better fault tolerance and resilience.
    Can be more cost-effective in the long run.
    Disadvantages:
    Increased complexity in managing distributed systems (e.g., load balancing, data consistency).
    May require changes to the application architecture (e.g., stateless design).

    Vertical Scaling (Scaling Up)   
    Adding more resources (CPU, RAM, storage) to an existing machine.
    Simple applications: Monolithic applications that aren’t designed for distributed systems.
    Predictable workloads: When traffic is stable and doesn’t fluctuate much.
    Quick fixes: When you need immediate performance improvements without rearchitecting.
    Cost constraints: If your application doesn’t justify the cost of multiple machines.
    Simpler to implement (no need for distributed systems logic).
    No changes to application architecture required.
    Easier to manage (single machine).
    Limited by the maximum capacity of a single machine.
    Single point of failure (if the machine goes down, the entire system is affected).
    Can become expensive as high-end hardware costs rise exponentially.

+ message queues
    A message queue is a form of asynchronous service-to-service communication used in serverless and microservices architectures.
    Messages are stored on the queue until they are processed and deleted. Each message is processed only once, by a single consumer.
    Message queues can be used to decouple heavyweight processing, to buffer or batch work, and to smooth spiky workloads.

    Examples of message queues include RabbitMQ, Apache Kafka, Amazon SQS, and Google Cloud Pub/Sub.

+ Load balancer
    A load balancer is a solution that acts as a traffic proxy and distributes network or application traffic across endpoints on a number of servers.
    Load balancers are used to distribute capacity during peak traffic times, and to increase reliability of applications.

+ Openid connect and other related protocols 
    OpenID Connect (OIDC) is an authentication protocol built on top of the OAuth 2.0 framework.
    It is used for verifying the identity of users and providing authentication information to applications (clients).
    OIDC allows a user to authenticate once and then use various services without needing to log in repeatedly.
    It adds an identity layer to OAuth 2.0, making it useful for applications that require user authentication, in addition to authorization (which OAuth 2.0 handles).

    OAuth 2.0 is the industry-standard protocol for authorization. 
    OAuth 2.0 focuses on client developer simplicity while providing specific authorization flows for web applications, desktop applications, mobile phones

    Another authentication protocol is SAML (Security Assertion Markup Language)
    SAML is an older authentication protocol, often used for enterprise Single Sign-On (SSO) solutions.
    It works by exchanging XML-based authentication assertions between an identity provider (IdP) and a service provider (SP).
    Although SAML is widely used in legacy enterprise environments, it is more complex than OIDC and OAuth.

+ What is TDD
    Test-driven development (TDD) is a way of writing code that involves writing an automated unit-level test case that fails,
    then writing just enough code to make the test pass, then refactoring both the test code and the production code, then repeating with another new test case. 
    1. List scenarios for the new feature
        List the expected variants in the new behavior. 
        “There’s the basic case & then what-if this service times out & what-if the key isn’t in the database yet &…” 
        The developer can discover these specifications by asking about use cases and user stories.
        A key benefit of TDD is that it makes the developer focus on requirements before writing code.
        This is in contrast with the usual practice, where unit tests are only written after code.
    2. Write a test for an item on the list
        Write an automated test that would pass if the variant in the new behavior is met.
    3. Run all tests. The new test should fail – for expected reasons
        This shows that new code is actually needed for the desired feature. 
        It validates that the test harness is working correctly. It rules out the possibility that the new test is flawed and will always pass.
    4. Write the simplest code that passes the new test
        Inelegant code and hard coding is acceptable. The code will be honed in Step 6. No code should be added beyond the tested functionality.
    5. All tests should now pass
        If any fail, fix failing tests with minimal changes until all pass.
    6. Refactor as needed while ensuring all tests continue to pass
        Code is refactored for readability and maintainability.
        In particular, hard-coded test data should be removed from the production code.
        Running the test suite after each refactor ensures that no existing functionality is broken. Examples of refactoring:
            moving code to where it most logically belongs
            removing duplicate code
            making names self-documenting
            splitting methods into smaller pieces

+ Database Isolation Levels
    The SQL standard defines four isolation levels:  
    Read Uncommitted – Read Uncommitted is the lowest isolation level.
        In this level, one transaction may read not yet committed changes made by other transactions, thereby allowing dirty reads.
        At this level, transactions are not isolated from each other.
    Read Committed – This isolation level guarantees that any data read is committed at the moment it is read.
        Thus it does not allow dirty read.
        The transaction holds a read or write lock on the current row, and thus prevents other transactions from reading, updating, or deleting it.
    Repeatable Read – This is the most restrictive isolation level.
        The transaction holds read locks on all rows it references and writes locks on referenced rows for update and delete actions.
        Since other transactions cannot read, update or delete these rows, consequently it avoids non-repeatable read.
    Serializable – This is the highest isolation level.
        A serializable execution is guaranteed to be serializable.
        Serializable execution is defined to be an execution of operations in which concurrently executing transactions appears to be serially executing.

+ What is deadlock 
    A deadlock is a situation in which two computer programs sharing the same resource are effectively preventing each other from accessing the resource,
    resulting in both programs ceasing to function.

    minimize the use of locks, use timeouts, avoid nested locks to prevent deadlocks

+ What is thread pool 
    A thread pool is a programming concept used to manage and reuse a collection of worker threads in a multithreaded application.
    Instead of creating and destroying threads repeatedly for each task, a thread pool maintains a fixed or dynamic number of threads that can execute multiple tasks concurrently.
    This improves performance and resource efficiency by reducing the overhead associated with thread creation and destruction.

+ What is memory leak 
    In computer science,
    a memory leak is a type of resource leak that occurs when a computer program incorrectly manages memory allocations in a way that memory which is no longer needed is not released.
    For example in C++ if you allocate memory with new and forget to delete/free it, it will cause a memory leak.

+ What is CICD 
     Continuous integration is the practice of regularly integrating (merging) code with the rest of the organization.
    It used to be common for individuals or teams to keep their code isolated in branches for many months and merge infrequently.

    Continuous delivery is a philosophy and set of practices around always keeping your application in a deployable state.
    In order to achieve this we construct a deployment pipeline that serves to validate the correctness of changes, and deliver those changes through a series of test environments,
    culminating in a production deploy.

    CI/CD together is the practice of merging changes frequently as devs work and having those changes pass through a series of automated tests.
    Upon completion those changes are bundled into a release candidate that can then be deployed automatically into production.
    Teams practicing CI/CD will typically produce many release candidates in one day. 

+ Explain the complete flow of git commands that you have used.
    git add . -> git commit -m "message" -> git push origin branch
    This is the most common flow, but there are many other commands that can be used in different scenarios.
    git pull to get the latest changes from the remote repository
    git checkout -b branchname to create a new branch and switch to it
    git merge branchname to merge changes from one branch to another
    git rebase branchname to rebase changes from one branch to another
    git log to see the commit history
    git status to see the current status of the repository
    git reset to undo changes
    git stash to save changes for later
    git cherry-pick to apply a commit from one branch to another
    git tag to create a tag for a specific commit
    git clone to clone a repository
    git branch to see the list of branches
    git remote to see the list of remote repositories
    git fetch to get the latest changes from the remote repository without merging
    git push origin --delete branchname to delete a branch from the remote repository
    git bisect to find the commit that introduced a bug/regression in the code
    git blame to see who made changes to a specific line of code
    git diff to see the differences between two commits or branches
    git revert to undo a commit
    

+ Git pull vs git merge 
    git pull is a combination of git fetch and git merge. It fetches the changes from the remote repository and merges them into the current branch.
    git merge is used to merge changes from one branch to another.

+ How do you merge your changes with master?
    git checkout master
    git pull
    git checkout branchname
    git merge master
    git push origin branchname

    if i want to push my changes to master
    git checkout master
    git merge branchname
    git push origin master

+ What does rebase do in Git? 
    git rebase is a Git command used to integrate changes from one branch into another by reapplying commits on top of another base branch.
    It essentially rewrites the commit history of a branch, making it appear as if the changes were made sequentially on top of the latest state of the base branch.

+ Docker
    Docker is an open-source platform that enables developers to build, deploy, run, update and manage containers.
    A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.
    A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application:
    code, runtime, system tools, system libraries and settings.

+ What is the VPC?
    A virtual private cloud (VPC) is a public cloud offering that lets an enterprise establish its own private cloud-like computing environment on shared public cloud infrastructure.
    A VPC is a logically isolated section of a public cloud provider's infrastructure. It allows you to launch cloud resources (like virtual machines, databases, load balancers)
    in a defined virtual network.
    You have complete control over your virtual networking environment, including IP address ranges, subnets, route tables, and network gateways.
    Think of it like having your own private data center within the cloud provider's infrastructure.
+ What is a VPS?
    A virtual private server, also known as a VPS, acts as an isolated, virtual environment on a physical server, which is owned and operated by a cloud or web hosting provider.
    A VPS is a virtual machine that runs on a physical server shared with other VPSs.
    Each VPS has its own operating system, dedicated resources (CPU, RAM, storage), and can be independently rebooted.
    Like renting an apartment in a building. You have your own private space, but you share the building's infrastructure (power, network) with other tenants.

+ What is ansible and terraform? 
    Ansible is an open-source automation engine that simplifies IT tasks like configuration management, application deployment, task automation, and orchestration.
    It's designed to be simple to use, agentless (meaning it doesn't require software to be installed on the target systems), and powerful enough to handle complex deployments.

    Terraform is an open-source infrastructure as code (IaC) tool that allows you to define and provision infrastructure using a declarative configuration language.
    It enables you to manage infrastructure resources across various cloud providers (AWS, Azure, Google Cloud, etc.) and on-premises environments.

+ What does inversion of control mean?
    Inversion of Control (IoC) is a design principle in software engineering that inverts the flow of control in a program compared to traditional control flow.
    Instead of the calling code being responsible for creating and managing the dependencies it needs, the dependencies are provided to the calling code from an external source.

     Traditional Control: You (the calling code) go out and find/build everything you need to do your job. You're in control of creating and managing your dependencies.
    Inversion of Control: Someone else (the IoC container or framework) provides you with everything you need.
    You just focus on your specific task. The control of creating and managing dependencies is inverted to an external entity.

+ What is Dependency Injection
    At its core, dependency injection is a technique where an object receives its dependencies from external sources rather than creating them itself.
    In simpler terms, instead of an object creating the things it needs, those things are "injected" into it.
    Constructor Injection (One of the ways to achieve DI): Dependencies are passed as arguments to the class constructor.

    Injector (or DI Container): A framework or mechanism that manages the creation and injection of dependencies. This is often a dedicated library or framework component.

    DI has several benefits like: Decoupling, Testability, Reusability, Maintainability, and Flexibility.

+ Architecture of database and migration 
    Single-Server Architecture: A simple architecture where the entire database runs on a single server. Suitable for small applications with low traffic.
    Client-Server Architecture: The database server runs on a dedicated server, and clients connect to it over a network.
    Master-Slave Replication: Data is replicated from a master server to one or more slave servers. Slaves can be used for read-only queries, improving performance and availability.
    Clustered Architecture: Multiple database servers work together as a single logical unit, providing high availability, scalability, and fault tolerance.
    Sharded Architecture: The database is divided into multiple shards (partitions), each containing a subset of the data. Sharding allows for horizontal scaling and improved performance.
    Microservices Architecture: Databases are often deployed as part of a microservices architecture, where each microservice has its own dedicated database.

    Database migrations are a way to manage changes to your database schema in a controlled and repeatable manner.
    They allow you to evolve your database structure as your application evolves, without losing data or breaking existing functionality.
    Version Control: Migrations are typically stored in version control (e.g., Git) along with your application code, allowing you to track changes to the database schema over time.
    Repeatability: Migrations can be run multiple times without causing errors, ensuring that the database schema is always in the desired state.
    Rollback: Migrations allow you to easily rollback changes to the database schema if something goes wrong.

+ What is the difference between printing and logging
    Printing
    Purpose: Primarily for immediate, interactive output to the console or terminal.
    It's often used for debugging, displaying results to the user, or providing quick feedback during development.
    Target Audience: Typically intended for developers or users who are actively interacting with the application.
    Persistence: Usually transient; the output is displayed on the screen and then disappears. It's not typically stored for later analysis.
    Configuration: Limited configuration options. You generally can't control the level of detail or the destination of the output.
    Impact on Performance: Can have a noticeable impact on performance, especially if used extensively in performance-critical sections of code, as it involves I/O operations.

    Logging
    Purpose: To record events, errors, warnings, and other information about the application's behavior over time. It's used for debugging, monitoring, auditing, 
    and analyzing application performance.
    Target Audience: Intended for developers, system administrators, and support staff who need to understand how the application is running and diagnose problems.
    Persistence: Designed to be persistent; log messages are typically written to files, databases, or other storage systems for later analysis.
    Configuration: Highly configurable. You can control the level of detail 
    (e.g., debug, info, warning, error, critical), the destination of the logs (e.g., file, console, network), and the format of the log messages.
    Impact on Performance: Designed to be efficient and have minimal impact on performance. Logging libraries often use buffering and asynchronous writing to minimize overhead.

+ What is Garbage collection
    Garbage collection is a process for automatically freeing up memory that is no longer needed. This helps prevent memory leaks and ensures that memory is used efficiently.
    But it can also introduce performance overhead, as the garbage collector needs to periodically scan memory to identify and reclaim unused memory.

+  What is caching
    Caching Data or data caching is a process that stores multiple copies of data or files in a temporary storage location—or cache—so they can be accessed faster and more efficiently.
    For example, a web browser might cache web pages to reduce the time it takes to load them on subsequent visits.

+ Difference between stateful and stateless
    Stateless: A stateless application does not store any state information about the client session on the server.
    Each request from the client to the server is treated as an independent transaction.
    Stateful: A stateful application maintains state information about the client session on the server.
    This allows the server to remember information about the client between requests.

+ What is the difference between 401 and 403 status codes?
    401 Unauthorized: The request is unsuccessful because the client is not authenticated.
    This status is used when the server requires authentication, but the client has not provided any credentials or the credentials are invalid.
    403 Forbidden: The server understood the request, but is refusing to authorize it.
    This status is used when the client is authenticated, but does not have permission to access the requested resource or perform the requested action.

+ Functional programming
    It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values,
    rather than a sequence of imperative statements which update the running state of the program.
    Pure functions are an important core consept to functional programming. They are functions that given the same input will always have the same output.
    It is a declarative style. Its main focus is on “what to solve,” in contrast to an imperative style, where the main focus is on “how to solve.”
    It uses expressions instead of statements. An expression is evaluated to produce a value, whereas a statement is executed to assign variables.

+ What is Builder Pattern?
    The Builder pattern is a design pattern that allows you to construct complex objects step by step.
    It separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
    The Builder pattern is often used to create objects with many optional parameters or complex initialization logic.

+ Big O notation
    In computer science, Big O notation is used to describe the performance or complexity of an algorithm in terms of the input size.
    Big O notation is used to describe the worst-case scenario for an algorithm, providing a way to compare the scalability and efficiency of different algorithms.

+ Sorting algorithms
    Bubble Sort: A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. O(n^2)
    Merge Sort: A divide-and-conquer algorithm that divides the input array into two halves, recursively sorts the two halves, and then merges them. O(n log n)
    Quick Sort: A divide-and-conquer algorithm that selects a pivot element and partitions the array around the pivot, then recursively sorts the subarrays. O(n log n)

+ What is a Trie
    A trie, also known as a prefix tree, is a tree data structure used to store a dynamic set of strings.
    It is commonly used to store and search for strings in a way that is more efficient than other data structures like hash tables or binary search trees.
    A trie is a tree where each node represents a single character of a string, and the path from the root to a node spells out a string.
    Trie is used to search for strings in a dataset, such as a dictionary or a list of words, and is particularly useful for autocomplete functionality.

+ Binary Tree, BST
    A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.
    A binary search tree (BST) is a binary tree in which each node has a key, and the keys in the left subtree are less than the key in the root node,
    and the keys in the right subtree are greater than the key in the root node.
    BSTs are commonly used for searching, insertion, and deletion operations, as they provide efficient average-case performance for these operations.

+ Shortest path algorithm
  Dijkstra's algorithm that finds the shortest path between nodes in a graph by iteratively selecting the node with the smallest distance/weight from the source node.
    
+ Cookies, local storage, session storage
    Cookies: Small pieces of data stored in the user's browser by websites. They are often used to store user preferences, session information, and other data.
    Cookies are sent to the server with each request, allowing the server to identify the user and maintain state between requests.
    Local Storage: A web storage API that allows you to store key-value pairs in the user's browser. Data stored in local storage persists even after the browser is closed.
    Session Storage: Similar to local storage, but the data stored in session storage is cleared when the browser tab is closed.

+ Web Apis
    Standard Web APIs: APIs provided by web browsers that allow web applications to utilize browser features and interact with the web platform.

    Fetch API: A modern JavaScript API for making network requests. It provides a more powerful and flexible way to work with HTTP requests than the older XMLHttpRequest API.
    WebSockets: A communication protocol that provides full-duplex communication channels over a single TCP connection.
    It allows for real-time, bidirectional communication between clients and servers.
    WebRTC: An api that provides web browsers and mobile applications with real-time communication capabilities via simple application programming interfaces (APIs).
    It allows audio and video communication to work inside web pages by allowing direct peer-to-peer communication.
    IndexedDB: A low-level API for client-side storage of significant amounts of structured data, including files/blobs.
    It allows you to store and retrieve objects that are indexed with a key, making it a powerful tool for building offline web applications.
    Clipboard API: An API that allows web applications to interact with the system clipboard. It provides methods for reading and writing data to the clipboard.

+ What are RPCs and how do they work?
    RPCs (Remote Procedure Calls) are a protocol or mechanism that allows a program to execute code (or call functions) on a remote system (often a different computer or server)
    as if the function was being executed locally.
    In simpler terms, an RPC enables a client to invoke a procedure (or function) in a remote server application without needing to know the details of the server's implementation.

+ AWS questions related to EC2
    Amazon EC2 (Elastic Compute Cloud) is similar to a VPS (Virtual Private Server),
    but it's more accurately categorized as an IaaS (Infrastructure as a Service) offering within cloud computing.

    How EC2 is Similar to a VPS:
    It provides virtualized computing resources.
    You can choose the OS, install software, and configure it like a VPS.
    You get root/admin access to the instance.

    How EC2 Differs from a Traditional VPS:
    Scalability: EC2 instances can be dynamically scaled up/down (e.g., auto-scaling groups).
    Billing Model: VPS providers usually charge a fixed monthly fee, while EC2 follows a pay-as-you-go model.
    Networking & Storage: EC2 integrates with AWS services like S3, IAM, and VPC for more advanced networking and storage options.
    Instance Types: EC2 offers a wide range of instance types optimized for different workloads (e.g., GPU instances, memory-optimized, burstable instances, etc.).

+ Lambda automation etc
    AWS Lambda is a serverless computing service that lets you run code in response to events without managing servers.
    You just write and upload your function, and AWS handles the rest (provisioning, scaling, and execution).

    🔹 Key Features:
    Event-driven (triggers from S3, API Gateway, DynamoDB, etc.)
    Pay-per-use (you only pay for execution time)
    Automatic scaling
    Supports multiple languages (Node.js, Python, Go, etc.)

    AWS Lambda automation refers to using Lambda to automate repetitive tasks, infrastructure management, or workflows.
    It often works with AWS services like CloudWatch, Step Functions, or EventBridge.

+ serverless functions
    Serverless functions are event-driven, stateless, and auto-scaling pieces of code that run in the cloud without needing to manage servers.
    They are part of serverless computing, where the cloud provider automatically handles provisioning, scaling, and execution.

+ AWS networking
    Networking refers to the practice of connecting computers, devices, and systems to enable communication and data transfer.
    In the cloud and AWS, networking plays a crucial role in how services interact securely and efficiently.

    🔹 IP Address – A unique identifier for a device on a network (e.g., 192.168.1.1).
    🔹 Subnet – A smaller section of a network that helps in organizing and managing IP addresses.
    🔹 DNS (Domain Name System) – Converts human-readable domain names (e.g., google.com) into IP 
    🔹 Firewall – Controls network traffic based on rules (e.g., allowing or blocking connections).
    🔹 VPN (Virtual Private Network) – A secure way to connect remote devices to a private network.

    AWS provides a highly customizable, scalable, and secure cloud networking environment. Here are the key components:
    Amazon VPC (Virtual Private Cloud)
    A logically isolated network in AWS where you can launch resources like EC2.
    Default VPC – Every AWS account comes with a default VPC for quick networking setup.
    Subnets
    Divide a VPC into smaller segments for better organization and security.
    Public Subnet – Connected to the internet via an Internet Gateway (IGW).
    Private Subnet – No direct internet access (used for databases, internal services).
    Security Groups – Firewall rules that control inbound/outbound traffic at the instance level.
    Network ACLs (Access Control Lists) – Firewall rules that control inbound/outbound traffic at the subnet level.
    Distributes traffic across multiple EC2 instances for better availability and performance.
    You have a web application hosted on AWS. Here's a simple network architecture:
    A VPC contains both public and private subnets.
    An EC2 instance (web server) in a public subnet is connected to an Internet Gateway (IGW).
    A database (RDS) is in a private subnet, accessible only by the web server.
    A Security Group allows only HTTP/HTTPS traffic from the internet to the web server.
    A Load Balancer (ELB) distributes incoming traffic to multiple web servers for redundancy.
    
    
+ What is Single Sign-On (SSO) and how does AWS SSO work?
    Single Sign-On (SSO) is a user authentication process that allows users to access multiple applications or services with a single set of login credentials.
    Instead of remembering different usernames and passwords for each system, users log in once and gain access to all connected resources without needing to log in again.

    AWS SSO (Amazon Web Services Single Sign-On) is a service provided by Amazon Web Services that simplifies managing SSO access to multiple AWS accounts and business applications.
    With AWS SSO, users can sign in once using their existing corporate credentials (e.g., Microsoft Active Directory)
    and gain access to all their assigned AWS accounts, cloud applications, and SAML-enabled third-party applications.
    It centralizes user management, permissions, and access policies, making it easier for organizations to control and monitor access across their AWS environment.

    How AWS IAM Identity Center Works:
    1️⃣ Users authenticate via AWS SSO login (or an external identity provider).
    2️⃣ They get access to assigned AWS accounts, roles, or third-party apps.
    3️⃣ Permissions are managed centrally using groups and policies.
    Common Use Cases:
    Enterprise Access Management: Allow employees to log in securely without separate AWS credentials.
    Enhanced Security: Enforce MFA and access policies across AWS accounts.
    Multi-Account Management: Control access to multiple AWS accounts in an AWS Organization.
    Third-Party SaaS Integration: Enable SSO for apps like Office 365, Salesforce, Slack, etc.

+ Step functions
    Amazon Step Functions is a fully managed service provided by AWS (Amazon Web Services) that helps you coordinate and orchestrate multiple AWS services into serverless workflows.
    In simple terms, it allows you to build and visualize complex workflows by breaking them into smaller, manageable steps, such as invoking Lambda functions,
    running ECS tasks, or integrating with other AWS services. Each step in the workflow executes in sequence or in parallel, and Step Functions automatically handles retries,
    error handling, and state management.

+ What is S3 and how does it work under the hood.
    Amazon S3 (Simple Storage Service) is a scalable object storage service provided by AWS (Amazon Web Services). It allows you to store and retrieve data over the internet.
    S3 is designed for durability, availability, and scalability, making it ideal for a wide range of use cases, 
    such as backup, data archiving, big data analytics, storing media files, and more.

    S3 stores data as objects (files) in buckets (containers).
    Each object consists of:
    Data: The actual file content (e.g., an image, video, or document).
    Metadata: Key-value pairs that describe the object (e.g., file type, creation date).
    Unique Identifier (Key): A unique name for the object within the bucket.

    Buckets are like folders in S3 and are used to organize objects.
    Each bucket has a globally unique name (e.g., my-bucket-name).
    Buckets are region-specific, meaning you choose the AWS region where the bucket is created.
    S3 uses a distributed architecture to store objects across multiple servers and disks.
    When you upload an object, S3:
    Breaks it into smaller pieces (if necessary).
    Stores these pieces across multiple servers and disks for redundancy and performance.
    Uses a consistent hashing algorithm to determine where to store each piece.
    Scalability:
    S3 is designed to handle virtually unlimited storage and requests.
    It automatically scales to accommodate growing data and traffic without requiring manual intervention.
    Access Control:
    S3 provides fine-grained access control using:
    Bucket Policies: JSON-based policies that define who can access the bucket and what actions they can perform.
    Access Control Lists (ACLs): Legacy method for granting permissions.
    IAM Policies: AWS Identity and Access Management policies for controlling access at the user or role level.
    S3 provides RESTful APIs and SDKs for various programming languages (e.g., Python, Java, JavaScript) to interact with the service.
    Common operations include:
    Uploading and downloading objects.
    Listing objects in a bucket.
    Setting access permissions.

+ Architectural question: what to do if we have aws lambda limitations for 15 minutes but we need to run them much longer due to a “fat” task
    To handle AWS Lambda's 15-minute limit for long-running tasks:
    Break the Task: Split the "fat" task into smaller chunks.
    Step Functions: Use AWS Step Functions to orchestrate multiple Lambda invocations.
    ECS/Fargate: Run the task on AWS ECS or Fargate for longer execution.
    Batch Processing: Use AWS Batch for compute-heavy, long-running jobs.
    External Workers: Offload to external services like EC2 or containers.


+ What is the difference between Test Plan and Test Strategy? 
    Test Strategy is the blueprint: It defines the high-level approach, principles, and guidelines for testing across projects or products. It answers what needs to be done and why.
    Test Plan is the concrete implementation: It details how the testing will be executed for a specific project or release, based on the strategy.
    It answers how, when, and who will perform the testing.

+ If you have 200 test cases in your suite how would you strategise your testing plan?
    Prioritize Test Cases:
        Critical Path: Focus on high-priority test cases that cover core functionality.
        Risk-Based: Prioritize tests for high-risk areas or features.
        Regression: Include tests for previously fixed bugs and key functionalities.
    Categorize Test Cases:
        Group by functionality, modules, or user stories.
        Separate into smoke, regression, and integration tests.
    Allocate Resources:
        Assign test cases to team members based on expertise.
        Use automation for repetitive or time-consuming tests.
    Schedule Testing:
        Plan test execution in phases (e.g., smoke testing first, followed by regression).
        Align with development milestones (e.g., sprint cycles).
    Automate Where Possible:
        Automate high-priority, repetitive, or complex test cases.
        Use tools like Selenium, JUnit, or TestNG for efficiency.
    Define Entry and Exit Criteria:
        Entry: When testing can begin (e.g., build is stable).
        Exit: When testing is complete (e.g., all critical test cases pass).
    Monitor and Report:
        Track progress using test management tools (e.g., Jira, TestRail).
        Report defects and metrics (e.g., pass/fail rates, defect density).
    Optimize Over Time:
        Review and refine test cases based on feedback and results.
        Remove redundant or low-value tests.

+ What is a smoke test? What is a regression test?
    Smoke Test: A basic test that checks if the application launches and key features work as expected.
    It's used to verify that the critical functionalities are working before more in-depth testing
    Level: Usually integration or end-to-end (E2E) tests..

    Regression Test: A test that ensures new code changes haven't broken existing functionality.
    It's used to validate that the application still works as expected after updates or bug fixes.
    Level: Can include unit, integration, and end-to-end tests.

    Smoke Test Example:
    Scenario: Testing a login feature after a new build.
    Open the login page.
    Enter valid credentials (username: testuser, password: password123).
    Click "Login."
    Verify the user is redirected to the dashboard.
    Outcome: If this passes, the build is stable enough for further testing. If it fails, the build is rejected.
    Regression Test Example:
    Scenario: After fixing a bug in the search feature, ensure it still works and hasn’t broken other functionality.
    Open the search page.
    Enter a keyword (e.g., product123).
    Click "Search."
    Verify the correct results are displayed.
    Also, re-test related features (e.g., filtering, sorting).
    Outcome: Ensures the bug fix didn’t break the search feature or other parts of the system.
    Both of them are usually automated to save time and effort, but manual testing can also be used for more complex scenarios.

+ What is Test Pyramid?
    The Test Pyramid is a conceptual framework in software development that helps teams prioritize and structure their automated tests.
    It emphasizes having a balanced mix of different types of tests to ensure software quality while maintaining efficiency and speed in the development process.
    The pyramid is divided into three main layers, each representing a different type of test:

    Unit Tests (Base of the Pyramid)
    What it is: Tests individual components or units of code in isolation (e.g., functions, methods, or classes).
    Scope: Small and focused.
    Speed: Fast execution.
    Purpose: Verify that individual pieces of code work as expected.
    Example: Testing a function that calculates the sum of two numbers.
    Integration Tests (Middle Layer)
    What it is: Tests how different units or components work together.
    Scope: Broader than unit tests, but narrower than end-to-end tests.
    Speed: Slower than unit tests but faster than end-to-end tests.
    Purpose: Verify that integrated components interact correctly (e.g., database interactions, API calls).
    Example: Testing if a service layer correctly interacts with a database.
    End-to-End (E2E) Tests (Top of the Pyramid)
    What it is: Tests the entire application flow from start to finish, simulating real user scenarios.
    Scope: Broadest and most comprehensive.
    Speed: Slowest to execute.
    Purpose: Verify that the entire system works as expected in a production-like environment.
    Example: Testing a user login flow, from entering credentials to accessing the dashboard.

+ What is the first type of testing to be performed after new build is deployed?
    Smoke Testing is the first type of testing to be performed after a new build is deployed.
    It's a basic test that checks if the application launches and key features work as expected.
    The goal is to verify that the critical functionalities are working before more in-depth testing.

+  What is the difference between Sanity, Smoke and Regression testing? 
    Sanity Testing:
    Purpose: To quickly verify that specific new features or bug fixes work as expected.
    Scope: Narrow and focused on specific areas of the application.
    Execution: Usually performed after a new build or release.
    Frequently manual and less comprehensive than other tests. But can be automated.
    Regression Testing:
    Purpose: To ensure that new code changes haven't broken existing functionality.
    Scope: Broad and covers the entire application or specific modules.
    Execution: Typically performed after bug fixes, updates, or new features.
    Smoke Testing:
    Purpose: To verify that the application launches and key features work as expected.
    Scope: Basic and covers critical functionalities.
    Execution: Usually performed before more in-depth testing.

    Order of Execution:
    Smoke Testing -> Sanity Testing -> Regression Testing

+ What is re-testing? 
    A retest is the process of re-executing a test case that previously failed, after the defect has been fixed,
    to confirm that the issue has been resolved and the functionality now works as expected. It focuses specifically on verifying the fix for a known defect.

+ After a defect has been fixed and deployed I’m required to re-test the business flow surrounding this defect. What type of testing is this called? 
    It would be called Regression Testing.
    Regression testing is the process of re-testing the entire application or specific modules to ensure that new code changes haven't broken existing functionality.
    
+ What are Deferred Defects? 
    Deferred/Postponed – If developers during analysis found that defect is not very harmful to system and is not a prime priority and it can be fixed in next release,
    then is automatically assigned a status as 'Deferred'

+ What would you do after you find a bug in production?
    Reproduce the Bug:
    Identify the steps or conditions that trigger the bug in production.
    Write a failing test that replicates the issue. This test should fail because the bug exists.
    Fix the Bug:
    Modify the code to resolve the issue.
    Ensure the failing test now passes, confirming the bug is fixed.
    Run Regression Tests:
    Ensure the fix didn’t break other parts of the application.
    Deploy the Fix:
    Release the updated code to production.
    Monitor:
    Watch for any issues post-deployment.

    Also depending on the severity of the bug, you might need to update the documentation, notify stakeholders, users and conduct a post-mortem to prevent similar issues in the future.
    
+ During code review what all things need to be considered?
    Code Quality: Check for readability, maintainability, and adherence to coding standards.
    Functionality: Ensure the code meets the requirements and works as expected.
    Performance: Look for potential bottlenecks or inefficient code.
    Security: Check for vulnerabilities or potential security risks.
    Best Practices: Verify that the code follows best practices and design patterns.
    Test Coverage: Ensure the code is adequately tested and covers edge cases.
    Documentation: Check for clear and up-to-date comments and documentation.
    Maintainability: Evaluate how easy it will be to maintain and extend the code in the future.
    Consistency: Ensure the codebase is consistent in style and structure.
    Dependencies: Check for unnecessary dependencies or outdated libraries.
    Error Handling: Verify that the code handles errors and exceptions gracefully.
    Scalability: Consider how the code will perform as the application grows.

+ what is controller, service, dto dao, entity, and repository. 
    In software development, especially in the context of building applications using frameworks like Spring (Java) or NestJS (Node.js), 
    the terms Controller, Service, DTO, DAO, Entity, and Repository refer to different layers or components of the application architecture. Here's a breakdown of each:
    1. Controller
        Purpose: Handles incoming HTTP requests and sends responses.
        Role: Acts as the entry point for client interactions. It receives requests, delegates business logic to the Service layer, and returns the appropriate response.
        Example: In a REST API, a controller might handle endpoints like /users or /products.
    2. Service
        Purpose: Contains the core business logic of the application.
        Role: Processes data, applies business rules, and interacts with the Repository or DAO to fetch or persist data. It is called by the Controller.
        Example: A UserService might handle user registration, authentication, or profile updates.
    3. DTO (Data Transfer Object)
        Purpose: A simple object used to transfer data between layers (e.g., between the Controller and Service).
        Role: Encapsulates data and reduces the number of method calls by grouping related data together.
        It is often used to expose only the necessary data to the client, hiding sensitive or unnecessary details.
        Example: A UserDTO might contain only the user's name and email, excluding sensitive data like passwords.
    4. DAO (Data Access Object)
        Purpose: Provides an abstraction for accessing data from a database or other persistence mechanisms.
        Role: Encapsulates the logic required to interact with the database, such as CRUD (Create, Read, Update, Delete) operations.
        It is often replaced by the Repository pattern in modern frameworks.
        Example: A UserDAO might have methods like findById, save, or delete.
    5. Entity
        Purpose: Represents a table or collection in a database.
        Role: Maps directly to a database table or document.
        It contains fields that correspond to columns in the database and is used by the Repository or DAO to persist and retrieve data.
        Example: A User entity might have fields like id, name, email, and password.
    6. Repository
        Purpose: Provides a higher-level abstraction for accessing data.
        Role: Similar to DAO, but often more specific to the domain.
        It interacts with the database using the Entity and provides methods for querying and manipulating data.
        In frameworks like Spring Data JPA, the Repository interface automatically implements common database operations.
        Example: A UserRepository might have methods like findByEmail or findAll.
    How They Work Together  
        A client sends an HTTP request to the Controller.
        The Controller validates the request and passes the data (often as a DTO) to the Service.
        The Service processes the business logic and interacts with the Repository or DAO to fetch or save data.
        The Repository or DAO uses the Entity to interact with the database.
        The Service returns the processed data to the Controller, which sends the response back to the client.

+ Explain how you would handle user authentication and authorization
    Authentication is the process of verifying a user's identity (e.g., username and password). Here's how I would handle it:
    a. Choose an Authentication Method
        Password-based authentication: Users provide a username/email and password.
        Multi-factor authentication (MFA): Add an extra layer of security (e.g., OTP, biometrics).
        OAuth/OpenID Connect: Allow users to log in via third-party providers (e.g., Google, Facebook).
        Passwordless authentication: Use magic links or one-time codes sent via email/SMS.
    b. Secure Password Storage
        Use a strong hashing algorithm (e.g., bcrypt, Argon2) to store passwords.
        Never store passwords in plaintext.
        Add a unique salt to each password before hashing to prevent rainbow table attacks.
    c. Implement Secure Login Flow
        Use HTTPS to encrypt data in transit.
        Validate and sanitize user inputs to prevent injection attacks.
        Implement rate limiting to prevent brute-force attacks.
        Use secure cookies or tokens (e.g., JWT) for session management.
    d. Session Management
        Use short-lived access tokens and refresh tokens for stateless authentication.
        Store refresh tokens securely (e.g., in an HTTP-only, secure cookie).
        Invalidate sessions on logout or after a period of inactivity.
    Authorization determines what a user is allowed to do after they are authenticated. Here's how I would handle it:
    a. Role-Based Access Control (RBAC)
        Assign roles to users (e.g., Admin, Editor, Viewer).
        Define permissions for each role (e.g., Admin can delete users, Editor can edit content).
        Check the user's role before allowing access to specific resources.
    b. Attribute-Based Access Control (ABAC)
        Use attributes (e.g., user department, time of day) to make dynamic access decisions.
        Useful for more granular control than RBAC.
    c. Policy-Based Authorization
        Define policies (e.g., using JSON or a policy language like Rego) to specify access rules.
        Use a policy engine (e.g., Open Policy Agent) to evaluate policies.
    d. Implement Authorization Checks
        Verify permissions before allowing access to sensitive actions or resources.
        Use middleware or decorators to enforce authorization rules in the application.
    Security Best Practices
        Least Privilege: Grant users the minimum permissions necessary.
        Regular Audits: Review access controls and permissions periodically.
        Logging and Monitoring: Track authentication and authorization events for suspicious activity.
        Error Handling: Avoid revealing sensitive information in error messages.
    Example Workflow
        User Login:
            User submits credentials (e.g., email and password).
            Server validates credentials and issues a JWT or session token.
        Access Resource:
            User requests a protected resource (e.g., /admin/dashboard).
            Server checks the token and verifies the user's role/permissions.
            If authorized, the server returns the resource; otherwise, it denies access.

+ What is React?
    React is a popular open-source JavaScript library for building user interfaces, primarily for single-page applications (SPAs).
    It was developed by Facebook and is used for creating dynamic and interactive web applications.
    React uses a component-based architecture, where UIs are broken down into reusable components that manage their own state and can be composed to build complex interfaces.
    It uses a virtual DOM (Document Object Model) to efficiently update the UI based on changes in data, improving performance and user experience.
    React is often used in conjunction with other libraries and frameworks, such as Zustand for state management, React Router for routing.
    It is written in JavaScript and JSX (a syntax extension that allows HTML-like code in JavaScript files).
    React components can have state (internal data) and props (external data passed down from parent components).

+ What is JSX?
    JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript files.
    It provides a more declarative and readable way to define UI components in React.
    JSX elements are transpiled to regular JavaScript function calls by tools like Babel.
    JSX expressions can embed JavaScript expressions using curly braces {}.
    Example:
    const element = <h1>Hello, {name}</h1>;
    In the above example, the JSX element <h1>Hello, {name}</h1> is rendered as an h1 heading with the value of the name variable interpolated.

+ What is the state in React and why it's important?
    State in React is an object that represents the internal dynamic data of a component. It allows components to manage and update their own data. 
    State is important because it enables components to be interactive and respond to user input or changes in data. 
    When the state of a component changes, React automatically re-renders the component to reflect the updated state.
    State is typically initialized in the constructor of a class component or using the useState hook in a functional component.
    State should be treated as immutable in React, meaning it should not be directly mutated. Instead, use the setState method or the useState hook to update state.
    This ensures that React can efficiently update the UI based on changes in state.
    To do this, React uses a process called reconciliation,
    where it compares the previous and current states of a component and determines the minimal set of changes needed to update the UI.
    React fiber is an internal implementation detail of React that enables asynchronous rendering and 
    better performance by breaking down the rendering process into smaller units called fibers.
    Virtual DOM Representation: When a component’s state or props change, React creates a new Virtual DOM tree, which is a lightweight, in-memory representation of the real DOM.
    Reconciliation: React compares the newly created Virtual DOM with the previous one using a process called diffing.
    The algorithm identifies the differences (or "diffs") between the old and new Virtual DOMs.
    Efficient Updates: After the differences are found, React only updates the parts of the real DOM that have actually changed, rather than re-rendering the entire DOM.
    This process makes React more efficient than directly manipulating the DOM.
    Batched Updates: React also batches these updates to ensure minimal reflows and repaints, optimizing performance further.

+  What is redux, routing?
    Redux is a state management library for JavaScript applications, primarily used with React. It provides a centralized store to manage the state of an application.
    Redux follows a unidirectional data flow pattern, where the state is stored in a single immutable object called the store.
    Components can dispatch actions to update the state, and reducers specify how the state should change in response to actions.
    Redux is often used in conjunction with React to manage complex state logic and share data between components.
    But there are also more modern popular alternatives like Zustand.

    Routing refers to the process of navigating between different pages or views in a web application.
    In React, routing is typically handled by a library like React Router, which provides components and APIs for defining routes and rendering components based on the current URL.
    React Router uses a declarative approach to define routes using components like <Route> and <Switch>.
    It also supports features like nested routes, route parameters, and route guards for authentication and authorization.

+ What are react hooks with examples?
    React hooks are functions that allow functional components to use state and other React features without writing a class component.
    They were introduced in React 16.8 to provide a more concise and readable way to manage state and side effects in functional components.
    useState: Allows functional components to manage local state.
    useEffect: Enables side effects like data fetching, subscriptions, or DOM manipulation.
    useContext: Provides a way to pass data through the component tree without having to pass props down manually.
    useRef: Allows functional components to access and interact with DOM elements or other values that persist between renders.
    useMemo: Memoizes the result of a function to optimize performance by avoiding unnecessary re-computations when the dependencies haven't changed.
    useCallback: Memoizes a callback function to prevent unnecessary re-renders.
    useReducer: Provides an alternative to useState for managing complex state logic.
    Custom Hooks: Allows you to create reusable logic that can be shared across multiple components.

+ Can you tell me what prop drilling is?
    Prop drilling is a term used in React to describe the process of passing props down through multiple levels of nested components.
    When a parent component needs to pass data or functions to a deeply nested child component, it has to pass the props through all the intermediate components in the hierarchy.
    This can lead to a situation where components receive props they don't need or care about, making the code harder to maintain and understand.
    Prop drilling can be mitigated by using context or state management libraries like Redux or Zustand to share data between components without passing props manually.

+ Difference between useffect and useLayoutEffect
The difference between useEffect and useLayoutEffect in React revolves around when the effects are run in the component lifecycle:
    useEffect:
    Runs after the paint (after the component is rendered and the changes are painted to the screen).
    It's used for operations that don't need to block the visual update, such as fetching data, updating state based on props, subscribing to events, or performing side effects.
    It does not block the browser from painting, making it more efficient for non-UI-affecting tasks.
    useLayoutEffect:
    Runs before the paint (before the component is rendered and the changes are painted to the screen).
    useLayoutEffect:
    Runs synchronously after all DOM mutations but before the browser paints the changes to the screen.
    It’s useful for reading layout information (e.g., measuring DOM elements) or performing DOM mutations that need to happen before the user sees any updates.
    It can be used when you need to ensure that the DOM is updated immediately, preventing visual inconsistencies during render.
    Since it runs synchronously, it can block the browser from rendering if the effect takes too long, which can negatively impact performance if overused.

    In general, if you don't need to interact with the DOM directly in a way that affects layout, it's better to stick with useEffect.
    Use useLayoutEffect only when it's necessary to avoid visual issues during layout.
    
+ What is useRef,usecallback,useMemo
    useRef: Returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
    It allows you to persist values across renders without causing re-renders.
    useMemo: Returns a memoized value. It's used to optimize performance by memoizing the result of a function based on its dependencies.
    useCallback: Returns a memoized callback function. It's used to prevent unnecessary re-renders by memoizing the function instance.
    It's used to memoize functions so that they are not re-created on every render, unless necessary (i.e., unless their dependencies change).

+ What are side effects
    In simple terms, side effects are any actions or operations that happen outside the main flow of a function or component.
    These actions can affect things outside the function's scope, such as modifying external data, interacting with APIs, or updating the UI.
    Examples of side effects:
    Fetching data from an API
    Modifying the DOM (like changing the content or style of an element)
    Setting up subscriptions (like event listeners)
    Logging information to the console
    Updating state based on previous state or props
