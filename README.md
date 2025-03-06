# Fastify Boilerplate

This is a boilerplate project for building a Fastify server with TypeScript. It includes basic setup for routing, validation, and testing.

## Features

- [Fastify](https://fastify.dev/) for building the server
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Jest](https://jestjs.io/) for testing
- Pre-configured scripts for development and production

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/joacoleza/fastify-boilerplate.git
   cd fastify-boilerplate
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Server

To start the server in development mode:

```sh
npm run dev
# or
yarn dev
```

To build and start the server in production mode:

```sh
npm run build
npm start
# or
yarn build
yarn start
```

### Running Tests

To run the tests:

```sh
npm test
# or
yarn test
```

## Project Structure

- `src/` - Source code
  - [`app.ts`](src/app.ts) - Main application setup
  - [`server.ts`](src/server.ts) - Server entry point
  - [`types.ts`](src/types.ts) - Type definitions
  - [`utils.ts`](src/utils.ts) - Utility functions
  - [`utils.test.ts`](src/utils.test.ts) - Tests for utility functions
  - [`app.integration.test.ts`](src/app.integration.test.ts) - Integration tests for the application
- `coverage/` - Code coverage reports
- `dist/` - Compiled output
- [`jest.config.js`](jest.config.js) - Jest configuration
- [`tsconfig.json`](tsconfig.json) - TypeScript configuration

## License

This project is licensed under the ISC License.
