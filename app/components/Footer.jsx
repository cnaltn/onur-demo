import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navData } from "./Navbar";

const Footer = () => {
  return (
    <div className="h-40 w-full items-center flex border-t-2 border-black border-opacity-10">
      <div className="my_container mx-auto h-full flex w-full">
        <div className="flex items-center justify-between w-full font-semibold  text-xs">
          <div className="relative w-[250px] h-[100px] flex">
            <Image className="object-cover" src="/logo.JPG" fill></Image>
          </div>
          <div>
            <div className="flex gap-x-10">
              {navData.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="hover:underline uppercase"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center">
            All rights reserved 2024 <br /> Orthomatt demo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
