import React from 'react'
import { InfiniteGallery } from './infinite_gallery'

const testimonials = [
  {
    link: "/logo.jpg"
  },
  {
    link: "/logo.jpg"
  },
  {
    link: "/logo.jpg"
  },
  {
    link: "/logo.jpg"
  }
];

const teachers = [
  {
    link: "/logo.jpg",
    name: 'Binshadh',
    quote: "Spending time with children is investing in a brighter future."
  },
  {
    link: "/logo.jpg",
    name: 'Aisha',
    quote: "Every moment with a child is a chance to inspire wonder and joy."
  },
  {
    link: "/logo.jpg",
    name: 'Rahim',
    quote: "Time spent with children is the most valuable lesson for both teacher and student."
  },
  {
    link: "/logo.jpg",
    name: 'Sara',
    quote: "Being present with children helps them grow with confidence and love."
  }
];
const page = () => {
  return (
    <div className='bg-[#F8F8F8]'>
      <div className="flex bg-#F1F1F1">
        <div className="pl-20 pt-20 mt-20 relative z-10 w-2/5 flex flex-col justify-center h-full">
          <p className="text-3xl font-sans font-semibold">
            Join our friendly <br />
            <span>
              <span className="text-pink-500">Dreamy</span>{' '}
              <span className="text-pink-500">cloudy</span> family
            </span>
          </p>
          <p className="w-full text-gray-600 font-sans">
            We offer a safe, nurturing environment with developmentally appropriate activities and
            opportunities for children to creatively explore and learn through play
          </p>
        </div>

        <img
          src="/Kindergarten/intro.jpg"
          alt="image"
          className="w-2/3 overflow-hidden [mask-image:linear-gradient(to_left,transparent,white_70,white_10,transparent)] "
          style={{ borderRadius: '0 1rem 1rem 0' }}
        />
      </div>
      <div className="relative -mt-24 z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-32"
          style={{ display: 'block' }}
          preserveAspectRatio="none"
        >
          <path
            className=''
            fill="#fff"
            fillOpacity="1"
            d="M0,224 C120,192 240,288 360,288 C480,288 600,192 720,192 C840,192 960,288 1080,288 C1200,288 1320,192 1440,224 L1440,320 L0,320 Z"
          />
        </svg>

      </div>
      {/* Gallery  */}
      <div className=''>
        <p className="font-mono text-3xl font-semibold flex justify-center">Our Gallery</p>
        <div className=" rounded-xl flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteGallery
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>

      <div className='mt-10 mb-10  bg-linear-to-bl from-violet-500 to-fuchsia-500'>
        <p className="font-mono text-3xl font-semibold flex justify-center pt-10 text-gray-600">Meet our Team</p>
        <div className='px-10 flex justify-around mt-10'>
          {teachers.map((item, index) => (
            <div key={index} className="p-1 w-70 flex flex-col items-center justify-center">
              <div className=' '>
                <img
                  src={item.link}
                  alt={item.name}
                  className="object-cover rounded-xl w-40 h-60 shadow-lg"
                />
                <p className='text-gray-700 font-semibold text-2xl justify-center'>{item.name} </p>
                <p className='text-gray-700 text-sm content-center max-w-60' >
                  {item.quote}
                </p>
              </div>

            </div>

          ))}
        </div>
      </div>

      <div className='flex mt-20'>
        <div className='w-2/5 rounded-3xl px-10 pt-10'>
          <img src="/Kindergarten/intro.jpg" className='rounded-2xl overflow-hidden' alt="about" />
        </div>
        <div className="w-2/5 ">
          <p className="font-mono text-3xl font-semibold justify-center pt-10 text-gray-600">About our Kindergarten</p>
          <p className="text-sm text-gray-700 ">
            Our kindergarten program is designed to foster curiosity, creativity, and a love for learning in every child. With experienced teachers and a supportive environment, we help children build strong foundations for their future education and personal growth.
          </p>
          <ul className='mt-5'>
            <li className="text-gray-600 text-base mb-2 flex items-center">
              <span className="text-green-800 mr-2">✔️</span>
              Safe and nurturing environment for every child
            </li>
            <li className="text-gray-600 text-base mb-2 flex items-center">
              <span className="text-green-800 mr-2">✔️</span>
              Experienced and caring teachers
            </li>
            <li className="text-gray-600 text-base mb-2 flex items-center">
              <span className="text-green-800 mr-2">✔️</span>
              Creative play-based learning activities
            </li>
            <li className="text-gray-600 text-base mb-2 flex items-center">
              <span className="text-green-800 mr-2">✔️</span>
              Focus on social, emotional, and academic growth
            </li>
          </ul>
        </div>
      </div>


      <div className='mt-20 bg-[#A89766] mb-10'>
        <p className="font-mono text-3xl font-semibold flex justify-center pt-10 text-gray-600">About our Kindergarten</p>
        <p className="text-sm text-gray-700 p-5 ">
          We offer a safe, nurturing environment with developmentally appropriate activities and opportunities for children to creatively
          explore and learn through play. Our experienced teachers are dedicated to fostering a love of learning in every child, helping them build strong foundations for their future education and personal growth.
        </p>

        <div className="flex flex-col md:flex-row justify-around gap-8 mt-5 px-8 pb-10">
          <div className="bg-[#FAEDD8] rounded-xl shadow-md p-6 flex-1 mx-2 flex flex-col items-center">
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
          <div className="bg-[#F4DEDA] rounded-xl shadow-md p-6 flex-1 mx-2 flex flex-col items-center pb-10">
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



export default page
