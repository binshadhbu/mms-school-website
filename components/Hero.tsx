"use client"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import "./image-slider.css"
import { useState, useEffect } from "react"
import getImages from "@/lib/home/getImages"
import { IconArrowNarrowRight,IconArrowNarrowLeft } from "@tabler/icons-react";

type ImageSliderProps = {
  images: {
    url: string
    alt: string
  }[]
}

export function Hero() {
  const [imageIndex, setImageIndex] = useState(0)
  const [images, setImages] = useState<string[]>([]);
  // const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const imageData = await getImages();
      setImages(imageData);
      // console.log(images);
    };
    fetchImages();
  }, []);

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("showNextImage called");
      showNextImage();
    }, 3000);
    return () => clearInterval(interval);
  },);

  return (
    <section
      aria-label="Image Slider"
      className="w-full h-[30rem] md:h-[46rem] relative overflow-hidden"
    >
      {/* <img src={images[imageIndex]} alt="" /> */}
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div className="w-full h-full relative overflow-hidden flex">
        {images.map((url, index) => (
          <img
            key={url}
            src={url}
            alt="images"
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn font-bold"
        style={{ left: 0, width: "3.5rem" }}
        aria-label="View Previous Image"
      >
        <IconArrowNarrowLeft className="text-neutral-600 dark:text-neutral-200" style={{ width: "3rem", height: "2.5rem" }} />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200"  style={{ width: "3rem", height: "2.5rem" }} />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        
      </div>
      <div id="after-image-slider-controls" />
    </section>
  )
}