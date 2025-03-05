"use client";

import { Sparkles,UserCheck,GraduationCap,BookOpenText,Landmark } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function Status() {
  return (
    <ul className="grid grid-cols-1 rounded-3xl grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 mb-10 px-5 mx-2 bg-gray-900 p-5">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<BookOpenText className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="3 academic programmes"
        description="We offer three comprehensive academic programmes designed to cater to diverse educational needs."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<UserCheck className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="100+ faculties"
        description="Our institution boasts over 100 dedicated and experienced faculty members."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<GraduationCap className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="1500+ Students"
        description="Join a vibrant community of over 1500 students."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="20+ extracurricular clubs and activities"
        description="Engage in more than 10 extracurricular clubs and activities to enrich your school experience."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Landmark className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="100+ years of excellence"
        description="Celebrating over 100 years of academic excellence and tradition."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area} `}>
      <div className="relative h-full rounded-2.5xl border-2 border-gray-800  p-2  rounded-3xl md:p-3 hover:shadow-lg transition-shadow duration-500 ">
        <GlowingEffect
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6 ">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-white dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
