import { auth } from "@/lib/auth";
import { headers as _headers } from "next/headers";

export default async function Main() {
  const headers = await _headers();

  const session = await auth.api.getSession({ headers });
  const organizations = await auth.api.listOrganizations({ headers });
  const apiKeys = await auth.api.listApiKeys({ headers });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>

      <p className="text-lg text-gray-600">Signed in as: {session?.user?.email}</p>

      <pre>{JSON.stringify(organizations, null, 2)}</pre>

      <pre>{JSON.stringify(apiKeys, null, 2)}</pre>
    </div>
  );
}
