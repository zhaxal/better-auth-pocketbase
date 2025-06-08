# better-auth-pocketbase

PocketBase adapter for [better-auth](https://github.com/better-auth). Provides automatic schema migrations and type-safe authentication.

## Installation

### From GitHub
```bash
npm install github:username/better-auth-pocketbase
# or
yarn add github:username/better-auth-pocketbase
# or
pnpm add github:username/better-auth-pocketbase
```

## Usage

### Server-side Setup

```ts
import { betterAuth } from "better-auth";
import { username, organization, apiKey } from "better-auth/plugins";
import { pocketbaseAdapter } from "better-auth-pocketbase";

const adapter = pocketbaseAdapter({
  url: "http://127.0.0.1:8090",
  collectionPrefix: "ba_", // All collections will be prefixed with this
  
  // Optional: Generate PocketBase migrations
  generateMigration: true,

  // Admin credentials for migration generation
  authToken: {
    email: process.env.POCKETBASE_EMAIL!,
    password: process.env.POCKETBASE_PASSWORD!,
  }
})

export const auth = betterAuth({
  database: adapter,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    username(),
    organization(),
    apiKey(),
  ],
})
```

### Client-side Setup

```ts
import { createAuthClient } from "better-auth/react"
import { usernameClient, organizationClient, apiKeyClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [
    usernameClient(),
    organizationClient(),
    apiKeyClient(),
  ]
});
```

## Features

- **Automatic Schema Migration**: Generates PocketBase migrations
- **Plugin System**

## Examples

Check the `/examples` directory:

- `/examples/next` - Next.js integration
- `/examples/simple` - Basic setup
