import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/heroimage.svg";

export default function Home() {
  return (
    <main className="bg-white h-full w-screen">
      <div className="flex flex-col justify-center items-center  lg:flex-row">
        <div className="flex justify-center py-28 px-4">
          <Image src={heroImage} width={550} />
        </div>
        <div className="flex flex-col justify-center gap-12 py-6 px-10">
          <h1 className="font-gothic text-7xl text-bittersweet">
            Literacy Apps
            <br />
            For Learning
          </h1>
          <Link href="/Menu">
            <button className="bg-bittersweet text-2xl font-gothic rounded-xl px-2 pt-3 pb-2 text-bone">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
