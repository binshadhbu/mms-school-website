"use client"
import Hero from '../common/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/ui/footer'
import React from 'react'
import { FaBook, FaFlask, FaLaptop, FaBasketballBall, FaMusic, FaHospital } from "react-icons/fa";
import { useEffect } from 'react';
import { lssWinners } from '@/types/frontend';
import { CardProps } from '@/types/frontend';
import { WinnerCard } from '@/components/cards/WinnerCard'
import { getLSSWinners,getUSSWinners } from '@/lib/achievements/primary';

const facilities = [
    { name: "Library", icon: <FaBook className="text-blue-500 text-3xl" /> },
    { name: "Science Labs", icon: <FaFlask className="text-green-500 text-3xl" /> },
    { name: "Computer Labs", icon: <FaLaptop className="text-gray-500 text-3xl" /> },
    { name: "Sports Complex", icon: <FaBasketballBall className="text-orange-500 text-3xl" /> },
    { name: "Bus service", icon: <FaMusic className="text-purple-500 text-3xl" /> },
    { name: "Medical Room", icon: <FaHospital className="text-red-500 text-3xl" /> },
];




const Page = () => {

    const [lss, setLSS] = React.useState<lssWinners>([]);
    const [uss,setUss]  = React.useState<lssWinners>([]);

    useEffect(() => {
        const loaddata = async () => {
            const lss_data = await getLSSWinners();
            setLSS(lss_data);
            const uss_data=await getUSSWinners();
            setUss(uss_data);
            // console.log("LSS Winners", lss);
        }
        void loaddata();
    }, []);

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

            <div className="flex justify-center">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 justify-items-center">
                    {lss.map((details: CardProps, index) => (
                        <WinnerCard
                            key={index}
                            name={details.name}
                            achievement={details.achievement}
                            image={details.image}
                        />
                    ))}
                </div>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 justify-items-center">
                    {uss.map((details: CardProps, index) => (
                        <WinnerCard
                            key={index}
                            name={details.name}
                            achievement={details.achievement}
                            image={details.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )



}

export default Page
