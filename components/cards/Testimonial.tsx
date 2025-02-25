'use client';
import React from 'react'
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from 'lucide-react';
import {Card, CardHeader, CardFooter, Image, Button} from 'components/ui';

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      statement: "As the Principal of MMS UPS Kozhinhil, I am proud to lead a school that is dedicated to fostering academic excellence and personal growth in our students.",
      jobTitle: "Principal",
      companyName: "MMS UPS Kozhinhil",
      rating: 5,
      link:"/message/primary-principal"
    },
    {
      name: "Jane Smith",
      profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      statement: "As the Principal of MMS High School, I am committed to providing a supportive and challenging environment where students can thrive academically and personally.",
      jobTitle: "Principal",
      companyName: "MMS High School",
      rating: 5,
      link:"/message/highschool-principal"
    },
    {
      name: "Michael Johnson",
      profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      statement: "As the Manager of MMS Schools, I oversee the operations and ensure that our schools provide the best educational experience for our students.",
      jobTitle: "Manager",
      companyName: "MMS Educational Campus",
      rating: 5,
      link:"/message/school-manager"
    }
  ];

  return (
    <div className="space-y-6 gap-4 flex flex-wrap justify-around">
      {testimonials.map((testimonial,index) => (
        // <Link href={testimonial.link} key={index}>
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-sm w-full sm:w-96 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col h-full"
        >
          <div className="relative h-72"> {/* Increased height from h-64 to h-72 */}
            <img
              className="h-full w-full object-cover"
              src={testimonial.profilePicture}
              alt={`Profile picture of ${testimonial.name}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col justify-end">
              <p className="text-white text-lg font-medium">{testimonial.name}</p>
              <p className="text-gray-300 text-sm">{testimonial.jobTitle} at {testimonial.companyName}</p>
            </div>
          </div>
          <div className="p-2 flex-grow flex flex-col bg-radial-[at_25%_25%] from-white to-zinc-900 to-75">
          <p className="text-gray-600 flex-grow %">{testimonial.statement}</p>
          </div>
           
          {/* </div> */}
        </motion.div>
        // </Link>
        
      ))}
    </div>
  );
  // );
  

  
  
}

export default Testimonial
