"use client";

import { useState } from "react";

export default function Three() {
  const [vowel, setVowel] = useState(null);
  const vowels = ["a", "e", "i", "o", "u"];

  const [firstLetter, setFirstLetter] = useState(null);
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

  const [lastLetter, setLastLetter] = useState(null);
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
    const newLastLetter = lastBox[Math.floor(Math.random() * lastBox.length)];
    setLastLetter(newLastLetter);
  };

  return (
    <>
      <main>
        <div className="my-32">
          <div className="flex justify-center">
            <h1 className="text-2xl lg:text-5xl">Let's Spell a Word</h1>
          </div>
          <div className="flex justify-center gap-4 lg:gap-14 my-10 px-2">
            <div
              className=" flex justify-center items-center h-40 w-40 lg:h-60 lg:w-60 bg-gray-100 text-gray-900 text-6xl hover:cursor-pointer"
              onClick={handleFirstBoxClick}
            >
              {firstLetter}
            </div>
            <div
              className=" flex justify-center items-center h-40 w-40 lg:h-60 lg:w-60 bg-gray-100 text-red-500 text-6xl hover:cursor-pointer"
              onClick={handleVowelClick}
            >
              {vowel}
            </div>
            <div
              className=" flex justify-center items-center h-40 w-40  lg:h-60 lg:w-60 bg-gray-100 text-gray-900 text-6xl hover:cursor-pointer"
              onClick={handleLastBoxClick}
            >
              {lastLetter}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
