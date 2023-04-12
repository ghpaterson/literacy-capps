import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center py-6">
        <h1 className="text-seagreen text-3xl lg:text-6xl">
          Welcome to Literacy Capps
        </h1>
      </div>
      <div className="flex justify-center">
        <Link href="/three">
          <button className="bg-seagreen rounded-xl px-2 py-2 text-gray-100">
            Get Started
          </button>
        </Link>
      </div>
    </main>
  );
}
