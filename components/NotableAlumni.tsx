"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function NotableAlumni() {
  return (
    <div className=" rounded-md mb-10 flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
        
      />
    </div>
  );
}
const testimonials = [
  {
    quote:
      "Innovation distinguishes between a leader and a follower.",
    name: "Steve Jobs",
    position: "Co-founder & Former CEO",
    company: "Apple Inc.",
  },
  {
    quote:
      "Your most unhappy customers are your greatest source of learning.",
    name: "Bill Gates",
    position: "Co-founder & Former CEO",
    company: "Microsoft",
  },
  {
    quote:
      "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    name: "Mark Zuckerberg",
    position: "Co-founder & CEO",
    company: "Meta (Facebook)",
  },
  {
    quote:
      "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
    name: "Binshadh",
    position: "Co-founder & Former CEO",
    company: "Microsoft",
  },
  {
    quote:
      "If you are born poor it's not your mistake, but if you die poor it's your mistake.",
    name: "Keera",
    position: "Co-founder & Former CEO",
    company: "Microsoft",
  },
];
