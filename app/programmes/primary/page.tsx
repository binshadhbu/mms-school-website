"use client";

import React from 'react';
import Message from '@/components/message';
import { useEffect } from 'react';
import { lssWinners } from '@/types/frontend';
import { CardProps } from '@/types/frontend';
import { WinnerCard } from '@/components/cards/WinnerCard'
import { getLSSWinners, getUSSWinners } from '@/lib/achievements/primary';
import { Feature } from '../common/Features';
import {
  FaBook,
  FaPaintBrush,
  FaMusic,
  FaRunning,
  FaBus,
  FaUser
} from "react-icons/fa";

const Page = () => {
  const facilities = [
    {
      title: "Library",
      icon: <FaBook className="text-blue-500 text-3xl" />,
      description: "A well-stocked library to foster reading habits and research skills."
    },
    {
      title: "Art Room",
      icon: <FaPaintBrush className="text-pink-500 text-3xl" />,
      description: "A creative space for students to express themselves through art."
    },
    {
      title: "Music Room",
      icon: <FaMusic className="text-purple-500 text-3xl" />,
      description: "A dedicated room for learning instruments and vocal music."
    },
    {
      title: "Playground",
      icon: <FaRunning className="text-green-500 text-3xl" />,
      description: "A safe and spacious playground for physical activities and games."
    },
    {
      title: "Bus Service",
      icon: <FaBus className="text-orange-500 text-3xl" />,
      description: "Reliable transportation ensuring safe travel to and from school."
    },
  ];

  const faculty = [
    { name: "abc", subject: "English" },
    { name: "bcd", subject: "Math" },
    { name: "def", subject: "Science" },
    { name: "xyz", subject: "Art" },
  ];

  const [lss, setLSS] = React.useState<lssWinners>([]);
  const [uss, setUss] = React.useState<lssWinners>([]);

  useEffect(() => {
    const loaddata = async () => {
      const lss_data = await getLSSWinners();
      setLSS(lss_data);
      const uss_data = await getUSSWinners();
      setUss(uss_data);
      // console.log("LSS Winners", lss);
    }
    void loaddata();
  }, []);

  return (
    <div className="bg-[#F8F8F8]">

      <section className="flex flex-col-reverse lg:flex-row bg-[#F1F1F1] overflow-hidden">
        {/* Text Section */}
        <div className="px-6 sm:px-10 lg:pl-20 pt-16 lg:pt-20 mb-10 lg:mb-5 w-full lg:w-2/5 flex flex-col justify-center max-w-full lg:max-w-md z-10">
          <p className="mb-4 text-2xl sm:text-3xl font-lato font-semibold">
            Welcome to Our <br />
            <span className="text-orange-500">Primary School Division</span>
          </p>
          <p className="text-sm sm:text-base text-gray-600 font-sans">
            A joyful beginning to lifelong learning. We nurture young minds with care,
            curiosity, and creativity in a warm and welcoming environment.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-3/5">
          <img
            src="/common/hero1.jpeg"
            alt="Primary School Division"
            className="w-full h-auto object-cover lg:rounded-l-none rounded-t-xl lg:rounded-r-xl"
            style={{
              maskImage:
                'linear-gradient(to left, transparent 0%, white 40%, white 60%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to left, transparent 0%, white 40%, white 60%, transparent 100%)',
            }}
          />
        </div>
      </section>


      {/* Facilities Section */}
      <section className="px-10 py-16 bg-yellow-50 text-center rounded-xl shadow-md mx-4 my-10">
        <h2 className="text-3xl mb-6 text-gray-700 font-bold">Primary School Facilities</h2>

        <section className="px-10 py-16 bg-pink-50 text-center rounded-xl shadow-md mx-4 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
            {facilities.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </section>
      </section>

      {/* Faculty Section */}
      <section className="px-10  bg-blue-50 text-center rounded-xl shadow-md mx-4 my-10">
        <Message link='message-primary-principal' />
      </section>

      {/* Life at Primary School */}
      <section className="px-10 py-16 bg-green-50 text-center">
        <h2 className="text-3xl mb-6 font-bold text-gray-800">Joyful Learning Experiences</h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-10">
          From storytime to science fun, every day is filled with playful and purposeful activities
          designed to spark imagination and foster a love for learning.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Story Time", description: "Grow imagination with engaging stories.", color: "bg-orange-200" },
            { name: "Hands-on Experiments", description: "Discover science through play.", color: "bg-blue-200" },
            { name: "Art & Craft", description: "Colorful creativity every day.", color: "bg-pink-200" },
            { name: "Music & Movement", description: "Sing, dance, and stay active.", color: "bg-yellow-200" },
            { name: "Nature Walks", description: "Explore and learn outdoors.", color: "bg-green-200" },
          ].map((activity, idx) => (
            <div key={idx} className={`${activity.color} p-6 w-64 rounded-xl shadow-md text-left`}>
              <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
              <p className="text-gray-700 text-sm">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 py-16 bg-orange-50 text-center rounded-xl shadow-md mx-4 my-10">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-800">Let Our Results Speak</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {lss.map((student: CardProps, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md text-center"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-3 overflow-hidden">
                <img src={student.image} alt="" className='' />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
              <p className="text-pink-500 font-medium">{student.achievement}</p>
            </div>
          ))}

          {uss.map((student: CardProps, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md text-center"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-3 overflow-hidden">
                <img src={student.image} alt="" className='' />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
              <p className="text-pink-500 font-medium">{student.achievement}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;

