import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Link href="/sign-up" style={{ margin: '0 10px', padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>Sign Up</Link>
      <Link href="/sign-in" style={{ margin: '0 10px', padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>Sign In</Link>
    </div>
  );
}
