import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  const catData = [
    {
      title: "Set",
      href: "/categories/set",
    },
    {
      title: "Baza-Başlık",
      href: "/categories/baza-baslik",
    },
    {
      title: "Yatak",
      href: "/categories/yatak",
    },
    {
      title: "Ev Tekstili",
      href: "/categories/ev-tekstili",
    },
    {
      title: "Katlanır Somya",
      href: "/categories/katlanir-somya",
    },
  ];

  return (
    <div className="flex w-full h-full items-center pt-20">
      <div className="my_container flex mx-auto flex-col gap-y-8">
        <h1 className="flex text-3xl font-semibold"> Featured Categories</h1>

        <div className="grid grid-cols-5 gap-4">
          {catData.map((item) => (
            <div key={item.href} className="bg-gray-200 h-[500px] rounded-xl">
              <Link href={item.href}>
                <div className="relative flex h-full w-full rounded-xl group shadow-lg ">
                  <Image
                    className="object-cover rounded-xl  group-hover:brightness-50 transition-all duration-300 "
                    src="/palmeset.jpg"
                    fill
                  ></Image>
                  <div className="absolute bottom-4 w-full text-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    {item.title}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
