# Fastify Boilerplate

A simple Fastify boilerplate using TypeScript.

## Features

- Fastify for high-performance HTTP APIs
- TypeScript support
- Hot reload with `ts-node-dev`
- Organized with `src/` for source files and `dist/` for compiled output

## Installation

```sh
npm install
```

## Usage

### Development Mode (Hot Reload)

```sh
npm run dev
```

### Build and Run

```sh
npm run build && npm run start
```

## API Endpoints

### `GET /ping`

Returns a simple response:

```json
{
  "success": true,
  "data": "pong"
}
```

### `GET /auth`

Validates the `username` query parameter (must be `admin`) and requires the `h-custom` header.

#### Request Example:

```
GET /auth?username=admin&password=secret
Headers:
  h-custom: some-value
```

#### Response:

```json
{
  "success": true
}
```

## License

ISC
