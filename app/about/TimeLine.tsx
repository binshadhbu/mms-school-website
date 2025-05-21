"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "./components/TimeLine";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-gray-400 text-sm md:text-2xl font-bold mb-8">
            Celbrated 100 years of excellence
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/logo.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-gray-400 text-sm md:text-2xl font-bold  mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/logo.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-gray-400 text-sm md:text-2xl font-bold  mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/logo.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
}
