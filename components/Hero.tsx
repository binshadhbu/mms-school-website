"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider"
import { ImageSlider } from "@/types/frontend";
import getImages from "@/lib/home/getImages";
import EmblaCarousel from "@/components/slider/EmblaCarousel";
import { useState,useEffect } from "react";


export function Hero() {
  
  const imgs=[ "http://127.0.0.1:1337/uploads/hero2_f02cd1be5b.jpeg", "http://127.0.0.1:1337/uploads/hero4_97eba91f72.jpg", "http://127.0.0.1:1337/uploads/hero_be65ff2cff.jpeg", "http://127.0.0.1:1337/uploads/hero3_56d596cf11.jpeg" ];
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageData = await getImages({ link: "slding-image" });
      setImages(imageData);
      // console.log(images);
    };
    fetchImages();
  }, []);

  console.log("images",images);
  console.log("imgs",imgs);


  return (
  
    <ImagesSlider className="h-[40rem] mb-10" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 2,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          MMS Educational Campus <br /> 100+ Years of Excellence
        </motion.p>
        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  );
}
