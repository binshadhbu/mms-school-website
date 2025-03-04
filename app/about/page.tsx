import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">

      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">About Our School</h1>
        <p className="mt-4 text-lg">A place of excellence in education and values</p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Mission, Vision & Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Mission</h3>
            <p className="mt-2 text-gray-700">[Placeholder for mission statement]</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Vision</h3>
            <p className="mt-2 text-gray-700">[Placeholder for vision statement]</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Values</h3>
            <p className="mt-2 text-gray-700">[Placeholder for values statement]</p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-gray-200 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Our History</h2>
        <div className="max-w-4xl mx-auto">
          <ul className="border-l-4 border-blue-600 pl-6">
            <li className="mb-6">
              <span className="block font-bold">[Year]</span>
              <p className="text-gray-700">[Placeholder for school history event]</p>
            </li>
            <li className="mb-6">
              <span className="block font-bold">[Year]</span>
              <p className="text-gray-700">[Placeholder for school history event]</p>
            </li>
            {/* Add more timeline events as needed */}
          </ul>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Faculty</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold">[Faculty Name]</h3>
            <p className="text-gray-500">[Faculty Position]</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold">[Faculty Name]</h3>
            <p className="text-gray-500">[Faculty Position]</p>
          </div>
          {/* Add more faculty cards as needed */}
        </div>
      </section>

      {/* Strength of School & Faculty */}
      <section className="bg-gray-200 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Strength</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">[Number]</h3>
            <p className="text-gray-500">Total Students</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">[Number]</h3>
            <p className="text-gray-500">Total Faculty</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">[Number]</h3>
            <p className="text-gray-500">Years of Excellence</p>
          </div>
        </div>
      </section>

      {/* Parents Association */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Parents Association</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">[Parent's Name]</h3>
            <p className="text-gray-700">"[Testimonial or involvement details]"</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">[Parent's Name]</h3>
            <p className="text-gray-700">"[Testimonial or involvement details]"</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-semibold">Join Our Community</h2>
        <p className="mt-4 text-lg">Be a part of our journey to excellence.</p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
