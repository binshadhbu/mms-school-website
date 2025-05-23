"use client"
import Hero from '../common/Hero'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import {
  FaBook,
  FaFlask,
  FaLaptop,
  FaBasketballBall,
  FaMusic,
  FaHospital,
  FaUser
} from "react-icons/fa";
import { full_APlus } from '@/types/frontend';
import getSSLC_full from '@/lib/achievements/highschool';
import { CardProps } from '@/types/frontend';

const Page = () => {
  const facilities = [
    { name: "Library", icon: <FaBook className="text-blue-500 text-3xl" /> },
    { name: "Science Labs", icon: <FaFlask className="text-green-500 text-3xl" /> },
    { name: "Computer Labs", icon: <FaLaptop className="text-gray-500 text-3xl" /> },
    { name: "Sports Complex", icon: <FaBasketballBall className="text-orange-500 text-3xl" /> },
    { name: "Bus Service", icon: <FaMusic className="text-purple-500 text-3xl" /> },
    { name: "Medical Room", icon: <FaHospital className="text-red-500 text-3xl" /> },
  ];

  const faculty = [
    { name: "ABC", subject: "Mathematics" },
    { name: "ABC", subject: "Physics" },
    { name: "XYZ", subject: "English" },
    { name: "BCD", subject: "Chemistry" },
  ];

  const [full, setFull_APlus] = useState<full_APlus>([]);

  useEffect(() => {
    const loaddata = async () => {
      const data = await getSSLC_full();
      setFull_APlus(data);
    };
    void loaddata();
  }, []);

  return (
    <div className="bg-[#F8F8F8]">
      <section className="flex bg-[#F1F1F1]">
  
    <div className="pl-20 mb-5 pt-20 mt-20 relative z-10 w-2/5 flex flex-col justify-center h-full max-w-md">
    <p className="mb-5 text-3xl font-lato font-semibold">
      Welcome to Our <br />
      <span className="text-orange-500">High School Division</span>
    </p>
    <p className="w-full text-gray-600 font-sans">
      Where excellence meets opportunity. We prepare students for the future with advanced
      academics, sports, and clubs to spark every interest.
    </p>
    </div>

  
    <img
    src="/common/hero2.jpeg"
    alt="High School Division"
    className="w-2/3 overflow-hidden [mask-image:linear-gradient(to_left,transparent,white_70,white_10,transparent)]"
    style={{ borderRadius: '0 1rem 1rem 0' }}
        />
    </section>

      {/* Facilities Section */}
      <section className="px-10 py-16 bg-pink-50 text-center rounded-xl shadow-md mx-4 my-10">
        <h2 className="text-3xl mb-6 text-gray-700 font-bold">High School Facilities</h2>
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
      <section className="px-10 py-16 bg-blue-50 text-center rounded-xl shadow-md mx-4 my-10">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Meet Our Faculty</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {faculty.map((teacher, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-md w-60 text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 flex items-center justify-center mb-4">
                <FaUser className="text-gray-500 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
              <p className="text-gray-600">{teacher.subject}</p>
            </div>
          ))}
        </div>
      </section>


    <section className="px-10 py-16 bg-green-50 text-center">
    <h2 className="text-3xl mb-6 font-bold text-gray-800">Student Life at Our School</h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-10">
        At our school, learning extends beyond textbooks. We offer a vibrant campus life filled with engaging activities and clubs that encourage personal growth and creativity.
        </p>
      <div className="flex flex-wrap justify-center gap-6">
        {[
         { name: "Art Club", description: "Express creativity with painting, crafts, and design.", color: "bg-yellow-200" },
         { name: "Science Club", description: "Explore STEM with fun experiments and discoveries.", color: "bg-blue-200" },
         { name: "Debate Team", description: "Sharpen communication and critical thinking skills.", color: "bg-green-200" },
         { name: "Cultural Fest", description: "Celebrate talent and diversity in style.", color: "bg-pink-200" },
         { name: "Environmental Club", description: "Create a greener future through awareness and action.", color: "bg-teal-200" },
        { name: "Field Trips", description: "Explore the world outside the classroom.", color: "bg-orange-200" },
        ].map((activity, idx) => (
      <div key={idx} className={`${activity.color} p-6 w-64 rounded-xl shadow-md text-left`}>
        <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
        <p className="text-gray-700 text-sm">{activity.description}</p>
      </div>
    ))}
    </div>
    </section>

      {/* Results Section */}
      <section className="px-10 py-16 bg-orange-50 text-center rounded-xl shadow-md mx-4 my-10">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-800">Let Our Results Speak</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {full.map((student: CardProps, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md text-center"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-3">
                <FaUser className="text-gray-500 text-3xl" />
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
