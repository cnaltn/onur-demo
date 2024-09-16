"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animate";
import Image from "next/image";

export function ScrollAnimate() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black">
              Unleash the quality of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                ORTHOMATT
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/crownset.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
