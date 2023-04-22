import NavBar from "@/components/navbar";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <main className=" bg-tiffany h-screen">
        <NavBar />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto text-xl">
            <div className="bg-transparent rounded-xl shadow-lg py-6 px-6">
              <Link href="/CVC">Exercise 1</Link>
            </div>
            <div className="bg-transparent rounded-xl shadow-lg py-6 px-6">
              <Link href="/CCVCa">Exercise 2a</Link>
            </div>
            <div className="bg-transparent rounded-xl shadow-lg py-6 px-6">
              <Link href="/CCVCb">Exercise 2b</Link>
            </div>
            <div className="bg-transparent rounded-xl shadow-lg py-6 px-6">
              <Link href="/CVCC">Exercise 3</Link>
            </div>
            <div className="bg-transparent rounded-xl shadow-lg py-6 px-6">
              <Link href="/CCVCC">Exercise 4</Link>
            </div>
            <div className="bg-transparent rounded-xl shadow-lg py-6 px-6">
              <Link href="/CCCVCCC">Exercise 5</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
