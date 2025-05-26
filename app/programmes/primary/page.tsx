"use client";

import React from 'react';
import Message from '@/components/message';
import { useEffect } from 'react';
import { lssWinners } from '@/types/frontend';
import { CardProps } from '@/types/frontend';
import { WinnerCard } from '@/components/cards/WinnerCard'
import { getLSSWinners, getUSSWinners } from '@/lib/achievements/primary';

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
    { name: "Library", icon: <FaBook className="text-blue-500 text-3xl" /> },
    { name: "Art Room", icon: <FaPaintBrush className="text-pink-500 text-3xl" /> },
    { name: "Music Room", icon: <FaMusic className="text-purple-500 text-3xl" /> },
    { name: "Playground", icon: <FaRunning className="text-green-500 text-3xl" /> },
    { name: "Bus Service", icon: <FaBus className="text-orange-500 text-3xl" /> },
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
      
      <section className="flex bg-[#F1F1F1]">
        <div className="pl-20 mb-5 pt-20 mt-20 relative z-10 w-2/5 flex flex-col justify-center h-full max-w-md">
          <p className="mb-5 text-3xl font-lato font-semibold">
            Welcome to Our <br />
            <span className="text-orange-500">Primary School Division</span>
          </p>
          <p className="w-full text-gray-600 font-sans">
            A joyful beginning to lifelong learning. We nurture young minds with care,
            curiosity, and creativity in a warm and welcoming environment.
          </p>
        </div>

        <img
          src="/common/hero1.jpeg"
          alt="Primary School Division"
          className="w-2/3 overflow-hidden [mask-image:linear-gradient(to_left,transparent,white_70,white_10,transparent)]"
          style={{ borderRadius: '0 1rem 1rem 0' }}
        />
      </section>

      {/* Facilities Section */}
      <section className="px-10 py-16 bg-yellow-50 text-center rounded-xl shadow-md mx-4 my-10">
        <h2 className="text-3xl mb-6 text-gray-700 font-bold">Primary School Facilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition hover:scale-105"
            >
              {facility.icon}
              <p className="mt-4 text-lg font-semibold text-gray-800">{facility.name}</p>
            </div>
          ))}
        </div>
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

