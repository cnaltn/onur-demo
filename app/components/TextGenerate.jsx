"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Text generate effect demo. This will replaced with slogan/motto words.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
