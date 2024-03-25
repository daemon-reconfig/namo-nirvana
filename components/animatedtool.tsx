"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/tooltip";
const people = [
  {
    id: 1,
    name: "Dr. Saurav Gupta",
    designation: "Faculty Mentor",
    image:
      "/sourav.jpg",
  },
  {
    id: 2,
    name: "Harsh Yadav",
    designation: "Team Lead",
    image:
      "/harsh.jpg",
  },
  {
    id: 3,
    name: "Thakur Akshay",
    designation: "Team Co-Lead",
    image:
      "/akshay.jpg",
  },
  {
    id: 4,
    name: "Aqeeb Akeel",
    designation: "Mobility Lead",
    image:
      "/aqeeb.jpg",
  },
  {
    id: 5,
    name: "Shreyansh",
    designation: "Chasis",
    image:
      "/sheryansh.jpg",
  },
  {
    id: 6,
    name: "Soham",
    designation: "Mobility",
    image:
      "/soham.jpg",
  },
  {
    id: 7,
    name: "Ayush",
    designation: "Research and Science",
    image:
      "/ayush.jpg",
  },
  {
    id: 8,
    name: "Anany",
    designation: "Chasis",
    image:
      "/anany.jpg",
  },
  {
    id: 9,
    name: "Aditya",
    designation: "Design and modeling",
    image:
      "/aditya.jpg",
  },
  {
    id: 10,
    name: "Avishkar",
    designation: "Programming Lead",
    image:
      "/avishkar.jpg",
  }
];

export function TeamMem() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full pt-20">
      <AnimatedTooltip items={people} />
    </div>
  );
}
