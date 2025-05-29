"use client";
import React from 'react'
import { InfiniteGallery } from './infinite_gallery'
import { useState, useEffect } from 'react'
import getImages from '@/lib/home/getImages';
import getGallery from '@/lib/getGallery';
import { notable_alumni, MessageProps } from "@/types/frontend";
import get_Teachers_kindergarten from '@/lib/kindergarten';



const Page = () => {

  const [testimonials, setTestimonials] = useState<string[]>([]);
  const [teachers, setTeachers] = useState<notable_alumni>([]);
  // const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const imageData = await getGallery({ link: "kinder-garten-galleries" });
      setTestimonials(imageData);
      console.log("output of kindergarten", imageData);
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      const data = await get_Teachers_kindergarten();
      setTeachers(data);
      console.log("output of teachers", data);
    };
    fetchTeachers();

  }, []);

  return (
    <div className='bg-[#F8F8F8]'>
      {/* intro */}

      <div className="flex flex-col-reverse md:flex-row bg-[#F1F1F1]">
        {/* Text Section */}
        <div className="px-6 py-10 md:py-20 md:px-20 md:w-2/5 flex flex-col justify-center max-w-xl z-10">
          <p className="mb-5 text-2xl sm:text-3xl md:text-4xl font-lato font-semibold">
            Join our friendly <br />
            <span>
              <span className="text-pink-500">Dreamy</span>{' '}
              <span className="text-pink-500">cloudy</span> family
            </span>
          </p>
          <p className="text-gray-600 font-sans text-sm sm:text-base">
            We offer a safe, nurturing environment with developmentally appropriate activities and
            opportunities for children to creatively explore and learn through play.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-3/5 px-2 md:p-0 relative rounded-xl overflow-hidden">
          <img
            src="/Kindergarten/intro.jpg"
            alt="Kindergarten"
            className="w-full h-full object-cover md:rounded-l-[1rem] md:rounded-r-none rounded-t-[1rem] md:rounded-t-none"
            style={{
              maskImage:
                'linear-gradient(to left, transparent, white 70%, white 10%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to left, transparent, white 70%, white 10%, transparent)',
            }}
          />
        </div>
      </div>


      {/* Programs */}
      <section className="px-10 py-16 text-center">
        <h2 className="text-3xl mb-2">Our programs</h2>
        <p className="max-w-xl mx-auto mb-10 text-gray-600">
          We offer a safe, nurturing environment with developmentally appropriate
          activities and opportunities for children to creatively explore and learn
          through play
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            { age: '2.5 - 3 Year Olds', title: 'Discipline Program', bg: 'bg-yellow-700', text: 'text-white' },
            { age: '3 - 5 Year Olds', title: 'Junior Nursery', bg: 'bg-teal-400', text: 'text-white' },
            { age: '4 - 6 Year Olds', title: 'Kids Play Group', bg: 'bg-pink-400', text: 'text-white' },
            { age: '3 - 5 Year Olds', title: 'Drawing and colors', bg: 'bg-yellow-500', text: 'text-white' },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} ${item.text} p-5 w-60 rounded-lg text-left`}
            >
              <div className="font-bold text-lg mb-2 opacity-70">{`0${idx + 1}`}</div>
              <h3 className="text-xl mb-1">{item.age}</h3>
              <p className="mb-2">{item.title}</p>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit amet consectetur. Nunc nunc odio faucibus
                suspendisse in nunc.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Kindergarten */}

      <div className="flex flex-col lg:flex-row mt-20 bg-orange-50 px-6 sm:px-10 py-10 gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-2/5 rounded-3xl">
          <img
            src="/Kindergarten/intro.jpg"
            className="rounded-2xl w-full h-auto object-cover"
            alt="about"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          <p className="font-lato text-2xl sm:text-3xl font-semibold text-gray-600 mb-4">
            About our Kindergarten
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-5">
            Our kindergarten program is designed to foster curiosity, creativity, and a love for learning
            in every child. With experienced teachers and a supportive environment, we help children build
            strong foundations for their future education and personal growth.
          </p>
          <ul className="space-y-2">
            <li className="text-gray-600 text-sm sm:text-base flex items-start">
              <span className="text-green-800 mr-2 mt-0.5">✔️</span>
              Safe and nurturing environment for every child
            </li>
            <li className="text-gray-600 text-sm sm:text-base flex items-start">
              <span className="text-green-800 mr-2 mt-0.5">✔️</span>
              Experienced and caring teachers
            </li>
            <li className="text-gray-600 text-sm sm:text-base flex items-start">
              <span className="text-green-800 mr-2 mt-0.5">✔️</span>
              Creative play-based learning activities
            </li>
            <li className="text-gray-600 text-sm sm:text-base flex items-start">
              <span className="text-green-800 mr-2 mt-0.5">✔️</span>
              Focus on social, emotional, and academic growth
            </li>
          </ul>
        </div>
      </div>


      {/* Meet our team */}
      <section className="px-10 py-16 bg-blue-50 text-center">
        <h2 className="text-3xl mb-6">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {teachers.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 w-48 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="w-full h-36 bg-gray-300 rounded-lg mb-3 flex items-center justify-center text-gray-600">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover h-40 w-40 rounded-xl shadow-lg"
                />
              </div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery  */}
      <div className=''>
        <p className="mt-10 mb-5 font-lato text-3xl flex justify-center">Our Gallery</p>
        <p className="max-w-xl mx-auto text-gray-700 mb-8">
          Explore the wonderful world of creativity and imagination through the eyes of our little artists.
          This gallery showcases the unique talents of our kindergarteners, highlighting their drawings,
          crafts, and projects.
        </p>
        <div className=" rounded-xl flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteGallery
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>






      <div className='mt-20 bg-orange-100 mb-10  content-center'>
        <p className="font-lato text-3xl font-semibold flex justify-center pt-10 text-gray-600">About our Kindergarten</p>
        <p className="text-sm text-gray-700 p-5 max-w-3xl mx-auto text-center ">
          We offer a safe, nurturing environment with developmentally appropriate activities and opportunities for children to creatively
          explore and learn through play. Our experienced teachers are dedicated to fostering a love of learning in every child, helping them build strong foundations for their future education and personal growth.
        </p>

        <div className="flex flex-col md:flex-row justify-around gap-8 mt-5 px-8 pb-10">
          <div className="bg-teal-400 rounded-xl shadow-md p-6 flex-1 mx-2 flex flex-col items-center">
            <p className="text-xl font-semibold text-[#A89766] mb-2">Health and Hygiene</p>
            <p className="text-gray-700 text-center">
              Ensure regular medical check ups and teach children to wash hands, brush teeth, and keep play and learning areas clean.
            </p>
          </div>
          <div className="bg-[#F4F6F8] rounded-xl shadow-md p-6 flex-1 mx-2 flex flex-col items-center pb-10">
            <p className="text-xl font-semibold text-[#A89766] mb-2">Diet for Children</p>
            <p className="text-gray-700 text-center">
              Provide balanced and nutritious meals that support healthy growth and development. Encourage children to try a variety of fruits, vegetables, whole grains, and proteins.
            </p>
          </div>
          <div className="bg-pink-400 rounded-xl shadow-md p-6 flex-1 mx-2 flex flex-col items-center pb-10">
            <p className="text-xl font-semibold text-[#A89766] mb-2">Child Development</p>
            <p className="text-gray-700 text-center">
              We focus on the holistic development of each child, nurturing their cognitive, emotional, social, and physical growth through engaging activities.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}



export default Page