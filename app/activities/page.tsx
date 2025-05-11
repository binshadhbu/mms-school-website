import Head from 'next/head';
import React from 'react'
import Heading from "@/components/Header/Heading";


const activities = [
  {
    title: "Hiking",
    description: "Join our hiking club to explore the mountains and enjoy breathtaking views. Our experienced guides will lead you through scenic trails, ensuring a safe and enjoyable experience. We organize weekly hikes to various locations, catering to all skill levels. Whether you're a beginner or an experienced hiker, you'll find a suitable trail. Don't forget to bring your camera to capture the stunning landscapes.",
    imageUrl: "https://example.com/hiking.jpg"
  },
  {
    title: "Swimming",
    description: "Dive into the pool and enjoy a refreshing swim with our swimming club. We offer swimming sessions for all ages and skill levels, from beginners to advanced swimmers. Our certified instructors provide personalized coaching to help you improve your technique. Join us for regular swim meets and competitions, or simply enjoy a leisurely swim. Our facilities include a heated pool, locker rooms, and a relaxing lounge area.",
    imageUrl: "https://example.com/swimming.jpg"
  },
  {
    title: "Cycling",
    description: "Ride through scenic routes and enjoy the outdoors with our cycling club. We organize group rides every weekend, exploring different trails and routes. Our club caters to cyclists of all levels, from casual riders to competitive racers. You'll have the opportunity to participate in cycling events and races, as well as social gatherings and workshops. Join us to stay fit, make new friends, and discover new places on two wheels.",
    imageUrl: "https://example.com/cycling.jpg"
  }
];

const page = () => {
  return (
    <div>
      <div className='flex justify-center'><Heading title="Actualization of Talent" /></div>
        


    </div>
  )
}

export default page
