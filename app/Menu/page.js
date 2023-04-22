import NavBar from "@/components/navbar";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <main className=" bg-tiffany h-screen">
        <NavBar />
        <div className="flex justify-center py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto text-xl">
            <Link href="/CVC">
              <div class="bg-transparent rounded-xl shadow-lg py-6 px-6 cursor-pointer">
                <div>Exercise 1</div>
                <div class="bg-white rounded-md py-2 px-4 my-2">
                  <p>Read a Three Letter Word</p>
                </div>
              </div>
            </Link>
            <Link href="/CCVAa">
              <div class="bg-transparent rounded-xl shadow-lg py-6 px-6 cursor-pointer">
                <div>Exercise 2a</div>
                <div class="bg-white rounded-md py-2 px-4 my-2">
                  <p>Read a Four Letter Word</p>
                </div>
              </div>
            </Link>
            <Link href="/CCVCb">
              <div class="bg-transparent rounded-xl shadow-lg py-6 px-6 cursor-pointer">
                <div>Exercise 2b</div>
                <div class="bg-white rounded-md py-2 px-4 my-2">
                  <p>Read a Four Letter Word</p>
                </div>
              </div>
            </Link>
            <Link href="/CVCC">
              <div class="bg-transparent rounded-xl shadow-lg py-6 px-6 cursor-pointer">
                <div>Exercise 3</div>
                <div class="bg-white rounded-md py-2 px-4 my-2">
                  <p>Read a Four Letter Word</p>
                </div>
              </div>
            </Link>
            <Link href="/CCVCC">
              <div class="bg-transparent rounded-xl shadow-lg py-6 px-6 cursor-pointer">
                <div>Exercise 4</div>
                <div class="bg-white rounded-md py-2 px-4 my-2">
                  <p>Read a Five Letter Word</p>
                </div>
              </div>
            </Link>
            <Link href="/CCCVCCC">
              <div class="bg-transparent rounded-xl shadow-lg py-6 px-6 cursor-pointer">
                <div>Exercise 5</div>
                <div class="bg-white rounded-md py-2 px-4 my-2">
                  <p>Read a Seven Letter Word</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
