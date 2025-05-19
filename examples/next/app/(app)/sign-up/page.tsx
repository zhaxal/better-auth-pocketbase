"use client"

import Link from "next/link";

import { authClient } from "@/lib/auth-client";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);

  const action = useCallback(async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    try {
      await authClient.signUp.email(
        { email, password, name },
        {
          onSuccess: () => {
            router.push("/main");
          },
          onError: (error) => {
            setError(error.error.message);
          }
        }
      );
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form action={action} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
        <input type="text" name="name" placeholder="Name" className="w-full p-2 mb-4 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Sign Up</button>
      </form>

      <Link href="/sign-in" className="mt-4 text-blue-500 hover:underline">Sign In</Link>
    </div>
  );
}
