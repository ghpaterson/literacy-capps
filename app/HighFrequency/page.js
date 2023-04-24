"use client";

import NavBar from "@/components/navbar";
import { useState, useRef } from "react";

export default function HighFrequency() {
  const [highFrequencyWord, setHighFrequencyWord] = useState("");
  const highFrequencyWords = ["hello", "darkness", "my", "old", "friend"];
  const intervalId = useRef(null);

  function startCycle(intervalTime) {
    let index = 0;
    setHighFrequencyWord(highFrequencyWords[index]);
    index++;
    intervalId.current = setInterval(() => {
      setHighFrequencyWord(highFrequencyWords[index]);
      index = (index + 1) % highFrequencyWords.length;
    }, intervalTime);
  }

  function stopCycle() {
    clearInterval(intervalId.current);
  }

  return (
    <main>
      <NavBar />
      <div className="mt-20">
        <div className="flex justify-center">
          <h1 className="font-inconstant text-5xl lg:text-6xl text-bittersweet">
            Let's Read
          </h1>
        </div>
        <div className="flex justify-center gap-4 lg:gap-14 my-10 px-2 font-comic">
          <div className=" flex justify-center items-center rounded-xl h-40 w-40 lg:h-60 lg:w-60 bg-gray-100 text-gray-900 text-6xl hover:cursor-pointer">
            {highFrequencyWord}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 ">
        <button
          onClick={() => {
            stopCycle();
            startCycle(3000);
          }}
          className="bg-bittersweet font-inconstant text-bone text-xl py-2 px-6 rounded-xl"
        >
          Slow
        </button>
        <button
          onClick={() => {
            stopCycle();
            startCycle(2000);
          }}
          className="bg-bittersweet font-inconstant text-bone text-xl py-2 px-6 rounded-xl"
        >
          Medium
        </button>
        <button
          onClick={() => {
            stopCycle();
            startCycle(1000);
          }}
          className="bg-bittersweet font-inconstant text-bone text-xl py-2 px-6 rounded-xl"
        >
          Fast
        </button>
        <button
          onClick={() => {
            stopCycle();
          }}
          className="bg-bittersweet font-inconstant text-bone text-xl py-2 px-6 rounded-xl"
        >
          Stop
        </button>
      </div>
    </main>
  );
}
