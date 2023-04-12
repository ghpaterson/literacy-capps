import Image from "next/image";
import Link from "next/link";
import welcome from "../public/welcome1.svg";

export default function Home() {
  return (
    <main>
      <div className="py-40">
        <div className="flex justify-center py-6 px-4">
          <Image src={welcome} width={700} />
        </div>
        <div className="flex justify-center py-6">
          <Link href="/three">
            <button className="bg-blood text-2xl rounded-xl px-2 py-2 text-bone">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
