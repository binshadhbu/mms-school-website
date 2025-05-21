"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white bg-[#F1F1F1] " id="about">
      <div className="md:grid md:grid-cols-2 gap-5 items-center py-8   sm:py-16 xl:px-16 rounded-3xl overflow-hidden ">
        <Image src="/hs/hs.jpeg" width={500} height={500} alt="school image" className="rounded-3xl " />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-gray-600 mb-4">MMS High School</h2>

          <div className="flex flex-row justify-start mt-8">
            <p className="text-base lg:text-lg text-gray-600">
              MMS High School is a distinguished educational institution known for its commitment to academic excellence
              and holistic student development. With a strong foundation in discipline and values, the school provides
              a nurturing environment for students to grow intellectually and socially. It offers a well-rounded curriculum
              that balances academics, extracurricular activities, and character-building programs, ensuring students receive
              a comprehensive education. The dedicated faculty members strive to inspire and guide students, fostering a culture
              of curiosity and lifelong learning. Over the years, MMS High School has produced numerous accomplished individuals
              who have excelled in various fields, making it a respected name in the education sector.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;