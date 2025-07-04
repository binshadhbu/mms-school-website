import React from "react";
import Heading from "@/components/Header/Heading";
import { TimelineDemo } from "../about/TimeLine";
import Message from "@/components/message";


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

                <div className="grid md:grid-cols-1 gap-8 place-items-center">
                    <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col md:flex-row items-start md:w-[85%] ">
                        <div className="md:w-1/3 w-full mb-4 md:mb-0 flex-shrink-0">
                            <Heading title="Mission" />
                        </div>
                        <div className="md:w-2/3 w-full">
                            <p className="mt-2 text-gray-700">
                                Our mission at MMS UPS Educational Campus is to provide a holistic
                                education that nurtures academic excellence, character
                                development, and lifelong learning. We strive to create a safe and
                                inspiring environment where students develop critical thinking,
                                moral values, and modern skills to thrive in an ever-evolving
                                world. Through dedicated teaching and strong mentorship, we
                                empower students to become responsible, confident, and
                                compassionate individuals who contribute positively to society.
                                <br /><br />
                                We are committed to fostering a culture of curiosity and innovation,
                                encouraging our students to explore new ideas, embrace challenges,
                                and pursue their passions with determination. Our educators work
                                collaboratively to design engaging curricula and co-curricular
                                activities that promote intellectual growth, creativity, and
                                teamwork. By integrating technology and real-world experiences into
                                our teaching methods, we ensure that our students are well-prepared
                                for the demands of the 21st century.
                               
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col md:flex-row items-start md:w-[85%]">
                        <div className="md:w-1/3 w-full mb-4 md:mb-0 flex-shrink-0">
                            <Heading title="Vision" />
                        </div>
                        <div className="md:w-2/3 w-full">
                            <p className="mt-2 text-gray-700">
                                At MMS UPS Educational Campus, we envision a future where every
                                student is empowered with knowledge, skills, and values to excel
                                in life and contribute meaningfully to society. We aspire to be a
                                center of academic excellence, fostering innovation, leadership,
                                and a lifelong passion for learning. Through a nurturing and
                                inclusive environment, we aim to shape responsible global citizens
                                who uphold integrity, embrace diversity, and drive positive change
                                in the world.
                                <br /><br />
                                Our vision extends beyond academic achievement; we are dedicated to
                                cultivating a community where students are encouraged to dream big,
                                think critically, and act with compassion. We believe in the power
                                of education to transform lives and communities, and we are
                                committed to providing opportunities for every learner to discover
                                their unique strengths and talents. By embracing new technologies,
                                fostering creativity, and promoting collaboration, we prepare our
                                students to navigate the complexities of a rapidly changing world.
                                
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col md:flex-row items-start md:w-[85%]">
                        
                        <div className="md:w-1/3 w-full mb-4 md:mb-0 flex-shrink-0">
                            <Heading title="Values" />
                        </div>
                        <div className="md:w-2/3 w-full">
                            <p className="mt-2 text-gray-700">
                                At MMS UPS Educational Campus, we envision a future where every
                                student is empowered with knowledge, skills, and values to excel
                                in life and contribute meaningfully to society. We aspire to be a
                                center of academic excellence, fostering innovation, leadership,
                                and a lifelong passion for learning. Through a nurturing and
                                inclusive environment, we aim to shape responsible global citizens
                                who uphold integrity, embrace diversity, and drive positive change
                                in the world.
                                <br /><br />
                                Our core values are the foundation of everything we do. We believe in
                                integrity, honesty, and respect for all individuals, fostering a culture
                                where every student feels valued and supported. We encourage curiosity,
                                creativity, and a growth mindset, inspiring our students to pursue
                                excellence in academics, sports, arts, and community service. Teamwork
                                and collaboration are at the heart of our approach, as we believe that
                                working together leads to greater achievements and stronger relationships.
                                
                            </p>
                    </div>
                    </div>
                </div>
            </section>

            <Message link='message-manager' />

            <TimelineDemo />
        </div>
    );
};

export default About;
