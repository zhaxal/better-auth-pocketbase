"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);

  const action = useCallback(async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await authClient.signIn.email(
        { email, password },
        {
          onSuccess: () => {
            router.push("/main");
          },
          onError: (error) => {
            setError(error.error.message);
          }
        })
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form action={action} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Sign In</button>
      </form>

      <Link href="/sign-up" className="mt-4 text-blue-500 hover:underline">Sign Up</Link>
    </div>
  );
}
