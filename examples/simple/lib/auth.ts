import { betterAuth } from "better-auth";
import { pocketbaseAdapter } from "better-auth-pocketbase";

const adapter = pocketbaseAdapter({
  url: "http://127.0.0.1:8090",
  collectionPrefix: "ba_",

  generateMigration: true,
  migrationFile: "./migration.ts",
})

export const auth = betterAuth({
  database: adapter,
  emailAndPassword: {
    enabled: true,
  },
})
