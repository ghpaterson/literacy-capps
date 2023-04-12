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

  const handleVowelClick = () => {
    const newVowel = vowels[Math.floor(Math.random() * vowels.length)];
    setVowel(newVowel);
  };

  const handleFirstBoxClick = () => {
    const newFirstLetter =
      firstBox[Math.floor(Math.random() * firstBox.length)];
    setFirstLetter(newFirstLetter);
  };

  return (
    <>
      <main>
        <div className="flex justify-center">
          <h1 className="text-2xl lg:text-5xl">
            Let's Spell a Three Letter Word
          </h1>
        </div>
        <div className="flex justify-center gap-14 my-10">
          <div
            className=" flex justify-center items-center h-60 w-60 bg-gray-100 text-gray-900 text-6xl"
            onClick={handleFirstBoxClick}
          >
            {firstLetter}
          </div>
          <div
            className=" flex justify-center items-center h-60 w-60 bg-gray-100 text-red-500 text-6xl"
            onClick={handleVowelClick}
          >
            {vowel}
          </div>
          <div className="h-60 w-60 bg-gray-100"></div>
        </div>
      </main>
    </>
  );
}
