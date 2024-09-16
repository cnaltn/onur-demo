import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageContainer from "./components/ImageContainer";
import Categories from "./components/Categories";
import { ScrollAnimate } from "./components/ScrollAnimate";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { TextGenerateEffectDemo } from "./components/TextGenerate";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <ImageContainer></ImageContainer>
      <Categories></Categories>
      {/* <div className="my_container flex mx-auto h-max pt-40 items-center">
        <TextGenerateEffectDemo></TextGenerateEffectDemo>
      </div> */}
      <ScrollAnimate></ScrollAnimate>
    </div>
  );
}
