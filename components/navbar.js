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
      <nav className=" bg-bittersweet py-8 font-comic">
        <div className="flex justify-between items-center mx-10">
          <div className="text-buff text-xl md:text-4xl">Decode Care</div>
          {path !== "/Menu" && (
            <ul>
              <li>
                <Link className="text-buff text-xl md:text-4xl" href="/Menu">
                  Menu
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
