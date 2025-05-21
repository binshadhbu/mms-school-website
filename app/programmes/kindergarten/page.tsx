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
    postion: "Kindergarten Teacher"
  },
  {
    link: "/logo.jpg",
    name: 'Aisha',
    postion: "Assistant Teacher"
  },
  {
    link: "/logo.jpg",
    name: 'Rahim',
    postion: "Music & Activities"
  },
  {
    link: "/logo.jpg",
    name: 'Sara',
    postion: "Art & Crafts"
  }
];
const page = () => {
  return (
    <div className='bg-[#F8F8F8]'>
      {/* intro */}
      <div className="flex bg-[#F1F1F1]">
        <div className="pl-20 mb-5 pt-20 mt-20 relative z-10 w-2/5 flex flex-col justify-center h-full max-w-md">
          <p className=" mb-5 text-3xl font-lato font-semibold">
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
      <section className="px-10 py-16 bg-orange-50 text-center">
        <h2 className="text-3xl mb-2">About Kindergarten</h2>
        <p className="max-w-xl mx-auto text-gray-700">
          Our kindergarten is built on the foundation of love, learning, and creativity.
          We provide a safe and engaging environment where children feel free to express themselves,
          explore new ideas, and grow into kind and confident individuals.
        </p>
      </section>

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
                  src={item.link}
                  alt={item.name}
                  className="object-cover h-40 w-40 rounded-xl shadow-lg"
                />
              </div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.postion}</p>
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



      <div className='flex mt-20'>
        <div className='w-2/5 rounded-3xl px-10 pt-10'>
          <img src="/Kindergarten/intro.jpg" className='rounded-2xl overflow-hidden' alt="about" />
        </div>
        <div className="w-2/5 ">
          <p className="font-lato text-3xl font-semibold justify-center pt-10 text-gray-600">About our Kindergarten</p>
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



export default page
