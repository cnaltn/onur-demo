import Image from "next/image";
import Link from "next/link";
import React from "react";

export const navData = [
  { title: "Home", href: "/" },
  { title: "Categories", href: "/categories" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <div className="flex items-center backdrop-blur-sm bg-gray-50 text-black fixed z-20  h-20 w-full  shadow-xl">
      <div className="flex my_container mx-auto items-center uppercase text-xs font-semibold  h-full justify-between">
        <div className="relative w-[220px] h-full flex">
          <Image className="object-cover" src="/logo.JPG" fill></Image>
        </div>
        <div className="flex gap-x-10">
          {navData.map((item, idx) => (
            <Link key={idx} href={item.href} className="hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
