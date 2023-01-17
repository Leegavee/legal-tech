# Coding Standards

This repo is split into three groups:

- `/packages` contains all the shared packages that are used across different services and applications.
- `/services` contains all the shared, published services that can be consumed by other applications.
- `/applications` contains all the published applications that utilize the shared packages and services.

Each section has its own package.json and dependencies. To manage the dependencies and organization of the projects, we use Yarn and yarn workspaces.

# General coding standards:

1. Use a consistent code formatting style, we use Prettier to enforce this.
1. Use a linter to catch potential issues before they become a problem, we use EsLint to help.
1. Write clear and concise code comments to explain the purpose and function of the code, where necessary.
1. Use a consistent naming convention for variables, functions, and files.
1. Use type annotations and interfaces to ensure that the correct types are being passed around in the application.
1. Use a consistent file structure for all the applications within the monorepo, for easy navigation and understanding.
1. Use tests to ensure that the code is working as expected and to catch regressions.
1. Use a consistent indentation and spacing style to improve code readability (see Prettier!).
1. Use a consistent file naming convention for all the file types, that clearly indicates their purpose and context.
1. Use a consistent folder structure and file organization, so that related files are grouped together and easy to find.

General coding practices:

1. Follow the SOLID principles and design patterns in order to make the code more maintainable and scalable (see below).
1. Use GitFlow or a similar branching strategy to manage code changes and releases.
1. Use a code review process to ensure that code changes are reviewed by at least one other team member before being merged.
1. Use a centralized logging system to make it easier to troubleshoot and debug issues in production.
1. Use error handling to ensure that the application can gracefully handle and recover from errors.
1. Use environment variables to store sensitive information such as API keys, instead of hardcoding them in the codebase.
1. Use versioning for your package dependencies and keep them up to date, to avoid potential security vulnerabilities.

# SOLID Principles

The SOLID principles are:

1. **Single Responsibility Principle (SRP)** - A class should have one and only one reason to change. [https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#the-single-responsibility-principle]
2. **Open-Closed Principle (OCP)** - A class should be open for extension but closed for modification. [https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#the-open-closed-principle]
3. **Liskov Substitution Principle (LSP)** - Derived classes should be able to replace their base classes without changing the correctness of the program. [https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#the-liskov-substitution-principle]
4. **Interface Segregation Principle (ISP)** - A class should not be forced to implement interfaces it does not use. [https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#the-interface-segregation-principle]
5. **Dependency Inversion Principle (DIP)** - High-level modules should not depend on low-level modules, but both should depend on abstractions. [https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#the-dependency-inversion-principle]

# Design Patterns, OOP and FP!

Functional Programming Design Patterns:

1. **Memoization** - A design pattern used to cache the results of expensive function calls, so that the same computation does not need to be done multiple times. [https://www.sitepoint.com/implementing-memoization-in-javascript/]
2. **Currying** - A design pattern used to transform a function that takes multiple arguments into a series of functions that each take a single argument. [https://www.sitepoint.com/currying-in-functional-javascript/]
3. **Composition** - A design pattern used to build complex functionality by combining simple functions. [https://www.sitepoint.com/functional-composition-javascript/]
4. **Functor** - A design pattern used to provide a consistent way to map over a data structure. [https://www.sitepoint.com/functors-categories-javascript/]
5. **Monads** - A design pattern used to add additional functionality to a value, such as error handling. [https://www.sitepoint.com/monads-javascript/]

OOP Design Patterns:

1. **Singleton** - A design pattern used to ensure that a class has only one instance and to provide a global point of access to that instance. [https://www.tutorialsteacher.com/typescript/typescript-singleton-pattern]
2. **Factory Method** - A design pattern used to create objects without specifying the exact class of the object that will be created. [https://www.tutorialsteacher.com/typescript/typescript-factory-pattern]
3. **Decorator** - A design pattern used to add new behavior to an object without modifying its class. [https://www.tutorialsteacher.com/typescript/typescript-decorator-pattern]
4. **Observer** - A design pattern used to allow objects to be notified of changes to other objects without having to tightly couple the objects. [https://www.tutorialsteacher.com/typescript/typescript-observer-pattern]
5. **Command** - A design pattern used to encapsulate a request as an object, allowing clients to pass requests as a method arguments, delay or queue a request's execution, and support undoable operations. [https://www.tutorialsteacher.com/typescript/typescript-command-pattern]


It is also worth mentioning that in functional programming, **state immutability**, and **pure functions** are considered as important design principles.

- **State immutability** means that once an object is created, its properties should not be modified. This helps to prevent side effects and makes it easier to reason about the code. [https://en.wikipedia.org/wiki/Immutable_object]
- **Pure functions** are functions that always return the same output for the same inputs, and do not have any side effects. [https://en.wikipedia.org/wiki/Pure_function] This makes it easier to reason about the code and also allows for easier parallelization and caching.

Functional programming is known for its simplicity and easy to reason about, state immutability and pure functions are considered as the core principles of this programming paradigm. These principles provide a way to build more predictable and maintainable code that is less prone to bugs and errors.

