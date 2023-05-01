import React from "react";

export default function WordDisplay({ highFrequencyWord }) {
  return (
    <div className=" flex justify-center items-center px-6 rounded-xl h-40 w-40 lg:h-60 lg:w-60  text-gray-900 text-7xl hover:cursor-pointer">
      {highFrequencyWord}
    </div>
  );
}
