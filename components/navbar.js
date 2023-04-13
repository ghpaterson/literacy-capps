import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className=" bg-white my-8 pb-6 text-2xl font-inconstant">
        <div className="flex justify-between mx-10">
          <Link href="/">Home</Link>
          <ul>
            <li>
              <Link href="#">Links</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
