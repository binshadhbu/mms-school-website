"use client"
import React, { useEffect,useState } from 'react'
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { achievement } from "@/types/frontend";
import { achievements_backend } from "@/types/bakcend";
import getAchievements from '@/lib/home/home';


const Results = () => {
  const [achievements, setAchievements] = useState<achievement>({
    full_aplus: 0,
    nine_aplus: 0,
    lss: 0,
    uss: 0,
  });

  useEffect(() => {
    const loaddata = async () => {
      const data = await getAchievements();
      console.log(data);
      setAchievements(data);
    }
    void loaddata();
  },[])

  return (
    <div className=" flex flex-col justify-center  py-5 mb-10 px-5">
      <div className=" grid md:grid-cols-4 gap-6 px-1   ">
       

        <div className="bg-gray-900 shadow-lg rounded-2xl p-4 px-3 text-center border-t-4 border-blue-500 hover:scale-105 transform transition-all duration-500 ">
          <h2 className="text-6xl font-bold text-white">{achievements.full_aplus}</h2>
          <h1 className="text-4xl font-semibold text-white mt-1">
            Full A+ Achievers
          </h1>
        </div>

        <div className="bg-gray-900 shadow-lg rounded-2xl p-4 px-3 text-center border-t-4 border-blue-500 hover:scale-105 transform transition-all duration-500 ">
          <h2 className="text-6xl font-bold text-white">{achievements.nine_aplus}</h2>
          <h1 className="text-4xl font-semibold text-white mt-1">
            9 A+ Achievers
          </h1>
        </div>

        <div className="bg-gray-900 shadow-lg rounded-2xl p-4 px-3 text-center border-t-4 border-blue-500 hover:scale-105 transform transition-all duration-500 ">
          <h2 className="text-6xl font-bold text-white">{achievements.lss}</h2>
          <h1 className="text-4xl font-semibold text-white mt-1">
            LSS Achievers
          </h1>
        </div>

        <div className="bg-gray-900 shadow-lg rounded-2xl p-4 px-3 text-center border-t-4 border-blue-500 hover:scale-105 transform transition-all duration-500 ">
          <h2 className="text-6xl font-bold text-white">{achievements.uss}</h2>
          <h1 className="text-4xl font-semibold text-white mt-1">
             USS Achievers
          </h1>
        </div>

      </div>
    </div>
  )
}

export default Results
