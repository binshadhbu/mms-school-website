"use client"
import React, { useEffect, useState } from 'react'
import Message from '@/components/message';
import {
  FaBook,
  FaFlask,
  FaLaptop,
  FaBasketballBall,
  FaMusic,
  FaHospital,
  FaBus
} from "react-icons/fa";
import { full_APlus } from '@/types/frontend';
import getSSLC_full from '@/lib/achievements/highschool';
import { CardProps } from '@/types/frontend';
import { lato } from '@/fonts';
// import { FeaturesSectionDemo } from '../common/Features';
import { FeaturesSectionDemo } from '../common/Features';
import { Feature } from '../common/Features';

const Page = () => {
  const facilities = [
    {
      title: "Library",
      icon: <FaBook className="text-blue-500 text-3xl" />,
      description: "A well-stocked library with a wide range of books and resources."
    },
    {
      title: "Science Labs",
      icon: <FaFlask className="text-green-500 text-3xl" />,
      description: "Modern labs for hands-on experiments in Physics, Chemistry, and Biology."
    },
    {
      title: "Computer Labs",
      icon: <FaLaptop className="text-gray-500 text-3xl" />,
      description: "State-of-the-art computer labs with high-speed internet access."
    },
    {
      title: "Sports Complex",
      icon: <FaBasketballBall className="text-orange-500 text-3xl" />,
      description: "Facilities for basketball, football, athletics, and more."
    },
    {
      title: "Bus Service",
      icon: <FaBus className="text-purple-500 text-3xl" />,
      description: "Safe and reliable transportation for students across the city."
    },
    {
      title: "Medical Room",
      icon: <FaHospital className="text-red-500 text-3xl" />,
      description: "On-campus medical care for emergencies and first aid."
    },
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
      <section className="flex flex-col-reverse lg:flex-row bg-[#F1F1F1] overflow-hidden">
        {/* Text Section */}
        <div className="px-6 sm:px-10 lg:pl-20 pt-16 lg:pt-20 mb-10 lg:mb-5 w-full lg:w-2/5 flex flex-col justify-center max-w-full lg:max-w-md z-10">
          <p className="mb-4 text-2xl sm:text-3xl font-lato font-semibold">
            Welcome to Our <br />
            <span className="text-orange-500">High School Division</span>
          </p>
          <p className="text-sm sm:text-base text-gray-600 font-lato font-normal">
            Where excellence meets opportunity. We prepare students for the future with advanced
            academics, sports, and clubs to spark every interest.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-3/5">
          <img
            src="/common/hero2.jpeg"
            alt="High School Division"
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
              <h2 className="text-3xl mb-6 text-gray-700 font-bold">High School Facilities</h2>
      
              <section className="px-10 py-16 bg-pink-50 text-center rounded-xl shadow-md mx-4 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
                  {facilities.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                  ))}
                </div>
              </section>
            </section>


      {/* Faculty Section */}
      <section className="px-10 py-16 bg-blue-50 text-center rounded-xl shadow-md mx-4 my-10 ">
        <Message link='high-school-prinicipal-message' />
      </section>


      <section className="px-10 py-16 bg-green-50 text-center">
        <h2 className="text-3xl mb-6 font-bold font-lato text-gray-800">Student Life at Our School</h2>
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
