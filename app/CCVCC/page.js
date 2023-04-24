"use client";

import { useState } from "react";
import NavBar from "../../components/navbar.js";

export default function CCVCC() {
  const [vowel, setVowel] = useState("click");
  const vowels = ["a", "e", "i", "o", "u"];

  const [firstLetter, setFirstLetter] = useState("click");
  const firstBox = [
    "bl",
    "br",
    "ch",
    "cl",
    "cr",
    "dr",
    "dw",
    "fl",
    "fr",
    "gh",
    "gl",
    "gn",
    "gr",
    "kn",
    "ph",
    "pl",
    "pr",
    "ps",
    "qu",
    "rh",
    "sc",
    "sh",
    "sk",
    "sl",
    "sm",
    "sn",
    "sp",
    "st",
    "sw",
    "th",
    "tr",
    "tw",
    "wh",
    "wr",
  ];

  const [lastLetter, setLastLetter] = useState("click");
  const lastBox = [
    "ch",
    "ck",
    "ct",
    "ft",
    "ld",
    "lk",
    "lp",
    "lt",
    "mb",
    "mp",
    "nd",
    "ng",
    "nk",
    "nt",
    "pt",
    "sh",
    "sp",
    "st",
    "th",
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
    const newLastLetter = lastBox[Math.floor(Math.random() * lastBox.length)];
    setLastLetter(newLastLetter);
  };

  const handleResetClick = () => {
    setVowel("click");
    setFirstLetter("click");
    setLastLetter("click");
  };

  return (
    <>
      <main className=" bg-tiffany h-screen">
        <NavBar />
        <div className="mt-20">
          <div className="flex justify-center">
            <h1 className="font-inconstant text-5xl lg:text-6xl text-bittersweet">
              Let's Read
            </h1>
            {/* <Image src={letsSpell} width={400} /> */}
          </div>
          <div className="flex justify-center gap-4 lg:gap-14 my-10 px-2 font-comic">
            <div
              className=" flex justify-center items-center rounded-xl h-40 w-40 lg:h-60 lg:w-60 bg-gray-100 text-gray-900 text-6xl hover:cursor-pointer hover:border-blood"
              onClick={handleFirstBoxClick}
            >
              {firstLetter}
            </div>
            <div
              className=" flex justify-center items-center rounded-xl h-40 w-40 lg:h-60 lg:w-60 bg-gray-100 text-bittersweet text-6xl hover:cursor-pointer hover:border-blood"
              onClick={handleVowelClick}
            >
              {vowel}
            </div>
            <div
              className=" flex justify-center items-center rounded-xl h-40 w-40  lg:h-60 lg:w-60 bg-gray-100 text-gray-900 text-6xl hover:cursor-pointer hover:border-blood"
              onClick={handleLastBoxClick}
            >
              {lastLetter}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleResetClick}
            className="bg-bittersweet font-inconstant text-bone text-xl py-2 px-6 rounded-xl"
          >
            Reset
          </button>
        </div>
      </main>
    </>
  );
}
