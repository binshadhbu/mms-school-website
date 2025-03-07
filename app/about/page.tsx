import React from "react";
import { TimelineDemo } from "./TimeLine";

const About = () => {
  return (
    <div className="bg-gray-100">
      <section className="bg-gray-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">About Our School</h1>
        <p className="mt-4 text-lg">
          A place of excellence in education and values
        </p>
      </section>

      {/* Mission, Vision, Values */}
      <section className=" mx-auto py-16 px-6  ">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Mission, Vision & Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8 ">
          <div className="bg-white p-6 shadow-xl rounded-xl">
            <h3 className="text-xl font-bold">Mission</h3>
            <p className="mt-2 text-gray-700">
              Our mission at MMS UPS Educational Campus is to provide a holistic
              education that nurtures academic excellence, character
              development, and lifelong learning. We strive to create a safe and
              inspiring environment where students develop critical thinking,
              moral values, and modern skills to thrive in an ever-evolving
              world. Through dedicated teaching and strong mentorship, we
              empower students to become responsible, confident, and
              compassionate individuals who contribute positively to society.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Vision</h3>
            <p className="mt-2 text-gray-700">
              At MMS UPS Educational Campus, we envision a future where every
              student is empowered with knowledge, skills, and values to excel
              in life and contribute meaningfully to society. We aspire to be a
              center of academic excellence, fostering innovation, leadership,
              and a lifelong passion for learning. Through a nurturing and
              inclusive environment, we aim to shape responsible global citizens
              who uphold integrity, embrace diversity, and drive positive change
              in the world.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Values</h3>
            <p className="mt-2 text-gray-700">
              At MMS UPS Educational Campus, we uphold the values of excellence,
              integrity, respect, and responsibility, fostering a culture of
              lifelong learning and innovation. We believe in nurturing
              curiosity, adaptability, and strong moral principles, ensuring
              that our students grow into compassionate, confident, and socially
              responsible individuals who contribute positively to the world.
            </p>
          </div>
        </div>
      </section>

     
      <TimelineDemo />

      {/* Parents Association */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Parents Association
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">[Parent&aposs Name]</h3>
            <p className="text-gray-700">
              Testimonial or involvement details
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">[Parent&aposs Name]</h3>
            <p className="text-gray-700">
              Testimonial or involvement details
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;
