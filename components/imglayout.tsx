"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function ImgLayout() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-orange-300">1st Place</p>
      <p className="font-bold text-4xl text-orange">in NIT Trichy Pragyan-24 Hackathon</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {/* something about the achievement */}
        Our team&apos;s success at the NIT Trichy Pragyan-24 Hackathon highlights our dedication and excellence in developing cutting-edge solutions amidst intense competition.

      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-orange-300">1st Place</p>
      <p className="font-bold text-4xl text-orange">in NIT Trichy Pragyan-24 Hackathon</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
       
        showcasing innovative problem-solving and teamwork skills.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-orange-300">ISRO Robotics Challenge</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Securing advancement through the first round of the esteemed ISRO Robotics Challenge signifies 
      a significant milestone in our journey, 
      showcasing adeptness in robotics, meticulous planning, 
      and adaptability to complex challenges set forth by the esteemed organization.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:col-span-3",
    thumbnail:
      "/3.jpg",
  },
  
];
