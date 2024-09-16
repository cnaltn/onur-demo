import Image from "next/image";
import React from "react";

const ImageContainer = () => {
  return (
    <div className="h-full flex flex-col my_container mx-auto justify-center gap-y-8 pt-20 ">
      <div className="flex text-3xl font-semibold">Trending Products</div>
      <div className="flex h-[600px] w-full gap-6">
        <div className="w-[70%] items-center flex h-full">
          <div className="relative w-full h-full rounded-xl">
            <Image
              className="object-cover rounded-xl shadow-lg"
              src="/balmainset.jpg"
              fill
            ></Image>
          </div>
        </div>
        <div className="w-[30%] justify-center items-center flex flex-col gap-6 h-full">
          <div className="relative w-full h-full rounded-xl">
            <Image
              className="object-cover shadow rounded-xl"
              src="/focusset.jpg"
              fill
            ></Image>
            {/* <p className="absolute top-0">sdasds</p> */}
          </div>
          <div className="relative w-full h-full rounded-xl">
            <Image
              className="object-cover shadow rounded-xl"
              src="/crownset.jpg"
              fill
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
