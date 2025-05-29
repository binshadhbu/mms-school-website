"use client"
import React from 'react'
import { useScroll, motion, useTransform } from 'framer-motion';
import Image from 'next/image';
import { lato } from "@/fonts";
import { useEffect, useState, useRef } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import get_gallery from '@/lib/Gallery/getGallery';


function urlForImage(image: string) {
  return image;
}

const Page = () => {

  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<{
    left: string[],
    right: string[],
    middle: string[],
  }>({
    left: [],
    right: [],
    middle: [],
  })

  useEffect(() => {

    const fetchImages = async () => {
      setLoading(true);
      try {
        // const images: { image: SanityImage }[] = await client.fetch(`*[_type=="gallery_images"]`);

        const data = await get_gallery({ link: "galleries" });
        const sampleImages: { link: any }[] = data.map((item, index) => {
          return { link: item };
        })
        console.log("formatted images",sampleImages);
        // console.log("correct images",test);
        // setSampleImages(formatted_images);

        const numImages = sampleImages.length;
        const leftRightImageCount = Math.floor(numImages / 3);

        setImages({
          left: sampleImages.map((image: { link: string; }) => urlForImage(image.link)),
          right: [
            ...sampleImages.slice(leftRightImageCount).map((image: { link: string; }) => {
              console.log("right", image.link);
              return urlForImage(image.link);
            }),
            ...sampleImages.slice(0, leftRightImageCount).map((image: { link: string; }) => urlForImage(image.link))
          ],
          middle: sampleImages.map((image: { link: string; }) => urlForImage(image.link))
        })
        // console.log("left", images);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    // fetchGallery();
    fetchImages();
  }, []);



  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-91.67%"]);
  const invertedY = useTransform(scrollYProgress, [0, 1], ['-100%', '0.1%'])

  return (
    <div className="h-[2000dvh] w-full relative">
      {
        loading ?
          <div className="w-full h-screen flex gap-1 justify-center items-center">
            <h1 className="text-secondary text-2xl">Loading</h1>
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className={`w-1 h-1 bg-primary rounded-full`}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
          :
          <div className="w-full h-screen overflow-hidden scroll-smooth sticky top-0 grid grid-cols-1 md:grid-cols-3 bg-gray-900" style={{
            scrollBehavior: 'smooth',
          }}
          >
            <motion.div className="p-2 hidden md:flex gap-2 items-center justify-center flex-col" style={{ y: invertedY }}>
              {
                images.left.map((image: string | StaticImport, index: React.Key | null | undefined) => (
                  <Image src={image} alt="gallery image" className="w-full" height={1080} width={1620} key={index} />
                ))
              }
            </motion.div>
            <motion.div className="pt-16 p-2  flex gap-2 items-center justify-center flex-col" style={{ y }}>
              <h1 className={`text-4xl ${lato.className} font-bold py-4 text-gray-100`}> Campus Gallery </h1>
              {
                images.middle.map((image: string | StaticImport, index: React.Key | null | undefined) => (
                  <Image src={image} alt="image" className="w-full" height={1080} width={1620} key={index} />
                ))
              }
            </motion.div>
            <motion.div className="p-2 hidden md:flex gap-2 items-center justify-center flex-col" style={{ y: invertedY }}>
              {
                images.right.map((image: string | StaticImport, index: React.Key | null | undefined) => (
                  <Image src={image} alt="image" className="w-full" height={1080} width={1620} key={index} />
                ))
              }
            </motion.div>

          </div>
      }
    </div>
  );
}

export default Page;

