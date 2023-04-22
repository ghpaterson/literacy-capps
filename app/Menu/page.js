import NavBar from "@/components/navbar";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <main className=" bg-tiffany h-screen">
        <NavBar />
        <div className="flex flex-col gap-10 px-6 text-xl">
          <Link href="/CVC">Page 1</Link>
          <Link href="/CCVCa">Page 2a</Link>
          <Link href="#">Page 2b</Link>
          <Link href="#">Page 3</Link>
          <Link href="#">Page 4</Link>
          <Link href="#">Page 5</Link>
        </div>
      </main>
    </>
  );
}
