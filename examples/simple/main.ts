import "dotenv/config";

import { auth } from "./lib/auth.js";

async function main() {
  // Test data
  const testUser = {
    email: "test@example.com",
    name: "Test User",
    password: "Password123!",
  };
  const testUser2 = {
    email: "test2@example.com",
    name: "Test User 2",
    password: "Password123!",
  };
  
  try {
    console.log("🔄 RUNNING COMPREHENSIVE AUTHENTICATION TESTS");
    console.log("--------------------------------------------");

    // 1. Sign up a new user
    console.log("📝 TEST: Sign Up Email");
    const signUpResult = await auth.api.signUpEmail({
      body: testUser
    });
    console.log("✅ Sign Up Result:", 
      JSON.stringify({ 
        id: signUpResult.user.id,
        email: signUpResult.user.email,
        name: signUpResult.user.name,
        emailVerified: signUpResult.user.emailVerified
      }, null, 2)
    );
    
    // 2. Sign In with email/password
    console.log("\n📝 TEST: Sign In Email");
    const signInResult = await auth.api.signInEmail({
      body: {
        email: testUser.email,
        password: testUser.password,
      }
    });
    console.log("✅ Sign In Result:", 
      JSON.stringify({
        token: signInResult.token ? "Token received" : "No token",
        userId: signInResult.user.id,
      }, null, 2)
    );
    
    // // 3. Get session data
    // console.log("\n📝 TEST: Get Session");
    // const sessionData = await auth.api.getSession({
    //   headers: {
    //     "authorization": `Bearer ${signInResult.token}`
    //   } as Record<string, string>
    // });
    // console.log("✅ Session Data:", 
    //   JSON.stringify({
    //     user: sessionData ? sessionData.user.name : "No session",
    //     sessionId: sessionData ? sessionData.session.id : "No session",
    //   }, null, 2)
    // );
    
    // 4. Update user
    console.log("\n📝 TEST: Update User");
    const updateResult = await auth.api.updateUser({
      body: {
        name: `${testUser.name} Updated`,
      },
      headers: {
        "authorization": `Bearer ${signInResult.token}`
      } as Record<string, string>
    });
    console.log("✅ Update Result:", JSON.stringify(updateResult, null, 2));
    
    // 5. Create a second user and test session management
    console.log("\n📝 TEST: Create Second User");
    const signUpResult2 = await auth.api.signUpEmail({
      body: testUser2
    });
    console.log("✅ Second Sign Up Result:", 
      JSON.stringify({ 
        id: signUpResult2.user.id,
        email: signUpResult2.user.email
      }, null, 2)
    );
    
    // 6. Sign in with second user
    console.log("\n📝 TEST: Sign In Second User");
    const signInResult2 = await auth.api.signInEmail({
      body: {
        email: testUser2.email,
        password: testUser2.password,
      }
    });
    
    // 7. List sessions for second user
    console.log("\n📝 TEST: List Sessions");
    const sessions = await auth.api.listSessions({
      headers: {
        "authorization": `Bearer ${signInResult2.token}`
      } as Record<string, string>
    });
    console.log("✅ Sessions:", JSON.stringify(sessions.map(s => ({
      id: s.id,
      expiresAt: s.expiresAt
    })), null, 2));
    
    // 8. Send password reset request
    console.log("\n📝 TEST: Forget Password");
    const forgetResult = await auth.api.forgetPassword({
      body: {
        email: testUser.email,
        redirectTo: "http://localhost:3000/reset-password"
      }
    });
    console.log("✅ Forget Password Result:", JSON.stringify(forgetResult, null, 2));
    
    // 9. Test sign out
    console.log("\n📝 TEST: Sign Out");
    const signOutResult = await auth.api.signOut({
      headers: {
        "authorization": `Bearer ${signInResult.token}`
      } as Record<string, string>
    });
    console.log("✅ Sign Out Result:", JSON.stringify(signOutResult, null, 2));
    
    // // 10. Test getting session after sign out (should be null)
    // console.log("\n📝 TEST: Get Session After Sign Out");
    // try {
    //   const sessionAfterSignOut = await auth.api.getSession({
    //     headers: {
    //       "authorization": `Bearer ${signInResult.token}`
    //     } as Record<string, string>
    //   });
    //   console.log("✅ Session After Sign Out:", 
    //     JSON.stringify(sessionAfterSignOut, null, 2)
    //   );
    // } catch (error: any) {
    //   console.log("✅ Expected error after sign out:", error.message);
    // }
    
    console.log("\n✅ TEST SUITE COMPLETED!");
  } catch (error: any) {
    console.error("\n❌ ERROR:", error);
    throw error;
  }
}

main().catch(console.error);