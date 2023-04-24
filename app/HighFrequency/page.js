"use client";

import NavBar from "@/components/navbar";
import WordDisplay from "@/components/wordDisplay";
import CycleControl from "@/components/cycleControl";
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
          <WordDisplay highFrequencyWord={highFrequencyWord} />
        </div>
        <CycleControl
          startCycle={startCycle}
          stopCycle={stopCycle}
          highFrequencyWord={highFrequencyWord}
        />
      </div>
    </main>
  );
}
