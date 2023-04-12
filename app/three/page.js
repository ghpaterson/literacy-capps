"use client";

import { useState } from "react";
import Image from "next/image";
import letsSpell from "../../public/letsspell.svg";
import NavBar from "../../components/navbar.js";

export default function Three() {
  const [vowel, setVowel] = useState("click");
  const vowels = ["a", "e", "i", "o", "u"];

  const [firstLetter, setFirstLetter] = useState("click");
  const firstBox = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "r",
    "s",
    "t",
    "v",
    "w",
    "y",
    "z",
  ];

  const [lastLetter, setLastLetter] = useState("click");
  const lastBox = [
    "b",
    "ck",
    "d",
    "ff",
    "g",
    "ll",
    "m",
    "n",
    "p",
    "ss",
    "t",
    "x",
    "zz",
  ];

  const handleVowelClick = () => {
    const newVowel = vowels[Math.floor(Math.random() * vowels.length)];
    setVowel(newVowel);
  };

  const handleFirstBoxClick = () => {
    const newFirstLetter =
      firstBox[Math.floor(Math.random() * firstBox.length)];
    setFirstLetter(newFirstLetter);
  };

  const handleLastBoxClick = () => {
    let newLastBox = lastBox;
    if (firstLetter === "f" && vowel === "u") {
      newLastBox = lastBox.filter((letter) => letter !== "ck");
    }
    if (firstLetter === "c" && vowel === "o") {
      newLastBox = lastBox.filter((letter) => letter !== "ck");
    }
    const newLastLetter =
      newLastBox[Math.floor(Math.random() * newLastBox.length)];
    setLastLetter(newLastLetter);
  };

  const handleResetClick = () => {
    setVowel("click");
    setFirstLetter("click");
    setLastLetter("click");
  };

  return (
    <>
      <main>
        <NavBar />
        <div className="mt-28">
          <div className="flex justify-center">
            <Image src={letsSpell} width={400} />
          </div>
          <div className="flex justify-center gap-4 lg:gap-14 my-10 px-2 hover:border-blood">
            <div
              className=" flex justify-center items-center h-40 w-40 lg:h-60 lg:w-60 bg-gray-100 text-gray-900 text-6xl hover:cursor-pointer hover:border-blood"
              onClick={handleFirstBoxClick}
            >
              {firstLetter}
            </div>
            <div
              className=" flex justify-center items-center h-40 w-40 lg:h-60 lg:w-60 bg-gray-100 text-blood text-6xl hover:cursor-pointer hover:border-blood"
              onClick={handleVowelClick}
            >
              {vowel}
            </div>
            <div
              className=" flex justify-center items-center h-40 w-40  lg:h-60 lg:w-60 bg-gray-100 text-gray-900 text-6xl hover:cursor-pointer hover:border-blood"
              onClick={handleLastBoxClick}
            >
              {lastLetter}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleResetClick}
            className="bg-blood text-bone text-xl py-2 px-6 rounded-xl"
          >
            Reset
          </button>
        </div>
      </main>
    </>
  );
}
