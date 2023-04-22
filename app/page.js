import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/heroimage.svg";
import heroTitle from "../public/herotitle.svg";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center my-24 lg:flex-row">
        <div className="flex justify-center py-6 px-4">
          <Image src={heroImage} width={550} />
        </div>
        <div className="flex flex-col justify-center gap-12 py-6 px-10">
          <Image src={heroTitle} width={500} />
          <Link href="/Menu">
            <button className="bg-bittersweet text-2xl font-inconstant rounded-xl px-2 pt-3 pb-2 text-bone">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
