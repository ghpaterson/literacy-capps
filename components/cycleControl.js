import React from "react";

export default function CycleControl({ stopCycle, startCycle }) {
  return (
    <>
      <div className="flex justify-center gap-4 ">
        <button
          onClick={() => {
            stopCycle();
            startCycle(1750);
          }}
          className="bg-green-600 font-comic text-bone text-xl py-2 px-6 rounded-xl"
        >
          Slow
        </button>
        <button
          onClick={() => {
            stopCycle();
            startCycle(1250);
          }}
          className="bg-yellow-600 font-comic text-bone text-xl py-2 px-6 rounded-xl"
        >
          Medium
        </button>
        <button
          onClick={() => {
            stopCycle();
            startCycle(750);
          }}
          className="bg-bittersweet font-comic text-bone text-xl py-2 px-6 rounded-xl"
        >
          Fast
        </button>
      </div>
      <div className="flex justify-center my-6">
        <button
          onClick={() => {
            stopCycle();
          }}
          className="bg-bittersweet font-comic text-bone text-4xl py-2 px-6 rounded-xl"
        >
          Stop
        </button>
      </div>
    </>
  );
}
