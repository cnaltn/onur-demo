import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["quality", "comfort", "elite", "modern"];

  return (
    <div className="h-max flex">
      <div className="text-6xl font-normal text-neutral-300">
        Realize the
        <FlipWords className="font-semibold" words={words} /> <br />
        bedrooms with Orthomatt
      </div>
    </div>
  );
}
