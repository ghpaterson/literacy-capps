import React from "react";

export default function CycleControl({ stopCycle, startCycle }) {
  return (
    <>
      <div className="flex justify-center gap-4 ">
        <button
          onClick={() => {
            stopCycle();
            startCycle(3000);
          }}
          className="bg-green-600 font-inconstant text-bone text-xl py-2 px-6 rounded-xl"
        >
          Slow
        </button>
        <button
          onClick={() => {
            stopCycle();
            startCycle(2000);
          }}
          className="bg-yellow-600 font-inconstant text-bone text-xl py-2 px-6 rounded-xl"
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
      </div>
      <div className="flex justify-center my-6">
        <button
          onClick={() => {
            stopCycle();
          }}
          className="bg-bittersweet font-inconstant text-bone text-4xl py-2 px-6 rounded-xl"
        >
          Stop
        </button>
      </div>
    </>
  );
}
