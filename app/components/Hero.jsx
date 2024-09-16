import Image from "next/image";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { FlipWordsDemo } from "./FlipWords";

const Hero = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="relative w-full h-full">
        <Image
          className="object-cover brightness-50 "
          src="/crownset.jpg"
          fill
        ></Image>

        <div className="absolute  h-full w-full items-left flex backdrop-brightness-50 flex-col justify-center">
          <div className="my_container mx-auto gap-y-8 flex flex-col">
            <FlipWordsDemo></FlipWordsDemo>
            <p className="text-xl text-white">
              On the site you will find all the wonderful decor items from photo{" "}
              <br />
              frames to tablecloths for the dining table
            </p>
            <button className="text-white px-6 py-3 w-fit border border-white rounded-xl">
              Explore the categories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
