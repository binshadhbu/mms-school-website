"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from 'framer-motion'
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CardProps } from "@/types/frontend";


export function WinnerCard({ name, achievement, image }: CardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden relative card h-96 rounded-3xl  max-w-sm mx-auto  flex flex-col justify-end p-1 bg-gray-900 mb-5 hover:shadow-xl hover:scale-105 duration-500",
        "bg-cover"
      )}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <img
        src={image}
        alt="Circular Image"
        className="object-cover h-full w-full rounded-3xl"
      />

      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-gray-900 to-transparent">
        <h1 className="font-bold text-xl md:text-2xl text-gray-200 ">
          {name} ({achievement})
        </h1>
      </div>
    </div>

  );
}
