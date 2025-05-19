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
