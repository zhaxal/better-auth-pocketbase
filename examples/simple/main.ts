import "dotenv/config";

import { auth } from "./lib/auth.js";

async function main() {
  const result = await auth.api.signUpEmail({
    body: {
      email: "lclc.alen@gmail.com",
      name: "Alen",
      password: "1234567890",
    }
  });

  console.log(result);
}

main().catch(console.error);