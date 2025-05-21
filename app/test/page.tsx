import React from 'react';

const Page = () => {
  return (
    <div className="font-sans text-gray-800">
      
      <section className="flex flex-wrap justify-between items-center p-16 bg-gray-50">
        <div className="max-w-md">
          <h1 className="text-4xl mb-5 leading-snug">
            Join our friendly <br />
            <span className="text-yellow-600 font-bold">Dreamy Cloud</span> family
          </h1>
          <p className="mb-5 text-gray-600">
            We offer a safe, nurturing environment with developmentally appropriate
            activities and opportunities for children to creatively explore and learn
            through play
          </p>
          <button className="bg-pink-400 text-white px-6 py-3 rounded-md text-lg hover:bg-pink-500 transition">
            Join Us
          </button>
        </div>
        <div className="mt-5 md:mt-0">
          <div className="w-96 h-72 bg-gray-300 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center text-gray-600 text-lg">
            Image Placeholder
          </div>
        </div>
      </section>

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
          {[1, 2, 3].map((member) => (
            <div
              key={member}
              className="bg-white p-5 w-48 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="w-full h-36 bg-gray-300 rounded-lg mb-3 flex items-center justify-center text-gray-600">
                Photo
              </div>
              <h3 className="text-lg font-semibold">Teacher Name</h3>
              <p className="text-gray-600">Position</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 py-16 bg-white text-center">
        <h2 className="text-3xl mb-2">Our Gallery</h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-8">
          Explore the wonderful world of creativity and imagination through the eyes of our little artists.
          This gallery showcases the unique talents of our kindergarteners, highlighting their drawings,
          crafts, and projects.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {[1, 2, 3, 4].map((img) => (
            <div
              key={img}
              className="w-48 h-48 bg-gray-200 rounded-3xl flex items-center justify-center text-gray-600"
            >
              Image
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 py-16 bg-orange-100 text-center">
        <h2 className="text-3xl mb-3">Stay informed with all our latest news!</h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-6">
          Subscribe to our updates to stay informed about important news, events,
          and announcements from the daycare. We're always happy to keep you in the loop!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button className="bg-pink-400 text-white px-6 py-2 rounded-md hover:bg-pink-500 transition">
            Subscribe now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
