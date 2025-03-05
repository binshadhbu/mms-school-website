import Hero from './Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/ui/footer'
import React from 'react'
import { FaBook, FaFlask, FaLaptop, FaBasketballBall, FaMusic, FaHospital } from "react-icons/fa";
import Winners from './Winners';


const facilities = [
    { name: "Library", icon: <FaBook className="text-blue-500 text-3xl" /> },
    { name: "Science Labs", icon: <FaFlask className="text-green-500 text-3xl" /> },
    { name: "Computer Labs", icon: <FaLaptop className="text-gray-500 text-3xl" /> },
    { name: "Sports Complex", icon: <FaBasketballBall className="text-orange-500 text-3xl" /> },
    { name: "Bus service", icon: <FaMusic className="text-purple-500 text-3xl" /> },
    { name: "Medical Room", icon: <FaHospital className="text-red-500 text-3xl" /> },
];



const page = () => {
    return (
        <div>
            <Hero />

            <div className="p-8 bg-gradient-to-r bg-gray-900 rounded-lg shadow-2xl  mx-2 mb-20">
                <h2 className="text-3xl font-extrabold text-center text-white mb-8">Our School Facilities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
                            {facility.icon}
                            <p className="mt-4 text-xl font-semibold text-gray-800">{facility.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h1 className=" text-6xl font-bold text-center text-gray-900 my-8 ">Let Our Result Speaks</h1>

            <Winners />
        </div>
    )
}

export default page
