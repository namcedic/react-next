import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-white text-xl font-bold">
          My App
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/shop" className="text-gray-300 hover:text-white">
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
}
