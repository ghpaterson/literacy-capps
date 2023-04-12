import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex justify-center py-6">
        <h1 className="text-seagreen text-6xl">Welcome to Literacy Capps</h1>
      </div>
      <div className="flex justify-center">
        <button className="bg-seagreen rounded-xl px-2 py-2 text-gray-100">Get Started</button>
      </div>
    </main>
  );
}
