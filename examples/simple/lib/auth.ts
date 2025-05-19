import { betterAuth } from "better-auth";
import { username, organization, apiKey } from "better-auth/plugins";
import { pocketbaseAdapter } from "better-auth-pocketbase";

const adapter = pocketbaseAdapter({
  url: "http://127.0.0.1:8090",
  collectionPrefix: "ba_",

  generateMigration: true,
})

export const auth: any = betterAuth({
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
