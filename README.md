# next-starter
Next.js starter project with typescript, hooks, eslint, prettier, immer, emotion, jest, cypress and storybook

## Features
* Recommended defaults for typing and linting
* Store without a library by using react hooks and context api
* Immer integration for easy updates of immutable data
* CSS-in-JS with native CSS syntax powered by Emotion 
* Unit tests with Jest and TypeScript
* Integration tests with Cypress and TypeScript     
* Nice UI's for both test frameworks with real-time watchers via native Cypress and Majestic
* Storybook with Typescript, React and Hook support
* Git hooks to prevent committing and pushing bad code

## Getting started
* Clone this repository and `cd` into it
* `yarn install`
* `yarn run dev`

## All commands

### `yarn run dev`
Runs development server on http://localhost:3000. Page is hot reloading on code changes.

### `yarn run build`
Build application for production use.

### `yarn run start`
Start built application. You need to run `build` first.

### `yarn run test`
Run all tests.

### `yarn run test:unit`
Run all unit tests with jest.

### `yarn run test:unit:coverage`
Run all unit tests with jest and generate coverage reports. This will fail if constraints `coverageThreshold` in `jest.config.js` are violated.

### `yarn run test:unit:update`
Run all unit tests with jest and update all outdated snapshots.

### `yarn run test:unit:ui`
Run majestic server to control jest via its UI.

### `yarn run test:e2e`
Run all integration tests with headless cypress.

### `yarn run test:e2e:ui`
Run all integration tests with cypress UI.

### `yarn run typecheck`
Perform type analysis on all source files.

### `yarn run storybook`
Run Storybook server.

### `yarn run storybook:build`
Build Storybook documentation for production use.
    
## Built upon fabulous libraries and tools

This starter pack has solutions for Rendering, Styling, Routing, Server-Side-Rendering, Type checking, Linting, Testing, Documentation and Building   

### [Next.js](https://github.com/zeit/next.js/https://github.com/zeit/next.js/)
A great starting point that provides awesome features out-of-the-box. Hightlights are server-side-rendering, seo-readiness, code splitting, routing and prefetching support.

### [TypeScript](https://github.com/Microsoft/TypeScript)
The addition of types to JavaScript allows code-completion and better static code analysis. 

### [React](https://github.com/facebook/react/) 
Rendering library that makes component-based development easy and fun. Functional components in combination with hooks and context API allow flexible adjustments to many application needs.

In this starter project, hooks and context are used to create a simple and versatile store.

*Implicitly used by Next.js*

### [Immer](https://github.com/immerjs/immer)
Very easy to use immutable state. Used for custom store implementation.

### [Emotion](https://github.com/emotion-js/emotion)
Full fledged CSS-in-JS solution with native CSS syntax. 

### [Jest](https://github.com/facebook/jest)
Testing framework with many built-in features like code coverage or snaptshot testing.

[react-testing-library](https://github.com/testing-library/react-testing-library) is included to provide a lightweight toolset for testing react components. It's a great alternative to enzyme. 

Additionally, [Majestic](https://github.com/Raathigesh/majestic/) is used as a UI for Jest. 

### [Cypress](https://github.com/cypress-io/cypress)
For Browser-based integration tests. Watches source code and automatically executes all tests on every change. With time-travel and real debugging, also records videos for failing tests.

[cypress-testing-library](https://github.com/testing-library/cypress-testing-library) is another lightweight toolset to query dom elements.  

### [Storybook](https://github.com/storybooks/storybook)
Visualize isolated components for development and testing. Also for creating style guides. Addons provide additional benefits like switching between mobile viewports or automatic a11y profiling. 

### [ESLint](https://github.com/eslint/eslint)
Parse source code and find unwanted patterns. Great way to establish best practices and a common code style. 

### [Prettier](https://github.com/prettier/prettier)
Complements ESLint to support a consistent and aesthetic code style. Most formatting issues can be automatically fixed.  

### [Husky](https://github.com/typicode/husky)
Handy git hooks to prevent bad `git commit` or `git push`.

### [Babel](https://github.com/babel/babel)
Foundation of every modern JavaScript application stack. Compiles next-generation code into natively supported code.

*Implicitly used by Next.js*


