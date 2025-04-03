import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <nav className="mb-8">
        <Link href="/about" className="text-blue-600 hover:text-blue-800 mr-4">
          About
        </Link>
      </nav>
      <p>Welcome to the homepage!</p>
    </div>
  );
}
