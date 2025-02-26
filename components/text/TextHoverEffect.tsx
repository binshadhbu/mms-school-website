import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function TextHoverEffectDemo({text}: {text: string}) {
  return (
        <div className="h-[10rem] flex  bg-blue-950">
      <TextHoverEffect text={text} />
    </div>
  );
}
