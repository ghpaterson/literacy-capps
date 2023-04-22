"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);

  return (
    <>
      <nav className=" bg-white my-8 pb-6 text-2xl font-inconstant">
        <div className="flex justify-between mx-10">
          <div className="text-bittersweet text-4xl">Decode Care</div>
          {path !== "/Menu" && (
            <ul>
              <li>
                <Link href="/Menu">Menu</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
