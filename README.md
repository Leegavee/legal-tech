# Legaltech
Legavee legal-tech. Applications, services, packages.

This monorepo contains a collection of legal tech applications, tools, services and resources.

## Getting Started

To get started with the repo, clone it to your local machine and install any necessary dependencies.

### Prerequisites

You will need to have the following installed on your local machine:

- NodeJs
- NPM
- Yarn

### Installing

To install the necessary dependencies, run the following command:

```
git clone git@github.com:Leegavee/legal-tech.git
cd legal-tech
yarn
```

## Repo Structure

This repo is split into three groups:

- `/packages` contains all the shared packages that are used across different services and applications.
- `/services` contains all the shared, published services that can be consumed by other applications.
- `/applications` contains all the published applications that utilize the shared packages and services.

Each section has its own package.json and dependencies. To manage the dependencies and organization of the projects, we use Yarn and yarn workspaces.

## Using Yarn and Yarn workspaces

This repo utilizes [Yarn](https://yarnpkg.com/) and [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to manage dependencies and organize the structure of the repo.

To install dependencies and set up the workspaces, run the following command in the root of the repo:

```
yarn install
```

This will also set up the workspaces for each package, which are located in the `/packages` directory.

To run a command in a specific package's workspace, you can use the `yarn workspace` command. For example, to run the test script in the `package-1` workspace:

```
yarn workspace package-1 test
```

You can also use the `yarn run` command to run any script defined in the `scripts` field of a package's `package.json` file.

## Languages

This monorepo is a Typescript first monorepo.  [TypeScript](https://www.typescriptlang.org/) is a typed superset of JavaScript that adds optional types, classes, interfaces, and other features to the JavaScript language.

This allows for more robust and maintainable code, as well as better tooling and editor support.

All the packages, services and applications are written in TypeScript and transpiled to JavaScript for runtime execution.

You will need to have TypeScript installed on your machine to work with the code in this repo.

# How to use TypeScript
To start using TypeScript in this repo, you will first need to have it installed. You can install it using npm by running npm install -g typescript.

Once TypeScript is installed, you can use the `tsc` command to transpile your TypeScript code to JavaScript. For example, to transpile the TypeScript files in the src directory to the dist directory, you can run `tsc -p src --outDir dist`.

You can also use a build tool like Webpack to automate the transpilation process and handle other build tasks.

TypeScript also offers ts-node which allows you to run TypeScript directly without the need to transpile it.

The TypeScript compiler will also provide feedback on any type errors during development, allowing you to catch potential bugs early on.

# Why TypeScript was chosen
TypeScript was chosen for this project because it offers a number of benefits over plain JavaScript, such as improved code readability, maintainability, and scalability.

TypeScript's optional type system allows developers to catch potential type errors at compile-time, which can help prevent runtime errors.

TypeScript also includes features such as classes, interfaces, and decorators, which allow for more robust and organized code.

## Additional Resources

- [Coding Standards](https://github.com/Leegavee/legal-tech/main/blob/docs/coding-standards.md) : Detailed information on the coding standards and conventions used in this repo.
- [Architecture](https://github.com/Leegavee/legal-tech/main/blob/docs/architecture/dayone-architecture.md) : Explanation of the overall architecture of the repo, including the structure of the packages, services, and applications.
- [Contribution Guidelines](https://github.com/Leegavee/legal-tech/main/blob/docs/contribution-guidelines.md): Guidelines for contributing to the repo, including information on how to submit pull requests and code review process.
- [Testing](https://github.com/Leegavee/legal-tech/main/blob/docs/testing.md) : Information on how to run tests for the packages, services, and applications in this repo.
- [Deployment](https://github.com/Leegavee/legal-tech/main/blob/docs/deployment.md) : Tips and guidelines for debugging code in this repo.
- [Project management](https://github.com/Leegavee/legal-tech/main/blob/docs/project-management.md) : Information on how to manage the project using GitHub issues and pull requests.


