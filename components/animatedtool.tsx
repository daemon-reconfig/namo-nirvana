"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/tooltip";
const people = [
  {
    id: 1,
    name: "Dr. Saurav Gupta",
    designation: "Faculty Mentor",
    image: "/sourav.jpg",
  },
  {
    id: 2,
    name: "Harsh Yadav",
    designation: "Team Lead",
    image: "/harsh.jpg",
  },
  {
    id: 3,
    name: "Thakur Akshay",
    designation: "Team Co-Lead",
    image: "/akshay.jpg",
  },
  {
    id: 4,
    name: "Avishkar",
    designation: "Programming Lead",
    image: "/avishkar.jpg",
  },
  {
    id: 5,
    name: "Aqeeb Akeel",
    designation: "Mobility Lead",
    image: "/aqeeb.jpg",
  },
  {
    id: 6,
    name: "Shreyansh",
    designation: "Chasis",
    image: "/sheryansh.jpg",
  },
  {
    id: 7,
    name: "Soham",
    designation: "Mobility",
    image: "/soham.jpg",
  },
  {
    id: 8,
    name: "Ayush",
    designation: "Research and Science",
    image: "/ayush.jpg",
  },
  {
    id: 9,
    name: "Anany",
    designation: "Chasis",
    image: "/anany.jpg",
  },
  {
    id: 10,
    name: "Aditya",
    designation: "Design and modeling",
    image: "/aditya.jpg",
  },
];

export function TeamMem() {
  return (
    <div className="mb-10 flex w-full flex-row items-center justify-center pt-20">
      <AnimatedTooltip items={people} />
    </div>
  );
}
