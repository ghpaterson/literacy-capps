import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/heroimage.svg";
import heroTitle from "../public/herotitle.svg";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center my-24">
        <div className="flex justify-center py-6 px-4">
          <Image src={heroImage} width={550} />
        </div>
        <div className="flex flex-col justify-center gap-12 py-6">
          <Image src={heroTitle} width={500} />
          <Link href="/three">
            <button className="bg-verdigris text-2xl rounded-xl px-2 py-2 text-bone">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
