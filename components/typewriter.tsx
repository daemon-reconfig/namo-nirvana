"use client";
import { TypewriterEffect } from "../components/ui/typewriter-hero";

export function Type() {
  const words = [
    {
      text: "Welcome",
      className: "text-grey-500 dark:text-grey-500",
    },
    {
      text: "to",
      className: "text-grey-500 dark:text-grey-500",
    },
    {
      text: "Namo",
        className: "text-orange-500 dark:text-blue-500",
    },
    {
      text: "Nirvana.",
      className: "text-grey-500 dark:text-grey-500",
    },
  ];
  return (
    <TypewriterEffect words={words} />
  );
}
